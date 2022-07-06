<template>
<h1> Modification de l'étudiant :  {{identity.name}} {{student.Prenom}} </h1>

<div class="updatetudent">
<form >
    <div>
     <label for="id">Identifiant </label> <br/>
      <input id="id" name="id" readonly  v-model="student.Identifiant" >
    </div>

   <div>
        <label for="newname" >Nom </label> <br/>
        <input type="text" id="name" name="name" v-model="student.Nom">
    </div>

     <div>
        <label for="lastname">Prénom </label><br/>
        <input id="lastname" name="lastname" v-model="student.Prenom">
    </div>


   <div>
    <label for="promotion">Promotion </label><br/>
    <select id="promotion-class" name="promotion" v-model="promotion.class">
    <option selected> </option>
    <option >L1</option>
    <option >L2</option>
    <option >L3</option>
    <option >M1</option>
    <option >M2</option>  
    </select>
    <select id="promotion-cursus" name="promotion" v-model="promotion.cursus">
    <option selected> </option>
    <option >INIT</option>
    <option >APP</option>
    </select>
    <select  id="promotion-spec" name="promotion" v-model="promotion.spec">
    <option selected> </option>
    <option >LSI</option>
    <option >RS</option>
    </select>

   </div>

    <div>
        <label for="email">Email </label><br/>
        <input type="email" id="email" name="email" v-model="student.Adresse">
    </div>

    <div>
        <label for="phonenum">Téléphone </label><br/>
        <input type="tel" id="phonenum" name="phonenum" v-model="student.NumTel">
    </div>
   

<div >
        <button class="bouton_update" @click="updateStudent" >Valider </button>
  </div>
   
</form>
</div>




</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
      id:this.$route.params.id,
      student:{},
      identity:{
        name:"",
        lastname:""
      },
      promotion:{
        class:"",
        cursus:"",
        spec:""
      },
    };
  },


  created(){ // pour les appels backend

    axios.get('http://localhost:8081/api/students/'+this.id)
    .then(response => {
      this.student=response.data
      this.student.Promotion=this.student.Promotion.split('-');
      this.promotion.class=this.student.Promotion[0]
      this.promotion.cursus=this.student.Promotion[1]
      this.promotion.spec=this.student.Promotion[2]
      this.identity.name=this.student.Nom;
      this.identity.lastname=this.student.Prenom
      
      }) // creation de la promesse
    .catch()



   
  },

  mounted(){
    console.log("ok");
  },

  methods :{
       updateStudent:function(){



        
        var promotion=this.promotion.class+"-"+
        this.promotion.cursus.toUpperCase()+"-"+
        this.promotion.spec.toUpperCase();


           axios.put('http://localhost:8081/api/students/'+this.id,
           {
            "Nom":this.student.Nom,
            "Prenom":this.student.Prenom,
            "NumTel":this.student.NumTel,
            "Adresse":this.student.Adresse,
            "Promotion":promotion

          })


          .then(response => console.log(response)) // creation de la promesse
          .catch()
         alert("Mon nom est "+this.student.Nom+"\n"
         +"Mon prenom est "+this.student.Prenom+"\n"
         +"Ma promotion est "+promotion+"\n"
         +"Mon numéro est "+this.student.NumTel+"\n"
         +"Mon mail est "+this.student.Adresse);
        
       }

  },


};
</script>
