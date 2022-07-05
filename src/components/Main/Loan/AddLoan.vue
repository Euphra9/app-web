<template>
<h1> Ajout d'un prêt  </h1>

<div class="update">
<form >
    <div>
     <label for="material">Materiel</label> <br/>
     <select id="material" name="type">
     <option value="init" selected> </option>
     <option  v-for="material in availableMaterials" :key="material.CodeBarre"> 
         {{material.CodeBarre+" - "+material.Nom}}
         </option>
    
    </select>
     
    </div>

   <div>
        <label for="student" >Preteur </label> <br/>
        <select id="student" name="type">
            <option></option>
         <option  v-for="student in students" :key="student.Identifiant"> 
         {{student.Nom}}
         </option>
    
    </select>
    </div>

     <div>
        <label for="description">Description </label><br/>
        <textarea></textarea>
       
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
<script>
import axios from 'axios';
export default{
data(){
    return {
        students:{},
        availableMaterials:{}

    }

},
created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/loan/dispo')
    .then(response => this.availableMaterials=response.data) // creation de la promesse
    .catch()
    
  }

}
  


</script>

