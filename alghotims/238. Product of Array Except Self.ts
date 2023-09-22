export function productExceptSelf(nums: number[]): number[] {
	// const res = multiplyArray(nums)
	const res = nums.map((val, i) => {
		const newArr = [...nums]
		newArr.splice(i, 1)
		return multiplyArray(newArr)
	})
	console.log('This is res', res)
	return res
}

const multiplyArray = (nums: number[]) => {
	return nums.reduce((acc: number, red: number) => acc * red)
}
