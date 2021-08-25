function compraphone(presupuesto, ahorrobanco){
     
    
    const preciotel = 1500
    const accesorios = 450
    const impuesto = 0.12

    var costo=0
    var i=0
    while(costo < presupuesto){

         costo += preciotel
         
    }

    if( costo < ahorrobanco ){

        costo+=accesorios
    }
    
    costo+=costo*impuesto
   

    if(costo <= ahorrobanco){

        console.log('Puedes pagar el total de: $'+costo)
    }

    else{
        
        console.log('El total de: $'+costo+' '+'supera tu limite de pago')
    
    }
}

var presu = 10000
var dinerobanco = 20000

compraphone(presu, dinerobanco)

var presu = 5000
var dinerobanco = 5500

compraphone(presu, dinerobanco)