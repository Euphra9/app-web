<template>
 <HeaderMenu msg="Header"/>
  <NavBar msg="Nav"/>
  <div class="mainBlock">
  <routerView></routerView>
</div>

</template>

<script>

import NavBar from "./NavBar/NavBar.vue";
import HeaderMenu from "./Header/HeaderMenu.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    HeaderMenu
}
}
</script>