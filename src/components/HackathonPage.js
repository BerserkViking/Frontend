import {Link} from 'react-router-dom'
export const HackathonPage = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light text-center fs-1 text font-monospace text-decoration-underline ">
       Incedo Hack-a-thon
      </nav>
      <div className="card" style={{ "width": "20rem","height":"30rem" }}>

        <div className="card-body mt-6">
          <h5 className="card-title text-center">Overview</h5>
          <p className="card-text"> 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 
            data data data data 

          </p>
        </div>
      </div>

      <div class="card text-bg-info grid gap-5  row-gap-9 position-absolute top-50  start-50 translate-middle" style={{ "width": "15rem" ,"height":"7rem"}}>
          <Link to='/registration-form' target='_blank' className="btn btn-primary ">Register</Link>
          <a href="#" class="btn btn-warning ">Login</a>
        </div>
      </div>


  );
}

