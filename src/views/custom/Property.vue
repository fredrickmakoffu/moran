<template>
    <div id="wrapper">
        <div class="body">
            <navbar class="navbar-border-bottom pt-0 pb-0"></navbar>

            <breadcrumbs :breadcrumbs_data=breadcrumbs_data class="ps-4 pe-4 mt-2"></breadcrumbs>

            <section class="container property bg-white ps-4 pe-4">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-dark fw-bold">{{ property.name }}</h1>
                        <p>{{ property.address }}</p>
                    </div>

                    <div class="col-md-8 mt-4">
                        <div class="card border-0 d-flex overflow-hidden">
                          <div class="d-flex">
                            <img v-for="({image_url}, index) in property.images" :key="index" :src="'./storage/' + image_url" alt="" class="img-fluid ms-4 rounded" style="position: relative; right: 20px;">
                          </div>

                          <div class="bg-white border-0 circle">
                            <div class="d-flex p-4">
                              <font-awesome-icon class="text-dark fw-bold" :icon="['fas', 'arrow-right']"></font-awesome-icon>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex">
                          <figcaption class="ms-auto me-4 mt-1">Living Area</figcaption>
                        </div>
                        
                        <div class="mt-4">
                          <h5 class="text-dark mb-1 mt-2 fw-bold">Description</h5>
                          <p class="mt-4" style="font-size: 1.1rem;">{{ property.description }}</p> 
                          <div class="row mt-4">
                            <div class="col-md-6">
                              <p class="mt-2 mb-3" style="font-size: 18px;"> 
                                <font-awesome-icon class="me-2 text-success" style="font-size: 14px" :icon="['fas', 'location-arrow']"></font-awesome-icon> 
                                <span class="fw-bold">{{ property.address }} </span> 
                              </p>

                              <p class="mt-2 mb-3" style="font-size: 18px;"> 
                                <font-awesome-icon class="me-3 text-success" style="font-size: 14px" :icon="['fas', 'dollar-sign']"></font-awesome-icon> 
                                <span v-if="property.price" class="fw-bold">Ksh. {{ formatNumber(property.price) }} </span> 
                              </p>

                              <p class="mt-2 mb-3" style="font-size: 18px;"> 
                                <font-awesome-icon class="me-2 text-success" style="font-size: 14px" :icon="['fas', 'building']"></font-awesome-icon> 
                                <span class="text-capitalize fw-bold">{{ property.type }} </span>
                              </p>                              
                            </div>

                            <div class="col-md-6">
                              <p class="mt-2 mb-3" style="font-size: 18px;"> 
                                <font-awesome-icon class="me-2 text-success" style="font-size: 14px" :icon="['fas', 'house-user']"></font-awesome-icon> 
                                <span class="text-capitalize fw-bold">{{ property.bedrooms }} Bedrooms</span>
                              </p>

                              <p class="mt-2 mb-3" style="font-size: 18px;"> 
                                <font-awesome-icon class="me-2 text-success" style="font-size: 14px" :icon="['fas', 'house-user']"></font-awesome-icon> 
                                <span class="text-capitalize fw-bold">{{ property.bathrooms }} bathrooms</span>
                              </p>
                            </div>                        
                          </div>
                        </div>                    

                        <div class="mt-4">
                          <h5 class="text-dark mb-1 mt-2 fw-bold">Amenities</h5>
                          
                          <div class="row" >

                            <div v-for="({amenity}, index) in property.amenities" :key="index" class="col-md-3 col-sm-6 mt-4">
                              <div class="card bg-light p-2 pt-3 pb-3">
                                <h4 class="text-center">
                                <font-awesome-icon :icon="['fas', amenity_icons[amenity]]"></font-awesome-icon>
                                </h4>
                                <p class="text-center mb-0 mt-2">{{ amenity }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div class="col-md-4 mt-4">
                      <div class="card bg-light">
                        <div class="card-body">
                          <h4 class="text-dark">Interested in this property?</h4>
                          <small class="text-muted">Get in touch today</small>

                          <div class="form-row mt-4">
                            <div class="input-group">
                                <span class="input-group-text border-end-0 bg-white" style="border: 1px solid #eee">
                                    <font-awesome-icon class="ms-2" id="eye" :icon="['fa', 'user']" />
                                </span>

                                <input id="names" type="text" class="form-control border-start-0" placeholder="Enter your Full Names" required> 
                            </div>
                          </div>

                          <div class="form-row mt-4">
                            <div class="input-group">
                                <span class="input-group-text border-end-0 bg-white" style="border: 1px solid #eee">
                                    <font-awesome-icon class="ms-2" id="eye" :icon="['fa', 'envelope']" />
                                </span>

                                <input id="email" type="email" class="form-control border-start-0" placeholder="Enter your Last Name" required> 
                            </div>
                          </div> 

                          <div class="form-row mt-4">
                            <div class="input-group">
                                <span class="input-group-text border-end-0 bg-white" style="border: 1px solid #eee">
                                    <font-awesome-icon class="ms-2" id="eye" :icon="['fas', 'phone-alt']" />
                                </span>

                                <input id="phone_number" type="number" class="form-control border-start-0" placeholder="Enter your Phone Number" required> 
                            </div>
                          </div>

                          <div class="form-row mt-4">
                            <div class="input-group">
                                <span class="input-group-text border-end-0 bg-white" style="border: 1px solid #eee">
                                    <font-awesome-icon class="ms-2" id="eye" :icon="['fas', 'phone-alt']" />
                                </span>

                                <select name="purpose" id="purpose" class="form-select border-start-0">
                                  <option>Book a tour or show interest in property</option>
                                  <option value="tour">Book House Tour</option>
                                  <option value="purchase">Interested in Purchase</option>
                                </select>

                            </div>
                          </div>                          

                          <div class="form-row mt-4">
                            <div class="input-group">
                                <span class="input-group-text border-end-0 bg-white" style="border: 1px solid #eee">
                                    <font-awesome-icon class="ms-2" id="eye" :icon="['fas', 'comment']" />
                                </span>

                                <textarea style="line-height: 1.5" placeholder="You can write us a message here if you want to." class="form-control border-start-0" name="description" id="description" rows="7"></textarea>
                            </div>
                            <small class="text-muted">Optional field</small>
                          </div>   

                          <div class="btn btn-success btn-lg w-100 mt-4">
                            <span class="text-uppercase">Submit</span>
                            <font-awesome-icon class="ms-3" :icon="['fas', 'angle-right']"></font-awesome-icon>
                          </div>                                                                           
                        </div>
                      </div>
                    </div>
                </div>
            </section>

            <main-footer v-if="page_props.footer" :page="'Home'" v-model:prop_data="page_props.footer"></main-footer>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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

  .form-select, .form-control {
    line-height: 3;
    border: 1px solid #eee;
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
    props: ['property_id'],
    components: {
      Navbar,
      Breadcrumbs,
      MainFooter
    }, 
    computed: {
      page_props () {
        return this.$store.state.page_props
      }
    },      
    data() {
      return {
        title: {status: true, title: 'Your Data', actions: true},
        breadcrumbs_data: [
          {title: 'Home', link: '', active: false},
          {title: 'Property', active: true},
        ],
        screen: 0,
        property: {},
        amenity_icons: {
          'Wi-Fi': 'wifi',
          'CCTV': 'video',
          'Gym': 'dumbbell',
          'Swimming Pool': 'swimming-pool',
          '24 Hour Security': 'lock',
          'Parking Spots': 'parking',
          'Outdoor Space': 'spa',
          'Elevator': 'sort',
          'Generator': 'bolt',
          'Borehole': 'hand-holding-water',

        }
      } 
    },
    mounted() {
      this.getProperty()
    },
    methods: {
      changeScreen(value) {
        this.screen = value
      },
      formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      },
      getProperty() {
        this.axios.get('api/property/' + this.property_id).then((response) => {
          this.property = response.data.data
        }).catch(() => {
          this.$router.push({name: 'Properties'});
        })
      }
    }
  }
</script>
