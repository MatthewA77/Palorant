onStart()
function onStart(){
    let navbarContainer = document.getElementById("navbar-container");
    if(navbarContainer){
        navbarContainer.innerHTML = `<nav class="container-navbar">
        <div class="container-logo">
            <img src="assets/logo-notext.png" alt="Palorant-Logo">
            <p class="game-dev">GIOT GAMES</p>
        </div>
        <ul class="ul-navbar" id="navbar">
            <li class="li-navbar hideOnMobile">
                <a href="index.html">Home</a>
            </li>
            <li class="li-navbar hideOnMobile">
                <a href="agents.html">Agents</a>
            </li>
            <li class="li-navbar hideOnMobile">
                <a href="maps.html">Maps</a>
            </li>
            <li class="li-navbar hideOnMobile">
                <a href="news.html">News</a>
            </li>
            <li class="li-navbar hideOnMobile">
                <a href="report.html">Report</a>
            </li>
            <li class="li-navbar" id="sidebar-show" onclick=showSidebar(event)>
                <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
            </li>
        </ul>
        <ul class="ul-navbar" id="sidebar">
            <li class="li-navbar" id="sidebar-close" onclick=hideSidebar(event)>
                <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
            </li>
            <li class="li-navbar">
                <a href="index.html">Home</a>
            </li>
            <li class="li-navbar">
                <a href="agents.html">Agents</a>
            </li>
            <li class="li-navbar">
                <a href="maps.html">Maps</a>
            </li>
            <li class="li-navbar">
                <a href="news.html">News</a>
            </li>
            <li class="li-navbar">
                <a href="report.html">Report</a>
            </li>
        </ul>
    </nav>`;
    }
}

function showSidebar(event) {
    event.preventDefault();
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add('active');
}

function hideSidebar(event) {
    event.preventDefault();
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove('active');
}

// get the width of the window and hide sidebar if the width is greater than 768px
function updateSidebar() {
    const width = document.documentElement.clientWidth;
    const sidebar = document.getElementById("sidebar");
    if (width > 768) {
        sidebar.classList.remove('active');
    }
}

// Check width on load
window.addEventListener('load', updateSidebar);

// Check width everytime the page gets resize
window.addEventListener('resize', updateSidebar);