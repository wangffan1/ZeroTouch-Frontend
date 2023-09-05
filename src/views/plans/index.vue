<template>
    <div class="zero_plans">
      <DeviceServersSearch />
      <div class="navigation_title">Plans</div>
      <div class='common_content'>
        <div class="common_table_search">
            <CommonFilter />
            <el-button class="common_add_button" @click="addNewRow">
                <el-icon class="icon_circleplus"><CirclePlus /></el-icon>Add
                New
            </el-button>
            <el-button class="common_delete_button">
                <el-icon class="delete_icon"><Delete /></el-icon>Group
                Delete
            </el-button>
            <AddProfileDialog
                v-model="dialogVisible"
                @update:dialogVisible="updateVisibility"
            />
        </div>
        <el-table
            :data="tableData"
            :row-style="{height: '50px'}"
            class="common_table"
        >    
          <el-table-column
              v-for="(item,key) in tableHead"
              :key="key"
              :prop="item.prop"
              :label="item.label"
              :min-width="item.width"
          > 
              <template v-slot:default="{row}">
                  <span v-if="item.prop=='actions'">
                    <el-icon class="edit_icon"><Edit /></el-icon>
                    <el-icon class="delete_icon"><Delete /></el-icon>
                  </span>
                  <span 
                  v-else-if="(
                    item.prop=='due_date'||
                    item.prop=='target_start'||
                    item.prop=='target_end')
                    &&!row[item.prop]"
                  >
                    <el-date-picker
                      v-model="dateChoose"
                      type="date"
                      placeholder="20230601"
                      popper-class="small-datepicker"
                    />
                  </span>
                  <span v-else-if="item.prop=='progress'" >
                    <el-progress :percentage="row[item.prop]" color="#11EE9E" :stroke-width="10"/>
                  </span> 
                  <span v-else-if="item.prop=='operations'">
                    <el-input v-if="!row[item.prop]" v-model="inputOperations" placeholder="+ Add Operations" />
                    <span v-else  class="common_icon_box">                   
                      <img v-if="row[item.prop]=='Decomm Servers'" src="@/assets/icons/rebuild.svg"> 
                      <img v-else-if="row[item.prop]=='Add Compute'" src="@/assets/icons/compute.svg">  
                      <img v-else-if="row[item.prop]=='Rebuild Servers'" src="@/assets/icons/rebuild.svg">  
                      {{ row[item.prop] }}
                    </span>  
                    </span>
                  <span v-else-if="item.prop=='name'&&!row[item.prop]" >
                    <el-input v-model="inputName" placeholder="" />
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
import { ref, watch, onMounted } from 'vue';
import { CirclePlus, Delete, Edit} from "@element-plus/icons-vue";
import DeviceServersSearch from "@/components/device_servers_search.vue";
import CommonFilter from "@/components/common_filter.vue";
import { useDark } from "@vueuse/core";

useDark({
  storageKey: "useDarkKEY",
  valueDark: "dark",
  valueLight: "light",
}).value = true;

const inputOperations = ref('');
const inputName = ref('');

const tableHead = [
    { prop:'name', label:'Name'},
    { prop:'progress', label:'Progress',width: 80},
    { prop:'target_start', label:'Target Start', width: 120},
    { prop:'target_end', label:'Target End', width: 120},
    { prop:'due_date', label:'Due Date', width: 120},
    { prop:'assignee', label:'Assignee', width: 60},
    { prop:'operations', label:'Operations', width: 120 },
    { prop:'actions', label:'Action', width: 60},
];

const tableData = ref([
    {
        name: 'SJC MoveOut',
        progress: '100',
        target_start: '20230201',
        target_end: '20231215',
        due_date: '20231230',
        assignee: 'Kate',
        operations: 'Decomm Servers',
        actions: '',
    },
    {
        name: 'DFW MoveOut',
        progress: '20',
        target_start: '20230201',
        target_end: '20231215',
        due_date: '20231230',
        assignee: 'Jack',
        operations: 'Rebuild Servers',
        actions: '',
    },
    {
        name: 'New Build for WAP',
        progress: '50',
        target_start: '20230201',
        target_end: '20231215',
        due_date: '20231230',
        assignee: 'Kate',
        operations: 'Add Compute',
        actions: '',
    },
    {
        name: 'New Build for Teams',
        progress: '80',
        target_start: '20230201',
        target_end: '20231215',
        due_date: '20231230',
        assignee: 'Jack',
        operations: '',
        actions: '',
    },
    {
        name: 'New Build for Teams',
        progress: '30',
        target_start: '20230201',
        target_end: '20231215',
        due_date: '20231230',
        assignee: 'Jack',
        operations: '',
        actions: '',
    },
])

const selectType = ref(''); 
const tableDataList = tableData.value;
watch(selectType, (newType: string) => {
  if (selectType.value !== 'All') { // If type is not 'All', filter the data
    tableData.value = tableDataList.filter(item => item.type === newType);
  } else {
    tableData.value = tableDataList;
  }
});

onMounted(() => {
  // updateTableData(selectedType.value);
});
const addNewRow = () => {
  tableData.value.unshift({
    name: '',
    progress: '0',
    target_start: '',
    target_end: '',
    due_date: '',
    assignee: 'Jack',
    operations: '',
    actions: '',
  })
}

const dateChoose = ref('');

</script>

<style lang="scss">
.zero_plans {
  .edit_icon {
    height: 20px;
    width: 20px;
    color: #00e0ff;
    padding-right: 10px;
    font-size: large;
  }
}
</style>