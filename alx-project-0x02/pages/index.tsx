import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className=" h-screen flex flex-col items-center justify-center  text-xl">
        <h1 className="text-4xl font-bold p-5">Welcome To Job Explorer</h1>
        <p>
          A Next.js application to explore job roles and share posts, built with
          TypeScript and Tailwind CSS.
        </p>
        <Button
          size="medium"
          shape="rounded-md"
          onClick={() => router.push("/home")}
        >
          See Jobs
        </Button>
      </div>
    </div>
  );
}
