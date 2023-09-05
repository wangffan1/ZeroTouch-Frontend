<template>
  <div class="configure_pipelines">
  <DeviceServersSearch />
  <div class="navigation_title">Configure/Pipelines</div>
    <div class="common_content">
      <div class="common_table_search">
        <CommonFilter />
        <el-button class="common_add_button" @click="addNewRow">
            <el-icon class="icon_circleplus"><CirclePlus /></el-icon>Add
            Pipelines
        </el-button>
        <el-button class="common_delete_button">
            <el-icon class="delete_icon"><Delete /></el-icon>Delete
            Pipelines
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

<script setup lang="ts" name="pipelines">
import { ref, watch } from "vue";
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
  { prop:'catelog_name', label:'Catelog Name'},
  { prop:'service', label:'Service'},
  { prop:'service_version', label:'Service Version'},
  { prop:'pipeline_type', label:'Pipeline Type'},
  { prop:'min_device_number', label:'Min Device Number'},
  { prop:'max_device_number', label:'Max Device Number'},
  { prop:'actions', label:'Actions'},
];

const tableData = ref([
  { 
    id: 0,
    catelog_name: 'Deployment',
    children: [
      {
        id: 3,
        catelog_name: 'Expand',
        children: [
          {
            id: 9,
            catelog_name: 'SJC MoveOut',
            service: 'OCP',
            service_version: '2.0',
            pipeline_type: 'Airflow',
            min_device_number: '1',
            max_device_number: '64',
            actions: '',
          },    
        ]
      },
      {
        id: 4,
        catelog_name: 'SJC MoveOut',
        service: 'OCP',
        service_version: '2.0',
        pipeline_type: 'Airflow',
        min_device_number: '1',
        max_device_number: '64',
        actions: '',
      },
      {
        id: 5,
        catelog_name: 'SJC MoveOut',
        children: [
          {
            id: 10,
            catelog_name: 'Operation',
            children: [
              {
                id: 11,
                catelog_name: 'SJC MoveOut',
                service: 'OCP',
                service_version: '2.0',
                pipeline_type: 'Airflow',
                min_device_number: '1',
                max_device_number: '64',
                actions: '',
              },
            ]
          },  
        ]
      },
      {
        id: 6,
        catelog_name: 'SJC MoveOut',
        service: 'VMWare',
        service_version: '2.0',
        pipeline_type: 'Airflow',
        min_device_number: '1',
        max_device_number: '64',
        actions: '',
      },
    ]
  },
  { 
    id: 1,
    catelog_name: 'Device',
    children: [
      {
        id: 7,
        catelog_name: 'SJC MoveOut',
        service: 'OCP',
        service_version: '2.0',
        pipeline_type: 'Airflow',
        min_device_number: '1',
        max_device_number: '64',
        actions: '',
      },
      {
        id: 8,
        catelog_name: 'SJC MoveOut',
        service: 'OCP',
        service_version: '2.0',
        pipeline_type: 'Airflow',
        min_device_number: '1',
        max_device_number: '64',
        actions: '',
      },
    ]
  },
])

const addNewRow = () => {
  dialogVisible.value = true;
}

const updateVisibility = (newVal) => {
  dialogVisible.value = newVal;
};

const selectType = ref(''); 
const tableDataList = tableData.value;
watch(selectType, (newType: string) => {
  if (selectType.value !== 'All') { 
    tableData.value = tableDataList.filter(item => item.type === newType);
  } else {
    tableData.value = tableDataList;
  }
});

</script>

<style lang="scss">
.configure_pipelines {
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