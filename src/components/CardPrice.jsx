import React, { useState } from 'react'

const CardPrice = ({plan = 'Free', subtitle = "10 peticiones al mes", price = "Gratis", itemList }) => {

    const isFree = price <= 0 || price === "Gratis" ? "Gratis" : price

    const moneda = isFree !== "Gratis" || price >= 1 ? <sup className='me-2 text-3xl'>€</sup> : ""

    const mes = isFree !== "Gratis" || price >= 1 ? <span className='text-xl'>/ mes</span> : ""

    const checkSvg = <svg className="w-5 h-5 text-slate-50/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg>

    /* Hooks */
    const [first, setfirst] = useState(false)
    const handleClick = () =>{
       
        setfirst(!first);
        
    }

    const estado = first ? 'border-slate-50/50' : 'border-slate-50/10';

  return (
    <article 
    onClick={handleClick} 
    className={`flex flex-col border glass-dark rounded-lg px-4 py-6 h-full text-slate-50 ${estado}`}>
        <div className='mb-5 md:text-start'>
            <h3 className='text-3xl mb-3 text-slate-50/60'>{plan}</h3>
            <p>{subtitle}</p>
        </div>
        <div className='mb-5 mt-auto'>
            <p className='text-5xl '>{moneda}{isFree}{mes}</p>
        </div>
        <div className=''>
            <a className="block text-center border-slate-50 border-2 px-4 py-2 mb-6  after:content-['_↗']  hover:bg-slate-50 hover:text-slate-900" href='http://asmalljob.com/'>Solicitar</a>
            <ul role="list" className="text-sm divide-y">
                {itemList}
                <li className='py-2 flex gap-2 '>{checkSvg}List item</li>
                <li className='py-2 flex gap-2 '>{checkSvg}List item</li>
                <li className='py-2 flex gap-2 '>{checkSvg}List item</li>
                <li className='py-2 flex gap-2 '>{checkSvg}List item</li>

            </ul>
        </div>
    </article>
  )
}

export default CardPrice