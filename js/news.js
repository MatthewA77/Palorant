// Load news to the HTML page
const newsGrid = document.querySelector('.news-grid');
const newsData = [
    {
        image: "assets/news/patch_notes.avif",
        date: "April 5, 2025",
        title: "EPISODE 6 ACT 2: REVELATIONS",
        desc: "The new Episode introduces a new Agent, map updates, and a complete overhaul of the ranking system. Dive into the new competitive season with fresh strategies and unlock exclusive rewards.",
        link: "#",
    },
    {
        image: "assets/news/valorant_championship.jpg",
        date: "April 2, 2025",
        title: "GLOBAL CHAMPIONSHIP SERIES ANNOUNCED",
        desc: "TGet ready for the biggest Palorant tournament of the year with a $2 million prize pool. Qualifiers begin next month.",
        link: "#",
    },
    {
        image: "assets/news/vct_bundles.avif",
        date: "April 9, 2025",
        title: "VCT Ascended team bundles are now available",
        desc: "Celebrate the Ascension champions with the latest team capsules.",
        link: "#",
    },
    {
        image: "assets/news/waylay_new.jpg",
        date: "March 25, 2025",
        title: "NEW AGENT TEASER: WHO IS WAYLAY?",
        desc: "A mysterious light emerges from the darkness. Get your first glimpse of our newest Duelist agent and their enigmatic abilities.",
        link: "#",
    },
    {
        image: "assets/news/waylay_art.avif",
        date: "March 28, 2025",
        title: "A spectrum of colors: Waylay art from the community",
        desc: "Check out Waylay in 13 different ways through a million colors.",
        link: "#",
    },
    {
        image: "assets/news/april_fools.avif",
        date: "April 1, 2025",
        title: "April Fools: Smite 2 Reveal",
        desc: "Yup it's happening. The best skin is back and better than ever.",
        link: "#",
    },
    {
        image: "assets/news/april_fools.avif",
        date: "April 1, 2025",
        title: "April Fools: Smite 2 Reveal",
        desc: "Yup it's happening. The best skin is back and better than ever.",
        link: "#",
    },
    {
        image: "assets/news/april_fools.avif",
        date: "April 1, 2025",
        title: "April Fools: Smite 2 Reveal",
        desc: "Yup it's happening. The best skin is back and better than ever.",
        link: "#",
    },
    {
        image: "assets/news/april_fools.avif",
        date: "April 1, 2025",
        title: "April Fools: Smite 2 Reveal",
        desc: "Yup it's happening. The best skin is back and better than ever.",
        link: "#",
    },
]

let i = 0;
newsData.forEach(news => {
    if (i === 0) {
        newsGrid.innerHTML += `
        <div class="news-featured">
            <div class="news-image">
                <img src="${news.image}">
            </div>
            <div class="news-info">
                <div class="news-date">${news.date}</div>
                <h2 class="news-title">${news.title}</h2>
                <p class="news-excerpt">
                    ${news.desc}
                </p>
                <a href="${news.link}" class="news-read-more">Read More</a>
            </div>
        </div>`;
    } else {
        newsGrid.innerHTML += `
        <div class="news-card">
            <div class="news-image">
                <img src="${news.image}">
            </div>
            <div class="news-info">
                <div class="news-date">${news.date}</div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">
                    ${news.desc}
                </p>
                <a href="${news.link}" class="news-read-more">Read More</a>
            </div>
        </div>`;
    }
    i++;
});

document.addEventListener('DOMContentLoaded', function() {
    // Group news articles by pages
    const newsArticlesPerPage = 7; // One featured article + 6 regular articles per page
    const allNewsArticles = Array.from(document.querySelectorAll('.news-card, .news-featured'));
    const totalPages = Math.ceil(allNewsArticles.length / newsArticlesPerPage);
    
    // Set up news pages
    const newsPages = {};
    for (let i = 0; i < totalPages; i++) {
        const pageNum = i + 1;
        const startIndex = i * newsArticlesPerPage;
        const endIndex = startIndex + newsArticlesPerPage;
        newsPages[pageNum] = allNewsArticles.slice(startIndex, endIndex);
    }
    
    // Function to show a specific page
    function showPage(pageNum) {
        // Hide all news articles first
        allNewsArticles.forEach(article => {
            article.style.display = 'none';
        });
        
        // Show articles for the selected page
        if (newsPages[pageNum]) {
            newsPages[pageNum].forEach(article => {
                if (article.classList.contains('news-featured')) {
                    article.style.display = 'flex';
                } else {
                    article.style.display = 'block';
                }
            });
        }
        
        // Update pagination buttons
        updatePaginationButtons(pageNum);
    }
    
    function updatePaginationButtons(currentPage) {
        const paginationButtons = document.querySelectorAll('.pagination-btn');
        
        paginationButtons.forEach(btn => {
            btn.classList.remove('active');
            
            // If the button is a number, check if it matches the current page
            if (!isNaN(btn.textContent) && parseInt(btn.textContent) === currentPage) {
                btn.classList.add('active');
            }
            
            // If the button is 'Next', adjust href to point to the next page address
            if (btn.textContent === 'Next') {
                if (currentPage < totalPages) {
                    btn.href = `#page-${currentPage + 1}`;
                    btn.classList.remove('disabled');
                } else {
                    btn.href = '#';
                    btn.classList.add('disabled');
                }
            }
        });
    }
    
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            let targetPage;
            
            if (this.textContent === 'Next') {
                const currentPage = parseInt(document.querySelector('.pagination-btn.active').textContent);
                if (currentPage < totalPages) {
                    targetPage = currentPage + 1;
                } else {
                    return; // Return if already last page
                }
            } else {
                targetPage = parseInt(this.textContent);
            }
            
            // Show the target page
            showPage(targetPage);
            
            // Scroll to the top of the news container
            document.querySelector('.news-container').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Show the first page by default
    showPage(1);
    
    // Add animation to news cards when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each news card
    allNewsArticles.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

