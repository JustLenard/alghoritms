export default function two_crystal_balls(breaks: boolean[]): number {
	const jumpAmount = Math.floor(breaks.length ** 0.5)

	let i = jumpAmount
	for (; i < breaks.length; i += jumpAmount) {
		if (breaks[i]) {
			break
		}
	}

	i -= jumpAmount

	for (let j = i; j < i + jumpAmount; j++) {
		if (breaks[j]) {
			return j
		}
	}
	return -1
}
