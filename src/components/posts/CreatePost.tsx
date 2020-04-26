import React, { useState, FC } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ICreatePost, createPostMutation } from "../../graphql/mutation";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../../constants/appConstants";
import { PostForm } from "./PostForm";
import { Post } from "../../graphql/query";

interface CreatePostProps extends RouteComponentProps {
    // enter own props here
}

const CreatePost: FC<CreatePostProps> = props => {
    const [createPost, { loading, error, data }] = useMutation<{ createPost: ICreatePost }>(createPostMutation);

    if (loading) <p>Loading...</p>;
    if (error) <p>{error.message}</p>;

    const handleSubmit = (post: Post) => {
        const result = createPost({ variables: { ...post } });
        result
            .then(res => {
                console.log(res);
                props.history.push(post.published ? Routes.DASHBOARD : Routes.MYDRAFTS)
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Create Post</h1>
            <PostForm handleSubmit={handleSubmit} />
        </div>
    );
};

export default CreatePost;
