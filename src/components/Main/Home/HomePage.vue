<template>
  <NavBar msg="Nav"/>
  <div class="mainBlock">
  <routerView></routerView>
</div>



</template>

<script>

import NavBar from "../../NavBar/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>