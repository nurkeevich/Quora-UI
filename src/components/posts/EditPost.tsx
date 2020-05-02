import React, { FC, useState } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
    getPost,
    GetPostResponse,
    postsQuery,
    myUnpublishedPosts
} from "../../graphql/query";
import { PostForm } from "./PostForm";
import { Post } from "../../constants/types";
import {
    updatePostMutation,
    UpdatePostMutationResponse
} from "../../graphql/mutation";
import { Routes } from "../../constants/appConstants";

interface EditPostProps extends RouteChildrenProps<{ id: string }> {
    // add own props here
}

const EditPost: FC<EditPostProps> = props => {
    const { loading, error, data } = useQuery<{ post: GetPostResponse }>(
        getPost,
        { variables: { id: props.match?.params.id } }
    );

    const [
        updatePost,
        { loading: loadingUpdatePost, error: errorUpdatePost }
    ] = useMutation<{ updatePost: UpdatePostMutationResponse }>(
        updatePostMutation,
        {
            refetchQueries: [
                { query: postsQuery },
                { query: myUnpublishedPosts }
            ]
        }
    );

    if (loading || loadingUpdatePost) return <p>Loading...</p>;
    if (error || errorUpdatePost) return <p>Error Edit Post...</p>;
    if (!data) return <p>Not Found Edit post</p>;

    const handleSubmit = (post: Post) => {
        console.log("post before mutation", post);

        const result = updatePost({
            variables: { id: props.match?.params.id, ...post }
        });
        result
            .then(res => {
                console.log("post after mutation", res);

                props.history.push(
                    res.data?.updatePost.published
                        ? Routes.DASHBOARD
                        : Routes.MYDRAFTS
                );
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    return (
        <div>
            <div>Edit Post</div>
            <PostForm post={data.post} handleSubmit={handleSubmit} />
            <div>{props.match?.params.id}</div>
        </div>
    );
};

export default EditPost;
