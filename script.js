// Sélectionner les éléments nécessaires
const carouselImages = document.querySelectorAll('.carousel'); // Images du carrousel
const dots = document.querySelectorAll('.dot'); // Points indicateurs
const leftArrow = document.querySelector('.left-arrow'); // Flèche gauche
const rightArrow = document.querySelector('.right-arrow'); // Flèche droite
let currentIndex = 0; // Index de l'image active

// Fonction pour afficher une slide en fonction de l'index
function showSlide(index) {
    // Afficher l'image correspondant à l'index et masquer les autres
    carouselImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });

    // Mettre à jour les indicateurs
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Ajouter les événements pour les flèches
leftArrow.addEventListener('click', () => {
    // Passer à l'image précédente (et boucler à la fin)
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showSlide(currentIndex);
});

rightArrow.addEventListener('click', () => {
    // Passer à l'image suivante (et boucler au début)
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showSlide(currentIndex);
});

// Ajouter les événements pour les points indicateurs
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i; // Mettre à jour l'index avec celui du point cliqué
        showSlide(currentIndex);
    });
});

// Afficher la première slide par défaut
showSlide(currentIndex);



document.addEventListener('DOMContentLoaded', () => {
    const arrowBook = document.querySelector('.arrow');
    const dropMenu = document.querySelector('.drop-menu');
    const arrowDestinations = document.querySelector('.arrow1');
    const subMenu = document.querySelector('.sub-menu');

    // Fonction pour afficher/masquer un menu
    const toggleMenu = (menu) => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    };

    // Événement pour afficher/masquer le menu Book
    arrowBook.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêcher la fermeture des menus lors du clic sur la flèche
        toggleMenu(dropMenu);
        subMenu.style.display = 'none'; // Masquer l'autre sous-menu si ouvert
    });

    // Événement pour afficher/masquer le menu Destinations
    arrowDestinations.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêcher la fermeture des menus lors du clic sur la flèche
        toggleMenu(subMenu);
        dropMenu.style.display = 'none'; // Masquer l'autre sous-menu si ouvert
    });

    // Fermer les menus si l'utilisateur clique ailleurs
    document.addEventListener('click', () => {
        dropMenu.style.display = 'none';
        subMenu.style.display = 'none';
    });
});




