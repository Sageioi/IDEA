import { useState } from 'react'
import note from './assets/notes_3906193.png'
import profile from './assets/icons8-profile-100.png'
import assess from './assets/assessment_16761775.png'
import home from './assets/icons8-home.svg'
import settings from './assets/icons8-settings.svg'
import down from './assets/down.png'
import plus from './assets/icons8-plus.svg'
import history from "./assets/icons8-activity-history-100.png"


const DiaryApp = () => {
    const [entries, setEntries] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const[edit, setEdit] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) return;

        const newEntry = {
            id: Date.now(),
            title,
            content,
            date: new Date().toLocaleDateString()
        };
        setEntries([newEntry, ...entries]);
        setTitle('');
        setContent('');
    };

    const editEntry = (id) => {
      const entry = entries.filter((entry)=> entry.id == id)
      setEdit(entry)

      {`Editing not yet completed`} 

    }



    const deleteEntry = (id) => {
        const updatedEntries = entries.filter((entry) => entry.id !== id);
        setEntries(updatedEntries);
    };

    return (
        <div className="max-w-2xl p-1">
            <h2 className="mb-6 text-1xl font-bold px-1 text-blue-400">Diary </h2>
            <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-4 rounded-xl bg-gray-50 p-6 shadow-sm border border-gray-200">
                <input
                    type="text"
                    placeholder="Entry Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-hidden ring-blue-400 transition-all focus:ring-2"
                />
                <textarea
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full min-h-[120px] rounded-lg border border-gray-300 bg-white p-3 outline-hidden ring-blue-400 transition-all focus:ring-2"
                />
                <button
                    type="submit"
                    className="w-fit cursor-pointer rounded-lg bg-blue-400 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-blue-400 active:scale-95"
                >
                    Save Entry
                </button>
            </form>
            <div className="space-y-4">
                {entries.length === 0 && <p className="text-center text-gray-500 italic">No entries yet. Start writing...</p>}

                {entries.map(entry => (
                    <div key={entry.id} className="group relative rounded-xl border border-gray-200 p-5 transition-hover hover:border-blue-200 hover:bg-blue-50/30">
                        <div className="flex items-baseline justify-between gap-4">
                            <h3 className="text-xl font-semibold text-gray-800">{entry.title}</h3>
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{entry.date}</span>
                        </div>
                        <p className="mt-2 whitespace-pre-wrap text-gray-600 leading-relaxed">{entry.content}</p>

                        <button
                            onClick={() => deleteEntry(entry.id)}
                            className="mt-4 cursor-pointer text-sm font-medium text-red-500 opacity-0 transition-opacity hover:text-red-700 hover:underline group-hover:opacity-100"
                        >
                            Delete Entry
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
};
const navItems = [
  { id: 'home', label: 'Home', icon: home },
  { id: 'assess', label: 'Assessment', icon: assess },
  { id: 'history', label: 'History', icon: history },
  { id: 'profile', label: 'Profile', icon: profile },
  { id: 'journal', label: 'Journal', icon: note },
]

const HomeNavBar = [
    {id: 'mental-app',label:'Mental App'},
    {id:'sessions',label:'Past Sessions'},
    {id:'symptoms',label:'Check Symptoms'},
    {id:'nutrition',label:'Nutrition and Meals'},
    {id:'about',label:'About'},
    {id:'disclaim',label:'Disclaimer'},
]


const Reflect = () => {
    return (
        <>
        </>
    )
}

const CheckSymptoms = () => {
    return (
        <>
        </>
    )
}

const ConverseAI = () => {
    return (
        <>
        </>
    )
}



const Assessment = ({expand}) =>{return (
    <div className='bg-white h-screen w-full text-sm transition-all duration-300'>
        <div className={`flex text-blue-400 shadow-sm p-3 items-end transition-all duration-300 ${expand?'w-full':'w-full'}`}>
            <ul className={'flex space-x-2'}>
                <li className={'flex font-bold  text-blue-400 '}>Assessment</li>
            </ul>
        </div>
    </div>
)}
const History = ({expand}) => {return(    <div className='bg-white text-sm h-screen w-full transition-all duration-300'>
    <div className={`flex text-blue-600 p-3 items-end transition-all shadow-sm duration-300 ${expand?'w-full':'w-full'}`}>
        <ul className={'flex space-x-2'}>
            <li className={'flex font-bold  text-blue-400 '}>History</li>
        </ul>
    </div>
</div>)}
const Profile = ({expand}) => {
    return (
        <div className={`bg-white h-screen w-full text-sm transition-all duration-300`}>
            <div className={`flex text-blue-400  p-3 items-center transition-all duration-300 shadow-sm`}>
                <ul className={'flex'}>
                    <li className={'flex font-bold text-blue-400'}>Profile</li>
                </ul>
            </div>
            <div className= "flex-1 overflow-y-scroll  w-full h-full custom-scrollbar ">
            <div className={'grid grid-cols-1  p-4'}>
                <div className={`flex h-screen shadow-sm border-slate-200 border rounded-md  transition-all duration-300 ${expand ? 'w-full' : 'w-full'}`}>
                </div>
                </div>

            </div>
        </div>
    )
}
const Journal = ({expand}) => {

    const [entry, setEntry] = useState(false)
return (
  <div className="bg-white h-screen w-full text-sm flex flex-col transition-all duration-300  ">
    <div className="flex text-blue-400 p-3 items-end shrink-0 shadow-sm">
      <ul className="flex space-x-2">
        <li className="font-bold text-blue-400">Journal</li>
      </ul>
    </div>
    <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
      <ul className="flex">
        <li className="flex text-blue-400 text-sm font-bold  items-center">
          Create Entry 
          <button onClick={() => setEntry(true)} className="hover:opacity-70 transition-opacity">
            <img src={plus} className="h-5 pl-2" alt="Add entry" />
          </button>
        </li>
      </ul>
      <div className="mt-4">
        {entry && <DiaryApp />}
      </div>
    </div>
  </div>
);}


const Home = ({ expand }) => {
  const [user, setUser] = useState('User');
  const [activeNav, setActiveNav] = useState(`Welcome, ${user}`);


  const HomeNavBar = [
    { id: 1, label: 'Reflect' },
    { id: 2, label: 'Symptoms' },
    { id: 3, label: 'Use our AI'}
  ];

  const renderContent = () => {
    switch (activeNav) {
      case 'Reflect': return <Reflect />;
      case 'Symptoms': return <CheckSymptoms/>;
      case 'Use our AI': return <ConverseAI/>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen text-sm text-blue-600 text-[2px] transition-colors">
      
      <header 
        className={`fixed top-0 text-sm right-0 z-20 shadow-sm flex h-14 items-center justify-between px-2 transition-colors duration-300
        ${expand ? 'left-25 ' : 'left-10 '}`}
      >
        <nav>
          <ul className="flex space-x-1.5 text-sm items-center  transition-colors duration-300">
            {HomeNavBar.map((item) => (
              <li key={item.id} className='group relative text-sm font-bold text-blue-600 cursor-pointer transition-colors duration-300 hover:text-blue-400'>
                <button
                  onClick={() => setActiveNav(item.label)}
                  className={` font-medium text-[10px] transition-colors  ${
                    activeNav === item.label ? 'text-blue-600 border-b-2 border-blue-600' : 'text-blue-400 '
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center ml-5">
            <ul>
                <li className="text-[10px] font-bold text-blue-600 flex "><span className="flex pt-1"> Welcome, {user} </span><img src={profile} className="h-5 w-5 ml-2 object-cover flex " alt="Profile" /></li>
                </ul>

          <div className="h-5 w-5 ">

          </div>
        </div>
      </header>

      <main 
        className={`pt-20 px-6 transition-all duration-300 
        ${expand ? 'ml-1' : 'ml-2'}`}
      >
        <div className={`rounded-2xl border border-slate-200 bg-white p-4 overflow-auto shadow-sm transition-all hover:shadow-md ${expand ? 'w-full':'w-full'} `}>
           
           <h1 className="text-2xl font-bold text-blue-600">{activeNav}</h1>
           <p className="mt-2 text-blue-400 text-sm font-medium">{`This is the ${activeNav} section`}</p>
        </div>

        <div>
          
        </div>
      </main>
    </div>
  );
};

const App = () => {
  const [expand, setExpand] = useState(false)
  const [activeTab, setActiveTab] = useState('home')


  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home expand={expand} />
      case 'assess': return <Assessment expand = {expand} />
      case 'history': return <History expand = {expand} />
      case 'profile': return <Profile expand={expand} />
      case 'journal': return <Journal expand={expand} />
      default: return <Home expand={expand} />
    }
  }

  return (
    <div className="flex m-0 top-0 left-0 text-sm fixed w-full">
      <div className={`bg-blue-400 text-sm shadow-sm font-bold font-[var(--font-sans)] text-white h-screen transition-all ${expand ? 'w-25' : 'w-10'}`}>
        <button
          className="p-2 w-full flex items-center justify-between"
          onClick={() => setExpand(!expand)}
        >
          {expand && <span>Menu</span>}
          <img src={down} className={`w-6 transition-transform ${expand ? 'rotate-90' : ''}`} alt="toggle" />
        </button>

        {expand && (
          <div className='w-full text-sm bg-transparent flex flex-col  mt-4'>
            <ul className="space-y-4 text-[11px] ml-1">
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