<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { onMounted, onBeforeUnmount } from 'vue';

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TimerSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const countdownDate = new Date("2025-01-18T23:59:59").getTime();
let interval: number | undefined;

const startCountdown = () => {
  interval = window.setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(interval);
      updateTimeElements(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateTimeElements(days, hours, minutes, seconds);
  }, 1000);
};

const updateTimeElements = (days: number, hours: number, minutes: number, seconds: number) => {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  if (daysElement) daysElement.innerHTML = String(days).padStart(2, '0');
  if (hoursElement) hoursElement.innerHTML = String(hours).padStart(2, '0');
  if (minutesElement) minutesElement.innerHTML = String(minutes).padStart(2, '0');
  if (secondsElement) secondsElement.innerHTML = String(seconds).padStart(2, '0');
};

onMounted(() => {
  startCountdown();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="timer-slice__background"
  >
    <div class="timer-slice">
      <div class="timer-slice__container">
        <div class="timer-slice__text" >
          <h2><PrismicRichText :field="slice.primary.tittle" /></h2>
          <div class="timer-slice__img">
            <PrismicImage :field="slice.primary.image_decoration" />
          </div>
          <p class="timer-slice__subtitle">{{ slice.primary.subtittle }}</p>
        </div>
        <div class="timer-slice__date" >
          <div class="timer-slice__box" >
            <p class="timer-slice__box-time" id="days">00</p>
            <p class="timer-slice__box-text">Días</p>
          </div>
          <div class="timer-slice__box" >
            <p class="timer-slice__box-time" id="hours">00</p>
            <p class="timer-slice__box-text">Horas</p>
          </div>
          <div class="timer-slice__box" >
            <p class="timer-slice__box-time" id="minutes">00</p>
            <p class="timer-slice__box-text">Minutos</p>
          </div>
          <div class="timer-slice__box timer-slice__box-last" >
            <p class="timer-slice__box-time" id="seconds">00</p>
            <p class="timer-slice__box-text">Segundos</p>
          </div>
        </div>
      </div>
    </div>
    
    
    
  </section>
</template>

<style>
  .timer-slice__background {
    background-image: url('../../assets/img/Fondo3.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #f6f2e7;
  }
  .timer-slice {
    width: 100%;
    padding: 140px 30px;
  }

  .timer-slice__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .timer-slice__text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .timer-slice__text h2{
    font-size: 2rem;
    font-weight: 200;
    text-align: center;
    text-transform: uppercase;
  }
  .timer-slice__img{
    width: 70%;
  }
  .timer-slice__subtitle{
    font-size: 1.5rem;
    color: #818181;
    margin-bottom: 32px;
  }

  .timer-slice__date {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
  }
  .timer-slice__box {
    width: 25%;
    padding: 20px 0;
    border-right: 1px solid #dccdb9;
    text-align: center;
  }
  .timer-slice__box:last-child {
    border-right: 0px;
  }

  .timer-slice__box-time {
    width: 100%;
    padding-bottom: 30px;
    font-size: 2rem;
  }

  .timer-slice__box-text {
    font-size: 1rem;
  }

  @media (min-width: 920px) {
    .timer-slice__text h2{
      font-size: 3rem;
    }
    .timer-slice__img{
      width: 35%;
    }
    .timer-slice__subtitle{
      font-size: 2rem;
    }
    .timer-slice__date {
      width: 60%;
    }
    .timer-slice__box {
      width: 20%;
    }
    .timer-slice__box-time {
      font-size: 3rem;
    }
  }
  @media (min-width: 1440px) {
    
  }
</style>
