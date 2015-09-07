

alert("Hello RefactorU Peeps!!");

console.log(10 % 3)

var result = 10/3

console.log(result)  //this is not a LITERAL number. This is a name that is a descriptor. Choosing good variable names!

console.log('\n\n')

console.log(typeof 'hello');

var greeting = "hello " + "world"

console.log (greeting)

var eleven = '1' + '1'

console.log (eleven)

var math = "1 + 1"

console.log(math)

var coercion = 1 + '1'

console.log(coercion) //coerces the number into a string to perform concatenation. Javascript will not coerce strings into numbers



console.log (greeting.length) //dot notation used to acces a property by name

console.log ('hello world'.length)

var Hilen = 'hello'.length
console.log (Hilen)
console.log(typeof 'hello')

console.log(greeting[0])

console.log(greeting[greeting.length -1])

//convert string into a number

console.log(typeof +'20')

console.log(!!true) 

console.log(!(10 > 3)) //greater than takes 2 numbers, prdouces a boolean, in this case: true.

console.log(5 <= 5)

console.log(10 === 9) //strict equality: check if they are the exact same value. 

console.log(10 == 10) //coercive equality: first check if same type of value, then compare normally. Otherwise coerce same type of values

console.log('10' == 10) //covert the number to string
console.log(null===undefined)

if (true)
{
	console.log(true)
}
else
{
	console.log( )
}

var canDrink
var country	= 'mexico'

var age = prompt ("How old are you?")
if (+age >= 21) {
	canDrink = true
}

else if (((country === 'Mexico') || country === 'mexico') && (age >= 18)) {

}
else
{
	canDrink = false
}

	console.log('Will you be served?' + canDrink)
	console.log ( (true + true +true ) * (true + true) * false) //booleans can coerce to 0 and 1


var myArray = []   
// empty array, above

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log(days.length)

// there are seven elements in my days array--7 items.

console.log(days[0])

var greeting = 'hello'
// greeting[0] = 'H' this doesnt do anyting because strings are immutable

days[0] = 'Mondayyyyyy........'


days.push('RaphaelDay')  //this push adds this value to the end of the array

days.pop() //removes the last item from the array
days.pop() //removes next last (penultimate) from array

console.log(days)

var start = 0

start++
start = start + 1 //this is exactly the same as the above line
start += 3
start *= 2


// console.log(start++)
console.log(start)

for (var i = 0; i < 10; i++){
	console.log(i)
}

for (var i = 0; i < days.length; i++){

	if ( days[i] === 'Saturday') {
		alert('Party')
	}
	else if (days [i] === 'Sunday' ) {
		alert('Take a nap...')
	}
	else
		alert('work work work...')
}


