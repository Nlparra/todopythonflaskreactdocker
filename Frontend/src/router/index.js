import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
import List from "../views/ListTodo.vue"
import Json from "../components/JsonTodo.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/list",
      name: "list",
      component: List,
    },
    {
      path: "/json",
      name: "jsonlist",
      component: Json,
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import("../views/AboutView"),
    //   component: About,
    // },
  ],
});

export default router;
