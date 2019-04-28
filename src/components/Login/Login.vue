<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">立即创建</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
// 引入axios
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login',
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        // 表示验证结果, 布尔值
        // console.log(valid)
        if (!valid) {
          return console.log('验证失败')
        }
        // 表单验证为true, 开始验证账号密码是否存在
        axios
          .post('http://localhost:8888/api/private/v1/login', this.loginForm)
          .then(res => {
            // 200验证一致, 400验证错误
            if (res.data.meta.status === 400) {
              this.$message.error({
                message: '账号名或密码错误',
                duration: 800
              })
            } else {
              // 登陆成功提示
              this.$message.success({
                message: '登陆成功',
                duration: 800
              })
              // 拿到token令牌,设置给localstroge
              // console.log(res.data.data.token)
              localStorage.setItem('token', res.data.data.token)
              // 跳转到首页
              this.$router.push('/home')
            }
          })
      })
    },
    resetForm () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  height: 100%;
  width: 100%;
  background: skyblue;
}
form {
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
