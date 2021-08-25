// 3. Escribe una funcion que compare dos arreglos y retorne true si son idénticos, retorna false en caso contrario.

function comparar(a,b){

  if(a.length==b.length){

  for( var i=0; i < a.length; i++){

    console.log(a[i], b[i])


    if(a[i] !== b[i]){

      return 'El arreglo no es igual'
      
      
    }

    
  }

}

else{

 return 'El arreglo no es igual'
}

return true

}

var arr=[1,2,3,4]

var arr1=[1,2,3]


console.log(comparar(arr,arr1))


