import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col items-center mt-20">
        <Link href="/">
          <a className="cursor-pointer">
            <Image
              src="/images/logo.png"
              width={70}
              height={70}
              className="bg-gray-800 rounded-2xl"
              alt="logo"
            />
          </a>
        </Link>

        <h1 className="text-6xl my-5">Whoops!</h1>

        <h2 className="text-4xl text-gray-400 mb-5">
          This page does not exist
        </h2>

        <Link href="/">
          <a className="flex ">
            <FaHome size={50} />
          </a>
        </Link>
      </div>
    </Layout>
  );
}
