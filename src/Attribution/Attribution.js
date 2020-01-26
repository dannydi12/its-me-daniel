import React from 'react';
import './Attribution.css';
import { Link, withRouter } from 'react-router-dom'

function Attribution(props) {
  return (
    <main className='attribution'>
      <div className='attribution-container'>
        <header>
          <h1>Attribution</h1>
        </header>
        <blockquote>"If I have seen further it is by standing on the shoulders of Giants."<br />- Isaac Newton, 1675</blockquote>
        <ul>
          <li>Avatar made by <a href='#'>Avataaar.com</a></li>
        </ul>
        <Link className='back' to='/'>Back</Link>
      </div>
    </main>
  );
}

export default withRouter(Attribution);