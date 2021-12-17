<template>
    <section-title v-if="title.status == true" :title=title.title :actions=title.actions></section-title>

    <div class="row">
        <div class="col-md-12">
            <div class="input-group mb-3">
                <status v-model:status_data=status_data></status>

                <form action="#" @submit.prevent="fetchResults()" style="width: inherit">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control search" v-model="search" placeholder="Search through system." aria-label="search" aria-describedby="search-submit">

                        <span class="input-group-text search-icon" id="search-submit">
                            <button class="btn btn-transparent" type="submit">
                                <font-awesome-icon class="icon" :icon="['fa', 'search']" /> 
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <div id="tables" class="row">
        <div class="col-md-12">
            <small class="text-muted fw-bold">{{ totals }} total records</small>
            <small class="text-muted float-end fw-bold">{{ totals }} records showing</small>
            
            <table id="table" class="table table-striped mt-2">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th v-for="(header, index) in headers" :key="index" scope="col">
                            <span class="text-capitalize">{{ header }}</span>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td v-for="(header, index) in headers" :key="index">{{
                            item[header] }}</td>

                        <td class="dropdown">
                            <font-awesome-icon :icon="['fas', 'ellipsis-h']" class="dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false" @click="setListData(item)"></font-awesome-icon>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                                <li v-for="({name, action_url, type}, index) in all_screens[screen-1].actions" :key="index">
                                    <a class="dropdown-item" v-if="type == 'api'" @click="autoAPI(action_url)">{{ name }}</a>

                                    <a class="dropdown-item" v-if="type == 'modal'" data-bs-toggle="modal" :data-bs-target="'#' + action_url">{{ name }}</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div id="cards" class="row mb-3">
        <div class="col-md-12">
            <small class="text-muted fw-bold">+{{ totals }} total</small>
            <small class="text-muted float-end fw-bold">{{ totals }} records found.</small>
        </div>

        <div class="col-md-6 mt-3" v-for="(item, index) in data" :key="index">
            <div class="card mb-2 border-0">
                <div class="card-body pb-0">
                    <p class="text-dark fw-bold">{{ index + 1 }}. </p>
                    <p class="text-dark mb-3" v-for="(header, index) in headers" :key="index"> <span class="fw-bold text-uppercase">{{ header }}: </span> {{ item[header] }}</p>
                </div>
                <div class="card-footer border-0 bg-white">
                    <span v-for="({name, action_url, type}, index) in all_screens[screen-1].actions" :key="index" >
                        <button class="btn button default btn-sm" v-if="type == 'modal'" data-bs-toggle="modal" :data-bs-target="'#' + action_url" @click="setListData(item)">
                            <span class="ms-2 me-2">{{ name }}</span>
                        </button>  

                        <button class="btn button default btn-sm" v-if="type == 'api'" @click="autoAPI(action_url, item['id'], action_url.message)"> 
                            <span class="ms-2 me-2">{{ name }}</span>
                        </button>   
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div class="row navigation">
        <div class="col-12 d-flex">
            <div class="mx-auto">
                <button class="btn default btn-sm me-2" @click="start()" :disabled="hidePrevious">
                    <span class="mx-1">Start <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-backward']" /></span>
                </button>

                <button class="btn default btn-sm me-2" id="previous" @click='previous()' :disabled="hidePrevious">
                    <font-awesome-icon class="icon me-2" :icon="['fa', 'caret-left']" /> Previous
                </button>

                <span>
                    ||
                </span>

                <button class="btn default btn-sm ms-2 me-2" id="next" @click='next()' :disabled="hideNext">
                    Next
                    <font-awesome-icon class="icon ms-2" :icon="['fa', 'caret-right']" />
                </button>

                <button class="btn default btn-sm me-2" @click="end()" :disabled="hideNext">
                    <span class="mx-1">End <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-forward']" /></span>
                </button>
            </div>
        </div>
    </div>

    <form-component></form-component>

</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_lists.scss';
</style>

<script>
import FormComponent from '../components/Form';
import SectionTitle from'../components/SectionTitle';
import Status from '../components/Status';

export default {
    name: 'AutoList',
    props: {
        title: {
            type: Object,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        all_screens: {
            required: true,
            type: Object
        },
        screen: {
            required: true,
            type: Number
        },
        list_data: {
            required: true,
            type: Object
        }
    },
    components: {
        FormComponent,
        SectionTitle,
        Status
    },
    mounted() {
        this.getDatabyPage()
    },
    data (){
        return {
            error: [],
            page: 0,
            limit: 25,
            totals: '',
            data: [],
            current_limit: 25,
            hidePrevious: true,
            hideNext: false,
            max: 0,
            search: '',
            awaitingSearch: false,
            headers: [],
            status_data: {
                "success": false,
                "success_message": 'Form Submission was successful!',
                "error": false,
                "error_message": 'There are some errors.',
                "loading": false
            },
        }
    },
    watch: {
        url: function() {
            this.getDatabyPage()
        }
    },
    methods: {
        getDatabyPage() {
            this.axios.get(this.url + '?size=' + this.limit + '&page=' + this.page).then((response) => {
                this.data = response.data.data
                this.headers = response.data.headers
                this.totals = response.data.data.length
            }).catch((error) => {
                this.error = error.response.data
            })
        },
        setListData(data) {
            this.$store.dispatch("getModalList", data)
            console.log(this.$store.state.modal_list)
        },
        autoAPI(url, id, message) {
            this.status_data.loading = true
            
            this.axios[url.type](url.url + id).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = message.success

                setTimeout(() => (this.status_data.success = false), 2000)
                this.getDatabyPage() 
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = message.error

                setTimeout(() => (this.status_data.error = false), 2000)                
                console.log(error)
            })
        }
    }
}
</script>