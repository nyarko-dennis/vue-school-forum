<template>
  <div
          class="thread"
  >
    <div>
      <p>
        <router-link :to="{ name: 'ThreadShow', params: {id: thread.id}}">{{ thread.title }}</router-link>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="#">{{ userById(thread.userId).name }}</a>, {{ thread.publishedAt}}.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{ thread.posts.length }} replies
      </p>

      <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

      <div>
        <p class="text-xsmall">
          <a href="#">{{ userById(thread.userId).name }}</a>
        </p>
        <p class="text-xsmall text-faded">{{ thread.publishedAt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import sourceData from "@/data.json";

    export default {
        name: "ThreadListItem",
        props: {
            thread: {
                type: Object,
                required: true
            }
        },
        data (){
            return {
                posts: sourceData.posts,
                users: sourceData.users
            }
        },

        methods : {
            postById (postId) {
                return this.posts.find(p => p.id === postId)
            },
            userById (userId) {
                return this.users.find(p => p.id === userId)
            }
        }
    }
</script>

<style scoped>

</style>
