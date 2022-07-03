<template>
   <h1> Gestion des étudiants </h1>
  <router-link to="/etudiants/ajoutEtudiant"><img alt="add" src="../../../assets/add.png"/></router-link>
  <table class="listStudents" id="l_table">
    <thead>
    <tr>
      <th>Identifiant</th>
      <th>Nom</th>
      <th>Prenom</th>
      <th>Promotion</th>
      <th> </th>
      <th> </th>
    </tr>
    </thead>
     <div class="scroll">
    <tbody>
    <tr v-for="student in students" :key="student.Identifiant">
      <td>{{student.Identifiant}}</td>
      <td>{{student.Nom}}</td>
      <td>{{student.Prenom}}</td>
       <td>{{student.Promotion}}</td>
      <td>
        <button class="btn_update"><router-link v-bind:to="'/etudiants/'+student.Identifiant" >Modifier</router-link></button>
      </td>
      <td>
        <button  v-on:click="deleteStudent(student)" class="btn_delete"> Supprimer </button>
      </td>
    </tr>
    
    </tbody>
    </div>
  </table>
  <div class="b_dialog" id="b_dialog" style="visibility:hidden;">
    <!-- <p> Etes-vous sûr de vouloir supprimer l'étudiant n° </p> -->
     <p id="message">  </p>
     <button class="btn_update" id="remove"> Confirmer </button>
     <button class="btn_delete" id="retour" > Annuler </button>
  </div>
  <div class="b_confirmation" id="b_confirmation" style="visibility:hidden;">
    <p id="messageOK"></p>
    <button class="btn_update" id="ok"> Ok</button>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
      id:this.$route.params.id,
      students:{},
      message:""
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/students/')
    .then(response => this.students=response.data) // creation de la promesse
    .catch()
    
  },
  mounted(){
    console.log("mounted");
  },
  methods:{
    deleteStudent:function(student){
    
    document.getElementById("l_table").style.filter="blur(5px)";


    document.getElementById("b_dialog").style.visibility="visible";
    this.message="Etês-vous sur de vouloir supprimer "+student.Prenom+" "+student.Nom;
    document.getElementById('message').innerHTML +=this.message;

    document.getElementById('retour').onclick = function() {
            location.reload();
    };

    document.getElementById('remove').onclick = function() {
             axios.delete('http://localhost:8081/api/students/'+student.Identifiant)
            .then(response => this.student=response.data) // creation de la promesse
            .catch()


  document.getElementById("b_dialog").style.visibility="hidden";
  document.getElementById("b_confirmation").style.visibility="visible";
    this.message=student.Prenom+" "+student.Nom+" supprimé avec succès";
    document.getElementById('messageOK').innerHTML =this.message;

    document.getElementById('ok').onclick = function() {
            location.reload();
    };


    };

    }

  }
};
</script>
