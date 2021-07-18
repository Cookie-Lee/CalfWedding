<template>
  <div>
    <v-app-bar id="home-app-bar" app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <base-img
        id="base-img"
        src="https://fakeimg.pl/40x40/ccc"
        max-width="40"
      />
      <v-app-bar-title class="ml-4">{{ appBarTitle }}</v-app-bar-title>
      <v-tabs class="hidden-md-and-down" right>
        <v-tab v-for="(tab, index) in tabs" :key="tab.hash">
          {{ tab.name }}-{{ index }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <home-drawer v-model="drawer" :items="tabs" />
  </div>
</template>

<script>
export default {
  name: "HomeAppBar",

  components: {
    HomeDrawer: () => import("./Drawer"),
  },

  data: () => ({
    drawer: null,
    appBarTitle: "FakeTitle",
    tabs: [
      { name: "FackTab", hash: "servicesection" },
      { name: "FackTab", hash: "productssection" },
      { name: "FackTab", hash: "contactsection" },
    ],
  }),
};
</script>
