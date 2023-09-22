export function topKFrequent(nums: number[], k: number): number[] {
	const hashMap = createHashMap(nums)
	console.log('This is hashMap', hashMap)

	const values = Object.values(hashMap)
		.sort((a, b) => {
			if (a > b) return -1
			if (a < b) return 1
			return 1
		})
		.slice(0, k)
	console.log('This is values', values)

	const keys = Object.keys(hashMap).filter((key) => {
		return values.includes(hashMap[key])
	})

	return keys.map((val) => Number(val))
}

const createHashMap = (nums: number[]) => {
	return nums.reduce((acc: Record<string, number>, red: number) => {
		acc[red] ??= 0
		acc[red]++
		return acc
	}, {})
}
