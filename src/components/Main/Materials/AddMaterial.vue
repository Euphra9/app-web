<template>
<h1> Ajout d'un produit  </h1>
<div class="update">
  <form> 
    <div>
     <label for="codeBarre">Code Barre </label> <br/>
      <input id="codeBarre" name="codeBarre" v-model="newMaterial.Codebarre" readonly>
      <!-- <button v-on:click="generateBC()"> Generer un code barre</button> -->
    </div>

   <div>
        <label for="newname" >Nom </label> <br/>
        <input type="text" id="newname" name="newname" v-model="newMaterial.Nom">
    </div>

     <div>
        <label for="description">Description </label><br/>
        <textarea id="description" name="description" v-model="newMaterial.Description">
        </textarea>
    </div>


   <div>
    <label for="type">Type </label><br/>
    <select id="type" name="type" v-model="newMaterial.Type">
    <option value="init" selected> </option>
    <option >Informatique</option>
    <option >Electronique</option>
    </select>
   </div>

   <div>
      <label for="dateAchat" >Date achat </label> <br/>
      <input type="date" id="dateAchat" name="dateAchat"
       min="2000-01-01" max="3000-01-01" v-model="newMaterial.DateAchat">
   </div>
   <div>
      <label for="prixAchat" >Prix Achat </label> <br/>
      <input type="number" id="prixAchat" name="prixAchat" min="0" v-model="newMaterial.Prix">
   </div>
   <div>
      <label for="fournisseur" >Fournisseur </label> <br/>
      <select id="fournisseur" name="type" v-model="newMaterial.Fournisseur">
      <option></option>
         <option  v-for="supplier in suppliers" :key="supplier.NumFournisseur"> 
         {{supplier.NumFournisseur}} - {{supplier.Nom}}
         </option>
    </select>
   </div>
   

<div>
   <button class="bouton_update" @click="addMaterial" >Valider </button>
</div>
  </form> 

  <button @click="generateBarcode"> Générer un code barre </button>
</div>


</template>

<script>
import axios from 'axios';

export default{
  
  data(){
    return {
      barcode:"",
      suppliers:{},
      newMaterial: [
        {
            Codebarre:"",
            Nom:"",
            Description:"",
            Type:"",
            Prix:"",
            DateAchat:"",
            Fournisseur:""
        },
      ]
     
    };
  },
  created(){ // pour les appels backend
      console.log("created");
      

       axios.get('http://localhost:8081/api/materials/fournisseurs')
      .then(response => this.suppliers=response.data) // creation de la promesse
      .catch()

  },
  mounted(){
    console.log("mounted");
  },
    methods:{
      addMaterial:function(){
        this.newMaterial.Fournisseur=this.newMaterial.Fournisseur.split('-');

       alert("Mon code est "+this.newMaterial.Codebarre+"\n"
         +"Mon Nom est "+this.newMaterial.Nom+"\n"
         +"Ma Description est "+this.newMaterial.Description+"\n"
         +"Mon type est "+this.newMaterial.Type+"\n"
         +"Mon prix est "+this.newMaterial.Prix+"\n"
         +"Ma Date est "+this.newMaterial.DateAchat+"\n"
         +"Mon fournisseur est "+this.newMaterial.Fournisseur[0]);


         axios.post('http://localhost:8081/api/materials',{
            "CodeBarre":this.newMaterial.Codebarre,
            "Nom":this.newMaterial.Nom,
            "Description":this.newMaterial.Description,
            "Type":this.newMaterial.Type,
          })
          .then(response => console.log(response)) // creation de la promesse
          .catch()



      },

      generateBarcode:function(){

        const min=100000000;
        const max=999999999;
        var barcode=Math.random() * (max - min) + min;
       this.newMaterial.Codebarre=parseInt(barcode);
      }

    }



  

};
</script>
