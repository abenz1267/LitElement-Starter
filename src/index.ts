import { Router } from "@vaadin/router";
import "@components/index";
import "@components/hello";
import "@components/404";

const outlet = document.querySelector("main");
export const router = new Router(outlet);
router.setRoutes([
  {
    path: "/",
    component: "index-view"
  },
  { path: "/hello/:name", component: "hello-view" },
  { path: "(.*)", component: "not-found" }
]);
