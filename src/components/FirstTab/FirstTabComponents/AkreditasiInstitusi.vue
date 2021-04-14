<template>
  <div>
    <button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      <h4 v-if="visible === false">+</h4>
      <h4 v-else-if="visible === true">-</h4>
    </button>
    <span> AKREDITASI INSTITUSI</span>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Institusi</th>
              <th scope="col">Akreditasi</th>
              <th scope="col">Nomor SK</th>
              <th scope="col">Status Expired</th>
              <th scope="col">Reminder Pembuatan Borang</th>
              <th scope="col">Batas Akhir Submit SPM</th>
              <th scope="col">Batas Akhir Submit Sapto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Institut Teknologi Telkom Purwokerto</th>
              <td>
                <div
                  style="
                    background: #de584d;
                    border-radius: 50%;
                    padding-top: 18px;
                    width: 60px;
                    height: 60px;
                    text-align: center;
                  "
                >
                  Baik
                </div>
              </td>
              <td>
                <p><b>AKT/BAN-PT/47/Akred</b></p>
                <p style="background: #de584d">Sertifikat tak tersedia</p>
                <p>10 Dec 2019 s.d 10 Dec 2024</p>
              </td>
              <td>3 tahun 10 bulan 22 hari</td>
              <td>10 May 2024</td>
              <td>10 May 2024</td>
              <td>10 May 2024</td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
button {
  border: 0;
  background: none;
}
</style>
