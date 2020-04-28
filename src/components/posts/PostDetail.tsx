import React, { useContext } from "react";
import { Post } from "../../constants/types";
import { AuthContext } from "../../utils/Auth";
import { useMutation } from "@apollo/react-hooks";
import { deletePostMutation, DeletePostMutationResponse } from "../../graphql/mutation";

interface PostDetailProps {
    post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
    const { currentUser } = useContext(AuthContext);
    const [deletePost, { loading, error }] = useMutation<{ deletePost: DeletePostMutationResponse }>(deletePostMutation);

    const handlePostDelete = () => {
        const result = deletePost({ variables: { id: post.id } });
        result
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log("Error in PostDetail", err);
            });
    };

    const isAuthor = () => {
        if (post.author && currentUser) {
            return post.author.id === currentUser.id;
        } else {
            return false;
        }
    };

    if (loading) <p>Loading...</p>;
    if (error) <p>Error on PostDetail {error.message}</p>;

    return (
        <div>
            <p>{post.title}</p>
            {isAuthor() && <button onClick={handlePostDelete}>Delete</button>}
        </div>
    );
};

export default PostDetail;
