import { signInAction, signUpAction } from "../../actions/auth";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-base-100">
      <form className="form bg-base-200 flex flex-col w-xl gap-4 rounded-lg p-6" action={signInAction}>
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <input type="email" name="email" placeholder="Email" required className="bg-base-300 py-2 px-6 rounded-md" />
        <input type="password" name="password" placeholder="Password" required className="bg-base-300 py-2 px-6 rounded-md" />
        <div className="grid grid-cols-2 gap-2">
          <button className="btn btn-primary" type="submit">
            test
          </button>
        </div>
      </form>
    </div>
  );
}
