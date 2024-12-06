const GameCategories = [
    { id: 0, name: 'Choose Category' },
    { id: 1, name: 'All' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Shooter' },
    { id: 4, name: 'Other' }
];

const Games = [
    { 
        id: 1, 
        idGame: 2, 
        gameName: `Assassin's Creed Mirage`
    },
    { 
        id: 2, 
        idGame: 3, 
        gameName: `Counter Strike 2`
    },
    { 
        id: 3, 
        idGame: 3, 
        gameName: `Call of Duty Modern Warfare`
    },
    { 
        id: 4, 
        idGame: 2, 
        gameName: `Ghost of Tsushima`
    },
    { 
        id: 5, 
        idGame: 2, 
        gameName: `God of War`
    },
    { 
        id: 6, 
        idGame: 3, 
        gameName: `Fortnite`
    },
    { 
        id: 7, 
        idGame: 4, 
        gameName: `League of Legends`
    },
    { 
        id: 8, 
        idGame: 2, 
        gameName: `Assassin's Creed Valhalla`
    },
    { 
        id: 9, 
        idGame: 4, 
        gameName: `Forza Horizon 5`
    },
    { 
        id: 10, 
        idGame: 2, 
        gameName: `Sekiro™: Shadows Die Twice`
    },
    { 
        id: 11, 
        idGame: 3, 
        gameName: `PUBG`
    },
    { 
        id: 12, 
        idGame: 2, 
        gameName: `Elden Ring`
     },
    { 
        id: 13, 
        idGame: 4, 
        gameName: `Horizon Zero Dawn`
    },
    { 
        id: 14, 
        idGame: 2, 
        gameName: `Grand Theft Auto V`
    },
    { 
        id: 15, 
        idGame: 2, 
        gameName: `Red Dead Redemption 2`
    },
    { 
        id: 16, 
        idGame: 4, 
        gameName: `Hogwarts Legacy`
    }
];

// DINAMICKO ISPISIVANJE PRVOG SELEKTA

let ddlGc = `<select class="form-select" id="ddlCategory">`;
GameCategories.forEach(category => {
    ddlGc += `<option value="${category.id}">${category.name}</option>`;
});
ddlGc += `</select>`;
ddlGc+=`<label for="ddlCategory">Discover Your Game Category</label>`
document.querySelector("#ddl-category").innerHTML = ddlGc;

// DINAMICKO ISPISIVANJE DRUGOG SELEKTA

let ddlGames = `<select class="form-select" id="ddlGames" disabled>
    <option value="0">Choose Game</option>
</select>`;
ddlGames+=`<label for="ddlGames">Pick Your Next Game</label>`
document.querySelector("#ddl-games").innerHTML = ddlGames;

document.querySelector("#ddlCategory").addEventListener("change", function () {
    let selectedCategory = parseInt(this.value);
    let gamesDropdown = document.querySelector("#ddlGames");

    if (selectedCategory === 0) {
        gamesDropdown.setAttribute("disabled", "disabled");
        gamesDropdown.innerHTML = `<option value="0">Choose Game</option>`;
    } 
    else {
        gamesDropdown.removeAttribute("disabled");
        gamesDropdown.innerHTML = `<option value="0">Choose Game</option>`;
        
        let filteredGames = selectedCategory === 1 ? Games : Games.filter(item => item.idGame === selectedCategory);
        
        filteredGames.forEach(item => {
            gamesDropdown.innerHTML += `<option value="${item.id}">${item.gameName}</option>`;
        });
    }
});

//REGEX

//FIRST NAME

var Fname = document.querySelector("#Fname");
var FnameRegEx = /^[A-Z][a-z]{1,14}$/;

//LAST NAME

var Lname = document.querySelector("#Lname");
var LnameRegEx = /^[A-Z][a-z]{1,14}$/;

//EMAIL

var email = document.querySelector("#email");
var emailRegEx = /(@gmail\.com|@yahoo\.com|@ict\.edu\.rs)$/;


// ERRORS

var errorFn = document.querySelector("#errorFname");
var errorLn = document.querySelector("#errorLname");
var errorEmail = document.querySelector("#errorEmail");
var errorDdl = document.querySelector("#errorDdl");
var errorDdlGames = document.querySelector("#errorDdl-games");
var errorRb = document.querySelector("#errorRb");
var errorChb = document.querySelector("#errorChb");

var successMessage = document.querySelector("#successMessage");

var btnSubmit = document.querySelector("#btn-submit");
btnSubmit.addEventListener('click', validateForm);

function validateForm(){
    ErrorNumber = 0;
    setError(errorFn, 'Invalid first name', !FnameRegEx.test(Fname.value));
    setError(errorLn, 'Invalid last name', !LnameRegEx.test(Lname.value));
    setError(errorEmail, 'Invalid email', !emailRegEx.test(email.value));

    var ddl = document.querySelector('#ddl-category select');
    setError(errorDdl, 'Not selected', !ddl || ddl.value == '0');
    var ddlGa = document.querySelector('#ddl-games select');
    setError(errorDdlGames, 'Not selected', !ddlGa || ddlGa.value == '0');

    
    var gender = document.getElementsByName('gender');
    var isGenderSelected = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            isGenderSelected = true;
            break;
        }
    }

    if (!isGenderSelected) {
        setError(errorRb, 'Please select a gender', 1);
    } else {
        setError(errorRb, '', 0);
    }

    var chb = document.querySelector('#chb');
    if (!chb.checked) {
        setError(errorChb, 'You must agree to terms and conditions', 1);
    } else {
        setError(errorChb, '', 0);
    }
    
    if (ErrorNumber === 0) {
        successMessage.innerHTML = `<p class='fs-5'>Form submitted successfully!</p>`;
        successMessage.style.color = '#28a745';
        successMessage.style.display = 'block';
    } else {
        successMessage.innerHTML = '';
        successMessage.style.display = 'none';
    }
}
// setError funkcija (lakse,brze i ne ponavlja se kod)
function setError(element, message, error){
    if(element){
        element.innerHTML = message;
        element.style.color = error ? '#ff0000' : 'transparent';
        element.style.display = error ? 'block' : 'none';
    }
    if (error) {
        ErrorNumber++;
    }
}

$(document).ready(function () {
const faqItem = [
    {
        question: "How can I purchase games from your website?",
        answer: "You can buy games directly from our website by browsing our catalog, adding the desired games to your cart, and proceeding to checkout. We offer various payment options for your convenience."
    },
    {
        question: "What platforms are the games available for?",
        answer: "Our games are available for a range of platforms, including PC, PlayStation, Xbox, Nintendo Switch, and more. Each game listing specifies the compatible platforms."
    },
    {
        question: "What is your return policy for games?",
        answer: "We have a flexible return policy. If you encounter any issues with your purchase, such as technical problems or receiving a damaged physical copy, please contact us within [X] days for assistance."
    },
    {
        question: "Are there any discounts or promotions available?",
        answer: "We regularly run discounts and promotions on select games. Keep an eye on our website or subscribe to our newsletter to stay updated on the latest deals."
    },
    {
        question: "Can I pre-order upcoming game releases?",
        answer: "Yes, you can pre-order upcoming game releases through our website. Pre-ordering ensures that you'll receive the game on its release date or as soon as it becomes available."
    },
    {
        question: "Is there a loyalty or rewards program for frequent customers?",
        answer: "Yes, we have a loyalty program for our frequent customers. Earn points for every purchase and redeem them for discounts or exclusive rewards."
    },
    {
        question: "How can I contact customer support for assistance?",
        answer: "You can reach our customer support team via email at [gamehaven@email.com], through the live chat feature on our website during business hours, or by phone at [069-123-4567]. We're here to help with any inquiries or issues you may have."
    }
];

    var faqContainer = $("#faq-container");
    faqItem.forEach((faq, index) => {
        var faqDiv = `
            <div class="col-md-9 mb-3">
                <button class="btn btn-question btn-send text-start mb-3 toggle-faq" data-index="${index}">
                    <p class="m-0 p-1">${faq.question}</p>
                </button>
                <div class="faq-answer" style="display: none;">
                    <div class="card card-body">
                        <p>${faq.answer}</p>
                    </div>
                </div>
            </div>
        `;
        faqContainer.append(faqDiv);
    });

    $(".toggle-faq").on("click", function () {
        const index = $(this).data("index");
        $(".faq-answer").eq(index).slideToggle();
    });

    
});
