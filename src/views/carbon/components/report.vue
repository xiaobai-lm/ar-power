<script setup lang="ts">
  // import JsPDF from 'jspdf';
  // import html2canvas from 'html2canvas';
  import { ref } from 'vue';
  import Table from '@/views/cooperation/setting/table.vue';
  //
  // const doc = new JsPDF();
  // const pdfDom = ref();
  //
  // const printPdf = () => {
  //   html2canvas(pdfDom.value).then(function (canvas) {
  //     document.body.appendChild(canvas);
  //     const jpeg = canvas.toDataURL('image/jpeg', 1.0);
  //     doc.addImage(jpeg, 'JPEG', 10, 10, 1000, 1000);
  //     doc.save('pdf');
  //   });
  // };
  const pdfTab = ref(true);
  const columns = [
    { title: '年度', dataIndex: 'year' },
    { title: '月份', dataIndex: 'month' },
    { title: '核算边界', dataIndex: 'year1' },
    { title: '月碳排放量 (tCO2)', dataIndex: 'year2' },
    { title: '操作', slotName: 'do' },
  ];
  const data = [
    { year: '2023', month: '1月', year1: 'V-2022-1.0', year2: '55.549' },
  ];
</script>

<template>
  <div v-if="pdfTab" class="report"
    ><div
      ><a-radio-group type="button" default-value="Beijing1" size="large">
        <a-radio value="Beijing1">月报告</a-radio>
        <a-radio value="Beijing">年报告</a-radio>
      </a-radio-group></div
    ><div>
      <a-table :columns="columns" :data="data">
        <template #do>
          <a-button type="text" @click="pdfTab = !pdfTab">查看</a-button>
        </template>
      </a-table>
    </div>
  </div>
  <div v-else style="position: relative; width: 100%">
    <!--    <div style="padding: 10px"> s </div>-->
    <!--    <button type="button" style="margin-top: 20px" @click="printPdf"-->
    <!--      >导出PDF</button-->
    <!--    >-->

    <iframe
      src="https://sci-hub.se/10.1098/rspa.2017.0334"
      height="700px;"
      width="100%"
      style="position: absolute; right: 0; top: 0"
    ></iframe>
    <a-button
      style="position: relative; top: 15px; left: 380px"
      type="primary"
      @click="pdfTab = !pdfTab"
      >返回</a-button
    >
  </div>
</template>

<style scoped lang="less">
  .report {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
  }
</style>
