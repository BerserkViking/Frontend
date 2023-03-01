import React, { useEffect, useState } from 'react'
import { Table, Navbar, NavbarBrand, NavbarText, Container } from 'reactstrap'
import axios from 'axios'
import IncedoLogo from './incedo-logo.png'
export const Leaderboard = () => {

  const [teams, setTeams] = useState(null);
  const [nteams, setNteams] = useState(null);
  useEffect(() => {
    axios.get('http://15.206.136.106:443/api/leaderboard/Details')
      .then(function (response) {
        console.log(response.data);
        if (response.data && response.data.length > 0) {
          // console.log(scores);
          let sortedTeams = response.data.sort((a, b) =>
            (parseFloat(a.average) - parseFloat(b.average)) * (-1)

            // else if (a.usability < b.usability)
            //   return true;
            // else if (a.codeQuality < b.codeQuality)
            //   return true;
            // else if (a.userInterface < b.userInterface)
            //   return true;
            // else if (a.speed < b.speed)
            //   return true;
          )
          setTeams(sortedTeams);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);


  return (
    <>
      <Navbar
        className="my-2 fs-4"
        style={{ "background-color": "#281E5D" }}
        Row
      >

        <NavbarBrand href="/" style={{ "color": "tomato" }} className="font-monospace">
          <img
            alt="logo"
            src={IncedoLogo}
            style={{
              "width": "50%"
            }}
          />
        </NavbarBrand>
      </Navbar>
      {!teams && 
      (<>
      <div className='text-center'>

      <h4 className='fw-bold font-monospace text-decoration-underline' style={{marginTop:"15%"}}>
        Results will be declared keep Looking !!</h4>
      </div>
        </>)}
      {
        teams &&
        (
          <>
            <Container className="mx-auto col-7 myborder">
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

                  {
                    teams && teams.map((post, i) => {
                      return (
                        <>
                          <tr>
                            <td>{i + 1}</td>
                            <td>{post.teamName}</td>
                            <td>{post.average}</td>
                          </tr>
                        </>
                      )

                    })
                  }
                </tbody>
              </Table>
            </Container>
          </>
        )
      }

    </>
  )
}
