import { currentUser } from "@/lib/user"
import { redirect } from "next/navigation"
import Dashboard from "@/components/dashboard"
import Navbar from "@/components/dashboard/navbar"
import { Sandbox, User } from "@/lib/types"

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/")
  }

  // const userRes = await fetch(
  //   `${process.env.NEXT_PUBLIC_DATABASE_WORKER_URL}/api/user?id=${user.id}`,
  //   {
  //     headers: {
  //       Authorization: `${process.env.NEXT_PUBLIC_WORKERS_KEY}`,
  //     },
  //   }
  // )
  const userRes = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    sandbox: [
      {
        id: "1",
        name: "My Sandbox",
        type: "react",
        author: "John Doe",
        sharedOn: new Date(),
      },
    ],
  }
  const userData = (await userRes) as User

  // const sharedRes = await fetch(
  //   `${process.env.NEXT_PUBLIC_DATABASE_WORKER_URL}/api/sandbox/share?id=${user.id}`,
  //   {
  //     headers: {
  //       Authorization: `${process.env.NEXT_PUBLIC_WORKERS_KEY}`,
  //     },
  //   }
  // )
  // const shared = (await sharedRes.json()) as {
    const shared = ({}) as {
    id: string
    name: string
    type: "react" | "node"
    author: string
    sharedOn: Date
  }[]

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden overscroll-none">
      <Navbar userData={userData} />
      <Dashboard sandboxes={userData.sandbox} shared={shared} />
    </div>
  )
}
