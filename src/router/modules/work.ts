import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "work",
  component: Layout,
  redirect: "/work",
  meta: {
    icon: "ep:picture",
    title: $t("menus.pureWork"),
    rank: 5
  },
  children: [
    {
      path: "/work",
      name: "work",
      component: () => import("@/views/work/index.vue"),
      meta: {
        title: $t("menus.pureWork"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
