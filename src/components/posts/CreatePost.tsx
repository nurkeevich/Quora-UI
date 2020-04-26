import React, { useState, FC } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ICreatePost, createPostMutation } from "../../graphql/mutation";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../../constants/appConstants";

interface CreatePostProps extends RouteComponentProps {
    // enter own props here
}

const CreatePost: FC<CreatePostProps> = props => {
    const [createPost, { loading, error, data }] = useMutation<{createPost: ICreatePost}>(createPostMutation);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [published, setPublished] = useState(false);

    const setStatesToDefault = () => {
        setTitle("");
        setContent("");
        setPublished(false);
    }

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentTitle = event.currentTarget.value;
        setTitle(currentTitle);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currentContent = event.currentTarget.value;
        setContent(currentContent);
    };
    
    const handleDraftCreate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        console.log("Before", {title, content, published});
        
        const response = createPost({ variables: { title, content, published } });
        response
            .then(res => {
                console.log("RES", res);
                props.history.push(published ? Routes.DASHBOARD : Routes.MYDRAFTS);
            })
            .catch(err => {
                console.log(err);
            });
        setStatesToDefault()
    };

    const handleDraftCancel = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setStatesToDefault();
        props.history.push(Routes.DASHBOARD);
    }
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked
        setPublished(checked);
    }
    

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        alert(error.message)
    }

    return (
        <div>
            <h1>Create Post</h1>
            <div>
                <input type="text" placeholder="Title" value={title} onChange={handleTitleChange}/>
                <textarea value={content} placeholder="Content" onChange={handleContentChange}/>
                publish
                <input type="checkbox" checked={published} onChange={handleCheckboxChange}/>
                <div>
                    <button onClick={handleDraftCreate}>create</button>
                    <button onClick={handleDraftCancel}>cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
