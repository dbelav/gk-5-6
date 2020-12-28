let dragElement = Array.from(document.querySelectorAll('.dragElement'))
let curentElement

dragElement.forEach(e =>{
    e.addEventListener('click', e => {
        // drag()
        curentElement = e.currentTarget
        curentElement.addEventListener('mouseup', e =>{
            e.currentTarget.style.left = e.clientX /2 + 'px'
            console.log(45) 
        })
        // console.log(curentElement)
        // console.log(e.clientX +' ' +e.clientY)
        e.currentTarget.children[1].classList.toggle('displayNone')
        e.currentTarget.children[1].addEventListener('click', e => {
            e.currentTarget.parentElement.classList.toggle('displayNone')
        })
    })
})
function drag(){
    if(curentElement){
        curentElement.addEventListener('click', e =>{
            console.log(e.clientX + ' ' +  e.clientY)
        })
    }
}
// drag()


