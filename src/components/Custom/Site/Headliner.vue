<template>
    <div class="position-absolute discover">
        <p style="letter-spacing: 1px"> Learn More 
            <font-awesome-icon class="mt-2" :icon="['fas', 'long-arrow-alt-down']"></font-awesome-icon>
        </p>
    </div>

    <div class="rounded-bottom small-header">
        <section class="small-admin-header">
            <div v-if="prop_data.backdrop" class="header-backdrop"></div>

            <div :class="['intro', 'text-' + prop_data.position]">
                <p class="text-white text-uppercase mb-2 fw-bold title">{{ prop_data.tagline }}</p>
                <h1 class="text-white tagline">{{ prop_data.title }}</h1>

                <button :class="['btn', 'btn-' + prop_data.call_to_action.background_color, 'mt-4', 'call_to_action']" v-if="prop_data.call_to_action" @click="scrollTo(prop_data.call_to_action.link)">
                    <span>{{ prop_data.call_to_action.text }}</span> <font-awesome-icon class="ms-2" :icon="['fas', 'angle-right']"></font-awesome-icon>
                </button>
            </div>
        </section>
    </div>

    <div class="modal fade" id="headlinerProps" tabindex="-1" aria-labelledby="headlinerPropsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header pb-0 border-bottom-0">
                    <span class="d-block container">
                        <h5 class="text-dark text-center"><span class="text-burgundy fw-bold">Headliner</span> Section</h5>
                    </span>
                </div>
                
                <div class="modal-body container">

                    <status v-model:status_data=status_data></status>   

                    <form enctype="multipart/form-data" class="row" action="#" @submit.prevent="submit(form_data, [false, ''], 'headliner')"  v-show="form_screen == 1">
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
                            <label for="position" class="fw-bold mb-2">Position the text on-screen</label>

                            <div class="input-group">
                                <select id="position" class="form-select" v-model="form_data.position" required>
                                    <option></option>
                                    <option value="start">Left</option>
                                    <option value="center">Center</option>
                                    <option value="end">Right</option>
                                </select>
                            </div>
                            <small class="text-muted">Position the text on page.</small>
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

                    <form enctype="multipart/form-data" class="row" action="#" @submit.prevent="submit(call_to_action, [true, 'call_to_action'], 'headliner')"  v-show="form_screen == 2">
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

<style lang="scss" scoped>
    @import '../../../assets/scss/layout/_headliner.scss';
</style>

<script>
    import Status from '../../Status';    
    import handleProps from '../../../mixins/handleProps';

    export default {
        name: "Headliner",
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
                form_data: {
                    title: this.prop_data.title,
                    tagline: this.prop_data.tagline,
                    image: this.prop_data.image,
                    backdrop: this.prop_data.backdrop,   
                    background_color: this.prop_data.background_color,   
                    position: this.prop_data.position           
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
                form_screen: 1             
            }
        }
    }
</script>