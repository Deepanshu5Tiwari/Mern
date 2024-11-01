import React from 'react'

const page = () => {
  return (
    <div>
          {/*Logo div*/}
          <>
  {/*-------- Logo and Search Panel HTML Code Starts -------*/}
  <div className="width-100 search-panel">
    <div className="container">
      <div className="width-20">
        <img src="images/logo.png" className="logo" />
      </div>
      <div className="width-50">
        <input
          className="search-textbox"
          type="text"
          placeholder="Search for products, brand and more"
        />
        <button className="search-button">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
      <div className="width-30">
        <ul className="cart-sect">
          <li>
            <i className="fa fa-heart-o" aria-hidden="true" />
            <a className="head1mr" href="#">
              Whislist
            </a>
          </li>
          <li>
            <i className="fa fa-user-circle-o" aria-hidden="true" />
            <a href="#">Login &amp; Signup</a>
          </li>
          <li>
            <i className="fa fa-shopping-cart" aria-hidden="true" />
            <a href="#">Cart (0)</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/*-------- Logo and Search Panel HTML Code Ends -------*/}
</>



         
    </div>
  )
}

export default page
