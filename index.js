const images = [
    'http://3.bp.blogspot.com/_hAymWZnRSO0/SmXZpuKNURI/AAAAAAAACDU/wirFJ1e-EKU/s1600/Anime+Hero+3.jpg',
    'http://4.bp.blogspot.com/_hAymWZnRSO0/SmXsAUsH9wI/AAAAAAAACG8/KMAemGUE6O0/s1600/Castlev%C3%A2nia+Curse+of+Darkness.jpg',
    'http://4.bp.blogspot.com/_hAymWZnRSO0/SlsvgVcJJ1I/AAAAAAAAB-s/hDg4a9GRjRM/s1600/Devil+May+Cry+3.jpg',
    'http://3.bp.blogspot.com/_hAymWZnRSO0/SlsolWDQ8-I/AAAAAAAAB9U/xTFVciafe0E/s1600/Dragon_Ball_Z_Budokai_Tenkaichi_3.jpg',
    'http://4.bp.blogspot.com/_hAymWZnRSO0/SmYGpZm-X7I/AAAAAAAACJE/T75QAESRWCA/s1600/God+of+War+1.jpg',
    'http://1.bp.blogspot.com/_hAymWZnRSO0/SmYLv8CBa7I/AAAAAAAACLE/Yv58II6wgDw/s1600/Kingdom+Hearts.jpg',
    'http://2.bp.blogspot.com/_hAymWZnRSO0/SrOdbHyAGDI/AAAAAAAADXc/-ZvkBkw_O2Y/s1600/Marvel+Ultimate+Alliance+2.jpg',
    'http://1.bp.blogspot.com/_hAymWZnRSO0/SmYOhMYombI/AAAAAAAACLk/TUbc-s9yQiI/s1600/Midnight+club+3.jpg',
    'http://3.bp.blogspot.com/_hAymWZnRSO0/Sli9THfoTxI/AAAAAAAABwM/pKzl5E3ockc/s1600/Metal+Gear+3.jpg',
    'http://2.bp.blogspot.com/_hAymWZnRSO0/Sx1vFEOuUTI/AAAAAAAADoA/dL69KFncpQc/s1600/Naruto_Shippuden__Ultimate_Ninja_5.jpg',
    'http://4.bp.blogspot.com/_hAymWZnRSO0/Slfo6ytTbBI/AAAAAAAABss/INIfW4M4NLM/s1600/Need_for_Speed_-_Underground_2.jpg',
    'http://2.bp.blogspot.com/_hAymWZnRSO0/SlZkyEIJLVI/AAAAAAAABr0/uJnOvjKUETk/s1600/Onimusha_3_Demon_Seige.jpg',
    'http://4.bp.blogspot.com/_hAymWZnRSO0/SmXzegyuuUI/AAAAAAAACHM/nC46yeq55lU/s1600/Resident_Evil_4.jpg',
    'http://3.bp.blogspot.com/_hAymWZnRSO0/SlE9_cAaE6I/AAAAAAAABnU/VlVDvIDMfk4/s1600/Rogue+Galaxy.jpg',
    'http://1.bp.blogspot.com/_hAymWZnRSO0/SylIfQ1obpI/AAAAAAAADtA/DXVHiFSmvx8/s1600/Shadow+of+the+Colossos.jpg',  
  ];
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  function loadImages() {
    const container = document.getElementById('image-container');
  
    for (let i = 0; i < images.length; i++) {
        const image = document.createElement('img');
        image.src = getRandomImage();
        image.classList.add('image');
        container.appendChild(image);
    }
  }
  
  loadImages();
  
  window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadImages();
    }
  });