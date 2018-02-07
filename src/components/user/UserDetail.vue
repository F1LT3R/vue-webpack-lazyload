<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded as ID: {{ $route.params.id }}</p>
        <router-link
            tag="button"
            :to="link"
            class="btn btn-primary">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter (to, from, next) {
        	// this.link (unavailable as comp is not instantiated)
        	next(vm => {
        		// but is available on vm, but then comp MUST be instantiated
        		console.log(vm.link)
        	})
        	// Abort loading route
        	// next(false)
        }
    }
</script>