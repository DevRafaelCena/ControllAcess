var SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const Delimiter = require('@serialport/parser-delimiter')



var port = new SerialPort("COM6", {
    baudRate: 9600
  });

  //const parser = port.pipe(new Readline());

//port.write('0;1;1;\r');

//parser.on('data', console.log);
const Regex = SerialPort.parsers.Regex;

const parser = port.pipe(new Regex({ regex: /[\r\n]+/ }));
parser.on('open' , function (err){
 // console.log('Conexão aberta')
 parser.write('0;1;1;\r', function(err) {
    if (err) {
      return console.log('O cabo usb não está conectado: ', err.message);
    }
    console.log('escrever');  parser.write('0;1;1;\r')
  });
})

array = []
parser.on('data' ,function (data){
  parser.write('0;1;1;\r')
  console.log(data)


})

port.on('error',function(err){
  console.log(err)
}) 



