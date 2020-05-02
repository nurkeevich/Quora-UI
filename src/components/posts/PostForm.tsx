import React, { useState, FC } from "react";
import { Post } from "../../constants/types";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../../constants/appConstants";

interface PostFormProps {
    handleSubmit: (post: Post) => void;
    handleFormCancel: () => void;
    post?: Post;
}

export const PostForm = (props: PostFormProps) => {
    const [title, setTitle] = useState(props.post ? props.post.title : "");
    const [content, setContent] = useState(props.post ? props.post.content : "");
    const [published, setPublished] = useState(props.post ? props.post.published : false);
    const [error, setError] = useState("");
    const buttonText = props.post ? "Save Post" : "Add Post";

    const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (!title || !content) {
            setError("Title and/or content has to be filled");
        } else {
            setError("");
            props.handleSubmit({ content, published, title });
        }
    };
    
    const handleCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        props.handleFormCancel();
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentTitle = event.currentTarget.value;
        setTitle(currentTitle);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentContent = event.currentTarget.value;
        setContent(currentContent);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentPublished = event.currentTarget.checked;
        setPublished(currentPublished);
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <div>
                <input
                    autoFocus
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={handleContentChange}
                />
                <input
                    type="checkbox"
                    checked={published}
                    onChange={handleCheckboxChange}
                />
            </div>
            <div>
                <button onClick={handleFormSubmit}>{buttonText}</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};
