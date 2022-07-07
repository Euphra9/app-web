<template>
  <div class="headerBar">
      <div class="divGauche">
        <p> Utilisateur : [Prénom Nom]</p>
      </div>
      <div class="divDroite">
     <button onclick="logOut()"> Se déconnecter</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      responsables: {},
      username: "",
      pwd: ""
    };
  },
  created() { // pour les appels backend
    axios.get('http://localhost:8081/logout')
        .then(response => this.responsables = response.data)
        .catch()
  }
  ,
  methods: {
    logOut: function () {
      location.replace("components/Login/LoginPage")
    }
  },
}
</script>