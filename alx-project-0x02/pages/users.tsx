import UserCard from "@/components/common/UserCard";
import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Users = ({ users }: { users: UserProps[] }) => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold m-5 text-center">Users</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  users: UserProps[];
}> = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`HTTP Request Failed status: ${res.status}`);
    }
    const users: UserProps[] = await res.json();

    return {
      props: {
        users,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      notFound: true,
    };
  }
};

export default Users;
