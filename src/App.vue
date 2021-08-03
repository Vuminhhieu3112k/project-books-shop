<template>
    <Header/>
    <div id="wp-content">
      <div class="grid wide">
        <router-view/>
      </div>
    </div>
    <Footer />
</template>

<script>

import Header from './components/header/header.vue';
import Footer from './components/footer/foote.vue'

export default ({
  data(){
    return
  },
  components:{
    Header,
    Footer
  }
})
</script>

