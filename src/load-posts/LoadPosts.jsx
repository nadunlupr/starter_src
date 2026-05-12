import { useEffect, useState } from "react";

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