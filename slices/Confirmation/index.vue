<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { ref, Transition } from "vue";
import invitadosService from "../../services/invitados"
import Swal from "sweetalert2";

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
const showTable = ref(false)

const nombreInvitado = ref('');
const apellidoInvitado = ref('');
const nombreAcompañante = ref([]);
const celular = ref('');
const familia = ref('');
const niños = ref('');

const nameExisted = ref(false);
const isConfirmated = ref(false);
const namesInvitados = ref([]);
const idFounded = ref(0);

const invitados = async () => {
  try {
    const data = await invitadosService.getAll();
    console.log(data);
    namesInvitados.value = data;
  } catch (error) {
    //errorMessage.value = 'Error al obtener los invitados'
    console.error('Error al obtener los invitados');
  }
}
invitados();

const handleClean = () => {
  if (nameExisted) {
    nombreInvitado.value = '';
    apellidoInvitado.value = '';
    nombreAcompañante.value = [];
    celular.value = '';
    familia.value = '';
    niños.value = '';
  }
}

const handleSubmit = () => {
  const [firstName, lastName] = name.value.split(' ');
  const nameFounded = namesInvitados.value.filter(inv => 
  inv.invitado_nombre === firstName && inv.invitado_apellido === lastName
  );

  const acompañanteFounded = namesInvitados.value.filter(inv => 
    inv.acompanante_nombre === firstName && inv.acompanante_apellido === lastName
  );
  if (nameFounded.length > 0) {
    const nombreData = nameFounded[0];
    if(nombreData.confirmacion === 'SI'){
      isConfirmated.value = true;
    } else {
      isConfirmated.value = false;
    }
    /* console.log('NombreData',nombreData); */
    idFounded.value = nombreData.ID;
    const nombreinvitados = nameFounded.map(nf => ({
      acompañante_nombre: nf.acompanante_nombre,
      acompañante_apellido: nf.acompanante_apellido,
    }))
    nombreInvitado.value = nombreData.invitado_nombre;
    apellidoInvitado.value = nombreData.invitado_apellido;
    nombreAcompañante.value = nombreinvitados;
    celular.value = nombreData.celular;
    familia.value = nombreData.nombrefamilia;
    niños.value = nombreData.niños;
    nameExisted.value = true;
  } else {
    //console.log('acompañante:', acompañanteFounded);
    if (acompañanteFounded.length > 0) {
      //console.log('El acompañante es:', acompañanteFounded);
      Swal.fire({
        title: "¿Eres un acompañante?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Solo el invitado puede confirmar asistencia",
          });
          name.value = ''
        }
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Nombre no encontrado en la lista de invitados',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      name.value = ''
    }
  }
};

const handleConfirm = async () => {
  const newNoteObject = {
    nombre: nombreInvitado.value,
    apellido: apellidoInvitado.value,
    celular: celular.value,
    nombrefamilia: familia.value,
    niños: niños.value,
    confirmacion: "SI",
  }
  try {
    if(nameExisted) {
      if(isConfirmated.value == false){
        const data = await invitadosService.update(idFounded.value, newNoteObject);
        if (data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Confirmación completada",
            showConfirmButton: false,
            timer: 1500
          });
          name.value = ''
          nombreInvitado.value = '';
          apellidoInvitado.value = '';
          nombreAcompañante.value = [];
          celular.value = '';
          familia.value = '';
          niños.value = '';
        }
      }else{
        Swal.fire({
          title: 'Ups!',
          text: 'El invitado ya realizó la confirmación anteriormente',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Error al confirmar los invitados',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      nombreInvitado.value = '';
      apellidoInvitado.value = '';
      nombreAcompañante.value = [];
      celular.value = '';
      familia.value = '';
      niños.value = '';
    }
    //console.log(data);
  } catch (error) {
    Swal.fire({
        title: 'Error',
        text: 'Error al confirmar los invitados',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      nombreInvitado.value = '';
      apellidoInvitado.value = '';
      nombreAcompañante.value = [];
      celular.value = '';
      familia.value = '';
      niños.value = '';
    //console.error('Error al confirmar los invitados:', error);
  }
}
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
        <Transition>
          <div v-if="showForm" class="confirmation-form__container">
           <form @submit.prevent="handleSubmit" class="form">
              <div class="confirmation-form">
                <label for="name">Nombre:</label>
                <input type="text" name="name" id="name" v-model="name">
              </div>
              <div class="confirmation-form__buttons">
                <div class="confirmation-form__btn">
                  <button @click="handleSubmit">Buscar</button>
                </div>
                <div class="confirmation-form__btn">
                  <button @click.prevent="showForm = false">Cancelar</button>
                </div>
              </div>
              
                <div v-if="nameExisted">
                  <div class="form-confirmation">
                    <div class="form-confirmation__label">
                      <label for="acompañante">Nombre del (los) acompañante(s):</label>
                      <div class="nombres-acompañante">
                        <div v-for="(acompañante, index) in nombreAcompañante" :key="index" >
                          {{ acompañante.acompañante_nombre }} {{ acompañante.acompañante_apellido }}
                        </div>
                      </div>
                    </div>
                    <div class="form-confirmation__label">
                      <label for="familia">Nombre de la familia:</label>
                      <div class="form-text">
                        {{ familia }}
                      </div>
                    </div>
                    <div class="form-confirmation__label">
                      <label for="niños">Cantidad de niños:</label>
                      <div class="form-text">
                        {{ niños }}
                      </div>
                    </div>
                  </div>
                  <!-- <TABLE BORDER class="table">
                    <TR>
                        <TH>Nombre</TH>
                        <TH>Celular</TH>
                        <TH>Familia</TH>
                        <TH>Niños</TH>
                        <TH>Acompañantes</TH>
                    </TR>
                    <TR ALIGN=center>
                        <TD>{{ nombreInvitado }} {{ apellidoInvitado }}</TD>
                        <TD>{{ celular }}</TD>
                        <TD>{{ familia }}</TD>
                        <TD>{{ niños }}</TD>
                        <TD>
                          <div v-for="(acompañante, index) in nombreAcompañante" :key="index">
                            {{ acompañante.acompañante_nombre }} {{ acompañante.acompañante_apellido }}
                          </div>
                        </TD>
                    </TR>
                  </TABLE> -->
                  <div class="confirmation-form__buttons">
                    <div class="confirmation-form__btn">
                      <button @click="handleConfirm">Confirmar asistencia</button>
                    </div>
                  </div>
                </div>
             </form>
            </div>
        </Transition>
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
    width: 80%;
    background-color: #fff;
    padding: 55px 0;
    box-shadow: 6px 3px 7px rgba(0, 0, 0, .2);
    position: relative;
    z-index: 1;
  }

  .confirmation-slice__title {
    padding: 20px;
  }
  .confirmation-slice__title h2{
    font-size: 1.4rem;
    font-family: 'Belleza', sans-serif;
  }

  .confirmation-slice__subtitle {
    font-size: 0.8rem;
    padding-bottom: 20px;
    font-family: 'Belleza', sans-serif;
  }

  .form {
    width: 80%;
  }
  .confirmation-form__container {
    width: 80%;
    height: 400px;
    background-color: #fff;
    box-shadow: 6px 3px 7px rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    margin: 20px 0;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-62%, -89%);
    z-index: 10;
  }

  .confirmation-form{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
  }
  .confirmation-form label{
    font-size: 1rem;
    font-family: 'Belleza', sans-serif;
  }
  .confirmation-form input{
    font-size: 1rem;
    font-family: 'Belleza', sans-serif;
  }

  .form-confirmation__label {
    font-size: 1rem;
    font-family: 'Belleza', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .form-confirmation__label label{
    text-align: end;
    display: flex;
    justify-content: center;
    width: 45%;
    font-size: 0.8rem;
  }
  .form-text {
    width: 35%;
    text-align: justify;
  }

  .confirmation-form__btn{
    display: flex;
    justify-content: center;
    font-size: 1rem;
    padding: 10px 10px;
    font-family: 'Belleza', sans-serif;
    margin-bottom: 15px;
  }
  .confirmation-form__btn button{
    background-color: #86895D;
    border: 1px solid #86895D;
    padding: 10px 20px;
    color: #fff;
    border-radius: 10px;
  }
  .confirmation-form__btn button:hover{
    cursor: pointer;
    background-color: #8d8f79;
    border: 1px solid #8d8f79;
  }

  .nombres-acompañante {
    display: flex;
    flex-direction: column;
    width: 45%;
  }
  
  .confirmation-form__buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease-out;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  @media (min-width: 640px) {
    .confirmation-slice__box {
      width: 60%;
    }
    .confirmation-slice__title h2{
      font-size: 2rem;
    }
    .form {
      width: 50%;
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
    .confirmation-slice__box {
      width: 65%;
    }
    .confirmation-form__container {
      width: 60%;
    }
    .confirmation-form__container {
      transform: translate(-85%, -89%);
    }
    .nombres-acompañante {
      width: 35%;
    }
    .form-confirmation__label label{
      width: 60%;
      font-size: 1rem;
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