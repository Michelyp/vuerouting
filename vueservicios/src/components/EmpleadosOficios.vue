<template>
  <h1>Empleados Oficios</h1>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Apellido</th>
      <th scope="col">Oficio</th>
      <th scope="col">Salario</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="empleado in empleados" :key="empleado">
        <td>{{empleado.apellido}}</td>
        <td>{{empleado.oficio}}</td>
        <td>{{empleado.salario}}</td>

    </tr>
  </tbody>
</table>
</template>

<script>
import axios from 'axios';
import Global from './../Global';
export default {
    name:"EmpleadosOficios",
    data(){
        return{
            empleados:[]
        }
    },
    methods:{
        dataEmpleados(){
            var oficio = this.$route.params.oficio;
            var request = "api/empleados/empleadosoficio/" +oficio;
            var url = Global.urlApiEmpleados + request;

            axios.get(url).then(response=>{
                this.empleados= response.data;
            })
        }
    },
    mounted(){
        this.dataEmpleados();
    },
    watch:{
        //si se actualiza los parámetros
        '$route.params.oficio'(nextVal,oldVal){
            if(nextVal!= oldVal){
                this.dataEmpleados();
            }
        }
    }

}
</script>

<style>

</style>