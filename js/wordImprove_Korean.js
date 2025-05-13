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

/* 메인 콘텐츠 */

/* 다듬은말 wordImprove_Korean */

let rowsPerPage = 10;
let rows = document.querySelectorAll('.contentTable tbody tr');
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage);
let pageNumbers = document.querySelector('.contentTable_pagination ol');
let maxPageNum = 5;
let pageActiveIdx = 0;

// 페이지 번호 생성
for (let i = 1; i <= pageCount; i++) {
  pageNumbers.innerHTML += `<li><a href="#">${i}</a></li>`;
}

let pageNumberBtn = pageNumbers.querySelectorAll('a');
let prevPageBtn = document.querySelector('.contentTable_pagination .prevPage');
let nextPageBtn = document.querySelector('.contentTable_pagination .nextPage');

// 페이지 그룹 표시 함수
function displayPage(num) {
  for (let btn of pageNumberBtn) {
    btn.parentElement.style.display = 'none';
  }

  let totalGroup = Math.ceil(pageCount / maxPageNum);
  let start = num * maxPageNum;
  let end = Math.min(start + maxPageNum, pageCount);

  let groupArr = [...pageNumberBtn].slice(start, end);
  for (let btn of groupArr) {
    btn.parentElement.style.display = '';
  }
}

// 행 표시 함수
function displayRow(idx) {
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;

  rows.forEach(row => (row.style.display = 'none'));
  let newRows = [...rows].slice(start, end);
  newRows.forEach(row => (row.style.display = ''));

  pageNumberBtn.forEach(btn => btn.classList.remove('active'));
  if (pageNumberBtn[idx]) {
    pageNumberBtn[idx].classList.add('active');
  }
}

// 페이지 번호 클릭 이벤트 연결
pageNumberBtn.forEach((btn, idx) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    displayRow(idx);
  });
});

// 이전/다음 페이지 그룹 이동
prevPageBtn.addEventListener('click', () => {
  if (pageActiveIdx > 0) {
    pageActiveIdx--;
    displayPage(pageActiveIdx);
    displayRow(pageActiveIdx * maxPageNum);
  }
});

nextPageBtn.addEventListener('click', () => {
  let maxGroup = Math.ceil(pageCount / maxPageNum) - 1;
  if (pageActiveIdx < maxGroup) {
    pageActiveIdx++;
    displayPage(pageActiveIdx);
    displayRow(pageActiveIdx * maxPageNum);
  }
});

// 초기 상태 설정
displayPage(0);
displayRow(0);


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