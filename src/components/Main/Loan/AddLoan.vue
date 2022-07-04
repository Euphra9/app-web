<template>
<h1> Ajout d'un prêt  </h1>

<div class="update">
<form >
    <div>
     <label for="material">Materiel</label> <br/>
     <select id="material" name="type">
     <option value="init" selected> </option>
     <option  v-for="material in materialAvailable()" :key="material.CodeBarre"> 
         {{material}}
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
        allMaterials:[],
        takenMaterials:{},
        availableMaterials:{1:2}

    }

},
created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/students/')
    .then(response => this.students=response.data) // creation de la promesse
    .catch()


     axios.get('http://localhost:8081/api/materials/')
    .then(response => 
        this.allMaterials=response.data
    ) // creation de la promesse
    .catch()


      axios.get('http://localhost:8081/api/loan/')
    .then(response => this.takenMaterials=response.data) // creation de la promesse
    .catch()
    
  },
methods:{
    materialAvailable(){

        for(let material of this.allMaterials){
        this.availableMaterials[material.CodeBarre]=material.Nom;
        }

        return this.availableMaterials;
    }
    }

}
</script>

