import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PersonInfo from './PersonInfo/PersonInfo.jsx'
import Button from './Button/Button.jsx';

const data = [
    {
        id: 1,
        name: "Bertie Yates",
        avatar: "./public/Bertie.jpg",
        dob: "1999-03-30",
    },
    {
        id: 2,
        name: "Hester Hogan",
        avatar: "./public/Hester.jpg",
        dob: "1999-03-30",
    },
    {
        id: 3,
        name: "Larry Little",
        avatar: "./public/Larry.jpg",
        dob: "2000-04-01",
    },
    {
        id: 4,
        name: "Sean Walsh",
        avatar: "./public/Lola.jpg",
        dob: "1993-04-02",
    },
    {
        id: 5,
        name: "Lola Gardner",
        avatar: "./public/Sean.jpg",
        dob: "1997-04-03",
    }
];

const App = () => {
    
    const [persons, setPerson] = useState(
        data.filter((person) => {
            let today = new Date()
            return ((person.dob.substring(8)) == today.getDate()
                && Number(person.dob.substring(5, 7)) == (today.getMonth() + 1));
        })
    )

    const count = persons.length;

    const birthdayText = () => {
        if (count == 0 || count == 1) {
            return("birthday")
        }
        return "birthdays"
    }

    const handleClick = () => {
        setPerson([])
    }

    
    return (
        <div className="container">
            <div className="total">
                <p className='total-birthdays'>{count} {birthdayText()} today</p>
            </div>
            <div className="person-info">
                {persons.map((p) => {
                    let today = new Date()
                    let age = (Number(today.getFullYear()) - Number((p.dob.substring(0, 4))))
                    return {...p, age}
                }).map((p1) =>
                    <PersonInfo
                        {...p1}
                    />)}
            </div>
            <Button 
                label= "Clear All"
                handleClick={handleClick}
            />
        </div>
        
    )
}

export default App
