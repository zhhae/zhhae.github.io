let sources = [
'img/ZHH HOLDING_Page_01.jpg',
'img/ZHH HOLDING_Page_02.jpg',
'img/ZHH HOLDING_Page_03.jpg',
'img/ZHH HOLDING_Page_04.jpg',
'img/ZHH HOLDING_Page_05.jpg',
'img/ZHH HOLDING_Page_06.jpg',
'img/ZHH HOLDING_Page_07.jpg',
'img/ZHH HOLDING_Page_08.jpg',
'img/ZHH HOLDING_Page_09.jpg',
'img/ZHH HOLDING_Page_10.jpg'];


let imgTag,
clonedTag;

for (let i = 0; i < sources.length; i++) {
  imgTag = document.createElement('img');
  imgTag.src = sources[i];
  if (i == 0) imgTag.classList.add('active');
  clonedTag = imgTag.cloneNode(true);
  document.querySelector('.page-left').appendChild(imgTag);
  document.querySelector('.page-right').appendChild(clonedTag);
}

const imgs = document.querySelectorAll('.page-left img');
let orig,
curr;

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function () {
    if (this.classList.contains('active')) return false;

    orig = Array.prototype.indexOf.call(imgs, document.querySelector('.page-left img.active'));
    curr = Array.prototype.indexOf.call(imgs, this);

    document.querySelector('.page-left img.active').classList.remove('active');
    this.classList.add('active');

    document.querySelectorAll('.page-left img')[orig].classList.remove('active');
    document.querySelectorAll('.page-right img')[orig].classList.remove('active');
    document.querySelectorAll('.page-left img')[curr].classList.add('active');
    document.querySelectorAll('.page-right img')[curr].classList.add('active');

    return false;
  });
}