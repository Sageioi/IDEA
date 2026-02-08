import React from "react"
import { useState } from "react"
import "./Login.css"


const fields = {names : ["First Name", "Last Name"], otherDetails:["Email","Password"]}
const Login = () => {


    return (
<>
  <div className="min-h-screen w-full bg-slate-900"> {/* Wrapper to prevent white gaps */}
    <div className="w-full aspect-[8700/4283] bg-[url('./assets/REFLECTA.png')] bg-[length:100%_100%] bg-no-repeat bg-scroll flex flex-col items-center justify-start">
      
      {/* Container for your form - adjusted margins for mobile */}
      <div className="w-[90%] max-w-md font-bold mt-20 mb-20 p-6 rounded-lg shadow-2xl ring-1 ring-blue-300 bg-white/10 backdrop-brightness-">
        <ul className="space-y-5">
          {fields.names.map((name, index) => (
            <li key={index} className="flex flex-col sm:flex-row text-blue-400 items-start sm:items-center justify-between gap-2">
              <span className="shrink-0">{name}</span>
              <input className="bg-white w-full sm:w-64 rounded-lg text-blue-400 ring-2 p-1 caret-blue-400 ring-blue-400 outline-none" />
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-center mt-8">
          <button className="text-blue-400 bg-white p-2 px-6 rounded-lg font-bold border-2 border-blue-400 hover:bg-blue-50 transition-colors">
            I have filled my details
          </button>
        </div>
      </div>

    </div>
  </div>
</>
    )
}

export default Login