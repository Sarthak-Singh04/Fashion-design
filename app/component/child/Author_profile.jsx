import Image from "next/image";
import Link from "next/link";

const AuthorProfile = () => {
  return (
    <div className="author flex py-5">
      <Image
        src="/men.jpg"
        alt="Author profile"
        width={25}
        height={25}
        className="rounded-full"
        style={"width-50px"}
      />
      <div className="flex flex-col justify-center px-4">
      <Link href={"/"}><p className="text-gary-800 hover:text-gray-600">Lorem ipsum</p></Link>
      <span className="text-sm text-gray-500">Member,CSR</span>

      </div>
    </div>
  );
};

export default AuthorProfile;
