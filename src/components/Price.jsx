import React from 'react'
import CardPrice from './CardPrice'
import IntroPrice from './IntroPrice'

const Price = () => {

  const planes = [
    { },
    { plan: "Basico", subtitle: "For individuals or team just getting started with sales.", price: 28},
    { plan: "Professional", subtitle: "For teams that need to create sales plans with confidence.", price: 60},
    { plan: "Enterprise", subtitle: "For teams that need additional security, control, and support.", price:80}
  ]
   /*  //pasar todos los prop en un objeto
    const basico = { plan: "Basico", subtitle: "For individuals or team just getting started with sales.", price: 28}
    const premium = { plan: "Professional", subtitle: "For teams that need to create sales plans with confidence.", price: 60}
    const enterprise = { plan: "Enterprise", subtitle: "For teams that need additional security, control, and support.", price:80} 
    
    <CardPrice />
                    <CardPrice {...basico}/>
                    <CardPrice {...premium}/>
                    <CardPrice {...enterprise}/>
    */

    const svgBall = <svg class="bfg lg:bottom-auto top-[-12rem] absolute left-1/2 h-[64rem] translate-y-1/2 translate-x-[-50%]" viewBox="0 0 1208 1024" aria-hidden="true"><ellipse cx="604" cy="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx="604" ry="512"></ellipse><defs><radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg>


  return (
    <section className='py-16 px-4 aiz' >
      {svgBall}
      <div className='container mx-auto'>
        <IntroPrice/>
        <div  className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          { planes.map( planes => {
              const { plan, subtitle, price } = planes;
              return(
                <CardPrice key={plan}
                  plan={plan}
                  subtitle={subtitle}
                  price={price}
                />
              )

          })}
                 
        </div>
      </div>
    </section>
  )
}

export default Price