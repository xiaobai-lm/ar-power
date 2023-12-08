<script setup lang="ts">
  import { ref } from 'vue';

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '设备名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '设备类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '设备状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '设备位置',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '设备规格',
      dataIndex: 'specification',
      key: 'specification',
    },
    {
      title: '设备编号',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '设备厂商',
      dataIndex: 'manufacturer',
      key: 'manufacturer',
    },
    {
      title: '设备型号',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: '设备安装日期',
      dataIndex: 'installDate',
      key: 'installDate',
    },
    {
      title: '设备保修期限',
      dataIndex: 'warrantyPeriod',
      key: 'warrantyPeriod',
    },
    {
      title: '设备保修状态',
      dataIndex: 'warrantyStatus',
    },
    {
      title: '设备保修到期日',
      dataIndex: 'warrantyExpirationDate',
      key: 'warrantyExpirationDate',
    },
    {
      title: '设备保修联系人',
      dataIndex: 'warrantyContact',
      key: 'warrantyContact',
    },
    {
      title: '设备保修联系电话',
      dataIndex: 'warrantyContactPhone',
      key: 'warrantyContactPhone',
    },
    {
      title: '设备保修联系地址',
      slotName: 'warrantyContactAddress',
      key: 'warrantyContactAddress',
    },
    {
      title: '设备保修联系邮箱',
      dataIndex: 'warrantyContactEmail',
      key: 'warrantyContactEmail',
    },
    {
      title: '设备保修联系QQ',
      dataIndex: 'warrantyContactQQ',
      key: 'warrantyContactQQ',
    },
  ];
  const data = [
    {
      id: 1,
      name: '设备1',
      type: '设备类型1',
      status: '设备状态1',
      location: '设备位置1',
      specification: '设备规格1',
      code: '设备编号1',
      manufacturer: '设备厂商1',
      model: '设备型号1',
      installDate: '设备安装日期1',
      warrantyPeriod: '设备保修期限1',
      warrantyStatus: '设备保修状态1',
      warrantyExpirationDate: '设备保修到期日1',
      warrantyContact: '设备保修联系人1',
      warrantyContactPhone: '设备保修联系电话1',
      warrantyContactAddress: '设备保修联系地址1',
      warrantyContactEmail: '设备保修联系邮箱1',
      warrantyContactQQ: '设备保修联系QQ1',
      key: '1',
      children: [
        {
          id: 1,
          name: '设备1',
          type: '设备类型1',
          status: '设备状态1',
          location: '设备位置1',
        },
      ],
    },
    {
      id: 2,
      name: '设备2',
      type: '设备类型2',
      status: '设备状态2',
      location: '设备位置2',
      specification: '设备规格2',
      code: '设备编号2',
      manufacturer: '设备厂商2',
      model: '设备厂商2',
      installDate: '设备安装日期2',
      warrantyPeriod: '设备保修期限2',
      warrantyStatus: '设备保修状态2',
      warrantyExpirationDate: '设备保修到期日2',
      warrantyContact: '设备保修联系人2',
      warrantyContactPhone: '设备保修联系电话2',
      warrantyContactAddress: '设备保修联系地址2',
      warrantyContactEmail: '设备保修联系邮箱2',
      warrantyContactQQ: '设备保修联系QQ2',
      key: '2',
    },
    {
      id: 3,
      name: '设备3',
      type: '设备类型3',
      status: '设备状态3',
      location: '设备位置3',
      specification: '设备规格3',
      code: '设备编号3',
      manufacturer: '设备厂商3',
      model: '设备型号3',
      installDate: '设备安装日期3',
      warrantyPeriod: '设备保修期限3',

      warrantyContact: '设备保修联系人3',
      warrantyContactPhone: '设备保修联系电话3',
      warrantyContactAddress: '设备保修联系地址3',
      warrantyContactEmail: '设备保修联系邮箱3',
      warrantyContactQQ: '设备保修联系QQ3',
      key: '3',
    },
    {
      id: 4,
      name: '设备4',
      type: '设备类型4',
      status: '设备状态4',
      location: '设备位置4',
      specification: '设备规格4',
      code: '设备编号4',
      manufacturer: '设备厂商4',
      model: '设备型号4',
      installDate: '设备安装日期4',
      warrantyPeriod: '设备保修',

      warrantyContact: '设备保修联系人4',
      warrantyContactPhone: '设备保修联系电话4',
      warrantyContactAddress: '设备保修联系地址4',
      warrantyContactEmail: '设备保修联系邮箱4',
      warrantyContactQQ: '设备保修联系QQ4',
      key: '4',
    },
    {
      id: 5,
      name: '设备5',
      type: '设备类型5',
      status: '设备状态5',
      location: '设备位置5',
      specification: '设备规格5',
      code: '设备编号5',
      manufacturer: '设备厂商5',
      model: '设备型号5',
      installDate: '设备安装日期5',
      warrantyPeriod: '设备保修期限5',
      warrantyStatus: '设备保修状态5',
      warrantyExpirationDate: '设备保修到期日5',

      warrantyContact: '设备保修联系人5',
      warrantyContactPhone: '设备保修联系电话5',
      warrantyContactAddress: '设备保修联系地址5',
      warrantyContactEmail: '设备保修联系邮箱5',
      warrantyContactQQ: '设备保修联系QQ5',
      key: '5',
    },
    {
      id: 6,
      name: '设备6',
      type: '设备类型6',
      status: '设备状态6',
      location: '设备位置6',
      specification: '设备规格6',
      code: '设备编号6',
      manufacturer: '设备厂商6',
      model: '设备型号6',
      installDate: '设备安装日期6',
      warrantyPeriod: '设备保修期限6',

      warrantyContact: '设备保修联系人6',
      warrantyContactPhone: '设备保修联系电话6',
      warrantyContactAddress: '设备保修联系地址6',
      warrantyContactEmail: '设备保修联系邮箱6',
      warrantyContactQQ: '设备保修联系QQ6',
      key: '6',

      children: [
        {
          id: 1,
          name: '设备1',
          type: '设备类型1',
          status: '设备状态1',
          location: '设备位置1',
        },
      ],
    },

    {
      id: 7,
      name: '设备7',
      type: '设备类型7',
      status: '设备状态7',
      location: '设备位置7',
      specification: '设备规格7',
      code: '设备编号7',
      manufacturer: '设备厂商7',
      model: '设备型号7',
      installDate: '设备安装日期7',
      warrantyPeriod: '设备保修期限7',
      warrantyStatus: '设备保修状态7',

      warrantyContact: '设备保修联系人7',
      warrantyContactPhone: '设备保修联系电话7',
      warrantyContactAddress: '设备保修联系地址7',
      warrantyContactEmail: '设备保修联系邮箱7',
      warrantyContactQQ: '设备保修联系QQ7',
      key: '7',
    },
  ];
  const visible = ref(false);

  const handleClick = () => {
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };
</script>

<template>
  <div class="library"
    ><div class="top"
      ><a-space
        ><a-input-search placeholder="请输入设备名称"></a-input-search
        ><a-button type="primary">查询</a-button
        ><a-button type="primary" @click="handleClick">新增</a-button></a-space
      ></div
    ><a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-form style="display: flex; flex-wrap: wrap">
        <a-form-item label="设备名称" name="name">
          <a-input placeholder="请输入设备名称" />
        </a-form-item>
        <a-form-item label="设备类型" name="type">
          <a-input placeholder="请输入设备类型" />
        </a-form-item>
        <a-form-item label="设备状态" name="status">
          <a-input placeholder="请输入设备状态" />
        </a-form-item>
        <a-form-item label="设备位置" name="location">
          <a-input placeholder="请输入设备位置" />
        </a-form-item>
        <a-form-item label="设备规格" name="specification">
          <a-input placeholder="请输入设备规格" />
        </a-form-item>
        <a-form-item label="设备编号" name="code">
          <a-input placeholder="请输入设备编号" />
        </a-form-item>
        <a-form-item label="设备厂商" name="manufacturer">
          <a-input placeholder="请输入设备厂商" />
        </a-form-item>
        <a-form-item label="设备型号" name="model">
          <a-input placeholder="请输入设备型号" />
        </a-form-item>
        <a-form-item label="设备安装日期" name="installDate">
          <a-input placeholder="请输入设备安装日期" />
        </a-form-item>
        <a-form-item label="设备保修期限" name="warrantyPeriod">
          <a-input placeholder="请输入设备保修期限" />
        </a-form-item>
        <a-form-item label="设备保修状态" name="warrantyStatus">
          <a-input placeholder="请输入设备保修状态" />
        </a-form-item>
        <a-form-item label="设备保修到期日" name="warrantyExpirationDate">
          <a-input placeholder="请输入设备保修到期日" />
        </a-form-item>
        <a-form-item label="设备保修联系人" name="warrantyContact">
          <a-input placeholder="请输入设备保修联系人" />
        </a-form-item>
        <a-form-item label="设备保修联系电话" name="warrantyContactPhone">
          <a-input placeholder="请输入设备保修联系电话" />
        </a-form-item>
        <a-form-item label="设备保修联系地址" name="warrantyContactAddress">
          <a-input placeholder="请输入设备保修联系地址" />
        </a-form-item>
        <a-form-item label="设备保修联系邮箱" name="warrantyContactEmail">
          <a-input placeholder="请输入设备保修联系邮箱" />
        </a-form-item>
        <a-form-item label="设备保修联系QQ" name="warrantyContactQQ">
          <a-input placeholder="请输入设备保修联系QQ" />
        </a-form-item>
        <a-form-item label="备注" name="remark">
          <a-input placeholder="请输入备注" />
        </a-form-item>
      </a-form>
    </a-modal>
    <div class="content"
      ><a-table :columns="columns" :data="data" size="mini">
        <template #warrantyContactAddress="{ record }">
          <a-button type="text" size="mini">{{
            record.warrantyContactAddress
          }}</a-button>
        </template>
      </a-table></div
    ></div
  >
</template>

<style scoped lang="less">
  .library {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    background-color: #232323;
    .top {
      width: 98%;
      margin: 10px 1%;
    }
    .content {
      width: 98%;
      margin: 10px 1%;
    }
  }
</style>
