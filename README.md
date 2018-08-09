 ![sky island](https://cdn.glitch.com/97457b24-474e-42eb-9358-c8bc7bab1d9f%2Fsky-island.gif?1533846874181) 
# Sky Island 
____
____

## **Remixing Instructions**



Set the **ADMIN_KEY** in .env. Change the scene's environment preset in the **index.html.**  Create your own **.glb** models with <a href="http://pixologic.com/sculptris/" no-opener no-referer>**Sculptris**</a> and <a href="https://www.blender.org/download/" no-opener no-referer>**Blender**</a>.

In the **client-config.js** set the values for:
  - game name shown at login
  - login form background color
  - avatar array of face image URLs ( use .png with transparent background )
  - avatar color used for button background 
  - the text color for the messages
  - sound file URL for playerJoined
  - sound file URL for playerLeft
  - BGM songs
  - custom key bindings/behaviors
  - sythesized voice settings
  
Explore the different voice names by listing them in the client console with:
```js
printVoices()
```
![names](https://cdn.glitch.com/8cdffa44-0009-4d0b-89c7-731fef3fef0b%2Fnames.png?1533445633949)
  
In the client console add users with the following pattern:
![add user](https://cdn.glitch.com/8cdffa44-0009-4d0b-89c7-731fef3fef0b%2Fadduser.png?1533445801204)

If you forget the Users you added, open the server console and reboot the server by adding a meaningless space in any server file.  The Users will be printed in the server console.
  
  ____

## **How to Play**

Move with **WASD** and **ARROW** keys.  Jump with the **SPACE** key.
Toggle music mute with **M** key. Play next song with **P** key. 

![UI](https://cdn.glitch.com/8cdffa44-0009-4d0b-89c7-731fef3fef0b%2FmessageAndAvatar.png?1533445976674)

Toggle the **Message and Avatar UI** with the **EQUALS** key. **Tab** your way through the UI elements. Once you have finished typing your message or selecting a new avatar, hit **ENTER** to submit.

Note: **Users cannot be logged in more than once simultaneously!**


Pressing the **F** key or clicking the **VR Headset Icon** will take you to fullscreen mode.  Note: in fullscreen mode only movement keys are enabled.  Press the **ESC** key to exit fullscreen mode. 

<a href="https://sky-island.glitch.me/" no-opener no-referer>**LIVE DEMO**</a>

____



**Screenshot**

![App Screen2](https://cdn.glitch.com/97457b24-474e-42eb-9358-c8bc7bab1d9f%2Fapp-screen.gif?1533847350291)

**Environment Settings**  ( index.html )

![Environment](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fenvironment.png?1532871874928)

![Environement Options](https://github.com/feiss/aframe-environment-component/raw/master/assets/aframeenvironment.gif?raw=true)

**Sculptris for Easy Creation of Basic Model**

![Sculptris](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fsculptris.png?1532961951688)

**Blender Bones Animation**

![Blender](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fblender.png?1532961633005)

**Blender Export as .glb**  

( plugin for Blender v2.79 <a href="https://github.com/KhronosGroup/glTF-Blender-Exporter" no-opener no-referer>here</a>. Note: Blender v2.80 will have built-in plugin )
![.glb export](https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fexport.png?1532962417545)

## Special Thanks

I would like to extend special thanks to <a href="https://sketchfab.com/ZOSK" no-opener no-referer>**ZOSK Studios**</a> for the creation of the sky island model used in this project.