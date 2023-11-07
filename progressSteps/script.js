//Setting variables up below
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

//Setting up event listener for next button
next.addEventListener('click', () =>{
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    //Calling update function
    update()

})

//Setting up event listener for prev button
prev.addEventListener('click', () =>{
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

     //Calling update function
     update()

})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    //Setting progress bar color as it hits each step

    progress.style.width = (actives.length -1) / (circles.length -1) *
    100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}