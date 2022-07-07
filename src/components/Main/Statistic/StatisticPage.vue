<template>
<h1> Statistiques </h1>
<div>
<p> Nombre total des materiels : {{allMaterial}}</p>
<p> Nombre total des materiels pretés</p>
<p> Nombre total des materiels pretés non rendu</p>
<p> Nombre total des materiels pretés rendu :</p>
</div>
</template>
<script>
import axios from 'axios';
export default{
     data(){
        return {
            allMaterials:"",
            allLoans:"",
            allLoansNotReturn:"",
            allLoansReturn:""
     
    };
     },
      created(){ // pour les appels backend
      axios.get('http://localhost:8081/api/statistic/allMaterial')
     .then(response => {
        this.allMaterials=response.data
        this.allMaterials=JSON.stringify(this.allMaterials);
          console.log(this.allMaterials);

        console.log(this.allMaterials);
    
        }) // creation de la promesse
     .catch()
  },
}

</script>