const { useState } = React; //important

const InputField = (props) => {
    return <div className="form-field">
        <label className="form-label" htmlFor={props.id}>{props.label}</label>
        <div className="form-control">
            <input type="number"
            name={props.name}
            value={props.value}
            onChange={props.onChange} 
            placeholder={props.placeholder} />
            <span>{props.unit}</span>
        </div>
        
    </div>
};

const Comment = (props) => {
    return (
      <div>
        {props.values < 18.5 && props.values > 0 && <b>You are underweight!!!</b>}
        {props.values < 22.9 && props.values >= 18.5 && <b>You have a good body!!!</b>}
        {props.values >= 23 && props.values < 25 && <b>You are considered overweight!!!</b>}
        {props.values >= 25 && <b>You are considered obese!!!!</b>}
      </div>
    );
  };


InputField.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};


const App = () => {
    //Hooks
    const [bmi, setBmi] = useState(null); //state, setState
    const [values, setValues] = useState({
        weight: null,
        height: null,
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
        console.log(values)
    }
    // State

    const handleSubmit = (e) => {
        e.preventDefault(); //important
        //Uncontrolled form

        if (weight == "" || height == "") {
            alert("Please fill infomation!");
            return;
          }

        const { weight, height } = values;

        const resultBmi = (weight / ((height) * (height))).toFixed(2)

        setBmi(resultBmi)
    };


    return (
        <div className="container">
            <h1 className="heading">Body Mass Index</h1>

            <form onSubmit={handleSubmit} action="">
                <InputField
                    id="weight"
                    onChange={handleChange}
                    value={values.weight || ""}
                    type="number" 
                    name="weight"
                    placeholder="Weight"
                    unit="kg"
                />
                <InputField
                    id="height"
                    onChange={handleChange}
                    value={values.height || ""}
                    type="number"
                    placeholder="Height"
                    name="height"
                    unit="m"
                />
                <p className="result">
                    Your BMI: <b>{bmi}</b>
                </p>
                <Comment values={bmi} />
            <button className="btn-calculate">Calculate</button>
            </form>

        </div>
    );
}


ReactDOM.render(<App />, app);
