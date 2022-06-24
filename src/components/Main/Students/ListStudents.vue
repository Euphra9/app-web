<template>
   <p> Gestion des matériels </p>
  <router-link to="/etudiants/ajoutEtudiant">Ajouter</router-link>
  <table id="firstTable" >
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
        <button><router-link v-bind:to="'/etudiants/'+student.Identifiant">Modifier</router-link></button>
      </td>
      <td>
        <button> Supprimer </button>
      </td>
    </tr>
    
    </tbody>
  </table>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
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
  }
};
</script>
