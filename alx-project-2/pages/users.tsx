import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP request failed! status: ${response.status}`);
        }
        const data: UserProps[] = await response.json();
        setUsers(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Couldn't fetch the data!"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1>Users</h1>
        <p className="text-center">Loading..</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center flex-col">
        <h1>Users</h1>
        <p className="text-center text-red-500/95 pt-10">Error: {error}</p>
        <Button
          size="medium"
          shape="rounded-md"
          onClick={() => router.push("/home")}
        >
          Go To Home
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            company={user.company}
            phone={user.phone}
            email={user.email}
            website={user.website}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
