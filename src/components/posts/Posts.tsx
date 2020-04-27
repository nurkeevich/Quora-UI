import React from "react";
import PostDetail from "./PostDetail";
import { useQuery } from "@apollo/react-hooks";
import { postsQuery } from "../../graphql/query";
import { Post } from "../../constants/types";

export const Posts = () => {
    let posts = undefined
    const { loading, error, data, refetch, networkStatus } = useQuery<{posts: Post[]}>(postsQuery, { notifyOnNetworkStatusChange: true });

    if (loading) <p>Loading...</p>
    if (error) <p>Error in posts {error.message}</p>

    if (data) {
        posts = data.posts.map(post=> <PostDetail post={post} key={post.id}/>);
    }

    if (networkStatus === 4) <p>Refetching...</p>

    const handleRefetch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        refetch();
    };

    return (
        <div>
            <ul>{posts}</ul>
            <button onClick={handleRefetch}>Refetch</button>
        </div>
    );
};
