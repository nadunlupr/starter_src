// users API: https://jsonplaceholder.typicode.com/users
// posts API: https://jsonplaceholder.typicode.com/posts?userId=2

export default function LoadPosts(props) {
    const initState = {
        users: [],
        selectedUserId: 1,
        userPosts: [],
    }
    

    return (
        <div className="user-post-container">
            <div className="users">
                {/* List the users as clickable here */}
            </div>
            <div className="user-posts">
                {/* List the posts of the selected user here */}
            </div>
        </div>
    )
}