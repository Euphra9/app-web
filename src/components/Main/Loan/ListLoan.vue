<template>
  <h1> Gestion des prêts </h1>
  <router-link to=""><img alt="add" src="../../../assets/add.png"/></router-link>
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
      <td>{{loan.DatePret}}</td>
      <td>{{loan.DateRetour}}</td>
       <td>{{loan.DateRenduPrevue}}</td>
      <td>
        <button class="btn_update"><router-link v-bind:to="''+loan.CodeBarre" >Modifier</router-link></button>
      </td>
      <td>
        <button  v-on:click="deleteStudent(student.Identifiant)" class="btn_delete"> Supprimer </button>
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
      loans:{}
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/loan/')
    .then(response => this.loans=response.data) // creation de la promesse
    .catch()
  },
  mounted(){
    console.log("ok");
  },
  methods:{
    deleteLoan:function(id){
      axios.delete('http://localhost:8081/api/loan/'+id)
      .then(response => this.loan=response.data) // creation de la promesse
    .catch()
    }
  }

};
</script>
