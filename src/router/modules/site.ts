import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "site",
  component: Layout,
  redirect: "/site",
  meta: {
    icon: "ep:home-filled",
    title: $t("menus.pureHome"),
    rank: 90
  },
  children: [
    {
      path: "/site",
      name: "site",
      component: () => import("@/views/site/index.vue"),
      meta: {
        title: $t("menus.pureSite"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
