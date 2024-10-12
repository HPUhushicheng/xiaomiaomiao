<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, reactive } from "vue";
import Motion from "../utils/motion";
import { message } from "@/utils/message";
import { updateRules } from "../utils/rule";
import type { FormInstance } from "element-plus";
import { useVerifyCode } from "../utils/verifyCode";
import { $t, transformI18n } from "@/plugins/i18n";
import { useUserStoreHook } from "@/store/modules/user";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Check from "@iconify-icons/ep/check";
import Lock from "@iconify-icons/ri/lock-fill";
import Iphone from "@iconify-icons/ep/iphone";
import User from "@iconify-icons/ri/user-3-fill";
import QQ from "@iconify-icons/mingcute/qq-fill";
import major from "@iconify-icons/ri/bank-line";
import studentid from "@iconify-icons/ri/body-scan-fill";
import axios from "axios"; // 添加 axios

// 此处拿studentid 当作id来带入注册接口，
const { t } = useI18n();
const checked = ref(false);
const loading = ref(false);
const ruleForm = reactive({
  name: "",
  major: "",
  studentid: "",
  tel: "",
  qq: "",
  password: "",
  repeatPassword: ""
});
const ruleFormRef = ref<FormInstance>();
const { isDisabled, text } = useVerifyCode();
const repeatPasswordRule = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback(new Error(transformI18n($t("login.purePassWordSureReg"))));
      } else if (ruleForm.password !== value) {
        callback(
          new Error(transformI18n($t("login.purePassWordDifferentReg")))
        );
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
];

const onUpdate = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      if (checked.value) {
        // 获取表单数据
        const {
          studentid,
          name,
          password,
          major,
          tel,
          qq
        } = ruleForm;

        // 构建请求 URL
        const url = `http://127.0.0.1:666/list/add?id=${studentid}&name=${name}&password=${password}&studentid=${studentid}&major=${major}&tel=${tel}&qq=${qq}`;

        try {
          // 发送 GET 请求
          const response = await axios.get(url);
          if (response.status === 200) {
            // 模拟请求成功的反馈
            message(transformI18n($t("login.pureRegisterSuccess")), {
              type: "success"
            });
          }
        } catch (error) {
          // 处理请求错误
          message(transformI18n($t("login.pureRegisterFailure")), {
            type: "error"
          });
        } finally {
          loading.value = false;
        }
      } else {
        loading.value = false;
        message(transformI18n($t("login.pureTickPrivacy")), {
          type: "warning"
        });
      }
    } else {
      loading.value = false;
    }
  });
};

function onBack() {
  useVerifyCode().end();
  useUserStoreHook().SET_CURRENTPAGE(0);
}
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="updateRules"
    size="large"
  >
    <Motion>
      <el-form-item
        :rules="[
          {
            required: true,
            message: transformI18n($t('login.pureUsernameReg')),
            trigger: 'blur'
          }
        ]"
        prop="name"
      >
        <el-input
          v-model="ruleForm.name"
          clearable
          :placeholder="t('login.pureUsername')"
          :prefix-icon="useRenderIcon(User)"
        />
      </el-form-item>
    </Motion>

    <Motion>
      <el-form-item
        :rules="[
          {
            required: true,
            message: transformI18n($t('login.pureMajorReg')),
            trigger: 'blur'
          }
        ]"
        prop="major"
      >
        <el-input
          v-model="ruleForm.major"
          clearable
          :placeholder="t('login.pureMajorReg')"
          :prefix-icon="useRenderIcon(major)"
        />
      </el-form-item>
    </Motion>

    <Motion>
      <el-form-item
        :rules="[
          {
            required: true,
            message: transformI18n($t('login.pureStudentidReg')),
            trigger: 'blur'
          }
        ]"
        prop="studentid"
      >
        <el-input
          v-model="ruleForm.studentid"
          clearable
          :placeholder="t('login.pureStudentid')"
          :prefix-icon="useRenderIcon(studentid)"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="100">
      <el-form-item 
      :rules="[
          {
            required: true,
            message: transformI18n($t('login.purePhoneReg')),
            trigger: 'blur'
          }
        ]"
      prop="tel">
        <el-input
          v-model="ruleForm.tel"
          clearable
          :placeholder="t('login.purePhone')"
          :prefix-icon="useRenderIcon(Iphone)"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="200">
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          clearable
          show-password
          :placeholder="t('login.purePassword')"
          :prefix-icon="useRenderIcon(Lock)"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="250">
      <el-form-item :rules="repeatPasswordRule" prop="repeatPassword">
        <el-input
          v-model="ruleForm.repeatPassword"
          clearable
          show-password
          :placeholder="t('login.pureSure')"
          :prefix-icon="useRenderIcon(Lock)"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="300">
      <el-form-item>
        <el-checkbox v-model="checked">
          {{ t("login.pureReadAccept") }}
        </el-checkbox>
        <el-button link type="primary">
          {{ t("login.purePrivacyPolicy") }}
        </el-button>
      </el-form-item>
    </Motion>

    <Motion :delay="350">
      <el-form-item>
        <el-button
          class="w-full"
          size="default"
          type="primary"
          :loading="loading"
          @click="onUpdate(ruleFormRef)"
        >
          {{ t("login.pureDefinite") }}
        </el-button>
      </el-form-item>
    </Motion>

    <Motion :delay="400">
      <el-form-item>
        <el-button class="w-full" size="default" @click="onBack">
          {{ t("login.pureBack") }}
        </el-button>
      </el-form-item>
    </Motion>
  </el-form>
</template>


