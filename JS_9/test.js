let favoriteFruitsArray = ['Apple', 'Orange', 'Grape'];
let favoriteFruitsString = '';

for (
	let i = 1; // потому что индексы массива начинаются с 0
	i < favoriteFruitsArray.length+1; // код внутри цикла будет выполняться пока i меньше длинны массива фруктов
	i++

) {
	// с помощью i мы можем обратиться к массиву фруктов
	// favoriteFruitsArray[i] в первой итерации будет равен первому элементу массива - 'Apple'
	// favoriteFruitsArray[i] во второй итерации будет равен второму элементу массива - 'Orange'
	// favoriteFruitsArray[i] в третьей итерации будет равен третьему элементу массива = 'Grape'
	//favoriteFruitsString += favoriteFruitsArray[i] + ' '; // складываем в строку любимые фрукты через пробел
    console.log(i)
    favoriteFruitsArray.push(i)
}

//alert(`My favorite fruits are ${favoriteFruitsString}`) // My favorite fruits are Apple Orange Grape