import { Button } from "@radix-ui/themes";
import { Concert_One } from "next/font/google";
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr";

const rubik = Concert_One({
  subsets: ["latin"],
  weight: "400",
});

export default async function LoginPage() {
  return (
    <>
      <header className="mx-auto w-1/3 pt-16 text-center">
        <h1 className="flex flex-col gap-6">
          <span className="self-start text-7xl font-semibold">Welcome to</span>
          <span
            className={`font-sans ${rubik.className} text-7xl text-blue-500`}
          >
            FelpsCal
          </span>
        </h1>
      </header>
      <main className="mt-12 flex items-center justify-center">
        <div className="border border-solid border-slate-500 px-56 py-20">
          <Button className="hover:cursor-pointer" type="button">
            <GoogleLogo size={24} />
            <span className="text-lg font-semibold">Login with Google</span>
          </Button>
        </div>
      </main>
    </>
  );
}
