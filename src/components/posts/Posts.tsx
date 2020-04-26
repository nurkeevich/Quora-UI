import React from "react";
import PostDetail from "./PostDetail";
import { useQuery } from "@apollo/react-hooks";
import { postsQuery, IPostQuery } from "../../graphql/query";

export const Posts = () => {
    let posts = undefined;
    const { loading, error, data } = useQuery<IPostQuery>(postsQuery);
    
    if (loading) {
        return <p>Loading...</p>
    }

    if (data) {
        posts = data.posts.map(post => <PostDetail post={post} key={post.id} />);
    }

    return <ul>{posts}</ul>;
};
