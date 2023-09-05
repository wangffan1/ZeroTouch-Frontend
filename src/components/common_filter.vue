<template>
    <div class="filter_autocomplete">
        <el-input v-model="searchKeyWord" placeholder="Add Filter">
            <template #prefix>
                <img src="@/assets/icons/filter.svg" @click="handleIconClick" />
            </template>
        </el-input>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const searchKeyWord = ref("");

onMounted(() => {});
</script>

<style lang="scss">
.filter_autocomplete {
    width: 40%;
    min-width: 200px;

    .el-input__inner {
        color: #fff !important;
    }
}
</style>
