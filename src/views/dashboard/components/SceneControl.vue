<template>
  <div class="container">
    <div v-if="isShow ? true : false">
      <a-button>
        <template #icon>
          <icon-plus />
        </template>
        自定义场景
      </a-button>
      <a-table
        :columns="columns"
        :data="data"
        :bordered="{ cell: true }"
        class="tables"
      >
        <template #optional="{ record }">
          <!-- <a-button @click="$modal.info({ title: `手动控制【${record.name}】`, content: record.name })">控制</a-button> -->
          <a-button @click="handleControl(record)">控制</a-button>
          <a-divider direction="vertical"></a-divider>
          <a-button @click="handleShow">编辑</a-button>
          <a-divider direction="vertical"> </a-divider>
          <a-button status="danger" @click="handleDelete(record)"
            >删除</a-button
          >
        </template>
      </a-table>
      <!-- <a-pagination style="float:right;margin-top: 20px;" :page-size="pageSize" :total="data.length" show-total
                show-page-size>
                <template #total>
                    从 {{ Math.floor(data.length / 10) * 10 }} 到 {{ Math.floor(data.length / 10) * 10 + 10 }}， 共 {{ data.length }} 个
                </template>
            </a-pagination> -->
    </div>
    <div v-else>
      <a-card title="编辑场景">
        <a-form id="cardList" :model="form">
          <a-row>
            <a-col :span="12">
              <a-form-item
                field="name"
                label="名称："
                feedback
                label-col-flex="60px"
                :rules="[{ required: true, message: 'name is required' }]"
                :validate-trigger="['change', 'input']"
              >
                <a-input v-model="form.name" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                field="name"
                feedback
                :rules="[{ required: true, message: 'name is required' }]"
                label-col-flex="160px"
                :validate-trigger="['change', 'input']"
              >
                <template #label>
                  <span style="width: 140px">超时响应</span>
                  <icon-question-circle />
                </template>
                <a-input-number
                  v-model="form.post"
                  placeholder="please enter your post..."
                />
              </a-form-item>
            </a-col>
          </a-row>
          <div id="divID">
            <div>{{ DeployTitleName }} :</div>
            <div style="border: dotted 1px #2e414f">
              <a-row>
                <a-col :span="8">
                  <a-form-item label="监控设备：" label-col-flex="100px">
                    <span
                      style="color: #6c7fff; text-decoration: underline"
                      @click="handleDeployClick"
                      >配置</span
                    >
                    已选 {{ checkedKeys.length }} 台
                    <a-modal
                      v-model:visible="DeployVisible"
                      @ok="handleDeployOk"
                      @cancel="handleDeployCancel"
                    >
                      <template #title>
                        选择监控设备【{{ DeployTitleName }}】
                      </template>
                      {{ checkedKeys?.join(' , ') }}
                      <a-input placeholder="搜索"></a-input>
                      <a-button-group style="margin-bottom: 20px">
                        <a-checkbox type="primary" @click="toggleChecked">
                          全选
                        </a-checkbox>
                      </a-button-group>
                      <a-tree
                        v-model:expanded-keys="expandedKeys"
                        v-model:checked-keys="checkedKeys"
                        :checkable="true"
                        :data="treeData"
                        :checked-strategy="checkedStrategy"
                      />
                    </a-modal>
                  </a-form-item>
                </a-col>
                <a-col :span="8">
                  <a-form-item label="变量类型：" label-col-flex="100px">
                    <a-radio-group v-model="checkedValue">
                      <a-radio value="A"> 状态量 </a-radio>
                      <a-radio value="B"> 模拟量 </a-radio>
                    </a-radio-group>
                  </a-form-item>
                </a-col>
                <a-col :span="8">
                  <a-form-item label="变量属性：" label-col-flex="100px">
                    <a-input> </a-input>
                  </a-form-item>
                </a-col>
              </a-row>
            </div>
            <div><icon-close @click="closeClick" /></div>
          </div>
        </a-form>
        <a-button type="dashed" @click="AddClick">
          <template #icon>
            <icon-plus />
          </template>
          添加变量组
        </a-button>
      </a-card>
    </div>
    <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
      <template #title> 手动控制【{{ titleName.name }}】 </template>
      <div class="title"></div>
      <div class="password">
        <a-form :model="Control"> </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { Modal } from '@arco-design/web-vue';
  import { ref, reactive, Ref } from 'vue';

  const isShow = ref(true);
  // const pageSize = ref(10);
  const DeployTitleName: Ref<string> = ref('组1');

  const DeployVisible = ref(false);

  const handleDeployClick = () => {
    DeployVisible.value = true;
  };
  const handleDeployOk = () => {
    DeployVisible.value = false;
  };
  const handleDeployCancel = () => {
    DeployVisible.value = false;
  };
  const allCheckedKeys = [
    '0-0',
    '0-0-1',
    '0-0-2',
    '0-0-2-1',
    '0-0-2-2',
    '0-1',
    '0-1-1',
    '0-1-1-1',
    '0-1-2',
    '0-2',
  ];
  const checkedKeys: Ref<never[]> = ref([]);
  const expandedKeys: Ref<never[]> = ref([]);
  const checkedStrategy: Ref<any> = ref('child');
  const checkedValue = ref('A');
  const treeData = [
    {
      title: '高压',
      key: '0-0',
      children: [
        {
          title: '高压一段',
          key: '0-0-1',
        },
        {
          title: '高压二段',
          key: '0-0-2',
          children: [
            {
              title: '高压设备11',
              key: '0-0-2-1',
            },
            {
              title: '高压设备12',
              key: '0-0-2-2',
            },
          ],
        },
      ],
    },
    {
      title: '低压',
      key: '0-1',
      children: [
        {
          title: '一段',
          key: '0-1-1',
          children: [
            {
              title: '低压设备11',
              key: '0-1-1-1',
            },
          ],
        },
        {
          title: '二段',
          key: '0-1-2',
        },
      ],
    },
    {
      title: '电容柜',
      key: '0-2',
    },
  ];

  const AddClick = () => {
    const Add = document.getElementById('cardList');
    const childAdd = document.getElementById('divID');
    Add?.appendChild(childAdd);
  };
  const closeClick = () => {
    const del = document.getElementById('cardList');
    const childDel = document.getElementById('divID');
    del?.removeChild(childDel);
  };

  const toggleChecked = () => {
    checkedKeys.value = checkedKeys?.value.length ? [] : allCheckedKeys;
  };

  const Control = reactive({
    name: '空调1',
    post: 300,
    tags: ['tag1'],
    section: '',
  });
  const visible = ref(false);

  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };
  const data = reactive([
    {
      key: '1',
      name: '空调',
      sum: 23000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
    {
      key: '2',
      name: '测试',
      sum: 25000,
      timeing: '300',
    },
  ]);

  const titleName: Ref<string> = ref('');

  const handleControl = (record: any) => {
    visible.value = true;
    titleName.value = record;
  };

  const handleDelete = () => {
    Modal.warning({
      title: '警告',
      content: '确认要删除吗',
      closable: false,
      hideCancel: false,
      onOk() {
        data.splice(0, 1);
      },
      cancelText: '取消',
      okText: '确定',
    });
  };

  const handleShow = () => {
    isShow.value = false;
  };

  const form = reactive({
    together: {
      firstname: '',
      lastname: '',
    },
    separate: {
      firstname: '',
      lastname: '',
    },
    posts: {
      post1: '',
      post2: '',
    },
    isRead: false,
  });

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: '变量数量',
      dataIndex: 'sum',
    },
    {
      title: '最长等待时长（秒）',
      dataIndex: 'timeing',
    },
    {
      title: '操作',
      slotName: 'optional',
    },
  ];
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;
  }

  :deep(.arco-table .arco-table-element) {
    margin: 0;
  }

  .a-card {
    margin-top: 20px;
  }

  .tables {
    margin-top: 10px;
  }

  .arco-form {
    width: 100%;
    padding: 0 10%;
  }
</style>
