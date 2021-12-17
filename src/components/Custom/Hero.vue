<template>
    <section class="admin-header bg-default">
        
        <div class="title">
            <h4 class="fw-bold text-white">{{ title }}</h4>
            <p class="text-white">{{ tagline }}</p>
        </div>

        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light fw-bold">Search through properties</h1>
            </div>

            <div class="row d-flex mt-4 p-4">
                <div class="col-3">
                    <div class="form-row">
                        <div class="input-group">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Choose Locations</option>
                            <option value="1">Nairobi</option>
                            <option value="2">Mombasa</option>
                            <option value="3">Thika</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <div class="form-row">
                        <div class="input-group">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Choose property type</option>
                            <option value="1">Property type 1</option>
                            <option value="2">Property type 2</option>
                            <option value="3">Property type 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="form-row">
                        <div class="input-group">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Choose properties</option>
                            <option value="1">Property 1</option>
                            <option value="2">Property 2</option>
                            <option value="3">Property 3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <button class="btn btn-danger w-75" style="line-height: 3">
                    Search <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '../../assets/scss/layout/_admin_header.scss';
</style>

<script>

export default {
    name: "AdminHeader",
    props: {
        title: {
            required: true,
            type: String
        },
        tagline: {
            required: true,
            type: String
        },
    }
}
</script>