const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrayOfImg = [
    {image: 'images/pic1.jpg'}, 
    {image: 'images/pic2.jpg'},
    {image: 'images/pic3.jpg'},
    {image: 'images/pic4.jpg'},
    {image: 'images/pic5.jpg'}
];

/* Declaring the alternative text for each image file */
const altText = {
    'images/pic1.jpg': 'Closeup of a human eye',
    'images/pic2.jpg': 'Rock that looks like a wave',
    'images/pic3.jpg': 'purple and white flowers',
    'images/pic4.jpg': 'section of a wall from a pharoah\'s tomb',
    'images/pic5.jpg': 'moth on a leaf'
}

/* Looping through images */

for(let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', arrayOfImg[i].image);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
	if (btn.getAttribute('class') === 'dark') {
		btn.setAttribute('class', 'light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	}

	else {
		btn.setAttribute('class', 'dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
	}
};