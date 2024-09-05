const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "test2",
  component: Layout,
  redirect: "/test2",
  meta: {
    icon: "ep:home-filled",
    title: "测试2",
    rank: 87
  },
  children: [
    {
      path: "/test2",
      name: "test2",
      component: () => import("@/views/test/test2.vue"),
      meta: {
        title: "测试2",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
