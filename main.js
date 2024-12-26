const click = document.querySelector('.click');
const reset = document.querySelector('.reset');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const count = document.querySelector('.count');

click.addEventListener('click', function(){
    let num = Number(count.innerHTML) ;
    count.innerHTML = ++num;
    span1.innerHTML = 'Sanash tugmasi';
    span2.innerHTML = 'marta bosildi.';
});

reset.addEventListener('click', function(){
    count.innerHTML = 0;
    span1.innerHTML = 'Tozalandi.';
    span2.innerHTML = '';
    count.innerHTML = '';
});