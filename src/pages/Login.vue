<template>
  <div class="login">
    <div class="from-wrap">
      <h2>Login</h2>
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="Account" prop="accountInfo">
          <Input type="text" v-model="formCustom.accountInfo"/>
        </FormItem>
        <FormItem label="Password" prop="passwd">
          <Input type="password" v-model="formCustom.passwd"/>
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
          <Input type="password" v-model="formCustom.passwdCheck"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
          <Button @click="handleReset('formCustom')" style="margin-left: 26px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    const validateAccount = (rules, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your name"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };

    return {
      formCustom: {
        accountInfo: "",
        passwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        accountInfo: [{ validator: validateAccount, trigger: "blur" }],
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #1c2438; 
}
body .login {
  width: 100%;
  height: 100%;
  position: relative;
  font-family:"Times New Roman",Georgia,Serif;
  background-color: #1c2438;
}
.from-wrap {
  position: fixed;
  left: 50%;
  margin-left: -200px;
  top: 50%;
  margin-top: -150px;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  /* background-color: rgb(220,200,150); */
  background-color: #ccc;

  padding: 20px 50px;
}
.login h2 {
  text-align: center;
  margin-bottom: 20px;
  
}
.login .form-footer {
  text-align: center;
  margin-left:20px;
}
</style>
