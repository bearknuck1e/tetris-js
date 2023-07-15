import Game from './src/game.js';
import View from './src/view.js';
import Controller from './src/controller.js';

const root=document.querySelector('#root');

const game=new Game();
const view=new View(root,480,640,20,10);
// const view=new View(root,720,960,20,10);

const controller=new Controller(game,view);

window.game=game;
window.view=view;
window.controller=controller;

const b_left=document.getElementById('b-left');
const b_right=document.getElementById('b-right');
const b_down=document.getElementById('b-down');
const b_enter=document.getElementById('b-enter');
const b_turn=document.getElementById('b-turn');

b_left.addEventListener("click",function(){
  if(controller.isPlaying){  
    game.movePieceLeft();
    controller.updateView();
  }
});
b_right.addEventListener("click",function(){
  if(controller.isPlaying){
    game.movePieceRight();
    controller.updateView();
  }
});
b_down.addEventListener("click",function(){
  if(controller.isPlaying){
    // controller.stopTimer();
    game.movePieceDown();
    controller.updateView();
  }
});
b_enter.addEventListener("click",function(){
  if(game.getState().isGameOver){
    controller.reset();
  }else if(controller.isPlaying){
    controller.pause();
  }else{
    controller.play();
  }
});
b_turn.addEventListener("click",function(){
  if(controller.isPlaying){
    game.rotatePiece();
    controller.updateView();
  }
});


