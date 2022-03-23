// Cú pháp 1
// const h1 = React.createElement("h1", 
// {
//     className: "heading",
// },
// "Hello React"
// )

// const { useState } = require("react");

// const { useState } = require("react");

// ReactDOM.render(h1, app)

//Cú pháp JSX (hay dùng hơn vì ngắn gọn, viết được trực tiếp mã html) => Phải biên dịch qua NodeJS trước
// const myName ="Mai Anh";

// const render = (myName) => {
//     const element = (
//     <div>
//         <h1 className="heading" onClick={() => {
//             alert("hehehe")
//         }}

//         id = {123}
//         style={{
//             color: "red",
//             backgroundColor: "blue"
//         }}
//         something={[1,2,3,4,5]}
//         >Hello {myName}
//         </h1>
//         <p>How are you?</p>
//         <button>Click me</button>
//     </div>

//  //Chỉ được có duy nhất 1 div parent
// ) 
// return element;
// }



// ReactDOM.render(render("Mai Anh"), app);

// setInterval(() => {
//     ReactDOM.render(render("Phùng Mai Anh"), app);
// }, 3000)


// Khai báo class (phải có extends)

// class Greeting extends React.Component {
//     // constructor() {

//     // }

//     render() {
//         return (
//         <div className="greeting">
//             <h1>Hello</h1>
//             <p>How are you</p>
//         </div>
//         )
//     }
// }

// class Button extends React.Component {
//     render () {return (
//         <button onClick={this.props.click}>
//             {this.props.label}
//         </button>
//     )
//     }
// }


// Khai báo function
// const Greeting = (props) => {
//     return (
//         <div className="greeting">
//             <h1>Hello {props.name}</h1>
//             <p>How are you</p>
//         </div>
//         );
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <Greeting name="Phùng Mai Anh" />
//                 <Greeting name="Phùng Mai Anh 1" />
//                 <Greeting name="Phùng Mai Anh 2" />
//                 {/* {props} */}
//                 <Button />
//                 <Button label="Text2" click={() => {alert("Mai Anh")}}/>
//                 <Button label="Text3" click={() => {alert("Mai Anh 2")}}/>
//                 <Button label="Text3" click={() => {alert("Mai Anh 3")}}/>
//                 <Button label="Text3" click={() => {alert("Mai Anh 4")}}/>
//                 <Button label="Text3" />
//             </div>
//             )
//     }
// }

// Button.displayName="Sai rồi";
// Greeting.displayName="Hello";
// App.displayName="Tools";

// Button.propTypes = {
//     label: PropTypes.string.isRequired,
// };

// Button.defaultProps = {
//     label: "Click me!!!",
// };

const { useState } = React; //important

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



InputField.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
};

const OptionField = (props) => {
    //chỉ sử dụng trong hàm map
    //chỉ sử dụng trong ngữ cảnh của hàm map
    //Hỏi lại bố nó
    const options = props.options.map((option, index) => (
        <option value={option.value}>{option.label}</option>
    ));
    return (
        <div className="option-field">
            <label htmlFor={props.id}>{props.label}</label>
            <select 
            name={props.id} 
            id={props.id} 
            onChange={props.onChange}
            defaultValue={props.defaultValue}>
                {options}
            </select>
        </div>
    );
};

// let options = [{
//     value: "1", label: "1"
// }, {value: "2", label: "2"}]
// let inPutProps = {
//     id: 10,
//     label: "shshs",
//     defaultValue: "kkkkkk",
//     options: options,
//     onChange: () => {
//         // dosmt
//     }
// }
const App = () => {
    //Hooks
    const [tip, setTip] = useState(0); //state, setState
    const [values, setValues] = useState({
        amount: 0,
        guests: 0,
        quantity: 0.3,
    })

    const handleChange = (e) => {
        //Hỏi lại bố nó
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
        // Hỏi lại bố nó

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


ReactDOM.render(<App />, app);
