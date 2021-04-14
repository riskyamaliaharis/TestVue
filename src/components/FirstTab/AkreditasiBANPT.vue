<template>
  <div>
    <b-row>
      <b-col md="8" sm="8" cols="12">
        <DataProdi />
      </b-col>

      <b-col md="4" sm="4" cols="12">
        <StatusAkreditasi />
      </b-col>
    </b-row>
    <ProgresAkreditasi />
    <AkreditasiInstitusi />
    <ProdiReakreditasi />
  </div>
</template>

<script>
import DataProdi from './FirstTabComponents/DataProdi'
import StatusAkreditasi from './FirstTabComponents/AkreditasiStatus'
import ProgresAkreditasi from './FirstTabComponents/ProgresAkreditasi'
import AkreditasiInstitusi from './FirstTabComponents/AkreditasiInstitusi'
import ProdiReakreditasi from './FirstTabComponents/ProdiReakreditasi'
export default {
  components: {
    DataProdi,
    StatusAkreditasi,
    ProgresAkreditasi,
    AkreditasiInstitusi,
    ProdiReakreditasi
  }
}
</script>
