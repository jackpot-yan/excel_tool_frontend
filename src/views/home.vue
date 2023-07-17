<template>
  <div id="login">
    <el-form :inline="true" :model="loginInfo" class="demo-form-inline"
             style="padding-top: 130px;padding-left: 50px">
      <el-form-item label="用户名" required=true>
        <el-input v-model="loginInfo.name"/>
      </el-form-item>
      <el-form-item label="密码" required=true>
        <el-input v-model="loginInfo.password" type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  <el-dialog v-model="examine" title="Warning" width="30%" center>
    <span>
      请输入完整用户名和密码
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="examine = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import {reactive, ref} from 'vue'
import {login} from '../api/api.js'
import {useRouter} from 'vue-router'

const route = useRouter()
const loginInfo = reactive({
  name: '',
  password: '',
})
const examine = ref(false)

const onLogin = () => {
  if (loginInfo.name === '' || loginInfo.password === '') {
    examine.value = true
  } else {
    login(loginInfo).then((rsp) => {
      if (rsp.data.code === 0) {
        route.push({
          name: 'table'
        })
      }
    })
  }
}
</script>
<style>
#login {
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 40%;
  margin-top: 200px;
  margin-left: 400px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>