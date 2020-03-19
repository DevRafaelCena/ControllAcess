var net = require('net');
 var coletores = [{numero: 2, ip: "192.168.0.39", porta: '2050', nomeColetor: "Entrada02"},
 {numero: 3, ip: "192.168.0.15", porta: '2050', nomeColetor: "Entrada01"}
 ]

var clientes =[]



for(let i=0;i<coletores.length;i++){
   clientes.push(new net.Socket())
   clientes[i].connect(2050, coletores[i].ip, function() {
      
      console.log("conectado ao" +coletores[i].nomeColetor); 
   
   });
   
   clientes[i].on('data', function(data) {
      console.log("Recebido pelo coletor" + i)
      console.log('Received: ' + data);
     // console.log(client)
     
      clientes[i].write('3;100;00125500;E;L;ACESSO;LIBERADO!;5;\r');
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
