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
    <option value="init" selected> </option>
    <option value="info">Fournisseur1</option>
    <option value="elect">Fournisseur2</option>
    </select>
   </div>
   

 <button class="bouton_update" >Valider </button>
   
</form>
</div>


</template>

<script>

export default{
  data(){
    return {
      barcode:"",
     
    };
  },
  created(){ // pour les appels backend

      console.log("created");
      const min=100000000000;
      const max=999999999999;
      var barcode=Math.random() * (max - min) + min;
      this.barcode=parseInt(barcode);
  
    
  },
  mounted(){
    console.log("mounted");
  },
  methods:{
   //  generateBC:function(){
   //    const min=100000000000;
   //    const max=999999999999;
   //    var barcode=Math.random() * (max - min) + min;
   //    this.barcode=parseInt(barcode);
   //    document.getElementById('codeBarre').setAttribute('value', this.barcode);
   //    console.log("Code Barre :"+parseInt(barcode));
    

   //  }

  }

};
</script>
