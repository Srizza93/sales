<template>
  <div :class="'input-container input-container-' + input.inputId">
    <label>{{ input.text }}</label>
    <input
      class="input-container_input"
      :type="input.type"
      :id="input.inputId"
      :name="input.name"
      v-model="input.value"
      @focusout="inputValidation(input)"
      v-if="input.type === 'text'"
    />
    <select
      class="input-container_input"
      :id="input.inputId"
      :name="input.name"
      v-model="input.value"
      @focusout="inputValidation(input)"
      v-if="input.type === 'select'"
    >
      <option v-for="(option, index) in input.options()" :key="index + option">
        {{ option }}
      </option>
    </select>
    <label class="input-container_invalid" v-if="!input.valid"
      >Invalid {{ input.text }}</label
    >
  </div>
</template>

<script>
export default {
  name: "InputBox",
  props: {
    input: {
      type: Object,
      required: true,
    },
  },
  methods: {
    inputValidation(input) {
      input.validationFunction(input, this);
    },
    testRegex(input, regex) {
      if (String(regex).length === 6 || !regex.test(input.value)) {
        input.valid = false;
        return;
      }
      input.valid = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
.input-container
  display flex
  flex-direction column
  width 45%
  height 75px
  margin-bottom 15px

.input-container_input
  width 100%
  height 40px
  padding 10px
  border-radius 5px
  border 1px solid #a7a7a7

.input-container_input:focus
 outline 2px solid #136c47

.input-container_input:first-child
  margin-right 10px

.input-container_invalid
 color red
 font-size 14px

@media screen and (max-width 430px)
  .input-container
    width 100%
</style>
