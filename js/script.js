const mario = document.querySelector('.mario'); /*ADICIONANDO
A CLASS PULAR NA IMAGEM DO MÁRIO*/

const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => 
    {
      mario.classList.remove('jump');  
    },
        500);

}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); /*
  Pegando a posição do Mário, o '+' na frente converte o valor
  para número, e o replace final remove os caracteres 'px'
  que vinham junto*/

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition <   100) {
    pipe.style.animation = 'none'; /*Finaliza a animação
    quando o Mário bate no tub o*/ 
    pipe.style.left = `${pipePosition}px`; /*Coloca
    a posição do tubo como idêntica àquela na qual
    o Mário bateu*/ 

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`; /*Parando o
    Mário no exato lugar onde perdeu-se o jogo*/ 

    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginleft = '50px';

    clearInterval(loop);
  }


}, 10)

document.addEventListener('keydown',jump);


