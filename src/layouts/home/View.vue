<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
export default {
  name: "BaseView",
};
</script>
<style lang="sass" scoped></style>
