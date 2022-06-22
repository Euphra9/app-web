<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 30%;
  background-color: #6FA8DC;
}

.menu .profile-img {
  width: 10rem;
}

.menu .profile-name {
  font-size: 2rem;
}

.menu .profile-link {
  font-size: 1.5rem;
}

.menu .menu-items {
  padding: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}

.menu-items p {
  font-size: 2.5rem;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 10px 75px;
}

.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
  background: #EEEEEE;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: #FFFFFF;
}

.nav .logo {
  font-size: 2rem;
  padding: 0 20px;
}

.nav .buttons {
  font-size: 2rem;
  padding: 0 20px;
}

.buttons .button {
  font-size: 1.25rem;
  padding: 10px 25px;
}

/*.main .content {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
}*/

.main .content p {
  font-size: 1.25rem;
  font-weight: 600;
}
</style>

<template>
  <NavBar msg="Nav"/>
  <routerView></routerView>
  <div class="container">
  <aside class="menu">

    <div class="profile">
      <img src="" alt="Profile Image" class="profile-img">
      <p class="profile-name">Ratiba KADI</p>
      <a href="" target="_blank" rel="noopener noreferrer" class="profile-link">Profile</a>
    </div>

    <div class="menu-items">
      <p>Prêt</p>
      <p>Matériel</p>
      <p>Etudiant</p>
      <p>Statistique</p>
    </div>
  </aside>

  <main class="main">
    <nav class="nav">
      <p class="logo">Logo</p>
      <div class="buttons">
        <button class="button">Home</button>
        <button class="button">LogOut</button>
      </div>
    </nav>
  </main>
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