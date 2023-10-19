<template>
    <div class="container">
        <a-tabs type="card-gutter" class="tabsList">
            <a-tab-pane key="1" title="任务列表">
                <div style="margin-bottom: 20px;">
                    <a-button class="abutton" type="primary" @click="AddClick">
                        <template #icon>
                            <icon-plus />
                        </template>
                        新建任务
                    </a-button>
                    <a-button class="abutton" type="outline">启动</a-button>
                    <a-button class="abutton" type="outline">暂停</a-button>
                    <span style="color: rgb(var(--gray-10));">已选{{ selectedKeys.length }} 个任务</span>
                    <a-input-search :style="{ width: '320px', float: 'right', marginRight: '10px' }"
                        placeholder="搜索名称或目标" />
                </div>
                <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
                    <template #title>
                        新建定时任务
                    </template>
                    <div class="Amodal">
                        <a-form :model="form" :style="{ width: '440px' }">
                            <a-form-item field="name" tooltip="Please enter username" label="任务名称" label-col-flex="100px">
                                <a-input v-model="form.name" />
                            </a-form-item>
                            <a-form-item field="name" tooltip="Please enter username" label="控制及对象" label-col-flex="100px">
                                <a-tabs type="card">
                                    <a-tab-pane key="1" title="变量">
                                        <a-form-item field="name" tooltip="Please enter username" label="变量类型"
                                            label-col-flex="80px">
                                            <a-radio-group v-model="checkedValue">
                                                <a-radio value="1">状态量</a-radio>
                                                <a-radio value="2">模拟量</a-radio>
                                            </a-radio-group>
                                        </a-form-item>
                                        <a-form-item field="name" tooltip="Please enter username" label="设备"
                                            label-col-flex="80px">
                                            <a-select>

                                            </a-select>
                                        </a-form-item>
                                        <a-form-item field="name" tooltip="Please enter username" label="测点"
                                            label-col-flex="80px">
                                            <a-select>

                                            </a-select>
                                        </a-form-item>
                                        <a-form-item field="name" tooltip="Please enter username" label="设置值"
                                            label-col-flex="80px">
                                            <a-radio-group v-model="switchValue" v-if="checkedValue === '1' ? true : false">
                                                <a-radio value="on">ON</a-radio>
                                                <a-radio value="off">OFF</a-radio>
                                            </a-radio-group>
                                            <a-select v-else>

                                            </a-select>
                                        </a-form-item>
                                    </a-tab-pane>
                                    <a-tab-pane key="2" title="场景">
                                        <a-form-item field="name" tooltip="Please enter username" label="场景"
                                            label-col-flex="100px">
                                            <a-select :style="{ width: '320px' }" placeholder="Please select ...">
                                                <a-option>Beijing</a-option>
                                                <a-option>Shanghai</a-option>
                                                <a-option>Guangzhou</a-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-tab-pane>
                                </a-tabs>
                            </a-form-item>
                            <a-form-item field="name" tooltip="Please enter username" label="执行时间" label-col-flex="100px">
                                <a-time-picker style="width: 194px;" />
                            </a-form-item>
                            <a-form-item field="name" tooltip="Please enter username" label="重复" label-col-flex="100px">
                                <a-checkbox-group :default-value="['1']">
                                    <a-checkbox value="1">周一</a-checkbox>
                                    <a-checkbox value="2">周二</a-checkbox>
                                    <a-checkbox value="3">周三</a-checkbox>
                                    <a-checkbox value="4">周四</a-checkbox>
                                    <a-checkbox value="5">周五</a-checkbox>
                                    <a-checkbox value="6">周六</a-checkbox>
                                    <a-checkbox value="7">周末</a-checkbox>
                                </a-checkbox-group>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-modal>
                <a-table row-key="name" :columns="columns" :data="data" :row-selection="rowSelection"
                    :pagination="pagination" v-model:selectedKeys="selectedKeys" :bordered="{ wrapper: true, cell: true }">
                    <template #optional="{ record }">
                        <a-button @click="$modal.info({ title: 'Name', content: record.name })">view</a-button>
                    </template>
                </a-table>
            </a-tab-pane>
            <a-tab-pane key="2" title="控制历史">
                <span class="historySpan">定时任务：</span> <a-select :style="{ width: '200px' }"></a-select>
                <span class="historySpan"> 场景： </span><a-select :style="{ width: '200px' }"></a-select>
                <span class="historySpan"> 设备：</span><a-select :style="{ width: '200px' }"></a-select>
                <span class="historySpan">变量：</span> <a-select :style="{ width: '200px' }"></a-select>
                <span class="historySpan">执行时间：</span> <a-range-picker v-model="rangeValue" style="width: 300px;" />
                <a-button type="primary">刷新</a-button>
                <a-table :columns="columnsHistory" :data="dataHistory" style="margin-top: 40px;" :bordered="{ cell: true }" />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

const checkedValue = ref("1")
const switchValue = ref("on")
// 选中的内容
const selectedKeys = ref([]);
// 是否开启选择
const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
});
const visible = ref(false);

const AddClick = () => {
    visible.value = true;
};
const handleOk = () => {
    visible.value = false;
};
const handleCancel = () => {
    visible.value = false;
};
const rangeValue = ref([Date.now(), Date.now()])
const form = ref({
    name: "",
})

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
    },
    {
        title: '执行对象',
        dataIndex: 'executionObject',
    },
    {
        title: '设置值',
        dataIndex: 'setValue',
    },
    {
        title: '执行时间',
        dataIndex: 'executionTime',
    },
    {
        title: '重复日期',
        dataIndex: 'repeatDate',
    },
    {
        title: '状态',
        dataIndex: 'condition',
    },
    {
        title: '更新时间',
        dataIndex: 'turnoverTime',
    },
    {
        title: '操作',
        slotName: 'operate',
    },
];

const data = reactive([{
    key: '1',
    name: '设备合闸',
    executionObject: "高压设备2：开关位置控制",
    setValue: '1',
    executionTime: '08:00:00',
    repeatDate: '每日',
    condition: '已开始',
    turnoverTime: '2023-10-08 13:05:16'
}, {
    key: '2',
    name: '设备合闸',
    executionObject: "高压设备2：开关位置控制",
    setValue: '1',
    executionTime: '08:00:00',
    repeatDate: '每日',
    condition: '已开始',
    turnoverTime: '2023-10-08 13:05:16'
}]);

const columnsHistory = [
    {
        title: '任务名称',
        dataIndex: 'name',
    },
    {
        title: '场景',
        dataIndex: 'salary',
    },
    {
        title: '执行对象',
        dataIndex: 'address',
    },
    {
        title: '设置值',
        dataIndex: 'email',
    },
    {
        title: '执行时间',
        dataIndex: 'email',
    },
    {
        title: '执行结果',
        dataIndex: 'email',
    },
];
const dataHistory = reactive([{
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com'
}, {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com'
}, {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
}, {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
}, {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
}]);
</script>

<style scoped lang="less">
.tabsList {
    padding: 10px;

}

/* tabs 的表头 */
.arco-tabs-nav-tab {
    background-color: #33404c;
    border: none;
}

/* tabs 选中 */
.arco-tabs-nav-type-card-gutter .arco-tabs-tab-active,
.arco-tabs-nav-type-card-gutter .arco-tabs-tab-active:hover {
    border-top: solid 3px #6c7fff !important;
    border: unset;
}

.arco-tabs-tab {
    height: 40px;
}

/* table的头顶 */
.arco-table .arco-table-element {
    margin: 0;
}

.abutton {
    margin: 0 10px;
}

.Amodal .arco-tabs-nav-tab {
    background-color: unset !important;
}

.Amodal .arco-tabs-nav-type-card .arco-tabs-tab-active,
.arco-tabs-nav-type-card .arco-tabs-tab-active:hover {
    background-color: #6c7fff;
    color: white;
}

.Amodal .arco-tabs-nav::before {
    height: 0;
}

.arco-tabs-type-card>.arco-tabs-content,
.arco-tabs-type-card-gutter>.arco-tabs-content {
    border: unset;
}

.historySpan {
    color: rgb(var(--gray-10));
}
</style>