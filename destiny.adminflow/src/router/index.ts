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
    redirect: "/Home",
    component: ()=>import("@/Layout/layout.vue"),
    children:[
      {
        path: "Home",
        name: "Home",
        meta: {
          title: "首页",
          icon:"ios-home-outline",
        },
        component: () => import("@/views/home-view/home.vue"),
      },
      {
        path: "Sett",
        name: "Sett",
        meta: {
          title: "系统管理",
          icon:"ios-settings",
        },
        component: ()=>import("@/Layout/empty.vue"),
        children:[
          {
            path: "User",
            name: "User",
            meta: {
              title: "用户管理",
              icon:"ios-home-outline",
            },
            component: () => import("@/views/user-view/user.vue")
          }
        ]
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
