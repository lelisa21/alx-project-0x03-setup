import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

const Posts = ({ posts }: { posts: PostProps[] }) =>{
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mb-5">Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.userId}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ posts: PostProps[] }> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 60, 
  };
};
export default Posts;
