<template>
  <h1> Gestion des prêts </h1>
  <router-link to=""><img alt="add" src="../../../assets/add.png"/></router-link>
    <div class="scroll">
  <table style="width: 3vw;">
    <thead>
      <tr>
        <th>N°</th>
        <th>Date du prêt</th>
        <th>Matériel</th>
        <th>Preteur</th>
        <th>Etat</th>
        <th>Voir</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="loan in loans" :key="loan.CodeBarre">
      <td>{{loan.CodeBarre}}</td>
      <td>{{formatageDate(loan.DatePret)}}</td>
      <td>{{recupMaterial(loan.CodeBarre)}}</td>
       <td>{{recupEtudiant(loan.Identifiant)}}</td>
      <td>
        <button class="btn_update"><router-link v-bind:to="''+loan.CodeBarre" >Modifier</router-link></button>
      </td>
      <td>
        <button  v-on:click="deleteLoan(student.Identifiant)" class="btn_delete"> Supprimer </button>
      </td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default{
  data(){
    return {
      id:this.$route.params.id,
      loans:{
      },
      students:[],
      material:{}
      
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/loan/')
    .then(response => this.loans=response.data) // creation de la promesse
    .catch()

  },
 mounted(){
    

    
  },
  methods:{
    deleteLoan:function(id){
      axios.delete('http://localhost:8081/api/loan/'+id) // creation de la promesse 
      .then(response => this.loan=response.data) // on extrait les données
    .catch()
    },

    formatageDate:function(date){
        return moment(date).format('DD/MM/YYYY');
    },

    recupMaterial:function(id){
      return id;
    },

     recupEtudiant:function(id){
       
     
     

      return id;   
      
      }

  }

};
</script>
