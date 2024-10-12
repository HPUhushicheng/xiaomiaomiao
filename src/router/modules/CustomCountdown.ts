import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "CustomCountdown",
  component: Layout,
  redirect: "/CustomCountdown",
  meta: {
    icon: "ep:picture",
    title: $t("menus.pureCustomCountdown"),
    rank: 87
  },
  children: [
    {
      path: "/CustomCountdown",
      name: "CustomCountdown",
      component: () => import("@/views/CustomCountdown/index.vue"),
      meta: {
        title: $t("menus.pureCustomCountdown"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
