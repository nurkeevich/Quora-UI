import React, { useContext } from "react";
import { Post } from "../../constants/types";
import { AuthContext } from "../../utils/Auth";

interface PostDetailProps {
    post: Post;
    handlePostDelete: (id: string) => void;
}

const PostDetail = ({ post, handlePostDelete }: PostDetailProps) => {
    const { currentUser } = useContext(AuthContext);

    const isAuthor = () => {
        if (post.author && currentUser) {
            return post.author.id === currentUser.id;
        } else {
            return false;
        }
    };

    const handleDelete = () => handlePostDelete(post.id!);

    return (
        <div>
            <p>{post.title}</p>
            {isAuthor() && <button onClick={handleDelete}>Delete</button>}
        </div>
    );
};

export default PostDetail;
