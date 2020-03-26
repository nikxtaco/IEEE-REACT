import React from  'react';
import './Title.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const title = props =>{
    return(
        <div className="title">
            <Jumbotron fluid className="jumbo">
                <Container>
                    <h1 id="heading">Fluid jumbotron</h1>
                    <p id="para">
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default title;