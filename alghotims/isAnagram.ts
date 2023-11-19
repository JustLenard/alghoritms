function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false

	const freqMap = createFrequencyMap(s, t)

	for (const key in freqMap) {
		if (freqMap[key] !== 0) return false
	}

	return true
}

const createFrequencyMap = (s: string, t: string) => {
	return s.split('').reduce((acc: Record<string, number>, red: string, i: number) => {
		acc[red] ??= 0
		acc[red]++

		acc[t[i]] ??= 0
		acc[t[i]]--
		return acc
	}, {})
}
