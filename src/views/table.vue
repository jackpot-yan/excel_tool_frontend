<template>
  <div id="table">
    <input id="up" type="file" v-show="false" @change="dealfilechange"/>
    <div id="ttile">
      <el-button type="primary" @click="in_file">导入文件</el-button>
      <el-button type="primary" @click="out_file">导出文件</el-button>
    </div>
    <div id="luckysheet"></div>
  </div>
</template>
<script setup>
import {onMounted} from "vue";
import {ontPut, InPut} from "../api/api.js";


const options = {
  container: 'luckysheet',
  lang: 'zh',
  gridKey: 'demo',
  allowUpdate: true,
  updateUrl: 'ws://127.0.0.1:8085/tables/ws',
  loadUrl: 'http://127.0.0.1:8085/tables/load',
  updateImageUrl: '',
  isMaskShow: false,
  showtoolbarConfig: {
    print: false
  },
}


const initLuckysheet = () => {
  luckysheet.create(options)
}
const nextTick = () => {
  initLuckysheet()
}

onMounted(() => {
  nextTick()
})

const in_file = () => {
  document.getElementById('up').click()
}
const out_file = () => {
  const data = luckysheet.getAllSheets()
  ontPut({'data': data}).then((res) => {
    const file_path = res.data.file
    downloadFile('http://127.0.0.1:8085/tables/download?file_path=' + file_path, file_path)
  })
}

// const dealfilechange = (event) => {
//   const input = event.target
//   let files = input.files;
//   if (files) {
//     const file = files[0]
//     if (file.name.split('.').pop() !== 'xlsx') {
//       alert("文件格式错误！")
//     }
//     const formData = new FormData();
//     formData.append('file', files[0])
//     console.log(formData)
//     InPut(formData).then((res) => {
//       if (res.data.msg === 'success') {
//         location.reload()
//       }
//     })
//   }
// }


const downloadFile = (url, fileName) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'blob'
  xhr.onload = () => {
    if (xhr.status === 200) {
      const blob = xhr.response
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(link.href)
    }
  }
  xhr.send()
}
</script>
<style>
#table {
  width: 100%;
  height: 100%;
}

#luckysheet {
  width: 100%;
  height: 95%;
}
</style>
