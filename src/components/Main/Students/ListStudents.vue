<template>
 <div class="mainBlock">
   <p> Gestion des matériels </p>
  <router-link to="">Ajouter</router-link>
  <table id="firstTable" >
    <thead>
    <tr>
      <th>Identifiant</th>
      <th>Nom</th>
      <th>Prenom</th>
      <th>Voir</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="student in students" :key="student.Identifiant">
      <td>{{student.Identifiant}}</td>
      <td>{{student.Nom}}</td>
      <td>{{student.Prenom}}</td>
      <td>
        <button type="button"></button>
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
      students:{}
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/students')
    .then(response => this.students=response.data) // creation de la promesse
    .catch()
  },
  mounted(){
    console.log("ok");
  }
};
</script>
