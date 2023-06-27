//메인메뉴
function mainMenu() {
    const menuTop = document.getElementsByClassName('m-menu');
    const menuBottom = document.querySelectorAll('.category-list');
    const menucategory = document.querySelector('.menu-category');
    let menuLength = menuTop.length;

    //mouseover시 메뉴카테고리 블럭.
    for (let i = 0; i < menuLength; i++) {
        menuTop[i].addEventListener('mouseover', function () {
            for (let j = 0; j < menuLength; j++) {
                menuBottom[j].classList.remove('active');
            }
            menuBottom[i].classList.add('active');
            menucategory.classList.add('active')
        });
    }
    //mouseleave시 메뉴 하이드.
    //mouseleave와 mouseout에 차이점: out은 자식요소영역에 들어가도 빠져나간것으로 간주. 리브는 자식요소를 포함한 모든영역
    menucategory.addEventListener('mouseleave', function () {
        for (let j = 0; j < menuLength; j++) {
            menuBottom[j].classList.remove('active');
        }
        menucategory.classList.remove('active')
    });
}
mainMenu()
//모바일메뉴
function toggleMenu(){
    const mobileBtn=document.querySelector('.desk-n .menu');
    const mobileCBtn=document.querySelector('.mobile .m-close');
    const mobileMenu=document.querySelector('.mobile');
    const mobileBg=document.querySelector('.mobile-bg');
    
    //버튼클릭시 모바일 메뉴 블럭
    mobileBtn.addEventListener('click',function(){
        mobileBg.classList.add('active')
        mobileMenu.classList.add('active')
    })
    //클로즈버튼 클릭시 모바일 메뉴 하이드.
    mobileCBtn.addEventListener('click',function(){
        mobileBg.classList.remove('active')
        mobileMenu.classList.remove('active')
    })
    //bg클릭시 모바일 메뉴 하이드.
    mobileBg.addEventListener('click',function(){
        mobileBg.classList.remove('active')
        mobileMenu.classList.remove('active')

    })
}
toggleMenu()
//랜덤이미지
function randomimage(){
    let images=[
        './img/Thum_121-2.jpg',
        './img/Thum_21-4.jpg',
        './img/Thum_1-8.jpg',
        './img/거장의에디션3.jpg',
        './img/Thum_12-11.jpg',
        './img/Thum_12-18.jpg',
        './img/Thum_12-16.jpg',
        './img/Thum_12-15.jpg',
        './img/Thum_22-10.jpg',
        './img/Thum_122.jpg',
        './img/Thum_120-1.png'
    ]
    let texts=[
        '비오는 날 채색하는 <br>아름다운 협업',
        '셀피마니아를 위한 <br>특별한 포토존, 아트거울',
        '【내 작품 판매하기】<br>PB Labs의 첫번째 프로젝트를 소개합니다!',
        '우리집 미술관 <br>마스터피스의 생생한 감동',
        '호암재단이 선택한 <br>김환기의 40년 예술 여정',
        '프베랑 썸머, <br>LUCKY BOY EVENT',
        '다정한 시선이 흐트러지지 않게 <br>윤형택 개인전',
        '가장 밝은 세상에서 전하는 위로 <br>김제언 인터뷰',
        '빛의 모습에 따라 <br>달라지는 매력',
        'home sweet home! <br>그레타프리든',
        '체감온도 -5° 여름 인테리어 <br>100만원대 이하 에디션 추천',
    ]
    function getRandomNum(){
        let randomIndex = Math.floor(Math.random() * images.length);
        let randomImage = images[randomIndex];
        let randomText = texts[randomIndex];

        return{
            image: randomImage,
            text: randomText
        };
    }
    window.onload = function(){
        let pairs = document.getElementsByClassName("con-item");
        for(let i=0;i<pairs.length;i++){
            let pair=getRandomNum();
            let imageE=pairs[i].getElementsByClassName('randomImg')[0]
            let textE=pairs[i].getElementsByClassName('randomText')[0]

            imageE.src=pair.image;
            textE.innerHTML=pair.text;
        }
    }
}
randomimage()