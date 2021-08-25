// Hacer una funcion que regrese la suma de los elemtos de un arreglo

function sumArray(arreglo){

    var suma=0

   for(i=0; i<arreglo.length; i++){

    suma+=arreglo[i]
    
   }

   console.log('La suma total de los elementos del arreglo es: ' +suma)

}
var arr=[5,7,1,8,9,3]
sumArray(arr)