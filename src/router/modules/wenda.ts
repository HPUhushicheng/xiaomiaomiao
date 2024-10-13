import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "wenda",
  component: Layout,
  redirect: "/wenda",
  meta: {
    icon: "ep:picture",
    title: $t("menus.pureWenda"),
    rank: 74
  },
  children: [
    {
      path: "/wenda",
      name: "wenda",
      component: () => import("@/views/wenda/index.vue"),
      meta: {
        title: $t("menus.pureWenda"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
