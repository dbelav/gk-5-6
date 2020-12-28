function changeMinMax(arr){
	let min = arr[0][0]
	let minIndex = 0
	let max = arr[0][0]
	let maxIndex = 0
	for(let i = 0; i < arr.length;i++){
		for(let j = 0; j < arr[i].length; j++){
			if(arr[i][j] < min){
				min = arr[i][j]
				minIndex = i
			}
			else if(arr[i][j] > max){
				max = arr[i][j]
				maxIndex = i

			}
		}
	}
	console.log(maxIndex,minIndex,max,min)
	arr.push(arr[maxIndex])
	arr.splice(maxIndex,1)
	arr.unshift(arr[minIndex])
	arr.splice(minIndex+1,1)
	console.log(arr)
}
changeMinMax([[ -10, 72 , -3 ], [ 2, 3, 5 ], [ -52, -6, 7 ]])
