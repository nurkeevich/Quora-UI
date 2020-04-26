import React from "react";
import { Post } from "../../graphql/query";

interface PostDetailProps {
    post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
    return (
        <div>
            <p>{post.title}</p>
            <button>Delete</button>
        </div>
    );
};

export default PostDetail;
