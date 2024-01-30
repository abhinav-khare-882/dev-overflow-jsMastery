import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="h-screen">
      <p>hello from the other side</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}