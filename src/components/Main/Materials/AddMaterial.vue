<template>
<h1> Ajout d'un produit  </h1>
<div class="update">
<form >
    <div>
     <label for="codeBarre">Code Barre </label> <br/>
      <input id="codeBarre" name="codeBarre" v-model="barcode" readonly>
      <!-- <button v-on:click="generateBC()"> Generer un code barre</button> -->
    </div>

   <div>
        <label for="newname" >Nom </label> <br/>
        <input type="text" id="newname" name="newname" >
    </div>

     <div>
        <label for="description">Description </label><br/>
        <textarea id="description" name="description">
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
      <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="3000-01-01">
   </div>
   <div>
      <label for="prixAchat" >Prix Achat </label> <br/>
   </div>
   <div>
      <label for="fournisseur" >Fournisseur </label> <br/>
      <select id="fournisseur" name="type">
      <option></option>
         <option  v-for="supplier in suppliers" :key="supplier.NumFournisseur"> 
         {{supplier.Nom}}
         </option>
    </select>
   </div>
   

 <button class="bouton_update" >Valider </button>
   
</form>
</div>


</template>

<script>
import axios from 'axios';

export default{
  
  data(){
    return {
      barcode:"",
      suppliers:{}
     
    };
  },
  created(){ // pour les appels backend
      console.log("created");
      const min=100000000000;
      const max=999999999999;
      var barcode=Math.random() * (max - min) + min;
      this.barcode=parseInt(barcode);


       axios.get('http://localhost:8081/api/materials/fournisseurs')
      .then(response => this.suppliers=response.data) // creation de la promesse
      .catch()


  

  },
  mounted(){
    console.log("mounted");
  },


  

};
</script>
