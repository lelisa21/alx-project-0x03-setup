import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              phone={user.phone}
              address={user.address}
              username={user.username}
              email={user.email}
              company={user.company}
              website={user.website}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
