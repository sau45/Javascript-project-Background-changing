'use strct'

const arr =['red','yellow','blue','brown','black'];

const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click',function(){
    const randomNumber = Math.trunc(Math.random()*5);
    color.textContent = arr[randomNumber];
    console.log(randomNumber);
    document.body.style.backgroundColor = arr[randomNumber];
})