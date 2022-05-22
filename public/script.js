const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

nav.classList.toggle('active');

//Script for FAQ element.
//Udemy Project #12
toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})

const faqtoggles = document.querySelectorAll('.faq-toggle')

faqtoggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

//Script for ripple button element and animation.
//Udemy Project #20
const formButton = document.getElementById('submitBtn');
formButton.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
})

//Script for toast animation/message.
//Udemy Project #27
const toasts = document.getElementById('toasts')

const messages = [
    'Make sure to fill all fields!',
    'Did you fill in all fields?'
]

const types = ['info', 'success', 'error']

submitBtn.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
