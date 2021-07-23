<template lang="pug">
  base-section(id="parallaxsection" space="0")
    v-parallax(:src="parallax.src")
</template>
<script>
import parallax1 from "../../assets/parallax/parallax1.jpg";

export default {
  name: "SectionParallax",

  data() {
    return {
      parallax: {
        src: parallax1,
        comment: "",
      },
    };
  },
};
</script>

<style lang="sass" scoped></style>
