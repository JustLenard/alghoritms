import { productExceptSelf } from './alghotims/238. Product of Array Except Self'
import { topKFrequent } from './alghotims/347. Top K Frequent Elements'
import { bubbleSort } from './alghotims/bubbleSort'
import { maxArea } from './alghotims/highestVolume'
import { bigArray, smallInput } from './inputs'

// maxArea(input)
// topKFrequent([1, 1, 1, 2, 2, 3], 2)
// productExceptSelf([1, 2, 3, 4]) //[24,12,8,6]

console.time()
const bubbleRes = bubbleSort(bigArray)
console.timeEnd()

console.time()
const innateSort = bigArray.sort()
console.timeEnd()

// console.log('This is res', res)
