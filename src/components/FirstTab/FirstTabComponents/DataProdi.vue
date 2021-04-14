<template>
  <div>
    <div class="data">
      <p>
        <b>Jumlah Program Studi <span class="bg-jml-Ak"> 12</span></b>
      </p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Jenis Akreditasi</th>
            <th scope="col">Jumlah</th>
            <th scope="col">Persentase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Akreditasi A</td>
            <td><div class="bg-jml-Ak" variant="warning">0</div></td>
            <td>
              <div class="bg-persentase-Ak" variant="warning">0%</div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <progress-bar :options="options" :value="80" /> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        text: {
          color: '#FFFFFF',
          shadowEnable: true,
          shadowColor: '#000000',
          fontSize: 14,
          fontFamily: 'Helvetica',
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: '#2dbd2d',
          backgroundColor: '#333333'
        },
        layout: {
          height: 100,
          width: 100,
          verticalTextAlign: 61,
          horizontalTextAlign: 43,
          zeroOffset: 0,
          strokeWidth: 30,
          progressPadding: 0,
          type: 'circle'
        }
      }
    }
  }
}
</script>
<style scoped>
.bg-jml-Ak {
  width: 70%;
  padding: 8px 3px;
  border-radius: 10px;
  background: #049dff;
  text-align: center;
}
.bg-persentase-Ak {
  padding: 8px 6px;
  width: 70%;
  background: #049dff;
  text-align: center;
  border-radius: 10px;
}
</style>
