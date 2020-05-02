import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { myUnpublishedPosts } from "../../graphql/query";
import PostDetail from "./PostDetail";
import { Post } from "../../constants/types";
import {
    deletePostMutation,
    DeletePostMutationResponse
} from "../../graphql/mutation";

const MyDrafts = () => {
    let drafts = undefined;
    const { loading, error, data, refetch, networkStatus } = useQuery<{
        myUnpublishedPosts: Post[];
    }>(myUnpublishedPosts, { notifyOnNetworkStatusChange: true });

    const [
        deletePost,
        { loading: loadingDeletePost, error: errorDeletePost }
    ] = useMutation<{ deletePost: DeletePostMutationResponse }>(
        deletePostMutation,
        { refetchQueries: [{ query: myUnpublishedPosts }] }
    );

    if (loading || loadingDeletePost) return <p>Loading...</p>;
    if (error || errorDeletePost) return <p>Error in MyDrafts</p>;

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

    if (data) drafts = data.myUnpublishedPosts.map(post => <PostDetail handlePostDelete={handlePostDelete} post={post} key={post.id} />);
    
    if (networkStatus === 4) <p>Refetching...</p>;

    const handleRefetch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        refetch();
    };

    return (
        <div>
            <h1>Drafts</h1>
            <ul>{drafts}</ul>
            <button onClick={handleRefetch}>Refetch</button>
        </div>
    );
};

export default MyDrafts;
