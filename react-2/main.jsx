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
        </div>

    </div>
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
    const [bmi, setBmi] = useState(0); //state, setState
    const [values, setValues] = useState({
        weight: null,
        height: null,
    })

    const result = [
        {
            bmi: 18.5,
            text: "You are underweight!!!",
            message: "You need to apply diet and exercise to gain weight."
        },
        {   
            bmi: 25,
            text: "You have a good body!!!",
            message: "You should maintain a healthy diet and exercise."
        },
        {
            bmi: 30,
            text: "You are considered overweight!!!",
            message: "The situation is not too serious, so you can immediately find effective natural weight loss methods and combine exercise. If applied in moderation and persistently, it only takes a few months for you to have a very satisfactory body."
        },
        {
            bmi: Infinity,
            text: "You are considered obese!!!",
            message: "You can face a lot of pressure on a daily basis, especially the weight of fat puts pressure on bones and organs, affecting your performance and health."
        }
    ]

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

        const { weight, height } = e.target.elements;

        const bmi = (weight.value / ((height.value)/100 * (height.value)/100)).toFixed(2)

        setBmi(bmi)
    };

    const resultText = result.find(e => bmi <= e.bmi).text;
    const messageText = result.find(e => bmi <= e.bmi).message;


    return (
        <div className="container">
            <h1 className="heading">Body Mass Index</h1>

            <form onSubmit={handleSubmit} action="">
                <InputField
                    label="Weight"
                    id="weight"
                    onChange={handleChange}
                    value={values.weight}
                    type="number" 
                    name="weight"
                    placeholder="kg"
                />
                <InputField
                    label="Height"
                    id="height"
                    onChange={handleChange}
                    value={values.height}
                    type="number"
                    placeholder="cm"
                    name="height"
                />
                <p className="result">
                    Your BMI: <b>{bmi}</b>
                </p>
                <p className="result-text">
                    {resultText}
                </p>
                <p className="result-message">
                    {messageText}
                </p>
            <button className="btn-calculate">Calculate</button>
            </form>

        </div>
    );
}


ReactDOM.render(<App />, app);
