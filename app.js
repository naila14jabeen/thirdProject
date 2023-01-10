console.log('Hello World')

const ham = document.getElementById('ham');
const nav = document.querySelector('.nav-bar')
const cross = document.getElementById('cross')
const handleClick = ()=>{
        nav.style.top='0px'
}
ham.addEventListener('click',handleClick)


cross.addEventListener('click',function(){
    nav.style.top='-1000px'
})
