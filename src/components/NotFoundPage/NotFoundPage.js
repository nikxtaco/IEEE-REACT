import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'
class NotFoundPage extends React.Component{
    render(){
        return <div className="notfound">
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}export default NotFoundPage;