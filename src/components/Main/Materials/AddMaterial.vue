<template>
<h1> Ajout d'un produit  </h1>

<div class="update">
<form >
    <div>
     <label for="codeBarre">Code Barre </label> <br/>
      <input id="codeBarre" name="codeBarre">
      <button> Generer un code barre</button>
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
        <button class="bouton_update" >Valider </button>
  </div>



</template>

