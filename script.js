document.addEventListener('DOMContentLoaded', function(){
  const button=document.querySelector('.mobile');
  const menu=document.getElementById('mobile-menu');
  if(!button || !menu) return;
  button.addEventListener('click', function(){
    const open=menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  menu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){menu.classList.remove('open');button.setAttribute('aria-expanded','false');});
  });
});
