/* 헤더 */

/* 스크롤 제어 */

window.addEventListener('scroll', function(){
  let headerLogo = document.querySelector('.nav_logo');
  let scrollY = window.scrollY;
  if(scrollY > 1000){
    headerLogo.classList.add('scroll');
  }else{
    headerLogo.classList.remove('scroll');
  };
});

// console.log(scrollY);

/* 탑 내비게이션 */

/* 스크롤 제어 */

window.addEventListener('scroll', function(){
  let topNavColor = document.querySelector('.topNav');
  let scrollY = window.scrollY;
  if(scrollY > 1000){
    topNavColor.classList.add('scroll');
  }else{
    topNavColor.classList.remove('scroll');
  };
});

/* 서브 내비게이션 subNav */

/* 호버 효과 */

let topNavMenu = document.querySelectorAll('.topNav ul li a');
let subNavMenu = document.querySelectorAll('.subNav_content');

// console.log(topNavMenu, subNavMenu);

topNavMenu.forEach(function(topNav){
  topNav.addEventListener('mouseenter', function(){
    subNavMenu.forEach(function(subNav){
      subNav.style.display = "none";
    });
    let target = document.getElementById(topNav.dataset.target);
    if(target){
      target.style.display = "flex";
    }
  });
});

subNavMenu.forEach(function(subNav){
  subNav.addEventListener('mouseenter', function(){
    subNav.style.display = "flex";
  });
  subNav.addEventListener('mouseleave', function(){
    subNav.style.display = "none";
  });
});

document.querySelector('.topNav').addEventListener('mouseleave', function(){
  subNavMenu.forEach(function(subNav){
    subNav.style.display = "none";
  });
});

/* 언어 변경 language */

let languageIcon = document.querySelector('.topNav i.fa-globe');
let languageMenu = document.querySelector('.language');

languageIcon?.addEventListener('click', () => {
  if (languageMenu) {
    let isVisible = languageMenu.style.display === 'block';
    languageMenu.style.display = isVisible ? 'none' : 'block';
  }
});

/* 반응형 내비게이션 accordionNav */

let accordionNavIcon = document.querySelector('.accordion_toggle');
let accordionNav = document.querySelector('.accordionNav_wrap');

// console.log(accordionNavIcon, accordionNav);

// 등장 팝업
accordionNavIcon.addEventListener('click', function(){
  if(window.innerwidth > 767) return;
  if(accordionNav.style.display === "none"){
    accordionNav.style.display = "block";
  }else{
    accordionNav.style.display = "none";
  }
})

// 내부 이벤트
document.querySelectorAll('.accordionNav_title').forEach(menu =>{
  menu.addEventListener('click', function(){
    let content = this.nextElementSibling;
    // console.log(content); 
    document.querySelectorAll('.accordionNav_content').forEach(activeContent => {
      if(activeContent !== content){
        activeContent.classList.remove('active');
      }
    })
    content.classList.toggle('active');
  })
})
window.addEventListener('resize', function(){
  if(this.window.innerWidth > 767){
    accordionNav.style.display = "none";
  }
});

/* 섹션 앵커 section_anchor */

window.addEventListener('scroll', function(){
  let scrollAnchor1 = document.querySelectorAll('.section_anchor ul li a strong');
  let scrollAnchor2 = document.querySelectorAll('.section_anchor ul li a span');
  let scrollY = window.scrollY;

  if(scrollY > 1000){
    scrollAnchor1.forEach(el => el.classList.add('gokBlue'));
    scrollAnchor2.forEach(el => el.classList.add('gokBlue'));
  } else {
    scrollAnchor1.forEach(el => el.classList.remove('gokBlue'));
    scrollAnchor2.forEach(el => el.classList.remove('gokBlue'));
  }
});



/* 스크롤 알림 아이콘 scroll_icon */

/* 스크롤 제어 */

window.addEventListener('scroll', function(){
  let scrollIcon = document.querySelector('.scroll_icon');
  let scrollY = window.scrollY;
  if(scrollY > 1000){
    scrollIcon.classList.add('none');
  }else{
    scrollIcon.classList.remove('none');
  };
});

/* 자주가는 서비스 service */

/* 스와이퍼 */

var swiper = new Swiper(".service_swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    767: {
      slidesPerView: 6,
    }
  }
});

/* 함께하는 우리말 다듬기 word_korean */

/* 숫자 카운트 */

let counter = document.querySelector('.korean_info p strong');
counter.textContent = '0';
let targetNum = +counter.getAttribute('data-target');

function updateCounter() {
  let count = +counter.textContent;
  let increment = targetNum / 100;
  let nextCount = Math.ceil(count + increment);
  counter.textContent = nextCount > targetNum ? targetNum : nextCount;

  if (count < targetNum) {
    requestAnimationFrame(updateCounter);
  }
}

updateCounter();

/* 단어 변경 */

let wordList = [];
let wordKoreanList = [];
let originalTexts = [];
let changedTexts = ['제한 목록', '가성비^대체품', '인공^생태^공간', '고령 친화 기술', '사전 접촉 금지 위반'];

for (let i = 1; i <= 5; i++) {
  let word = document.getElementById(`word${i}`);
  let wordKorean = document.getElementById(`wordKorean${i}`);

  wordList.push(word);
  wordKoreanList.push(wordKorean);
  originalTexts.push(wordKorean.textContent);

  word.addEventListener('click', function(){
    let currentText = wordKorean.textContent;
    let index = i - 1;

    if (currentText === originalTexts[index]){
      wordKorean.textContent = changedTexts[index];
    }else{
      wordKorean.textContent = originalTexts[index];
    };
  });
};


/* 국립국어원 알리미 announce */

/* 탭 */

let announceTabBtn = document.querySelectorAll('.announce_tabs .tab_btn');
let announceTabSwiper = document.querySelectorAll('.announce_cards');

// console.log(announceTabBtn, announceTabSwiper);

announceTabBtn.forEach(function(btn, index){
  btn.addEventListener('click', function(){
    announceTabBtn.forEach(function(button){
      button.classList.remove('active');
    });
    announceTabSwiper.forEach(function(swiper){
      swiper.classList.remove('active');
    });
    btn.classList.add('active');
    announceTabSwiper[index].classList.add('active');
  });
});

/* 스와이퍼 */

var swiper = new Swiper(".announce_cards", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1319: {
      slidesPerView: 3,
    },
  }
});

/* 국립국어원 누리 소통망 바로가기 sns */

/* 스와이퍼 */

var swiper = new Swiper(".sns_cards", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
  }
});

/* 푸터 팝업 organization */

let organizationMenu = document.querySelector('.footer_organization ul li a:nth-child(1)');
let organizationPopup = document.querySelector('.organization');

organizationMenu.addEventListener('click', function() {
  let target = document.getElementById(organizationMenu.dataset.target);
  if (target) {
    target.style.display = target.style.display === "block" ? "none" : "block";
  }
});

organizationPopup.addEventListener('click', function() {
  organizationPopup.style.display = organizationPopup.style.display === "block" ? "none" : "block";
});



/* 푸터 */

/* 스와이퍼 */

var swiper = new Swiper(".footer_banners", {
  loop: true,
  autoplay: {
    delay: 3000,          
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  slidesPerView: 1,
  spaceBetween: 10,
});

/* 위로(가기) top_btn */

/* 스크롤 제어 */

window.addEventListener('scroll', function(){
  let topBtn = document.querySelector('.top_btn');
  let scrollY = window.scrollY;
  if(scrollY > 100){
    topBtn.classList.add('visible');
  }else{
    topBtn.classList.remove('visible');
  };
});