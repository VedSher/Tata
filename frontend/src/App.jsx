import Creation from "./Creation"
import Headers from "./Headers"
import Navigation from "./Navigation"

export default function App() {
  return (
    <div className="h-full w-screen px-5 pl-20 py-7 bg-red-200">
      <Headers />
      <Navigation />
      <Creation />
    </div>
  )
}