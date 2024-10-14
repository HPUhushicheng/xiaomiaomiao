import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "zhiri",
  component: Layout,
  redirect: "/zhiri",
  meta: {
    icon: "ep:checked",
    title: $t("menus.pureZhiri"),
    rank: 87
  },
  children: [
    {
      path: "/zhiri",
      name: "zhiri",
      component: () => import("@/views/zhiri/index.vue"),
      meta: {
        title: $t("menus.pureZhiri"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
