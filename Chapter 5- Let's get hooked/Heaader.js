 export const Title = () => (

    <img
    className="Logo"
     alt="logo"
    src ="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj">
    </img>
    
    )


    //COMPOSING Components

    const Header = () => {
        return (
            <div className="Header">
                <Title />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact US</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        );
    };



export default Header