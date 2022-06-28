<template>
  <title>Login</title>
  <!-- the form awesome library is used to add icons to our form -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">

  <body>
  <div class="login">
    <h1>Login</h1>

    <form action="/authLogin">
      <label for="username">
        <!-- font awesome icon -->
        <i class="fas fa-user"></i>
      </label>
      <input type="text" name="username" placeholder="Username" id="username" v-model="username" required>
      <label for="password">
        <i class="fas fa-lock"></i>
      </label>
      <input type="password" name="password" placeholder="Password" id="password" v-model="pwd" required>
      <input v-on:click="verifyConnection()" type="submit" value="Login">
      <p id ="error" style="visibility: hidden;">Password or login Incorrect</p>
    </form>
  </div>
  </body>
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
    axios.get('http://localhost:8081/authLogin')
        .then(response => this.responsables = response.data) // creation de la promesse
        .catch()
  },
  methods: {
    verifyConnection: function () {
      console.log("STOP");
      for (let resp of this.responsables) {
        if (this.username === resp.AdresseMail && this.pwd === resp.MotDePAsse) {
          alert("---------> Login Successful")
          break;
        } else {
          alert("---------> Password or login Incorrect")
          break;
        }
      }
    }
  }
};

</script>