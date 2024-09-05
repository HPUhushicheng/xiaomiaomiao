const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "testyyds",
  component: Layout,
  redirect: "/testyyds",
  meta: {
    icon: "ep:home-filled",
    title: "登录页测试",
    rank: 90
  },
  children: [
    {
      path: "/testyyds",
      name: "testyyds",
      component: () => import("@/views/test2/test.vue"),
      meta: {
        title: "登录页测试",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
