<template>
  <div class="col-full">

    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

      <ThreadListItem v-for="thread in threads" :key="thread.id" :thread="thread"/>


    </div>
  </div>
</template>

<script>
    import ThreadListItem from "@/components/ThreadListItem";
    export default {
        name: "ThreadList",
        components: {ThreadListItem},
        props: {
            threads: {
                type: Array,
                required: true
            }
        },

        computed: {
            thread () {
                return this.threads.find(thread => thread.id === this.id)
            }
        },
    }
</script>

<style scoped>

</style>
