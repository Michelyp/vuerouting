<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="#">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/coches">Coches</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/empleados">Detalle Empleados</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Oficios 
          </router-link>
          <ul class="dropdown-menu">
            <li v-for="oficio in oficios" :key="oficio"><router-link class="dropdown-item" :to="'/empleadosoficios/'+oficio">{{oficio}}</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import ServiceEmpleados from './../services/ServiceEmpleados';
const service = new ServiceEmpleados();
export default {
     name:"MenuComponent",
     data(){
        return{
            oficios:[]
        }
     },
     mounted(){
        service.getOficios.then(result=>{
            this.oficios=result;
        })
     }
}
</script>

<style>

</style>