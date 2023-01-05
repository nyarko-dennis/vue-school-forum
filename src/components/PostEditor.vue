<template>
  <div class="col-full">
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea v-model="newPostText" name="" id="" cols="30" rows="10" class="form-input"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit Post</button>
      </div>
    </form>
  </div>
</template>

<script>

    export default {
        name: "PostEditor",
        data() {
            return {
                newPostText: ''
            }
        },
        methods: {
            addPost () {
                const postId = '0234' + Math.random()
                const post = {
                    id: postId,
                    text: this.newPostText,
                    publishedAt: Math.floor(Date.now() / 1000),
                    threadId: this.id,
                    userId: 'f5xvKdIPQdSrUtT6i3UiHYttRXO2'
                }

                this.$emit('save-post', post)
            }
        }
    }
</script>

<style scoped>

</style>
