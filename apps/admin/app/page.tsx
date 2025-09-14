import { auth } from "../auth";
import SignIn from "../components/sign-in";
export default async function IndexPage() {
  const session = await auth();
 

  return (
    <div>
      <h1>Hello World</h1>
      {session?.user ? <p>Welcome, {session.user.name}</p> : null}
      <SignIn />
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </div>
  );
}
