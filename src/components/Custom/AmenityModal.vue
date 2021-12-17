<template>
    <!-- Modal -->
    <div class="modal fade" id="amenity" tabindex="-1" role="dialog" aria-labelledby="amenityLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content" style="overflow-y: scroll">
                <div class="modal-header pb-0">
                    <span class="d-block">
                        <h5 class="content-title-min">Amenities</h5>
                        <p v-if="screen == 1" class="text-muted">Click to add more property amenities</p>
                    </span>
                </div>

                <form action="#" @submit.prevent="handleSubmit()">
                    
                    <status v-model:status_data=status_data></status>

                    <div class="modal-body pt-0">
                        <span class="row" v-if="screen == 1">
                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="wi_fi" style="cursor: pointer" @click="setAmenity('Wi-Fi')">
                                    <h4 class="text-center">
                                        <font-awesome-icon :icon="['fas', 'video']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">Wi-Fi</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="cctv" style="cursor: pointer" @click="setAmenity('CCTV')">
                                    <h4 class="text-center">
                                        <font-awesome-icon :icon="['fas', 'video']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">24 CCTV</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="24_hour_security" style="cursor: pointer" @click="setAmenity('24 Hour Security')">
                                    <h4 class="text-center">
                                        <font-awesome-icon :icon="['fas', 'lock']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">24 H security</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="gym" style="cursor: pointer" @click="setAmenity('Gym')">
                                    <h4 class="text-center">
                                        <font-awesome-icon :icon="['fas', 'dumbbell']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">Gym</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="swimming_pool" style="cursor: pointer" @click="setAmenity('Swimming Pool')">
                                    <h4 class="text-center">
                                        <font-awesome-icon :icon="['fas', 'swimming-pool']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">Swimming pool</p>
                                </div>
                            </div> 

                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="borehole" style="cursor: pointer" @click="setAmenity('Borehole')">
                                    <h4 class="text-center">
                                        <font-awesome-icon :icon="['fas', 'hand-holding-water']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">Borehole</p>
                                </div>
                            </div> 

                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="generator" style="cursor: pointer" @click="setAmenity('Generator')">
                                    <h4 class="text-center">
                                        <font-awesome-icon :icon="['fas', 'bolt']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">24 H Generator</p>
                                </div>
                            </div> 
                                
                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="elevator" style="cursor: pointer" @click="setAmenity('Elevator')">
                                    <h4 class="text-center" style="border-radius: 50%;
                                        margin: auto;
                                        width: 40px;
                                        height: 40px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        border: 1px solid;">
                                        <font-awesome-icon :icon="['fas', 'sort']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">Elevator</p>
                                </div>
                            </div> 

                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="parking_spots" style="cursor: pointer" @click="setAmenity('Parking Spots')">
                                <h4 class="text-center">
                                    <font-awesome-icon :icon="['fas', 'parking']"></font-awesome-icon>
                                </h4>
                                <p class="text-uppercase text-center mb-0 mt-2">27 Parking Spots</p>
                                </div>
                            </div> 


                            <div class="col-md-6 col-sm-6 mt-4">
                                <div class="card bg-light p-2 pt-3 pb-3" id="outdoor_space" style="cursor: pointer" @click="setAmenity('Outdoor Space')">
                                    <h4 class="text-center">
                                        <font-awesome-icon :icon="['fas', 'spa']"></font-awesome-icon>
                                    </h4>
                                    <p class="text-uppercase text-center mb-0 mt-2">Outdoor Space</p>
                                </div>
                            </div>   

                            <div class="row mt-4 pe-0">
                                <div class="col-md-12 mt-2 d-flex"> 
                                    <button type="button" class="btn btn-dark text-white w-75 me-2" @click="saveAmenities()">
                                        Save
                                    </button>  

                                    <button type="button" class="btn btn-secondary text-white w-25" @click="changeScreen(2)">
                                        <font-awesome-icon class="ms-2" :icon="['fas', 'angle-right']"></font-awesome-icon>
                                    </button>                        
                                </div>
                            </div>  
                        </span>
                    </div>               
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../assets/scss/layout/_form.scss';
</style>

<script>
import Status from '../../components/Status';

export default {
    name: "AmenityModal",
    components: {
        Status
    },
    data() {
        return {
            screen: 1,
            property: [],
            amenities: [],
            in_amenities: [],
            set_amenities: [],
            remove_amenities: [],
            status_data: {
                "success": false,
                "success_message": '',
                "error": false,
                "error_message": '',
                "loading": false
            },
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
    computed: {
        modal_list () {
            return this.$store.state.modal_list
        }
    },    
    watch: {
        modal_list: function() {
            this.property = this.$store.state.modal_list
            this.amenities = []
            this.setAmenities(this.property.amenities)
        }
    },
    methods: {
        setAmenity(value) {
            if(!this.in_amenities.includes(value)) {
                this.amenities.push({
                    amenity: value, 
                    property_id: this.property.id
                })

                this.in_amenities.push(value)
                this.highlightElement(value, 'add')

            } else {
                var i = 0

                while (i < Object.keys(this.amenities).length) {
                    if(this.amenities[i].amenity == value) {
                        this.amenities.splice(i, 1);
                        delete this.in_amenities[i]
                    }

                    i++
                }

                if(this.set_amenities.includes(value)) {
                    this.remove_amenities.push({
                        amenity: value, 
                        property_id: this.property.id
                    })
                }

                console.log(this.remove_amenities)
                this.highlightElement(value, 'remove')
            }
        },
        setAmenities(amenities) {
            var i = 0

            while(i < Object.keys(amenities).length) {
                let value = amenities[i].amenity

                this.amenities.push({
                    amenity: value, 
                    property_id: this.property.id
                })                  

                this.in_amenities.push(value)
                this.set_amenities.push(value)
                this.highlightElement(value, 'add')
                
                i++
            }
        },
        saveAmenities() {
            this.axios.post('api/amenity', this.amenities).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        },
        highlightElement(value, action) {
            let id = ''

            if(value.indexOf(' ') !== -1) {
                id = value.split(' ').map((element) => {
                    return element.toLowerCase()
                }).join('_')
            } else {
                id = value.split('-').map((element) => {
                    return element.toLowerCase()
                }).join('_')
            }   

            if(action == 'add') {
                document.getElementById(id).classList.add('bg-primary', 'border-0', 'text-white');     
            } else if(action == 'remove') {
                document.getElementById(id).classList.remove('bg-primary', 'border-0', 'text-white');     
            }       
        }
    }
}
</script>