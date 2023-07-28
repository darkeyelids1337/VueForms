<template>
  <form>
    <div class="form-div">
      <h2>Введите номер лицевого счета:</h2>
      <label>
        <InputComponent
          @changeModel="(data) => (this.bankBook = data)"
          @paste="onPaste($event)"
          :class="{ active: isError }"
        ></InputComponent>
      </label>
      <div>
        <button @click.prevent="submitForm" type="submit">Проверить</button>
      </div>
    </div>
  </form>
  <ModalComponent :isVisible="isModal" @closeModal="closeModal">
    <h1>Такой лицевой счет не найден =(</h1>
  </ModalComponent>
</template>

<script>
import {mapGetters, mapMutations } from "vuex";
import InputComponent from "../components/InputComponent";
import ModalComponent from "../components/ModalComponent";
export default {
  name: "InputForm",
  components: {
    InputComponent,
    ModalComponent,
  },
  data() {
    return {
      isError: false,
      isModal: false,
      bankBook: "",
    };
  },
  computed: {
    ...mapGetters({
      getUsers: 'readingsManager/getUsers'
    })
  },

  methods: {
    ...mapMutations({
      setUser: 'readingsManager/setUser'
    }),
    submitForm() {
      if (isNaN(+this.bankBook)) {
        this.isModal = true
        this.isError = true;
      }
      const users = this.getUsers.filter((user) => {
        return user["bankBook"] === +this.bankBook;
      });
      if (users.length > 0) {
        this.setUser(users);
        this.$router.push("/info-table");
      } else {
        this.isError = true
        this.isModal = true;
      }
    },
    closeModal() {
      this.isModal = false;
    },
    isNumberInput(evt) {
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    onPaste(evt) {
      this.bankBook = evt.clipboardData.getData("text");
    },
  },
  created() {},
};
</script>

<style scoped>
form {
  width: 500px;
  height: 200px;
  margin: 0 auto;
  background-color: #f4f7f6;
  box-shadow: 0px 5px 10px 10px rgba(34, 60, 80, 0.2) inset;
}
.active {
  color: red;
}
@keyframes myAnim {
  0% {
    animation-timing-function: ease-in;
    opacity: 1;
    transform: translateY(-45px);
  }

  24% {
    opacity: 1;
  }

  40% {
    animation-timing-function: ease-in;
    transform: translateY(-24px);
  }

  65% {
    animation-timing-function: ease-in;
    transform: translateY(-12px);
  }

  82% {
    animation-timing-function: ease-in;
    transform: translateY(-6px);
  }

  93% {
    animation-timing-function: ease-in;
    transform: translateY(-4px);
  }

  25%,
  55%,
  75%,
  87% {
    animation-timing-function: ease-out;
    transform: translateY(0px);
  }

  100% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateY(0px);
  }
}
.form-div {
  padding: 5px;
  text-align: center;
  margin-top: 50%;
}
button {
  border-radius: 15px;
  border-color: white;
  border-style: none;
  padding: 8px;
  text-align: center;
  font-size: 20px;
  margin-top: 25px;
}
button:active {
  background-color: rgb(18, 248, 18);
}
/* .modal-class > div{
    position: relative;
    left: 50%;
    bottom: 3%;
    cursor: pointer;
  } */
</style>
