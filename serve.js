var net = require('net');
var porta = 2051
var host = '192.168.0.200'
var servidor = net.createServer()

servidor.listen(porta,function(socket){
    console.log("servidor on...")
  // socket.write('99;42;0;3;1;Conectado ca;2000\n')
    
})
//socket.write('99;42;0;3;1;Conectado ca;2000\n')
servidor.connections('connection',function(socket){
    console.log('nova conexao')
    socket.write('99;42;0;3;3;Conectado ca;2000;\n')
    servidor.on('data',function(data){
        socket.write('99;42;0;3;3;Conectado ca;2000;\n')
        console.log('recebido: ' + data)
    })
})