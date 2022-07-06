<template>
  <h1> Gestion des matériels </h1>
   <div style="position:relative; left:-10vw; top:-2vw;">
  <input v-model="searchKey" type="search" placeholder="Saisir un code barre" name="search" id="searchBox">
  <router-link to="/materiels/ajoutMateriel"><img alt="add" src="../../../assets/add.png"/></router-link>
   </div>

  <table style="width: 3vw;"  class="listMaterials" id="l_table">
    <thead>
    <tr>
      <th>Code</th>
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
        <button  v-on:click="deleteMaterial(material)" class="btn_delete"> Supprimer </button>
      </td>
    </tr>
    </tbody>
       </div>
  </table>

    <div class="b_dialog" id="b_dialog" style="visibility:hidden;">
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
           return (material.CodeBarre.toString().toLowerCase().includes(this.searchKey.toLowerCase())||material.Description.toLowerCase().includes(this.searchKey.toLowerCase()))
        })
      }
  },
  mounted(){
    console.log("Mounted");
  },
  update(){
  
  },
  methods:{
     deleteMaterial:function(material){
    
    document.getElementById("l_table").style.filter="blur(5px)";


    document.getElementById("b_dialog").style.visibility="visible";
    this.message="Etês-vous sur de vouloir supprimer "+material.Nom;
    document.getElementById('message').innerHTML +=this.message;

    document.getElementById('retour').onclick = function() {
            location.reload();
    };

    document.getElementById('remove').onclick = function() {
             axios.delete('http://localhost:8081/api/materials/'+material.CodeBarre)
            .then(response => this.material=response.data) // creation de la promesse
            .catch()


  document.getElementById("b_dialog").style.visibility="hidden";
  document.getElementById("b_confirmation").style.visibility="visible";
    this.message=material.Nom+" supprimé avec succès";
    document.getElementById('messageOK').innerHTML =this.message;

    document.getElementById('ok').onclick = function() {
            location.reload();
    };


    };

    }
  }

};
</script>

