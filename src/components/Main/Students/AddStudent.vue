<template>
<h1> Ajout d'un étudiant </h1>
<div class="formStudent" id="formStudent">
    <div>
        <label for="name">Nom </label> <br/>
        <input v-model="newstudent.name"  id="name" name="name" >
        <p id="errorName" class="error"> </p>
    </div>
    <div>
        <label for="lastname">Prénom </label><br/>
        <input  v-model="newstudent.lastname"  id="lastname" name="lastname">
        <p id="errorLastname" class="error"> </p>

    </div>

   <div>
    <label for="promotion">Promotion </label><br/>
    <select v-model="newstudent.class" id="promotion-class" name="promotion">
    <option value="init" selected> </option>
    <option value="L1">L1</option>
    <option value="L2">L2</option>
    <option value="L3">L3</option>
    <option value="M1">M1</option>
    <option value="M2">M2</option>  
    </select>
    <select v-model="newstudent.cursus" id="promotion-cursus" name="promotion">
    <option value="init" selected> </option>
    <option value="normale">INIT</option>
    <option value="app">APP</option>
    </select>
    <select  v-model="newstudent.spec" id="promotion-spec" name="promotion">
    <option value="init" selected> </option>
    <option value="lsi">LSI</option>
    <option value="rs">RS</option>
    </select>
    <p id="errorPromotion" class="error">  </p>

   </div>
     <div>
        <label for="email">Email </label><br/>
        <input  v-model="newstudent.email" type="email" id="email" name="email">
        <p id="errorEmail" class="error"> </p>

    </div>

     <div>
        <label for="phonenum">Téléphone </label><br/>
        <input v-model="newstudent.phonenum"  type="tel" id="phonenum" name="phonenum">
        <p id="errorTelephone" class="error"> </p>

    </div>

    <div class="button">
        <button v-on:click="addStudent" class="btn_valide">Valider</button>
    </div>
   
</div>
 <div class="b_confirmation" id="b_confirmation" style="visibility:hidden; position: relative; top:-15vw;">
    <p id="messageOK"> Elève ajouté avec succès </p>
    <router-link to="/etudiants"> <button class="btn_update" id="ok"> Ok</button></router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
    return {
      students:{},
      newstudent: [
        {
            name:"",
            lastname:"",
            class:"",
            cursus:"",
            spec:"",
            phonenum:"",
            email:""
        },
      ]
    };
  },

   created(){ // pour les appels backend
    axios.get('http://localhost:8081/api/students/')
    .then(response => this.students=response.data) // creation de la promesse
    .catch()
    
  },

    methods:{
      isEmpty:function(title,errorTitle){
        if( !document.getElementById(title).value.replace(/\s+/, '').length ) {
            document.getElementById(errorTitle).innerHTML ="Champ vide";
            document.getElementById(errorTitle).style.visibility="visible";
            return true            
          }
         else{
          document.getElementById(errorTitle).style.visibility="hidden";
          return false  
         } 
      },
      verifChamps:function(){
        var nameIsempty=this.isEmpty("name","errorName");
        var lastnameIsempty=this.isEmpty("lastname","errorLastname");
        var promClassIsempty=this.isEmpty("promotion-class","errorPromotion");
        var promCursusIsempty=this.isEmpty("promotion-cursus","errorPromotion");
        var promSpecIsempty=this.isEmpty("promotion-spec","errorPromotion");
        var EmailIsempty=this.isEmpty("email","errorEmail");
        var PhoneIsempty=this.isEmpty("phonenum","errorTelephone");

        if((nameIsempty===false)&&
          (lastnameIsempty===false)&&
          (promClassIsempty===false)&&
         (promCursusIsempty===false)&&
          (promSpecIsempty===false)&&
          (EmailIsempty===false)&&
          (PhoneIsempty===false))
           {return true;}
        else {
          return false;
          }

      },
      studentExist:function(){
        var existe=false;
        for(const student of this.students){  
         if(this.newstudent.email===student.Adresse){
           document.getElementById("errorEmail").innerHTML ="Cet étudiant existe";
           document.getElementById("errorEmail").style.visibility="visible";
            existe= true;
         }
         
        }
    return existe;
       

      },

        addStudent:function(){
          let isNotEmpty=this.verifChamps();
          var studentExist= this.studentExist();
        

      
          if((isNotEmpty === true)&&(studentExist===false)){
            var promotion=this.newstudent.class+"-"+
            this.newstudent.cursus.toUpperCase()+"-"+
            this.newstudent.spec.toUpperCase();
              
          axios.post('http://localhost:8081/api/students',{
            "Nom":this.newstudent.name,
            "Prenom":this.newstudent.lastname,
            "NumTel":this.newstudent.phonenum,
            "Adresse":this.newstudent.email,
            "Promotion":promotion

          })
          .then(response => {
            console.log(response)
            document.getElementById("formStudent").style.filter="blur(5px)";
            document.getElementById("b_confirmation").style.visibility="visible";


            }) // creation de la promesse
          .catch()
           
           }
       
  
         
          
         
            

        }
    }
}
</script>
