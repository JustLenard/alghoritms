type Point = {
	x: number
	y: number
}

const direction = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
]

const walk = (
	maze: string[],
	wall: string,
	curr: Point,
	end: Point,
	seen: boolean[][],
	path: Point[]
): boolean => {
	/**
	 * Base case 1:
	 * Off the map
	 **/
	if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze[0].length) {
		return false
	}

	/**
	 * Base case 2:
	 * On a wall
	 **/
	if (maze[curr.y][curr.x] === wall) {
		return false
	}

	/**
	 * Base case 3:
	 * On the end
	 **/
	if (curr.x === end.x && curr.y === end.y) {
		path.push(end)
		return true
	}

	/**
	 * Base case 4:
	 * Already seen
	 **/
	if (seen[curr.y][curr.x]) {
		return false
	}

	// seen[curr.x][curr.y] = true
	path.push(curr)

	for (let i = 0; i < direction.length; i++) {
		const [x, y] = direction[i]
		if (
			walk(
				maze,
				wall,
				{
					x: curr.x + x,
					y: curr.y + y,
				},
				end,
				seen,
				path
			)
		) {
			return true
		}
	}

	path.pop()
	return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
	const seen: boolean[][] = []
	const path: Point[] = []

	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze[0].length).fill(false))
	}

	walk(maze, wall, start, end, seen, path)

	return path
}
