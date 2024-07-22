let dark = document.querySelector("i");
let iconBar = document.querySelector(".fa-bars");
let navMenu = document.querySelector(".nav-menu");
let listMenu = document.querySelector(".list-menu");
let link = document.getElementsByClassName("link");


dark.addEventListener("click", (e) => {

    if (e.target.classList.contains("fa-moon")) {
        dark.classList.replace("fa-moon", "fa-sun")
        document.documentElement.style.setProperty('--mainColor', '#ffffff');
        document.documentElement.style.setProperty('--secondColor', "#000000");
        document.documentElement.style.setProperty('--cardColor', '#f4f4f5');
        document.documentElement.style.setProperty('--fontMain', '#09090b');
    } else {
        dark.classList.replace("fa-sun", "fa-moon")
        document.documentElement.style.setProperty('--mainColor', '#09090b');
        document.documentElement.style.setProperty('--secondColor', "#85858d");
        document.documentElement.style.setProperty('--cardColor', '#151515');
        document.documentElement.style.setProperty('--fontMain', '#ddd');
    }

})

dark.addEventListener("click", () => {

    if (!dark.classList.contains("animate")) {
        dark.classList.add("animate");
    }
    setTimeout(() => {
        dark.classList.remove("animate");
    }, 1000);
});




/////////////////////////////////
listMenu.addEventListener("click", (e) => {
    const target = e.target;
    const links = Array.from(link);
    if (target.matches("a")) {
        links.forEach(element => {
            element.classList.remove("active");
            element.removeAttribute("style");
        });
    }
    target.classList.add("active");
    target.style.color = "#ddd";
});



// window.addEventListener("scroll", () => {
//     console.log("object");
//  });





iconBar.addEventListener("click", (e) => {
    e.stopPropagation();

    navMenu.style.display === "block" ?
        navMenu.style.display = "none" : navMenu.style.display = "block";
});

document.addEventListener("click", () => {
    navMenu.style.display = "";
});

window.addEventListener("resize", () => {
    navMenu.style.display = "";

});


let nn = document.querySelector(".nn");
let slides = document.querySelectorAll(".slide");

let counter = 0;

slides.forEach((element, i,) => {
    element.style.left = `${i * 100}%`
});


nn.addEventListener("click", (e) => {

    if (e.target.classList.contains("prev")) {
        counter--;
        if (counter < 0) counter = 0;
        slideImg();
    }
    else if (e.target.classList.contains("next")) {
        counter++;
        if (counter > slides.length - 1) counter = slides.length - 1;
        slideImg();
    }
});

const slideImg = () => {
    slides.forEach((e) => {
        e.style.transform = `translateX(-${counter * 100}%)`;
    });
}


// let activate = document.getElementsByClassName("activate");
// let home = document.getElementById("home");
// let about = document.getElementById("about");

// listMenu.addEventListener("click", (e) => {

//     const target = e.target;
//     activate = Array.from(activate);

//     activate.forEach(element => {
//         element.style.display = "none";
//         if (target.textContent.trim().toLocaleLowerCase() === "home") {
//             home.style.display = "block";
//         } else if (target.textContent.trim().toLocaleLowerCase() === "about") {
//             about.style.display = "block";
//         }

//     });
// });