<template>
  <v-navigation-drawer absolute temporary v-bind="$attrs" v-on="$listeners">
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.path"
        :to="{ name: item.path }"
        :exact="item.path === 'Home'"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.name" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "HomeDrawer",

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
