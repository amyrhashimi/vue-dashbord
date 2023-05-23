<template>
    <div class="toolbar" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
            <div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                <h1 class="d-flex align-items-center text-dark fw-bolder fs-3 my-1">Edit Contact</h1>
                <span class="h-20px border-gray-200 border-start mx-4"></span>
            </div>
            <div class="d-flex align-items-center py-1">
                <span class="btn btn-sm btn-success" @click.prevent="update" >Update</span>
                <router-link :to="{name: 'admin.contact'}" class="btn btn-sm btn-danger ms-3">Cansel</router-link>
            </div>
        </div>
    </div>

    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card">
                <div class="card-body pt-5">
                    
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="mb-10">
                                <label for="exampleFormControlInput1" class="required form-label">Name</label>
                                <input type="email" class="form-control form-control-solid mb-3" :class="{ 'border-danger' : errors.name }" v-model="contact.name" />

                                <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="mb-10">
                                <label for="exampleFormControlInput1" class="required form-label">Family</label>
                                <input type="email" class="form-control form-control-solid mb-3" :class="{ 'border-danger' : errors.family }" v-model="contact.family" />

                                <span class="text-danger" v-if="errors.family">{{ errors.family[0] }}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-10">
                        <label for="exampleFormControlInput1" class="required form-label">Phone</label>
                        <input type="email" class="form-control form-control-solid mb-3" :class="{ 'border-danger' : errors.phone }" v-model="contact.phone" />

                        <span class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                contact: {},
                errors : [],
            }
        },
        beforeMount() {
            axios.get("/api/contacts/" + this.$route.params.id)
            .then( (res) =>{
                this.contact = res.data
            })
        },
        methods: {
            update(){
                axios.post('/api/contacts/' + this.$route.params.id + '/edit', this.contact)
                .then( (res) => {
                    this.$router.push({name: 'admin.contact'});
                })
                .catch( (errors) => {
                    if( errors.response.status === 422 ){
                        this.errors = errors.response.data.errors;
                    }
                })
            }
        },
    }
</script>