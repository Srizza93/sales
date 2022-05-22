<template>
  <div class="cc-form-container">
    <form class="form-container">
      <div class="cc-card-img-container">
        <div class="cc-card-img-subcontainer">
          <div class="cc-front-outer">
            <div class="cc-front-outer_cc-front-inner">
              <img
                class="cc-card-img"
                :src="getImgUrl(`${currentCard}--front`)"
                :alt="currentCard"
              />
              <span
                class="cc-front-outer_cc-front-inner_cc-number cc-front-details"
                >4242 4242 4242 4242</span
              >
              <span
                class="cc-front-outer_cc-front-inner_cc-expiration cc-front-details"
                >01/2032</span
              >
              <span
                class="cc-front-outer_cc-front-inner_cc-name cc-front-details"
                >JOHN DOE</span
              >
            </div>
          </div>
          <div class="cc-back-outer">
            <div class="cc-back-outer_cc-back-inner">
              <img
                class="cc-card-img"
                :src="getImgUrl(`${currentCard}--back`)"
                :alt="currentCard"
              />
              <span class="cc-back-outer_cc-back-inner_cc-signature"
                >John Doe</span
              >
              <span class="cc-back-outer_cc-back-inner_cc-cvc">123</span>
            </div>
          </div>
        </div>
      </div>
      <div class="inputs-container">
        <input-box
          v-for="input in inputs"
          :key="input.id + input.name"
          :input="input"
          ref="inputBox"
        />
      </div>
    </form>
  </div>
</template>

<script>
import inputBox from "./InputBox.vue";

export default {
  name: "CcForm",
  components: { inputBox },
  data() {
    return {
      cards: ["american", "discover", "master", "visa"],
      currentCard: "american",
      inputs: [
        {
          id: 1,
          inputId: "ccnumber",
          name: "ccNumber",
          type: "text",
          text: "Card Number",
          value: "",
          valid: true,
          validationFunction: function (source, self) {
            const regex =
              /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
            self.testRegex(source, regex);
            this.styleFunction(source, self);
          },
          styleFunction: function (input, self) {
            input = input.value;
            if (input[0] === "3") {
              self.$parent.currentCard = "american";
            }
            if (input[0] === "4") {
              self.$parent.currentCard = "visa";
            }
            if (input[0] === "5") {
              self.$parent.currentCard = "mastercard";
            }
            if (input[0] === "6") {
              self.$parent.currentCard = "discover";
            }
          },
        },
        {
          id: 2,
          inputId: "ccholder",
          name: "ccHolder",
          type: "text",
          text: "Card Holder",
          value: "",
          valid: true,
          validationFunction: function (source, self) {
            const regex = /^[A-Za-z]{1,}$/;
            self.testRegex(source, regex);
          },
        },
        {
          id: 3,
          inputId: "ccmonth",
          name: "ccMonth",
          type: "select",
          text: "Month",
          options: function () {
            const monthsNumbers = [...Array(12)].map((number, index) =>
              (index + 1 + "").padStart(2, "0")
            );
            monthsNumbers.unshift("Month");
            return monthsNumbers;
          },
          value: "",
          valid: true,
          validationFunction: function (source, self) {
            const regex = /^[0-9]/;
            self.testRegex(source, regex);
          },
        },
        {
          id: 4,
          inputId: "ccyear",
          name: "ccYear",
          type: "select",
          text: "Year",
          options: function () {
            const date = new Date().getFullYear();
            const yearsList = [...Array(20)].map(
              (number, index) => date + index + ""
            );
            yearsList.unshift("Year");
            return yearsList;
          },
          value: "",
          valid: true,
          validationFunction: function (source, self) {
            const regex = /^20[0-9]{2}/;
            self.testRegex(source, regex);
          },
        },
        {
          id: 5,
          inputId: "cvv",
          name: "ccCvv",
          type: "text",
          text: "CVV",
          value: "",
          valid: true,
          validationFunction: function (source, self) {
            const regex = /^[0-9]{3,4}$/;
            self.testRegex(source, regex);
          },
        },
      ],
    };
  },
  methods: {
    getImgUrl(card) {
      const assets = require.context("../../assets", false, /\.png$/);
      return assets("./cc__" + card + ".png");
    },
    ccFlip() {
      const cardContainer = document.querySelector(".cc-card-img-subcontainer");
      cardContainer.classList.toggle("cc-flip");
    },
    validateAllRequirements() {
      this.$refs.inputBox.forEach((comp, index) =>
        comp.inputValidation(this.inputs[index])
      );
      return this.inputs.every((input) => input.valid);
    },
  },
  mounted() {
    document
      .querySelector(".input-container_input[id='cvv']")
      .addEventListener("focus", this.ccFlip.bind(this));
    document
      .querySelector(".input-container_input[id='cvv']")
      .addEventListener("focusout", this.ccFlip.bind(this));
  },
};
</script>

<style lang="stylus" scoped>
.cc-form-container
  position relative
  width 90%
  max-width 500px
  margin-top 220px !important

.form-container
  display flex
  flex-direction column
  padding 150px 40px 40px 40px
  border-radius 15px
  background-color white
  box-shadow rgba(0, 0, 0, 0.35) 0px 5px 15px

.cc-card-img-container
  position absolute
  left calc(50% - 200px)
  top -100px
  width min-content
  height 245px
  background-color transparent
  perspective 1000px

.cc-card-img-subcontainer
  position relative
  width 100%
  height 100%
  transition transform 0.8s
  transform-style preserve-3d

.cc-card-img
  width 400px
  height auto

.cc-front-outer,
.cc-back-outer
  position absolute
  width 100%
  height 100%
  -webkit-backface-visibility hidden /* Safari */
  backface-visibility hidden

.cc-back-outer
  background-color transparent
  transform rotateY(180deg)

.cc-front-outer_cc-front-inner,
.cc-back-outer_cc-back-inner
  position relative

.cc-front-details
  position absolute
  font-weight bold
  background linear-gradient(
    180deg,
    #ffffff 15.34%,
    #dbdbdb 21.24%,
    #ffffff 37.13%,
    rgba(188, 203, 217, 0.68) 48.94%,
    rgba(255, 255, 255, 0.830204) 58.93%
  )
  -webkit-background-clip text
  -webkit-text-fill-color transparent
  white-space nowrap

.cc-front-outer_cc-front-inner_cc-number
  top 115px
  left 70px
  font-size 22px

.cc-front-outer_cc-front-inner_cc-expiration
  top 145px
  left 215px
  font-size 14px

.cc-front-outer_cc-front-inner_cc-name
  top 170px
  left 70px
  font-size 14px

.cc-back-outer_cc-back-inner_cc-signature
  position absolute
  top 92px
  left 70px
  white-space nowrap
  font-size 26px
  font-family "Beth Ellen", cursive

.cc-back-outer_cc-back-inner_cc-cvc
  position absolute
  top 100px
  left 300px
  font-size 14px

.cc-flip
  transform rotateY(180deg)

.inputs-container
 display flex
 flex-wrap wrap
 justify-content space-between
 align-items center

.input-container-ccmonth, .input-container-ccyear, .input-container-cvv
 width 25%

@media screen and (max-width: 400px)
  .cc-card-img-container
    left calc(50% - 100px)
    top -50px

  .cc-card-img
    width 200px
    height auto

  .cc-front-details
    font-size 11px

  .cc-front-outer_cc-front-inner_cc-number
    top 60px
    left 35px

  .cc-front-outer_cc-front-inner_cc-expiration
    top 74px
    left 107px

  .cc-front-outer_cc-front-inner_cc-name
    top 90px
    left 35px
    font-size 7px

@media screen and (max-width: 300px)
  .input-container-ccmonth, .input-container-ccyear, .input-container-cvv
   width 100%

  .cc-card-img-container
    left -25px
</style>
