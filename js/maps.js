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
        
        // Right arrow or Down arrow
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const nextIndex = (currentIndex + 1) % buttons.length;
            buttons[nextIndex].click();
        }
        // Left arrow or Up arrow
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            buttons[prevIndex].click();
        }
    }
    
    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // COMMENT: Add your custom map-specific interactions below
    // For example, you could add hover effects on map images to show callout names
    // or add functionality to highlight specific areas of maps when buttons are clicked
    
    // Example of how to add a feature to show detailed callouts for a map
    // Uncomment and customize if you want to implement this feature
    /*
    const showCalloutsButtons = document.querySelectorAll('.show-callouts-btn');
    showCalloutsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mapId = this.getAttribute('data-map');
            const calloutOverlay = document.querySelector(`#${mapId}-callouts`);
            calloutOverlay.classList.toggle('visible');
        });
    });
    */
});