// slick
$('.review').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="bi bi-arrow-left"></i></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="bi bi-arrow-right"></i></button>',
  speed: 200,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1
});


// JavaScript for Cursor Effect
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});
// aos
AOS.init(3000);


const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);