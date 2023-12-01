<template>
  <div class="container">
    <a-table :bordered="{ cell: true }" :columns="columns" :data="data">
      <template #option="{ record }">
        <a-button type="outline" @click="previewClick(record)">预览</a-button>
        <a-button
          style="margin-left: 10px"
          type="outline"
          @click="downloadClick"
          >下载
        </a-button>
        <a-modal v-model:visible="visible" :footer="false" fullscreen>
          <template #title>
            {{ record.name }}
          </template>
          <div>
            <vue-office-pdf
              :src="pdfUrls"
              class="docx-calss"
              @rendered="rendered"
            />
          </div>
        </a-modal>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import VueOfficePdf from '@vue-office/pdf';
  import axios from 'axios';

  const visible = ref(false);

  const pdfUrls = ref();
  const previewClick = (record: any) => {
    visible.value = true;
    pdfUrls.value = record.pdfUrlsData;
    console.log(record.pdfUrlsData);
  };

  // input 添加文件查看
  // const changeFile = (event) => {
  //     visible.value = true
  //     const reader = new FileReader();
  //     reader.addEventListener('load', function () {
  //         pdfUrls.value = reader.result;
  //     })
  //     reader.readAsDataURL(event.target.files[0]);
  // }

  const downloadClick = (record: any) => {
    axios(record.pdfUrlsData, {
      // pdf的位置
      responseType: 'blob', // 重要代码
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      const fileName = record.name; //     保存到本地的文件名称
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      console.log(link);
      link.remove();
    });
    console.log(record);
  };

  const rendered = () => {
    console.log('11111');
  };

  const columns = [
    {
      title: '报告名称',
      dataIndex: 'name',
    },
    {
      title: '报告统计时间',
      dataIndex: 'date',
    },

    {
      title: '报告创建日期',
      dataIndex: 'createdate',
    },

    {
      title: '生成/发送状态',
      dataIndex: 'generate',
    },
    {
      title: '操作',
      slotName: 'option',
    },
  ];
  const data = reactive([
    {
      name: '嘉德广场系统运行报告2023年03月',
      date: '2023-03-31',
      createdate: '2023-04-01 03:05:41',
      generate: '需要手动发送邮件',
      pdfUrlsData: 'http://static.shanhuxueyuan.com/test.pdf',
    },
    {
      name: '嘉德广场系统运行报告2023年03月',
      date: '2023-03-31',
      createdate: '2023-04-01 03:05:41',
      generate: '需要手动发送邮件',
      pdfUrlsData: 'http://static.shanhuxueyuan.com/demo/excel.xlsx',
    },
  ]);
</script>

<style scoped>
  .container {
    padding: 10px;
  }
</style>
