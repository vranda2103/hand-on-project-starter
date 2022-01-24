const Button = ({color, text, onClick}) => {
    /*const onClick = () =>{
        console.log("saranghae");
    }*/
    return (
        <button style={{backgroundColor: color}} class="btn">{text}</button>
        )
}

export default Button
