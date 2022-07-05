<template>
<h1> Ajout d'un prêt  </h1>

<div class="update">
<form >
    <div>
     <label for="material">Materiel</label> <br/>
     <select id="material" name="type" v-model="newLoan.material">
     <option value="init" selected> </option>
     <option  v-for="material in availableMaterials" :key="material.CodeBarre"> 
         {{material.CodeBarre+" - "+material.Nom}}
         </option>
    
    </select>
     
    </div>

   <div>
        <label for="student" >Preteur </label> <br/>
        <select id="student" name="type" v-model="newLoan.student">
            <option></option>
         <option  v-for="student in students" :key="student.Identifiant"> 
         {{student.Identifiant}} - {{student.Nom}}   {{student.Prenom}}
         </option>
    
    </select>
    </div>

     <div>
        <label for="description" >Description </label><br/>
        <textarea v-model="newLoan.motif"></textarea>
       
    </div>



   
</form>
</div>
<div >
        <button  @click="addLoan"  class="bouton_update" >Valider </button>
  </div>



</template>
<script>
import axios from 'axios';
import moment from 'moment';

export default{
data(){
    return {
        students:{},
        availableMaterials:{},
        newLoan: [
        {
            material:"",
            student:"",
            motif:""
        },
      ]

    }

},
created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/loan/dispo')
    .then(response => this.availableMaterials=response.data) // creation de la promesse
    .catch()

    axios.get('http://localhost:8081/api/students')
    .then(response => this.students=response.data) // creation de la promesse
    .catch()

    
  },
  methods:{
     addLoan:function(){
        const idStudent = this.newLoan.student.split('-');
        const idMaterial = this.newLoan.material.split('-');
        let date= new Date();
        

        console.log("Materiel : "+this.newLoan.material);
        console.log("Etudiant : "+this.newLoan.student);
        console.log("Motif : "+this.newLoan.motif);
        console.log("Date de l'emprunt : "+moment(date).format('DD/MM/YYYY'));

    
        console.log(idStudent[0]);
        console.log(idMaterial[0]);
        date=moment(date).format('YYYY-MM-DD');

        axios.post('http://localhost:8081/api/loan',{
            "CodeBarre":idMaterial[0],
            "Motif":this.newLoan.motif,
            "DatePret":date,
            "Identifiant":idStudent[0],
            "NumResponsable":1

          })
          .then(response => console.log(response)) // creation de la promesse
          .catch()



     }
  }
  

}
  


</script>

