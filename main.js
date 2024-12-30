const W = document.querySelector('.W')
const btn = document.querySelector('.btn')
const inp = document.querySelector('.inp')
const body = document.querySelector('.body')

btn.addEventListener('click' , () => {
    let app = inp.value;
    W.innerHTML = app;

    if(app === 'black'){
        body.classList.add('black');
        W.innerHTML = '';

    }
    else if(app === 'white'){
        body.classList.remove('black');
        W.innerHTML = '';

   
    }   
    

  

})
