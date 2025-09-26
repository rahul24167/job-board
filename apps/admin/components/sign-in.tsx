import { signIn } from "../auth"
import {Button} from "@repo/ui/button"
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    ><button type="submit" className="bg-amber-700">Signin with Google</button>
      <Button appName="admin" className="w-full bg-amber-400">Signin with Google</Button>
    </form>
  )
} 