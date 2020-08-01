//var SerialPort = require('serialport');

  var arrayparcial = []
  var array =[]


  //const Readline = require('@serialport/parser-readline')
  const SerialPort = require('serialport')
  const Readline = require('@serialport/parser-readline')
  //const port = new SerialPort('/dev/tty-usbserial1')
  var port = new SerialPort("COM9", {
    baudRate: 9600
  })
  
  const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
 
  parser.on('open', function() {
    parser.write('0;1;1;\r', function(err) {
      if (err) {
        return console.log('O cabo usb não está conectado: ', err.message);
      }
      console.log('escrever');  parser.write('0;1;1;\r')
    });
  });
  
  // open errors will be emitted as an error event
  parser.on('data', function (data) {
  //entrada(data)
    console.log('Data:', data)
  })