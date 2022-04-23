<template>
    <el-container>
        <el-main>
            <el-form :model="user" :rules="rules" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="user.username" :prefix-icon="UserFilled"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="user.password" :prefix-icon="Lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin">登录</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from "vue-router";
import { UserFilled, Lock } from "@element-plus/icons-vue";
import useUserStore from "@/store/module/user";
import { ElMessage } from 'element-plus';
const userStore = useUserStore()
const user = reactive<LoginUser>({
    username: 'admin',
    password: '123456'
})
const rules = {
    username: [
        {
            required: true,
            message: 'please input username'
        }
    ],
    password: [
        {
            required: true,
            message: 'please input password'
        }
    ]
}
const router = useRouter()

const handleLogin = async () => {
    try {
        await userStore.login(user)
        ElMessage.success('登录成功')
        router.push('/')
    } catch (error) {
        console.error(error)
    }
}
</script>

<style lang="scss" scoped>
.login_form {
    width: 200px;
}
</style>
