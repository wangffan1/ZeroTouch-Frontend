<template>
    <div class="zero_operation">
        <DeviceServersSearch />
        <div class="navigation_title">Operation</div>
        <div class="common_content">
            <div class="common_table_search">
                <el-select v-model="selectType" placeholder="All">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>

                <CommonFilter />
                <el-button class="common_add_button" @click="addNewRow">
                    <el-icon class="icon_circleplus"><CirclePlus /></el-icon>Add
                    New
                </el-button>
            </div>
            <el-table
                :data="tableData"
                :row-style="{ height: '50px' }"
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
                        <span
                            v-if="item.prop == 'actions'"
                            style="color: #00e0ff"
                        >
                            <span v-if="!row[item.prop]">
                                <el-icon class="icon_circle_check"
                                    ><CircleCheck
                                /></el-icon>
                                <el-icon class="icon_circle_close"
                                    ><CircleClose
                                /></el-icon>
                            </span>
                            <span v-else>
                                {{ row[item.prop] }}
                                <ActionPopover />
                            </span>
                        </span>
                        <span
                            v-else-if="item.prop == 'status' && row[item.prop]"
                            class="common_color_box"
                        >
                            <span
                                class="common_box"
                                style="border: 1px solid #7cff4e;background-color: #7cff4e40;"
                                v-if="row[item.prop] == 'Completed'"
                            >
                                <el-icon class="icon_circlecheck_completed"
                                    ><CircleCheck
                                /></el-icon>
                                {{ row[item.prop] }}
                            </span>
                            <span class="common_box" 
                                style="border: 1px solid #11ee9e;background-color: #11ee9e40;"
                                v-else
                            >
                                <el-icon class="icon_right"><Right /></el-icon>
                                {{ row[item.prop] }}
                            </span>
                        </span>
                        <span
                            v-else-if="
                                item.prop == 'create_time' && !row[item.prop]
                            "
                        >
                            <el-date-picker
                                v-model="dateChoose"
                                type="datetime"
                                placeholder="10:40 20230601"
                                popper-class="small-datepicker"
                            />
                        </span>
                        <span v-else-if="item.prop == 'operate'" class="common_icon_box">
                            <img v-if="row[item.prop] == 'New Deployment'" src="@/assets/icons/rma.svg" />
                            <img v-else-if="row[item.prop] == 'Upgrade Deployment'" src="@/assets/icons/upgrade.svg" />
                            <img v-else-if="row[item.prop] == 'Security Patch'" src="@/assets/icons/secure.svg" />
                            <img v-else-if="row[item.prop] == 'Rebuild Controller'" src="@/assets/icons/rebuild.svg" />
                            <img v-else-if="row[item.prop] == 'Add Compute'" src="@/assets/icons/compute.svg" />
                            <img v-else-if="row[item.prop] == 'Trunk VLAN'" src="@/assets/icons/VLAN.svg" />                   
                            <span v-else style="color: #00e0ff">
                                Select Operation
                                <ActionPopover />
                            </span>
                            {{ row[item.prop] }}
                        </span>
                        <span
                            v-else-if="item.prop == 'type' && !row[item.prop]"
                        >
                            <el-select
                                class="common_select_checkbox"
                                placeholder="OCP 2.0"
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </span>
                        <span
                            v-else-if="
                                item.prop == 'servers' && !row[item.prop]
                            "
                        >
                            <el-input
                                v-model="inputServers"
                                placeholder="+ Add Servers"
                            />
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

<script setup lang="ts" name="dashboard">
import { ref, watch, onMounted } from "vue";
import {
    CircleCheck,
    CirclePlus,
    CircleClose,
    Right,
} from "@element-plus/icons-vue";
import DeviceServersSearch from "@/components/device_servers_search.vue";
import CommonFilter from "@/components/common_filter.vue";
import ActionPopover from "@/components/action_popover.vue";
import { useDark } from "@vueuse/core";

useDark({
    storageKey: "useDarkKEY",
    valueDark: "dark",
    valueLight: "light",
}).value = true;

const dateChoose = ref("");
const inputServers = ref("");

const tableHead = [
    { prop: "id", label: "ID" },
    { prop: "create_time", label: "Create Time", width: 120 },
    { prop: "type", label: "Type", width: 80 },
    { prop: "servers", label: "Servers" },
    { prop: "change", label: "Change" },
    { prop: "operate", label: "Operate", width: 120 },
    { prop: "status", label: "Status", width: 90 },
    { prop: "actions", label: "Action" },
];

const tableData = ref([
    {
        id: "",
        type: "OCP 2.0",
        servers: "cmp-2,cmp2",
        create_time: "10:40 2023/6/15",
        change: "CHG0528379",
        operate: "New Deployment",
        status: "Completed",
        actions: "Action",
    },
    {
        id: "",
        type: "VMware",
        servers: "Ru01,ru-2",
        create_time: "10:40 2023/6/15",
        change: "CHG0528230",
        operate: "New Deployment",
        status: "Running",
        actions: "Action",
    },
    {
        id: "",
        type: "Baremetal",
        servers: "cmp-1",
        create_time: "10:40 2023/6/15",
        change: "CHG0528230",
        operate: "Upgrade Deployment",
        status: "Running",
        actions: "Action",
    },
    {
        id: "",
        type: "OCP 2.0",
        servers: "cmp-2,cmp2",
        create_time: "10:40 2023/6/15",
        change: "CHG0527919",
        operate: "Security Patch",
        status: "Running",
        actions: "Action",
    },
    {
        id: "",
        type: "OCP 2.0",
        servers: "cmp-2,cmp2",
        create_time: "10:40 2023/6/15",
        change: "CHG0527919",
        operate: "Rebuild Controller",
        status: "Running",
        actions: "Action",
    },
    {
        id: "",
        type: "OCP 2.0",
        servers: "cmp-2,cmp2",
        create_time: "10:40 2023/6/15",
        change: "CHG0527919",
        operate: "Add Compute",
        status: "Running",
        actions: "Action",
    },
    {
        id: "",
        type: "OCP 2.0",
        servers: "cmp-2,cmp2",
        create_time: "10:40 2023/6/15",
        change: "CHG0527919",
        operate: "Trunk VLAN",
        status: "Running",
        actions: "Action",
    },
]);
// const rectangle_1 = ref(null);
const options = [
    {
        value: "All",
        label: "All",
    },
    {
        value: "Baremetal",
        label: "Baremetal",
    },
    {
        value: "OCP 2.0",
        label: "OCP 2.0",
    },
    {
        value: "OCP 4.0",
        label: "OCP 4.0",
    },
    {
        value: "VMware",
        label: "VMware",
    },
];

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

const addNewRow = () => {
    tableData.value.unshift({
        id: "",
        type: "",
        servers: "",
        create_time: "",
        change: "",
        operate: "",
        status: "",
        actions: "",
    });
};
</script>

<style lang="scss">
.zero_operation {
    .common_table {
        .icon_circle_check {
            color: #11ee9e;
            font-size: 30px;
        }
        .icon_circle_close {
            color: #ff2020;
            font-size: 30px;
            margin-left: 5px;
        }
        .icon_right {
            color: #11ee9e;
            padding-left: 1px;
        }
        .icon_circlecheck_completed {
            color: #7cff4e;
            padding-left: 1px;
        }
    }

    .el-select {
        margin-right: 10px;
        min-width: 200px;
        border: 0;
    }
    .el-select {
        margin-right: 10px;
        min-width: 200px;
        border: 0;
    }
}
</style>
