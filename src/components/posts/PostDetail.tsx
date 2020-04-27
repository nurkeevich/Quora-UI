import React, { useContext } from "react";
import { Post } from "../../constants/types";
import { AuthContext } from "../../utils/Auth";

interface PostDetailProps {
    post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
    const { currentUser } = useContext(AuthContext);

    const handlePostDelete = () => {
        console.log("title", post.title);
        console.log("id", post.id);

        console.log("Current user ID", currentUser.id);
        console.log("Post author ID", post.author?.id);
    };

    const isAuthor = () => {
        if (post.author && currentUser) {
            return post.author.id === currentUser.id;
        } else {
            return false;
        }
    };

    return (
        <div>
            <p>{post.title}</p>
            {isAuthor() && <button onClick={handlePostDelete}>Delete</button>}
        </div>
    );
};

export default PostDetail;
