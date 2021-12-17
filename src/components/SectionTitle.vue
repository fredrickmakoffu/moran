<template>
    <span class="d-flex">
        <h5 class="content-title" style="margin-top: 45px; margin-bottom: 20px;">{{ title }}</h5>
        <div class="content-buttons" v-if="actions">
            <span v-for="({name, action_url, type}, index) in actions" :key="index" >
                
                <button class="btn button success btn-sm" v-if="type == 'modal'"  data-bs-toggle="modal" :data-bs-target="'#' + action_url" @click="setListData(data = {})">
                    <span class="ms-2 me-2">{{ name }}</span><font-awesome-icon :icon="['fa', 'angle-down']" />&nbsp; 
                </button>  

                <button class="btn button success btn-sm" v-if="type == 'api'" @click="autoAPI(action_url)"> 
                    <span class="ms-2 me-2">{{ name }}</span><font-awesome-icon :icon="['fa', 'angle-down']" />&nbsp; 
                </button>   
            </span>
        </div>
    </span>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_lists.scss';
</style>

<script>
export default {
    name: "SectionTitle",
    props: {
        title: {
            type: String,
            required: true
        },
        actions: {
            type: Array,
            required: true
        },
        list_data: {
            required: false,
            type: Object
        }
    },
    methods: {
        setListData(data) {
            this.$store.dispatch("getModalList", data)
        }
    }
}
</script>