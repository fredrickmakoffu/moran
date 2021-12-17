<template>
    <div class="container">
        <div class="row ps-4 pe-4">
            <div class="col-12">
                <p class="text-white text-uppercase mb-2 fw-bold" style="letter-spacing: 2.5px;">Who we are.</p>
                <h3 style="
                    letter-spacing: -1px;
                    font-weight: 200;">Get to know a bit about our team culture.</h3>
                
                <ul class="list-group list-group-horizontal text-no wrap overflow-auto p-0 border-bottom-0 product-menu">
                    <li class="list-group-item item pt-4 pb-0 border-0 border-end-0 bg-light-dark" @click="changeScreen(0)">
                        <h6 v-if="screen == 0" class="text-info text-center">Safety</h6>
                        <h6 v-if="screen != 0" class="text-white text-center">Safety</h6>
                        <div v-if="screen == 0" class="bg-info mx-auto mt-4 mb-0 product-item-active rounded"></div>
                    </li>

                    <li class="list-group-item item pt-4 pb-0 border-0 border-end-0 bg-light-dark" @click="changeScreen(1)">
                        <h6 v-if="screen == 1" class="text-info text-center">Growth</h6>
                        <h6 v-if="screen != 1" class="text-white text-center">Growth</h6>
                        <div v-if="screen == 1" class="bg-info mx-auto mt-4 mb-0 product-item-active rounded"></div>
                    </li>

                    <li class="list-group-item item pt-4 pb-0 border-0 border-end-0 bg-light-dark" @click="changeScreen(2)">
                        <h6 v-if="screen == 2" class="text-info text-center">Income</h6>
                        <h6 v-if="screen != 2"  class="text-white text-center">Income</h6>
                        <div v-if="screen == 2" class="bg-info mx-auto rounded mt-4 mb-0 product-item-active rounded"></div>
                    </li>
                </ul>
                
                <div v-show="screen == 1" id="section-2" class="row content">
                    <p class="text-info text-uppercase mb-2 fw-bold mb-0 mt-4 small-title d-none" style="letter-spacing: 2.5px;">Growth</p>                  
                    <div class="col-md-8 product-content">
                        <h2 class="text-white w-75 fw-small mb-4" style="letter-spacing: -1px;
                    font-weight: 300;">Watch your Money Grow</h2>
                        <p style="font-size: 1.1rem">
                            The majority of investors invest to receive capital gains, which means that it's important that their invested amount grows. There are several options in the market that offer this benefit.
                        </p>

                        <p style="font-size: 1.1rem">
                            These include:
                        </p>
                        
                        <div class="row">
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span style="font-size: 16px"> Stocks </span>   
                            </p>

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span style="font-size: 16px"> Mutual Funds </span> 
                            </p>
                            
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span style="font-size: 16px"> Gold </span> 
                            </p>  

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span style="font-size: 16px"> Property </span> 
                            </p>  

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span style="font-size: 16px"> Commodities </span> 
                            </p>                     
                        </div>                                      

                        <div class="d-flex mt-4 navigation d-none">
                            <button class="btn btn-secondary ms-auto w-100 me-2 mb-2" @click="changeScreen(0, 'section-1')">
                                <font-awesome-icon class="me-2" :icon="['fas', 'angle-left']"></font-awesome-icon> Markets
                            </button> 
                            
                            <button class="btn btn-info ms-auto w-100" @click="changeScreen(2, 'section-3')">
                                Private Wealth <font-awesome-icon class="ms-2" :icon="['fas', 'angle-right']"></font-awesome-icon>
                            </button>    
                        </div>                                            
                    </div>
                </div> 

                <div v-show="screen == 2" id="section-3" class="row content">
                    <p class="text-info text-uppercase mb-2 fw-bold mb-0 mt-4 small-title d-none" style="letter-spacing: 2.5px;">Income</p>                                      
                    <div class="col-md-8 product-content">
                        <h2 class="text-white w-75 fw-small mb-4" style="letter-spacing: -1px; font-weight: 300;">A New Source of Income.</h2>

                        <p style="font-size: 1.1rem">Some individuals and Institutions invest with the objective of generating a second source of income. </p>

                        <p style="font-size: 1.1rem">Consequently, they invest in products that offer returns regularly like bank fixed-deposits, corporate and government bonds, etc.</p>

                        <div class="d-flex navigation mt-4 d-none">
                            <button class="btn btn-info ms-auto w-100 me-2 mb-2" @click="changeScreen(1, 'section-3')">
                                <font-awesome-icon class="me-2" :icon="['fas', 'angle-left']"></font-awesome-icon> Sub-advisory
                            </button>  
                        </div>
                    </div>
                </div> 

                <div v-show="screen == 0" id="section-3" class="row content">
                    <p class="text-info text-uppercase mb-2 fw-bold mb-0 mt-4 small-title d-none" style="letter-spacing: 2.5px;">Safety</p>                                      
                    <div class="col-md-8 product-content">
                        <h2 class="text-white w-75 fw-small mb-4" style="letter-spacing: -1px; font-weight: 300;">Safety</h2>

                        <p style="font-size: 1.1rem">Individuals & Institutions invest with an objective of keeping their money safe, irrespective of the rate of return they receive on their capital.</p>

                        <p style="font-size: 1.1rem">Such near-safe products include: fixed deposits, savings accounts, government bonds, etc. </p>

                        <div class="row">
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span style="font-size: 16px"> Corporate and public pension plans </span>   
                            </p>

                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span style="font-size: 16px"> Defined benefit plans </span> 
                            </p>
                            
                            <p class="mt-0 mb-3" style="font-size: 16px;"> 
                                <font-awesome-icon class="me-2" style="font-size: 12px" :icon="['fas', 'angle-right']"></font-awesome-icon> 
                                <span style="font-size: 16px"> Defined contribution plans </span> 
                            </p>                     
                        </div>

                        <div class="d-flex navigation mt-4 d-none">
                            <button class="btn btn-info ms-auto w-100 me-2 mb-2" @click="changeScreen(1, 'section-3')">
                                <font-awesome-icon class="me-2" :icon="['fas', 'angle-left']"></font-awesome-icon> Sub-advisory
                            </button>  
                        </div>
                    </div>
                </div>                                                                      
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../../assets/scss/helpers/_breakpoints.scss';
    @import '../../../assets/scss/abstracts/_variables.scss';
    
    .bg-light-dark {
        background: #373a3e!important;
    }

    .content {
        margin-top: 3rem;

        @include media("<=Lphone") {
            max-width: 100%!important;
        } 

        .small-title {
            @include media("<=Lphone") {
                display: block!important;
            }               
        }
    }

    .product-content {
        margin-left: 8%;


        .navigation {
            @include media("<=Lphone") {
                display: block!important;
            }             
        }         

        @include media("<=tablet", ">Lphone") {
            margin-left: 4%;
        }

        @include media("<=Lphone") {
            margin-left: 0;
        }        
    }

    .product-menu {
        margin-top: 3rem;

        .item {
            width: 33.33%;
            cursor: pointer; 
        }

        @include media("<=Lphone") {
            // padding-bottom: 5px;
            display: none;
        }        
    }    

    .product-item-active {
        width: 30%; 
        height: 2px;

        @include media("<=tablet") {
            width: 70%;
        }   
    }

</style>

<script>
    export default {
        name: 'Products',
        props: {
            page_props: {
                required: true, 
                type: Object
            }
        },
        data() {
            return {
                screen: 0
            }
        },
        methods: {
            changeScreen(value, id) {
                this.screen = value
                setTimeout(() => {
                    document.getElementById(id).scrollIntoView({behaviour: "smooth"}); 
                }, 300);
            }
        }
    }
</script>