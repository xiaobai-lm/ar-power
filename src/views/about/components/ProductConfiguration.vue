<template>
  <div class="container">
    <a-button style="margin-bottom: 20px" type="primary " @click="handleClick">
      <template #icon>
        <icon-search />
      </template>
      添加产品
    </a-button>
    <a-modal v-model:visible="visible" @cancel="handleCancel" @ok="handleOk">
      <template #title> 编辑产品</template>
      <div>
        <a-form :model="form" :style="{ width: '400px' }">
          <a-form-item
            field="name"
            label="产品:"
            required
            validate-trigger="input"
          >
            <a-input v-model="form.name" placeholder="请选择产品" />
          </a-form-item>
          <a-form-item
            field="code"
            label="编码:"
            required
            validate-trigger="input"
          >
            <a-input v-model="form.code" placeholder="请选择编码" />
          </a-form-item>
          <a-form-item field="unit" label="单位:" validate-trigger="input">
            <a-input v-model="form.unit" placeholder="请选择单位" />
          </a-form-item>
          <a-form-item field="describe" label="描述:" validate-trigger="input">
            <a-textarea v-model="form.describe" />
          </a-form-item>
        </a-form>
        <a-space>关联变量</a-space>
        <a-button style="margin-left: 20px" type="primary" @click="addVariable">
          <template #icon>
            <icon-plus />
          </template>
          添加变量
        </a-button>
        <a-table
          :bordered="{ cell: true }"
          :columns="columnsTwo"
          :data="dataTwo"
          style="margin-top: 20px"
        >
          <template #operates>
            <a-button>编辑</a-button>
            <a-divider direction="vertical"></a-divider>
            <a-button style="color: red">删除</a-button>
          </template>
        </a-table>
      </div>
    </a-modal>

    <a-modal
      v-model:visible="addVisible"
      title="添加变量"
      @cancel="addVariableCancel"
      @ok="addVariableOk"
      @before-ok="addBeforeOk"
    >
      <a-form :model="formMate" :style="{ width: '300px' }">
        <a-form-item
          field="category"
          label="类别:"
          required
          validate-trigger="input"
        >
          <a-select v-model="formMate.category">
            <a-option>a</a-option>
            <a-option>b</a-option>
            <a-option>c</a-option>
          </a-select>
        </a-form-item>
        <a-form-item
          field="monitor"
          label="设备:"
          placeholder="请选择设备"
          required
          validate-trigger="input"
        >
          <a-select v-model="formMate.monitor">
            <a-option>2</a-option>
            <a-option>3</a-option>
            <a-option>4</a-option>
          </a-select>
        </a-form-item>
        <a-form-item
          field="variable"
          label="变量:"
          placeholder="请选择变量"
          required
          validate-trigger="input"
        >
          <a-select v-model="formMate.variable">
            <a-option>5</a-option>
            <a-option>6</a-option>
            <a-option>7</a-option>
          </a-select>
        </a-form-item>
      </a-form>
      <a-checkbox v-model="checkValue">连续添加模式</a-checkbox>
    </a-modal>
    <a-card>
      <a-table
        :bordered="{ cell: true }"
        :columns="columns"
        :data="data"
        :pagination="pagination"
        stripe
      >
        <template #operate="{ record, rowIndex }">
          <a-button>编辑</a-button>
          <a-divider direction="vertical"></a-divider>
          <a-button style="color: red" @click="deleteClick(record, rowIndex)"
            >删除
          </a-button>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  const pagination = { pageSize: 5 };
  const checkValue = ref(false);
  const visible = ref(false);
  const addVisible = ref(false);
  const form = reactive({
    name: '',
    code: '',
    unit: '',
    describe: '',
  });

  const formMate = reactive({
    category: '',
    monitor: '',
    variable: '',
  });

  const options = Array(10)
    .fill(null)
    .map((_, index) => index);

  // const options = Array(1000).fill(null).map((_, index) => `Option ${index}`);
  // const dataSpanMethod = ({ record, column }) => {
  //     if (record.product === '产品' && column.code === '编码') {
  //         return {
  //             rowspan: 2,
  //         }
  //     }
  // };

  const columns = [
    {
      title: '产品',
      dataIndex: 'product',
    },
    {
      title: '编码',
      dataIndex: 'code',
    },
    {
      title: '单位',
      dataIndex: 'unit',
    },
    {
      title: '描述',
      dataIndex: 'describe',
    },
    {
      title: '关联变量',
      children: [
        {
          title: '类别',
          dataIndex: 'category',
        },
        {
          title: '变量',
          dataIndex: 'monitor',
        },
      ],
    },
    {
      title: '操作',
      slotName: 'operate',
      width: 200,
    },
  ];

  const data = ref([]);
  const columnsTwo = [
    {
      title: '类别',
      dataIndex: 'category',
    },
    {
      title: '变量',
      dataIndex: 'monitor',
    },
    {
      title: '操作',
      slotName: 'operates',
    },
  ];

  const dataTwo = reactive([]);

  const handleClick = () => {
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
    const aac = {
      product: form.name,
      code: form.code,
      unit: form.unit,
      describe: form.describe,
      category: formMate.category,
      monitor: formMate.monitor,
    };
    data.value.push(aac);
    form.name = '';
    form.code = '';
    form.unit = '';
    form.describe = '';
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const deleteClick = (record: any, rowIndex: any) => {
    data.value.splice(rowIndex, 1);
  };

  const addVariable = () => {
    addVisible.value = true;
    console.log(checkValue.value);
  };

  const addBeforeOk = () => {
    const aacs = {
      category: formMate.category,
      monitor: formMate.monitor,
      variable: formMate.variable,
    };
    if (checkValue.value === true) {
      addVisible.value = true;
      dataTwo.push(aacs);
      formMate.category = '';
      formMate.monitor = '';
      formMate.variable = '';
    } else {
      addVisible.value = false;
      dataTwo.push(aacs);
    }
    if (
      formMate.category === ' ' ||
      formMate.monitor === '' ||
      formMate.variable === ''
    ) {
      return false;
    }
    return false;
  };

  const addVariableOk = () => {
    const aacs = {
      category: formMate.category,
      monitor: formMate.monitor,
      variable: formMate.variable,
    };
    dataTwo.push(aacs);

    console.log(checkValue.value);
  };

  const addVariableCancel = () => {
    addVisible.value = false;
  };
</script>

<style scoped>
  .container {
    padding: 10px;
  }
</style>
