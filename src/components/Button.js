import React from 'react'

function Button({children,onclick}) {
  return (
    <main className='buttoncomp' aria-label='on click' onClick={onclick}>
      {children}
    </main>
  )
}

export default Button