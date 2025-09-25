import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import Button from "@/components/common/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface ApiPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error(`HTTP request error status : ${res.status}`);
        }
        const data: ApiPost[] = await res.json();
        const mappedPosts: PostProps[] = data.slice(0, 25).map((post) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(mappedPosts);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : `An Error Occured Fetching Data!`
        );
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <p className="text-center">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <p className="text-red-500">Error: {error}</p>
        <Button
          size="medium"
          shape="rounded-md"
          onClick={() => router.push("/")}
        >
          Go To Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-3xl font-bold mb-5">Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.userId}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
