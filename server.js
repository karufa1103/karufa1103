//server

var ws = require("websocket.io");
ver WS_PORT = 8888; //socket poot number

//Websocket server start
var server = ws.listen(WS_PORT,function(){
    console.log("Sever Start Port" = +WS_PORT);
});
 //criant 接続
 server.on('connection',function(socket){
     socket.on('message',function(msg){
         console.log("message:"+msg);

         // all criant view
         server.clients.forEach(function(cliant){
             cliant.send(msg);
         });
     });
     socket.on('error',function(err){
         console.log('error:'+err);
     });
 });
