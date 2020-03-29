import React from  'react';
import './Title.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import main from "../main2.png"
import heading from "../heading.png"

const title = props =>{
    return(
        <div className="title">
            <Jumbotron fluid className="jumbo" style={{'background-color':'white'}}>
                <Container>
                <div class="row">

                    <div className="col s1">
                        <img src={heading} alt="" className="heading_img"/>
                        <p className="text">
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent. This is a modified jumbotron that occupies the entire horizontal space of
                        its parent. This is a modified jumbotron that occupies the entire horizontal space of
                        its parent. This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                    </div>
                    <div className="col s1">
                        <img src={main} alt="" className="main_img" />
                    </div>
                </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default title;