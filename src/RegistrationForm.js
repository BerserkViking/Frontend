import {useNavigate} from 'react-router-dom'

const RegistrationForm = () => {
    const Navigate = useNavigate();
    return (
        <div>
        <form className='container'>
            <div className='header'>
                <h1>
                    Registration Form
                </h1>
            </div>

            <div>
                <input type='text' placeholder='Team Name' name='Team name'>
                </input>
            </div>
            <div>
                <input type='text' placeholder='Project Title' name='project name'>
                </input>
            </div>  <div>
                <label for="Domain">Choose a Domain:  </label>
                <select name="Domain" id="Domain">
                    <option value="AI/ML">AI/ML</option>
                    <option value="Web-Dev">Web-Dev</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Cloud">Cloud</option>
                </select>
            </div>
            <label for="Number of Members">Number of Members </label>
            <select name="NOM" id="INOM">
                <option value="option1">3</option>
                <option value="option2">4</option>
            </select>
            <div>
                <input type='text' placeholder='Password' name='Password'>
                </input>
            </div>
        </form>
        <button onClick={()=>Navigate('home')}>Back</button>
        <button onClick={()=>Navigate('/team-members')}>Next</button>
        </div>
        )
}

export default RegistrationForm;