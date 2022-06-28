<template>
   <h1> Gestion des étudiants </h1>
  <router-link to="/etudiants/ajoutEtudiant"><img alt="add" src="../../../assets/add.png"/></router-link>
  <div class="scroll">
  <table class="listStudents">
    <thead>
    <tr>
      <th>Identifiant</th>
      <th>Nom</th>
      <th>Prenom</th>
      <th> </th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    
    <tr v-for="student in students" :key="student.Identifiant">
      <td>{{student.Identifiant}}</td>
      <td>{{student.Nom}}</td>
      <td>{{student.Prenom}}</td>
      <td>
        <button class="btn_update"><router-link v-bind:to="'/etudiants/'+student.Identifiant" >Modifier</router-link></button>
      </td>
      <td>
        <button  v-on:click="deleteStudent(student.Identifiant)" class="btn_delete"> Supprimer </button>
      </td>
    </tr>
    
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
      id:this.$route.params.id,
      students:{}
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/students/')
    .then(response => this.students=response.data) // creation de la promesse
    .catch()
  },
  mounted(){
    console.log("ok");
  },
  methods:{
    deleteStudent:function(id){
      axios.delete('http://localhost:8081/api/students/'+id)
      .then(response => this.student=response.data) // creation de la promesse
    .catch()
    }
  }

};
</script>
