<template>
    <div class="configure_profiles">
        <DeviceServersSearch />
        <div class="navigation_title">Configure/Profiles</div>
        <div class="common_content">
            <div class="common_table_search">
                <CommonFilter />
                <el-button class="common_add_button" @click="addNewRow">
                    <el-icon class="icon_circleplus"><CirclePlus /></el-icon>Add
                    Profile
                </el-button>
                <el-button class="common_delete_button">
                    <el-icon class="delete_icon"><Delete /></el-icon>Delete
                    Profile
                </el-button>
                <AddProfileDialog
                    v-model="dialogVisible"
                    @update:dialogVisible="updateVisibility"
                />
            </div>
            <el-table
                :data="tableData"
                row-key="id"
                type="expand"
                default-expand-all
                :row-style="{ height: '50px' }"
                :tree-props="{
                    children: 'children',
                    hasChildren: 'hasChildren',
                }"
                class="common_table"
            >
                <el-table-column
                    v-for="(item, key) in tableHead"
                    :key="key"
                    :prop="item.prop"
                    :label="item.label"
                    :min-width="item.width"
                >
                    <template v-slot:default="{ row }">
                        <span v-if="item.prop == 'actions' && !row['children']">
                            <el-icon class="search_icon"><Search /></el-icon>
                            <el-icon class="edit_icon"><Edit /></el-icon>
                            <el-icon class="delete_icon"><Delete /></el-icon>
                        </span>
                        <span v-else>
                            {{ row[item.prop] }}
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup lang="ts" name="profiles">
import { ref, watch, onMounted } from "vue";
import { Search, CirclePlus, Delete, Edit } from "@element-plus/icons-vue";
import DeviceServersSearch from "@/components/device_servers_search.vue";
import CommonFilter from "@/components/common_filter.vue";
import AddProfileDialog from "@/components/add_profile_dialog.vue";
import { useDark } from "@vueuse/core";

useDark({
    storageKey: "useDarkKEY",
    valueDark: "dark",
    valueLight: "light",
}).value = true;

const dialogVisible = ref(false);

const tableHead = [
    { prop: "device_model", label: "Device Model" },
    { prop: "device_type", label: "Device Type" },
    { prop: "name", label: "Name" },
    { prop: "description", label: "Description" },
    { prop: "actions", label: "Actions" },
];

const tableData = ref([
    {
        id: 0,
        device_model: "SJC MoveOut",
        children: [
            {
                id: 3,
                device_model: "SJC MoveOut",
                children: [
                    {
                        id: 9,
                        device_model: "SJC MoveOut",
                        device_type: "100",
                        name: "20230201",
                        description: "20231215",
                        actions: "",
                    },
                ],
            },
            {
                id: 4,
                device_model: "SJC MoveOut",
                device_type: "100",
                name: "20230201",
                description: "20231215",
                actions: "",
            },
            {
                id: 5,
                device_model: "SJC MoveOut",
                children: [
                    {
                        id: 10,
                        device_model: "SJC MoveOut",
                        children: [
                            {
                                id: 11,
                                device_model: "SJC MoveOut",
                                device_type: "100",
                                name: "20230201",
                                description: "20231215",
                                actions: "",
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                device_model: "SJC MoveOut",
                device_type: "100",
                name: "20230201",
                description: "20231215",
                actions: "",
            },
        ],
    },
    {
        id: 1,
        device_model: "SJC MoveOut",
        children: [
            {
                id: 7,
                device_model: "SJC MoveOut",
                device_type: "100",
                name: "20230201",
                description: "20231215",
                actions: "",
            },
            {
                id: 8,
                device_model: "SJC MoveOut",
                device_type: "100",
                name: "20230201",
                description: "20231215",
                actions: "",
            },
        ],
    },
]);

const addNewRow = () => {
    dialogVisible.value = true;
};

const updateVisibility = (newVal) => {
    dialogVisible.value = newVal;
};

const selectType = ref("");
const tableDataList = tableData.value;
watch(selectType, (newType: string) => {
    if (selectType.value !== "All") {
        // If type is not 'All', filter the data
        tableData.value = tableDataList.filter((item) => item.type === newType);
    } else {
        tableData.value = tableDataList;
    }
});

onMounted(() => {
    // updateTableData(selectedType.value);
});
</script>

<style lang="scss">
.configure_profiles {
    .edit_icon,
    .search_icon {
        height: 20px;
        width: 20px;
        color: #00e0ff;
        padding-right: 10px;
        font-size: large;
    }
}
</style>
