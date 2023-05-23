<template>
    <h1>Dashbord Vue</h1>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {
            console.log(this.$route.path.substring(7));
        },
    }
</script>