<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="240px"><SideBar /></el-aside>
            <el-main> <router-view> </router-view></el-main>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import SideBar from "./sidebar.vue";
</script>
<style scoped></style>
