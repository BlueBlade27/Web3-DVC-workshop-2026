// Mock data for movie content
const movieData = {
    trending: [
        { id: 1, title: 'The Crown', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=The+Crown' },
        { id: 2, title: 'Squid Game', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Squid+Game' },
        { id: 3, title: 'Money Heist', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Money+Heist' },
        { id: 4, title: 'Wednesday', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Wednesday' },
        { id: 5, title: 'The Witcher', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=The+Witcher' },
        { id: 6, title: 'Bridgerton', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Bridgerton' },
        { id: 7, title: 'Ozark', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Ozark' },
        { id: 8, title: 'Dark', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Dark' }
    ],
    popular: [
        { id: 9, title: 'Breaking Bad', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Breaking+Bad' },
        { id: 10, title: 'Narcos', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Narcos' },
        { id: 11, title: 'Black Mirror', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Black+Mirror' },
        { id: 12, title: 'Peaky Blinders', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Peaky+Blinders' },
        { id: 13, title: 'The Queen\'s Gambit', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Queen+Gambit' },
        { id: 14, title: 'Lupin', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Lupin' },
        { id: 15, title: 'Vikings', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Vikings' },
        { id: 16, title: 'The Last Kingdom', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Last+Kingdom' }
    ],
    action: [
        { id: 17, title: 'Extraction', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Extraction' },
        { id: 18, title: 'The Gray Man', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Gray+Man' },
        { id: 19, title: '6 Underground', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=6+Underground' },
        { id: 20, title: 'Red Notice', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Red+Notice' },
        { id: 21, title: 'Triple Frontier', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Triple+Frontier' },
        { id: 22, title: 'The Old Guard', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Old+Guard' },
        { id: 23, title: 'Spenser Confidential', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Spenser' },
        { id: 24, title: 'The Adam Project', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Adam+Project' }
    ],
    comedy: [
        { id: 25, title: 'The Office', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=The+Office' },
        { id: 26, title: 'Brooklyn Nine-Nine', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Brooklyn+99' },
        { id: 27, title: 'Friends', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Friends' },
        { id: 28, title: 'Parks and Recreation', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Parks+Rec' },
        { id: 29, title: 'Community', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Community' },
        { id: 30, title: 'Russian Doll', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Russian+Doll' },
        { id: 31, title: 'Grace and Frankie', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Grace+Frankie' },
        { id: 32, title: 'Unbreakable Kimmy Schmidt', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Kimmy+Schmidt' }
    ],
    documentaries: [
        { id: 33, title: 'Our Planet', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Our+Planet' },
        { id: 34, title: 'Making a Murderer', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Making+Murderer' },
        { id: 35, title: 'The Social Dilemma', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Social+Dilemma' },
        { id: 36, title: 'Tiger King', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Tiger+King' },
        { id: 37, title: 'My Octopus Teacher', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Octopus+Teacher' },
        { id: 38, title: 'Wild Wild Country', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Wild+Country' },
        { id: 39, title: 'Abstract', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Abstract' },
        { id: 40, title: 'Chef\'s Table', image: 'https://via.placeholder.com/250x140/e50914/ffffff?text=Chefs+Table' }
    ]
};

// Initialize the page
function init() {
    populateRows();
    setupNavbar();
    setupRowNavigation();
    setupClickHandlers();
}

// Populate movie rows
function populateRows() {
    Object.keys(movieData).forEach(category => {
        const rowElement = document.getElementById(`${category}-row`);
        if (rowElement) {
            rowElement.innerHTML = movieData[category].map(movie => `
                <div class="movie-card" data-id="${movie.id}">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="movie-card-info">
                        <div class="movie-card-title">${movie.title}</div>
                    </div>
                </div>
            `).join('');
        }
    });
}

// Setup navbar scroll effect
function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Setup row navigation (left/right buttons)
function setupRowNavigation() {
    const rows = document.querySelectorAll('.content-row');
    
    rows.forEach(row => {
        const rowItems = row.querySelector('.row-items');
        const leftBtn = row.querySelector('.row-nav-left');
        const rightBtn = row.querySelector('.row-nav-right');
        
        if (leftBtn && rightBtn && rowItems) {
            leftBtn.addEventListener('click', () => {
                rowItems.scrollBy({
                    left: -500,
                    behavior: 'smooth'
                });
            });
            
            rightBtn.addEventListener('click', () => {
                rowItems.scrollBy({
                    left: 500,
                    behavior: 'smooth'
                });
            });
        }
    });
}

// Setup click handlers
function setupClickHandlers() {
    // Movie card clicks
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => {
            const movieId = card.dataset.id;
            console.log('Movie clicked:', movieId);
            // This is where you'll add React functionality later
        });
    });
    
    // Play button
    const playBtn = document.querySelector('.btn-play');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            console.log('Play clicked');
            alert('Playing: Stranger Things');
        });
    }
    
    // More Info button
    const infoBtn = document.querySelector('.btn-info');
    if (infoBtn) {
        infoBtn.addEventListener('click', () => {
            console.log('More Info clicked');
            alert('More Info about: Stranger Things');
        });
    }
    
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            console.log('Search clicked');
            alert('Search feature - to be implemented');
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
