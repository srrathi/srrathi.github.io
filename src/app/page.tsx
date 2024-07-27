import dynamic from 'next/dynamic'
const HomeComponent = dynamic(() => import("@/components/home/Index"))

export default function Home() {
  return (
    <main>
      <HomeComponent />
    </main>
  )
}
