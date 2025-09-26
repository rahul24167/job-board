import { auth } from "../auth";
import SignIn from "../components/sign-in";
import SignOut from "../components/sign-out";
export default async function IndexPage() {
  const session = await auth();
 

  return (
    <div>
      <h1>Hello World</h1>
      {session?.user ? <><SignOut /><p>Welcome, {session.user.name}</p></> : <SignIn />}
    </div>
  );
}
