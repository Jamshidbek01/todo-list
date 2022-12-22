let btn = document.querySelector('.btn')
let list = document.querySelector('.todo-list')
let close = document.getElementsByClassName('trash')
let addlist = document.getElementsByTagName("li");
let active = document.getElementsByTagName('span')
for (let i = 0; i < addlist.length; i++) {
    let img = document.createElement('img')
    img.className = 'trash'
    addlist[i].appendChild(img)
    document.querySelector('img').src = 'image/trash.png'
}
btn.addEventListener('click', function add(e) {
    e.preventDefault()
    let input = document.querySelector('.input').value
    let li = document.createElement('li')
    let span = document.createElement('span')
    let inputvalue = document.createTextNode(input);
    li.appendChild(span)
    span.appendChild(inputvalue)
    if (input === '') {
        document.querySelector('p').innerHTML = 'Text kiriting!!!'
        document.querySelector('p').style = `
        animation: shake 150ms 2 linear;
            animation-iteration-count: infinite;
        `
    } else {
        document.querySelector('.todo-list').appendChild(li);
        document.querySelector('p').innerHTML = ''
    }
    document.querySelector('input').value = ''
    let img = document.createElement('img')
    img.className = 'trash'
    img.src = 'image/trash.png'
    li.appendChild(img)
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    for (let i = 0; i < active.length; i++) {
        active[i].onclick = function () {
            active[i].classList.toggle('active')
        }
    }
})
