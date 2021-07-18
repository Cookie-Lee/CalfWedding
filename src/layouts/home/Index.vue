<template>
  <v-app>
    <!-- <home-system-bar /> 可以當作公告用-->

    <home-app-bar />

    <home-view />

    <home-footer />

    <!-- <home-settings /> 功能鈕，不需要-->
  </v-app>
</template>

<script>
export default {
  name: "HomeLayout",

  components: {
    HomeAppBar: () => import("@/layouts/home/AppBar"),
    HomeFooter: () => import("@/layouts/home/Footer"),
    //HomeSettings: () => import('@/layouts/home/Settings'),
    //HomeSystemBar: () => import('@/layouts/home/SystemBar'),
    HomeView: () => import("@/layouts/home/View"),
  },
};
</script>
