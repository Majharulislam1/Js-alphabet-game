const start_section = document.querySelector('.start');
const game_section = document.querySelector('.game_sections');
const final = document.querySelector('.final');
const character_word = document.querySelector('#character');
let score = document.getElementById("score");
let lives = document.getElementById("lives");
let total_score= document.getElementById("total_score");


function play() {
     start_section.classList.add('hidden');
     game_section.classList.remove('hidden');
     game_section.classList.add('visible');
}




const word = 'abcdefghijklmnopqrstuvwxyz';
const character = word.split('');
function game() {
     let character_index = Math.round(Math.random() * 25);
     character_word.innerText = character[character_index];
     const btn = document.getElementById(`${character_word.innerText}`);
     btn.style.backgroundColor = '#FFA500';
}
game();


window.addEventListener("keyup", getStart);

function getStart(e) {

    if(e.key== 'Escape'){
     game_section.classList.add('hidden');
     game_section.classList.remove('visible');
      final.classList.add('visible');
      final.classList.remove('hidden');
    }
    
     if (character_word.innerText == e.key) {
          document.getElementById(`${character_word.innerText}`).style.backgroundColor="#fff";
         score.innerText= parseInt(score.innerText) + 1;

          game();
          
     }
     else {

            
               lives.innerText=lives.innerText-1;
             
             
             
            if(parseInt(lives.innerText) ===0){

               game_section.classList.add('hidden');
               game_section.classList.remove('visible');
                final.classList.add('visible');
                final.classList.remove('hidden');


               total_score.innerText=score.innerText;


               document.getElementById(`${character_word.innerText}`).style.backgroundColor="#fff";
            }
         
     }
}



function get_play(){
    play();
    game();
    score.innerText=0;
    lives.innerText=3;

    final.classList.remove('visible');
    final.classList.add('hidden');
    
}


