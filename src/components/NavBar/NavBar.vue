<template>

  <div class="menu">



    <div class="menu-items">

      <div>
             <router-link to="/"><img alt="loan" src="../../assets/logo.png"/></router-link>
             <p> Accueil</p>
           </div>


     <div>
       <router-link to="/pret"><img alt="loan" src="https://img.icons8.com/ios/100/000000/change.png"/></router-link>
      <p> Prêts</p>
     </div>
   <div>
     <router-link to="/materiels"><img alt="material" src="../../assets/materials.png"/></router-link>
               <p> Materiels</p>
   </div>

      <div>
        <router-link to="/etudiants"> <img alt="students" src="../../assets/students.png"/></router-link>
           <p> Etudiants</p>
      </div>

    <div>
       <img alt="statistic" src="../../assets/statistic.png"/>
     <p> Statistique</p>
    </div>
    </div>
  </div>
  


</template>