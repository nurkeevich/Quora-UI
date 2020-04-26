import React, { useState } from "react";
import { Post } from "../../graphql/query";

interface PostFormProps {
    handleSubmit: (post: Post) => void;
    post?: Post;
}

export const PostForm = (props: PostFormProps) => {
    const [title, setTitle] = useState(props.post ? props.post.title : "");
    const [content, setContent] = useState(props.post ? props.post.content : "");
    const [published, setPublished] = useState(props.post ? props.post.published: false);
    const [error, setError] = useState("")
    const buttonText = props.post ? "Save Post" : "Add Post" 

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title || !content) {
            setError("Title and/or content has to be filled");
        } else {
            setError("");
            props.handleSubmit({
                content,
                published,
                title
            })
        }
    }
    
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentTitle = event.currentTarget.value;
        setTitle(currentTitle);
    }
    
    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentContent = event.currentTarget.value;
        setContent(currentContent);    
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentPublished = event.currentTarget.checked;
        setPublished(currentPublished);
    }
    

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleFormSubmit}>
                <input autoFocus type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
                <textarea placeholder="Content" value={content} onChange={handleContentChange} />
                <input type="checkbox" checked={published} onChange={handleCheckboxChange} />
                <button>{buttonText}</button>
            </form>
        </div>
    );
};
