<template>
    <div class="zero_server">
        <DeviceServersSearch />
        <div class="navigation_title">Servers</div>
        <div class="common_content">
            <div class="common_table_search">
                <CommonFilter />
            </div>
            <el-table :data="tableDataList" class="common_table">
                <el-table-column
                    v-for="(item, key) in tableHead"
                    :key="key"
                    :prop="item.prop"
                    :label="item.label"
                    :min-width="item.width"
                >
                    <template v-slot:default="{ row }">
                        <span
                            v-if="item.prop == 'usc_domain'"
                            style="color: #00e0ff"
                        >
                            {{ row[item.prop] }}
                            <el-tooltip>
                                <template v-slot:content>
                                    <img src="@/assets/icons/VLAN.svg" />
                                </template>
                                <img src="@/assets/icons/VLAN.svg" />
                            </el-tooltip>
                        </span>
                        <span
                            v-else-if="item.prop == 'actions'"
                            style="color: #00e0ff"
                        >
                            {{ row[item.prop] }}
                            <ServersPopover />
                        </span>

                        <span
                            v-else-if="item.prop == 'health'"
                            style="border: 1px solid #7cff4e;background-color: #11ee9e40;"
                            class="common_box"
                        >
                            <el-icon class="icon_health_circlecheck"
                                ><CircleCheck
                            /></el-icon>
                            {{ row[item.prop] }}
                        </span>
                        <span
                            v-else-if="item.prop == 'contract_status'"
                            style="border: 1px solid #11ee9e;background-color: #7cff4e40;"
                            class="common_box"
                        >
                            <el-icon class="icon_contract_circlecheck"
                                ><CircleCheck
                            /></el-icon>
                            {{ row[item.prop] }}
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
/* eslint-disable @typescript-eslint/no-unused-vars */

import { onMounted } from "vue";
import { CircleCheck } from "@element-plus/icons-vue";
import DeviceServersSearch from "@/components/device_servers_search.vue";
import ServersPopover from "@/components/servers_action_popover.vue";
import CommonFilter from "@/components/common_filter.vue";
import { useDark } from "@vueuse/core";

useDark({
    storageKey: "useDarkKEY",
    valueDark: "dark",
    valueLight: "light",
}).value = true;

const tableHead = [
    { prop: "name", label: "Name", width: 100 },
    { prop: "health", label: "Health", width: 100 },
    { prop: "contract_status", label: "Contract Status", width: 100 },
    { prop: "management", label: "Management" },
    { prop: "model", label: "Model", width: 90 },
    { prop: "cpu", label: "CPU", width: 40 },
    { prop: "memory", label: "Memory", width: 60 },
    { prop: "usc_domain", label: "USC Domain", width: 105 },
    { prop: "hx_cluster", label: "HX Cluster", width: 70 },
    { prop: "utility_storage", label: "Utility Storage" },
    { prop: "firmware", label: "Firmware", width: 60 },
    { prop: "actions", label: "Action" },
];

const tableDataList: User[] = [
    {
        name: "SJC10-WXBB-PE01",
        health: "Healthy",
        contract_status: "Active",
        management: "10.255.57.59",
        model: "UCSB-B200-M4",
        cpu: "48.0",
        memory: "348.0",
        usc_domain: "sjc02-wxp00-fic...",
        hx_cluster: "",
        utility_storage: "",
        firmware: "",
        actions: "Action",
    },
    {
        name: "SJC10-WXBB-PE01",
        health: "Healthy",
        contract_status: "Active",
        management: "10.255.57.49",
        model: "UCSB-B200-M4",
        cpu: "48.0",
        memory: "348.0",
        usc_domain: "sjc02-wxp00-fic...",
        hx_cluster: "",
        utility_storage: "",
        firmware: "",
        actions: "Action",
    },
    {
        name: "SJC10-WXBB-PE01",
        health: "Healthy",
        contract_status: "Active",
        management: "10.255.57.48",
        model: "UCSB-B200-M4",
        cpu: "48.0",
        memory: "438.0",
        usc_domain: "sjc02-wxp00-fic...",
        hx_cluster: "",
        utility_storage: "",
        firmware: "",
        actions: "Action",
    },
    {
        name: "SJC10-WXBB-PE01",
        health: "Healthy",
        contract_status: "Active",
        management: "10.255.57.48",
        model: "UCSB-B200-M4",
        cpu: "48.0",
        memory: "438.0",
        usc_domain: "sjc02-wxp00-fic...",
        hx_cluster: "",
        utility_storage: "",
        firmware: "",
        actions: "Action",
    },
];
// const rectangle_1 = ref(null);

onMounted(() => {});
interface User {
    name: string;
    health: string;
    contract_status: string;
    management: string;
    model: string;
    cpu: string;
    memory: string;
    usc_domain: string;
    hx_cluster: string;
    utility_storage: string;
    firmware: string;
    actions: string;
}
</script>

<style lang="scss">
.zero_server {
    .icon_contract_circlecheck {
        color: #7cff4e;
    }   
    .icon_health_circlecheck {
        color: #11ee9e;
    }

}
</style>
