$('.error-page').hide(0);

// $('.login-button , .no-access').click(function(){
//   $('.login').slideUp(500);
//   $('.error-page').slideDown(1000);
// });

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
  $('#un').focus();
});

$('#game-name').html(window.config.login.gameName);
if(window.config.login.backgroundColor != "")$('.login-form').css('background',window.config.login.backgroundColor);
$('.login').show();
$('#un').focus();

$('.login-button').click((e)=>{
  e.preventDefault();
  if($('#un').val()=="" || $('#pw').val()=="")return;
  window.socket.login({
    name:$('#un').val(),
    pw:$('#pw').val()
  });
  $('.login').slideUp(500);
  $('#un').val('');
  $('#pw').val('');
  if(window.config.releasePointerLockOnUI){
          let c = document.getElementsByTagName('canvas')[0];
          c.requestPointerLock();
        }
});

window.login.fail = msg=>{
  $('.try-again').html(msg);
  $('.error-page').slideDown(1000);
}

$('#pw').on('keydown',e=>{
  if(e.keyCode == 13 && $('#un').val() != '' && $('#pw').val() != ''){
   window.socket.login({
      name:$('#un').val(),
      pw:$('#pw').val()
    });
    $('.login').slideUp(500);
    $('#un').val('');
    $('#pw').val('');
    if(window.config.releasePointerLockOnUI){
          let c = document.getElementsByTagName('canvas')[0];
          c.requestPointerLock();
        }
  }
});