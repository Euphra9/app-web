<template>
<h1> Mis à jour du prêt réalisé par {{student.Prenom+" "+student.Nom}} </h1>

<div class="gestionLoan">
<form >
    <div>
     <label for="material">Materiel</label> <br/>
     <input id="material" name="material" readonly  v-model="material.Nom" style="position: relative; left:-1.5vw;">

    </div>

   <div>
        <label for="emprunt">Emprunteur </label> <br/>
     <input id="emprunt" name="emprunt" readonly  v-model="student.Nom" style="position: relative; left:-2.7vw;" >
    </div>

     <div>
        <label for="description">Description </label><br/>
     <textarea id="description" name="description" readonly  v-model="loan.Motif" >
     </textarea>

       
    </div>


   <div>
    <label for="type">Type </label><br/>
     <input type="text" id="type" name="type" readonly  v-model="loan.CodeBarre" >

   </div>
   <div>
    <label for="rendu"> Matérial rendu </label>
     <input type="checkbox" id="rendu" name="rendu">
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
        id:this.$route.params.id,
        loan:{},
        student:{},
        material:{}

    }
  },

   created(){ // pour les appels backend

    axios.get('http://localhost:8081/api/loan/'+this.id)
    .then(response => {
        this.loan=response.data
        // recupère les infos de l'étudiant
         axios.get('http://localhost:8081/api/students/'+this.loan.Identifiant)
          .then(response => {this.student=response.data
           console.log(this.student);
          }) // creation de la promesse
          .catch()

        // recupère les infos du materiel
          axios.get('http://localhost:8081/api/materials/'+this.loan.CodeBarre)
          .then(response => {this.material=response.data
           console.log(this.material);
          }) // creation de la promesse
          .catch()



        }) // creation de la promesse
    .catch()
   
  }
}
</script>

