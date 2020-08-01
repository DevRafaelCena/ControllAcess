const SerialPort = require('serialport')

const Readline = SerialPort.parsers.Readline;

var port = new SerialPort("COM6", {
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
})

function LiberaHorario() {
  port.write('0;1;1;\r')
}

function LiberaAntHorario() {
  port.write('0;2;1;\r')
}

function CancelaHorario() {
  port.write('0;1;0;\r')
}

function CancelaAntHorario() {
  port.write('0;2;0;\r')
}

const parser = port.pipe(new Readline({
  delimiter: '\r'
}));

LiberaHorario()
parser.on('data', function (data) {
  var bits = data;
  setTimeout(function () {
    if (bits === "0;1;1;") {
      CancelaHorario()
    }
  }, 3000)
  console.log(bits);
});