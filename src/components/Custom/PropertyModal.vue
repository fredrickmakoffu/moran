<template>
    <!-- Modal -->
    <div class="modal fade" id="property" tabindex="-1" role="dialog" aria-labelledby="propertyLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
            <div class="modal-header pb-0">
                <span class="d-block">
                    <h5 class="content-title-min">Property</h5>
                    <p class="text-muted">Add/Edit property details</p>
                </span>
            </div>

            <form action="#" @submit.prevent="handleSubmit()">
                
                <status v-model:status_data=status_data></status>

                <div class="modal-body pt-0">
                    <span v-if="screen == 1">
                        <div class="form-row mt-3">
                        <label for="name" class="fw-bold mb-2">Name</label>
                            <div class="input-group">                     
                                <input v-model="property.name" id="name" type="text" class="form-control no-border" placeholder="Enter Property Name." required>
                            </div>
                        </div>

                        <div class="form-row mt-3">
                        <label for="name" class="fw-bold mb-2">Description</label>
                            <div class="input-group">                     
                                <textarea v-model="property.description" id="description" type="text" class="form-control no-border" placeholder="Enter description." required></textarea>
                            </div>
                        </div>

                        <div class="form-row mt-3">
                            <label for="address" class="fw-bold mb-2">Address</label>
                            <div class="input-group">
                                <input v-model="property.address" id="address" type="text" class="form-control no-border" placeholder="Enter Address." required>
                            </div>
                        </div>

                        <div class="form-row mt-3">
                            <label for="featured" class="fw-bold mb-2">Featured</label>
                            <div class="input-group">
                                <select v-model="property.featured" id="featured" class="form-control no-border" required>
                                    <option value=""></option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                        </div>                        


                        <div class="row mt-4 pe-0">
                            <div class="col-md-12 mt-2 d-flex"> 
                                <button type="button" class="btn btn-secondary text-white ms-auto pe-4 ps-4" @click="changeScreen(2)">
                                    Next <font-awesome-icon class="ms-2" :icon="['fas', 'angle-right']"></font-awesome-icon>
                                </button>                        
                            </div>
                        </div>   
                    </span>
                    
                    <span v-if="screen == 2">
                        <div class="row">
                            <div class="col-md-6 mt-3">
                                <label for="sale_type" class="fw-bold mb-2">Sale</label>

                                <div class="input-group">
                                    <select v-model="property.sale_type" id="sale_type" class="form-select">
                                        <option></option>
                                        <option value="buy">To Buy</option>
                                        <option value="sell">To Sell</option>
                                    </select> 
                                </div>
                            </div>

                            <div class="col-md-6 mt-3">
                                <label for="type" class="fw-bold mb-2">Type</label>
                                <div class="input-group">
                                    <select v-model="property.type" id="type" class="form-select">
                                        <option></option>
                                        <option value="villa">Villa</option>
                                        <option value="apartment">Apartment</option>
                                        <option value="bungalow">Bungalow</option>
                                    </select>
                                </div>
                            </div>
                        </div>              

                        <div class="row">
                            <div class="col-md-6 mt-3">
                                <label for="bathrooms" class="fw-bold mb-2">Bathrooms</label>

                                <div class="input-group">
                                    <input v-model="property.bathrooms" id="bathrooms" type="number" class="form-control" placeholder="Enter no. of bathrooms." required> 
                                </div>
                            </div>

                            <div class="col-md-6 mt-3">
                                <label for="bedrooms" class="fw-bold mb-2">Bedrooms</label>
                                <div class="input-group">
                                    <input v-model="property.bedrooms" id="bedrooms" type="text" class="form-control" placeholder="Enter no. bedrooms." required> 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mt-3">
                                <label for="sale_type" class="fw-bold mb-2">Price</label>

                                <div class="input-group">

                                <input v-model="property.price" id="price" type="number" class="form-control no-border" placeholder="Enter Property Price." required>
                                </div>
                            </div>

                            <div class="col-md-6 mt-3">
                                <label for="floor_size" class="fw-bold mb-2">Floor Area</label>
                                <div class="input-group">

                                <input v-model="property.floor_area" id="floor_area" type="number" class="form-control no-border" placeholder="Enter Floor Area." required>
                                </div>
                            </div>

                            <div class="row mt-4 pe-0">
                                <div class="col-md-12 mt-2 d-flex pe-0">
                                    <button type="button" class="btn btn-secondary text-white me-2 ps-4 pe-4 w-25" @click="changeScreen(1)">
                                        <font-awesome-icon class="me-2" :icon="['fas', 'angle-left']"></font-awesome-icon> Previous
                                    </button>       

                                    <button type="submit" class="btn btn-dark w-75">
                                        Submit
                                    </button>                   
                                </div>
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
        name: 'PropertyModal',
        components: {
            Status
        },
        props: {    
            list_data: {
                required: false,
                type: Array
            },
            property_id: {
                required: false,
                type: Number
            }         
        },
        computed: {
            modal_list () {
                return this.$store.state.modal_list
            }
        },  
        watch: {
            modal_list: function() {
                if(Object.keys(this.$store.state.modal_list).length > 0) {
                    this.property = {
                        name: this.$store.state.modal_list.name,
                        description: this.$store.state.modal_list.description,
                        address: this.$store.state.modal_list.address,
                        price: this.$store.state.modal_list.price,
                        floor_area: this.$store.state.modal_list.floor_area,
                        bedrooms: this.$store.state.modal_list.bedrooms,
                        bathrooms: this.$store.state.modal_list.bathrooms,
                        featured: this.$store.state.modal_list.featured,
                        type: this.$store.state.modal_list.type,
                        sale_type: this.$store.state.modal_list.sale_type,
                        id: this.$store.state.modal_list.id,
                    }
                } else {
                    this.property = this.$store.state.modal_list
                }
            }
        },
        data() {
            return {
                screen: 1,
                property: [],
                status_data: {
                    "success": false,
                    "success_message": 'Form Submission was successful!',
                    "error": false,
                    "error_message": 'There are some errors.',
                    "loading": false
                },
            }
        },
        methods: {
            changeScreen(value) {
                this.screen = value
            },
            handleSubmit() {
                this.status_data.loading = true

                if(this.property.id) {
                    this.axios.put('api/property/' + this.property.id, this.property).then(() => {
                        this.status_data.loading = false
                        this.status_data.success = true
                        this.status_data.success_message = 'Success!'
                    }).catch((error) => {
                        this.status_data.loading = false
                        this.status_data.error = true
                        this.status_data.error_message = error
                    })
                } else {
                    console.log(this.property)
                    
                    this.axios.post('api/property', this.property).then(() => {
                        this.status_data.loading = false
                        this.status_data.success = true
                        this.status_data.success_message = 'Success!'                        
                    }).catch((error) => {
                        this.status_data.loading = false
                        this.status_data.error = true
                        this.status_data.error_message = error
                    })

                }
            },
        }
    }
</script>