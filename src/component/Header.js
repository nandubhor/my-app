import React,{useState} from 'react'

const Header = (props) => {

   const [name, setName] = useState(props.name);
   
   const clickhandler = () => {
        setName("Vinu")
   };

    return (
        <div>
            <h1>Hello {name}</h1>
            <button onClick={clickhandler}>Chnage Name</button>
        </div>
    )
}

 export default Header
