import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { myUnpublishedPosts, IMyUnpublishedPosts } from "../../graphql/query";
import PostDetail from "./PostDetail";

const MyDrafts = () => {
    let drafts = undefined;
    const { loading, error, data, refetch, networkStatus } = useQuery<
        IMyUnpublishedPosts
    >(myUnpublishedPosts, { notifyOnNetworkStatusChange: true });

    if (loading) <p>Loading...</p>;
    if (error) <p>Error...</p>;

    if (data) {
        drafts = data.myUnpublishedPosts.map(post => (
            <PostDetail post={post} key={post.id} />
        ));
    }

    if (networkStatus === 4) <p>Refetching...</p>;

    const handleRefetch = () => {
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
