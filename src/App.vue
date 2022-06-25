<template>
 <LoginPage msg="Login"/>
</template>

<script>
import LoginPage from './components/Login/LoginPage.vue';
/* Ecrire une fonction d'authentification
  SI la personne se connecte activer ->  <routerView></routerView>  */

export default {
  name: 'App',
  components: {
    LoginPage
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
