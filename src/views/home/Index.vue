<script>
import BaseView from "@/views/View";
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Home",

  metaInfo: { title: "Home" },

  extends: BaseView,

  mixins: [
    LoadSections([
      "Banner",
      "Portfolio",
      "Services",
      "Parallax",
      "Recommend",
      "Contact",
    ]),
  ],

  props: {
    id: {
      type: String,
      default: "home",
    },
  },
};
</script>
