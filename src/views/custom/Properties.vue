<template>
  <div id="wrapper">
    <div class="body">
      <navbar class="navbar-border-bottom pt-0 pb-0"></navbar>

      <section class="text-center container">
        <div class="row pt-4">
          <div class="d-flex">
            <breadcrumbs :breadcrumbs_data=breadcrumbs_data class="ms-auto me-4"></breadcrumbs>
          </div>

          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light fw-bold text-dark">Search through <span class="text-danger" style="text-decoration: underline; text-underline-offset: 8px">all</span> properties</h1>
          </div>

          <div class="row d-flex mt-4 p-4">

            <div class="col-md-2 col-sm-12 mt-4">
              <div class="form-row">
                <div class="input-group">
                  <select class="form-select text-secondary" aria-label="Default select example">
                    <option selected>Choose Locations</option>
                    <option value="1">Nairobi</option>
                    <option value="2">Mombasa</option>
                    <option value="3">Thika</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-12 mt-4">
              <div class="form-row">
                <div class="input-group">
                  <select class="form-select text-secondary" aria-label="Default select example">
                    <option selected>Property type</option>
                    <option value="1">Mansionettes</option>
                    <option value="2">Bungalow</option>
                    <option value="3">Apartments</option>
                  </select>
                </div>
              </div>
            </div>                  

            <div class="col-md-2 col-sm-12 mt-4">
              <div class="form-row">
                <div class="input-group">
                  <select class="form-select text-secondary" aria-label="Default select example">
                    <option selected>Bedrooms</option>
                    <option value="1">Studio</option>
                    <option value="2">1 bedroom</option>
                    <option value="3">2 bedrooms</option>
                    <option value="3">3 bedrooms</option>
                    <option value="4">4 bedrooms</option>
                  </select>
                </div>
              </div>
            </div>                  

            <div class="col-md-2 col-sm-12 mt-4">
              <div class="form-row">
                <div class="input-group">
                  <select class="form-select text-secondary" aria-label="Default select example">
                    <option selected>Set Min Price</option>
                    <option value="1">Price 1</option>
                    <option value="2">Price 2</option>
                    <option value="3">Price 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-12 mt-4">
              <div class="form-row">
                <div class="input-group">
                  <select class="form-select text-secondary" aria-label="Default select example">
                    <option selected>Set Max Price</option>
                    <option value="1">Price 1</option>
                    <option value="2">Price 2</option>
                    <option value="3">Price 3</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-12 mt-4">
              <button class="btn btn-danger w-75" style="line-height: 3">
                Search <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
              </button>
            </div>
          </div>
        </div>

        <div class="d-flex">
          <div class="bg-light mx-auto rounded w-50 mt-2" style="padding-top: 2px"></div>
        </div>
      </section>

      <section class="property container mb-4 navbar-border-bottom">
        <div class="row">
          <div class="d-flex mt-4 pe-4">
            <p class="ms-auto text-secondary fw-bold mb-0">Showing 25 properties</p>
          </div>
          
            <div class="col-md-4 col-sm-12 mt-4" v-for="({name, address, bedrooms, bathrooms, created_at, index}) in properties" :key="index">
                <div class="card rounded" style="box-shadow: 0 4px 8px rgb(0 0 0 / 3%); border-color: #eee;">
                    <img :src="require('../../assets/img/property.jpg')" alt="">

                    <div class="card-body">
                        <router-link class="text-decoration-none" :to="'property'">
                            <h6 class="text-dark fw-bold">{{ name }}</h6>
                        </router-link>
                        <p class="text-muted">{{ bedrooms }} bedrooms, {{ bathrooms }} bathrooms</p>

                        <div class="d-flex mt-4">
                            <p>&bull; {{ address }}</p>
                            <p class="ms-auto fst-italic">{{ created_at.substring(0, 10) }}</p>
                        </div>
                    </div>
                </div>
            </div>                                                                                                                                
        </div>
        <div class="row">
          <div class="col-md-12 d-flex">
            <div class="mx-auto">

              <button class="btn btn-dark mt-4 me-2">
                <p class="text-uppercase fw-bold mb-0">
                  <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
                </p>
              </button>

              <button class="btn btn-dark me-3 mt-4 ps-4 pe-4">
                <p class="text-uppercase fw-bold mb-0" style="letter-spacing: 4px">Load More</p>
              </button>
            </div>
          </div>
        </div>  
      </section>

      <section id="tagline" class="text-center container mb-4">
        <h1 class="text-dark fw-bold">Let us know if you need something more <span class="text-danger" style="text-decoration: underline; text-underline-offset: 8px">tailored</span></h1>

        <router-link :to="'/'" class="btn btn-danger btn-lg mt-4">
          Contact Us <font-awesome-icon class="ms-2" :icon="['fas', 'comment']"></font-awesome-icon>
        </router-link>
      </section>

      <main-footer v-if="page_props.footer" :page="'Home'" v-model:prop_data="page_props.footer"></main-footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/abstracts/_variables.scss';
  .body {
    padding-left: 0!important;
  }

  .navbar-border-bottom {
    border-bottom: 1px solid #fafafa !important;
    box-shadow: 0 4px 8px rgb(0 0 0 / 3%);
  }

  .property {
    padding-top: 1rem;
    padding-bottom: 5rem;
  }
  

  #tagline {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .form-select, .form-control {
    line-height: 3;
    border: 1px solid #eee;
  }


  .form-select option{
    color: $dark-color;
  }

  .form-select option:first-child{
    color: $secondary-secondary-color;
  }

  .card {
    border: 1px solid #eee;
  }

  .image-backdrop {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    
    &:hover {
      z-index: 5;
      background: #000;
      opacity: 0.4;
    }
  }
  .circle {
    width: 60px;
    height: 65px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    z-index: 6;
    position: absolute;
    right: 0;
    top: 50%;
    bottom: 50%;
    cursor: pointer;
  }

</style>

<script>
  import Breadcrumbs from '../../components/AutoBreadcrumbs'
  import Navbar from '../../components/Custom/PropertyNavbar'
  import MainFooter from '../../components/Footer'

  export default {
    name: 'Home',
    components: {
      Navbar,
      Breadcrumbs,
      MainFooter
    }, 
    data() {
      return {
        title: {status: true, title: 'Your Data', actions: true},
        screen: 0,
        breadcrumbs_data: [
          {title: 'Home', link: '', active: false},
          {title: 'Properties', active: true},
        ],
        properties: {},
        size: 12,
        page: 0
      } 
    },
    computed: {
      page_props () {
        return this.$store.state.page_props
      }
    }, 
    mounted() {
      this.getProperties()
    },
    methods: {
      changeScreen(value) {
        this.screen = value
      },
      getProperties() {
        this.loading = true
        this.axios.get('api/property?size='+ this.size + '&page=' + this.page).then((response) => {
          this.properties = response.data.data
          this.loading = false
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>
