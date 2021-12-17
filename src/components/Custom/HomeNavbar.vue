<template>
  <nav class="navbar navbar-transparent bg-transparent border-0 position-absolute w-100" style="z-index: 7">
    <div class="container">

      <span class="navbar-start nav-menu-bar">

        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <a class="text-decoration-none link" @click="openNav()" style="cursor: pointer">
              <font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon>
            </a>
          </span>
        </div>

      </span>

      <!-- <div class="navbar-brand ps-4">
        <span style="display: -webkit-inline-box;">
          <img :src="require('../../assets/img/logo.png')" alt="" class="img-fluid" style="width: 50px">
        </span>
      </div> -->


      <span class="navbar-left nav-options">
        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <a class="text-decoration-none link text-white" @click="changeSection('services')">
              <span :class="['text-uppercase']">Services</span>
            </a>
          </span>
        </div>  

        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <a class="text-decoration-none link text-white" @click="changeSection('partners')">
              <span :class="['text-uppercase']">Partners</span>
            </a>
          </span>
        </div>  

        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <a class="text-decoration-none link text-white" @click="changeSection('testimonials')">
              <span :class="['text-uppercase']">Testimonials</span>
            </a>
          </span>
        </div>  

        <div class="navbar-brand">
          <span style="display: -webkit-inline-box;">
            <a href="#contacts" class="text-decoration-none link text-white" @click="changeSection('contacts')">
              <span :class="['text-uppercase']">Contacts</span>
            </a>
          </span>
        </div>           
      </span>      

      <profile></profile>

      <div class="divider mt-4 d-none"></div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/layout/_navbar.scss';
  @import '../../assets/scss/helpers/_breakpoints.scss';
  @import '../../assets/scss/abstracts/_colors.scss';
  @import '../../assets/scss/abstracts/_variables.scss';

  .link {
    cursor: pointer;
    font-size: 13px;
    letter-spacing: 1px;

    &:hover {
      font-weight: 600;
      color: $info-color!important;
      text-decoration: underline!important;
      text-underline-offset: 15px;
      text-decoration-thickness: 2px!important;
    }
  }
  
  .nav-menu-bar {
    a {
      color: $dark-color;
      @include media("<=tablet") {
        color: #fff;
      }
    }
  }

  .nav-options {
    @include media("<=tablet") {
      display: none!important;
    }
  }

</style>

<script>
import Profile from '../../components/Profile';

export default {
    name: 'Navbar',
    components: {
      Profile
    },
    data() {
      return {
        color: 'dark',
        section: 'headliner'    
      }
    },
    methods: {
      toggled() { 
        document.querySelector('#sidebar-wrapper').classList.add('toggled');
        document.querySelector('.backdrop').classList.add('on');
      },
      changeSection(value) {
        this.section = value
        document.getElementById(value).scrollIntoView(true);
      },
      openNav() {
        document.getElementById('open-nav').classList.remove('d-none');
      }
    }
}
</script>