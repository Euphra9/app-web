<template>
<h1> Modification du materiel :  {{name}} </h1>
<button> Fiche produit </button>

<div class="update">
<form >
    <div>
     <label for="codeBarre">Code Barre </label> <br/>
      <input id="codeBarre" name="codeBarre" readonly v-model="material.CodeBarre" >
    </div>

   <div>
        <label for="newname" >Nom </label> <br/>
        <input type="text" id="newname" name="newname" :value="material.Nom" >
    </div>

     <div>
        <label for="description">Description </label><br/>
        <textarea id="description" name="description" :value="material.Description">
        </textarea>
    </div>


   <div>
    <label for="type">Type </label><br/>
    <select id="type" name="type" v-model="material.Type">
    <option  selected> </option>
    <option >Informatique</option>
    <option >Electronique</option>
    </select>
   </div>

  <div>
      <label for="dateAchat" >Date achat </label> <br/>
      <input type="date" id="dateAchat" name="dateAchat"
       min="2000-01-01" max="3000-01-01" >
   </div>
   <div>
      <label for="prixAchat" >Prix Achat </label> <br/>
      <input type="number" id="prixAchat" name="prixAchat" min="0" >
   </div>
     <div>
      <label for="fournisseur" >Fournisseur </label> <br/>
      <select id="fournisseur" name="type" v-model="material.Fournisseur">
      <option></option>
         <option  v-for="supplier in suppliers" :key="supplier.NumFournisseur"> 
         {{supplier.NumFournisseur}} - {{supplier.Nom}}
         </option>
    </select>
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
      material:{},
      supplier:{},
      name:"",
      suppliers:{}

      
    };
  },

  created(){ // pour les appels backend

    axios.get('http://localhost:8081/api/materials/'+this.id)
    .then(response => {
      this.material=response.data
      this.name=this.material.Nom;
        

      }) // creation de la promesse
    .catch()


    axios.get('http://localhost:8081/api/supply/')
    .then(response => this.suppliers=response.data) // creation de la promesse
    .catch()
   
  },

   methods :{
    onValid: function(){
      let nname = document.getElementById('newname').value
      this.student.Nom = nname
    }
  }

};
</script>
