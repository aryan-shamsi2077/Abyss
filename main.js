// // toggle hide/show // //

function miniAccount(){

    let miniAccountPop = document.querySelector('.mini-account');

    if (miniAccountPop.style.display === "none") {

        miniAccountPop.style.display = "block";
    } else {    
        
        miniAccountPop.style.display = "none";
    }
};


function miniCard(){
    let miniCardPop = document.querySelector('.mini-card');

    if (miniCardPop.style.display === "none"){

        miniCardPop.style.display = "block";
    }else{

        miniCardPop.style.display = "none";
    }
};

function navSearch(){
    let navSearchPop = document.querySelector('.search-bar');
    let SearchIcon = document.querySelector('.nav-search-place');
    let navItems = document.querySelector('.nav-items');

    if (navSearchPop.style.display === "none"){

        navSearchPop.style.display = "flex";
        SearchIcon.style.display = "none";
        navItems.style.display = "none";
    }else{

        navSearchPop.style.display = "none";
    }
};

function closeSearch(){
    let navSearchPop = document.querySelector('.search-bar');
    let SearchIcon = document.querySelector('.nav-search-place');
    let navItems = document.querySelector('.nav-items');

    if(navSearchPop.style.display === "flex"){

        navSearchPop.style.display = "none";
        SearchIcon.style.display = "flex";
        navItems.style.display = "flex";
    }
};

function openSideBar() {
    document.querySelector('.sidebar').classList.toggle('open');
}

function closeSideBar() {
    document.querySelector('.sidebar').classList.remove('open');
}

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
});