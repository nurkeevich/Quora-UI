import React, { FC } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getPost, GetPostResponse, postsQuery, myUnpublishedPosts } from "../../graphql/query";
import { PostForm } from "./PostForm";
import { Post } from "../../constants/types";
import { updatePostMutation, UpdatePostMutationResponse } from "../../graphql/mutation";
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
        const result = updatePost({
            variables: { id: props.match?.params.id, ...post }
        });
        result
            .then(res =>  props.history.push(res.data?.updatePost.published ? Routes.DASHBOARD : Routes.MYDRAFTS))
            .catch(err => { throw new Error(err) });
    };

    const handleFormCancel = () => {
        const published = data.post.published;
        props.history.push(published ? Routes.DASHBOARD : Routes.MYDRAFTS);
    };

    return (
        <div>
            <h1>Edit Post</h1>
            <PostForm post={data.post} handleSubmit={handleSubmit} handleFormCancel={handleFormCancel} />
        </div>
    );
};

export default EditPost;
