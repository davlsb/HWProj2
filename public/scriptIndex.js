const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

nav.classList.toggle('active');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})


//Text on the home page
const textEl = document.getElementById('info')
const speedEl = document.getElementById('speed')
const text = "We are Computer Science students from Queens College, New York, learning Web Development from our Professor Matthew Fried. <br> We are detail oriented, love to spend time on fixing the little details and optimizing our projects, and are able to follow own tasks as well as others, while understanding the dependencies that others have in the projects.<br>"
let idx = 1
let speed = 300 / 10

writeText()

/*This function makes the text on the home page appear as if
we're typing the text. 
*/
function writeText() {
    textEl.innerHTML = text.slice(0, idx)

    idx++

    setTimeout(writeText, speed)
}
