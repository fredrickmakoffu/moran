<template>
    <div class="container">
        <div class="position-absolute cog p-4">
            <button class="btn btn-dark bg-gradient btn-sm" data-bs-toggle="modal" data-bs-target="#catalogueProps">
                <font-awesome-icon :icon="['fas', 'cogs']"></font-awesome-icon>
            </button>
        </div>

        <div class="row ps-4 pe-4">
            <div class="col-12">
                <h2 class="text-dark fw-bold">{{ prop_data.title }}</h2>
                <p>{{ prop_data.tagline }}</p>
            </div>           
        </div>

        <div class="row ps-4 pe-4" v-if="featured">
            <div class="col-md-4 col-sm-12 mt-4" v-for="({name, id, address, bedrooms, bathrooms, created_at, index}) in featured" :key="index">
                <div class="card rounded" style="box-shadow: 0 4px 8px rgb(0 0 0 / 3%); border-color: #eee;">
                    <img :src="require('../../../assets/img/property.jpg')" alt="">
                    <div class="card-body">
                        <router-link class="text-decoration-none" :to="{name: 'Property', params: {property_id: id}}">
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

        <div class="row mt-4 ps-4 pe-4">
            <div class="col-md-12 d-flex">
                <router-link :to="prop_data.call_to_action.link" :class="['btn', 'bg-' + prop_data.call_to_action.background_color, 'w-15', 'ms-auto', 'text-white', 'mt-4']">

                    <span> {{ prop_data.call_to_action.text }} </span>
                    <font-awesome-icon class="ms-2" :icon="['fas', 'angle-right']"></font-awesome-icon>
                    
                </router-link>
            </div>
        </div>
    </div>

    <div class="modal fade" id="catalogueProps" tabindex="-1" aria-labelledby="cataloguePropsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0 border-bottom-0">
                    <span class="d-block container">
                        <h5 class="text-dark text-center"><span class="text-burgundy fw-bold">Catalogue</span> Section</h5>
                    </span>
                </div>
                
                <div class="modal-body container">
                    <status v-model:status_data=status_data></status>

                    <form class="row" action="#" @submit.prevent="submit(form_data, [false, ''], 'catalogue')" v-show="form_screen == 1">
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

                        <div class="row mt-2">
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

                    <form class="row" action="#" @submit.prevent="submit(call_to_action, [true, 'call_to_action'], 'catalogue')" v-show="form_screen == 2">
                        <div class="row"> 
                            <div class="col-md-12 col-sm-12 mb-4">
                                <label for="call_to_action_background" class="fw-bold mb-2">Button Color</label>

                                <div class="input-group">
                                    <select id="call_to_action_background" class="form-select" v-model="call_to_action.background_color" required>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="burgundy">Burgundy</option>
                                    </select> 
                                </div>
                                <small class="text-muted">Enter the button background color.</small>
                            </div>

                            <div class="col-md-12 col-sm-12 mb-4">
                                <label for="call_to_action_text" class="fw-bold mb-2">Button Text</label>

                                <div class="input-group">
                                    <input id="call_to_action_text" type="text" class="form-control" v-model="call_to_action.text" required> 
                                </div>
                                <small class="text-muted">Enter the text on button.</small>
                            </div>

                            <div class="col-md-12 col-sm-12 mb-4">
                                <label for="call_to_action_link" class="fw-bold mb-2">Button Link</label>

                                <div class="input-group">
                                    <input id="call_to_action_link" type="text" class="form-control" v-model="call_to_action.link" required>
                                </div>
                                <small class="text-muted">Enter the link the button leads to.</small>
                            </div>


                            <div class="col-md-12 mt-2 d-flex">
                                <button type="button" class="btn bg-secondary text-white w-25 me-2" @click="changeScreen(1)">
                                    <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
                                </button>

                                <button type="submit" class="btn btn-dark w-75">
                                    Submit
                                </button>
                            </div>  
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Status from '../../Status';
    import handleProps from '../../../mixins/handleProps';

    export default {
        name: "CataloguePreview",
        mixins: [handleProps],
        components: {
            Status
        },
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
        data() {
            return {
                filter: false,
                form_data: {
                    title: this.prop_data.title,
                    tagline: this.prop_data.tagline,
                    background_color: this.prop_data.background_color,
                },
                call_to_action: {
                    text: this.prop_data.call_to_action.text,
                    link: this.prop_data.call_to_action.link,
                    background_color: this.prop_data.call_to_action.background_color
                },                
                catalogue_item: [
                    {
                        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
                        title: "Furnished 1 Bedroom Apartment For Sale In Kileleshwa",
                        tagline: "Kileleshwa, Nairobi, 97104, Kenya",
                        left_small: "Villa",
                        right_small: "07-07-2021",
                        link: ""
                    },
                    {
                        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
                        title: "Furnished 1 Bedroom Apartment For Sale In Kileleshwa",
                        tagline: "Kileleshwa, Nairobi, 97104, Kenya",
                        left_small: "Villa",
                        right_small: "07-07-2021",
                        link: ""
                    },
                    {
                        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
                        title: "Furnished 1 Bedroom Apartment For Sale In Kileleshwa",
                        tagline: "Kileleshwa, Nairobi, 97104, Kenya",
                        left_small: "Villa",
                        right_small: "07-07-2021",
                        link: ""
                    }                        
                ],
                status_data: {
                    success: false,
                    success_message: 'Form Submission was successful!',
                    error: false,
                    error_message: 'There are some errors.',
                    loading: false
                },   
                form_screen: 1,
                featured: {},
                loading: false      
            }
        },
        mounted() {
            this.getFeatured()
        },
        methods: {
            showFilter() {
                if(this.filter == true) {
                    this.filter = false
                } else {
                    this.filter = true
                }
            },
            handleSubmit() {
                const post_form_data = this.prepFormData()
                
                this.axios.post('api/prop', post_form_data).then(() => {
                    this.status_data.loading = false
                    this.status_data.error = false
                    this.status_data.success = true

                    this.$emit('update:prop_data', this.form_data)
                }).catch(() => {
                    this.status_data.loading = false
                    this.status_data.error = true
                    this.status_data.error_message = 'Section data was not successfully updated!'
                    this.status_data.success = false
                })
            },
            prepFormData() {
                var post_form_data = []
                
                Object.entries(this.form_data).forEach(element => {
                    if(element[0] == 'call_to_action') {
                        if(this.prop_data.call_to_action.text != element[1].text) {
                            post_form_data.push({
                                value: element[1].text,
                                prop: 'text',
                                component: 'catalogue',
                                container: false,
                                page: 'Home',
                                child: true,
                                parent: "call_to_action"
                            })
                        }

                        if(this.prop_data.call_to_action.link != element[1].link) {
                            post_form_data.push({
                                value: element[1].link,
                                prop: 'link',
                                component: 'catalogue',
                                container: false,
                                page: 'Home',
                                child: true,
                                parent: "call_to_action"
                            })
                        }

                        if(this.prop_data.call_to_action.background_color != element[1].background_color) {
                            post_form_data.push({
                                value: element[1].background_color,
                                prop: 'background_color',
                                component: 'catalogue',
                                container: false,
                                page: 'Home',
                                child: true,
                                parent: "call_to_action"
                            })
                        }

                        if(this.prop_data.call_to_action.icon != element[1].icon) {
                            post_form_data.push({
                                value: element[1].icon,
                                prop: 'icon',
                                component: 'catalogue',
                                container: false,
                                page: 'Home',
                                child: true,
                                parent: "call_to_action"
                            })
                        }

                    } else {
                        if(this.prop_data[element[0]] != element[1]) {
                            post_form_data.push({
                                value: element[1],
                                prop: element[0],
                                component: 'catalogue',
                                container: false,
                                page: 'Home',
                                child: false,
                                parent: ""
                            })
                        }
                    }
                });

                return post_form_data
            },
            getFeatured() {
                this.loading = true
                this.axios.get('api/featured').then((response) => {
                    this.featured = response.data.data
                    this.loading = false
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>