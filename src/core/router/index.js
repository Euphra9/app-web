import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/Main/Home/HomePage.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import ListMaterials from "@/components/Main/Materials/ListMaterials.vue";
import ListStudents from "@/components/Main/Students/ListStudents.vue";
import ListLoan from "@/components/Main/Loan/ListLoan.vue";



const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    children: [

      {
        path: "/materiels",
        name: "ListMaterials",
        component: ListMaterials,
        
      },

      {

        
        
          path: "/etudients",
          name: "ListStudents",
          component: ListStudents
          
        
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