/*var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo 
al String "name" para que devuelva algo así:

["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]*/



myFunction = (arreglo) => {
objeto1 = arreglo[0]
objeto2 = arreglo[1]
objeto3 = arreglo[2]

c = objeto1.a + objeto1.b
d = objeto2.a + objeto2.b
e = objeto3.a + objeto3.b

let resul=[c+objeto1.name+'-=-'+d+objeto2.name+'-=-'+e+objeto1.name+'-=-']

console.log(resul)

}

var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}]

myFunction(simpleExercise)