const changeStat = document.getElementById('change');
const click = document.querySelector('.projects');
const moveDown = document.querySelector('.box-grid3');

click.addEventListener('click', result);

changeStat.style.visibility = 'hidden';


function result(){
    if(changeStat.style.visibility == 'hidden') {
        changeStat.style.visibility = 'visible';
    }
    else{
        changeStat.style.visibility = 'hidden';
    }
}