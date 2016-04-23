
## Nodejs Chat
A simple Chat application based on node.js, socket.io, jQuery on frontend. 
It's a fork of https://github.com/nodecode/Node.js-Chat

### Requirements
npm - node package manager

### Featuring
 - simple Login by Username (no pwd)
 - public and also private messages
 - simple digital clock on top/left thanks to https://github.com/ticktoo/simpleClock

Server messages:
 - login/logoff user activity messages in the top left panel
 - Status messages for the user in the top panel 
 - Chat status message (READY,ERR,CHAT) left beside the status panel 

 - List of current online users in the lower left panel which are
 - marked green for user itself,
 - marked red for a user in a current PM conversation with (private message)

### Frontend  
HTML5, CSS3 Frontend design inspired by 'PubNub Channel Presence' 
https://github.com/pubnub/pubnub-chat-channel-presence
 - supports newer browsers
 - featuring *handlbars.js* template engine http://handlebarsjs.com/
 - testet locally on Firefox 45, Opera 36, Chrome 48 on Ubuntu 12

### General
this software is for experimental and maybe tutorial use only, not for professional or commercial use. Use it at your own risk! 

### Install:
`npm install`

### Running
after installing, run `node server.js` on console, then point your browser(s) on your machine to 
http://127.0.0.1:8080/ and have fun! of course, you can change the port in *config.json*.
the app makes heavy use of *console.log()* both server- and clientside. throw it off if you wish. to shutdown the server app, type [CTRL] C

### Usage
after login with a valid username, type text in the input bar, min. four char. click 'send' or hit Enter. for a PM, click a username in the lower left panel, which must appear red now. your messages go private now. to switch to public conversation, click again this user.

### Bugs/Issues
a few major issues to be fixed are:
 - fix chat input bar content when send/receive PM 
 - sort the	multilingualism german/english
 - filter text input
 - set some `settimeOut()` to avoid spamming
 - place some nice tooltips
 - etc..

