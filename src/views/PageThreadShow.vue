<template>
  <div
       class="col-large push-top"
  >

    <h1>{{thread.title}}</h1>

    <PostList :posts="threadPosts"/>
    <PostEditor @save-post="addPost "/>
  </div>
</template>

<script>
    import sourceData from "@/data.json"
    import PostList from "@/components/PostList";
    import PostEditor from "@/components/PostEditor";
    export default {
        name: "ThreadShow",
        components: {PostEditor, PostList},
        props: {
            id: {
                required: true,
                type: String
            }
        },
        data (){
            return {
                threads: sourceData.threads,
                posts: sourceData.posts,
                newPostText: ''
            }
        },
        computed: {
            thread () {
              return this.threads.find(thread => thread.id === this.id)
            },

            threadPosts () {
                return this.posts.filter(post => post.threadId === this.id)
            }
        },
        methods: {
            addPost (eventData) {
                const post = {
                    ...eventData.post,
                    threadId: this.id
                }
                this.posts.push(post)
                this.threads.push(post.id)

                this.newPostText = ''
            }
        }
    }
</script>

<style scoped>

</style>
