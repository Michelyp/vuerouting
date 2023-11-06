
<template>
  <h1>Coches componente</h1>
  <div v-for="car in coches" :key="car">
    <h1 style="color:skyblue">
        {{car.marca}}, {{car.modelo}}
    </h1>
    <h2 style="color:red">
        Conductor:{{car.conductor}}
    </h2>
    <img :src="car.imagen" style="width:150px; height:150px"/>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

export default {
    name:"CochesComponent",
    data(){
        return{
            coches:[]
        }
    },
    mounted(){
    service.getCoches.then(result=>{
        this.coches = result;
    })
    }
}
</script>

<style>

</style>