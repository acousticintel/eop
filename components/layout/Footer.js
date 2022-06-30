import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
//custom
const FaTwitter = dynamic(
  async () => (await import("react-icons/fa")).FaTwitter
);
const MdEmail = dynamic(async () => (await import("react-icons/md")).MdEmail);
const FaPhone = dynamic(async () => (await import("react-icons/fa")).FaPhone);

export default function Footer() {
  return (
    <footer className="footer px-10 py-20 bg-orange-400 flex w-full">
      <div className="w-full flex flex-col items-start">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-5">
            <Image
              src="/assets/logo.png"
              layout="fill"
              className="object-contain"
              alt=""
            />
          </div>
          <h1 className="text-4xl font-bold uppercase">EOP</h1>
        </div>
        <p className="mt-6">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className=" flex flex-col items-end">
        <span className="text-3xl font-semibold">Social</span>
        <div className="grid grid-flow-col gap-4 mt-6">
          <Link href="tel:+254720000000">
            <a>
              <FaPhone size="2em" />
            </a>
          </Link>
          <Link href="mailto:contant@eop.com">
            <a>
              <MdEmail size="2em" />
            </a>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/earth_taka?t=tMKgq8GMhsKKqpGkO-dQuQ&s=09"
          >
            <FaTwitter size="2em" />
          </a>
        </div>
      </div>
    </footer>
  );
}
