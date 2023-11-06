<template>
  <h1>Proyectp servicios VUE</h1>
  <h2 style="color:red">{{mensaje}}</h2>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo';
//Para utilizar un servicio debemos de crear una constante 
//que sea un objeto de la clase service
const service = new ServiceEjemplo();

export default {
    name:"HomeComponent",
    mounted(){
      this.mensaje = service.getSaludo("Fernando");
    },
    data(){
      return{
        mensaje:""
      }
    }
}
</script>

<style>

</style>