var net = require('net');
 var coletores = [{numero: 1, ip: "192.168.0.1", porta: '2051', nomeColetor: "Entrada02"},
 {numero: 3, ip: "192.168.0.15", porta: '2050', nomeColetor: "Entrada01"}
 ]

var clientes =[]



for(let i=0;i<coletores.length;i++){
   clientes.push(new net.Socket())
   clientes[i].connect(2051, coletores[i].ip, function() {
      
      console.log("conectado ao" +coletores[i].nomeColetor); 
      clientes[i].write('99;1;0;3;3;Conectado;ao Servidor;2000;\r');
   
   });
   
   clientes[i].on('data', function(data) {
      console.log("Recebido pelo coletor" + i)
      console.log('Received: ' + data);
     // console.log(client)
     
     //libera?
      clientes[i].write('99;1;0;3;30;Sofia;fedida;E;5000;\r');
   });



}

 

/* var client = new net.Socket();

client.connect(2050, 'localhost', function() {
   console.log(client); 

}); */

//client.write('1;500;Conectado;ao servidor;2;\r') 



//client.on('close', function() {
   // client.destroy(); // kill client after server's response
	//console.log('Connection closed');
//});
