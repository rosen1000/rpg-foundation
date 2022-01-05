"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameMap = /** @class */ (function () {
    function GameMap() {
        this.map = [[]];
        this.rooms = 1;
        var sides = function () { return Math.round(Math.random() * 14 + 1); };
        this.map[0][0] = new GameMapCell('Spawn', sides());
        if ((this.map[0][0].directions & up) > 0) {
            this.map[-1] = [];
            this.map[-1][0] = new GameMapCell('Room', sides());
            if (!(this.map[-1][0].directions & down))
                this.map[-1][0].directions + down;
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
    GameMap.prototype.print = function () {
        for (var i = -1; i < 2; i++) {
            var out = '';
            for (var j = -1; j < 2; j++) {
                if (this.map[i] && this.map[i][j])
                    out += 'X';
                else
                    out += ' ';
            }
            console.log(out);
        }
    };
    return GameMap;
}());
exports.default = GameMap;
var GameMapCell = /** @class */ (function () {
    function GameMapCell(type, directions) {
        this.type = type;
        this.directions = directions;
    }
    return GameMapCell;
}());
var up = 1; // 1
var right = 2; // 2
var down = 4; // 4
var left = 8; // 8
