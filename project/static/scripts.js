let searchBar = document.querySelector(".search-bar"),
    closeButton = document.querySelector(".close"),
    inputBar = document.querySelector(".search-bar input"),
    logo = document.querySelector(".logo"),
    menu = document.querySelector(".menu"),
    search = document.querySelector(".search-bar button");

search.addEventListener("click", () => {
    searchBar.removeAttribute("retract", "");
    searchBar.setAttribute("expand", "");
})

search.addEventListener("click", () => {
    logo.removeAttribute('show1', "");
    logo.removeAttribute('show2', "");
    logo.setAttribute('none1', "");
    menu.removeAttribute('show1', "");
    menu.removeAttribute('show2', "");
    menu.setAttribute('none1', "");
    logo.addEventListener('animationend', () => {
        logo.setAttribute('none2', "");
    }, {once: true})
    menu.addEventListener('animationend', () => {
        menu.setAttribute('none2', "");
    }, {once: true})
})
closeButton.addEventListener("click", () => {
    logo.removeAttribute('none1', "");
    logo.removeAttribute('none2', "");
    logo.setAttribute('show1', "");
    menu.removeAttribute('none1', "");
    menu.removeAttribute('none2', "");
    menu.setAttribute('show1', "");
    logo.addEventListener('animationend', () => {
        logo.setAttribute('show2', "")
    }, {once: true})
    menu.addEventListener('animationend', () => {
        menu.setAttribute('show2', "")
    }, {once: true})
})

closeButton.addEventListener("click", () => {
    searchBar.removeAttribute("expand", "");
    searchBar.setAttribute("retract", "");
});

search.addEventListener("click", () => closeButton.classList.add("open"));
closeButton.addEventListener("click", () => closeButton.classList.remove("open"));

class MobileNavbar {
    constructor(menuItems, menu) {
        this.menuItems = document.querySelector(menuItems);
        this.menu = document.querySelector(menu);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

handleClick() {
    this.menuItems.classList.toggle(this.activeClass);
}
addClickEvent() {
    this.menu.addEventListener("click", this.handleClick);
}
init() {
    if (this.menuItems) {
    this.addClickEvent();
    }
    return this;
}
}
const mobileNavbar = new MobileNavbar(
".menu-items",
".menu",
);
mobileNavbar.init();

let modal = document.querySelector('.modal'),
closeModal = document.querySelectorAll('.close-modal');

modal.showModal();
closeModal.forEach((i) => {
    i.addEventListener('click', () => {
      modal.close();
    })
  })

let signinButton = document.querySelector("#sign-up"),
loginButton = document.querySelector("#log-in"),
card = document.querySelector(".card");

signinButton.addEventListener("click", () => card.classList.add("rotate"));
loginButton.addEventListener("click", () => card.classList.remove("rotate"));

const signUp = document.querySelector("#sign-card");
signUp.addEventListener("submit", signUpSubmit);

function signUpSubmit(event) {
    event.preventDefault();

    const formData = new FormData(signUp);

    fetch(signUp.action, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const modalForm = doc.querySelector("#sign-card");
        signUp.innerHTML = modalForm.innerHTML;

        let signinButton = document.querySelector("#sign-up"),
        loginButton = document.querySelector("#log-in"),
        card = document.querySelector(".card");
        signinButton.addEventListener("click", () => card.classList.add("rotate"));
        loginButton.addEventListener("click", () => card.classList.remove("rotate"));

        let modal = document.querySelector('.modal'),
        closeModal = document.querySelectorAll('.close-modal');

        closeModal.forEach((i) => {
            i.addEventListener('click', () => {
            modal.close();
            })
        })
    })
}

const logIn = document.querySelector("#login-card");
logIn.addEventListener("submit", logInSubmit);

function logInSubmit(event) {
    event.preventDefault();

    const formData = new FormData(logIn);

    fetch(logIn.action, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const modalForm = doc.querySelector("#login-card");
        logIn.innerHTML = modalForm.innerHTML;

        let signinButton = document.querySelector("#sign-up"),
        loginButton = document.querySelector("#log-in"),
        card = document.querySelector(".card");
        signinButton.addEventListener("click", () => card.classList.add("rotate"));
        loginButton.addEventListener("click", () => card.classList.remove("rotate"));

        let modal = document.querySelector('.modal'),
        closeModal = document.querySelectorAll('.close-modal');

        closeModal.forEach((i) => {
            i.addEventListener('click', () => {
            modal.close();
            })
        })
    })
}