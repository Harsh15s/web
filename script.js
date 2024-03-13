document.getElementById('it-box').addEventListener('click', function() {
    this.classList.toggle('flip');
    let img = this.querySelector('img');
    img.style.display = (img.style.display === 'none') ? 'block' : 'none';
});

document.getElementById('core-box').addEventListener('click', function() {
    this.classList.toggle('flip');
    let img = this.querySelector('img');
    img.style.display = (img.style.display === 'none') ? 'block' : 'none';
});
