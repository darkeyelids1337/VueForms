<template>
  <div>
    <h1>InfoTable</h1>
    <h2>Добро пожаловать, {{ userInfo.name }}</h2>
    <form @submit.prevent="submitForm($event)" ref="formItem">
      <table class="table-class">
        <tr>
          <th
            v-for="(item, index) in Object.keys(userInfo['NodeList'][0])"
            :key="index"
          >
            {{ item.toUpperCase() }}
          </th>
          <th>Разница</th>
        </tr>
        <tr v-for="item in userInfo['NodeList']" :key="item">
          <td>
            {{ item["прибор"] }}
          </td>
          <td>
            {{ item["значение"] }}
          </td>
          <td>
            {{ item["номер счетчика"] }}
          </td>
          <td>
            <InputComponent
              :before="5"
              :after="3"
              @changeModel="checkInput"
              :meter="item['прибор']"
            ></InputComponent>
            <p
              class="errorP"
              v-if="isError && item['Текущее значение'] - item['значение'] < 0"
            >
              Перепроверьте данные!
            </p>
          </td>
          <td
            :style="
              item['Текущее значение'] - item['значение'] < 0
                ? errorStyle
                : okStyle
            "
          >
            {{
              (item["Текущее значение"] === 0
                ? 0
                : item["Текущее значение"] - item["значение"]
              ).toFixed(3)
            }}
          </td>
        </tr>
      </table>
      <button
        type="submit"
        :disabled="toDisable"
        :style="{ marginBottom: '15px', marginTop: '0px' }"
      >
        Отправить
      </button>
    </form>
  </div>
  <ModalComponent
    :isVisible="isModal"
    :isSuccess="isSuccess"
    @closeModal="fromModal"
  >
    <h2>
      К сожалению вы ввели данные меньше предыдущих показаний или некорректные
      данные. Перепроверьте и введите еще раз
    </h2>
  </ModalComponent>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import InputComponent from "../components/InputComponent";
import ModalComponent from "../components/ModalComponent";
export default {
  name: "InfoTable",
  components: {
    InputComponent,
    ModalComponent,
  },
  data() {
    return {
      userInfo: {
        name: "Artem",
      },
      meters: {},
      isDisabled: [],
      isError: false,
      isModal: false,
      isSuccess: false,
    };
  },
  created(){
    if (this.getData) {
      const data = this.getData;
      this.userInfo = data;
      console.log(this.userInfo);
    }
  },
  
  computed: {
    ...mapGetters({
      getData: 'readingsManager/getData'
    }),
    toDisable() {
      let disabled = true;
      this.userInfo.NodeList.forEach((item) => {
        console.log(item);
        if (item["Текущее значение"] > 0) {
          disabled = false;
        }
      });
      return disabled;
    },
    okStyle() {
      return {
        color: `green`,
      };
    },
    errorStyle() {
      return {
        color: `red`,
      };
    },
  },
  methods: {
    ...mapMutations({
      setCurrentValue: 'readingsManager/setCurrentValue'
    }),
    submitForm() {
      const prevValues = JSON.parse(JSON.stringify(this.userInfo["NodeList"]));
      prevValues.forEach((item) => {
        if (item["значение"] > item["Текущее значение"]) {
          this.isModal = true;
          this.isError = true;
        }
      });
      if (!this.isModal) {
        this.isSuccess = true;
      }
    },
    fromModal() {
      this.isModal = false;
      this.isSuccess = false;
    },
    checkClick(evt) {
      console.log(evt);
    },
    checkInput(value, meter) {
      const newValues = {
        meter: meter,
        value: value,
      };
      this.setCurrentValue(newValues);
      const some = JSON.parse(JSON.stringify(this.getData));
      this.userInfo["NodeList"].forEach((item, index) => {
        item["Текущее значение"] = some.NodeList[index]["Текущее значение"];
      });
    },
  },
};
</script>

<style scoped>
.okClass {
  color: rgb(2, 0, 128);
}
.errorP {
  color: red;
  font-size: 12px;
}
.table-class {
  border-collapse: collapse;
  width: 100%;
}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
}
td {
  border: 1px solid #ddd;
  padding: 8px;
}
p {
  margin: 0;
}
.values {
  font-weight: 700;
  background-color: rgba(129, 127, 127, 0.185);
}
form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 70%;
  border: 1px solid #1c6ea4;
}
h1 {
  text-align: center;
  margin: 0 auto;
}
form > div {
  text-align: center;
}
input {
  padding: 0px;
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
</style>
