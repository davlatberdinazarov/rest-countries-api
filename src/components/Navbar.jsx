import React, { useState } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

export default function Navbar() {
    let [isLight, setIsLight] = useState(true);
    return (
        <header style={{ zIndex: 999 }} className=' bg-light opacity-75 shadow border-bottom-1 p-2 position-sticky top-0'>
            <div className='container d-flex align-items-center justify-content-between'>
                <h2>Where in the world?</h2>

                <div className=' btn-group'>
                    {isLight ?
                        (<button onClick={() => setIsLight(!isLight)} className='btn btn-light mr-2'>
                            <IoMoonOutline /> Dark Mode
                        </button>)
                        :
                        (
                        <button onClick={() => setIsLight(!isLight)} className='btn btn-light mr-2'>
                            <IoSunnyOutline /> Light Mode
                        </button>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
