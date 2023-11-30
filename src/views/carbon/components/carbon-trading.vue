<script setup lang="ts">
  const columns = [
    { title: '序号', dataIndex: 'number', align: 'center', width: 100 },
    { title: '资产类型', dataIndex: 'assetType', align: 'center' },
    { title: '交易类型', dataIndex: 'transactionType', align: 'center' },
    { title: '数量(吨)', slotName: 'quantity', align: 'center' },
    { title: '单价(元/吨)', dataIndex: 'price', align: 'center' },
    { title: '交易时间', dataIndex: 'time', align: 'center', width: 300 },
  ];
  const data = [
    {
      number: '1',
      assetType: 'CCER',
      transactionType: '国家发放',
      quantity: '800',
      price: '64',
      time: '2022-11-25 14:57:23',
    },
    {
      number: '2',
      assetType: 'CCER',
      transactionType: '国家发放',
      quantity: '300',
      price: '99',
      time: '2022-11-25 14:57:23',
    },
    {
      number: '3',
      assetType: '配额',
      transactionType: '国家发放',
      quantity: '-369',
      price: '23',
      time: '2022-11-25 14:57:23',
    },
  ];
</script>

<template
  ><div class="trading"
    ><div class="top"
      ><a-space
        ><span>账户余额（t）:</span><span class="greenColor">配额:</span
        ><span class="greenColor fontWeight">700</span
        ><a-divider direction="vertical" style="border: white solid 1px" /><span
          class="greenColor"
          >CCER:</span
        ><span class="greenColor fontWeight">1303</span></a-space
      ></div
    ><div class="content"
      ><a-table
        :columns="columns"
        :data="data"
        :bordered="{ wrapper: true, cell: true, headerCell: true }"
      >
        <template #quantity="{ record }">
          <a-space>
            <span v-if="record.quantity > 0 ? 1 : 0"
              ><icon-plus style="color: #08b762" /></span
            ><span v-else><icon-minus style="color: #ee0a0a" /></span>
            <span>{{ Math.abs(record.quantity) }}</span></a-space
          >
        </template>
      </a-table></div
    ></div
  >
</template>

<style scoped lang="less">
  .trading {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    position: relative;
    background-color: #232323;
    height: 500px;
    .top {
      position: absolute;
      right: 0;
      height: 35px;
      line-height: 35px;
      font-size: medium;
    }
    .content {
      position: absolute;
      top: 50px;
      width: 98%;
      margin-left: 1%;
    }
  }
  .greenColor {
    color: #0cde78;
  }
  .fontWeight {
    font-weight: 600;
  }
</style>
