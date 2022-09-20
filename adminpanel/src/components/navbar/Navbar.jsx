import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div >
          <input type="text" placeholder="Search.."/>
          <i className="fa fa-solid fa-magnifying-glass icon"></i>
        </div>
        <div className="items">
          <div className="item">
          <i className="fa fa-duotone fa-language icon"></i>
            English
          </div>
          <div className="item">
          <i className="fa fa-regular fa-moon icon"></i>
          </div>
          <div className="item">
          <i className="fa fa-solid fa-bell icon"></i>
            <div className="counter">1</div>
          </div>
          <div className="item">
          <i className="fa fa-sharp fa-solid fa-comment icon"></i>
            <div className="counter">2</div>
          </div>
          <div className="item">
          <i className="fa fa-solid fa-list icon"></i>
          </div>
          <div className="item">
          <i className="fa fa-solid fa-list icon"></i>
          </div>
          <div className="item">
           <img
           src='https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600'
           alt=''
           className='avatar'
           />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar