<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref } from "vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ConfirmationSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);


const showForm = ref(false);
const name = ref('')
const disabled = ref(false);
const nameconfirm = ref('');
const showMessage = ref(false);

const handleSubmit = () => {
  nameconfirm.value = name.value;
};

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="confirmation-slice"
  >
    <div class="confirmation-slice__container">
      <div class="confirmation-slice__box">
        <div class="confirmation-slice__title">
          <h2><PrismicRichText :field="slice.primary.title" /></h2>
        </div>
        <div class="confirmation-slice__subtitle">{{ slice.primary.subtitle }}</div>
        <div class="ubication-slice__btn">
          <a href="#" class="ubication-slice__btn-text" @click.prevent="showForm = !showForm">Confirmar</a>
        </div>
      </div>
      <!-- popup -->
      <div v-if="showForm" class="confirmation-form__container">
       <form @submit.prevent="handleSubmit">
         <div class="confirmation-form">
           <label for="name">Nombre:</label>
           <input type="text" name="name" id="name" v-model="name">
         </div>
         <div class="confirmation-form__btn">
           <button @click="handleSubmit">Buscar</button>
         </div>

         <div class="confirmation-form">
           <label for="nameconfirm">Nombre:</label>
           <input type="text" name="nameconfirm" id="nameconfirm" v-model="nameconfirm" disabled>
         </div>
         <div class="confirmation-form">
           <label for="lastname">Acompañante:</label>
           <input type="text" name="lastname" id="lastname" disabled>
         </div>
         <div class="confirmation-form">
           <label for="kids">Niños:</label>
           <input type="number" name="kids" id="kids" disabled>
         </div>
         <div class="confirmation-form__btn">
           <button @click.prevent="showMessage = !showMessage">Confirmar asistencia</button>
         </div>
       </form>
      </div>
      <div v-if="showMessage">
        <p>Asistencia confirmada!</p>
      </div>
    </div>

  </section>
</template>

<style>
  .confirmation-slice {
    background-image: url('../../assets/img/Fondo4.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #F5F0EF;
    background-position: left 50% top 100%;
  }

  .confirmation-slice__container {
    width: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .confirmation-slice__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65%;
    background-color: #fff;
    padding: 55px 0;
    box-shadow: 6px 3px 7px rgba(0, 0, 0, .2);
  }

  .confirmation-slice__title {
    padding: 20px;
  }
  .confirmation-slice__title h2{
    font-size: 1.4rem;
  }

  .confirmation-slice__subtitle {
    font-size: 0.8rem;
    padding-bottom: 20px;
  }

  .confirmation-form__container {
    width: 40%;
    background-color: #fff;
    box-shadow: 6px 3px 7px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    margin: 20px 0;
  }

  .confirmation-form label{
    font-size: 0.8rem;
  }
  .confirmation-form input{
    font-size: 0.6rem;
  }

  .confirmation-form__btn{
    display: flex;
    justify-content: center;
    font-size: 1rem;
    padding: 10px 0;
    margin-bottom: 20px;
  }
  .confirmation-form__btn button{
    background-color: #DCCEB9;
    border: 1px solid #DCCEB9;
    padding: 10px 20px;
    color: #fff;
    border-radius: 10px;
  }
  .confirmation-form__btn button:hover{
    cursor: pointer;
    background-color: #beb1a2;
  }

  @media (min-width: 640px) {
    .confirmation-slice__box {
      width: 60%;
    }
    .confirmation-slice__title h2{
      font-size: 2rem;
    }
  
    .confirmation-slice__subtitle {
      font-size: 1rem;
      padding-bottom: 20px;
    }
    .confirmation-form label{
      font-size: 1rem;
    }
    .confirmation-form input{
      font-size: 0.8rem;
    }
  }
  @media (min-width: 920px) {
    .confirmation-slice__box {
      width: 50%;
    }
    .confirmation-slice__title h2{
      font-size: 2.5rem;
    }

    .confirmation-slice__subtitle {
      font-size: 1.5rem;
      padding-bottom: 20px;
    }
    .confirmation-form label{
      font-size: 1.5rem;
    }
    .confirmation-form input{
      font-size: 1.3rem;
    }
  }
</style>