import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { myUnpublishedPosts } from "../../graphql/query";
import PostDetail from "./PostDetail";
import { Post } from "../../constants/types";

const MyDrafts = () => {
    let drafts = undefined;
    const { loading, error, data, refetch, networkStatus } = useQuery<{ myUnpublishedPosts: Post[] }>(
        myUnpublishedPosts, 
        { notifyOnNetworkStatusChange: true }
    );

    if (loading) <p>Loading...</p>;
    if (error) <p>Error in MyDrafts {error.message}</p>;

    if (data) {
        drafts = data.myUnpublishedPosts.map(post => <PostDetail post={post} key={post.id} />);
    }

    if (networkStatus === 4) <p>Refetching...</p>;

    const handleRefetch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        refetch();
    }

    return (
        <div>
            <h1>Drafts</h1>
            <ul>{drafts}</ul>
            <button onClick={handleRefetch}>Refetch</button>
        </div>
    );
};

export default MyDrafts;
