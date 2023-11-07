//Creating a variable of panels below. Selecting all the panels.
const panels = document.querySelectorAll('.panel')

//Adding a class of active to the event listener on click.
panels.forEach (panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

//Creating a function to remove active classes.
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}