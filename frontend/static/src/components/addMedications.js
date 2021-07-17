import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
//
// class Medication (models.Model):
//
//     CURRENT = 'CUR'
//     PAST = 'PAS'
//
//     CATEGORY_CHOICES = [
//         (CURRENT, 'Currently Taking'),
//         (PAST, 'No Longer Taking'),
//     ]

class AddMedication extends Component{
  constructor(props){
    super(props);
    this.state = {
      med_date: '',
      med_name: '',
      category:  'CUR',
      prescriber: '',
      dosage: '',
      reason: '',
      label_img: null,
      preview: '',
      isEditing: true,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInput(e){
    this.setState( {[e.target.name]: e.target.value});
  }

  handleCheckbox(e) {
    this.setState({[e.target.name]: e.target.checked})
  }

  handleImage(e) {
    let file = e.target.files[0];
    this.setState({label_img : file, });

    let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          preview: reader.result,
        });
      }
    reader.readAsDataURL(file);
  }

  async handleSubmit(e){
    e.preventDefault();

    const medication = { ...this.state };

    if (!(medication.appt_img instanceof File)){
      //"if it's NOT an instance of a file, remove it"
      delete medication.appt_img;
      //deleting property if not an instance of a file.
    }
    delete medication.isEditing;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

    let formData = new FormData();

    const keys = Object.keys(medication);
    keys.forEach(key => formData.append(key, medication[key]));

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    };
    const response = await fetch(`/api/v1/medications/`, options);
    const data = await response.json();


    if(!!this.props.addMedication) {
      this.props.addMedication(data);
      this.props.handleModal();
    }
  }
  //
  // prescriber: '',
  // dosage: '',
  // reason: '',
  // label_img: null,
  //

  render(){
    return(
      <>
      <div className="record-form-div">
        <form className="form-login p-4 mb-3 login-form-container profile-form-container">
            <div className="form-group">
              <label for="med_date" className="form-label">Date Prescribed:</label>
              <br/>
              <input className="login-input" name="med_date" type="date" value={this.state.med_date} onChange={this.handleInput} />
            </div>
            <div className="form-group">
              <label for="med_name" className="form-label">Medication Name:</label>
              <br/>
              <input className="login-input" type="text" name="med_name" placeholder="ex. Allegra" value={this.state.med_name} onChange={this.handleInput} />
            </div>
            <div className="form-group">
              <label for="category" className="form-label">Currenty Taking?</label>
              <br/>
            <select onChange={this.handleInput} name="category" id="category">

              <option value="CUR">Currently Taking</option>
              <option value="PAS">No Longer Taking</option>
            </select>
            </div>

            <div className="form-group">
              <label for="dosage" className="form-label">Dosage:</label>
              <br/>
              <input className="login-input" type="text" name="dosage" placeholder="Dosage if Known" value={this.state.dosage} onChange={this.handleInput} />
            </div>

            <div className="form-group">
              <label for="prescriber" className="form-label">Prescriber:</label>
              <br/>
              <input className="login-input" type="text" name="prescriber" placeholder="Who Prescribed It?" value={this.state.prescriber} onChange={this.handleInput} />
            </div>

            <div className="form-group">
              <label for="reason" className="form-label">Reason for Taking:</label>
              <br/>
              <input className="login-input" type="text" placeholder="ex. Asthma" name="reason" value={this.state.reason} onChange={this.handleInput} />
            </div>

            <div className="form-group">
              <label for="label_img" className="form-label">Bottle Label Picture:</label>
              <br/>
              <input style={{width: "220px"}} type="file" name="label_img" onChange={this.handleImage} />
              {this.state.label_img
                    ? <img className="appt-img" src={this.state.preview || this.state.label_img} alt=""/>
                    : null
                  }
            </div>
             <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Save</button>
          </form>
      </div>

      </>
    )
  }
}
export default AddMedication;