import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-10">
      <div className="bg-slate-900 py-4 px-24 text-white flex gap-12 items-center justify-between">
        <h1 className="cursor-pointer md:text-base text-sm">nwnung dev</h1>

        <Link href={"https://github.com/nwnung"} className="text-sm">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
