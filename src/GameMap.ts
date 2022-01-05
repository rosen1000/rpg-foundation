export default class GameMap {
	map: Array<Array<GameMapCell>> = [[]];
	rooms = 1;

	constructor() {
		let sides = () => Math.round(Math.random() * 14 + 1);
		this.map[0][0] = new GameMapCell('Spawn', sides());
		if ((this.map[0][0].directions & up) > 0) {
			this.map[-1] = [];
			this.map[-1][0] = new GameMapCell('Room', sides());
			if (!(this.map[-1][0].directions & down)) this.map[-1][0].directions + down;
		}
		if ((this.map[0][0].directions & right) > 0) {
			this.map[0][1] = new GameMapCell('Room', sides());
		}
		if ((this.map[0][0].directions & down) > 0) {
			this.map[1] = [];
			this.map[1][0] = new GameMapCell('Room', sides());
		}
		if ((this.map[0][0].directions & left) > 0) {
			this.map[0][-1] = new GameMapCell('Room', sides());
		}
		// select 1 room, remember the others
		// generate room on the selected position
		// forget that room, remember the ajacent rooms, select 1 room
	}

	print() {
		for (let i = -1; i < 2; i++) {
			let out = '';
			for (let j = -1; j < 2; j++) {
				if (this.map[i] && this.map[i][j]) out += 'X';
				else out += ' ';
			}
			console.log(out);
		}
	}
}

class GameMapCell {
	type: string;
	directions: number;
	constructor(type: string, directions: number) {
		this.type = type;
		this.directions = directions;
	}
}

const up = 0b0001; // 1
const right = 0b0010; // 2
const down = 0b0100; // 4
const left = 0b1000; // 8
