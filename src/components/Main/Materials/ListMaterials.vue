<template>
  <h1> Gestion des matériels </h1>
      <form action="">
        <input type="text" placeholder="Search.." name="search">
      </form>
  <router-link to=""><img alt="add" src="../../../assets/add.png"/></router-link>
  <div class="scroll">
  <table id="listM">
    <thead>
    <tr>
      <th>Code barre</th>
      <th>Nom</th>
      <th>Description</th>
      <th>Voir</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="material in materials" :key="material.CodeBarre">
      <td>{{material.CodeBarre}}</td>
      <td>{{material.Nom}}</td>
      <td>{{material.Description}}</td>
      <td>
        <button class="btn_update"><router-link v-bind:to="'/materials/'+material.CodeBarre" >Modifier</router-link></button>
      </td>
      <td>
        <button  v-on:click="deleteMaterial(student.Identifiant)" class="btn_delete"> Supprimer </button>
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

