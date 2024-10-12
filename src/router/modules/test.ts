import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "test",
  component: Layout,
  redirect: "/test",
  meta: {
    icon: "ep:home-filled",
    title: $t("menus.pureHome"),
    rank: 87
  },
  children: [
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/test/index.vue"),
      meta: {
        title: $t("menus.pureHome"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
