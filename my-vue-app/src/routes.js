import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld  from "./components/HelloWorld.vue";
import formTemplate  from "./components/formTemplate.vue";
import PunchBag  from "./components/PunchBag.vue";


Vue.use(VueRouter);


const appRoutes=[
    {path:'/',component:HelloWorld},
    {path:'/add',component:formTemplate},
    {path:'/game',component:PunchBag},
]
const router = new VueRouter({
    routes:appRoutes,
    mode: "history",
   // base: process.env.BASE_URL,
    //routes
  });
export default router;