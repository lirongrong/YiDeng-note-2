<template>
    {{ss}}
</template>
<script>
import xx from "xx";
// const ss = new xx();
export default {
  methods: {
      test(){
          this.ss
      }
  },
  data() {
    return {
      ss: new xx()
    };
  }
};
</script>