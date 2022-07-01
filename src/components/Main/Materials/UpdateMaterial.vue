<template>
<h1> Modification du materiel :  {{material.Nom}} </h1>
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
    <select id="type" name="type">
    <option value="init" selected> </option>
    <option value="info">Informatique</option>
    <option value="elect">Electronique</option>
    </select>
   </div>

   <div>
      <label for="dateAchat" >Date achat </label> <br/>
   </div>
   <div>
      <label for="prixAchat" >Prix Achat </label> <br/>
   </div>
   <div>
      <label for="fournisseur" >Fournisseur </label> <br/>
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
      name: this.material,
      newname : "",
      updateMaterial: [
        {
            name:"Hello",
           
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

    axios.get('http://localhost:8081/api/materials/'+this.id)
    .then(response => this.material=response.data) // creation de la promesse
    .catch()
   
  },

  mounted(){
    console.log("ok");
  }


};
</script>
