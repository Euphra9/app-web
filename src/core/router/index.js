import { createRouter, createWebHashHistory } from "vue-router";
import AppPage from "@/components/AppPage.vue";
import HomePage from "@/components/Main/Home/HomePage.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import ListMaterials from "@/components/Main/Materials/ListMaterials.vue";
import AddMaterial from "@/components/Main/Materials/AddMaterial.vue";
import UpdateMaterial from "@/components/Main/Materials/UpdateMaterial.vue"
import ListStudents from "@/components/Main/Students/ListStudents.vue";
import AddStudent from "@/components/Main/Students/AddStudent.vue"
import UpdateStudent from "@/components/Main/Students/UpdateStudent.vue";
import ListLoan from "@/components/Main/Loan/ListLoan.vue";
<<<<<<< HEAD
import Login from "@/components/Login/LoginPage.vue";
import Welcome from "@/components/Login/WelcomePage.vue";
=======
import AddLoan from "@/components/Main/Loan/AddLoan.vue";
import UpdateLoan from "@/components/Main/Loan/UpdateLoan.vue";

>>>>>>> devEuphra

const routes = [
  {
    path: "/",
    name: "AppPage",
    component: AppPage,
    children: [

      {
        path: "/",
        name: "HomePage",
        component: HomePage,
        
      },

      {
        path: "/materiels",
        name: "ListMaterials",
        component: ListMaterials,
        
      },
      {
        path: "/materiels/ajoutMateriel",
        name: "AddMaterial",
        component: AddMaterial

      },

      {
        path: "/materiels/:id",
        name: "UpdateMaterial",
        component: UpdateMaterial,
        
      },

      {

          path: "/etudiants",
          name: "ListStudents",
          component: ListStudents,
          
             
      },
      {
        path: "/etudiants/ajoutEtudiant",
        name: "AddStudent",
        component: AddStudent

      },

      {
        path: "/etudiants/:id",
        name: "UpdateStudent",
        component: UpdateStudent

      },

      {
        path: "/pret",
        name: "ListLoan",
        component: ListLoan,
        
      },
      {
        path: "/pret/ajoutPret",
        name: "AddLoan",
        component: AddLoan,
        
      },
      {
        path: "/pret/:id",
        name: "UpdateLoan",
        component: UpdateLoan,
        
      }
    ]
    
  },

  {
    path: "/nav",
    name: "NavBar",
    component: NavBar,
    
  },

  {
    path: "/",
    name: "Welcom",
    component: Welcome,
  },

  {
    path: "/authLogin",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;