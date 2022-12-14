export function handle(state, action) {
    //we ve to create this state obj(state.json) -> this state obj has post{} and author
    //for the access control only author can creat,update, delete the post
    /* address of the caller is available in action.caller */
    if (action.input.function === 'initialize') {
      state.author = action.caller
    }
    if (action.input.function === 'createPost' && action.caller === state.author) {
      const posts = state.posts
      //the postid is from uuid
      posts[action.input.post.id] = action.input.post
      state.posts = posts //reset the posts(state)
    }
    //for update its sim to the create post
    if (action.input.function === 'updatePost' && action.caller === state.author) {
      const posts = state.posts
      const postToUpdate = action.input.post
      posts[postToUpdate.id] = postToUpdate
      state.posts = posts //reset
    }
    if (action.input.function === 'deletePost' && action.caller === state.author) {
      const posts = state.posts
      delete posts[action.input.post.id]
      state.posts = posts //reset
    }
    return { state }
  }