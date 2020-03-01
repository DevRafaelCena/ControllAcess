let array1 = [99,40,0,3,1,'completo',2000,'\r']
let array2 = [99,40,0,3,1,'parcial']
let array3 = [2000,'\r']
let arrayparcial = []


//let texto = data.toString();
 // let array =texto.split(';')
  let novoarray = []
  let segundoArray =[]
//client.write('99;40;0;3;1;BOM DIA;2000;\r')

//console.log(array2+array3)

function entrada(data){
   
    if(data.indexOf('\r') ==-1) {
       // console.log("não achou. aguardar proximo")
        arrayparcial = data 
    
    }
    else{
        if(arrayparcial != ''){ 
        let array = []
        for(let i=0;i<arrayparcial.length; i++){
            array.push(arrayparcial[i])
        }
        for(let i=0;i<data.length; i++){
            array.push(data[i])
        }
    
        arrayparcial = []
        console.log(array)
    }else {
        console.log(data)
    }}
}
entrada(array1)
entrada(array2)
entrada(array3)
entrada(array1)
entrada(array2)
entrada(array3)


	
