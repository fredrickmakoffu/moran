<template>
    <div class="container p-4">
        <div class="position-absolute cog p-4">
            <button class="btn btn-dark bg-gradient btn-sm" data-bs-toggle="modal" data-bs-target="#partnersProps">
                <font-awesome-icon :icon="['fas', 'cogs']"></font-awesome-icon>
            </button>
        </div>

        <div class="pb-4 text-center">
            <p class="text-white text-uppercase mb-2 fw-bold" style="letter-spacing: 2.5px;">{{ prop_data.title }}</p>
            <h3 style="letter-spacing: -1px; font-weight: 200;">{{ prop_data.tagline }}</h3>
        </div>
        
        <div class="row mt-4 ps-4 pe-4">
            <div class="col-md-3 col-sm-6 mt-4" v-for="({link, image, title}, index) in prop_data['partner-items']" :key=index>
                <div class="d-flex">
                    <a target="_blank" :href="link" class="text-decoration-none">
                        <div class="d-flex">
                            <img :src="require('../../../assets/img/' + image)" alt="" class="img-fluid partner-image mx-auto">
                        </div>
                        <figcaption class="text-muted text-center mt-2">{{ title }}</figcaption>
                    </a>
                </div>
            </div>                                                                                          
        </div>
    </div>

    <div class="modal fade" id="partnersProps" tabindex="-1" aria-labelledby="partnersPropsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body container">
                    <div class="row">
                        <status v-model:status_data=status_data></status>
                        
                        <form action="#" @submit.prevent="submit(form_data, [false, ''], 'partners')" v-show="screen == 1">
                            <span class="d-block w-100">
                                <h5 class="text-dark text-center">Edit Section Details</h5>
                            </span>
                            
                            <div class="row mb-4">
                                <label for="title" class="fw-bold mb-2">Title</label>
                                <div class="input-group">
                                    <input id="title" type="text" class="form-control" v-model="form_data.title" required>
                                </div>
                                <small class="text-muted">Enter your title.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="tagline" class="fw-bold mb-2">Tagline</label>
                                <div class="input-group">
                                    <input id="tagline" type="text" class="form-control" v-model="form_data.tagline" required> 
                                </div>
                                <small class="text-muted">Enter your tagline.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="image" class="fw-bold mb-2">Background color</label>

                                <div class="input-group">
                                    <select id="background_color" class="form-select" v-model="form_data.background_color" required>
                                        <option></option>
                                        <option value="white">White</option>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="burgundy">Burgundy</option>
                                    </select>
                                </div>
                                <small class="text-muted">Enter the background color.</small>
                            </div>

                            <div class="row mb-4 mt-2">
                                <div class="col-md-12 mt-2 d-flex">
                                    <button type="submit" class="btn btn-dark w-75 me-2">
                                        Submit
                                    </button>

                                    <button type="button" class="btn bg-secondary text-white w-25" @click="changeScreen(2)">
                                        <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
                                    </button>
                                </div>
                            </div>                              
                        </form>

                        <form action="#"  @submit.prevent="submit(partners, [false, ''], 'partner-items', true)" v-show="screen == 2">
                            <p class="text-burgundy fw-bold">Add a Partner entry</p>
                            <div class="row mb-4">
                                <label for="partners.title" class="fw-bold mb-2">Title</label>

                                <div class="input-group">
                                    <input id="partners.title" type="text" class="form-control" v-model="partners.title" required>
                                </div>

                                <small class="text-muted">Enter your title.</small>
                            </div>  

                            <div class="row mb-4">
                                <label for="line" class="fw-bold mb-2">Link</label>

                                <div class="input-group">
                                    <input type="text" id="partners.text" rows="2" class="form-control" v-model="partners.link" required>
                                </div>
                                <small class="text-muted">Enter the link.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="line" class="fw-bold mb-2">Image</label>

                                <div class="input-group">
                                    <input type="text" id="partners.image" rows="2" class="form-control" v-model="partners.image" required>
                                </div>
                                <small class="text-muted">Enter the link.</small>
                            </div>

                            <div class="row mb-4 mt-2">
                                <div class="col-md-12 mt-2 d-flex">
                                    <button type="submit" class="btn btn-dark w-75 me-2">
                                        Submit
                                    </button>

                                    <span class="w-25 d-flex">
                                        <button type="button" class="btn bg-secondary text-white me-2 w-50" @click="changeScreen(1)">
                                            <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
                                        </button>

                                        <button type="button" class="btn bg-secondary text-white w-50" @click="changeScreen(3)">
                                            <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
                                        </button>
                                    </span>
                                </div>
                            </div>                                                                    
                        </form>

                        <div v-show="screen == 3">
                            <p class="text-burgundy fw-bold">Delete a Partner entry</p>

                            <div class="row" v-for="({title, link}, index) in prop_data['partner-items']" :key="index">

                                <div class="col-md-12 d-flex">
                                    <div class="d-block me-4">
                                        <p class="mb-0 text-dark">&bull; {{ title }}</p>                                     
                                        <p class="text-muted">{{ link }}</p>                                     
                                    </div>
                                    <div class="d-block ms-auto">
                                        <p class="mb-0" style="cursor: pointer" @click="remove(prop_data['partner-items'], index, 'partner-items')">
                                            <font-awesome-icon class="text-burgundy" :icon="['fas', 'trash-alt']"></font-awesome-icon>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-12 mt-2 d-flex">
                                <button type="button" class="btn bg-secondary text-white w-25 me-2" @click="changeScreen(2)">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
                                </button>

                                <button type="submit" class="btn btn-dark w-75 me-2">
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    @import '../../../assets/scss/helpers/_breakpoints.scss';

    .partner-image {
        width: 70%;
        @include media("<=tablet") {
            margin-left: auto;
            margin-right: auto;
        }
    }   
</style>

<script>
    import handleProps from '../../../mixins/handleProps';
    import Status from '../../Status';  

    export default {
        name: "Partners",
        mixins: [handleProps],
        props: {
            prop_data: {
                required: true,
                type: Object
            },    
            page: {
                required: true, 
                type: String
            }               
        },
        components: {
            Status
        },
        data() {
            return {
                form_data: {
                    title: this.prop_data.title,
                    tagline: this.prop_data.tagline,
                    background_color: this.prop_data.background_color
                },
                status_data: {
                    success: false,
                    success_message: 'Form Submission was successful!',
                    error: false,
                    error_message: 'There are some errors.',
                    loading: false
                }, 
                screen: 1,
                partners: {
                    title: '',
                    link: '',
                    image: '',
                }, 
            }
        },
        methods: {
            submitProps() {
                var post_form_data = []

                Object.entries(this.form_data).forEach(element => {
                    if(this.prop_data[element[0]] != element[1]) {
                        post_form_data.push({
                            value: element[1],
                            prop: element[0],
                            component: 'partners',
                            container: false,
                            page: 'Home',
                            child: false,
                            parent: ""
                        })
                    }
                });

                this.axios.post('api/prop', post_form_data).then(() => {
                    this.status_data.loading = false
                    this.status_data.error = false
                    this.status_data.success = true
                }).catch((error) => {
                    this.status_data.loading = false
                    this.status_data.error = true
                    this.status_data.error_message = 'Section data was not successfully updated!' + error
                    this.status_data.success = false
                })
            },            
            submitPartner() {
                var post_form_data = []

                Object.entries(this.partners).forEach(element => { 
                    if(element[1] != '') {
                        post_form_data.push({
                            value: element[1],
                            prop: element[0],
                            component: 'partner-items',
                            container: true,
                            page: 'Home',
                            child: false,
                            parent: ""
                        })
                    }
                });

                this.axios.post('api/prop', post_form_data).then((response) => {
                    this.status_data.loading = false
                    this.status_data.error = false
                    this.status_data.success = true

                    console.log(response)
                }).catch((error) => {
                    this.status_data.loading = false
                    this.status_data.error = true
                    this.status_data.error_message = 'Section data was not successfully updated! ' + error
                    this.status_data.success = false

                    console.log(error)
                })
            },
            deletePartner(index) {
                const partner = this.prop_data['partner-items'][index]
                const post_form_data = []

                Object.entries(partner).forEach(element => {
                    post_form_data.push({
                        value: element[1],
                        prop: element[0],
                        component: 'partner-items',
                        container: true,
                        page: 'Home',
                        child: false,
                        parent: ""
                    })
                });

                console.log(post_form_data)
                
                // this.axios.post('api/component-props/delete', post_form_data).then((response) => {
                //     this.status_data.loading = false
                //     this.status_data.error = false
                //     this.status_data.success = true
                    
                //     console.log(response)
                //     // unset service that was deleted
                //     const props = Object.create(this.prop_data)
                //     props['partner-items'].splice(index, 1)

                //     // update prop data
                //     this.$emit('update:prop_data', props)
                // }).catch((error) => {
                //     this.status_data.loading = false
                //     this.status_data.error = true
                //     this.status_data.error_message = 'Section data was not successfully updated!' + error
                //     this.status_data.success = false
                // })
            },
            changeScreen(value) {
                this.screen = value
            },        
        }
    }
</script>