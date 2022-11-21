import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: '🧡 15'},
        {id: 2, message: "It's my first post ^_^", like: '🧡 12'},
    ],
}
test('length of posts should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com")
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});

test('message of post should be correct', () => {
    let action = addPostActionCreator("it-kamasutra.com")
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe("it-kamasutra.com")
});


test('after deleting length of messages should me decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
});

test('after deleting length of messages shouldnt decrement if id is incorrect', () => {
    let action = deletePost(100)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});
