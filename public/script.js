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
          var randomSoundNumber = Math.floor(Math.random() * 10) + 1;
          var audio = new Audio('game_sounds/hit' + randomSoundNumber + '.mp3')
          audio.play();
        }
        var winners =  [
          [0, 1, 2], // Check first row.
          [3, 4, 5], // Check second Row
          [6, 7, 8], // Check third Row
          [0, 3, 6], // Check first column
          [1, 4, 7], // Check second Column
          [2, 5, 8], // Check third Column
          [0, 4, 8], // Check first Diagonal
          [2, 4, 6]
        ]; // Check second Diagonal
        for(var win in winners){
          console.log(winners[win][0] + ' ' + winners[win][1] + ' ' + winners[win][2])
          console.log(this.board[winners[win][0]] + ' ' + this.board[winners[win][1]] + ' ' + this.board[winners[win][2]])
          if(
            this.board[winners[win][0]] != ''
            && this.board[winners[win][0]] === this.board[winners[win][1]]
            && this.board[winners[win][1]] === this.board[winners[win][2]]
          ){
            this.currentMessage = 'Winning player:'
            audio.addEventListener('ended',() => {
              var audio = new Audio('game_sounds/player_' + this.currentPlayer + '_wins.mp3')
              audio.play();
              audio.addEventListener('ended',() => {
                var audio = new Audio('game_sounds/Game_Over.mp3');
                audio.play();
              })
            });
            this.gameOver = true;
          }
        }
        if(!this.gameOver){
          this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
          randomSoundNumber = Math.floor(Math.random() * 10) + 1;
          if(randomSoundNumber == '1'){
            randomSoundNumber = Math.floor(Math.random() * 5 ) + 1;
            audio.addEventListener('ended',() => {
              var audio = new Audio('game_sounds/Random' + randomSoundNumber + '.mp3')
              audio.play();
            });
          }
          audio.addEventListener('ended',() => {
            if(this.currentPlayer !== ''){
              var audio = new Audio('game_sounds/Your_Move_' + this.currentPlayer + '_player.mp3')
              audio.play();
            }
          });
          var tieCount = 0;
          for(win in winners){
            if(this.board[win] !== ''){
              tieCount++
            }
          }
          if(tieCount == 8){
            this.currentPlayer = '';
            this.currentMessage = 'Draw Game';
            this.gameOver = true;
              audio.addEventListener('ended',() => {
                var audio = new Audio('game_sounds/Game_Over.mp3');
                audio.play();
                audio.addEventListener('ended',() => {
                  var audio = new Audio('game_sounds/draw_game.mp3')
                  audio.play();
                })
              })
          }
          console.log(tieCount);
        }
      }
    }
  });
  var bgAudio = new Audio('game_sounds/welcome.mp3')
  bgAudio.play();
  bgAudio.addEventListener('ended',() => {
    bgAudio = new Audio('music/stage1_music.mp3')
    bgAudio.play();
    bgAudio.addEventListener('ended',() => {
      bgAudio = new Audio('music/stage1_music.mp3')
      bgAudio.play();
      bgAudio.addEventListener('ended',() => {
        bgAudio = new Audio('music/stage1_music.mp3')
        bgAudio.play();
      });
    });
  });
}
