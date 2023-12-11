import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import frame from '../../../assets/img/Frame 560 (2).png'
const HeaderSection = () => {
    // cons t [openDropdown, setOpenDropdown] = useState(false)

    return (
        <div id='headers'>
            <div className="container">
                <div className="row">
                    <ul className='categor col-lg-3 col-md-12 col-12 '>
                        <li className='li1'><Link>Woman’s Fashion</Link>
                            {/* <ul className='dropdown'>
                                <li>Woman 1</li>
                                <li>Woman 2</li>
                                <li>Woman 3</li>
                                <li>Woman 4</li>
                                <li>Woman 5</li>
                                <li>Woman 6</li>
                            </ul> */}
                        </li>
                        <li><Link >Men’s Fashion</Link></li>
                        <li><Link>Electronics</Link></li>
                        <li><Link>Home & Lifestyle</Link></li>
                        <li><Link>Medicine</Link></li>
                        <li><Link>Sports & Outdoor</Link></li>
                        <li><Link>Baby’s & Toys</Link></li>
                        <li><Link>Groceries & Pets</Link></li>
                        <li><Link>Health & Beauty</Link></li>
                    </ul>
                    <div className='headerimg col-12 col-md-12 col-lg-9'>
                       
                        <img src={frame} alt="" /></div>
                   
                </div>
            </div>
        </div>
    )
}

export default HeaderSection