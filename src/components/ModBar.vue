<template>
  <div class="alert alert-dark mb-3">
    <div class="text-light row">
      <div class="col-6 col-sm-3">
        <div class="bg-white rounded">
          <button class="w-100 btn-sm btn btn-outline-secondary fw-bold">
            {{ label }}
          </button>
        </div>
      </div>
      <div class="col-6 col-sm-3 text-center">
        <span class="badge bg-secondary"
          >{{ rollTotal }}<span v-show="percent">%</span></span
        ><br />
        <span class="badge bg-white text-light"
          >{{ rollBase }}<span v-show="percent">%</span></span
        >
      </div>
      <div class="col-12 col-sm-6">
        <div class="d-flex">
          <div class="me-3">
            <span class="badge bg-secondary"
              >{{ min }}<span v-show="percent">%</span></span
            >
            <span class="badge bg-white text-light"
              >{{ minBase }}<span v-show="percent">%</span></span
            >
          </div>
          <input
            type="range"
            class="form-range"
            :min="min"
            :max="max"
            step="0.1"
            :value="rollTotal"
            disabled
            id="customRange3"
          />
          <div class="ms-3">
            <span class="badge bg-secondary"
              >{{ max }}<span v-show="percent">%</span></span
            >
            <span class="badge bg-white text-light"
              >{{ maxBase }}<span v-show="percent">%</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModBar",
  props: {
    label: String,
    max: Number,
    maxBase: Number,
    min: Number,
    minBase: Number,
    percent: Boolean,
    rollTotal: Number,
    rollBase: Number
  }
};
</script>

<style scoped></style>
