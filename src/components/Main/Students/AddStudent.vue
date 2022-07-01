<template>
<h1> Ajout d'un étudiant </h1>
<div class="add">
<form >
    <div>
        <label for="name">Nom </label> <br/>
        <input v-model="newstudent.name"  id="name" name="name" >
    </div>
    <div>
        <label for="lastname">Prénom </label><br/>
        <input  v-model="newstudent.lastname"  id="lastname" name="lastname">
    </div>

   <div>
    <label for="promotion">Promotion </label><br/>
    <select v-model="newstudent.class" id="promotion-class" name="promotion">
    <option value="init" selected> </option>
    <option value="L1">L1</option>
    <option value="L2">L2</option>
    <option value="L3">L3</option>
    <option value="M1">M1</option>
    <option value="M2">M2</option>  
    </select>
    <select v-model="newstudent.cursus" id="promotion-cursus" name="promotion">
    <option value="init" selected> </option>
    <option value="normale">INIT</option>
    <option value="app">APP</option>
    </select>
    <select  v-model="newstudent.spec" id="promotion-spec" name="promotion">
    <option value="init" selected> </option>
    <option value="lsi">LSI</option>
    <option value="rs">RS</option>
    </select>

   </div>
     <div>
        <label for="email">Email </label><br/>
        <input  v-model="newstudent.email" type="email" id="email" name="email">
    </div>

     <div>
        <label for="phonenum">Téléphone </label><br/>
        <input v-model="newstudent.phonenum"  type="tel" id="phonenum" name="phonenum">
    </div>

    <div class="button">
        <button v-on:click="addStudent" class="btn_valide">Valider</button>
    </div>
   
</form>
</div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
    return {
      newstudent: [
        {
            name:"",
            lastname:"",
            class:"",
            cursus:"",
            spec:"",
            phonenum:"",
            email:""
        },
      ]
    };
  },
    methods:{
        addStudent:function(){
        var promotion=this.newstudent.class+"-"+
        this.newstudent.cursus.toUpperCase()+"-"+
        this.newstudent.spec.toUpperCase();
         alert("Mon nom est "+this.newstudent.name+"\n"
         +"Mon prenom est "+this.newstudent.lastname+"\n"
         +"Ma promotion est "+promotion+"\n"
         +"Mon numéro est "+this.newstudent.phonenum+"\n"
         +"Mon mail est "+this.newstudent.email);
  
         
          axios.post('http://localhost:8081/api/students',{
            "Nom":this.newstudent.name,
            "Prenom":this.newstudent.lastname,
            "NumTel":this.newstudent.phonenum,
            "Adresse":this.newstudent.email,
            "Promotion":promotion

          })
          .then(response => console.log(response)) // creation de la promesse
    .catch()
          
         
            

        }
    }
}
</script>
