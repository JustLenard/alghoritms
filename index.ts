import { productExceptSelf } from './alghotims/238. Product of Array Except Self'
import { topKFrequent } from './alghotims/347. Top K Frequent Elements'
import { bubbleSort } from './alghotims/bubbleSort'
import { maxArea } from './alghotims/highestVolume'
import { bigArray, smallInput } from './inputs'

const path = './files/raw.txt'

const file = Bun.file(path)

const text = await file.text()

const names = text.split('\n').filter((el) => !el.startsWith('[<'))

const mySet = new Set<string>(names)

// console.log('This is names', names)

console.log('This is mySet', mySet)

// console.log('This is mySet', mySet)
