<template>
<h1> Modification de l'étudiant</h1>
<p> {{student.Nom}}</p>
</template>

<script>
import axios from 'axios';

export default{
  data(){
    return {
      id:this.$route.params.id,
      student:{}
    };
  },
  created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/students/'+this.id)
    .then(response => this.student=response.data) // creation de la promesse
    .catch()
  },
  mounted(){
    console.log("ok");
  }
};
</script>