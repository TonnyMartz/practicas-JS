// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively


function segMayorMenor(a){

    for( var i=0; i< a.length; i++){

        for( var j=0; j<a.length; j++){

            if( a[j]>a[j+1] ){

                aux=a[j]
                a[j]=a[j+1]
                a[j+1]=aux

            }
        }
        
    }
    console.log(a)

    for(i=1; i<a.length; i++){

        if( a[0] != a[i]){
 
         console.log('El segundo menor es:'+a[i])
         break
        }
     } 

     for( i=a.length-2; i>=0; i--){

        if( a[a.length-1] != a[i] ){
        console.log('El segundo mayor es:'+a[i])
        break
        }
     }
}
            
var arr=[4,1,5,3,2,1,5]

segMayorMenor(arr)

