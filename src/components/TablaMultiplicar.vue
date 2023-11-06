<template>
<div>
  <table>
    <thead>
      <tr>
        <th>Número</th>
        <th>Operación</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="numero in 10" :key="numero">
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name:"TablaMultiplicar", 
 
    watch:{
      '$route.params.numero'(nextVal, oldVal){
        if(nextVal != oldVal){
          this.numero = parseInt(this.$route.params.numero);
        }
      }
    },
    data(){
      return {
        numero:0
      }
    },
    mounted(){
      console.log(this.$route.params.numero);
      var paramNumero = this.$route.params.numero;
            if(paramNumero==""){
                console.log("Sin parametros");
            }else{
                console.log("Parametros recibidos" +paramNumero);
                this.numero = parseInt(this.$route.params.numero);

            }
    }
  
}
</script>

<style>

</style>