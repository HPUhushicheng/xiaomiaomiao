const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "test",
  component: Layout,
  redirect: "/test",
  meta: {
    icon: "ep:home-filled",
    title: "测试",
    rank: 87
  },
  children: [
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/test/test.vue"),
      meta: {
        title: "测试",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
