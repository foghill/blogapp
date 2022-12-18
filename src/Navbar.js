import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1 className= "ui huge blue header center aligned container">Ben's Flatiron React Project</h1>
        <div className='ui menu'>
            <Link className="item" to="/">Home</Link>
            <Link className="item" to="/create">Create Blog</Link>
            <Link className="item" to="/about">About</Link>
            <Link className="item" to="/search">Search</Link>
        </div>
    </nav>
  )
}

export default Navbar