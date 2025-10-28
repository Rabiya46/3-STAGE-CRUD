import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POSTS_THUNK } from "../store/slices/postsThunk";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const { post } = useSelector((state) => state.posts);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     dispatch(POSTS_THUNK.getPostById({ id, navigate }));
  //   }, [id]);

  return (
    <div>
      <h1>{post?.title}</h1>
    </div>
  );
};

export default Post;
