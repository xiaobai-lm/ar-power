<script setup lang="ts">
  const columns = [
    { title: '文件名称', dataIndex: '1', width: 500 },
    { title: '上传时间', dataIndex: '2', align: 'center' },
    { title: '上传人', dataIndex: '3', align: 'center' },
    { title: '操作', slotName: 'do', align: 'center', width: 200 },
  ];
  const data = [
    { '1': '快控电力运维云-电子画册-2020.pdf', '2': '' },
    { '1': '136点表.docx' },
  ];
</script>

<template>
  <div class="electronic"
    ><a-table
      :columns="columns"
      :bordered="{ wrapper: true, cell: true }"
      :data="data"
    >
      <template #do>
        <a-button type="text">复制</a-button
        ><a-divider direction="vertical" /><a-link
          href="https://kk-media-test.oss-cn-qingdao.aliyuncs.com/demo-admin-zj/cloud/20210619/rc-upload-1624064649439-9-%E5%BF%AB%E6%8E%A7%E7%94%B5%E5%8A%9B%E8%BF%90%E7%BB%B4%E4%BA%91-%E7%94%B5%E5%AD%90%E7%94%BB%E5%86%8C-2020.pdf"
          target="_blank"
          >下载</a-link
        >
      </template>
    </a-table></div
  >
</template>

<style scoped lang="less">
  .electronic {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    position: relative;
    background-color: #232323;
  }
</style>
