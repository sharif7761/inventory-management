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
                                        <router-link to="/store-employee" class="btn btn-primary float-right">Add Employee</router-link>
                                        <h1 class="h4 text-gray-900 mb-4">All Employee</h1>
                                    </div>
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
    }

}
</script>

<style type="text/css">

</style>
