<template>
    <el-aside class="aside">
        <el-menu active-text-color="#4D70FF" background-color="#191a23" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff">
            <el-sub-menu index="1">
                <template #title>系统工具</template>
                <el-menu-item index="1-1">代码生成器</el-menu-item>
                <el-menu-item index="1-2">表单生成器</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="components">
                <template #title>组件</template>
                <el-menu-item>富文本编辑器</el-menu-item>
                <el-menu-item>Markdown</el-menu-item>
                <el-menu-item>JSON 编辑器</el-menu-item>
                <el-menu-item>返回顶部</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="echarts">echarts</el-menu-item>
            <el-sub-menu index="2">
                <template #title>文件处理</template>
                <el-menu-item-group title="Excel">
                    <el-menu-item index="2-1-1">导出 Excel</el-menu-item>
                    <el-menu-item index="2-1-2">导出 已选择列</el-menu-item>
                    <el-menu-item index="2-1-3">导出 多级表头</el-menu-item>
                    <el-menu-item index="2-1-4">上传Excel</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="others">
                    <el-menu-item index="2-2">下载 PDF</el-menu-item>
                    <el-menu-item index="2-3">下载 ZIP</el-menu-item>
                </el-menu-item-group>

            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<script lang="ts" setup>
import { Location } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.aside{
    height: 100vh;
    max-width: 180px;
    overflow-x: hidden;
    >.el-menu{
        height: inherit;
    }
}
</style>
