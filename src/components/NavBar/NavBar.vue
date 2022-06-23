<template>
  <router-link to="/pret">Prêt</router-link>
  <router-link to="/materiels">Matériels</router-link>
  <router-link to="/etudients">Etudiant</router-link>

  <div class="container">
  <aside class="menu">

    <div class="profile">
      <img src="" alt="Profile Image" class="profile-img">
      <p class="profile-name">Ratiba KADI</p>
      <a href="" target="_blank" rel="noopener noreferrer" class="profile-link">Profile</a>
    </div>

    <div class="menu-items">
      <button><p><router-link to="/pret">Prêt</router-link></p></button>
      <button><p><router-link to="/materiels">Matériel</router-link></p></button>
      <button><p><router-link to="/etudients">Etudiant</router-link></p></button>
      <button><p>Statistique</p></button>
    </div>
  </aside>
  </div>


</template>