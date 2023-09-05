<template>
    <div class="search-autocomplete">
        <el-autocomplete
            v-model="searchKeyWoed"
            :fetch-suggestions="querySearch"
            popper-class="my-autocomplete"
            placeholder="Devices/Servers..."
            @select="handleSelect"
        >
            <template #prefix>
                <el-icon
                    color="#00E0FF"
                    class="el-input__icon"
                    @click="handleIconClick"
                >
                    <Search />
                </el-icon>
            </template>
            <template #default="{ item }">
                <div class="value">{{ item.value }}_{{ item.label }}</div>
            </template>
        </el-autocomplete>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Search } from "@element-plus/icons-vue";

interface LinkItem {
    value: string;
    link: string;
}

const searchKeyWoed = ref("");
const label = ref<LinkItem[]>([]);

const querySearch = (queryString: string, cb) => {
    const results = queryString
        ? label.value.filter(createFilter(queryString))
        : label.value;
    // call callback function to return suggestion objects
    cb(results);
};
const createFilter = (queryString) => {
    return (obj) => {
        return obj.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    };
};
const loadAll = () => {
    return [
        { value: "device-one", label: "device-one" },
        { value: "device-two", label: "device-two" },
    ];
};
const handleSelect = (item: LinkItem) => {
    console.log(item);
};

const handleIconClick = (ev: Event) => {
    console.log(ev);
};

onMounted(() => {
    label.value = loadAll();
});
</script>

<style lang="scss">
.search-autocomplete {
    width: 40%;
    min-width: 200px;

    .el-input__inner {
        color: #fff !important;
    }
    .is-focus {
        box-shadow: 0 0 0 1px #00c4f5 inset;
    }
}
</style>
