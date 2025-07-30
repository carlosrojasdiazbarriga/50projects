import Link from "next/link";
import { InputWave } from "@/FormInputWave/InputWave";

export default function FormInputWavePage() {
  return (
    <div className={`flex items-center justify-center bg-[#4682b4] h-screen`}>
      <div
        className="flex flex-col py-5 px-10 rounded-md text-white"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <h1 className="self-center mb-8 mt-5 text-3xl">Please Login</h1>
        <form className="flex flex-col items-center">
          <InputWave name="Email" />
          <InputWave name="Password" />

          <button
            type="submit"
            className="w-full text-black bg-blue-300 p-4 text-base rounded-md"
          >
            Login
          </button>
        </form>
        <span className="mt-8 mb-4">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-blue-300">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
}
