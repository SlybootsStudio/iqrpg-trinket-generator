<template>
  <div class="alert alert-dark p-2">
    <div class="btn-group w-100 bg-white rounded" role="group">
      <span
        class="btn-group w-100"
        :class="{ 'bg-dark': index > limit }"
        :style="{ 'border-radius: 0; !important': index > limit }"
        v-for="index in 10"
        :key="index"
      >
        <input
          v-model="value"
          type="radio"
          class="btn-check"
          name="btnradio3"
          :id="index"
          autocomplete="off"
          :value="index"
          :disabled="index > limit"
        />
        <label class="btn btn-outline-secondary fw-bold" :for="index">{{
          index
        }}</label>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TierSelect",
  emits: ["setTier"],
  data() {
    return {
      value: 1
    };
  },
  props: {
    limit: Number,
    updateValue: Number
  },
  watch: {
    value(value) {
      this.$emit("setTier", value);
    },
    updateValue(value) {
      console.log("updateBalue");
      this.value = value;
    }
  }
};
</script>

<style scoped></style>
