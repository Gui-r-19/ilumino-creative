const config=window.ILUMINO_SITE;
const nav=document.querySelector('#nav'),menu=document.querySelector('.menu');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});
if(config.logo){document.querySelectorAll('.brand').forEach(brand=>{const img=document.createElement('img');img.src=config.logo;img.alt='Ilumino Creative';img.className='official-logo';brand.replaceChildren(img);});}
const whatsapp=config.whatsapp.replace(/\D/g,'');const contact=whatsapp?'https://wa.me/'+whatsapp+'?text='+encodeURIComponent('Olá, Ilumino! Gostaria de conversar sobre um projeto.'):"#briefing";
document.querySelectorAll('.contact-link').forEach(a=>a.href=contact);
document.querySelector('.contact-note').textContent=whatsapp?'A conversa começa pelo nosso WhatsApp.':'Comece pelo briefing de 1 minuto. O WhatsApp está em preparação.';
config.clients.forEach(client=>{const img=document.createElement('img');img.src=client.logo;img.alt=client.name;img.loading='lazy';document.querySelector('#client-logos').append(img);});
document.querySelector('#client-strip').hidden=!config.clients.length;
const projectGroup=document.createElement('div');projectGroup.className='project-group';document.querySelector('#project-grid').append(projectGroup);
config.projects.forEach(project=>{const brand=document.createElement('div');brand.className='brand-item';if(project.logo){const img=document.createElement('img');img.src=project.logo;img.alt=project.name;img.width=160;img.height=36;brand.append(img);}else{const monogram=document.createElement('span');monogram.className='brand-initial';monogram.setAttribute('aria-hidden','true');monogram.textContent=project.name.split(' ').map(w=>w[0]).join('');const name=document.createElement('span');name.textContent=project.name;brand.append(monogram,name);}projectGroup.append(brand);});
document.querySelector('#project-pending').hidden=!!config.projects.length;
document.querySelector('#year').textContent=new Date().getFullYear();
const motion=document.querySelector('#motion-toggle'),reduce=matchMedia('(prefers-reduced-motion: reduce)');let paused=false;
function sync(){const stop=paused||reduce.matches;document.documentElement.dataset.motion=stop?'paused':'running';motion.setAttribute('aria-pressed',String(stop));motion.textContent=reduce.matches?'Movimento reduzido':stop?'Retomar animações':'Pausar animações';motion.disabled=reduce.matches;}
motion.addEventListener('click',()=>{paused=!paused;sync();});reduce.addEventListener('change',sync);sync();

if(config.projects.length){const copy=projectGroup.cloneNode(true);copy.setAttribute('aria-hidden','true');copy.inert=true;document.querySelector('#project-grid').append(copy);}
