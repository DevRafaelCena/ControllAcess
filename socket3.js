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
      ip: "192.168.0.1",
      porta: '2050',
      nomeColetor: "Entrada02",
      status: "0"
   }
]

function entrada(dato){
   dato = dato.split(';');
    let arrayparcial = []
    console.log("original : " + dato)
   

   
    if(dato.indexOf('\r') ==-1) {
       // console.log("não achou. aguardar proximo")
        arrayparcial = dato
        console.log("array parcial " + arrayparcial)
    
    }
    else{
        if(arrayparcial != ['']){ 
        let array = []
        for(let i=0;i<arrayparcial.length; i++){
            array.push(arrayparcial[i])
        }
        for(let i=0;i<dato.length; i++){
            array.push(dato[i])
        }
    
        arrayparcial = []
        console.log("array jutnado: " + array)
    }else {
        console.log("veio completo " + dato)
    }}
}

//variavel armazena quantidades de conexões 
var clientes = []


//laço percorre os coletores e cria conexão pra cada um
for (let i = 0; i < coletores.length; i++) {
   //executa o processo pelo domain para tratar as conexão falhas
   d.run(() => {
    

      //popula o array de cliente e cria cada socket conforme quantidade de coletores
      clientes.push(new net.Socket())
      clientes[i].setEncoding('utf8')

      //abre o socket com as informações dos coletores
      clientes[i].connect(2051, coletores[i].ip, function () {
         //trata os erros de conexoes 
         clientes[i].on('error', (err) => {
            throw err;
         });

         //caso nao tenha erro faz o que pede abaixo
         console.log("conectado ao" + coletores[i].nomeColetor);
         coletores[i].status = "1"
         clientes[i].write('99;1;0;3;3;Conectado;ao Servidor;2000;\r');
   
         console.log(coletores)

      });

      //recebe os dados em data e executa a logica.
      clientes[i].on('data', function (data) {
         console.log("Recebido pelo coletor" + coletores[i].nomeColetor)
         console.log('valor original: ' + data);

         entrada(data)
         // console.log(client)

         clientes[i].write('99;1;0;3;30;Sofia;fedida;E;5000;\r');
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