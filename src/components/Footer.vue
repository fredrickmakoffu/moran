<template>
    <footer :class="['main-footer', 'bg-light-dark']">
        <div class="position-absolute cog p-4">
            <button class="btn btn-light bg-gradient btn-sm" data-bs-toggle="modal" data-bs-target="#footerProps">
                <font-awesome-icon :icon="['fas', 'cogs']"></font-awesome-icon>
            </button>
        </div>

        <!-- Grid container -->
        <div class="container p-4 mb-4">
            <!--Grid row-->
            <div class="row mt-2">
                <!--Grid column-->
                <div class="col-lg-4 col-md-12 mb-4">
                    <h6 class="text-uppercase heading text-white fw-bold mb-2">{{ prop_data.title }}</h6>

                    <p class="text-muted" v-for="(text) in prop_data.description.split('.')" :key="text">
                        <span v-if="text != ''">{{ text }}.</span>
                    </p>
                
                    <a :href="prop_data.call_to_action.link" :class="'btn btn-lg btn-' + prop_data.call_to_action.background_color + ' btn-sm fw-bold'"> {{ prop_data.call_to_action.text }}  <font-awesome-icon class="ms-2" :icon="['fas', 'chevron-circle-right']" /></a>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <h6 class="text-uppercase heading text-white fw-bold mb-2">Reach out</h6>

                    <ul class="row list-unstyled mb-0">
                        <li class="col-md-12 col-sm-6">
                            <div class="row mt-3 reach-out">
                                <div class="d-flex">
                                    <p class="mt-0 mb-0"> 
                                        <font-awesome-icon class="me-2 bg-grey text-white circle-icon" :icon="['fas', 'location-arrow']"></font-awesome-icon>  
                                    </p>

                                    <div class="d-block ms-2">
                                        <p v-for="(text) in prop_data.address.split(',')" :key="text" class="mb-0">{{ text }} </p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="col-md-12 col-sm-6">
                            <div class="row mt-2 reach-out">
                                <div class="d-flex">
                                    <p class="mt-0 mb-0"> 
                                        <font-awesome-icon class="me-2 bg-grey text-white circle-icon" :icon="['fas', 'phone-alt']"></font-awesome-icon>  
                                    </p>

                                    <div class="d-block ms-2 mt-1">
                                        <p class="mb-0">{{ prop_data.phone_number }} </p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="col-md-12 col-sm-6">
                            <div class="row mt-1 reach-out">
                                <div class="d-flex">
                                    <p class="mt-0 mb-0"> 
                                        <font-awesome-icon class="me-2 bg-grey text-white circle-icon" :icon="['fas', 'envelope']"></font-awesome-icon>  
                                    </p>

                                    <div class="d-block ms-2 mt-1">
                                        <p class="mb-0">{{ prop_data.email }} </p>
                                    </div>
                                </div>
                            </div>
                        </li>   

                        <li class="d-inline-flex mt-2">
                            <a target="_blank" v-for="({social, link, background_color}, index) in prop_data.socials" :key="index" class="text-white" :href="link">
                                <font-awesome-icon :class="'bg-' + background_color + ' text-white circle-icon me-3'" :icon="['fab', social]" />
                            </a>
                        </li>
                    </ul>
                </div>  
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-2 col-md-6 mb-4 col-sm-12">
                    <h6 class="text-uppercase mb-0 heading text-white fw-bold">Navigate</h6>

                    <ul class="list-unstyled">
                        <li class="mt-3" v-for="({text, link, type}) in prop_data.navigation" :key="text">
                            <a v-if="type == 'id'" class="text-muted text-decoration-none" @click="scrollTo(link)" style="cursor: pointer">
                                &bull; {{ text}}
                            </a>

                            <router-link v-if="type == 'route'" class="text-muted text-decoration-none" :to="link" style="cursor: pointer"  >
                                &bull; {{ text}}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!--Grid column-->                
            </div>
            <!--Grid row-->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div id="copyright" class="text-center p-3 copyright-background">
            Copyright © 2021 All rights reserved | Built by Inshaka
        </div>
        <!-- Copyright -->
    </footer>

    <div class="modal fade" id="footerProps" tabindex="-1" aria-labelledby="footerPropsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0 border-bottom-0">
                    <span class="d-block w-100">
                        <h5 class="text-dark text-center">Edit Footer Section</h5>
                    </span>
                </div>
                
                <div class="modal-body container">
                    <div class="row">
                        <status v-model:status_data=status_data></status>

                        <form action="#" @submit.prevent="submitProps(form_data, [false, ''], 'footer')" v-show="screen == 1">
                            <div class="row mb-4">
                                <label for="title" class="fw-bold mb-2">Title</label>
                                <div class="input-group">
                                    <input id="title" type="text" class="form-control" v-model="form_data.title" required>
                                </div>
                                <small class="text-muted">Enter your title.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="address" class="fw-bold mb-2">Address</label>
                                <div class="input-group">
                                    <input id="address" type="text" class="form-control" v-model="form_data.address" required>
                                </div>
                                <small class="text-muted">Enter your address.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="phone_number" class="fw-bold mb-2">Phone Number</label>
                                <div class="input-group">
                                    <input id="phone_number" type="number" class="form-control" v-model="form_data.phone_number" required>
                                </div>
                                <small class="text-muted">Enter your phone number.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="background_color" class="fw-bold mb-2">Background color</label>

                                <div class="input-group">
                                    <select id="background_color" class="form-select" v-model="form_data.background_color" required>
                                        <option></option>
                                        <option value="white">White</option>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="burgundy">Burgundy</option>
                                        <option value="primary">Primary</option>
                                        <option value="info">Info</option>

                                    </select>
                                </div>
                                <small class="text-muted">Enter the background color.</small>
                            </div>  
                            
                            <div class="row mb-4">
                                <label for="email" class="fw-bold mb-2">Email</label>
                                <div class="input-group">
                                    <input id="email" type="text" class="form-control" v-model="form_data.email" required>
                                </div>
                                <small class="text-muted">Enter your email.</small>
                            </div>                                                  

                            <div class="row mb-4">
                                <label for="description" class="fw-bold mb-2">Description</label>
                                
                                <div class="input-group">
                                    <textarea id="description" type="text" class="form-control" v-model="form_data.description" required></textarea>
                                </div>

                                <small class="text-muted">Enter description.</small>
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

                        <form action="#" @submit.prevent="submitProps(call_to_action, [true, 'call_to_action'], 'footer')" v-show="screen == 2">
                            <p class="text-burgundy fw-bold">Call to Action</p>
                            
                            <div class="row mb-4">
                                <label for="call_to_action_background" class="fw-bold mb-2">Button Color</label>

                                <div class="input-group">
                                    <select id="call_to_action_background" class="form-select" v-model="call_to_action.background_color" required>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="burgundy">Burgundy</option>
                                        <option value="primary">Primary</option>
                                        <option value="info">Info</option>
                                    </select> 
                                </div>
                                <small class="text-muted">Enter the button background color.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="call_to_action_text" class="fw-bold mb-2">Button Text</label>

                                <div class="input-group">
                                    <input id="call_to_action_text" type="text" class="form-control" v-model="call_to_action.text" required> 
                                </div>
                                <small class="text-muted">Enter the text on button.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="call_to_action_link" class="fw-bold mb-2">Button Link</label>

                                <div class="input-group">
                                    <input id="call_to_action_link" type="text" class="form-control" v-model="call_to_action.link" required>
                                </div>
                                <small class="text-muted">Enter the link the button leads to.</small>
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

                        <form action="#"  @submit.prevent="submitProps(socials, [false, ''], 'socials', true)" v-show="screen == 3">
                            <p class="text-burgundy fw-bold">Add a Social</p>
                            
                            <div class="row mb-4">
                                <label for="socials.social" class="fw-bold mb-2">Socials</label>

                                <div class="input-group">
                                    <select v-model=socials.social id="socials.social" class="form-select">
                                        <option></option>
                                        <option value="facebook">Facebook</option>
                                        <option value="twitter">Twitter</option>
                                        <option value="instagram">Instagram</option>
                                        <option value="tiktok">Tiktok</option>
                                        <option value="telegram">Telegram</option>
                                    </select>
                                </div>
                                <small class="text-muted">Enter platform.</small>
                            </div>  

                            <div class="row mb-4">
                                <label for="socials.link" class="fw-bold mb-2">Link</label>

                                <div class="input-group">
                                    <input id="socials.link" class="form-control" type="text" v-model="socials.link" required>
                                </div>

                                <small class="text-muted">Enter link to platform chosen.</small>
                            </div>  

                            <div class="row mb-4">
                                <label for="socials.background_color" class="fw-bold mb-2">Background color</label>

                                <div class="input-group">
                                    <select id="socials.background_color" class="form-select" v-model="socials.background_color" required>
                                        <option></option>
                                        <option value="white">White</option>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="burgundy">Burgundy</option>
                                        <option value="primary">Primary</option>
                                        <option value="info">Info</option>

                                    </select>
                                </div>
                                <small class="text-muted">Enter the background color.</small>
                            </div>                              
                            
                            <div class="row mb-4 mt-2">
                                <div class="col-md-12 mt-2 d-flex">
                                    <button type="submit" class="btn btn-dark w-75 me-2">
                                        Submit
                                    </button>

                                    <span class="w-25 d-flex">
                                        <button type="button" class="btn bg-secondary text-white me-2 w-50" @click="changeScreen(2)">
                                            <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
                                        </button>

                                        <button type="button" class="btn bg-secondary text-white w-50" @click="changeScreen(4)">
                                            <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
                                        </button>
                                    </span>
                                </div>
                            </div>                                                                    
                        </form>
                        
                        <form action="#"  @submit.prevent="submitProps(navigation, [false, ''], 'navigation', true)" v-show="screen == 4">
                            <p class="text-burgundy fw-bold">Add Navigation item</p>
                            
                            <div class="row mb-4">
                                <label for="navigation.text" class="fw-bold mb-2">Text</label>

                                <div class="input-group">
                                    <input id="navigation.text" class="form-control" type="text" v-model="navigation.text" required>
                                </div>
                                <small class="text-muted">Enter navigation text.</small>
                            </div>  

                            <div class="row mb-4">
                                <label for="navigation.link" class="fw-bold mb-2">Link</label>

                                <div class="input-group">
                                    <input id="navigation.link" class="form-control" type="text" v-model="navigation.link" required>
                                </div>

                                <small class="text-muted">Enter link.</small>
                            </div>  

                            <div class="row mb-4">
                                <label for="navigation.type" class="fw-bold mb-2">Link Type</label>

                                <div class="input-group">
                                    <select id="navigation.type" class="form-control" v-model="navigation.type" required>
                                        <option></option>
                                        <option value="route">Link within website</option>
                                        <option value="link">Link outside website</option>
                                    </select>
                                </div>

                                <small class="text-muted">Choose background color.</small>
                            </div>  
                            
                            <div class="row mb-4 mt-2">
                                <div class="col-md-12 mt-2 d-flex">
                                    <button type="submit" class="btn btn-dark w-75 me-2">
                                        Submit
                                    </button>

                                    <span class="w-25 d-flex">
                                        <button type="button" class="btn bg-secondary text-white me-2 w-50" @click="changeScreen(3)">
                                            <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
                                        </button>

                                        <button type="button" class="btn bg-secondary text-white w-50" @click="changeScreen(5)">
                                            <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
                                        </button>
                                    </span>
                                </div>
                            </div>                                                                    
                        </form>                        

                        <div v-show="screen == 5">
                            <p class="text-burgundy fw-bold">Delete Socials</p>

                            <div class="row" v-for="({social, link}, index) in prop_data.socials" :key="index">

                                <div class="col-md-12 d-flex">
                                    <div class="d-block me-4">
                                        <p class="mb-0 mt-2 text-dark text-capitalize">&bull; {{ social }}</p>
                                        <p class="text-muted">{{ link }}</p>                                         
                                    </div>
                                    <div class="d-block ms-auto">
                                        <p class="mb-0" style="cursor: pointer" @click="deleteService(prop_data.socials, index, 'socials')">
                                            <font-awesome-icon class="text-burgundy" :icon="['fas', 'trash-alt']"></font-awesome-icon>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-12 mt-2 d-flex">
                                <button type="submit" class="btn btn-dark w-75 me-2">
                                    Submit
                                </button>

                                <span class="w-25 d-flex">
                                    <button type="button" class="btn bg-secondary text-white me-2 w-50" @click="changeScreen(4)">
                                        <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
                                    </button>

                                    <button type="button" class="btn bg-secondary text-white w-50" @click="changeScreen(6)">
                                        <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
                                    </button>
                                </span>

                            </div>
                        </div>
                        
                        <div v-show="screen == 6">
                            <p class="text-burgundy fw-bold">Delete Socials</p>

                            <div class="row" v-for="({text, type, link}, index) in prop_data.navigation" :key="index">

                                <div class="col-md-12 d-flex">
                                    <div class="d-block me-4">
                                        <p class="mb-0 mt-2 text-dark text-capitalize">&bull; {{ text }}</p>
                                        <p class="text-muted"> <span class="text-capitalize">{{ type }}</span> : {{ link }}</p>                                         
                                    </div>
                                    <div class="d-block ms-auto">
                                        <p class="mb-0" style="cursor: pointer" @click="deleteService(prop.navigation, index, 'navigation')">
                                            <font-awesome-icon class="text-burgundy" :icon="['fas', 'trash-alt']"></font-awesome-icon>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-12 mt-2 d-flex">
                                <button type="submit" class="btn btn-dark w-75 me-2">
                                    Submit
                                </button>

                                <span class="w-25 d-flex">
                                    <button type="button" class="btn bg-secondary text-white me-2 w-50" @click="changeScreen(5)">
                                        <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
                                    </button>
                                </span>

                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_footer.scss';

    .main-footer {
        padding-top: 20px;
        display: inline-block;
        width: 100%;
    }
</style>

<script>
import Status from '../components/Status'
import handleProps from '../mixins/handleProps';
export default {
    name: 'Footer',
    props: {
        prop_data: {
            type: Object,
            required: true
        },
        page: {
            required: true, 
            type: String
        }
    },
    components: {
        Status
    },
    mixins: [handleProps],
    data () {
        return {
            form_data: {
                title: this.prop_data.title,
                address: this.prop_data.address,
                phone_number: this.prop_data.phone_number,
                background_color: this.prop_data.background_color,
                email: this.prop_data.email,
                description: this.prop_data.description,
            },
            call_to_action: {
                text: this.prop_data.call_to_action.text,
                background_color: this.prop_data.call_to_action.background_color,
                link: this.prop_data.call_to_action.link,
            },
            status_data: {
                success: false,
                success_message: 'Form Submission was successful!',
                error: false,
                error_message: 'There are some errors.',
                loading: false
            },  
            socials: {
                social: '',
                link: '',
                background_color: ''
            },
            navigation: {
                text: '',
                link: '',
                type: ''
            },
            screen: 1,
            description: {
                text: ''
            }
        }
    },
    methods: {
        changeScreen(value) {
            this.screen = value
        },   
        submitProps(data = this.form_data, [child = false, parent = ""], component = "", container = false, page = this.page.toLowerCase()) {
            var post_form_data = []

            Object.entries(data).forEach(element => {
                if(this.prop_data[element[0]] == undefined || this.prop_data[element[0]] != element[1]) {

                    // if element[1] is array, loop against it
                    let type  = typeof element[1]

                    if(type == 'object') {
                        Object.entries(element[1]).forEach(item => {
                            post_form_data.push({
                                value: item[1],
                                prop: item[0],
                                component: component,
                                container: container,
                                page: page,
                                child: child,
                                parent: element[0]
                            })
                        })
                    } else {
                        if(child == false) {
                            post_form_data.push({
                                value: element[1],
                                prop: element[0],
                                component: component,
                                container: container,
                                page: page,
                                child: child,
                                parent: ""
                            })
                        } else {
                            post_form_data.push({
                                value: element[1],
                                prop: element[0],
                                component: component,
                                container: container,
                                page: page,
                                child: child,
                                parent: parent
                            })
                        }
                        
                    }
                }
            });

            this.axios.post('api/prop', post_form_data).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true

                // add service 
                const props = Object.create(this.prop_data)
                props[component].push(data)

                // update prop data
                this.$emit('update:prop_data', props)  
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.error_message = 'Section data was not successfully updated!' + error
                this.status_data.success = false
            })
        },
        deleteService(data = this.form_data, index, component) {
            // const service = this.footer_data[component][index]
            const post_form_data = []

            Object.entries(data[index]).forEach(element => {
                post_form_data.push({
                    value: element[1],
                    prop: element[0],
                    component: component,
                    container: true,
                    page: this.page.toLowerCase(),
                    child: false,
                    parent: ""
                })
            });

            this.axios.post('api/component-props/delete', post_form_data).then((response) => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                
                console.log(response)

                // unset service that was deleted
                const props = Object.create(this.prop_data)
                props[component].splice(index, 1)

                // update prop data
                this.$emit('update:prop_data', props)
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.error_message = 'Section data was not successfully updated!' + error
                this.status_data.success = false
            })
        }        
    }
}
</script>