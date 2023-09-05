<template>
    <el-popover popper-class="common_popover"  v-model="popoverVisible" placement="left" :width="300" trigger="click">
        <template #reference>
            <el-icon><CaretBottom /></el-icon>
        </template>
        <div class="common_popover_content">
            <el-text>Power</el-text>
            <div class="popover_container">
            <span><el-icon style="color:#11EE9E;"><SwitchButton /></el-icon>Power On</span>
            <span><el-icon style="color:#FF2020;"><CircleClose /></el-icon>Power Off</span>
            </div>
            <el-text>System</el-text>
            <div class="popover_container">
            <span>
                <img src="@/assets/icons/compute.svg">Open vKVM
            </span>
            <span><el-icon style="color:#00E0FF;"><Setting /></el-icon>Set Asset Tag</span>
            <span><el-icon style="color:#00E0FF;"><Setting /></el-icon>Set User Label</span>
            <span><el-icon style="color:#00E0FF;"><Setting /></el-icon>Set License Tier</span>
            <span><el-icon style="color:#11EE9E;"><Download /></el-icon>Download System Log</span>
            </div>
            <el-text>RMA</el-text>
            <div class="popover_container">
            <span>
                <img src="@/assets/icons/rma.svg">Open Tac Case
            </span>
            </div>
        </div>
    </el-popover>
</template>

<script setup lang="ts" name="dashboard">
import { onBeforeRouteLeave } from 'vue-router';
import { CaretBottom, Download, Setting, CircleClose, SwitchButton} from "@element-plus/icons-vue";
import { ref } from 'vue';

let popoverVisible = ref(false);

onBeforeRouteLeave(() => {
    popoverVisible.value = false;
});

</script>

<style lang="scss">
.el-popover.common_popover {
  padding: 0;
  border-color: #00E0FF;
  font-family: "CiscoSans TT Light";
  .el-popper__arrow::before {
      border-color: #00e0ff;
      background-color: #00e0ff;
  }
  .common_popover_content {
    background-color: #404452;
    margin: 0;
    .el-text {
      display: block;
      color:#00E0FF;
      height: 30px;
      line-height: 30px;
      padding-left: 5px;
    }
  }
  .popover_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid #848484;
    margin: 0;
    padding: 0;
    span {
      text-align: center;
      word-break: keep-all;
    }
  }
  .popover_container span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    color: #fff;
    border: 1px solid #848484;
  }
}
  

</style>