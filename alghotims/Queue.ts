type QNode<T> = {
	value: T
	next?: QNode<T>
	prev?: QNode<T>
}

export default class Queue<T> {
	public length: number
	private head?: QNode<T>
	private tail?: QNode<T>

	constructor() {
		this.head = this.tail = undefined
		this.length = 0
	}

	enqueue(item: T): void {
		this.length++
		const newNode = { value: item } as QNode<T>
		if (!this.tail?.value) {
			this.tail = this.head = newNode
		}

		this.tail.next = newNode
		this.tail = newNode
	}
	deque(): T | undefined {
		if (!this.head?.value) return undefined

		this.length--

		const head = this.head
		this.head = this.head.next

		return head.value
	}
	peekHead(): T | undefined {
		return this.head?.value
	}
	peekTail(): T | undefined {
		return this.tail?.value
	}
	peek(val: 'h' | 't'): T | undefined {
		return val === 'h' ? this.head?.value : this.tail?.value
	}
}

/**
 * Queue => First in, first out
 *
 * In linked list, the head is the entrance the tail is the end
 *
 * In queue, the head points to the element that will get out first
 **/

/**
 *     node1 => node2 =>node3 => node4
 *              head               tail
 *
 **/

type QMyQueue<T> = {
	value: T
	prev?: QMyQueue<T>
	next?: QMyQueue<T>
}

class MyQueue<T> {
	legth: number
	head?: QMyQueue<T>
	tail?: QMyQueue<T>

	constructor() {
		this.head = this.tail = undefined
		this.legth = 0
	}

	enqueue(newValue: T): void {
		const newNode = { value: newValue } as QMyQueue<T>
		this.legth++

		if (!this.tail) {
			this.head = this.tail = newNode
		}

		this.tail.next = newNode
		this.tail = newNode
	}

	dequeue(): void {
		if (!this.head) return undefined

		this.legth--
		this.head = this.head.next
	}

	peek(): T | undefined {
		return this.head?.value
	}
}
