import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
  return (
    <div>
        <header className="bg-light shadow-sm navbar-sticky">
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="d-none d-sm-block me-4 order-lg-1" href="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRX5PzoDfuuZX0uQiNZ4dfCCozeV8K4F_fGw&usqp=CAU" width={74} alt="Cartzilla" />
                    </a>
                <div className="navbar-toolbar d-flex align-items-center order-lg-3">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon" /></button><a className="btn btn-primary btn-shadow" href="https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/" target="_blank" rel="noopener"><i className="ci-cart me-2" />Buy now</a>
                </div>
                <div className="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
                    <hr className="my-3" />
                    {/* Primary menu*/}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/products'>Product Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>About</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </header>

        <main>
            <Outlet/>
        </main>
        <footer>Fotter</footer>
    </div>
  )
}

export default WebsiteLayout