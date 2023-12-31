import React from 'react'

function IntroPrice ({ header }){
    const { intro, title, description } = header
    return(

        <div className='grid grid-cols-4 mb-20'>
            <div className='col-span-3'>
            <small className="text-slate-50 text-xl">{intro}</small>
             <h1 class="mb-6 text-slate-50 font-grotesk align-baseline leading-[normal] md:leading-[normal] font-normal text-xl sm:text-3xl balance text-center md:text-left md:text-6xl">{ title }</h1>
             </div>
            <div className="flex items-center">
                <p className='text-xl font-light text-slate-50/60'>{description}</p>
            </div>
        </div>
 
    );

}

export default IntroPrice