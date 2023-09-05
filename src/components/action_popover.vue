<template>
    <el-popover popper-class="common_popover" placement="left" :width="270" trigger="click">
        <template #reference>
        <el-icon><CaretBottom /></el-icon>
        </template>
        <div class="common_popover_content">
            <span>
                <img src="@/assets/icons/reset.svg">  
                Restart
            </span>
            <span><el-icon style="color:#FF2020;"><Delete /></el-icon>Delete</span>
            <span>
                <img src="@/assets/icons/timeline.svg">  
                Timeline
            </span>
            <span>
                <img src="@/assets/icons/log.svg">  
                Show Log
            </span>
        </div>
    </el-popover>
</template>

<script setup lang="ts">
import { CaretBottom, Delete} from "@element-plus/icons-vue";

</script>

<style lang="scss">
.el-popover.common_popover {
    padding: 0;
    border-color: #00E0FF;
    .el-popper__arrow::before {
        border-color: #00e0ff;
        background-color: #00e0ff;
    }
    .common_popover_content span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70px;
        padding: 3px 0;
        color: #fff;
        border: 1px solid #848484;
    }
    .common_popover_content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, auto);
        background-color: #404452;
        /* #848484 */
        margin: 0;
        padding: 0;  
    }
}


   

</style>