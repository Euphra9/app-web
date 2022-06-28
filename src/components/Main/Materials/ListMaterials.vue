<template>
  <p> Gestion des matériels </p>
      <form action="">
        <input type="text" placeholder="Search.." name="search">
      </form>
  <router-link to="">Ajouter</router-link>
  <table id="firstTable">
    <thead>
    <tr>
      <th>Code barre</th>
      <th>Nom</th>
      <th>Description</th>
      <th>Voir</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>XTFDGD40</td>
      <td>Ordinateur</td>
      <td>PC HP 32GO</td>
      <td>
        <button type="button"></button>
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
      id:this.$route.params.id,
      materials:{}
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/materials/')
    .then(response => this.materials=response.data) // creation de la promesse
    .catch()
  },
  mounted(){
    console.log("ok");
  },
  methods:{
    deleteMaterial:function(id){
      axios.delete('http://localhost:8081/api/materials/'+id)
      .then(response => this.material=response.data) // creation de la promesse
    .catch()
    }
  }

};
</script>

