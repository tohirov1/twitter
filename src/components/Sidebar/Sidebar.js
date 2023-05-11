

import Logo from  "../../Assets/images/twitter-logo-4 1.svg"
import Home from "../../Assets/images/home.svg"
import Explore from "../../Assets/images/explore.svg"
import Notif from "../../Assets/images/notification.svg"
import Mesage from "../../Assets/images/messages.svg"
import Book from "../../Assets/images/bookmarks.svg"
import List from "../../Assets/images/lists.svg"
import Profili from "../../Assets/images/profile.svg"
import More from "../../Assets/images/more.svg"
import Bobur from "../../Assets/images/bobur.png"

function Sidebar() {
    return(
        <>
        <div className="sidebar h-[100vh] w-[380px] sticky top-0 ">
            <div className="pl-[100px] mr-[20px] mt-[31px] mb-[51px]">
                <img src={Logo} alt="Logo" />
                <div className="mt-[40px]">
                <div className="flex items-center justify-start gap-[20px]">
                <img src={Home} alt="homefill" />
                <h2>Home</h2>
            </div>
            <div className="flex items-center justify-start gap-[20px] mt-[25px]">
                <img src={Explore} alt="homefill" />
                <h2>Explore</h2>
            </div>
            <div className="flex items-center justify-start gap-[20px] mt-[25px]">
                <img src={Notif} alt="homefill" />
                <h2>Notifications</h2>
            </div>
            <div className="flex items-center justify-start gap-[20px] mt-[25px]">
                <img src={Mesage} alt="homefill" />
                <h2>Messages</h2>
            </div>
            <div className="flex items-center justify-start gap-[20px] mt-[25px]">
                <img src={Book} alt="homefill" />
                <h2>Bookmarks</h2>
            </div>
            <div className="flex items-center justify-start gap-[20px] mt-[25px]">
                <img src={List} alt="homefill" />
                <h2>Lists</h2>
            </div>
            <div className="flex items-center justify-start gap-[20px] mt-[25px]">
                <img src={Profili} alt="homefill" />
                <h2>Profile</h2>
            </div>
                <div className="flex items-center justify-start gap-[20px] mt-[25px]">
                    <img src={More} alt="homefill" />
                    <h2>More</h2>
                </div>
                </div>
                <button className="bg-[#1D9BF0] text-white w-[170px] pt-2 pb-2 rounded-[50px] text-center text-md mt-[25px]">Tweet</button>
                <div className="flex  justify-start mt-[57px]">
                <img className="mr-[15px] mt-[15px]" src={Bobur} alt="" />
                    <div className="mt-[15px]">
                      <h2 className="text-[16px]">Bobur</h2>
                      <p className="text">@bobur_mavlonov</p>
                    </div>
                     <p className="text-[35px]">...</p>
                </div>
            </div>
              
        </div>
        </>
    )
}
export default Sidebar