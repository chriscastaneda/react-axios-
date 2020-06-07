import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import './navbar.component.css'

//hashRouter history for props
interface NavbarProps{
    history: History;
};

//2.Pass RouterComponentProps
const NavbarComponent: React.FC<RouteComponentProps> = (props)=> {

    //3.Render <span> on current page
    const renderOnCurrentPath =(path: String)=>{
        //return <ScreenReadr> if paths match
        return path === props.location.pathname ? 
                        <span className="sr-only">(current)</span> //history provide for screenreader span to determine current page.
                        : <span></span> //else return empty span
    }
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Bank of Money</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/home">Home {renderOnCurrentPath('/home')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/accounts">Accounts {renderOnCurrentPath('/accounts')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/loans">Loans {renderOnCurrentPath('/loans')}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

//1.Wrap NavbarComponent and export in withRouter(this provides HashRouter history to NavbarComponent).
export default withRouter(NavbarComponent); //High Order Component