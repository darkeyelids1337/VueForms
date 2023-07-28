<template>
  <input
    type="text"
    @input="numberReg($event)"
    @change="changeModel($event)"
    v-model="value"
    placeholder="тык"
    @paste.prevent="onPaste($event)"
    @focusout="onFocusOut($event)"
  />
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    before: {
      type: Number,
      default: 666,
    },
    after: {
      type: Number,
      default: 110,
    },
    meter: {
      type: String,
    },
  },
  data() {
    return {
      value: "",
      lastValue: "",
      period: 0,
    };
  },
  methods: {
    numberReg(evt) {
      const regex = new RegExp(
        "^(\\d{0," +
          this.before +
          "}|\\d{" +
          this.before +
          "}\\.\\d{0," +
          this.after +
          "})$"
      );
      let currentValue = evt.target.value;
      const keysAllowed = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
      ];
      const keysAllowedNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const foundNum = evt.target.value
        .split("")
        .every((r) => keysAllowedNum.includes(r));
      if (evt.inputType === "deleteContentBackward") {
        console.log("here2");
        const newArr = evt.target.value.split("");
        if (!newArr.includes(".") && this.lastValue.includes(".")) {
          console.log("da");
          console.log(this.lastValue);
          evt.target.value = this.lastValue;
        } else {
          currentValue = newArr.join("");
          console.log(currentValue);
          this.lastValue = currentValue;
          this.changeModel();
        }
      } else if (!currentValue.match(regex)) {
        const newArr = evt.target.value.split("");
        const beforeDot = evt.target.value.split(".");

        if (
          foundNum &&
          newArr.length > this.before &&
          !evt.target.value.includes(".")
        ) {
          newArr.splice(this.before, 0, ".");
          evt.target.value = newArr.join("");
          this.lastValue = evt.target.value;
        } else if (
          beforeDot.length === 2 &&
          beforeDot[0].length < 5 &&
          beforeDot[1].length <= 3
        ) {
          const found = evt.target.value
            .split("")
            .every((r) => keysAllowed.includes(r));
          if (found) {
            this.lastValue = evt.target.value;
            this.changeModel();
          } else {
            evt.target.value = this.lastValue;
          }
        } else {
          console.log("im here");
          evt.preventDefault();
          evt.target.value = this.lastValue;
        }
      } else {
        this.lastValue = currentValue;
        this.changeModel();
      }
    },
    onFocusOut(evt) {
      const currentValue = evt.target.value;
      const newArr = currentValue.split(".");
      if (newArr[1] === "") {
        evt.target.value = newArr.join("");
      }
    },
    onPaste(evt) {
      const text = evt.clipboardData.getData("text");
      if (isNaN(Number(text)) || text.split(".")[0].length > this.before) {
        evt.preventDefault();
      } else {
        this.value = text;
        this.changeModel();
      }
    },
    changeModel() {
      this.$emit("changeModel", this.value, this.meter);
    },
  },
};
</script>

<style></style>
