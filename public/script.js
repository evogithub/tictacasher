window.onload = () => {
  var app = new Vue({
    el: '#ticTacToeBoard',
    data: {
      board : [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
      currentPlayer: 'X',
      currentMessage: 'CurrentPlayer:',
      gameOver: false
    },
    methods:{
      makeMove(cell){
        if(this.gameOver){
          return;
        }
        if(this.board[cell] == ''){
          this.board.splice(cell, 1,  this.currentPlayer);
          this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
          var randomSoundNumber = Math.floor(Math.random() * 10) + 1;
          var audio = new Audio('game_sounds/hit' + randomSoundNumber + '.mp3')
          audio.play();
          randomSoundNumber = Math.floor(Math.random() * 10) + 1;
          if(randomSoundNumber) == '1'{
            randomSoundNumber = Math.floor(Math.random() * 5 ) + 1;
            var audio = new Audio('game_sounds/Random' + randomSoundNumber + '.mp3')
            audio.play();
          }
        }
        var winners =  [[0, 1, 2], // Check first row.
                [3, 4, 5], // Check second Row
                [6, 7, 8], // Check third Row
                [0, 3, 6], // Check first column
                [1, 4, 7], // Check second Column
                [2, 5, 8], // Check third Column
                [0, 4, 8], // Check first Diagonal
                [2, 4, 6]]; // Check second Diagonal
        for(var win in winners){
          if(
            this.board[win[0]] != ''
            && this.board[win[0]] == this.board[win[1]]
            && this.board[win[1]] == this.board[win[2]]
          ){
            this.currentMessage = this.currentPlayer == 'X' ? 'O' : 'X';
            var audio = new Audio('game_sounds/Game_Over.mp3')
            audio.play();
            this.gameOver = true;
          }

        }
      }
    }
  });
}
