import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const CashBackIcon = () => <i className="bi bi-cash-stack"></i>;

const PeopleIcon = () => <i className="bi bi-people-fill"></i>;

const InputField = (props) => {
    //props.children
    return <div className="form-field">
        <label className="form-label" htmlFor={props.id}>{props.label}</label>
        <div className="form-control">
            {props.icon}
            <input type="number"
            name={props.name}
            value={props.value}
            onChange={props.onChange} />
        </div>

    </div>
};


const OptionField = (props) => {
    //chỉ sử dụng trong hàm map
    //chỉ sử dụng trong ngữ cảnh của hàm map
    const options = props.options.map((option, index) => (
        <option value={option.value} key={option.value}>{option.label}</option>
    ));
    return (
        <div className="option-field">
            <label htmlFor={props.id}>{props.label}</label>
            <div>
            <select 
            name={props.id} 
            id={props.id} 
            onChange={props.onChange}
            defaultValue={props.defaultValue}>
                {options}
            </select>
            </div>
        </div>
    );
};

function App() {
  //Hooks
  const [tip, setTip] = useState(0); //state, setState
  const [values, setValues] = useState({
      amount: 0,
      guests: 0,
      quantity: 0.3,
  })

  const handleChange = (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      console.log(values)
  }
  //State
  const options = [
      {
          value: 0.3,
          label: "30% - Outstanding"
      },
      {
          value: 0.2,
          label: "20% - Good"
      },
      {
          value: 0.15,
          label: "15% - It's Okay"
      },
      {
          value: 0.1,
          label: "10% - Bad"
      },
      {
          value: 0.05,
          label: "5% - Terrible"
      }
  ];
  const gender = [
      {
          value: -1,
          label: "Other"
      },
      {
          value: 0,
          label: "Male"
      },
      {
          value: 1,
          label: "Female"
      }
  ]

  const handleSubmit = (e) => {
      e.preventDefault(); //important
      //Uncontrolled form

      const { amount, guests, quality } = e.target.elements;

      const totalTip = amount.value * quality.value

      const tipPerson = (totalTip / guests.value).toFixed(2);

      console.log(tipPerson)
      setTip(tipPerson)
  };

  return (
      <div className="container">
          <h1 className="heading">Tip Caculator</h1>

          <form onSubmit={handleSubmit} action="">
              <InputField
                  label="Bill amount"
                  id="amount"
                  onChange={handleChange}
                  value={values.amount}
                  type="number" 
                  name="amount"
                  icon={<CashBackIcon />}
              />
              <InputField
                  label="Number of guests"
                  id="guests"
                  onChange={handleChange}
                  value={values.guests}
                  type="number"
                  name="guests"
                  icon={<PeopleIcon />}
              />
              <OptionField
                  label="Service Quality"
                  id="quality"
                  name="quality"
                  defaultValue={values.quantity}
                  options={options}
              />
              <OptionField
                  label="Gender"
                  id="gender"
                  options={gender}
              />
              <p className="result">
                  Tips <b>${tip}</b>
              </p>
          <button className="btn-calculate">Calculate</button>
          </form>

      </div>
  );
}

export default App
