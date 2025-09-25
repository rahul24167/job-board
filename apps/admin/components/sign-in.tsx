import { signIn } from "../auth"
import {Button} from "@repo/ui/button"
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    ><button type="submit">Signin with Google</button>
      <Button appName="admin" className="w-full">Signin with Google</Button>
    </form>
  )
} 