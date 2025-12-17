document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});
