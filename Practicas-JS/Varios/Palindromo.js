/*Write a JavaScript function that checks whether a passed string is palindrome or not? 
	Note: A palindrome is word, phrase, or sequence that reads 	the same backward as forward*/


function palindromo(palabra){

    notspace = palabra.replace(/ /g, "" )
    

   reves=[]

   for(var i=0; i<notspace.length; i++){

    reves[(notspace.length-1)-i]=notspace[i]
}
    reves=reves.join('')
    

    if( notspace == reves ){

        console.log( 'La frase/palabra es palindroma' )
    }

    else{
        console.log( 'La frase/palabra NO es palindroma' )
    }
}

var word= 'perro'
palindromo(word)

var fras = 'anita lava la tina'

palindromo(fras)

