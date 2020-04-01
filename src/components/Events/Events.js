import React, { Component } from 'react';
import "./Events.css"

const data = [
  {   
      "type":"mainexecom",
      "no_of_mem": '2',
      "events":[
        {
          "name": "some name 1",
          "img_link": "somelink 1"
        },
        {
          "name": "some name 2",
          "img_link": "somelink"
        }
      ],
  },
  {   
      "type":"cs",
      "no_of_mem": 2,
      "events":[
        {
          "name": "some name 3",
          "img_link": "somelink"
        },
        {
          "name": "some name 4",
          "img_link": "somelink"
        }
      ],
  },
  {   
      "type":"pes",
      "no_of_mem": 2,
      "events":[
        {
          "name": "some name 5",
          "img_link": "somelink"
        },
        {
          "name": "some name 6",
          "img_link": "somelink"
        }
      ],
  },
  {   
      "type":"ias",
      "no_of_mem": 2,
      "events":[
        {
          "name": "some name 7",
          "img_link": "somelink"
        },
        {
          "name": "some name 8",
          "img_link": "somelink"
        }
      ],
  },
  {   
      "type":"sps",
      "no_of_mem": 2,
      "events":[
        {
          "name": "some name 9",
          "img_link": "somelink"
        },
        {
          "name": "some name 10",
          "img_link": "somelink"
        }
      ],
}]
 
function Events() {

  return (
    <div>
      <h1>Events</h1>
      <div class="row">

        {
          data.map((item) => <div>

            <ul>
              {
              item.events.map((sub) => <li>
    <div class="col s12 m4">
      <div class="card blue-grey darken-1" style={{'width':'90%','margin':'auto', 'margin-bottom':'3em'}}>
        <div class="card-content white-text">
          <span class="card-title">{sub.name}</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="/">{sub.img_link}</a>
          <a href="/">This is a link</a>
        </div>
    </div>

  </div>
            
              </li>)
              }
            </ul>

          </div>)
        }
      </div>
    </div>
  );
};



export default Events;