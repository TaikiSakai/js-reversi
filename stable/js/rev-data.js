
class RevData {
    static w = 8; //盤面の幅
    static h = 8; //盤面の高さ
    static x = 0; //範囲判定用x座標基準点
    static y = 0; //範囲判定用y座標基準点
    static blank = 8;

    constructor() {
        this.player = 0;
        this.isEnd = false;
        this.scores = [0, 0];
        this.types = ['MAN', 'COM'];
        this.board = [
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 1, 0, 8, 8, 8],
            [8, 8, 8, 0, 1, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [8, 8, 8, 8, 8, 8, 8, 8],
        ];
        this.putToken = {x: 0, y: 0};
        this.activeSquares = [];
        this.revTokens = [];
    }
}

let revData = new RevData();
console.log(revData);