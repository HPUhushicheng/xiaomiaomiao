const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "test3",
  component: Layout,
  redirect: "/test3",
  meta: {
    icon: "ep:home-filled",
    title: "测试3",
    rank: 88
  },
  children: [
    {
      path: "/test3",
      name: "test3",
      component: () => import("@/views/test/test3.vue"),
      meta: {
        title: "测试3",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
