import { redirect } from "next/navigation"
import Landing from "@/components/landing"

export default async function Home() {
  redirect("/dashboard")

  return <Landing />
}
