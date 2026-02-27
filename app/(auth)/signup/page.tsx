import { signUpAction } from "../../actions/auth";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-base-100">
      <form action={signUpAction} className="form flex flex-col gap-4 w-xl bg-base-200 p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <input type="text" name="name" placeholder="Name" required className="bg-base-300 py-2 px-6 rounded-md" />
        <input type="email" name="email" placeholder="Email" required className="bg-base-300 py-2 px-6 rounded-md" />
        <input type="password" name="password" placeholder="Password" required className="bg-base-300 py-2 px-6 rounded-md" />
        <div className="grid grid-cols-2 gap-2">
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>

          <Link href="/signin" className="btn btn-outline btn-primary">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
