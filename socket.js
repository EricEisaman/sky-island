const db = require('./db.js');
const uuidv4 = require('uuid/v4');
module.exports = (io)=>{
    var players = {};
    let intervalId = setInterval(()=>{
          io.emit('update-players',players);
        },100);
    io.on('connection', function(socket){
        socket.ip = socket.handshake.headers['x-forwarded-for'];
        //Uncomment second part below if storing to Firebase
        socket.ip = socket.ip.split(',')[0]//.replace(/\./g, "_");
        console.log(`New connection with socket id: ${socket.id}.`);
        socket.auth = false;
        socket.on('new-player',function(shared_state_data){ 
          if(!socket.auth)return;
          console.log('sending players already here');
          console.log(players);
          socket.emit('players-already-here',players);
          console.log("New player has state:",shared_state_data);
          // Add the new player to the object
          shared_state_data.name = socket.name;
          players[socket.id] = shared_state_data;
          let id = socket.id; 
          io.emit('new-player',{"id":id,"name":socket.name,"data":shared_state_data});
        })  
        socket.on('disconnect',function(){
          // Delete from object on disconnect
          if(socket.auth){
           console.log(`Player named ${socket.name} disconnected. Removing ${socket.id}`);
           delete players[socket.id]; 
           socket.broadcast.emit('remove-player',socket.id);
           db.serialize(function() {
                 db.run("UPDATE Users SET isPlaying = 0 WHERE id = ?",socket.dbid);
               });
          }else{
           console.log('Unauthorized connection has disconnected',socket.id);
          }    
        }) 
        // Online players' shared data throughput
        socket.on('send-update',function(data){
          if(players[socket.id] == null || !socket.auth) return;
          players[socket.id].position = data.position; 
          players[socket.id].rotation = data.rotation;
          players[socket.id].faceIndex = data.faceIndex;
          players[socket.id].thrust = data.thrust;
          //console.log(data);
        })  
        socket.on('msg',function(data){
          if(socket.auth){
            socket.broadcast.emit('msg',{id:socket.id,msg:data.msg});
          }
        });
        socket.on('arg',function(data){
          socket.ipLocal = data;
          //console.log(`Client Info:\nPublic IP: ${socket.ip}  Local IP: ${socket.ipLocal}`);
        }); 
        socket.on('login',function(data){
          console.log(`User attempting to login with name: ${data.name} and password: ${data.pw}`);
          db.serialize(function() {  
          db.get("SELECT * FROM Users WHERE pw=? AND name=?",[data.pw,data.name], function(err, username) {
              if(username){
               if(username.isPlaying) {
                 socket.emit('login-results',{success:false,name:"cheater",msg:"You are already logged in!"});
                 console.log(`${username.name} has provided valid login credentials but is already playing. :(`);
                 return;
               }
               console.log(`${username.name} has provided valid login credentials.`);
               socket.auth = true;
               socket.name = data.name;
               db.serialize(function() {
                 db.run("UPDATE Users SET isPlaying = 1 WHERE id = ?",username.id);
               });
               socket.dbid = username.id;
               socket.emit('login-results',{success:true,name:data.name});
              }
              else{
               console.log('Failed login attempt.');
               socket.emit('login-results',{success:false,msg:"Invalid credentials!"});
               setTimeout(()=>{
                 if(!socket.auth)
                 socket.disconnect(true)
               },30000);
              }
            });
          });   
        });   
        socket.on('add-user',function(data){
          if(data.key == process.env.ADMIN_KEY){
            db.serialize(function() {
              let uid = uuidv4()+'';
              db.run("INSERT INTO Users VALUES (?,?,?,0)",[uid,data.name,data.pw],err=>{
                if(err){
                 console.log("Error adding user to database");
                 console.log(err.message);
                }else{
                 console.log("User successfully added to database");
                }
              }); 
            });
          } 
        }); 
     })
  } 
  