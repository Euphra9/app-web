import { createRouter, createWebHashHistory } from "vue-router";
import AppPage from "@/components/AppPage.vue";
import HomePage from "@/components/Main/Home/HomePage.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import ListMaterials from "@/components/Main/Materials/ListMaterials.vue";
import ListStudents from "@/components/Main/Students/ListStudents.vue";
import AddStudent from "@/components/Main/Students/AddStudent.vue"
import ListLoan from "@/components/Main/Loan/ListLoan.vue";


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
        path: "/pret",
        name: "ListLoan",
        component: ListLoan,
        
      }
    ]
    
  },

  {
    path: "/nav",
    name: "NavBar",
    component: NavBar,
    
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;