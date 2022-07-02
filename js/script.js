const mario = document.querySelector('.mario'); /*ADICIONANDO
A CLASS PULAR NA IMAGEM DO MÁRIO*/

const jump = () => {
    mario.classList.add('jump');

}

document.addEventListener('keydown',jump);
