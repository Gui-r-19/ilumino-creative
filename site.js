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
config.projects.forEach(project=>{const card=document.createElement('article');card.className='project';const image=document.createElement('img');image.src=project.image;image.alt=project.description||project.name;image.loading='lazy';image.width=800;image.height=600;const title=document.createElement('h3');title.textContent=project.name;const service=document.createElement('p');service.textContent=project.service;card.append(image,title,service);if(project.url){const link=document.createElement('a');link.href=project.url;link.textContent='Visitar projeto ↗';card.append(link);}projectGroup.append(card);});
document.querySelector('#project-pending').hidden=!!config.projects.length;
document.querySelector('#year').textContent=new Date().getFullYear();
const motion=document.querySelector('#motion-toggle'),reduce=matchMedia('(prefers-reduced-motion: reduce)');let paused=false;
function sync(){const stop=paused||reduce.matches;document.documentElement.dataset.motion=stop?'paused':'running';motion.setAttribute('aria-pressed',String(stop));motion.textContent=reduce.matches?'Movimento reduzido':stop?'Retomar animações':'Pausar animações';motion.disabled=reduce.matches;}
motion.addEventListener('click',()=>{paused=!paused;sync();});reduce.addEventListener('change',sync);sync();

if(config.projects.length){const copy=projectGroup.cloneNode(true);copy.setAttribute('aria-hidden','true');copy.inert=true;document.querySelector('#project-grid').append(copy);}
