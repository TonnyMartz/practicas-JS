// Escribe una función que revierta el siguiente array arr=[1,2,3,4]

function invertir(a){

    aux=[]

    for(var i=0; i<a.length; i++){

        aux[(a.length-1)-i]=a[i]
    }
    
    console.log(aux)
}

var arr=[1,2,3,4]
invertir(arr)