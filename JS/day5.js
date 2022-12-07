const stacks =
	`
[T] [V]                     [W]    
[V] [C] [P] [D]             [B]    
[J] [P] [R] [N] [B]         [Z]    
[W] [Q] [D] [M] [T]     [L] [T]    
[N] [J] [H] [B] [P] [T] [P] [L]    
[R] [D] [F] [P] [R] [P] [R] [S] [G]
[M] [W] [J] [R] [V] [B] [J] [C] [S]
[S] [B] [B] [F] [H] [C] [B] [N] [L]
 1   2   3   4   5   6   7   8   9`.replace(/\n/g, ',').split(',')
const stringArr = stacks.map(item => {
	return item.replace(/\[/g, '')
		.replace(/\]/g, '')
		.replace(/\s\s\s\s/g, '*')
		.split('')
})

const arr = stringArr.reverse().map(item => item.filter(a => a !== ' '))
let obj = {}
arr.forEach((item, index) => {
	if (index === 0) {
		item.forEach((el, i) => {
			obj[el] = []
		})
	} else {
		item.forEach((el, index) => {
			if (el !== '*') {
				obj[String(index + 1)].push(el)
			}
		})
	}
	return obj
})
//console.log(obj)
const inputSteps =
	`move 7 from 3 to 9
move 6 from 2 to 1
move 2 from 4 to 8
move 10 from 8 to 4
move 1 from 2 to 4
move 15 from 4 to 1
move 28 from 1 to 3
move 1 from 2 to 5
move 7 from 5 to 9
move 5 from 9 to 5
move 21 from 3 to 1
move 1 from 6 to 4
move 4 from 9 to 2
move 7 from 9 to 2
move 4 from 2 to 6
move 1 from 9 to 1
move 2 from 4 to 9
move 2 from 7 to 4
move 4 from 3 to 5
move 2 from 7 to 9
move 5 from 2 to 7
move 2 from 9 to 1
move 1 from 9 to 2
move 3 from 3 to 7
move 3 from 5 to 2
move 2 from 6 to 1
move 1 from 9 to 4
move 25 from 1 to 9
move 2 from 5 to 3
move 1 from 1 to 7
move 9 from 7 to 1
move 1 from 2 to 8
move 16 from 9 to 7
move 5 from 9 to 5
move 7 from 1 to 8
move 1 from 9 to 7
move 18 from 7 to 4
move 1 from 3 to 4
move 1 from 1 to 8
move 2 from 8 to 1
move 1 from 3 to 9
move 17 from 4 to 5
move 5 from 8 to 6
move 2 from 8 to 1
move 6 from 6 to 7
move 2 from 9 to 4
move 5 from 1 to 3
move 3 from 3 to 7
move 1 from 1 to 2
move 2 from 3 to 8
move 2 from 4 to 1
move 2 from 8 to 7
move 2 from 9 to 7
move 1 from 2 to 4
move 1 from 2 to 4
move 2 from 1 to 7
move 11 from 7 to 1
move 4 from 4 to 1
move 3 from 1 to 3
move 7 from 1 to 8
move 4 from 2 to 8
move 2 from 1 to 4
move 2 from 4 to 3
move 2 from 1 to 3
move 3 from 7 to 4
move 4 from 8 to 6
move 1 from 7 to 5
move 2 from 4 to 1
move 4 from 6 to 2
move 3 from 1 to 8
move 6 from 8 to 6
move 1 from 2 to 1
move 23 from 5 to 8
move 21 from 8 to 3
move 2 from 6 to 9
move 1 from 8 to 9
move 2 from 3 to 7
move 26 from 3 to 8
move 2 from 9 to 2
move 8 from 6 to 3
move 3 from 5 to 4
move 1 from 7 to 4
move 1 from 7 to 9
move 1 from 5 to 4
move 5 from 2 to 9
move 7 from 9 to 8
move 38 from 8 to 7
move 1 from 1 to 7
move 1 from 4 to 9
move 3 from 4 to 1
move 4 from 3 to 2
move 1 from 1 to 7
move 34 from 7 to 6
move 3 from 4 to 7
move 1 from 4 to 2
move 2 from 1 to 3
move 1 from 2 to 9
move 5 from 3 to 6
move 1 from 4 to 6
move 4 from 2 to 6
move 1 from 9 to 5
move 4 from 7 to 3
move 1 from 5 to 9
move 1 from 9 to 1
move 1 from 3 to 6
move 1 from 9 to 3
move 5 from 7 to 9
move 1 from 1 to 9
move 3 from 9 to 1
move 1 from 3 to 4
move 38 from 6 to 1
move 2 from 9 to 4
move 3 from 3 to 6
move 1 from 9 to 5
move 8 from 6 to 8
move 1 from 3 to 6
move 1 from 6 to 8
move 2 from 4 to 3
move 4 from 8 to 5
move 1 from 6 to 2
move 1 from 2 to 7
move 1 from 6 to 3
move 3 from 8 to 7
move 4 from 7 to 6
move 1 from 4 to 1
move 5 from 1 to 4
move 4 from 6 to 5
move 3 from 5 to 8
move 3 from 5 to 3
move 1 from 8 to 2
move 6 from 3 to 8
move 1 from 5 to 7
move 1 from 2 to 1
move 1 from 7 to 6
move 3 from 4 to 9
move 6 from 8 to 6
move 3 from 8 to 2
move 3 from 6 to 2
move 1 from 4 to 5
move 1 from 6 to 9
move 2 from 6 to 1
move 1 from 4 to 1
move 2 from 5 to 2
move 1 from 8 to 5
move 1 from 9 to 8
move 22 from 1 to 5
move 3 from 2 to 3
move 1 from 8 to 4
move 2 from 3 to 6
move 1 from 6 to 4
move 1 from 3 to 8
move 1 from 2 to 8
move 10 from 5 to 3
move 1 from 6 to 8
move 2 from 8 to 4
move 1 from 6 to 3
move 2 from 2 to 3
move 1 from 8 to 5
move 13 from 3 to 4
move 2 from 1 to 7
move 11 from 1 to 2
move 3 from 4 to 5
move 6 from 1 to 9
move 8 from 2 to 6
move 4 from 2 to 1
move 2 from 6 to 5
move 4 from 1 to 8
move 2 from 8 to 6
move 1 from 7 to 1
move 1 from 7 to 2
move 8 from 6 to 5
move 1 from 8 to 4
move 1 from 1 to 6
move 10 from 5 to 1
move 3 from 9 to 4
move 6 from 1 to 3
move 9 from 4 to 5
move 1 from 2 to 1
move 1 from 4 to 9
move 1 from 6 to 8
move 1 from 2 to 1
move 1 from 4 to 8
move 2 from 8 to 9
move 1 from 8 to 6
move 1 from 3 to 2
move 1 from 1 to 4
move 1 from 2 to 5
move 1 from 1 to 8
move 1 from 6 to 8
move 8 from 5 to 3
move 1 from 8 to 7
move 1 from 7 to 8
move 6 from 9 to 6
move 2 from 9 to 2
move 1 from 9 to 7
move 1 from 8 to 5
move 1 from 2 to 7
move 1 from 2 to 9
move 16 from 5 to 2
move 4 from 5 to 1
move 12 from 3 to 6
move 1 from 5 to 4
move 8 from 6 to 9
move 1 from 8 to 5
move 2 from 9 to 6
move 2 from 2 to 5
move 3 from 1 to 4
move 3 from 6 to 7
move 7 from 9 to 6
move 4 from 7 to 1
move 1 from 5 to 2
move 1 from 3 to 2
move 4 from 1 to 9
move 4 from 9 to 5
move 12 from 6 to 7
move 4 from 2 to 6
move 4 from 2 to 9
move 7 from 6 to 3
move 3 from 9 to 8
move 5 from 2 to 4
move 4 from 5 to 7
move 1 from 9 to 4
move 13 from 7 to 8
move 3 from 7 to 8
move 2 from 3 to 2
move 5 from 1 to 5
move 11 from 4 to 9
move 7 from 9 to 1
move 4 from 4 to 3
move 1 from 6 to 8
move 8 from 8 to 4
move 1 from 1 to 7
move 3 from 4 to 6
move 4 from 2 to 8
move 3 from 5 to 4
move 1 from 4 to 1
move 4 from 9 to 8
move 3 from 5 to 2
move 2 from 2 to 3
move 1 from 6 to 7
move 7 from 1 to 9
move 3 from 7 to 4
move 1 from 4 to 2
move 1 from 6 to 8
move 1 from 5 to 7
move 1 from 6 to 7
move 9 from 4 to 6
move 7 from 9 to 5
move 1 from 4 to 3
move 1 from 5 to 6
move 4 from 3 to 7
move 3 from 3 to 1
move 2 from 2 to 4
move 3 from 1 to 6
move 4 from 5 to 1
move 2 from 5 to 3
move 3 from 6 to 8
move 6 from 7 to 3
move 10 from 3 to 7
move 10 from 6 to 4
move 3 from 1 to 9
move 4 from 7 to 2
move 2 from 3 to 5
move 1 from 3 to 5
move 1 from 1 to 2
move 3 from 9 to 1
move 2 from 1 to 9
move 4 from 2 to 5
move 10 from 4 to 9
move 2 from 8 to 7
move 1 from 2 to 9
move 1 from 9 to 4
move 1 from 1 to 9
move 3 from 7 to 8
move 5 from 9 to 8
move 6 from 5 to 4
move 5 from 9 to 6
move 5 from 8 to 5
move 4 from 5 to 2
move 3 from 7 to 8
move 3 from 9 to 1
move 2 from 5 to 8
move 1 from 4 to 6
move 3 from 6 to 3
move 8 from 4 to 3
move 2 from 6 to 7
move 24 from 8 to 9
move 1 from 6 to 9
move 8 from 9 to 3
move 1 from 1 to 9
move 2 from 8 to 3
move 3 from 9 to 4
move 18 from 3 to 5
move 1 from 2 to 6
move 1 from 6 to 1
move 13 from 9 to 8
move 3 from 4 to 1
move 1 from 4 to 2
move 1 from 5 to 3
move 1 from 9 to 2
move 6 from 2 to 9
move 3 from 3 to 1
move 3 from 7 to 6
move 2 from 1 to 5
move 3 from 6 to 7
move 17 from 8 to 1
move 8 from 5 to 7
move 11 from 7 to 5
move 1 from 4 to 5
move 24 from 1 to 3
move 7 from 5 to 9
move 11 from 5 to 9
move 1 from 5 to 4
move 1 from 5 to 2
move 1 from 4 to 7
move 16 from 3 to 1
move 3 from 5 to 8
move 1 from 9 to 1
move 12 from 9 to 2
move 5 from 3 to 1
move 2 from 8 to 5
move 2 from 3 to 4
move 1 from 8 to 6
move 2 from 5 to 3
move 1 from 6 to 1
move 2 from 4 to 1
move 8 from 2 to 1
move 24 from 1 to 6
move 1 from 9 to 6
move 4 from 2 to 6
move 4 from 3 to 2
move 4 from 9 to 4
move 1 from 7 to 5
move 6 from 9 to 1
move 17 from 6 to 4
move 1 from 1 to 9
move 2 from 9 to 7
move 9 from 6 to 7
move 12 from 7 to 2
move 11 from 1 to 2
move 12 from 4 to 2
move 1 from 1 to 4
move 1 from 5 to 7
move 2 from 6 to 3
move 2 from 4 to 3
move 1 from 1 to 6
move 5 from 4 to 2
move 1 from 7 to 5
move 2 from 6 to 9
move 6 from 2 to 4
move 1 from 5 to 8
move 3 from 4 to 1
move 1 from 8 to 9
move 5 from 4 to 1
move 1 from 1 to 2
move 1 from 3 to 8
move 7 from 1 to 6
move 1 from 8 to 6
move 1 from 3 to 5
move 1 from 1 to 8
move 1 from 4 to 5
move 2 from 5 to 9
move 1 from 8 to 2
move 2 from 6 to 8
move 1 from 8 to 6
move 1 from 6 to 8
move 1 from 8 to 5
move 4 from 9 to 5
move 1 from 9 to 6
move 1 from 6 to 8
move 37 from 2 to 5
move 1 from 2 to 8
move 37 from 5 to 8
move 21 from 8 to 4
move 1 from 3 to 7
move 12 from 4 to 1
move 1 from 7 to 8
move 4 from 6 to 3
move 1 from 4 to 2
move 2 from 2 to 6
move 2 from 3 to 2
move 2 from 2 to 7
move 2 from 7 to 1
move 3 from 5 to 3
move 2 from 2 to 8
move 15 from 8 to 7
move 1 from 7 to 2
move 2 from 5 to 8
move 5 from 4 to 3
move 3 from 6 to 2
move 8 from 1 to 9
move 8 from 9 to 4
move 7 from 8 to 9
move 2 from 8 to 5
move 4 from 1 to 9
move 10 from 3 to 2
move 1 from 6 to 7
move 6 from 7 to 8
move 10 from 4 to 7
move 1 from 3 to 7
move 3 from 9 to 1
move 5 from 8 to 1
move 5 from 2 to 7
move 1 from 4 to 3
move 1 from 5 to 6
move 10 from 1 to 7
move 34 from 7 to 4
move 1 from 6 to 9
move 1 from 7 to 3
move 8 from 4 to 2
move 1 from 9 to 7
move 1 from 7 to 9
move 22 from 4 to 5
move 1 from 3 to 8
move 6 from 5 to 6
move 1 from 8 to 4
move 9 from 9 to 4
move 1 from 3 to 2
move 4 from 2 to 1
move 11 from 2 to 6
move 14 from 4 to 7
move 1 from 2 to 1
move 12 from 5 to 6
move 7 from 7 to 9
move 2 from 5 to 4
move 1 from 8 to 5
move 6 from 6 to 8
move 3 from 7 to 8
move 1 from 2 to 6
move 2 from 4 to 3
move 1 from 3 to 8
move 1 from 2 to 5
move 1 from 3 to 4
move 5 from 8 to 9
move 5 from 1 to 4
move 3 from 8 to 9
move 5 from 4 to 7
move 18 from 6 to 3
move 2 from 8 to 9
move 3 from 6 to 3
move 5 from 7 to 1
move 1 from 6 to 7
move 3 from 9 to 7
move 6 from 7 to 8
move 8 from 9 to 8
move 1 from 7 to 6
move 12 from 3 to 1
move 2 from 9 to 7
move 1 from 8 to 6
move 9 from 8 to 9
move 2 from 8 to 7
move 1 from 7 to 8
move 2 from 1 to 6
move 7 from 1 to 9
move 16 from 9 to 5
move 4 from 3 to 9
move 8 from 1 to 3
move 5 from 5 to 1
move 1 from 4 to 3
move 4 from 7 to 6
move 3 from 8 to 2
move 8 from 3 to 2
move 11 from 2 to 7
move 3 from 6 to 1
move 4 from 3 to 6
move 12 from 5 to 7
move 2 from 3 to 6
move 7 from 1 to 7
move 2 from 5 to 1
move 1 from 9 to 2
move 1 from 5 to 7
move 31 from 7 to 4
move 6 from 9 to 1
move 6 from 4 to 7
move 16 from 4 to 5
move 1 from 9 to 4
move 1 from 7 to 6
move 4 from 4 to 1
move 11 from 5 to 9
move 2 from 5 to 6
move 1 from 2 to 9
move 4 from 5 to 1
move 8 from 9 to 2
move 12 from 6 to 5
move 11 from 5 to 1
move 18 from 1 to 2
move 3 from 4 to 3
move 2 from 6 to 7
move 2 from 9 to 1
move 1 from 5 to 9
move 3 from 9 to 5
move 13 from 2 to 8
move 10 from 8 to 2
move 3 from 8 to 6
move 3 from 3 to 9
move 7 from 1 to 5
move 6 from 5 to 6
move 3 from 1 to 2
move 5 from 7 to 8
move 13 from 2 to 8
move 9 from 6 to 3`
		.replace(/move\s/g, '')
		.replace(/\sfrom\s/g, ',')
		.replace(/\sto\s/g, ',')
		.replace(/\n/g, '/')
		.split('/')
		.map(item => {
			return item.split(',').map(el => {
				return Number(el)
			})
		})

const playCrates = (bulk) => {
	inputSteps.forEach(item => {
		const move = item[0]
		const from = item[1]
		const to = item[2]
		const remain = obj[from].slice(0, obj[from].length - move)
		let cut = obj[from].slice(move * -1)

		if (!bulk) {
			cut = cut.reverse()
		}

		obj[from] = remain
		obj[to] = obj[to].concat(cut)
	})

	let result = []
	for (const [k, v] of Object.entries(obj)) {
		result.push(v.pop())
	}
	return result.join("")
}

// const part1 = playCrates(false) // LJSVLTWQM
const part2 = playCrates(true) //BRQWDBBJM
console.log(part2)

