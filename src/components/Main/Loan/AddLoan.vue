<template>
<h1> Ajout d'un prêt  </h1>

<div class="update">
<form >
    <div>
     <label for="material">Materiel</label> <br/>
     
    </div>

   <div>
        <label for="student" >Preteur </label> <br/>
    </div>

     <div>
        <label for="description">Description </label><br/>
       
    </div>


   <div>
    <label for="type">Type </label><br/>
    <select id="type" name="type">
    <option value="init" selected> </option>
    <option value="info">Informatique</option>
    <option value="elect">Electronique</option>
    </select>
   </div>
   
   
</form>
</div>
<div >
        <button class="bouton_update" >Valider </button>
  </div>



</template>

