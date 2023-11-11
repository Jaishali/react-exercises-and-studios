import React from 'react';
class HobbyLinks extends React.Component {
    render() {
        const hobbys = ["Readingbooks", "watching movies"];
        return (
        <div>
            
           <h3 className = {classes.hobbyHeading}>My Hobbys</h3>
           <ol>
             <a href = {hobbyLinks[0]}>Link text...</a>
             <a href = {hobbyLinks[1]}>Link text...</a>
           </ol>
        </div>
        );
     }
  }
  
  export default HobbyLinks;

