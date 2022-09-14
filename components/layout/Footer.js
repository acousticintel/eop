import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
//custom
const AiFillInstagram = dynamic(
  async () => (await import("react-icons/ai")).AiFillInstagram
);
const MdEmail = dynamic(async () => (await import("react-icons/md")).MdEmail);
const FaPhone = dynamic(async () => (await import("react-icons/fa")).FaPhone);

export default function Footer() {
  return (
    <footer className="footer px-10 py-20 text-white flex w-full">
      <div className="w-full flex flex-col items-start">
        <div className="relative h-20 w-52">
          <Image
            src="/images/logo-w.png"
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <p className="mt-6">{`Lights, Camera... Magic!`}</p>
      </div>
      <div className=" flex flex-col items-end">
        <span className="text-3xl font-semibold">Contact Info</span>
        <div className="grid grid-flow-col gap-4 mt-6">
          <Link href="tel:+254722767373">
            <a>
              <FaPhone size="2em" />
            </a>
          </Link>
          <Link href="tel:+254723974848">
            <a>
              <FaPhone size="2em" />
            </a>
          </Link>
          <Link href="mailto:info@eopfilms.com">
            <a>
              <MdEmail size="2em" />
            </a>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/eopfilms/?hl=en"
          >
            <AiFillInstagram size="2em" />
          </a>
        </div>
      </div>
    </footer>
  );
}
