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
        image: "assets/news/vct_bundles.avif",
        date: "April 9, 2025",
        title: "VCT Ascended team bundles are now available",
        desc: "Celebrate the Ascension champions with the latest team capsules.",
        link: "#",
    },
    {
        image: "assets/news/valorant_championship.jpg",
        date: "April 2, 2025",
        title: "GLOBAL CHAMPIONSHIP SERIES ANNOUNCED",
        desc: "Get ready for the biggest Palorant tournament of the year with a $2 million prize pool. Qualifiers begin next month.",
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
        image: "assets/news/waylay_art.avif",
        date: "March 28, 2025",
        title: "A spectrum of colors: Waylay art from the community",
        desc: "Check out Waylay in 13 different ways through a million colors.",
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
        image: "assets/news/masters_bangkok.avif",
        date: "February 19, 2025",
        title: "Masters Bangkok: Know Before You Go!",
        desc: "Find out the details about exclusive activations, fan experiences, venue schedules, and event policies!",
        link: "#",
    },
    {
        image: "assets/news/showmatch.avif",
        date: "February 18, 2025",
        title: "New Agent Reveal & Showmatch at Masters Bangkok Grand Finals",
        desc: "Tune in to Masters Bangkok Grand Finals on March 2nd for the first look at a brand new agent",
        link: "#",
    },
    {
        image: "assets/news/tejo_art.avif",
        date: "January 1, 2025",
        title: "Tejo art roundup: The community's newest crush",
        desc: "Our newest agent in 13 different ways by our talented players.",
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

const modalHTML = `
<div id="news-modal" class="news-modal">
  <div class="modal-content">
    <span class="close-modal"></span>
    <div class="modal-image">
      <img src="" alt="News image">
    </div>
    <div class="modal-header">
      <div class="modal-date"></div>
      <h2 class="modal-title"></h2>
    </div>
    <div class="modal-body">
      <p class="modal-description"></p>
    </div>
    <div class="modal-footer">
      <a href="javascript:void(0)" class="modal-btn">Visit Official Page</a>
    </div>
  </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

// get modal elements
const modal = document.getElementById('news-modal');
const modalImage = modal.querySelector('.modal-image img');
const modalDate = modal.querySelector('.modal-date');
const modalTitle = modal.querySelector('.modal-title');
const modalDescription = modal.querySelector('.modal-description');
const closeModalBtn = modal.querySelector('.close-modal');

newsData.forEach(news => {
  news.fullContent = `${news.desc} 

${getExtendedContent(news.title)}`;
});

function getExtendedContent(title) {
  const contentMap = {
    "EPISODE 6 ACT 2: REVELATIONS": `
    <h3>New Agent: Waylay</h3>
    <p>Meet our newest Duelist, Waylay. This agent brings a unique set of abilities centered around misdirection and rapid repositioning. Waylay can create decoys that mimic movement patterns and even abilities, making them the perfect agent for mind games.</p>
    
    <h3>Map Updates</h3>
    <p>Pearl has received significant layout changes to address defensive advantages on B site. The middle area has been widened, and several new pathways have been added to give attackers more options.</p>
    
    <h3>Competitive System Overhaul</h3>
    <p>We've completely reworked how MMR functions, with more transparent rating changes and placement matches that better reflect individual performance. New tier-based rewards will be granted at the end of acts based on your peak rank.</p>
    
    <h3>Balance Changes</h3>
    <ul>
      <li>Guardian price reduced from 2,250 to 2,050</li>
      <li>Shorty damage falloff adjusted to be more consistent</li>
      <li>Tejo's Displace ability now has a longer cooldown (35s → 45s)</li>
      <li>Sage's wall health reduced in the first 3 seconds after placement</li>
    </ul>
    
    <h3>Technical Improvements</h3>
    <p>Engine optimizations have reduced loading times by approximately 25% on most systems. We've also added DLSS 3.5 support and improved our anti-cheat detection systems.</p>`,

    "VCT Ascended team bundles are now available": `
    <p>The Ascension champions have proven their worth, and now you can represent them in your matches with our exclusive team bundles!</p>
    
    <h3>What's Included:</h3>
    <ul>
      <li>Team-branded Phantom skin with custom finisher</li>
      <li>Team-branded Vandal skin with custom finisher</li>
      <li>Team-branded melee weapon</li>
      <li>Five player cards featuring each team member</li>
      <li>Team gun buddy</li>
      <li>Exclusive team spray</li>
    </ul>
    
    <h3>Pricing and Availability</h3>
    <p>Each bundle is available for 5,350 VP, or individual items can be purchased separately. 30% of all proceeds will go directly to the teams to support them on their journey.</p>
    
    <p>These bundles will be available until May 15th, 2025, so make sure to grab them before they're gone!</p>`,

    "GLOBAL CHAMPIONSHIP SERIES ANNOUNCED": `
    <p>The Global Championship Series marks the pinnacle of Palorant competitive play, featuring the best teams from around the world competing for glory and a massive $2 million prize pool.</p>
    
    <h3>Format and Schedule</h3>
    <p>Regional qualifiers begin May 10th across North America, EMEA, Asia Pacific, Latin America, and Japan. Each region will send their top teams to the main event in Los Angeles starting August 1st.</p>
    
    <p>The tournament will feature a group stage followed by a double elimination bracket, culminating in a grand final on August 15th at the Crypto.com Arena.</p>
    
    <h3>Viewer Rewards</h3>
    <p>Watch matches on our official platform to earn exclusive in-game items including:</p>
    <ul>
      <li>Championship card series</li>
      <li>Animated spray collection</li>
      <li>Special Championship gun buddy</li>
      <li>Chance to win Championship Knife (limited to 1,000 viewers)</li>
    </ul>
    
    <h3>Participating Teams</h3>
    <p>Qualified teams will be announced following regional tournaments. Stay tuned for more information on the competing teams and full schedule details.</p>`,

    "April Fools: Smite 2 Reveal": `
    <p>We got you! While we love the enthusiasm for Smite skins, this was our annual April Fools' joke. However, we're happy to announce something real: the community-favorite Smite collection will be returning to the store for a limited time!</p>
    
    <h3>Smite Collection Returns</h3>
    <p>Starting April 8th and running through April 22nd, you'll be able to purchase the complete Smite Collection, including:</p>
    <ul>
      <li>Smite Classic (Vandal)</li>
      <li>Smite Nova (Phantom)</li>
      <li>Smite Pulse (Operator)</li>
      <li>Smite Edge (Melee)</li>
      <li>Smite Buddy and Card</li>
    </ul>
    
    <h3>Special April Fools Game Mode</h3>
    <p>Additionally, check out our special "Upside Down" game mode available until April 5th, where all guns fire in reverse patterns and abilities have unexpected effects!</p>`,

    "A spectrum of colors: Waylay art from the community": `
    <p>Our newest agent has captured the community's imagination, and the amazing artwork we've received showcases Waylay in countless creative interpretations.</p>
    
    <h3>Community Art Contest</h3>
    <p>Submit your own Waylay artwork for a chance to win 10,000 VP and have your creation featured as an in-game player card! Contest ends April 30th.</p>`,

    "NEW AGENT TEASER: WHO IS WAYLAY?": `
    <p>A mysterious figure emerges from the shadows, wielding light as both deception and weapon. Waylay is our newest Duelist, designed to confuse enemies and create opportunities through misdirection.</p>
    
    <h3>Origin Story</h3>
    <p>Born in Singapore to a family of renowned illusionists, Waylay discovered their radiant abilities during a stage performance gone wrong. Their power to manipulate light and create convincing decoys made them a person of interest to both Kingdom Corporation and Valorant Protocol.</p>
    
    <h3>Abilities Preview</h3>
    <p><strong>FLASH STEP (E)</strong>: Teleport a short distance while leaving behind a light clone that mimics your previous movement.</p>
    
    <p><strong>LUMINARY (Q)</strong>: Deploy a controllable orb of light that can be detonated to blind enemies.</p>
    
    <p><strong>MIRROR IMAGE (C)</strong>: Create a stationary clone that appears to use abilities when enemies approach.</p>
    
    <p><strong>PRISMATIC ARSENAL (X)</strong>: Equip light-based versions of your teammates' signature abilities for one round. Each ability can only be used once.</p>
    
    <h3>Release Date</h3>
    <p>Waylay will join the agent roster with the launch of Episode 6 Act 2 on April 10th, 2025.</p>`,

    "Masters Bangkok: Know Before You Go!": `
    <p>Attending Masters Bangkok in person? Here's everything you need to know to make the most of your experience at our premier international tournament.</p>
    
    <h3>Venue Information</h3>
    <p>The event will be held at Impact Arena, Muang Thong Thani. Gates open 2 hours before the first match each day. Please bring valid ID matching your ticket name.</p>
    
    <h3>Exclusive Fan Activities</h3>
    <ul>
      <li><strong>Agent Experience Zone</strong>: Interactive installations based on agent abilities</li>
      <li><strong>Pro Player Meet & Greets</strong>: Daily signing sessions with competing teams</li>
      <li><strong>Cosplay Contest</strong>: March 1st, with 100,000 THB in prizes</li>
      <li><strong>Merchandise Store</strong>: Exclusive event items not available online</li>
      <li><strong>Community Art Gallery</strong>: Featuring works from Thai artists</li>
    </ul>
    
    <h3>Digital Attendee Benefits</h3>
    <p>All ticket holders will receive a special code for the "Bangkok Masters" gun buddy and player card. Premium ticket holders also receive the limited "Golden Guardian" knife skin.</p>
    
    <h3>Health and Safety</h3>
    <p>Mask wearing is optional but recommended. Hand sanitizing stations will be available throughout the venue. Please follow all posted safety guidelines.</p>`,

    "New Agent Reveal & Showmatch at Masters Bangkok Grand Finals": `
    <p>The excitement of Masters Bangkok will reach its peak on March 2nd with not only the Grand Finals match but also the worldwide reveal of our newest agent!</p>
    
    <h3>Agent Reveal</h3>
    <p>Immediately following the trophy ceremony, we'll present a full cinematic reveal and gameplay demonstration of our newest agent. This agent will introduce an entirely new mechanic to Palorant and promises to shake up the meta in exciting ways.</p>
    
    <h3>Pro Showmatch</h3>
    <p>Following the reveal, eight pro players from eliminated teams will participate in a special showmatch featuring the new agent. This will give fans the first look at how the agent performs in the hands of the world's best players.</p>
    
    <h3>Special Streams</h3>
    <p>Pro players and content creators will be allowed to stream their first impressions and gameplay following the showmatch, with the agent becoming available on test servers for select partners.</p>
    
    <h3>In-Game Rewards</h3>
    <p>Watch the Grand Finals and reveal on our official platforms to earn a special player card featuring the new agent. Watch for at least one hour to qualify.</p>`,

    "Tejo art roundup: The community's newest crush": `
    <p>Since Tejo's release in January, the community has embraced our Chilean initiator with incredible artwork showcasing their personality and unique time-manipulation abilities.</p>
    
    <h3>Creator Spotlight</h3>
    <p>We're especially impressed by @ChronoDesign's animated short that explores Tejo's relationship with Killjoy through a series of time-looped interactions. The attention to detail in the time mechanics matches our own lore perfectly!</p>
    
    <p>Want your Tejo artwork featured? Use #TejoTimeline on social media for a chance to be showcased on our official channels.</p>`
  };

  return contentMap[title] || `<p>Additional details coming soon! Stay tuned for more information about "${title}".</p>`;
}

function setupModalFunctionality() {
  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // close modal if click behind it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // esc key for closing modal
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

function setupReadMoreButtons() {
  const readMoreButtons = document.querySelectorAll('.news-read-more');
  
  readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // get the news data
      const newsItem = newsData[index];
      
      // insert modal with newsItem
      modalImage.src = newsItem.image;
      modalImage.alt = newsItem.title;
      modalDate.textContent = newsItem.date;
      modalTitle.textContent = newsItem.title;
      modalDescription.innerHTML = newsItem.fullContent;
      
      // show
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // no scroll behind modal
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const newsArticlesPerPage = 7;
    const allNewsArticles = Array.from(document.querySelectorAll('.news-card, .news-featured'));
    const totalPages = Math.ceil(allNewsArticles.length / newsArticlesPerPage);
    
    // set up news pages
    const newsPages = {};
    for (let i = 0; i < totalPages; i++) {
        const pageNum = i + 1;
        const startIndex = i * newsArticlesPerPage;
        const endIndex = startIndex + newsArticlesPerPage;
        newsPages[pageNum] = allNewsArticles.slice(startIndex, endIndex);
    }
    
    function showPage(pageNum) {
        // hide all
        allNewsArticles.forEach(article => {
            article.style.display = 'none';
        });
        
        // show selected
        if (newsPages[pageNum]) {
            newsPages[pageNum].forEach(article => {
                if (article.classList.contains('news-featured')) {
                    article.style.display = 'flex';
                } else {
                    article.style.display = 'block';
                }
            });
        }
        
        updatePaginationButtons(pageNum);

        setupModalFunctionality();

        setupReadMoreButtons();
    }
    
    function updatePaginationButtons(currentPage) {
        const paginationButtons = document.querySelectorAll('.pagination-btn');
        
        paginationButtons.forEach(btn => {
            btn.classList.remove('active');
            
            if (!isNaN(btn.textContent) && parseInt(btn.textContent) === currentPage) {
                btn.classList.add('active');
            }
            
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
                    return;
                }
            } else {
                targetPage = parseInt(this.textContent);
            }
            
            showPage(targetPage);
            
            document.querySelector('.news-container').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // default
    showPage(1);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    allNewsArticles.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

