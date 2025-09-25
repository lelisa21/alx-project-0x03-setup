import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);

  const handleSubmit = (data: CardProps) => {
    setPosts((p) => [...p, data]);
  };
  return (
    <div>
      <Header />
      <h1 className="text-2xl text-center m-5">
        Welcome To Home Page Explore Your Job
      </h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 rounded-2xl bg-green-500 text-xl text-white cursor-pointer hover:bg-green-500/80 mx-18 mb-16"
      >
        Add New Post
      </button>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
      <div className="grid gap-3 text-center">
        <Card
          title="Frontend Developer"
          content="A Frontend Developer builds the user-facing side of a website or application, a Backend Engineer focuses on the behind-the-scenes logic and databases, and a Software Developer is a broad term that can encompass either of these roles or other specialized areas of software creation. "
        />
        <Card
          title="Backend Enginer"
          content="A backend engineer builds and maintains the server-side of a web application—the engine that powers the user-facing part."
        />
        <Card
          title="Software Developer"
          content="A software developer is a generalist term for a professional who designs, writes, and maintains software. This can range from developing mobile apps to operating systems."
        />
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
