/**
 * absolute top-14 w-full left-0 border bg-slate-800 divide-gray-900 divide-y-2
 */
const menu=document.querySelector('.menu');
const hammenu=document.querySelector('.ham-menu');

menu.addEventListener('click', displaymenu);
hammenu.addEventListener('click', displaymenu);

const iconBars = document.querySelector('.fa-bars-staggered');
const iconClose = document.querySelector('.fa-xmark ');

function displaymenu(){
if(menu.classList.contains('absolute')){
  menu.classList.add('hidden');
  iconBars.style.display='inline';
  iconClose.style.display='none';

  menu.classList.remove('w-full');
  menu.classList.remove('top-14');
  menu.classList.remove('left-0');
  menu.classList.remove('absolute');
  menu.classList.remove('bg-slate-800');
  menu.classList.remove('divide-gray-900');
  menu.classList.remove('divide-y-2');
}else{
  menu.classList.remove('hidden');
  iconBars.style.display='none';
  iconClose.style.display='inline';

  menu.classList.add('top-14');
  menu.classList.add('w-full');
  menu.classList.add('left-0');
  menu.classList.add('absolute');
  menu.classList.add('bg-slate-800');
  menu.classList.add('divide-gray-900');
  menu.classList.add('divide-y-2');
}

}
  

