function twoSum(nums: number[], target: number): number[] | undefined {
	const hashMap = new Map<number, number>()

	for (let i = 0; i < nums.length; i++) {
		const desiredNumber = target - nums[i]

		if (hashMap.has(desiredNumber)) {
			const val = hashMap.get(desiredNumber)
			return val ? [val, i] : undefined
		}
		hashMap.set(nums[i], i)
	}
}
