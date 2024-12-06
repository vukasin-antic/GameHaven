// INDEX.HTML
window.addEventListener('load', function(){
    generateMenu();
    generateService();
    generateLatestGames();
    generateAuthorInfo();
})

// MENI

const menu = [
    {
        text : "Home",
        link : "index.html",
    },
    {
        text : "Shop",
        link : "shop.html"

    },
    {
        text : "Contact Us",
        link : "contact-us.html"

    },
    {
        text : "Author",
        link : "author.html"

    }
];

function generateMenu() {
    var navbar = document.querySelector('#navbarNavDropdown');
    const currentURL = window.location.href;
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'navbar-nav fw-normal');
  
    menu.forEach(function (item) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', item.link);
        a.setAttribute('class', 'nav-link');
        a.textContent = item.text;
        if (currentURL.includes(item.link)) {
            a.classList.add('active');
        }
        li.appendChild(a);
        ul.appendChild(li);
    });
    navbar.appendChild(ul);
}

// SLIDER

const carouselItems = [

    {   bgImg: 'img1', 
        colorTitle: 'rdr2',
        title: 'Red Dead Redemption 2', 
        text: ' stands as a gaming masterpiece, blending an immersive open world with a compelling narrative. Its rich storytelling, intricate character development, stunning visuals, and attention to detail elevate it, offering players an unparalleled and unforgettable Wild West experience.',
        img: 'rdr2-logo-cover',
        alt: 'rdr2',
        imgKlasa: 'rdr2-img',
        sale: '67',
        price: '19.79'
    },
    {   bgImg: 'img2',
        colorTitle: 'er',
        title: 'Elden Ring', 
        text: ', a collaborative masterpiece between Hidetaka Miyazaki and George R.R. Martin, unfolds a dark and mysterious fantasy world. Renowned for its challenging gameplay, intricate lore, and breathtaking landscapes, Elden Ring captivates players with its unparalleled depth and innovation in the action RPG genre.',
        img: 'elden-ring-logo',
        alt: 'elden-ring',
        imgKlasa: '',
        sale: '50',
        price: '29.99'
    },
    {   bgImg: 'img3',
        colorTitle: 'aw',
        title: "Assassin's Creed Valhalla", 
        text: ' offers a Viking odyssey, seamlessly blending history with mythic elements. With stunning visuals, robust storytelling, and vast open-world exploration, Valhalla delivers an immersive experience, combining stealth, combat, and strategic choices for an epic adventure in Norse mythology.',
        img: 'assasin-creed-valhala-logo',
        alt: 'assasin-creed-valhala',
        imgKlasa: '',
        sale: '75',
        price: '14.99'
    }
];

function autoSlider(){
    var carousel = document.querySelector(".carousel-inner");
    if(carousel){
    let htmlSlider=``;
    carouselItems.forEach(function(item){
        htmlSlider += `<div class="carousel-items ${item.bgImg}">
            <div class="container main-games">
               <div class="row justify-content-center">
                  <div class="col-lg-7 align-self-center pb-2 ">
                     <div class="caption header-text  p-4">
                        <h2 >Welcome to Game Haven</h2>
                        <h3>Today's offer: <span class="fw-bold text-uppercase ${item.colorTitle}">${item.title}</span></h3>
                        <p class="fs-5"><span class="fs-3">${item.title}</span>${item.text}
                        </p>
                     </div>
                  </div>
                  <div class="col-lg-4 col-11 offset-lg-1 pt-2">
                     <div class="header-img ${item.imgKlasa}">
                        <img class="img-fluid" src="assets/img/${item.img}.jpg" alt="${item.alt}"/>
                        <span class="offer bg-red">${item.sale}&#37;</span>
                        <span class="price bg-primary">${item.price}&#8364;</span>
                     </div>     
                  </div>
               </div>
            </div>
         </div>`
    })
    carousel.innerHTML=htmlSlider;
    }
}

// SERVICE

const serviceItems = [
    {
        title: 'Game Sale',
        icon: 'fa-tags',
        color: 'danger',
        text: 'Explore our discounted game collection!'
    },
    {
        title: 'New Releases',
        icon: 'fa-gamepad',
        color: 'success',
        text: 'Discover the latest and greatest games.'
    },
    {
        title: 'Featured Games',
        icon: 'fa-star',
        color: 'warning',
        text: 'Discover top-rated and thrilling games.'
    },
    {
        title: 'Game Reviews',
        icon: 'fa-comment',
        color: 'primary',
        text: 'Explore our reviews, find top-rated picks.'
    }
];

function generateService(){
    var service = document.querySelector('#services');
    if (service){
        let htmlService = `<div class="container mt-5">
            <div class="row">`;
        serviceItems.forEach(function(item){
            htmlService += `<div class="col-lg-3 col-md-6 mb-4">
                    <div class="card service-box">
                        <div class="card-body text-center">
                            <h5 class="card-title">${item.title}</h5>
                            <i class="fas fa-3x p-1 ${item.icon} text-${item.color}"></i>
                            <p class="card-text pt-3">${item.text}</p>
                        </div>
                    </div>
                </div>`;
        })
        htmlService += `</div></div>`;
        service.innerHTML = htmlService;
    }
}

// FACTS

const factsItems = [
    {
        number: '5321',
        text: 'Satisfied Gamers',
    },
    {
        number: '1475',
        text: 'Games Sold'
    },
    {
        number: '310',
        text: 'Games in Library'
    },
    {
        number: '80',
        text: 'Exclusive Discounts'
    }
];

var divFacts = document.querySelector('#facts-content');
if(divFacts){
    function createFact(item){
        let fact = `<div class="col-sm-6 col-lg-3 text-center my-3">
                        <h1 class="display-4 text-white custom-counter">${item.number}</h1>
                        <span class="fs-5 fw-semi-bold aw">${item.text}</span>
                    </div>`
        return fact;
            
    };
    for(let item of factsItems){
        divFacts.innerHTML += createFact(item)
    }
}
// FACTS COUNTER

function counterUp(elem, duration, delay){
    var animationStarted = false;
    var value = parseFloat(elem.innerText);
    var starter = 0;
    var steps = duration / delay;
    var step = value / steps;
    elem.innerText = starter;
    function startAnimate(){
        var intId = setInterval(function(){
            if(starter >= value){
            starter = value;
            clearInterval(intId);
        }
        elem.innerText = starter.toFixed(0);
        starter += step;
    }, delay)
}

    document.addEventListener("scroll", function(){
        // var windowHeight = window.innerHeight;
        var scrollTop = elem.getBoundingClientRect().top;
        if(scrollTop < 800 && !animationStarted){
            startAnimate();
            animationStarted = true;
        }
    })
}
var elements = document.querySelectorAll(".custom-counter");  
elements.forEach(function(el){
    counterUp(el, 4000, 10);
})

   
// TRENDING GAMES SECTION

const gameItems = [
    {
        img: 'assassins-creed-mirage',
        alt: 'assassins-creed-mirage',
        title: `Assassin's Creed Mirage`,
        price: '39.99&#8364;',
        id: '1'
    },
    {
        img: 'cs2',
        alt: 'cs2',
        title: `Counter-Strike 2`,
        price: 'FREE',
        id: '2'
    },
    {
        img: 'cod',
        alt: 'Call-of-Duty-Modern-Warfare',
        title: `COD Modern Warfare III`,
        price: '45.49&#8364;',
        id: '3'
    },
    {
        img: 'Ghost-of-Tsushima',
        alt: 'aGhost-of-Tsushima',
        title: `Ghost of Tsushima`,
        price: '59.99&#8364;',
        id: '4'
    }
];

function generateTrending(){
    var trending = document.querySelector("#trending");
    if(trending){
    var tredningContainer = document.createElement('div');
    tredningContainer.classList.add('container');
    trending.appendChild(tredningContainer);
    var trendingRow1 = document.createElement('div');
    trendingRow1.classList.add('row');
    trendingRow1.innerHTML = `<div class="col-8 col-md-6">
                  <h4 class="text-red">Trending</h4>
                  <h2 class="text-primary pt-3">Trending Games</h2>
              </div>
              <div class="col-4 col-md-6 d-flex justify-content-end align-self-center">
                  <a class="btn btn-primary" href="shop.html">View All</a>
              </div>`;
    tredningContainer.appendChild(trendingRow1);
    var trendingRow2 = document.createElement('div');
    trendingRow2.classList.add('row');
    trendingRow2.classList.add('mt-3');
    var htmlTrendingGames=``;
    gameItems.forEach(function(item){
        htmlTrendingGames += `<div class="col-xl-3 col-md-6 p-3 mt-2">
               <div class="card">
                  <img src="assets/img/${item.img}-logo.jpg" alt="${item.alt}" class="img-fluid" />
                  <div class="card-body trending-box">
                     <div class="text-center">
                        <p class="m-0">${item.title}</p>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="sale bg-red text-white btn-price">${item.price}</span>
                        <button type="button" class="btn btn-primary btn-price open-modal" data-modal="modal${item.id}">
                           See more
                        </button>
                     </div>
                  </div>
               </div>
            </div>`
        });
    trendingRow2.innerHTML = htmlTrendingGames;
    tredningContainer.appendChild(trendingRow2);
    }
}

// DINAMICKI ISPISANI MODALI

const modalItems = [
    {
        // Assassin's Creed Mirage
        id: '1',
        title: `Assassin's Creed Mirage`,
        img: 'asm.jpg', // mora .jpg jer se razlikuju extenzije sa slike
        alt: 'assassins-creed-mirage',
        textTitle: 'ABOUT THE GAME',
        text1: `In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions seeking answers and justice.`,
        text2: `Join an ancient organisation and come to understand a new creed - one that will change Basim's fate in ways he never could have imagined.`
    
    },
    {
        // Counter-Strike 2
        id: '2',
        title: `Counter-Strike 2`,
        img: 'cs2.png', // mora .png jer se razlikuju extenzije sa slike
        alt: 'Counter-Strike-2',
        textTitle: 'THE NEXT ERA OF COUNTER-STRIKE IS HERE!',
        text1: `Counter-Strike 2 is the largest technical leap forward in Counter-Strike's history, ensuring new features and updates for years to come.`,
        text2: `Counter-Strike 2 is a free upgrade to CS:GO. So build your loadout, hone your skills, and prepare yourself for what's next!`
    
    },
    {
        // Call of Duty: Modern Warfare III
        id: '3',
        title: `Call of Duty: Modern Warfare III`,
        img: 'cod.png', // mora .png jer se razlikuju extenzije sa slike
        alt: 'Call-of-Duty-Modern-Warfare',
        textTitle: 'THE WAR HAS CHANGED',
        text1: `In Assassin's Creed Mirage, you are Basim, a cunning street thief with nightmarish visions seeking answers and justice.`,
        text2: `The ultranationalist war criminal Vladimir Makarov is extending his grasp across the world causing Task Force 141 to fight like never before.`
    },
    {
        // Ghost of Tsushima Director's Cut
        id: '4',
        title: `Ghost of Tsushima Director's Cut`,
        img: 'got.jpg', // mora .jpg jer se razlikuju extenzije sa slike
        alt: 'Ghost-of-Tsushima',
        textTitle: 'ABOUT THE GAME',
        text1: `A storm is coming. Venture into the complete Ghost of Tsushima DIRECTOR'S CUT on PC; forge your own path through this open-world action adventure and uncover its hidden wonders.`,
        text2: `Brought to you by Sucker Punch Productions, Nixxes Software and PlayStation Studios.`
    }
];

function generateModals(){
    var modal = document.querySelector("#modali");
    if(modal){
    modalItems.forEach(function(item){
        var moduleDiv = document.createElement('div');
        moduleDiv.classList.add('custom-modal');
        moduleDiv.setAttribute('id',`modal${item.id}`);
        let htmlModal = `<div class="custom-modal-dialog">
         <div class="custom-modal-content p-3">
            <div class="custom-modal-header d-flex justify-content-between align-items-center pb-3">
                  <h5 class="modal-title" id="proizvodModal">${item.title}</h5>
                  <button type="button" class="close-modal">&times;</button>
              </div>
              <div class="custom-modal-body py-3">
                  <img src="assets/img/${item.img}" alt="${item.alt}"/>
                  <h2 class="text-center p-2">${item.textTitle}</h2>
                  <p>${item.text1}</p>
                  <p>${item.text2}</p>
               </div>
               <div class="custom-modal-footer d-flex justify-content-between align-items-center pt-3">
               <a href="shop.html" class="text-secondary">Purchase Now</a>
                  <button type="button" class="btn btn-secondary close-modal">Close</button>
               </div>
            </div>
         </div>`
         moduleDiv.innerHTML = htmlModal;
         modal.appendChild(moduleDiv);
    });
    }
}

// MODALI

document.addEventListener("DOMContentLoaded", function () {
    var openButtons = document.querySelectorAll(".open-modal");
    var modals = document.querySelectorAll(".custom-modal");
    var closeButtons = document.querySelectorAll(".close-modal");

    openButtons.forEach((button) => {
        button.addEventListener("click", function () {
            var modalId = this.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.closest(".custom-modal").style.display = "none";
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener("click", function (e) {
            if (e.target === this) {
                this.style.display = "none";
            }
        });
    });
});

// LATEST GAME SECTION

const latestGamesItems = [
    {
        title: 'ARK: Survival Evolved 2',
        img: 'Ark2',
        alt: 'ark2',
        imgTitle: 'Image: Studio Wildcard',
        releaseDate: 'Expected by end of 2024',
        platforms: 'Windows PC and ',
        platforms: `<span class="text-primary">Windows PC</span> and <span class="aw">Xbox Series X</span>`,
        description: `Survival game Ark 2 will expand Studio Wildcard's Ark universe, 
            which introduced players to a desert island packed with dinosaurs in 2015, during its 2024 early access period. 
            Fans found 2023's glitchy remaster Ark: Survival Ascended disappointing, so they're hoping Ark 2 lives up to expectations.`
    },
    {
        title: "BANDLE TALE: A LEAGUE OF LEGENDS STORY",
        img: "Bandle-Tale",
        alt: "bandle-tale",
        imgTitle: "Image: Riot Games",
        releaseDate: "TBD",
        platforms: `<span class="text-primary">Windows PC</span> and <span class="text-red">Nintendo Switch</span>`,
        description: `League of Legends fans will be glad to know that the mystical knotted woods 
            of Bandle City are getting their very own cozy spinoff game. The richly colored role-playing game features characters, 
            huts, and trees as pudgy and delectable-looking as chocolate in a fancy box, and it'll appropriately feature “farm-to-table” cooking.`
    },
    {
        title: "Blight Survival",
        img: "blight-survival",
        alt: "blight-survival",
        imgTitle: "Image: Haenir Studio",
        releaseDate: "Expected by end of 2024",
        platforms: `<span class="text-primary">Windows PC</span>`,
        description: `Blight: Survival offers a thrilling 4-player co-op experience set in an alternate 14th century, where players must navigate 
            the unforgiving no man's land between two desperate states in a ceaseless war. Fight alongside up to three friends, battling 
            both men and monsters in a violent co-op action-horror roguelite that challenges your survival skills and teamwork.`
    }
];

function generateLatestGames() {
    var latestGames = document.querySelector("#latest-games");
    if(latestGames){
    var latestGamesContainer = document.createElement('div');
    latestGamesContainer.classList.add('container');
    latestGames.appendChild(latestGamesContainer);
    var latestGamesRow1 = document.createElement('div');
    latestGamesRow1.classList.add('row');
    latestGamesRow1.innerHTML = `<div class="col-12 mx-auto text-center naslov my-4">
        <h1>Latest games, news and updates</h1>
    </div>`;
    latestGamesContainer.appendChild(latestGamesRow1);
    latestGamesItems.forEach(function(item, index){

        const row = document.createElement("div");
        row.classList.add("row","latest-games-content");
        if (index % 2 !== 0) row.classList.add("flex-row-reverse");

        row.innerHTML = `
            <div class="col-12 mx-auto text-center mt-3">
                <h2>${item.title}</h2>
            </div>
            <div class="col-lg-6 mt-3">
                <img src="assets/img/${item.img}.jpg" alt="${item.alt}" class="img-fluid"/>
                <div class="m-2 pt-2">
                    <p class="text-secondary">${item.imgTitle}</p>
                </div>
            </div>
            <div class="col-lg-6 mx-auto my-3 latest-games-desc align-self-center">
                <p class="fs-4 m-0"><span class="fw-bold">Release date: </span>
                <span class="er">${item.releaseDate}</span>
                </p>
                <p class="fs-4"><span class="fw-bold">Platforms:</span> ${item.platforms}</p>
                <p>${item.description}</p>
            </div>
        `;
        latestGamesContainer.appendChild(row);
    });
    }
}

// FOOTER

const footerItems = [
    {
        title: 'Contact Us',
        text: `Thank you for visiting Game Haven! If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us. We're here to assist you and improve your gaming experience in every way possible.`,
    },
    {
        title: 'About Us',
        text: 'Welcome to Game Haven! Our mission is to provide gamers with unparalleled experiences. Join our vibrant community and immerse yourself in a world of gaming excellence and endless possibilities!',
    }
];

const footerIcons = [
    {
        link: 'https://www.facebook.com/',
        name: 'fa-facebook',
    },
    {
        link: 'https://www.instagram.com/',
        name: 'fa-instagram',
    },
    
    {
        link: 'https://www.linkedin.com/',
        name: 'fa-linkedin',
    },
    {
        link: 'sitemap.xml',
        name: 'fa-sitemap',
    },
    {
        link: 'documentation.pdf',
        name: 'fa-file'
    },
];

function generateFooter(){
    var footerContent = document.querySelector(".latest-games-content");
    footerItems.forEach(function(item){
        var footerContainer = document.createElement('div');
        footerContainer.classList.add('col-sm-6', 'col-md-6', 'col-lg-4');
        footerContainer.innerHTML = `<h2 class="text-center">${item.title}</h2><p class="p-2">${item.text}</p>`;
        footerContent.appendChild(footerContainer);
        
    });
    
    var footerSocialIcons = document.querySelector("#si");
    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-horizontal', 'justify-content-center')
    footerIcons.forEach(function (item, index) {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'fs-2')
        let a = document.createElement('a');
        a.setAttribute('href', item.link);
        a.setAttribute('target', '_blank');
        let i = document.createElement('i');
        if (index > 2 ) i.classList.add('fa',`${item.name}`);
        else i.classList.add('fab',`${item.name}`);
        
        a.appendChild(i);
        li.appendChild(a);
        ul.appendChild(li);
      });
      footerSocialIcons.appendChild(ul);

}

// SHOP.HTML

const shopItems = [

    { //Assassin's Creed Mirage
        class:'Action',
        img: 'assassins-creed-mirage-logo',
        alt: 'assassins-creed-mirage',
        title: `Assassin's Creed Mirage`,
        sale: '',
        price: '',
        newPrice: '49.99&#8364;',
        link: '',
    },
    { //Counter Strike 2
        class:'Shooter',
        img: 'cs2-logo',
        alt: 'cs2',
        title: 'Counter Strike 2',
        sale: 'FREE',
        price: '',
        newPrice: '',
        link: 'https://store.steampowered.com/app/730/CounterStrike_2/',
    },
    { //Call of Duty Modern Warfare
        class:'Shooter',
        img: 'cod-logo',
        alt: 'Call-of-Duty-Modern-Warfare',
        title: 'Call of Duty Modern Warfare',
        sale: '-35%',
        price: '69.99&#8364;',
        newPrice: '45.49&#8364;',
        link: '',
    },
    { //Ghost of Tsushima
        class:'Action',
        img: 'Ghost-of-Tsushima-logo',
        alt: 'Ghost-of-Tsushima',
        title: 'Ghost of Tsushima',
        sale: '-50%',
        price: '59.99&#8364;',
        newPrice: '29.99&#8364;',
        link: '',
    },
    { //God of War
        class:'Action',
        img: 'god-of-war',
        alt: 'god-of-war',
        title: 'God of War',
        sale: '-50%',
        price: '49.99&#8364;',
        newPrice: '25.99&#8364;',
        link: '',
    },
    { //Fortnite
        class:'Shooter',
        img: 'fortnite',
        alt: 'fortnite',
        title: 'Fortnite',
        sale: 'FREE',
        price: '',
        newPrice: '',
        link: 'https://store.epicgames.com/en-US/p/fortnite',
    },
    { //League of Legends
        class:'Other',
        img: 'lol',
        alt: 'lol',
        title: 'League of Legends',
        sale: 'FREE',
        price: '',
        newPrice: '',
        link: 'https://signup.leagueoflegends.com/en-us/signup/redownload',
    },
    { //Assassin's Creed Valhalla
        class:'Action',
        img: 'assasin-creed-valhala-logo',
        alt: 'assasin-creed-valhala',
        title: `Assassin's Creed Valhalla`,
        sale: '-75%',
        price: '59.99&#8364;',
        newPrice: '14.99&#8364;',
        link: '',
    },
    { //Forza Horizon 5
        class:'Other',
        img: 'forza-horizon5',
        alt: 'forza-horizon5',
        title: 'Forza Horizon 5',
        sale: '-50%',
        price: '59.99&#8364;',
        newPrice: '29.99&#8364;',
        link: '',
    },
    { //Sekiro™: Shadows Die Twice
        class:'Action',
        img: 'Sekiro-logo',
        alt: 'sekrio',
        title: 'Sekiro™: Shadows Die Twice',
        sale: '-50%',
        price: '59.99&#8364;',
        newPrice: '29.99&#8364;',
        link: '',
    },
    { //PUBG
        class:'Shooter',
        img: 'pubg',
        alt: 'pubg',
        title: 'PUBG',
        sale: 'FREE',
        price: '',
        newPrice: '',
        link: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/',
    },
    { //Elden Ring
        class:'Action',
        img: 'elden-ring-logo',
        alt: 'elden-ring',
        title: 'Elden Ring',
        sale: '-50%',
        price: '59.99&#8364;',
        newPrice: '29.99&#8364;',
        link: '',
    },
    { //Horizon Zero Dawn
        class:'Other',
        img: 'horizon-zero-dawn',
        alt: 'horizon-zero-dawn',
        title: 'Horizon Zero Dawn',
        sale: '-75%',
        price: '49.99&#8364;',
        newPrice: '12.49&#8364;',
        link: '',
    },
    { //Grand Theft Auto V
        class:'Action',
        img: 'gta-5-logo',
        alt: 'gta-5',
        title: 'Grand Theft Auto V',
        sale: '-63%',
        price: '39.98&#8364;',
        newPrice: '14.98&#8364;',
        link: '',
    },
    { //Red Dead Redemption 2
        class:'Action',
        img: 'rdr2-logo',
        alt: 'rdr2',
        title: 'Red Dead Redemption 2',
        sale: '-67%',
        price: '59.99&#8364;',
        newPrice: '19.79&#8364;',
        link: '',
    },     
    { //Hogwarts Legacy
        class:'Other',
        img: 'hogvarts',
        alt: 'hogwarts-legacy',
        title: 'Hogwarts Legacy',
        sale: '-50%',
        price: '59.99&#8364;',
        newPrice: '29.99&#8364;',
        link: '',
    },
    
];

   var shop = document.querySelector('#shopContainer');
    function createShop(){
    if(shop){
        shopDiv = document.createElement('div');
        shopDiv.classList.add('row', 'mt-2', 'mb-2', 'justify-content-center');
        shopItems.forEach(function(item){
            let html = `<div class="col-lg-3 col-md-6 col-sm-8 col-11 my-3 pt-1 shop-item ${item.class}">
                            <div class="card">
                                <img src="assets/img/${item.img}.jpg" alt="${item.alt}" class="img-fluid">
                                <div class="card-body trending-box">
                                    <p class="m-0 text-center fs-5">${item.title}</p>
                                    <div class="d-flex justify-content-center align-items-center pt-2">
                                    ${item.sale && `<span class="sale bg-primary text-white btn-price">${item.sale}</span>`}
                                    ${!item.link && item.price ? 
                                    `<span class="ps-3 text-decoration-line-through text-secondary">${item.price}</span><a href="contact-us.html" class="btn sale ms-3 bg-red text-white btn-price">${item.newPrice}</a>` 
                                    : !item.link ? 
                                    `<a href="contact-us.html" class="btn sale bg-red text-white btn-price">${item.newPrice}</a>` : ''}
                                    ${item.link ? `<a class='ms-3 btn-price text-secondary text-center' target='_blank' href='${item.link}'>Download here</a>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>`
                            shopDiv.innerHTML += html;
                        })
        shop.appendChild(shopDiv);
        
    }
}

// KLIJENTI

const clientsInfo = [
    {
        img: 'JohnSmith',
        name: 'John Smith',
        text: `I had an amazing experience with this service. The quality exceeded my expectations, and the customer support was incredibly responsive and helpful. I'll definitely be coming back for more!`,
        job: 'Graphic Designer'
    },
    {
        img: 'EthanJohnson',
        name: 'Ethan Johnson',
        text: `I couldn't be happier with the results! From start to finish, everything was handled with professionalism, and I felt valued as a customer. I highly recommend this service to anyone looking for top-notch quality.`,
        job: 'Software Engineer'
    },
    {
        img: 'MichaelBrown',
        name: 'Michael Brown',
        text: `A fantastic experience from the moment I made contact. The team was attentive to all my needs, and the product/service delivered exactly what I was hoping for. I'm extremely satisfied and will definitely return.`,
        job: 'Graphic Designer'
    }
];

var clientDiv = document.querySelector("#client-carousel");
function generateClients(){
    if(clientDiv){
        let clientHtml = ``;
        clientsInfo.forEach(function(item){
            clientHtml += `<div class="client-item">
                <div class="container">
                    <div class="row align-items-center justify-content-around cl-item">
                        <div class="col-lg-3 col-md-4 col-7">
                            <img class="img-fluid rounded-circle" src="assets/img/${item.img}.jpg" alt="${item.img}">
                        </div>
                        <div class="col-lg-7 col-md-8 mt-3">
                            <h4 class="mt-3 mt-1 text-md-start text-sm-center">${item.name}</h4>
                            <p class="fs-5 mt-3">${item.text}
                            </p>
                            <span class="text-muted text-decoration-underline">${item.job}</span>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        clientDiv.innerHTML = clientHtml;
    }
}


//AUTHOR.HTML

const authorInfo = [
    {
        title: 'Name:',
        text: 'Vukašin Antić',
    },
    {
        title: 'Index:',
        text: '65/23',
    },
    {
        title: 'Collage:',
        text: 'ICT | IT',
    }
];

const authorIcons = [
    {
        text: 'facebook',
    },
    {
        text: 'instagram',
    },
    {
        text: 'x-twitter',
    },
    {
        text: 'linkedin',
    }
];

function generateAuthorInfo(){
    var author = document.querySelector("#authorInfo");
    if(author){
    let htmlAuthor = ``;
    authorInfo.forEach(function(item){
        htmlAuthor += `<h6 class="fs-4 text-secondary text-decoration-underline">${item.title}</h6>
        <p class="fs-3 text-success">${item.text}</p>`
    })
    author.innerHTML = htmlAuthor;
    var authorDiv = document.createElement('div');
    authorDiv.classList.add('col-12', 'text-center', 'social-icon', 'author', 'pt-3');
    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-horizontal','justify-content-center');
    authorIcons.forEach(function(item, index){
        let li = document.createElement('li');
        li.classList.add('list-item', 'fs-3');
        let a = document.createElement('a');
        if (index == 2) a.setAttribute('href', `https://www.x.com/`);
        else a.setAttribute('href', `https://www.${item.text}.com/`);
        a.setAttribute('target', '_blank');
        let i = document.createElement('i');
        i.classList.add('fab',`fa-${item.text}`);
        a.appendChild(i);
        li.appendChild(a);
        ul.appendChild(li);
    })
    authorDiv.appendChild(ul);
    author.appendChild(authorDiv);
    }
}

// POZIVANJE FUNKCIJA
autoSlider();
generateTrending();
generateModals();
generateFooter();
createShop();
generateClients();

// jQuery


$(document).ready(function () {
    
    // MOBILE NAV

    $('.mobile-nav-toggle').on('click', function () {
        $('.navbar').toggleClass('navbar-mobile');
        $(this).toggleClass('fa-bars fa-times');
        
        
        if ($('.navbar').hasClass('navbar-mobile')) {
            var mobileMenu = $('#navbarNavDropdown ul').clone();
            if (!$('.navbar-mobile-menu').length) {
                var wrapper = $('<div class="navbar-mobile-menu"></div>');
                wrapper.append(mobileMenu);
                $('.navbar').append(wrapper);
            }
        } else {
            $('.navbar-mobile-menu').remove();
        }
    });

    // CAROUSEL

    $('.carousel-inner').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'ease-in-out',
        speed: 600,
    });

    // SHOP

    var $shopContainer = $('#shopContainer');
    $shopContainer.imagesLoaded(function () {
        $shopContainer.isotope({
        itemSelector: '.shop-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.7s'
        });
    });

    $('#filter-buttons button').on('click', function () {
        $("#filter-buttons button").removeClass('active');
        $(this).addClass('active');
        $shopContainer.isotope({ filter: $(this).data('filter') });
    });

    // KLIJENTI CAROUSEL

    $("#client-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
        ]
    });

    // FOOTER EMAIL

    $(document).ready(function () {
        $('#btn-submit-email').on('click', function () {
            var emailFooter = $('#emailFooter').val();
            var emailRegexFooter = /(@gmail\.com|@yahoo\.com|@ict\.edu\.rs)$/;
    
            if (!emailRegexFooter.test(emailFooter)) {
                $('#message').text('Invalid email').css('color', 'red');
            } else {
                $('#message').text('Successfully subscribed to our newsletter').css('color', 'green');
                $('#emailInput').val('');
            }
        });
    });
});
