import {useState} from "react";
import './Form.css';

function Form() {
    const [formdata, setdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        country: '',
        streetaddress: '',
        city: '',
        state: '',
        pincode: '',
        candidates: false,
        commentcheck: false,
        offercheck: false,
        smsmode: ''
    });
    function changeHandler(event) {
        const {name, value, type, checked} = event.target;
        setdata(function (prevdata) {
            return {
                ...prevdata,
                [name]: type === "checkbox"
                    ? checked
                    : value
            }
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log(formdata);
    }
    function resetHAndler() {
        setdata('');
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="form-container">
                <label htmlFor="firstname">First Name</label><br/>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formdata.firstname}
                    onChange={changeHandler}
                    placeholder="First Name" required/>
                <br/>
                <label htmlFor="lastname">Last Name</label><br/>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formdata.lastname}
                    onChange={changeHandler}
                    placeholder="Last Name" />
                <br/>
                <label htmlFor="email">Email address</label><br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formdata.email}
                    onChange={changeHandler}
                    placeholder="Email" 
                    required/>
                <br/>
                <label htmlFor="country">Country</label><br/>
                <select
                    id="country"
                    name="country"
                    value={formdata.country}
                    onChange={changeHandler}
                    required>
                    <option >India</option>
                    <option >Australia</option>
                    <option >USA</option>
                    <option >Mexico</option>
                </select>
                <br/>
                <label htmlFor="streetaddress">Street Address</label><br/>
                <input
                    type="text"
                    id="streetaddress"
                    name="streetaddress"
                    value={formdata.streetaddress}
                    onChange={changeHandler}
                    placeholder="121 Baker Street"/>
                <br/>
                <label htmlFor="city">City</label><br/>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formdata.city}
                    onChange={changeHandler}
                    placeholder="New Delhi"/>
                <br/>
                <label htmlFor="state">State</label><br/>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formdata.state}
                    onChange={changeHandler}
                    placeholder="New Delhi"/>
                <br/>
                <label htmlFor="pincode">ZIP / Postal code</label><br/>
                <input
                    type="number"
                    id="pincode"
                    name="pincode"
                    value={formdata.pincode}
                    onChange={changeHandler}
                    placeholder="11XXX"/>
                <h5>By Email</h5>

                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="comments"
                        name="commentcheck"
                        onChange={changeHandler}
                        checked={formdata.commentcheck}/>
                    <label htmlFor="comments">Comments</label>
                    <p>Get Notification</p>
                    <input
                        type="checkbox"
                        id="candidates"
                        name="candidates"
                        onChange={changeHandler}
                        checked={formdata.candidates}/>
                    <label htmlFor="candidates">Candidates</label>
                    <p>Get Notification</p>
                    <input
                        type="checkbox"
                        id="offers"
                        name="offercheck"
                        onChange={changeHandler}
                        checked={formdata.offercheck}/>
                    <label htmlFor="offers">Offers</label>
                    <p>Get Notification</p>
                </div>

                <h5>Push Notification</h5>
                <p>These are delivered via SMS to your mobile phone</p>

                <div className="radio">
                    <input
                        type="radio"
                        name="smsmode"
                        id="every"
                        value='everything'
                        onChange={changeHandler}
                        checked={formdata.smsmode === 'everything'}/>
                    <label htmlFor="every">Everthing</label>
                    <br/>
                    <input
                        type="radio"
                        name="smsmode"
                        id="same"
                        value='email'
                        onChange={changeHandler}
                        checked={formdata.smsmode === 'email'}/>
                    <label htmlFor="same">Same as email</label>
                    <br/>
                    <input
                        type="radio"
                        name="smsmode"
                        id="noti"
                        value='none'
                        onChange={changeHandler}
                        checked={formdata.smsmode === 'none'}/>
                    <label htmlFor="noti">No push notification</label>
                </div>
                <div className="button">
                    <button type="submit" onClick={submitHandler}>
                        Submit
                    </button>
                    <button type="reset" onClick={resetHAndler}>
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;