<template>
  <div>
    <!-- Comprueba si el documento está cargado -->
    <SliceZone v-if="document && document.data" :slices="document.data.slices" :components="components" />
    <div v-else class="loading-overlay">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { SliceZone, usePrismic } from '@prismicio/vue';

// Importa tus slices aquí
import Main from '../slices/Main/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Phrases from '../slices/Phrases/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Timer from '../slices/Timer/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Slider from '../slices/Slider/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Ubication from '../slices/Ubication/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Lodging from '../slices/Lodging/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Vision from '../slices/Vision/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import OurMoments from '../slices/OurMoments/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Schedule from '../slices/Schedule/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Confirmation from '../slices/Confirmation/index.vue'; // Ajusta la ruta según tu estructura de carpetas
import Gifts from '../slices/Gifts/index.vue'; // Ajusta la ruta según tu estructura de carpetas

// Define los componentes de los slices
const components = {
  main: Main,
  phrases: Phrases,
  timer: Timer,
  slider: Slider,
  ubication: Ubication,
  lodging: Lodging,
  vision: Vision,
  our_moments: OurMoments,
  schedule: Schedule,
  confirmation: Confirmation,
  gifs: Gifts,
};

const document = ref(null);
const { client } = usePrismic();

// Función para obtener datos de Prismic
const fetchData = async () => {
  try {
    const response = await client.getByUID('wedding', 'main'); // Asegúrate de que el UID y el tipo de documento son correctos
    //console.log(response);
    document.value = response;
  } catch (error) {
    console.log('Error al traer la informacion');
  }
};

// Llama a fetchData cuando el componente se monte
onMounted(() => {
  fetchData();
});
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backgroundBlack);
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #007bff;
  border-top-color: transparent;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
