import { useState } from "react";

function RecentSearch({recentHistory, setRecentHistory,setSelectedHistory}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const clearHistory = () => {
        localStorage.clear();
        setRecentHistory([])
      }

    const clearSelectedHistory=(selectedItem)=>{
        let history = JSON.parse(localStorage.getItem('history'));
        console.log(history);
       history= history.filter((item)=>{
           if(item!=selectedItem){
            return item
           }
        })
        setRecentHistory(history)
        localStorage.setItem('history',JSON.stringify(history));
        console.log(history);
        
      
            
    }
      
        return (
          <>
            {/* Hamburger for small screens */}
            <div className='md:hidden flex justify-end p-4 -mr-2 h-1/10 fixed sm:right-5 right-0 sm:top-5 top-6'>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className='p-2 rounded-md bg-zinc-800 text-white hover:bg-zinc-700 transition duration-300'
              >
                {/* Hamburger Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="24" width="24">
                  <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/>
                </svg>
              </button>
            </div>
      
            {/* Sidebar menu for small screens */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-red-100 dark:bg-zinc-800 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
              <div className='flex justify-between items-center p-4'>
                <h1 className='text-2xl  bg-clip-text text-transparent animate-bounce bg-gradient-to-r from-blue-500 to-emerald-700'>Recent Search</h1>
              <button onClick={clearHistory} className='ml-2 p-1 bg-zinc-700 animate-pulse hover:bg-zinc-900 rounded-full t'>     <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF">
                        <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                      </svg></button>
                <button onClick={() => setIsMenuOpen(false)} className='text-zinc-800 dark:text-white'>
                  ✕
                </button>
              </div>
              <ul className='text-left overflow-auto mt-2 max-h-[75%] px-4 space-y-2'>
                {recentHistory && recentHistory.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-opacity-10 p-2 rounded-lg hover:bg-red-200 dark:hover:bg-zinc-700 transition-all duration-200">
                    <li 
                      onClick={() => { setSelectedHistory(item); setIsMenuOpen(false); }} 
                      className='flex-1 truncate cursor-pointer dark:text-zinc-400 text-zinc-700 hover:text-zinc-800 dark:hover:text-zinc-200'
                    >
                      {item}
                    </li>
                    <button onClick={() => clearSelectedHistory(item)} className='ml-2 p-1 bg-zinc-700 hover:bg-zinc-900 rounded-full'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#EFEFEF">
                        <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </ul>
            </div>
      
            {/* Panel for medium and larger screens */}
            <div className='hidden md:block col-span-1 dark:bg-zinc-800 bg-red-100 pt-3 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-lg shadow-md'>
              <h1 className='text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-700 flex items-center justify-center px-4'>
                <span>Recent Search</span>
                <button onClick={clearHistory} className='cursor-pointer animate bg-zinc-800 ml-2 p-2 rounded-full hover:scale-110 transition'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF">
                    <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                  </svg>
                </button>
              </h1>
              <ul className='text-left overflow-auto mt-3 max-h-60 px-4 space-y-2'>
                {recentHistory && recentHistory.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-red-200 dark:hover:bg-zinc-700 transition">
                    <li 
                      onClick={() => setSelectedHistory(item)} 
                      className='flex-1 truncate dark:text-zinc-400 text-zinc-700 cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-200'
                    >
                      {item}
                    </li>
                    <button onClick={() => clearSelectedHistory(item)} className='ml-2 p-2 rounded-full bg-zinc-700 hover:bg-zinc-900 transition'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF">
                        <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          </>
        );
      };
export default RecentSearch