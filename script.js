const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus();}});
document.querySelector('#year').textContent=new Date().getFullYear();
const contactPhone='5588996248510';
document.querySelector('#brief').addEventListener('submit',event=>{event.preventDefault();const idea=document.querySelector('#idea').value.trim();const status=document.querySelector('#form-status');if(!idea){status.textContent='Contanos un poco sobre tu idea.';return;}const content='Hola EUFÍA, tengo una idea para mi marca.\n\n'+idea;const url='https://wa.me/'+contactPhone+'?text='+encodeURIComponent(content);window.open(url,'_blank','noopener,noreferrer');status.textContent='Abrimos WhatsApp con tu consulta preparada. Revisala y enviála desde allí.';});
