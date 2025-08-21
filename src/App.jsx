import React, { useState } from 'react'
import { seedEvents } from './data'
import Overview from './modules/Overview'
import Register from './modules/Register'
import Admin from './modules/Admin'
import Draw from './modules/Draw'
import PassStudio from './modules/PassStudio'
import Settings from './modules/Settings'
import { Btn } from './ui.jsx'

export default function App(){
  const [tab, setTab] = useState('overview')
  const [events, setEvents] = useState(seedEvents)
  const [active, setActive] = useState(events[0])

  const tabs = [
    ['overview','Overview'], ['register','Register'], ['admin','Admin'],
    ['draw','Lucky Draw'], ['pass','Pass Studio'], ['settings','Settings']
  ]

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-white border-b px-6 py-3 flex justify-between items-center'>
        <h1 className='font-bold'>🎉 Event Platform Modular</h1>
        <nav className='space-x-2'>
          {tabs.map(([k,l])=><Btn key={k} v={tab===k?'primary':'secondary'} onClick={()=>setTab(k)}>{l}</Btn>)}
        </nav>
      </header>
      <main className='flex-1 p-6 bg-slate-50'>
        {tab==='overview' && <Overview event={active}/>}
        {tab==='register' && <Register event={active} setEvent={setActive}/>}
        {tab==='admin' && <Admin event={active}/>}
        {tab==='draw' && <Draw event={active}/>}
        {tab==='pass' && <PassStudio event={active}/>}
        {tab==='settings' && <Settings event={active} setEvent={setActive}/>}
      </main>
    </div>
  )
}
