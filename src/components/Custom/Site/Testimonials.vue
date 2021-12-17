<template>
    <div class="container">    
        <div class="position-absolute cog p-4">
            <button class="btn btn-dark bg-gradient btn-sm" data-bs-toggle="modal" data-bs-target="#testimonialsProps">
                <font-awesome-icon :icon="['fas', 'cogs']"></font-awesome-icon>
            </button>
        </div>

        <div class="row ps-4 pe-4 text-center">
            <p class="text-white text-uppercase mb-2 fw-bold" style="letter-spacing: 2.5px;">{{ prop_data.title }}</p>
            <h3 class="text-light-grey" style="letter-spacing: -1px; font-weight: 300;">{{ prop_data.tagline }}</h3>
        </div>

        <div class="row p-4 mt-4"> 
            <div class="col-md-12 text-center">
                <div class="testimony">
                    <div class="d-flex">
                        <span class="d-flex" style="cursor: pointer" @click="previousScreen()" v-if="screen > 0">
                            <font-awesome-icon class="me-4 fw-bold mt-auto mb-auto circle-icon" :icon="['fas', 'angle-left']"></font-awesome-icon>
                        </span>
                        
                        <div :class="[{'w-100': screen == index}]" v-for="({text, author}, index) in prop_data['testimonial-items']" :key="index">
                            <span class="d-block mx-auto" v-if="screen == index">
                                <h2 class="mt-2 mb-4 ps-4 pe-2">
                                    {{ text }}
                                </h2>
                                <p class="mt-4 text-muted"> - {{ author }} </p> 
                            </span>
                        </div>  

                        <span class="d-flex float-end" style="cursor: pointer" @click="nextScreen()" v-if="screen < prop_data['testimonial-items'].length-1">
                            <font-awesome-icon class="me-4 fw-bold mt-auto mb-auto circle-icon" :icon="['fas', 'angle-right']"></font-awesome-icon>
                        </span>
                    </div>
                </div>
            </div>                                                                                        
        </div>
    </div>

    <div class="modal fade" id="testimonialsProps" tabindex="-1" aria-labelledby="testimonialsPropsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body container">
                    <div class="row">
                        <status v-model:status_data=status_data></status>
                        
                        <form action="#" @submit.prevent="submit(form_data, [false, ''], 'testimonials')" v-show="form_screen == 1">
                            <span class="d-block w-100">
                                <h5 class="text-dark text-center">Edit Section Details</h5>
                            </span>
                            
                            <div class="row mb-4">
                                <label for="title" class="fw-bold mb-2 text-dark">Title</label>
                                <div class="input-group">
                                    <input id="title" type="text" class="form-control" v-model="form_data.title" required>
                                </div>
                                <small class="text-muted">Enter your title.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="tagline" class="fw-bold mb-2 text-dark">Tagline</label>
                                <div class="input-group">
                                    <input id="tagline" type="text" class="form-control" v-model="form_data.tagline" required> 
                                </div>
                                <small class="text-muted">Enter your tagline.</small>
                            </div>

                            <div class="row mb-4">
                                <label for="image" class="fw-bold mb-2 text-dark">Background color</label>

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

                        <form action="#" @submit.prevent="submit(testimonials, [false, ''], 'testimonial-items', true)" v-show="form_screen == 2">
                            <p class="text-burgundy fw-bold">Add a Testimonial entry</p>
                            
                            <div class="row mb-4">
                                <label for="testimonials.text" class="fw-bold mb-2 text-dark">Text</label>

                                <div class="input-group">
                                    <input id="testimonials.text" type="text" class="form-control" v-model="testimonials.text" required>
                                </div>

                                <small class="text-muted">Enter your testimonial.</small>
                            </div>  

                            <div class="row mb-4">
                                <label form="testimonials.author" for="line" class="fw-bold mb-2 text-dark">Author</label>

                                <div class="input-group">
                                    <input type="text" id="testimonials.author" rows="2" class="form-control" v-model="testimonials.author" required>
                                </div>
                                <small class="text-muted">Enter the author.</small>
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

                        <div v-show="form_screen == 3">
                            <p class="text-burgundy fw-bold">Delete a Testimonial</p>

                            <div class="row" v-for="({text, author}, index) in prop_data['testimonial-items']" :key="index">

                                <div class="col-md-12 d-flex">
                                    <div class="d-block me-4">
                                        <p class="mb-0 text-dark">&bull; {{ author }}</p>                                     
                                        <p class="text-muted">{{ text }}</p>                                     
                                    </div>
                                    <div class="d-block ms-auto">
                                        <p class="mb-0" style="cursor: pointer" @click="remove(prop_data['testimonial-items'], index, 'testimonial-items')">
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
    .circle-icon {
        border-radius: 50%;
        margin: auto;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        color: #333;
        padding: 4px;
    }
</style>

<script>
    import Status from '../../Status';
    import handleProps from '../../../mixins/handleProps';

    export default {
        name: 'Testimonials',
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
                form_screen: 1,
                testimonials: {
                    text: '',
                    author: '',
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
                            component: 'testimonials',
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
            submitTestimonials() {
                var post_form_data = []

                Object.entries(this.testimonials).forEach(element => { 
                    if(element[1] != '') {
                        post_form_data.push({
                            value: element[1],
                            prop: element[0],
                            component: 'testimonial-items',
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
            deleteTestimonial(index) {
                const testimonial = this.prop_data['testimonial-items'][index]
                const post_form_data = []

                Object.entries(testimonial).forEach(element => {
                    post_form_data.push({
                        value: element[1],
                        prop: element[0],
                        component: 'testimonial-items',
                        container: true,
                        page: 'Home',
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
                    props['testimonial-items'].splice(index, 1)

                    // update prop data
                    this.$emit('update:prop_data', props)
                }).catch((error) => {
                    this.status_data.loading = false
                    this.status_data.error = true
                    this.status_data.error_message = 'Section data was not successfully updated!' + error
                    this.status_data.success = false
                })
            },
            changeScreen(value) {
                this.form_screen = value
            },               
            nextScreen() {
                this.screen++
            },
            previousScreen() {
                this.screen--
            }
        }
    }
</script>