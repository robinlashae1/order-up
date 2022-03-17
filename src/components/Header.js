import msphologo from "../data/msphologo.png"

function Header() {
    return (
            <div id="header" className="float-child bootstrapOverride">
                <img src={msphologo} alt="logo"/>
                {/* //<img src="../data/msphologo.png" alt="logo"/> */}
            </div>
    )
}

export default Header;