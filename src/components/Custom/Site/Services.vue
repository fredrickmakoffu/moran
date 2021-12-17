<template>
    <div class="container p-4">
        <div class="position-absolute cog p-4">
            <button class="btn btn-dark bg-gradient btn-sm" data-bs-toggle="modal" data-bs-target="#servicesProps">
                <font-awesome-icon :icon="['fas', 'cogs']"></font-awesome-icon>
            </button>
        </div>

        <div class="row ps-4 pe-4">
            <p class="text-white text-uppercase mb-2 fw-bold" style="letter-spacing: 2.5px;">{{ prop_data.title }}</p>
            <h3 class="text-light-grey" style="letter-spacing: -1px; font-weight: 300;">{{ prop_data.tagline }}</h3>
        </div>

        <div class="row" style="margin-top: 3rem;">  
            <div class="col-md-6 col-sm-12 d-flex position-relative order-top" style="z-index: 3">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80" class="img-fluid" style="margin-top: 5rem;">
            </div>

            <div class="col-md-6 col-sm-12 position-relative" style="z-index: 3"> 
                <div style="margin-top: 3rem;">
                    <p class="text-info text-uppercase mb-2 fw-bold" style="letter-spacing: 2.5px;">Markets</p>
                    <h5 class="text-white mb-3" style="font-weight: 300;">
                        Institutional Markets
                    </h5>

                    <p class="text-light-grey" style="font-size: 16px;">We offer investment management services, in the major equity asset classes, for institutional investors.</p>
                    
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Corporate and public pension plans </span>   
                            </p>

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Defined benefit plans </span> 
                            </p>
                            
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Defined contribution plans </span> 
                            </p>                     
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Insurance companies </span> 
                            </p>

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Endowments </span> 
                            </p>

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Foundations </span> 
                            </p>                                                                                
                        </div>    
                    </div>                
                </div>
            </div>

            <div class="block-1"></div>
        </div>

        <div class="row" style="margin-top: 3rem;">  
            <div class="col-md-6 col-sm-12 position-relative" style="z-index: 3"> 
                <div style="margin-top: 3rem;">
                    <p class="text-info text-uppercase mb-2 fw-bold" style="letter-spacing: 2.5px;">Sub-Advisory</p>
                    <h5 class="text-white mb-3" style="font-weight: 300;">Sub-Advisory Offering</h5>

                    <p class="text-light-grey" style="font-size: 16px;">Moran Capital acts as sub-advisor for funds and strategies offered to individual investors through a variety of sales networks.</p>

                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Pooled and mutual fund sponsors and distributors </span> 
                            </p>

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Defined contribution and investment-only platforms </span> 
                            </p>
                            
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Separately managed accounts </span> 
                            </p>                     
                        </div> 
                    </div>                     
                </div>
            </div>

            <div class="col-md-6 col-sm-12 d-flex position-relative order-top" style="z-index: 3">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80" class="img-fluid" style="margin-top: 5rem;">
            </div>            

            <div class="bg-info block-2"></div>  
                
        </div>
        
        <div class="row" style="margin-top: 6rem;">  
            <div class="col-md-6 col-sm-12 d-flex position-relative order-top" style="z-index: 3">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80" class="img-fluid" style="margin-top: 5rem;">
            </div>

            <div class="col-md-6 col-sm-12 position-relative" style="z-index: 3"> 
                <div style="margin-top: 3rem;">
                    <p class="text-info text-uppercase mb-2 fw-bold" style="letter-spacing: 2.5px;">Wealth</p>
                    <h5 class="text-white mb-3" style="font-weight: 300;">Private Wealth</h5>

                    <p class="text-light-grey" style="font-size: 16px;">Investment management services for investment firms, investment advisors and financial planners: </p>

                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Family offices </span> 
                            </p>

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Trusts </span> 
                            </p>
                            
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Estates </span> 
                            </p>                     
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2 text-light-grey" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span class="text-light-grey" style="font-size: 16px"> Individuals </span> 
                            </p>                     
                        </div>                         
                    </div>                    
                </div>
            </div>

            <div class="bg-info block-3"></div> 

            <div class="block-1"></div> 
               
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../../assets/scss/helpers/_breakpoints.scss';
    .title {
        font-weight: 700; 
        letter-spacing: 1.3px;
    }

    .tagline {
        font-size: 1.6rem; 
        font-weight: 500;
    }

    .order-top {
        @include media('<=tablet') {
            order: -1!important;
        }
    }

    .block-1 {
        height: 23rem;
        position: absolute;
        z-index: 2;
        width: 70%;
        right: -3rem;
        background-color: #5e6164;

        @include media('<=tablet', '>Lphone') {
            left: 0;
        }

        @include media('<=Lphone') {
            left: 0;
            margin-top: 2rem;
            height: 12rem;
        }
    }

    .block-2 {
        height: 14rem;
        position: absolute;
        z-index: 2;
        width: 46%;
        right: 1%;
        margin-top: 14rem;

        @include media('<=laptop', '>tablet') {
            margin-top: 10rem;
        }

        @include media('<=tablet', '>Lphone') {
            margin-top: 12rem;
        }

        @include media('<=Lphone') {
            margin-top: 7.5rem;
            height: 10rem;
            right: 3%;
            width: 60%;
        }
    }

    .block-3 {
        height: 24rem;
        position: absolute;
        z-index: 2;
        width: 30%;
        margin-top: -4rem;
        left: -23%;
        
        @include media('<=tablet', '>Lphone') {
            margin-top: 2rem;
            left: -10rem;
        }

        @include media('<=Lphone') {
            margin-top: 0rem;
            left: -4rem;
            height: 12rem;
        }
    }

    .block-4 {
        height: 23rem;
        position: absolute;
        z-index: 2;
        width: 70%;
        left: -3rem;
        background-color: #5e6164;

        @include media('<=tablet', '>Lphone') {
            left: 0;
        }

        @include media('<=Lphone') {
            left: 0;
            margin-top: 2rem;
            height: 12rem;
        }        
    }

    .order-top {
        @include media('<=tablet') {
            order: -1!important;
        }
    }

</style>

<script>
    import handleProps from '../../../mixins/handleProps';
    
    export default {
        name: "Services",
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
        data() {
            return {
                form_data: {
                    title: this.prop_data.title,
                    tagline: this.prop_data.tagline,
                    background_color: this.prop_data.background_color
                },
                services: {
                    title: '',
                    tagline: '',
                    description: '',
                    align: ''
                },
                status_data: {
                    success: false,
                    success_message: 'Form Submission was successful!',
                    error: false,
                    error_message: 'There are some errors.',
                    loading: false
                }, 
                screen: 1
            }
        },
        methods: {
            changeScreen(value) {
                this.screen = value
            }
        }
    }
</script>