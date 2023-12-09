<template>
  <div class="h-[190vw]">
    <h2 class="m-auto mt-6 flex justify-between w-[90vw]">
      <router-link to="/home">
         <span>
           <Icon icon="iconamoon:close-bold" />
         </span>
      </router-link>
     
      <span>游客登入</span>
    </h2>
    <div v-if="flay" class="w-[90vw]">
      <div class="mt-10 m-auto w-[90vw] flex justify-center">
        <Icon
          icon="ri:netease-cloud-music-fill"
          class="text-[#F12A24] text-[30vw]"
        />
      </div>
      <div
        class="border-2 m-auto flex items-center w-[80vw] h-[15vw] rounded-[2vw]"
      >
        <!-- <select  class="outline-none border-r-4 pl-4">
                    <option value="">+86</option>
                    <option value="">186</option>
                </select> -->
        <!-- 1 -->
        <van-cell @click="show = true">+{{ title }}</van-cell>
        <van-action-sheet v-model="show" title="选择国家">
          <div class="content">
            <van-index-bar :index-list="indexList">
              <van-index-anchor
                v-for="(item, index) in contryList"
                :key="index"
              >
                {{ item.label }}
                <van-cell v-for="(i, n) in item.countryList" :key="n">
                  <div @click="some(i.code)" class="flex justify-between">
                    <span>{{ i.zh }}</span>
                    <span>{{ i.code }}</span>
                  </div>
                </van-cell>
              </van-index-anchor>
            </van-index-bar>
          </div>
        </van-action-sheet>
        <!--  1-->
        <input
          type="search"
          class="outline-none pl-4 w-[60vw]"
          v-model="phone"
        />
      </div>
      <div class="m-auto w-[80vw] mt-6">
        <button
          @click="sentCard"
          class="text-[5vw] text-white w-[80vw] h-[15vw] rounded-[7.5vw] bg-[#FF3A39]"
        >
          获取验证码
        </button>
      </div>
      <div class="m-auto w-[80vw] mt-6 flex h-[8vw]">
        <span class="h-[8vw]">
          <!-- <input type="checkbox" class="Checkbox" id="check1" />
                <label for="check1" class="mt-1"></label> -->
          <!-- 2 -->
          <van-checkbox v-model="checked" class="mt-1"></van-checkbox>
          <!-- 2 -->
        </span>
        <p class="pl-5">我已阅读并同意《服务条款》、《隐私政策》</p>
      </div>
    </div>
    <div v-else class="w-[90vw]">
      <div>
        <div>输入验证码</div>
        <div>
          验证码已发送至 +<span>{{ phone }}</span>
        </div>
      </div>
      <div class="flex justify-between w-[80vw] h-[20vw] mt-5">
        <!-- 显示验证码 -->
        <input type="tel" v-model="value" ref="input" />
        <!-- 3 -->
        <van-password-input
          :value="value"
          :focused="focused"
          :length="4"
          :mask="false"
          @focus="showKeyboard = true"
          :gutter="13"
        />
      </div>
      <div class="flex justify-between w-[80vw] h-[20vw] mt-5">
        <span>
          重新获取
          <!-- 4 -->
          (<van-count-down :time="time" style="display: inline-block">
            <template #default="timeData">
              <span class="block">{{ timeData.seconds }}</span>
            </template> </van-count-down
          >)
        </span>
        <span>手机号已停用</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import { getCapycha, getCountries } from "@/service";

export default {
  data() {
    return {
      title: "86",
      phone: "",
      captcha: "",
      flay: true,
      checked: true,
      code: "",
      value: "",
      showKeyboard: true,
      value1: 0,
      time: 30 * 60 * 60 * 1000,
      option1: [
        { text: "+86", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      show: false,
      indexList: [],
      contryList: [],
      focused: "false",
    };
  },
  components: {
    Icon,
  },
  async created() {
    const [err, res] = await getCountries({ type: 0 });
    if (err) return console.log(err);
    console.log("地区数据", res.data);
    // this.option1.text = res.data.countryList.code
    (this.option1.text = "866"), (this.contryList = res.data.data);
    console.log(this.contryList);
    // for(const key in this.contryList){
    //     this.countryList.push(this.contryList[key].countryList)
    // }
  },
  methods: {
    async sentCard() {
      if (!/^1[356789]\d{9}$/.test(this.phone)) return alert("手机号格式错误");
      const [err, res] = await getCapycha({ phone: this.phone });
      if (err) return alert("获取验证码失败");
      this.flay = false;
      alert("获取验证码成功");
      console.log(res);
    },

    // async loginCellphone() {
    // if (!/^\d{4}$/.test(this.code)) return alert('验证码不合法');
    //     const [err, res] = await loginCellphone({
    //         phone: this.phone,
    //         captcha: this.code,
    //     });
    //     if (err) return alert('登入失败');
    //     alert('登入成功');
    //     console.log(res);
    // },
    loginCellphone() {
      if (!/^\d{4}$/.test(this.captcha)) return alert("验证码不合法");
      this.$store.dispatch("requestLoginCellphone", {
        phone: this.phone,
        captcha: this.captcha,
      });
    },
    some(res) {
      this.show = false;
      this.title = res;
      console.log(res);
    },
  },
  watch: {
    value(value) {
      if (value.length === 4) {
        // console.log(this.phone,value); 
        this.$store.dispatch("requestLoginCellphone", {
          phone: this.phone,
          captcha: value,
        });
      } else {
        console.log("aa");
      }
    },
  },
};
</script>

<style>
span {
  position: relative;
}
.Checkbox {
  position: absolute;
  visibility: hidden;
}
.Checkbox + label {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1px solid #a6a6a6;
  border-radius: 50%;
  background-color: #dedede;
}
.Checkbox:checked + label:after {
  content: "";
  position: absolute;
  left: 2px;
  top: 2px;
  width: 9px;
  height: 4px;
  border: 2px solid #424242;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(-45deg);
  -ms-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}
</style>