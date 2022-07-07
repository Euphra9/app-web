<template>
<h1> Modification du materiel :  {{name}} </h1>

<div class="addMaterial">
<form >
    <div>
     <label for="codeBarre">Code Barre </label> <br/>
      <input id="codeBarre" name="codeBarre" readonly v-model="material.CodeBarre" >
    </div>

   <div>
        <label for="name" >Nom </label> <br/>
        <input type="text" id="name" name="name" :value="material.Nom" >
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
       min="2000-01-01" max="3000-01-01" v-model="supply.DateAchat">
   </div>
   <div>
      <label for="prixAchat" >Prix Achat </label> <br/>
      <input type="number" id="prixAchat" name="prixAchat" min="0" v-model="supply.PrixAchat" >
   </div>
     <div>
      <label for="fournisseur" >Fournisseur </label> <br/>
      <select id="fournisseur" name="type" v-model="supplierId">
      <option></option>
         <option  v-for="supplier in suppliers" :key="supplier.NumFournisseur"> 
         {{supplier.NumFournisseur}} - {{supplier.Nom}}
         </option>
    </select>
   </div>
 </form>  
<div >
        <button class="bouton_update" @click="updateMaterial" >Valider </button>
</div>

  <button id="generateBC"> Fiche produit </button>

</div>





</template>

<script>
import axios from 'axios';
import moment from 'moment';


export default{
  data(){
    return {
      id:this.$route.params.id,
      material:{},
      supply:{},
      supplier:{},
      supplierId:"",
      name:"",
      suppliers:{}

      
    };
  },

  created(){ // pour les appels backend

    axios.get('http://localhost:8081/api/materials/'+this.id)
    .then(response => {
      this.material=response.data
      this.name=this.material.Nom;

       axios.get('http://localhost:8081/api/supply/'+this.material.CodeBarre)
      .then(response => {
        this.supply=response.data
        this.supply.DateAchat=moment( this.supply.DateAchat).format('YYYY-MM-DD')

          axios.get('http://localhost:8081/api/supply/supplier/'+this.supply.NumFournisseur)
          .then(response => {
            this.supplier=response.data
            this.supplierId=this.supplier.NumFournisseur+" - "+this.supplier.Nom;
            }) // creation de la promesse
          .catch()

        }) // creation de la promesse
     .catch()
        

      }) // creation de la promesse
    .catch()


    axios.get('http://localhost:8081/api/supply/')
    .then(response => this.suppliers=response.data) // creation de la promesse
    .catch()
   
  },

   methods :{
    updateMaterial: function(){
    //this.supplier.Fournisseur=this.supplier.Fournisseur.split('-');


    axios.put('http://localhost:8081/api/material/'+this.id,
           {
             "Nom":this.material.Nom,
             "Description":this.material.Description,
             "Type":this.material.Type
          })

      axios.put('http://localhost:8081/api/supply/'+this.id,
           {
            "DateAchat":this.supply.DateAchat,
            "PrixAchat":this.supply.PrixAchat,
            "NumFournisseur":this.supplier.NumFournisseur
          })



     alert("Mon code est "+this.material.CodeBarre+"\n"
         +"Mon Nom est "+this.material.Nom+"\n"
         +"Ma Description est "+this.material.Description+"\n"
         +"Mon type est "+this.material.Type+"\n"
         +"Mon prix est "+this.supply.PrixAchat+"\n"
         +"Ma Date est "+this.supply.DateAchat+"\n"
         +"Mon fournisseur est "+this.supplier.NumFournisseur);



    }
  }

};
</script>
