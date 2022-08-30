<template>
  <div class="alert alert-dark p-2">
    <div class="btn-group bg-white w-100" role="group">
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio"
        id="rare"
        autocomplete="off"
        value="rare"
      />
      <label class="btn btn-outline-primary fw-bold" for="rare">Rare</label>

      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio"
        value="epic"
        id="epic"
        autocomplete="off"
      />
      <label class="btn btn-outline-info fw-bold" for="epic">Epic</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio"
        value="legendary"
        id="legendary"
        autocomplete="off"
      />
      <label class="btn btn-outline-warning fw-bold" for="legendary"
        >Legendary</label
      >
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio"
        value="mythic"
        id="mythic"
        autocomplete="off"
      />
      <label class="btn btn-outline-danger fw-bold" for="mythic">Mythic</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeSelect",
  data() {
    return {
      type: "rare"
    };
  },
  watch: {
    type(value) {
      this.$emit("setRarity", value);
    }
  }
};
</script>

<style scoped></style>
