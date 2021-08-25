/*ex. 1
una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y 
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false

var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
} */
validarProp=(objeto, propiedad) => {

    for (let key in objeto) {
        if( propiedad == key ){

            return true
        }
      }
      return false

}

var car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}

console.log(validarProp(car, 'model'))