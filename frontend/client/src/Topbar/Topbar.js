import topbar from './topbar.css';

const Topbar = () => {
    return (


        <div className="top">
            <div className="topLeft">
                <i class="topIcon fa-brands fa-facebook-square"></i>
                <i class="topIcon fa-brands fa-github-square"  style={{paddingLeft:'5px'}}></i>
                <i class="topIcon fa-brands fa-twitter-square"  style={{paddingLeft:'5px'}}></i>
            </div>
            <div className="topCenter ">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOG OUT</li>



                </ul>
            </div>
            <div className="topRight">
                <img 
                className= "topImg"
                src="https://images.unsplash.com/photo-1647719509271-439fd4963f9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""></img>
                <i class="fa-solid fa-magnifying-glass"></i>

            </div>

        </div>
    )
}

export default Topbar