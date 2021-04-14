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
    <span> PROGRESS AKREDITASI</span>

    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Tahun</th>
              <th scope="col">Buku Borang</th>
              <th scope="col">Progress LED</th>
              <th scope="col">Progress LKPS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in data" :key="i">
              <th>{{ item.year }}</th>
              <td>
                <div>
                  <b-media>
                    <template #aside>
                      <img
                        src="../../../assets/icon/Document-icon.png"
                        width="54"
                        alt=""
                      />
                    </template>

                    <h5 class="mt-0">{{ item.prodi }}</h5>
                    <p class="mb-0">{{ item.fakultas }} (TTP)</p>
                    <p>last updated by {{ item.updatedBy }} 02/11/2020 13.20</p>
                  </b-media>
                </div>
              </td>
              <td>
                <b-row>
                  <b-col cols="auto" style="background: yellow">D</b-col>
                  <b-col cols="auto" style="background: blue">A</b-col>
                  <b-col cols="auto" style="background: green">C.12</b-col>
                  <b-col cols="auto" style="background: orange">C.13</b-col>
                </b-row>
              </td>
              <td>
                <b-row>
                  <b-col cols="auto" style="background: yellow">D</b-col>
                  <b-col cols="auto" style="background: blue">A</b-col>
                  <b-col cols="auto" style="background: green">C.12</b-col>
                  <b-col cols="auto" style="background: orange">C.13</b-col>
                </b-row>
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      visible: false
    }
  },
  created() {
    this.getDataAkreditasi()
  },
  computed: {
    ...mapGetters({ data: 'getAkreditasi' })
  },
  methods: {
    ...mapActions(['getDataAkreditasi'])
  }
}
</script>

<style scoped>
button {
  border: 0;
  background: none;
}
</style>
