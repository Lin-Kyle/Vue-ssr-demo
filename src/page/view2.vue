<template>
  <div>
    <p>Page2</p>
  </div>
</template>

<script>
export default {
  created() {
    try {
      console.log(window);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>