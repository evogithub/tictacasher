window.onload = () => {
  var app = new Vue({
    el: '#ticTacToeBoard',
    data: {
      board : [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
      currentPlayer: 'X'
    },
    methods:{
      makeMove(cell){
        if(this.board[cell] == ''){
          this.board.splice(cell, 1,  this.currentPlayer);
          this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X'
        }
      }
    }
  });
}
