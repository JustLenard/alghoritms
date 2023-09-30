type TNode<T> = {
	value: T
	next?: TNode<T>
	prev?: TNode<T>
}

export default class DoublyLinkedList<T> {
	public length: number
	private head?: TNode<T>
	private tail?: TNode<T>

	constructor() {
		this.length = 0
	}

	prepend(item: T): void {
		this.length++

		const newNode: TNode<T> = {
			value: item,
		}

		if (!this.head) {
			this.head = this.tail = newNode
			return
		}

		this.head.prev = newNode
		newNode.next = this.head
		this.head = newNode
	}
	append(item: T): void {
		this.length++
	}

	remove(item: T): T | undefined {
		if (this.length === 0) {
			return undefined
		} else if (this.length === 1) {
			this.head = this.tail = undefined
		}
		this.length--

		let curr = this.head

		for (let i = 0; i < this.length - 1; i++) {
			curr = curr!.next
		}

		curr = curr as TNode<T>
		curr.next = undefined
	}

	get(idx: number): T | undefined {}

	insertAt(item: T, idx: number): void {
		if (idx > this.length) {
			throw new Error(`The index can't be higher than ${this.length}`)
		} else if (this.length === idx) {
			this.append(item)
			return
		} else if (this.length === 0) {
			this.prepend(item)
			return
		}
		this.length++

		let curr = this.head

		for (let i = 0; curr && i < idx; i++) {
			curr = curr.next
		}
		curr = curr as TNode<T>

		const newNode: TNode<T> = { value: item }

		newNode.next = curr
		newNode.prev = curr.prev

		curr.prev = newNode
		curr.prev.next = newNode
	}
	removeAt(idx: number): T | undefined {
		//handle edgecase
		this.length--
	}
}
