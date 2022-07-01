<template>
<h1> Modification de l'étudiant :  {{student.Nom}} {{student.Prenom}} </h1>

<div class="update">
<form >
    <div>
     <label for="id">Identifiant </label> <br/>
      <input id="id" name="id" readonly  v-model="student.Identifiant" >
    </div>

   <div>
        <label for="newname" >Nom </label> <br/>
        <input type="text" id="newname" name="newname" :value="student.Nom">
    </div>

     <div>
        <label for="lastname">Prénom </label><br/>
        <input id="lastname" name="lastname" :value="student.Prenom">
    </div>


   <div>
    <label for="promotion">Promotion </label><br/>
    <select id="promotion-class" name="promotion">
    <option value="init" selected> </option>
    <option value="L1">L1</option>
    <option value="L2">L2</option>
    <option value="L3">L3</option>
    <option value="M1">M1</option>
    <option value="M2">M2</option>  
    </select>
    <select id="promotion-cursus" name="promotion">
    <option value="init" selected> </option>
    <option value="normale">INIT</option>
    <option value="app">APP</option>
    </select>
    <select  id="promotion-spec" name="promotion">
    <option value="init" selected> </option>
    <option value="lsi">LSI</option>
    <option value="rs">RS</option>
    </select>

   </div>

    <div>
        <label for="email">Email </label><br/>
        <input type="email" id="email" name="email" :value="student.Adresse">
    </div>

    <div>
        <label for="phonenum">Téléphone </label><br/>
        <input type="tel" id="phonenum" name="phonenum" :value="student.NumTel">
    </div>
   


   
</form>
</div>
<div >
        <button class="bouton_update" v-on:click="onValid()" >Valider </button>
  </div>



</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
      id:this.$route.params.id,
      student:{},
      name: this.student,
      newname : "",
      updateStudent: [
        {
            name:"Hello",
            lastname:"",
            class:"",
            cursus:"",
            spec:"",
            phonenum:"",
            email:""
        }
      ],
      
    };
  },
  methods :{
    onValid: function(){
      let nname = document.getElementById('newname').value
      this.student.Nom = nname
    }
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
