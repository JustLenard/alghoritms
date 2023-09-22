export function maxArea(height: number[]): number {
	console.log('This is input', height)
	console.time()
	const values = getValues(height)
	console.log('This is values', values)

	const max = Math.max(...values)
	console.timeEnd()
	console.log('This is max', max)

	return max
}

function getValues(arr: number[], values: Set<number> = new Set()) {
	const maxHeight = arr[0]
	const length = arr.length

	let maxVolume = 0

	for (let i = length - 1; i > 0; i--) {
		const height = getHeight(arr[0], arr[i])
		const volume = height * i

		if (arr[i] === maxHeight && volume > maxVolume) {
			console.log('This is volume', volume)
			maxVolume = volume
			break
		}
		if (volume > maxVolume) {
			maxVolume = volume
		}
	}

	values.add(maxVolume)

	if (arr.length === 1) return values

	return getValues(arr.slice(1), values)
}

function getHeight(num1: number, num2: number) {
	return num1 > num2 ? num2 : num1
}

function getValuesBad(arr: number[], values: Set<number> = new Set()) {
	for (let i = 1; i < arr.length; i++) {
		const height = getHeight(arr[0], arr[i])
		// console.log(height)

		const volume = height * i

		values.add(volume)
	}
	if (arr.length === 1) return values

	return getValues(arr.slice(1), values)
}
