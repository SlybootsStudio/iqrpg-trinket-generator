<template>
  <div class="alert alert-dark p-2">
    <div class="btn-group bg-white w-100" role="group">
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="1"
        autocomplete="off"
        value="1"
      />
      <label class="btn btn-outline-secondary fw-bold" for="1">1</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="2"
        autocomplete="off"
        value="2"
      />
      <label class="btn btn-outline-secondary fw-bold" for="2">2</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="3"
        autocomplete="off"
        value="3"
      />
      <label class="btn btn-outline-secondary fw-bold" for="3">3</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="4"
        autocomplete="off"
        value="4"
      />
      <label class="btn btn-outline-secondary fw-bold" for="4">4</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="5"
        autocomplete="off"
        value="5"
      />
      <label class="btn btn-outline-secondary fw-bold" for="5">5</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="6"
        autocomplete="off"
        value="6"
      />
      <label class="btn btn-outline-secondary fw-bold" for="6">6</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="7"
        autocomplete="off"
        value="7"
      />
      <label class="btn btn-outline-secondary fw-bold" for="7">7</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="8"
        autocomplete="off"
        value="8"
      />
      <label class="btn btn-outline-secondary fw-bold" for="8">8</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="9"
        autocomplete="off"
        value="9"
      />
      <label class="btn btn-outline-secondary fw-bold" for="9">9</label>
      <input
        v-model="type"
        type="radio"
        class="btn-check"
        name="btnradio3"
        id="10"
        autocomplete="off"
        value="10"
      />
      <label class="btn btn-outline-secondary fw-bold" for="10">10</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeSelect",
  data() {
    return {
      type: "1"
    };
  },
  watch: {
    type(value) {
      this.$emit("setTier", value);
    }
  }
};
</script>

<style scoped></style>
