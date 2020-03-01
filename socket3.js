var net = require("net")


var socket = net.connect({port:2050},function(){

    socket.setEncoding('utf8')
  //  socket.write('1;500;LINHA1;LINHA2;2;<CR>');
    socket.emit('1;500;LINHA1;LINHA2;2;<CR>');

});

socket.setEncoding('utf8')
socket.on('data',function(data){
//socket.push('1;500;LINHA1;LINHA2;')

socket.write('1;500;LINHA1;LINHA2;2;<CR>');
//socket.emit('1;500;LINHA1;LINHA2;2;');
    console.log(data)
   // socket.destroy();

});

socket.on('end',function(){
    console.log("desconectou")
})