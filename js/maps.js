const mapContainer = document.querySelector('.map-content-container');
const mapData = [
    {
        id: "haven-content",
        mapName: "Haven",
        image: "../assets/maps/Haven/Haven-6.jpg",
        loc: "Thimphu, Bhutan",
        desc: "Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There's more territory to control, but defenders can use the extra real estate for aggressive pushes.",
        uniqueFeatures: [
            "The only map with three bomb sites (A, B, and C)",
            "Multiple connecting pathways between sites",
            "Long sightlines for snipers",
            "Elevated positions for tactical advantage"
        ],
        tips: "Control of mid is crucial as it allows quick rotations between all three sites. Sentinels are particularly effective at holding the numerous entrances to sites, while Duelists can take advantage of the multiple entry points."
    },
    {
        id: "bind-content",
        mapName: "Bind",
        image: "../assets/maps/Bind/Bind_2.png",
        loc: "Rabat, Morocco",
        desc: "Two sites. No middle. You'll need to decide whether to push through the stacked defensive positions of the market or brave the open spaces of the hookah room. Both are risky, but the rewards are worth it.",
        uniqueFeatures: [
            "One-way teleporters to quickly move between areas",
            "No mid section, forcing direct site approaches",
            "Numerous corners and cubbies for defenders",
            "Short and long-range engagement spots"
        ],
        tips: "The teleporters can be both a blessing and a curse, allowing quick rotations but making loud noises when used. Defenders should place utility near teleporter exits, while attackers should consider using the teleporter as a diversion tactic."
    },
    {
        id: "split-content",
        mapName: "Split",
        image: "../assets/maps/Split/Split_1.jpg",
        loc: "Tokyo, Japan",
        desc: "If you want to go far, you'll have to go up. A pair of sites split by an elevated middle allows for rapid rotation and flanking maneuvers. Each site is built with a point of elevation to watch over approaches.",
        uniqueFeatures: [
            "Vertical gameplay with ropes for quick movement",
            "Elevated mid area with significant height advantage",
            "Narrow chokepoints throughout the map",
            "Multiple levels make for complex engagements"
        ],
        tips: "Mid control is essential on Split, as it provides the fastest rotation route. Defenders have a natural height advantage that attackers must overcome. Smoke and flash agents are valuable for pushing through the tight corridors."
    },
    {
        id: "ascent-content",
        mapName: "Ascent",
        image: "../assets/maps/Ascent/-lz-ascent-06.jpg",
        loc: "Venice, Italy",
        desc: "An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they're down, you'll have to destroy them or find another path.",
        uniqueFeatures: [
            "Closable metal doors at both bomb sites",
            "Large, open middle courtyard",
            "Numerous elevated positions and windows",
            "Destructible doors that can be shot through"
        ],
        tips: "The middle courtyard is a high-risk, high-reward area that offers quick rotations. The metal doors can block off certain entrances but emit a loud sound when activated. Operators and other precision weapons excel in the open spaces."
    },
    {
        id: "icebox-content",
        mapName: "Icebox",
        image: "../assets/maps/Icebox/Icebox-1.jpg",
        loc: "Bennett Island, Russia",
        desc: "Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take the high ground or burrow through the map's many levels to freeze the enemy in their tracks.",
        uniqueFeatures: [
            "Ziplines for vertical movement",
            "Numerous angles and elevated positions",
            "Complex vertical gameplay across multiple levels",
            "Tight corridors combined with open areas"
        ],
        tips: "The complexity of Icebox rewards creative movement and positioning. Vertical angles are particularly important, so watch above and below. The ziplines provide fast but risky rotations, and the tight angles make shotguns more viable than on other maps."
    }
]

let i = 0;
mapData.forEach(map => {
    mapContainer.innerHTML += `
    <div class="map-content ${i === 0 ? 'active' : ''}" id="${map.id}">
        <div class="map-image">
            <img src="${map.image}" alt="${map.mapName} Map">
        </div>
        <div class="map-info">
            <h2>${map.mapName.toUpperCase()}</h2>
            <p class="map-location">Location: ${map.loc}</p>
            <div class="map-description">
                <p>${map.desc}</p>
                <div class="map-features">
                    <h3>UNIQUE FEATURES</h3>
                    <ul>
                        ${map.uniqueFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="map-strategy">
                    <h3>STRATEGY TIPS</h3>
                    <p>${map.tips}</p>
                </div>
            </div>
        </div>
    </div>`;
    i++;
});

// This JavaScript handles the map switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all map navigation buttons
    const mapButtons = document.querySelectorAll('.map-nav-btn');
    
    // Get all map content sections
    const mapContents = document.querySelectorAll('.map-content');
    
    // Add click event listener to each button
    mapButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the map ID from the data attribute
            const mapId = this.getAttribute('data-map');
            
            // Remove active class from all buttons
            mapButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all map content sections
            mapContents.forEach(content => content.classList.remove('active'));
            
            // Show the corresponding map content
            document.getElementById(`${mapId}-content`).classList.add('active');
            
            // Scroll to the map content for better mobile experience
            document.getElementById(`${mapId}-content`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // Add animation effect to map content on load
    mapContents.forEach(content => {
        if (content.classList.contains('active')) {
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 100);
        }
    });
    
    // Function to switch maps with keyboard navigation
    function handleKeyboardNavigation(e) {
        // Find the currently active button
        const activeButton = document.querySelector('.map-nav-btn.active');
        const buttons = Array.from(mapButtons);
        const currentIndex = buttons.indexOf(activeButton);
        
        // Right / Down
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const nextIndex = (currentIndex + 1) % buttons.length;
            buttons[nextIndex].click();
        }
        // Left / Up
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            buttons[prevIndex].click();
        }
    }
    
    document.addEventListener('keydown', handleKeyboardNavigation);
});