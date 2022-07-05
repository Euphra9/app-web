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
      <p id="error" style="visibility: hidden;">Password or login incorrect</p>
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
          //location.reload();

          this.$router.push('/');
          //return res.redirect('/components/AppPage.vue')
        } else {
          document.getElementById("error").style.visibility = "visible";
        }
      }
    },
  }
};

</script>
<style>

body{
  background-color: #435165;
}

* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "segoe ui", roboto, oxygen, ubuntu, cantarell, "fira sans", "droid sans", "helvetica neue", Arial, sans-serif;
  font-size: 16px;
}

.login {
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.3);
  margin: 100px auto;
}
.login h1 {
  text-align: center;
  color: #5b6574;
  font-size: 24px;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid #dee0e4;
  position: static;
}
.login form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}
.login form label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #3274d6;
  color: #ffffff;
  left: auto;
  top: unset;
}
.login form input[type="password"], .login form input[type="text"] {
  width: 310px;
  height: 50px;
  border: 1px solid #dee0e4;
  margin-bottom: 20px;
  padding: 0 15px;
  left: 10px;
  top: 0px;
}
.login form input[type="submit"] {
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background-color: #3274d6;
  border: 0;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
  transition: background-color 0.2s;
}
.login form input[type="submit"]:hover {
  background-color: #2868c7;
  transition: background-color 0.2s;
}

.update form div{
  position: relative;
  top: -1vw;
  font-size: 1.5vw;
}
.update input{
  position: relative;
  /* top:2vw; */
}


.bouton_update{
  position: relative;
  top: 7vw;
  left: -7vw;
  color:white;
  z-index: 100;

}

input,select {
  padding: 10px 20px;
  margin: 0;
  font-size: 1vw;

}
input{
  width: 10vw;
  position: relative;
  top:1vw;
  left:0vw;
}
select{
  position: relative;
  top:1vw;
  left:3.9vw;
  width: 7vw;
}


.add form div{
  margin: 0vw;
  display: block;

}
.scroll{
  overflow-y: scroll;
  max-height: 500px;
  scroll-behavior: auto;
  overflow-x: hidden;

}
</style>