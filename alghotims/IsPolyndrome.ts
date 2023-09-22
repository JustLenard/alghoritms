function isPalindrome(s: string): boolean {
	// Clean string. Leave only lowercase alphanumeric
	let cleanedString = ''
	const alphanumericHashMap = createHashMap(ALPHANUMERIC)
	console.log('This is alphanumericHashMap', alphanumericHashMap)

	// Clean string
	s.toLowerCase()
		.split('')
		.forEach((letter) => {
			if (alphanumericHashMap.has(letter)) {
				cleanedString += letter
			}
		})

	console.log('This is cleanedString', cleanedString)

	/**
	 * Reverse String
	 **/
	const reversedString = cleanedString.split('').reverse().join('')
	console.log('This is reversedString', reversedString)

	/**
	 * Check if polindrome
	 **/
	console.log('This is cleanedString +  cleanedString', cleanedString + cleanedString)
	console.log('This is cleanedString + reversedString', cleanedString + reversedString)
	const res = cleanedString + cleanedString === cleanedString + reversedString
	console.log('This is res', res)
	return res
	// reverse the clened string
	// if polidrom then : cleanedString + cleanedString === cleanedString + reverserCleanedString
}

const ALPHABET = [...Array(26)].map((_, i) => (i + 10).toString(36))

const DIGITS = [...Array(10)].map((_, i) => i.toString())

const ALPHANUMERIC = [...ALPHABET, ...DIGITS]

const createHashMap = (arr: string[]) => {
	return arr.reduce((acc: Set<string>, red: string) => {
		acc.add(red)
		return acc
	}, new Set())
}
