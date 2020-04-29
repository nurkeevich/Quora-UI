import React from "react";
import PostDetail from "./PostDetail";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { postsQuery } from "../../graphql/query";
import { Post } from "../../constants/types";
import {
    deletePostMutation,
    DeletePostMutationResponse
} from "../../graphql/mutation";

export const Posts = () => {
    let posts = undefined;
    const { loading, error, data, refetch, networkStatus } = useQuery<{ posts: Post[] }>(postsQuery, { notifyOnNetworkStatusChange: true });
    const [ deletePost, { loading: loadingDeletePost, error: errorDeletePost }] = useMutation<{ deletePost: DeletePostMutationResponse }>(
        deletePostMutation,
        { refetchQueries: [{ query: postsQuery }] }
    );

    if (loading || loadingDeletePost) <p>Loading...</p>;
    if (error || errorDeletePost) <p>Error in posts</p>;

    const handlePostDelete = (id: string) => {
        const result = deletePost({ variables: { id } });
        result
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    if (data) {
        posts = data.posts.map(post => (
            <PostDetail
                handlePostDelete={handlePostDelete}
                post={post}
                key={post.id}
            />
        ));
    }

    if (networkStatus === 4) <p>Refetching...</p>;

    const handleRefetch = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
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
