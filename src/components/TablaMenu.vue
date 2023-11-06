<template>
  <div>
    <ul id="menu">
        <li>
            <router-link to="/tablamultiplicar/77">Tabla 77</router-link>
        </li>
        <li>
            <router-link to="/tablamultiplicar/15">Tabla 15</router-link>
        </li>
        <li>
            <router-link to="/tablamultiplicar/20">Tabla 20</router-link>
        </li>

    </ul>
  </div>
</template>

<script>
export default {
    name:"TablaMenu"
}
</script>
<style>
    ul#menu li{
        display: inline;
    }
</style>