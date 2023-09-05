<template>
    <el-dialog
        class="common_dialog"
        v-model="dialogVisible"
        title="Add Profile"
        width="60%"
    >
        <el-steps
            class="common_steps"
            :active="active"
            finish-status="success"
            align-center
        >
            <el-step title="Device Profile" />
            <el-step title="Server Profile BIOS" />
            <el-step title="Server Profile RAID" />
            <el-step title="Server Profile vHBA" />
        </el-steps>
        <el-form v-if="active === 0" v-model="form" label-width="150px">
            <el-form-item label="Name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Device Model">
                <el-select v-model="form.device_model" placeholder="Server">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Device Type">
                <el-input v-model="form.device_type" />
            </el-form-item>
            <el-form-item label="Description">
                <el-input v-model="form.description" type="textarea" />
            </el-form-item>
            <el-form-item></el-form-item>
            <el-form-item>
                <el-button type="primary" @click="nextStep">{{
                    nextButtonText
                }}</el-button>
                <el-button @click="cancelAddProfile">Cancel</el-button>
            </el-form-item>
        </el-form>
        <el-form v-else v-model="form" label-width="180px">
            <el-form-item label="Select Memory RAS">
                <el-select v-model="form.memory_ras">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Page Type">
                <el-select v-model="form.page_type">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Power Restore Policy">
                <el-select v-model="form.power_restore_policy">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Fan Policy">
                <el-select v-model="form.fan_policy">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Processor C3">
                <el-select v-model="form.processor_c3">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Processor C5">
                <el-select v-model="form.processor_c5">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Processor C-State">
                <el-select v-model="form.processor_cstate">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Processor CIE">
                <el-select v-model="form.processor_CIE">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item> </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="nextStep">{{
                    nextButtonText
                }}</el-button>
                <el-button @click="cancelAddProfile">Cancel</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup lang="ts" name="dialog">
import { ref } from "vue";

// define emits
const emit = defineEmits(["update:dialogVisible"]);

const form = ref({
    name: "",
    device_model: "",
    memory_ras: "",
    page_type: "",
    power_restore_policy: "",
    fan_policy: "",
    processor_c3: "",
    processor_c5: "",
    processor_cstate: "",
    processor_CIE: "",
    device_type: "",
    description: "",
});

const active = ref(0);
const nextButtonText = ref("Next");

const nextStep = () => {
    active.value++;
    if (active.value > 3) {
        emit("update:dialogVisible", false);
        active.value = 0;
    }
    if (active.value === 3) {
        nextButtonText.value = "Finish";
    } else {
        nextButtonText.value = "Next";
    }
};
const cancelAddProfile = () => {
    active.value = 0;
    emit("update:dialogVisible", false);
};
</script>

<style>

</style>
