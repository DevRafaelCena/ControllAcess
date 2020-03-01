var net = require('net');
var coletores = [{numero: 1, ip: "localhost", porta: 2050, nomeColetor: "Entrada01"},
{numero: 2, ip: "localhost", porta: 2051, nomeColetor: "Entrada02"},
{numero: 3, ip: "localhost", porta: 2052, nomeColetor: "Entrada03"} ]

var client = new net.Socket();


client.connect(2050, 'localhost', function() {
   console.log(client);

});

client.write('1;500;Conectado;ao servidor;2;\r') 
client.on('data', function(data) {
    console.log('Received: ' + data);
    client.write('5;551;Rafael Cena;Acesso Liberado;2;\r');
 });

client.on('close', function() {
   // client.destroy(); // kill client after server's response
	console.log('Connection closed');
});
