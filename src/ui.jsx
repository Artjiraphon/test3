import React from 'react'

export const cn = (...c) => c.flat().filter(Boolean).join(' ')
export const CARD = 'bg-white rounded-2xl border border-slate-200'
const BTNBASE = 'rounded-xl px-3 py-2 border text-sm font-medium transition disabled:opacity-50'

export const btn = (v) => [
  BTNBASE,
  v==='primary' && 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700',
  v==='secondary' && 'border-slate-300 bg-white hover:bg-slate-50',
  v==='danger' && 'bg-rose-600 border-rose-600 text-white hover:bg-rose-700',
  v==='success' && 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700',
].filter(Boolean).join(' ')

export const Btn = ({v='secondary', className='', ...p}) => <button {...p} className={cn(btn(v), className)} />

export const Badge = ({color='slate', children}) => (
  <span className={cn('px-2 py-0.5 text-xs rounded-full border',
    color==='slate' && 'border-slate-300 bg-slate-100 text-slate-700',
    color==='green' && 'border-emerald-300 bg-emerald-100 text-emerald-700',
    color==='red' && 'border-rose-300 bg-rose-100 text-rose-700',
    color==='blue' && 'border-blue-300 bg-blue-100 text-blue-700',
    color==='amber' && 'border-amber-300 bg-amber-100 text-amber-700',
  )}>{children}</span>
)

export const KPI = ({t,v}) => (
  <div className={cn(CARD,'p-4')}>
    <div className='text-sm text-slate-600'>{t}</div>
    <div className='text-2xl font-semibold'>{v}</div>
  </div>
)

export const th = (c) => <th className='px-3 py-2 font-medium text-left'>{c}</th>
export const td = (c) => <td className='px-3 py-2 text-sm'>{c}</td>

export const dl = (filename, text) => {
  const blob = new Blob([text], {type:'text/plain;charset=utf-8'})
  const url = URL.createObjectURL(blob)
  const a=document.createElement('a')
  a.href=url; a.download=filename; a.click()
  URL.revokeObjectURL(url)
}
