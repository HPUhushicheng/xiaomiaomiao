import { $t } from "@/plugins/i18n";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "wallpaper",
  component: Layout,
  redirect: "/wallpaper",
  meta: {
    icon: "ep:picture",
    title: $t("menus.pureWallpaper"),
    rank: 87
  },
  children: [
    {
      path: "/wallpaper",
      name: "wallpaper",
      component: () => import("@/views/wallpaper/index.vue"),
      meta: {
        title: $t("menus.pureWallpaper"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
