window.onload = () => {
  var boardState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  var currentPlayer = 'x';
  var app = new Vue({
    el: '#ticTacToeBoard',
    data: {
      board: boardState
    }
  })
}
