<template>
  <h1> Gestion des prêts </h1>
  <router-link to="/pret/ajoutPret"><img alt="add" src="../../../assets/add.png"/></router-link>
    <div class="scroll">
  <table style="width: 3vw;">
    <thead>
      <tr>
        <th>Date du prêt</th>
        <th>Matériel</th>
        <th>Preteur</th>
        <th>Etat</th>
        <th>Voir</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="loan in loans" :key="loan.CodeBarre">
      <td>{{formatageDate(loan.DatePret)}}</td>
      <td>{{this.materials[loan.CodeBarre]}}</td>
      <td>{{ this.students[loan.Identifiant]}}</td>
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
      loans:{},
      students:{},
      materials:{}
      
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/loan/')
    .then(response => {
      this.loans=response.data
      // on recupère le nom de l'étudiant en fonction de son Nom
      for(const loan of this.loans){
           axios.get('http://localhost:8081/api/students/'+loan.Identifiant)
          .then(response => {this.students[loan.Identifiant]=response.data

            this.students[loan.Identifiant]=this.students[loan.Identifiant].Nom+" "+this.students[loan.Identifiant].Prenom;
           console.log(this.students);
          }) // creation de la promesse
          .catch()    
      }

      // On recupère le nom du maétriel en fonction de son codeBarre

    for(const loan of this.loans){
           axios.get('http://localhost:8081/api/materials/'+loan.CodeBarre)
          .then(response => {this.materials[loan.CodeBarre]=response.data

          this.materials[loan.CodeBarre]=this.materials[loan.CodeBarre].Nom;
          console.log(this.materials);
          }) // creation de la promesse
          .catch()    
      }


    }) // creation de la promesse
    .catch()
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
    }

  }

};
</script>
