const domain = require('domain');
const net = require('net');

const d = domain.create();

//tratamento do erro de conexao
d.on('error', (domainErr) => {
   console.log("Erro na tentativa de conexão:  Erro : " + domainErr.message);

});

//lista dos coletores
var coletores = [{
      numero: 2,
      ip: "192.168.0.39",
      porta: '2050',
      nomeColetor: "Entrada02",
      status: "0"
   },
   {
      numero: 3,
      ip: "localhost",
      porta: '2050',
      nomeColetor: "Entrada01",
      status: "0"
   }
]


//variavel armazena quantidades de conexões 
var clientes = []


//laço percorre os coletores e cria conexão pra cada um
for (let i = 0; i < coletores.length; i++) {
   //executa o processo pelo domain para tratar as conexão falhas
   d.run(() => {

      //popula o array de cliente e cria cada socket conforme quantidade de coletores
      clientes.push(new net.Socket())

      //abre o socket com as informações dos coletores
      clientes[i].connect(2050, coletores[i].ip, function () {
         //trata os erros de conexoes 
         clientes[i].on('error', (err) => {
            throw err;
         });

         //caso nao tenha erro faz o que pede abaixo
         console.log("conectado ao" + coletores[i].nomeColetor);
         coletores[i].status = "1"
         console.log(coletores)

      });

      //recebe os dados em data e executa a logica.
      clientes[i].on('data', function (data) {
         console.log("Recebido pelo coletor" + coletores[i].nomeColetor)
         console.log('Received: ' + data);
         // console.log(client)

         clientes[i].write('3;100;00125500;E;L;ACESSO;LIBERADO!;5;\r');
      });

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