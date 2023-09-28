import { ModeToggle } from "@/components/ui/mode-toggle"
import { Skeleton } from "@/components/ui/skeleton"
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <UserButton 
        afterSignOutUrl="/"
      />
      <ModeToggle />
    </div>
  )
}
