<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="slide">
            <div class="info slide1">
                <img src="../assets/images/Jujutsu Kaisen.svg" class="w-[240px] h-[130px]" alt="">
                <h2>Jujutsu Kaisen</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloribus earum error beatae non cum pariatur similique deleniti possimus totam quam aliquam, nulla commodi dolores officiis quo quos! Dolore, reprehenderit?</p>
                <div class="botones">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    <img src="../assets/images/play.svg" class="w-6 h-6" alt="">
                    Comenzar a ver
                  </button>
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    <img src="../assets/images/favoritos.svg" class="w-6 h-6" alt="">
                  </button>
                </div>
              </div>
            <img src="../assets/images/carousel1.png" class="w-[60%] h-full" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
            <div class="info slide2">
                <img src="../assets/images/onepiece.png" class="w-[240px] h-[130px]" alt="">
                <h2>One Piece</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloribus earum error beatae non cum pariatur similique deleniti possimus totam quam aliquam, nulla commodi dolores officiis quo quos! Dolore, reprehenderit?</p>
                <div class="botones">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    <img src="../assets/images/play.svg" class="w-6 h-6" alt="">
                    Comenzar a ver
                  </button>
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    <img src="../assets/images/favoritos.svg" class="w-6 h-6" alt="">
                  </button>
                </div>
              </div>
            <img src="../assets/images/carousel2.jpeg" class="w-[60%] h-full" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
            <div class="info slide3">
              <img src="../assets/images/naruto.png" class="w-[240px] h-[130px]" alt="">
                <h2>Naruto</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloribus earum error beatae non cum pariatur similique deleniti possimus totam quam aliquam, nulla commodi dolores officiis quo quos! Dolore, reprehenderit?</p>
                <div class="botones">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    <img src="../assets/images/play.svg" class="w-6 h-6" alt="">
                    Comenzar a ver
                  </button>
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    <img src="../assets/images/favoritos.svg" class="w-6 h-6" alt="">
                  </button>
                </div>
              </div>
            <img src="../assets/images/carousel3.jpg" class="w-[60%] h-full" alt="">
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  // import required modules
  import { Autoplay } from "swiper/modules";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
  };
  </script>
  
  <style scoped>
  .botones {
    display: inline-block;
  }
  .btn {
    background-color: #fd7e14;
    color:#000;
    font-weight: bold;
    margin: 5px;
  }
  .slide {
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    color:black;
    font-weight: bold;
    height: calc(100vh - 66px);
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    gap: 30px;
    width: 40%;
    height: 100%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Sombra del texto */
    color:white;
  }
  .slide1 {
    background: linear-gradient(to right, #1d232a,black);
    background: linear-gradient(to right, #1d232a,black);
  }
  .slide2 {
    background: linear-gradient(to right, #1d232a,#ffd7bb);
    background: linear-gradient(to right, #1d232a,black);
  }
  .slide3 {
    background: linear-gradient(to right, #1d232a,#dcfafc);
    background: linear-gradient(to right, #1d232a,black);
  }
  </style>