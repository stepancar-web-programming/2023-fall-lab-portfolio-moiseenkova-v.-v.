import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const SliderContainer = styled.div`
    padding-top: 20px;
    .slick-slider {
        height: 80vh;
        width: 40vw; 
        margin: auto;

    .slick-list {
      height: 400px; 
    }

    .slick-slide > div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .slick-slide img {
      width: auto; 
      max-width: 100%;
      height: 40vh;
      object-fit: cover; 
      border-radius: 3%;
      justify-content: center;
      align-self: center;
    }

    .slick-prev, .slick-next {
      z-index: 1;
    }
  }
`;
const slides = [
    {
        image: '/img/1.png',
        description: 'Бандикуты (Peramelidae) - это семейство сумчатых животных, обитающих в Австралии и на некоторых близлежащих островах. Название “бандикут” происходит от австралийских аборигенов и означает “маленький крысолов”.\n',
    },
    {
        image: '/img/4.png',
        description: 'Кускусы (Phalangeridae) - семейство сумчатых млекопитающих, обитающих в Австралии, Новой Гвинее и некоторых близлежащих островах.\n',
    },
    {
        image: '/img/5.png',
        description: 'Утконос (Ornithorhynchus anatinus) - уникальное млекопитающее, обитающее вдоль восточного побережья Австралии и в Tasmania. Утконосы обладают необычной внешностью, которая сочетает в себе черты птиц, рептилий и млекопитающих.\n',
    },
    {
        image: '/img/7.png',
        description: 'Квокка, или Короткохвостый кенгуру (лат. Setonix brachyurus), — единственный представитель рода Setonix семейства кенгуровых.\n',
    },
    {
        image: '/img/3.jpg',
        description: 'Коала (Phascolarctos cinereus) - это сумчатое животное, обитающее в Австралии и Новой Гвинее. Отличительными чертами коалы являются их характерный серый мех, длинные уши, короткий хвост и цепкие лапы, позволяющие им легко передвигаться по деревьям. Средний вес взрослой коалы составляет около 10 кг.\n',
    },

];
const ImageSlider = ({ images, desc }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <SliderContainer>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.image} alt={`Slide ${index}`} />
                        <div>{slide.description}</div>
                    </div>
                ))}
            </Slider>
        </SliderContainer>
    );
};

export default ImageSlider;
