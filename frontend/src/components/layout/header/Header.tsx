import { NavLink } from 'react-router-dom'
import './Header.css'


export default function Header() {



    return (
        <div className='Header'>
            <div>
            Managing development team meetings
            </div>  
            <div>
                <nav>
                    <NavLink to="/list">Meetings</NavLink>
                    <NavLink to="/add">add Meeting</NavLink>
                </nav>
            </div>          

        </div>
    )
}