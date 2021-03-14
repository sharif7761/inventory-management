<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="card shadow-sm my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <router-link to="/employee" class="btn btn-primary float-right">All Employee</router-link>
                                        <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                                    </div>
                                    <form class="user" @submit.prevent="employeeInsert" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <label>Full Name</label>
                                            <input type="text" class="form-control" id="exampleInputFullName" placeholder="Enter Full Name" v-model="form.name">
                                            <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                                   placeholder="Enter Email Address" v-model="form.email">
                                            <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" class="form-control" id="exampleInputAddress" aria-describedby="emailHelp"
                                                   placeholder="Enter Address" v-model="form.address">
                                            <small class="text-danger" v-if="errors.address">{{ errors.address[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <label>Salary</label>
                                            <input type="text" class="form-control" id="exampleInputSalary" aria-describedby="emailHelp"
                                                   placeholder="Enter Salary" v-model="form.salary">
                                            <small class="text-danger" v-if="errors.salary">{{ errors.salary[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <label>Joining Date</label>
                                            <input type="date" class="form-control" id="exampleInputJoining" aria-describedby="emailHelp"
                                                   placeholder="Enter Joining Date" v-model="form.joining_date">
                                            <small class="text-danger" v-if="errors.joining_date">{{ errors.joining_date[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <label>NID</label>
                                            <input type="text" class="form-control" id="exampleInputNID" aria-describedby="emailHelp"
                                                   placeholder="Enter NID Number" v-model="form.nid">
                                            <small class="text-danger" v-if="errors.nid">{{ errors.nid[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input type="text" class="form-control" id="exampleInputPhone" aria-describedby="emailHelp"
                                                   placeholder="Enter Phone Number" v-model="form.phone">
                                            <small class="text-danger" v-if="errors.phone">{{ errors.phone[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <label>Photo</label>
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="customFile">
                                                        <label class="custom-file-label" for="customFile">Choose Image</label>
                                                        <small class="text-danger" v-if="errors.photo">{{ errors.photo[0] }}</small>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <img src="" height="40px" width="40px" alt="employee img">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Add Employee</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    created() {
        if(!User.loggedIn()){
            this.$router.push({ name: '/' })
        }
    },

    data() {
        return {
            form: {
                name: null,
                email: null,
                phone: null,
                salary: null,
                address: null,
                photo: null,
                nid: null,
                joining_date: null,
            },

            errors: {}
        }
    },

    methods: {
        employeeInsert(){

        }
    }
}

</script>

<style type="text/css">

</style>
