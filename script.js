var buttons = document.querySelectorAll('button')

document.getElementById('iya').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('image');
    img.src = 'teknisi.png';
    document.getElementById('judul').innerText = 'Anda Berbohong!';
    document.querySelector('.container > .main-container').style.backgroundColor = '#E12E2E';
    document.querySelector('.container > .main-container > p').innerText = 'Anda adalah seorang Teknisi'
});

document.getElementById('tidak').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('image');
    img.src = 'mahasiswa.png';
    document.getElementById('judul').innerText = 'Anda Benar!';
    document.querySelector('.container > .main-container').style.backgroundColor = '#6FD240';
    document.querySelector('.container > .main-container > p').innerText = 'Anda adalah seorang Mahasiswa'
});
