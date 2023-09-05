<template>
    <div class="zero_dashboard">
        <DeviceServersSearch />
        <div class="navigation_title">Dashboard</div>
        <div class="navigation_discription">Status overview dashbord</div>
        <div class="dashboard_container">
            <div class="dashboard_chart">
                <v-chart
                    :option="chart_one"
                    ref="chart_1"
                    autoresize
                    style="width: 32%; min-width: 320px"
                    class="rectangle_chart"
                ></v-chart>

                <div
                    class="rectangle_chart"
                    style="width: 18%; min-width: 180px"
                >
                    <div>
                        <span class="rectangle_title">Power</span>
                        <div style="padding: 12px 0">
                            <div class="power_on">
                                <el-text size="large" class="poweron_text_one"
                                    >Power On
                                </el-text>
                                <el-text tag="b" class="poweron_text_two"
                                    >14K</el-text
                                >
                            </div>
                            <div class="power_off">
                                <el-icon class="power_off_icon"
                                    ><SwitchButton
                                /></el-icon>
                                <el-text size="large" class="poweroff_text_one"
                                    >Power Off</el-text
                                >
                                <el-text tag="b" class="poweroff_text_two"
                                    >182</el-text
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="rectangle_chart"
                    style="width: 50%; min-width: 500px"
                >
                    <div>
                        <span class="rectangle_title">HCL Status</span>
                        <div class="grid_container">
                            <div class="power_box_on">
                                <el-text class="box_title">Vaildated</el-text>
                                <el-text
                                    class="active_vaildate_data"
                                    size="large"
                                    tag="b"
                                    >120
                                    <el-text
                                        class="active_vaildate_data"
                                        size="small"
                                    >
                                        <el-icon><CaretTop /></el-icon
                                        >10%</el-text
                                    >
                                </el-text>
                            </div>
                            <div class="power_box_off">
                                <el-text class="box_title">Not listed</el-text>
                                <el-text
                                    class="not_listed_covered_data"
                                    size="large"
                                    tag="b"
                                    >120
                                    <el-text
                                        class="not_listed_covered_data"
                                        size="small"
                                    >
                                        <el-icon><CaretTop /></el-icon
                                        >10%</el-text
                                    >
                                </el-text>
                            </div>
                            <div class="common_unknown_box">
                                <el-text class="box_title">Incomplete</el-text>
                                <el-text
                                    class="common_unknown_data"
                                    size="large"
                                    tag="b"
                                    >14K
                                    <el-text
                                        class="common_unknown_data"
                                        size="small"
                                    >
                                        <el-icon><CaretTop /></el-icon
                                        >10%</el-text
                                    >
                                </el-text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard_chart">
                <v-chart
                    :option="chart_two"
                    ref="chart_1"
                    autoresize
                    style="width: 32%; min-width: 320px"
                    class="rectangle_chart"
                ></v-chart>
                <div
                    class="rectangle_chart"
                    style="width: 36%; min-width: 360px"
                >
                    <div>
                        <span class="rectangle_title">Contract Status</span>
                        <div class="grid_container">
                            <div class="power_box_on">
                                <el-text class="box_title">Active</el-text>
                                <el-text
                                    class="active_vaildate_data"
                                    size="large"
                                    tag="b"
                                    >120
                                    <el-text
                                        class="active_vaildate_data"
                                        size="small"
                                    >
                                        <el-icon><CaretTop /></el-icon
                                        >10%</el-text
                                    >
                                </el-text>
                            </div>
                            <div class="power_box_off">
                                <el-text class="box_title">Not Covered</el-text>
                                <el-text
                                    class="not_listed_covered_data"
                                    size="large"
                                    tag="b"
                                    >120
                                    <el-text
                                        class="not_listed_covered_data"
                                        size="small"
                                    >
                                        <el-icon><CaretTop /></el-icon
                                        >10%</el-text
                                    >
                                </el-text>
                            </div>
                            <div class="common_unknown_box">
                                <el-text class="box_title"
                                    >Expired Soon</el-text
                                >
                                <el-text
                                    class="common_unknown_data"
                                    size="large"
                                    tag="b"
                                    >14K
                                    <el-text
                                        class="common_unknown_data"
                                        size="small"
                                    >
                                        <el-icon><CaretTop /></el-icon
                                        >10%</el-text
                                    >
                                </el-text>
                            </div>
                        </div>
                    </div>
                </div>
                <v-chart
                    :option="chart_three"
                    ref="chart_1"
                    autoresize
                    style="width: 32%; min-width: 320px"
                    class="rectangle_chart"
                ></v-chart>
            </div>
            <div class="dashboard_chart">
                <v-chart
                    :option="chart_four"
                    ref="chart_1"
                    autoresize
                    style="width: 32%; min-width: 320px"
                    class="rectangle_chart"
                ></v-chart>
                <v-chart
                    :option="chart_five"
                    ref="chart_1"
                    autoresize
                    style="width: 32%; min-width: 320px"
                    class="rectangle_chart"
                ></v-chart>
                <div
                    class="rectangle_chart"
                    style="
                        background-color: inherit;
                        width: 36%;
                        min-width: 360px;
                    "
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="dashboard">
import { ref, onMounted } from "vue";
import { SwitchButton, CaretTop } from "@element-plus/icons-vue";
import DeviceServersSearch from "@/components/device_servers_search.vue";
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer
]);

const chart_one = ref({
    title: {
        text: "Health",
        left: "1%",
        top: "2%",
        textStyle: {
            color: "#fff",
            fontFamily: "CiscoSans TT Light",
        },
    },
    legend: {
        orient: "vertical",
        x: "50%",
        y: "center",
        align: "left",
        icon: "circle",
        textStyle: {
            color: "#fff",
        },
        data: ["Healthy 12700", "Warning 1225", "Critical 1340"],
    },
    series: [
        {
            name: "Data",
            type: "pie",
            center: ["30%", "50%"],
            radius: ["45%", "55%"],
            label: {
                color: "#fff",
                position: "center",
                fontSize: 15,
                formatter: () => "14.2K",
            },
            data: [
                {
                    value: 12700,
                    name: "Healthy 12700",
                    itemStyle: { color: "#11EE9E" },
                },
                {
                    value: 1225,
                    name: "Warning 1225",
                    itemStyle: { color: "#FFCD4D" },
                },
                {
                    value: 580,
                    name: "Critical 1340",
                    itemStyle: { color: "#FF2020" },
                },
            ],
        },
    ],
});
// const rectangle_1 = ref(null);

const chart_two = ref({
    title: {
        text: "Models",
        left: "1%",
        top: "2%",
        textStyle: {
            color: "#fff",
            fontFamily: "CiscoSans TT Light",
        },
    },
    legend: {
        orient: "vertical",
        x: "55%",
        y: "center",
        align: "left",
        icon: "circle",
        textStyle: {
            color: "#fff",
        },
        data: ["C200MX 76%", "C220 M4S 14%", "Other 10%"],
    },
    series: [
        {
            name: "Data",
            type: "pie",
            center: ["30%", "50%"],
            radius: ["45%", "55%"],
            label: {
                color: "#fff",
                position: "center",
                fontSize: 15,
                formatter: () => "14.2K",
            },
            data: [
                {
                    value: "76",
                    name: "C200MX 76%",
                    itemStyle: { color: "#00E0FF" },
                },
                {
                    value: "14",
                    name: "C220 M4S 14%",
                    itemStyle: { color: "#FC54FF" },
                },
                {
                    value: "10",
                    name: "Other 10%",
                    itemStyle: { color: "#8F00FF" },
                },
            ],
        },
    ],
});
const chart_three = ref({
    title: {
        text: "Profile Status",
        left: "1%",
        top: "2%",
        textStyle: {
            color: "#fff",
            fontFamily: "CiscoSans TT Light",
        },
    },
    legend: {
        orient: "vertical",
        x: "55%",
        y: "center",
        align: "left",
        icon: "circle",
        textStyle: {
            color: "#fff",
        },
        data: ["Not Assigned 3"],
    },
    series: [
        {
            name: "Data",
            type: "pie",
            center: ["30%", "50%"],
            radius: ["49%", "50%"],
            label: {
                color: "#fff",
                position: "center",
                fontSize: 15,
                formatter: () => "3",
            },
            data: [
                {
                    value: 3,
                    name: "Not Assigned 3",
                    itemStyle: { color: "#fff" },
                },
            ],
        },
    ],
});

const chart_four = ref({
    title: {
        text: "Operation Status",
        left: "1%",
        top: "2%",
        textStyle: {
            color: "#fff",
            fontFamily: "CiscoSans TT Light",
        },
    },
    legend: {
        orient: "vertical",
        x: "55%",
        y: "center",
        align: "left",
        icon: "circle",
        textStyle: {
            color: "#fff",
        },
        data: ["Running 76%", "Completed 14%", "Failed 10%"],
    },
    series: [
        {
            name: "Data",
            type: "pie",
            center: ["30%", "50%"],
            radius: ["45%", "55%"],
            label: {
                color: "#fff",
                position: "center",
                fontSize: 15,
                formatter: () => "14.2K",
            },
            data: [
                {
                    value: "10",
                    name: "Failed 10%",
                    itemStyle: { color: "#FF2020" },
                },
                {
                    value: "14",
                    name: "Completed 14%",
                    itemStyle: { color: "#00E0FF" },
                },
                {
                    value: "76",
                    name: "Running 76%",
                    itemStyle: { color: "#11EE9E" },
                },
            ],
        },
    ],
});

const chart_five = ref({
    title: {
        text: "Operation Type",
        left: "1%",
        top: "2%",
        textStyle: {
            color: "#fff",
            fontFamily: "CiscoSans TT Light",
        },
    },
    legend: {
        orient: "vertical",
        x: "55%",
        y: "center",
        align: "left",
        icon: "circle",
        textStyle: {
            color: "#fff",
        },
        data: ["OCP 76%", "VMware 14%", "Baremate 10%"],
    },
    series: [
        {
            name: "Data",
            type: "pie",
            center: ["30%", "50%"],
            radius: ["45%", "55%"],
            label: {
                color: "#fff",
                position: "center",
                fontSize: 15,
                formatter: () => "14.2K",
            },
            data: [
                {
                    value: "76",
                    name: "OCP 76%",
                    itemStyle: { color: "#00E0FF" },
                },
                {
                    value: "14",
                    name: "VMware 14%",
                    itemStyle: { color: "#FC54FF" },
                },
                {
                    value: "10",
                    name: "Baremate 10%",
                    itemStyle: { color: "#8F00FF" },
                },
            ],
        },
    ],
});
onMounted(() => {
   
});
</script>

<style scoped lang="scss">
.zero_dashboard {
    .dashboard_container {
        .dashboard_chart {
            display: flex;
            padding-top: 10px;
            gap: 10px;
            width: 100%;
            .rectangle_chart {
                padding: 10px;
                display: flex;
                height: 150px;
                background-color: #404452;
            }

            .rectangle_title {
                color: #fff;
                font-family: "CiscoSans TT Regular";
            }
            .grid_container {
                display: grid !important;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
                padding: 10px 0;
                .box_title {
                    color: #fff;
                }
                .power_box_on {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-radius: 10px;
                    gap: 3px;
                    border: 2px solid #11ee9e;
                    background-color: #346e65 !important;

                    .active_vaildate_data {
                        color: #11ee9e;
                    }
                }
                .power_box_off {
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    height: 30px;
                    gap: 3px;
                    border-radius: 10px;
                    border: 2px solid #ff2020;
                    background-color: #793943 !important;

                    .not_listed_covered_data {
                        color: #ff2020;
                    }
                }
                .common_unknown_box {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: 150px;
                    height: 30px;
                    gap: 3px;
                    padding: 10px;
                    border-radius: 10px;
                    border: 2px solid #c1c1c1;
                    background-color: #666974;

                    .common_unknown_data {
                        color: #c1c1c1;
                    }
                }
            }
            .power_on {
                border: 2px solid #11ee9e;
                background-color: #346e65 !important;
                display: flex;
                align-items: center;
                padding: 10px 10px 10px 35px;
                border-radius: 10px;
                margin-bottom: 10px;
                .poweron_text_one {
                    color: #fff;
                    margin-left: auto;
                }
                .poweron_text_two {
                    color: #11ee9e;
                    font-size: 20px;
                    margin-left: 10px;
                }
            }
            .power_off {
                border: 2px solid #ff2020;
                background-color: #793943 !important;

                display: flex;
                align-items: center;
                padding: 10px 10px 10px 5px;
                border-radius: 10px;
                .power_off_icon {
                    color: #ff2020;
                    font-size: 25px;
                    margin-right: auto;
                }
                .poweroff_text_one {
                    color: #fff;
                }
                .poweroff_text_two {
                    color: #ff2020;
                    font-size: 20px;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>
