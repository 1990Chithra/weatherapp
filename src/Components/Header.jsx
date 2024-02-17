import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div className='header'>
        <MDBNavbar light bgColor='info' style={{height:'100px'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand style={{marginLeft:'30px'}}>
            <div className='head' style={{fontFamily:'sans-serif'}}>
                <h2 style={{color:'yellow'}}>Weather App</h2>
            </div>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header