import React from 'react';


const Footer = ()=>{
    return(
    <footer className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 relative border-t border-t-slate-50/50 ">
        <div className="bg-slate-900 backdrop-blur-xl relative">
     
            <div className="absolute top-[-1.5px] left-4 ml-14 h-[2px] w-28 rounded-full bg-gradient-to-r from-violet-400 sm:left-6 sm:ml-0 md:left-[calc(50%-20rem)] lg:left-[calc(50%-25rem)] lg:-ml-14 xl:-ml-28"></div>
     
       <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
           <div className="flex flex-col items-center md:items-start">
            <a href="https://www.hubspot.com/agencies/a-small-job" target="_blank" rel="noreferrer"> 
                <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Agency-Directory-Colour-Small.png?width=150&amp;height=150&amp;name=Agency-Directory-Colour-Small.png" className="md:mr-5" alt="HubSpot Agency Directory" width="150" height="150" srcset="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Agency-Directory-Colour-Small.png?width=75&amp;height=75&amp;name=Agency-Directory-Colour-Small.png 75w, https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Agency-Directory-Colour-Small.png?width=150&amp;height=150&amp;name=Agency-Directory-Colour-Small.png 150w, https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Agency-Directory-Colour-Small.png?width=225&amp;height=225&amp;name=Agency-Directory-Colour-Small.png 225w, https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Agency-Directory-Colour-Small.png?width=300&amp;height=300&amp;name=Agency-Directory-Colour-Small.png 300w, https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Agency-Directory-Colour-Small.png?width=375&amp;height=375&amp;name=Agency-Directory-Colour-Small.png 375w, https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Agency-Directory-Colour-Small.png?width=450&amp;height=450&amp;name=Agency-Directory-Colour-Small.png 450w" sizes="(max-width: 150px) 100vw, 150px"/>
           </a>  
             <p className="max-w-xs mt-4 text-sm balance text-center md:text-start text-slate-50/60">
             A Small Job, Agencia Partner Gold de HubSpot; los creadores del inbound marketing. Actualmente, la tercera agencia de inbound marketing de España.
             </p>
             <div className="flex mt-8 space-x-6 text-slate-50/60">
               <a className="hover:text-slate-50 hover:opacity-75" href="https://www.facebook.com/asmalljobbcn" target="_blank" rel="noreferrer">
                 <span className="sr-only"> Facebook </span>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path fillrule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" cliprule="evenodd"></path>
                 </svg>
               </a>
               <a className="hover:text-slate-50 hover:opacity-75" href="https://www.linkedin.com/company/asmalljob/" target="_blank" rel="noreferrer">
                 <span className="sr-only"> Linkedin </span>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="3 4 17 17" aria-hidden="true">
                <path d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3   c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001   C18.683,11.04,19,12.002,19,13.353V19z"></path>
                <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"></ellipse>
     
                 </svg>
               </a>
               <a className="hover:text-slate-50 hover:opacity-75" href="https://twitter.com/asmalljob" target="_blank" rel="noreferrer">
                 <span className="sr-only"> Twitter </span>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 -4 29 29" aria-hidden="true">
                <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"></path>
                 </svg>
               </a>
            
              
             </div>
           </div>
           <div className="grid grid-cols-1 gap-8 md:col-span-2 sm:grid-cols-2 md:grid-cols-3 ">
             <div className="flex flex-col items-center md:items-start">
               <p className="font-medium text-slate-50/60">
               Servicios
               </p>
               <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                 <a className="hover:opacity-75 hover:text-slate-50" href="/contenidos-inbound-marketing?hsLang=es-es"> Contenidos inbound marketing</a>
                 <a className="hover:opacity-75 hover:text-slate-50" href="/hubspot-medida?hsLang=es-es"> HubSpot a medida </a>
                 <a className="hover:opacity-75 hover:text-slate-50" href="/consultoria-inbound-marketing-estrategica?hsLang=es-es"> Consultoría de inbound marketing </a>
                 <a className="hover:opacity-75 hover:text-slate-50" href="/inbound-marketing-academy?hsLang=es-es"> Academy </a>
               </nav>
             </div>
             <div className="flex flex-col items-center md:items-start">
               <p className="font-medium text-slate-50/60">
               Enlaces Útiles
               </p>
               <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                 <a className="hover:opacity-75 hover:text-slate-50" href="/es-es/contactar-espa%C3%B1ol?hsLang=es-es"> Contactar </a>
                 <a className="hover:opacity-75 hover:text-slate-50" href="https://blog.asmalljob.com/inbound-marketing"> Blog </a>
                 <a className="hover:opacity-75 hover:text-slate-50" href="/case-studies?hsLang=es-es"> Case Studies </a>
               </nav>
             </div>
         
             <div className="flex flex-col items-center md:items-start sm:col-span-2 md:col-span-1">
               <p className="font-medium text-slate-50/60">
                 Legal
               </p>
               <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                 <a className="hover:opacity-75 hover:text-slate-50" href="https://www.asmalljob.com/legal"> Privacy Policy </a>
                 <a className="hover:opacity-75 hover:text-slate-50" href="https://www.asmalljob.com/legal"> Terms &amp; Conditions </a>
               </nav>
             </div>
           </div>
         </div>
         <p class="mt-8 text-xs text-slate-50/60 text-center md:text-start">
           © 2023 A Small Job. S.L | Carrer de Pujades, 126. 08005 Barcelona. España.
         </p>
       </div>
       </div>
     
       <div className="pb-7 bg-inverse" aria-hidden="true">
         <div className="">
         
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[7px] h-[16px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[8px] h-[15px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[9px] h-[14px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[10px] h-[13px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[11px] h-[12px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[12px] h-[11px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[13px] h-[10px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[14px] h-[9px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[15px] h-[8px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[16px] h-[7px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[17px] h-[6px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[18px] h-[5px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[19px] h-[4px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[20px] h-[3px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[21px] h-[2px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[22px] h-[1px]"></div>
           <div className="bg-slate-50/10 backdrop-blur-xl mt-[23px] h-[0px]"></div>
         </div>
       </div>
     </footer>
    )

}


export default Footer;