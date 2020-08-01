var SerialPort = require('serialport');
var port = new SerialPort("COM9", {
    baudRate: 9600
  }).setEncoding('utf8');;
  var arrayparcial = []
  var array =[]

  function entrada(dato){
    
    console.log("original : " + dato)
    if(dato == ";"){
      return
    }
   // dato = dato.split(';');
  //  console.log("convertir em array" + datoArray)
   

   
    if(dato.indexOf('\r') ==-1) {
       // console.log("não achou. aguardar proximo")
        dato = dato.split(';');
        for(let i=0;i<dato.length; i++){
if(dato[i] === 0 || dato[i] >0) {
  array.push(arrayparcial[i])
}
if(dato[i] === '') {
  console.log("elemento vazio tirado" + dato[i])
 
}


        // array.push(arrayparcial[i]) 
      }

       // dato.splice(dato.indexOf(''), 1);
        arrayparcial = arrayparcial.concat(dato)
        console.log("array parcial " + arrayparcial)
    
    }
    else{
        if(arrayparcial != ['']){ 
      
        for(let i=0;i<arrayparcial.length; i++){
            array.push(arrayparcial[i])
        }
       
          dato = dato.split(';');
         
          for(let i=0;i<dato.length; i++){
            if(dato[i] >= 0 || dato[i] >0) {
              array.push(arrayparcial[i])
            }
            if(dato[i] === '') {
              console.log("elemento vazio tirado" + dato[i])
             
            }
          }

          //  array = arrayparcial.concat(dato)
        
    
        arrayparcial = []
        console.log("array jutnado: " + array)
var novoArray=[]
        for(let i=0;array.length<i;i++){
          if(array[i] === 0){
          novoArray.push(array[i])}
          if(array[i] > 0){
            novoArray.push(array[i])}
        }

       
        console.log("array jutnado: " + novoArray)
        
    }else {
        console.log("veio completo " + dato)
    }}
}

port.on('open', function() {
  port.write('0;1;1;\r', function(err) {
    if (err) {
      return console.log('O cabo usb não está conectado: ', err.message);
    }
    console.log('escrever');  port.write('0;1;1;\r')
  });
});

// open errors will be emitted as an error event
port.on('data', function (data) {
entrada(data)
  console.log('Data:', data)
})



  function lenghtData(value) {
    var result = value.lenght;    
    return result;
  }