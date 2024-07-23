<template>
  <div>
    <!-- Comprueba si el documento está cargado -->
    <SliceZone v-if="document && document.data" :slices="document.data.slices" :components="components" />
    <div v-else class="loading-overlay">
      <video ref="loadingVideo" src="/assets/video/Denni & FranJavi.mp4" autoplay muted loop @loadedmetadata="handleVideoLoad"></video>
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
import Codigo from '../slices/Codigo/index.vue'; // Ajusta la ruta según tu estructura de carpetas
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
  codigo: Codigo,
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
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-overlay video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
