<template>
    <div>
        <el-menu
            class="el-menu-vertical-demo"
            :default-active="onRoutes"
            background-color="#2A2D36"
            text-color="#fff"
            active-text-color="#00E0FF"
            router
        >
            <el-text @click="handleCollapse">
                <div class="zero_title">
                    <img
                        class="zero_touch_logo"
                        src="@/assets/icons/zerotouch_logo.svg"
                    />
                    <span><span class="zero_text">Zero</span>Touch </span>
                    <el-icon style="margin-left: auto"><Menu /></el-icon>
                </div>
            </el-text>
            <template v-for="(item, key) in items" :key="key">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index">
                        <template #title>
                            <img :src="getIcon(item.icon)" />
                            <span>{{ item.title }}</span>
                        </template>
                        <template
                            v-for="(subItem, subKey) in item.subs"
                            :key="subKey"
                        >
                            <template v-if="subItem.subs">
                                <el-sub-menu :index="subItem.index">
                                    <template #title>{{
                                        subItem.title
                                    }}</template>
                                </el-sub-menu>
                            </template>
                            <el-menu-item v-else :index="subItem.index">
                                <template #title> {{ subItem.title }}</template>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <img :src="getIcon(item.icon)" />
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { Menu } from "@element-plus/icons-vue";
import { useSidebarStore } from "../store/sidebar";

const items = [
    {
        icon: "dash_board",
        index: "/dashboard",
        title: "Dashboard",
    },
    {
        icon: "servers",
        index: "/servers",
        title: "Servers",
    },
    {
        icon: "lifecycle",
        index: "/server_lifecycle",
        title: "Server Lifecycle",
    },
    {
        icon: "operation",
        index: "/operation",
        title: "Operation",
    },
    {
        icon: "plans",
        index: "/plans",
        title: "Plans",
    },
    {
        icon: "webcli",
        index: "/web_cli",
        title: "Web CLI",
    },
    {
        icon: "configure",
        index: "/configure",
        title: "Configure",
        subs: [
            {
                icon: "configure",
                index: "/configure/profiles",
                title: "Profiles",
            },
            {
                icon: "configure",
                index: "/configure/pipelines",
                title: "Pipelines",
            },
            {
                icon: "configure",
                index: "/configure/deployments",
                title: "Deployments",
            },
        ],
    },
];

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
const handleCollapse = () => {
    sidebar.isCollapse = !sidebar.isCollapse;
};
const getIcon = (icon: string) => {
    return `/src/assets/icons/${icon}.svg`;
};
onMounted(() => {});
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100vh;
    border: 0;
    .el-menu-item,
    .el-sub-menu__title {
        gap: 5px;
        font-family: "CiscoSans TT Bold";
        border-left: 3px solid transparent;
    }
    .el-menu-item.is-active {
        border-left-color: #00e0ff;
        background-color: #203e5f;
    }
}
.zero_title {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    margin-bottom: 20px;
    background-color: #3f4350;
    color: #fff;
    font-size: 20px;

    .zero_text {
        color: #00e0ff;
        font-style: italic;
        font-weight: 700;
    }

    .zero_touch_logo {
        height: 36px;
        width: 36px;
        padding: 3px;
        border-radius: 50%;
        border: 1px solid #00e0ff;
        text-align: center;
    }
}
</style>
