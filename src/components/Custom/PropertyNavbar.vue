<template>
  <nav :class="'navbar'">
    <div class="container">
      
      <div class="navbar-brand ps-4">
        <span style="display: -webkit-inline-box;">
          <img :src="require('../../assets/img/kipekee.png')" alt="" class="img-fluid" style="width: 82px">
        </span>
      </div>

      <span class="navbar-left">

        <div class="navbar-brand">
          <span class="text-dark" style="display: -webkit-inline-box;">
            <a href="#team" class="text-decoration-none link" @click="changeSection('team')">
              <span :class="['text-uppercase text-dark', {active: section == 'filter'}]">Filter</span>
            </a>
          </span>
        </div>

        <div class="navbar-brand">
          <span class="text-dark" style="display: -webkit-inline-box;">
            <a href="#services" class="text-decoration-none link" @click="changeSection('services')">
              <span :class="['text-uppercase text-dark', {active: section == 'property'}]">Property</span>
            </a>
          </span>
        </div>        

        <div class="navbar-brand">
          <span class="text-dark" style="display: -webkit-inline-box;">
            <a href="#contact" class="text-decoration-none link" @click="changeSection('contact')">
              <span :class="['text-uppercase text-dark', {active: section == 'contact'}]">Contacts</span>
            </a>
          </span>
        </div>        
      </span>

      <div class="divider mt-4 d-none"></div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/layout/_navbar.scss';
  @import '../../assets/scss/abstracts/_colors.scss';

  .link {
    -webkit-transition: .1s all;   
    -webkit-transition-delay: .1s; 
    -moz-transition: .1s all;   
    -moz-transition-delay: .1s; 
    -ms-transition: .1s all;   
    -ms-transition-delay: .1s; 
    -o-transition: .1s all;   
    -o-transition-delay: .1s; 
    transition: .1s all;   
    transition-delay: .1s;

    cursor: pointer;
    letter-spacing: 1px;
    font-size: 13px;

    .active {
      color: $danger-color!important;
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 16px;
      text-decoration-thickness: 4px;
    }

    &:hover {
      font-weight: 600;
      text-decoration: underline!important;
      text-underline-offset: 24px;
      text-decoration-thickness: 4px!important;
      text-decoration-color: #333!important;

      transition-delay: .1s;
      -webkit-transition-delay: 0s;
      -moz-transition-delay: 0s;
      -ms-transition-delay: 0s;
      -o-transition-delay: 0s;
      transition-delay: 0s;
    }
  }
</style>

<script>
export default {
    name: 'Navbar',
    data() {
      return {
        color: 'dark',
        section: ''    
      }
    },
    methods: {
      toggled() { 
        document.querySelector('#sidebar-wrapper').classList.add('toggled');
        document.querySelector('.backdrop').classList.add('on');
      },
      changeSection(value) {
        this.section = value
      }
    }
}
</script>