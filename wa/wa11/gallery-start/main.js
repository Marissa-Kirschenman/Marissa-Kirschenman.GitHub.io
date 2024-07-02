const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['beach.jpg', 'boulder.png', 'dog.png', 'snow.png', 'rox.png'];

const alts = {
    'beach.jpg': 'Destin Flordia beach',
    'boulder.jpg': 'Farrand field',
    'dog.png': 'My dog Lulu',
    'snow.png': 'Estes Park Colorado',
    'rox.png': 'Colorado Rockies baseball'
  };

  for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
    }
    btn.addEventListener('click', () => {
        const btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
          btn.setAttribute('class', 'light');
          btn.textContent = 'Lighten';
          overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      }
      
       else {
          btn.setAttribute('class', 'dark');
          btn.textContent = 'Darken';
          overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      }
      });
