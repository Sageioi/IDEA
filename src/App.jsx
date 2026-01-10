import { useState } from 'react'
import note from './assets/notes_3906193.png'
import profile from './assets/icons8-profile-100.png'
import assess from './assets/assessment_16761775.png'
import home from './assets/icons8-home.svg'
import settings from './assets/icons8-settings.svg'
import down from './assets/down.png'
import history from "./assets/icons8-activity-history-100.png"
import './App.css'

const navItems = [
  { id: 'home', label: 'Home', icon: home },
  { id: 'assess', label: 'Assessment', icon: assess },
  { id: 'history', label: 'History', icon: history },
  { id: 'settings', label: 'Settings', icon: settings },
  { id: 'profile', label: 'Profile', icon: profile },
  { id: 'journal', label: 'Journal', icon: note },
]

const NavBar = () => (
  <div className='flex border-dashed text-blue-400 bg-white font-[var(--font-sans)] font-bold fixed border-2 border-t-transparent border-r-transparent border-b-blue-400 w-screen border-l-transparent z-10'>
    <ul className='p-4 flex space-x-3'>
      <li className='tracking-tight'>Welcome, User</li>
      <li className='tracking-tight'>Past Sessions</li>
      <li>Recommendations</li>
    </ul>
  </div>
)

const Assessment = () => <div className='bg-blue-500 h-screen w-full fixed' />
const History = () => <div className='bg-green-500 h-screen w-full fixed' />
const Settings = () => <div className='bg-yellow-500 h-screen w-full fixed' />
const Profile = () => <div className='bg-orange-500 h-screen w-full fixed' />
const Journal = () => <div className='bg-white h-screen w-full fixed' />

const Home = ({ expand }) => (
  <div className='bg-white h-screen w-full fixed'>
    <NavBar />
    <div className={`border-2 flex rounded-md h-40 mt-20 shadow-2xl border-blue-400 transition-all ${expand ? 'w-[85.5%] ml-[18px]' : 'w-[91.5%] ml-4'}`} />
  </div>
)

const App = () => {
  const [expand, setExpand] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home expand={expand} />
      case 'assess': return <Assessment />
      case 'history': return <History />
      case 'settings': return <Settings />
      case 'profile': return <Profile />
      case 'journal': return <Journal />
      default: return <Home expand={expand} />
    }
  }

  return (
    <div className="flex m-0 top-0 left-0 fixed w-full">
      <div className={`bg-blue-400 font-bold font-[var(--font-sans)] text-white h-screen transition-all ${expand ? 'w-40' : 'w-16'}`}>
        <button 
          className="p-2 w-full flex items-center justify-between" 
          onClick={() => setExpand(!expand)}
        >
          {expand && <span>Menu</span>}
          <img src={down} className={`w-6 transition-transform ${expand ? 'rotate-90' : ''}`} alt="toggle" />
        </button>

        {expand && (
          <div className='w-full bg-transparent flex flex-col ml-2 mt-4'>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id} className='flex items-center'>
                  <img src={item.icon} className='w-6 pr-2 h-5' alt="" />
                  <button onClick={() => setActiveTab(item.id)}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  )
}

export default App