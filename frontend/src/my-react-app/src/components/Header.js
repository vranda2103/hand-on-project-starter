import Button from './Button'
const Header = () => {
    const onClick = () => {
        console.log("clicked");
    }
    return (
        <header>
            <h1 class="main-heading">Background Remover</h1>
            <Button color="green" text="Hello1" onClick={onClick} />
            <Button color="blue" text="Hello2" />
        </header>
    )
}

export default Header
