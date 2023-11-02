'use client'
import { useState } from "react"
import UserProfile from "@/components/UserProfile";
import { UserList } from "@/components/UserList";

export default function Home() {
  const [showText, setShowText] = useState(false);

  return (
    <main>
      <h1>Home page</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor='randomtext'>Enter Random Text: </label>
        <input id='randomtext'/>
      </div>
      <section>
        {showText && <span>This is the text!</span>}
        <button 
          onClick={() => {
            setTimeout(() => {
              setShowText(!showText);
            }, 1100)}}
        >Show text</button>
      </section>
      <UserProfile
        displayName="debdut066"
        username="overlord066"
        email="debdut@gmail.com"
        isEmailVerified={true}
      />
      <UserList/>
    </main>
  )
}
