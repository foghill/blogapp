import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1 class= "ui huge blue header center aligned container">React Blog</h1>
        <div className='ui menu'>
            <Link class="item" to="/">Home</Link>
            <Link class="item" to="/create">Create Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar