

(function(){
  // use strict mode -- remember that this. refers to global obj unless you define it in function
  'use strict';

  angular.module('myApp', []);

  angular
    .module('myApp')
    .controller('myController', myController);

  // use an IIFE to prevent pollution of global scope
})();

function myController(){
  var vm = this;
  vm.title = 'Tic Tac Toe';
  vm.board = [null, null, null, null, null, null, null, null, null];
  vm.currentPlayer = 'X';
  vm.gameOver = false;
  vm.counter = 0;
  vm.tie;
  vm.changePlayer = function(){
    vm.currentPlayer = vm.currentPlayer === 'X' ? 'O' : 'X';
    return vm.currentPlayer;
  };
  vm.changeBoard = function(idx){
    if (vm.board[idx] == null){
      vm.board[idx] = vm.currentPlayer;
      vm.counter++;
      vm.checkTie();
      if (!vm.checkTie()) {
        vm.checkWinner()
      }
      vm.changePlayer();
    }
  };
  vm.checkWinner = function(){
    if (vm.board[0] != null && vm.board[0] === vm.board[1] && vm.board[1] === vm.board[2] ||
      vm.board[3] != null && vm.board[3] === vm.board[4] && vm.board[4] === vm.board[5] ||
      vm.board[6] != null && vm.board[6] === vm.board[7] && vm.board[7] === vm.board[8] ||
      vm.board[0] != null && vm.board[0] === vm.board[3] && vm.board[3] === vm.board[6] ||
      vm.board[1] != null && vm.board[1] === vm.board[4] && vm.board[4] === vm.board[7] ||
      vm.board[2] != null && vm.board[2] === vm.board[5] && vm.board[5] === vm.board[8] ||
      vm.board[0] != null && vm.board[0] === vm.board[4] && vm.board[4] === vm.board[8] ||
      vm.board[2] != null && vm.board[2] === vm.board[4] && vm.board[4] === vm.board[6]){
      vm.gameOver = true;
    }
  };
  vm.checkTie = function(){
    console.log(vm.gameOver);
    if (vm.counter > 8 && !vm.gameOver){
      // vm.tie = true;
      return true;
    }
  };
}
