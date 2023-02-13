import React from 'react'
import {Table,Navbar,NavbarBrand, NavbarText} from 'reactstrap'
export const Leaderboard = () => {
  return (
    <>
      <Navbar
    className="my-2"
    style={{"background-color":"#281E5D"}}
  >
    <NavbarBrand href="/" style={{"color":"tomato"}}>
      Incedo Hack-a-thon
    </NavbarBrand>
    <NavbarBrand style={{"color":"tomato"}} className="font-monospace">
      Leaderboard
    </NavbarBrand>
    <NavbarText style={{"color":"#281E5D"}}>
     justinasdfasfdfasdfasdfasfd
    </NavbarText>
  </Navbar>
    <Table hover>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Team Name
      </th>
      <th>
        Rating
      </th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">1</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">2</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">3</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">4</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">5</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">6</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">7</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">8</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">9</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">10</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  <tr>
      <th scope="row">11</th>
      <td>Vikram Sarabhai</td>
      <td>8.5</td>
    </tr>
  </tbody>
</Table>
    </>
    )
}
