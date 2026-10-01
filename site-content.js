// Preencha os arquivos reais. As listas vazias não inventam clientes ou projetos.
window.ILUMINO_SITE = {
  instagram: 'https://www.instagram.com/iluminocreative/',
  whatsapp: '',
  logo: '', // Caminho do arquivo oficial, por exemplo assets/logo-ilumino.svg
  clients: [], // {name:'Nome confirmado',logo:'assets/cliente.svg'}
  projects: ['Instituto Lumina','Aurora Partners','Vertex Cloud','Studio Ark','Nexmed','Bella Clínica'].map(name=>({name,service:'Cliente Ilumino Creative',image:''})) // {name:'Nome confirmado',service:'Site institucional',image:'assets/projeto.webp',description:'O que foi criado',url:''}
};
