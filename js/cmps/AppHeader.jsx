
const { NavLink } = ReactRouterDOM


export function AppHeader() {

    return (
        <header className="header">
            <nav className="flex space-between align-center main-layout">
                <div className="logo">Apsus<span>.</span></div>
                <ul className="nav clean-list flex">
                    <li> <NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/books">Our Books</NavLink></li>
                    <li><NavLink to="/miss-keep">Miss Keep</NavLink></li>
                    <li><NavLink to="/mister-email">Mister Email</NavLink></li>
                </ul>
            </nav>
        </header>
    )


}