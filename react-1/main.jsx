// Cú pháp 1
// const h1 = React.createElement("h1", 
// {
//     className: "heading",
// },
// "Hello React"
// )

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

const CashBackIcon = () => <i className="bi bi-cash-stack"></i>;

const PeopleIcon = () => <i className="bi bi-cash-stack"></i>; 

const InputField = (props) => (
        <div className="form-field">
            <label className="form-label" htmlFor={props.id}>{props.label}</label>
            <div className="form-control">
                {props.icon}
                <input id={props.id} type={props.type} />
            </div>
            
        </div>
);

InputField.propTypes = {
        label: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
};

const App = () => {
    return (
    <div className="container">
        <h1 className="heading">Tip Caculator</h1>

        <form action="">
        <InputField 
            label ="Bill amount" 
            id="amnount" 
            // type="number" 
            icon = {<CashBackIcon />} 
        />
        <InputField 
            label ="Number of guest" 
            id="amnount" 
            type="number" 
            icon = {<PeopleIcon />} 
        />
        <button></button>
        </form>

    </div>
    );
}


ReactDOM.render(<App />, app);
