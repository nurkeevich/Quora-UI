import React, { useContext } from "react";
import { Post } from "../../constants/types";
import { AuthContext } from "../../utils/Auth";
import { Link } from "react-router-dom";
import { Routes } from "../../constants/appConstants";

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

    const EditPost = () => (
        <div>
            <Link to={Routes.EDIT_POST + "/" + post.id}>
                <button>Edit</button>
            </Link>
        </div>
    );

    return (
        <div>
            <p>{post.title}</p>
            <p>{post.content}</p>
            {isAuthor() && <button onClick={handleDelete}>Delete</button>}
            {isAuthor() && <EditPost />}
        </div>
    );
};

export default PostDetail;
