<template>
  <h1> Gestion des matériels </h1>
   <div style="position:relative; left:-10vw; top:-2vw;">
  <input v-model="searchKey" type="search" placeholder="Saisir un code barre" name="search" id="searchBox">
  <router-link to="/materiels/ajoutMateriel"><img alt="add" src="../../../assets/add.png"/></router-link>
   </div>

  <table style="width: 3vw;"  class="listMaterials">
    <thead>
    <tr>
      <th>Code barre</th>
      <th>Nom</th>
      <th>Description</th>
      <th>Type</th>
      
    </tr>
    </thead>
      <div class="scroll">
    <tbody>
      <tr v-for="material in search" :key="material.CodeBarre">
      <td>{{material.CodeBarre}}</td>
      <td>{{material.Nom}}</td>
      <td>{{material.Description}}</td>
      <td>{{material.Type}}</td>
      <td>
        <button class="btn_update"><router-link v-bind:to="'/materiels/'+material.CodeBarre" >Modifier</router-link></button>
      </td>
      <td>
        <button  v-on:click="deleteMaterial(student.Identifiant)" class="btn_delete"> Supprimer </button>
      </td>
    </tr>
    </tbody>
       </div>
  </table>

</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
      id:this.$route.params.id,
      materials:[],
      searchKey:""
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/materials/')
    .then(response => this.materials=response.data) // creation de la promesse
    .catch()
  },
  computed:{
      search(){
      
        return this.materials.filter((material)=>
        {
           return material.CodeBarre.toString().toLowerCase().includes(this.searchKey.toLowerCase())
        })
      }
  },
  mounted(){
    console.log("Mounted");
  },
  update(){
  
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

