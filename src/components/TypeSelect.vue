<template>
  <div class="alert alert-dark p-2">
    <div class="btn-group bg-white w-100" role="group">
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio2"
        id="battling"
        autocomplete="off"
        value="battling"
      />
      <label class="btn btn-outline-secondary fw-bold" for="battling"
        >Battling Trinket</label
      >

      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio2"
        value="gathering"
        id="gathering"
        autocomplete="off"
      />
      <label class="btn btn-outline-secondary fw-bold" for="gathering"
        >Gathering Trinket</label
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeSelect",
  data() {
    return {
      type: "battling"
    };
  },
  watch: {
    type(value) {
      this.$emit("setType", value);
    }
  }
};
</script>

<style scoped></style>
