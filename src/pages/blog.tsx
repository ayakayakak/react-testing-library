import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

// 取得するブログ記事の型
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BlogPage: NextPage = () => {
  const [post, setPost] = useState<Post>();

  const fetchPost = async (): Promise<Post> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return response.data;
  };

  useEffect(() => {
    try {
      const getPost = async () => {
        const result = await fetchPost();
        setPost(result);
      };
      getPost();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {!post ? (
        <p>ローディング中</p>
      ) : (
        <p>
          記事ID{post.id}:{post.title}
        </p>
      )}
    </div>
  );
};

export default BlogPage;