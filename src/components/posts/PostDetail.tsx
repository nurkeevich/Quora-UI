import React from "react";
import { Post } from "../../graphql/query";

interface PostDetailProps {
    post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
    return <div>{post.title}</div>;
};

export default PostDetail;
