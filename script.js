const homeDiv = document.querySelector('.home')
const homeBtn = document.querySelector('#homeBtn')
const whoamiBtn = document.querySelector('#whoamiBtn')
const whoamiDiv = document.querySelector('.whoami')

homeBtn.addEventListener('click', () => {
    homeDiv.innerHTML = 
        `<h2 class="middle-text">Hi there, i'm <span class="name">Taylan!</span></h2>`

    homeDiv.style.display = 'block'
    whoamiDiv.style.display = 'none'
})

whoamiBtn.addEventListener('click', () => {
    whoamiDiv.innerHTML = `<p>Hey, i'm learning web development currently, and this is mine one of the practice sites, i hope you like it :) </p>
    <br>
    <p> Also i like to play games, listening music and so on! </p>
    <br>
    <p>I hope i can be software engineer in the future, i will try my best.</p>`

    homeDiv.style.display = 'none'
    whoamiDiv.style.display = 'block'
}) 
