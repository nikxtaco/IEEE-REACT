import React from  'react';
import './Title.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const title = props =>{
    return(
        <div className="title">
            <Jumbotron fluid className="jumbo" style={{backgroundColor:"white"}}>
                <Container className="contt" >
                    <h1 id="heading">IEEE MEC</h1>
                    <p id="para">
                        its parent.
                    </p>
                </Container>
    </Jumbotron>
    
     margin-top: 6.5rem;
    height: calc( 100vh - 100px);
    background-color: white;*/}
    </div>
    )
}

export default title;