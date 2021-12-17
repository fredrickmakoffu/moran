<template>
    <div class="container">
        <div class="row ps-4 pe-4">
            <div class="row ps-4 pe-4 text-center">
                <p class="text-white text-uppercase mb-2 fw-bold" style="letter-spacing: 2.5px;">Contact Us</p>
                <h3 class="text-light-grey" style="letter-spacing: -1px; font-weight: 300;">Reach out to us for any inquiries</h3>
            </div>

            <form class="col-md-10 offset-md-1 col-sm-12 mt-4">
                <div class="row mb-4">
                    <label for="first_name" class="fw-bold mb-2">Your names</label>
                    <div class="input-group">
                        <input id="first_name" type="text" class="form-control" placeholder="Enter your Names" required> 
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="first_name" class="fw-bold mb-2">Your Email</label>
                    <div class="input-group">
                        <input id="email" type="email" class="form-control" placeholder="Enter your email" required> 
                    </div>
                </div>


                <div class="row mb-4">
                    <label for="first_name" class="fw-bold mb-2">Subject</label>
                    <div class="input-group">
                        <input id="email" type="text" class="form-control" placeholder="Enter subject of your email. " required> 
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="first_name" class="fw-bold mb-2">Message</label>
                    <div class="input-group">
                        <textarea name="message" id="message" class="form-control" rows="3"></textarea>
                    </div>
                </div>

                <div class="row">
                    <button class="btn bg-grey text-white mx-auto" style="line-height: 2.5; width: 98%">Submit <font-awesome-icon class="ms-2" :icon="['fas', 'angle-right']"></font-awesome-icon> </button>
                </div>
            </form>           
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../../assets/scss/abstracts/_variables.scss';
    
    .contact-title {
        // font-size: 1rem; 
        margin-top: 1rem;
    }

    .form-select, .form-control {
        line-height: 3;
        border: 1px solid $dark-grey-color;
        background-color: $dark-grey-color;
        color: $light-grey-color;

        &::placeholder {
            color: $light-grey-color;
        }
    }

    .form-select option{
        color: $dark-color;
    }

    .form-select option:first-child{
        color: $secondary-secondary-color;
    }

    .card {
        border: 1px solid #eee;
    }

    .circle-icon {
        padding: 0.6rem;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
</style>

<script>
    export default {
        name: 'Contacts'
    }
</script>