import { signOut } from "../auth"
import {Button} from "@repo/ui/button"
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    ><button type="submit">Sign out</button>
      {/* <Button appName="admin" className="w-full">Sign out</Button> */}
    </form>
  )
} 