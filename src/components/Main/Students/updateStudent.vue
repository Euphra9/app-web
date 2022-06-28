<template>
<h1> Modification de l'étudiant :  {{student.Nom}} {{student.Prenom}} </h1>

<div class="update">
<form >
  <div>
     <label for="id">Identifiant </label> <br/>
      <input id="id" name="id" value="myId" readonly >

  </div>

    <div>
        <label for="name">Nom </label> <br/>
        <input id="name" name="name" value="myName" >
    </div>

      <div>
        <label for="lastname">Prénom </label><br/>
        <input id="lastname" name="lastname" value="myLastname">
    </div>
    <div>
    <label for="promotion">Promotion </label><br/>
    <select id="promotion-class" name="promotion">
    <option value="init"> </option>
    <option value="L1">L1</option>
    <option value="L2" selected>L2</option>
    <option value="L3">L3</option>
    <option value="M1">M1</option>
    <option value="M2">M2</option>  
    </select>
    <select id="promotion-cursus" name="promotion">
    <option value="init" selected> </option>
    <option value="normale">INIT</option>
    <option value="app">APP</option>
    </select>
    <select id="promotion-spec" name="promotion">
    <option value="init" selected> </option>
    <option value="lsi">LSI</option>
    <option value="rs">RS</option>
    </select>

   </div>

    <div>
        <label for="email">Email </label><br/>
        <input type="email" id="email" name="email" value="myEmail">
    </div>

     <div>
        <label for="phonenum">Téléphone </label><br/>
        <input type="tel" id="phonenum" name="phonenum" value="myTel">
    </div>

   
</form>
</div>
<div >
        <button class="bouton_update">Valider</button>
  </div>



</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
      id:this.$route.params.id,
      student:{},
      updateStudent: [
        {
          name:"myName",
        }
        ]
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/students/'+this.id)
    .then(response => this.student=response.data) // creation de la promesse
    .catch()
  },
  mounted(){
    console.log("ok");
  }
};
</script>