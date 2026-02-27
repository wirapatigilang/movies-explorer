import { signUpAction } from "../actions/auth";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <form action={signUpAction}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button className="btn btn-primary" type="submit">test</button>
      </form>
    </div>
  );
}
