import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../Search';
import './index.css'

export const Header = () => {
  return (
    <header>
        <div className='top-strip'>
            <div className='container'>
                <div className='top-header'>
                    <div className='col1'>
                        <p className='col1-heading-text'>Get up to 50% off new season styles, limited time only</p>
                    </div>
                    <div className="col2">
                        <ul className='top-header-list-container'>
                            <li className='top-header-list-item'>
                                <Link to='/help-center' className='header-list-text'>Help-Center</Link>
                            </li>
                            <li className='top-header-list-item'>
                                <Link to={'order-center'} className='header-list-text'>order-Center</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="main-header">
            <div className="container main-header-container">
                <div className="main-col1">
                    <Link to={"/"}><img src="/logo.svg" alt='image'width={222} height={44}/></Link>
                </div>
                <div className="main-col2">
                    <Search/>
                </div>
                <div className="main-col3"></div>
            </div>
        </div>
    </header>
  )
}

export default Header;