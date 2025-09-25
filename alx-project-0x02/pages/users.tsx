import UserCard from "@/components/common/UserCard";
import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Users = ({ users }: { users: UserProps[] }) => {
  return (
    <div className="">
      <Header />
      <h1 className="text-3xl text-center">Users</h1>
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

export const getStaticProps: GetStaticProps<{ users: UserProps[] }> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 60, 
  };
};


export default Users;
