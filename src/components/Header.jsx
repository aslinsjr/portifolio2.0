import './Header.css'

const Header = () => {
  return (
    <header>
        <img src="vscode-icon.png" alt="VS Code Icon" />
        <div className="input-control">
            <img src="search-icon.png" alt="Search Icon" />
            <input type="text" placeholder='alexandre-silva-lins-jr'/>
        </div>
        <img id='close-icon' src="./close-icon.png" alt="Close Icon" />
    </header>
  )
}

export default Header