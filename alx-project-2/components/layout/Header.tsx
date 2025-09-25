import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-green-500/20 flex justify-end items-center ">
      <ul className="flex gap-4 mr-8 p-4">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
