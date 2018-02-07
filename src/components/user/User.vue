<template>
    <div>
        <h1>The User Page</h1>
        <!-- <p>Loaded ID: {{ id }}</p> -->
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        methods: {
            navigateToHome () {
                this.$router.push({
                    path: '/',
                })
            }
        }
    }
</script>