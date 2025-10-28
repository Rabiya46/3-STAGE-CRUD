import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POSTS_THUNK } from "../store/slices/postsThunk";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Posts = () => {
  const { posts, post } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: { title: post.title },
  });

  useEffect(() => {
    dispatch(POSTS_THUNK.getAllPosts());
  }, []);

  useEffect(() => {
    if (post?.title) {
      reset({ title: post.title });
    }
  }, [post, reset]);

  const handleById = (id) => dispatch(POSTS_THUNK.getPostById({ id }));

  const onSubmit = (data) => {
    if (post?.title) {
      dispatch(POSTS_THUNK.updatePost({ data, id: post.id }));
    } else {
      dispatch(POSTS_THUNK.addPost({ data, reset }));
    }
  };

  const handleDelete = (id) => dispatch(POSTS_THUNK.deletePost({ id }));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title", { required: true })} />
        <br />
        {formState.errors.title && (
          <span color="white">This field is required</span>
        )}

        <button>Add</button>
      </form>

      {posts?.map((post, i) => (
        <div key={post.id}>
          <h1 onClick={() => handleById(post.id)}>
            {i + 1} {post.title}
          </h1>

          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <button onClick={() => handleById(post.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
