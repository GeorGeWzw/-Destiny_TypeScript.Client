import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Lauout",
    meta:{
      title:"Lauout"
    },
    redirect: "/ArchiveView",
    component: ()=>import("@/Layout/layout.vue"),
    children:[
      {
        path: "ArchiveView",
        name: "ArchiveView",
        meta: {
          title: "档案管理"
        },
        component: () => import("@/views/home-view/home.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
