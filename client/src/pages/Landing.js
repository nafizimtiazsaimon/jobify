import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return <main>
    <nav>
        <img src={logo} alt="jobify"  className='logo'/> {/*add logo with class name*/}
    </nav>
    <div className="container">
        <div className='info'>
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
    </div>
  </main>
}

export default Landing
