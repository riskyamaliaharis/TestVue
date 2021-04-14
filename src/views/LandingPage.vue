<template>
  <div>
    <Navbar />
    <b-container class="main-container" fluid>
      <b-tabs
        active-nav-item-class="font-weight-bold text-uppercase text-danger"
        content-class="mt-3"
        align="right"
      >
        <div>
          <b-tab title="Akreditasi BAN PT" active><Tab1 /></b-tab>
          <b-tab title="Akreditasi International"
            ><p>I'm the second tab</p></b-tab
          >
          <b-tab title="Pencapaian"><p>I'm the third tab</p></b-tab>
        </div>
      </b-tabs>
    </b-container>
    <Footer style="text-align: center" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Tab1 from '../components/FirstTab/AkreditasiBANPT'
import Footer from '../components/Footer'
export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Tab1,
    Footer
  }
}
</script>

<style scoped>
.main-container {
  min-height: 600px;
}
</style>
