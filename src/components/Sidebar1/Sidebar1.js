import HomLogo from "../../Assets/images/Star.svg";
import Bobur from "../../Assets/images/bobur.png";
import Image from "../../Assets/images/image.svg";
import Gif from "../../Assets/images/gif.svg";
import Vector from "../../Assets/images/stats.svg";
import Man from "../../Assets/images/smile.svg";
import Chas from "../../Assets/images/schedule.svg";
import Design from "../../Assets/images/Desi.png";
import Cloten from "../../Assets/images/clout.png";
import Createn from "../../Assets/images/Creat.png";
import Coment from "../../Assets/images/comment.svg";
import Retvek from "../../Assets/images/retweet.svg";
import Like from "../../Assets/images/like.svg";
import Share from "../../Assets/images/share.svg";
import Statist from "../../Assets/images/statistics.svg";
import Likefill from "../../Assets/images/like fill.svg";
import Retwek from "../../Assets/images/retweet 1.svg";
import Img from "../../Assets/images/image.png";
import { useEffect, useState } from "react";
import axios from "axios";
import {GiHamburgerMenu} from "react-icons/gi"
import Logo from  "../../Assets/images/twitter-logo-4 1.svg"
import Home from "../../Assets/images/home.svg"
import Explore from "../../Assets/images/explore.svg"
import Notif from "../../Assets/images/notification.svg"
import Mesage from "../../Assets/images/messages.svg"
import Book from "../../Assets/images/bookmarks.svg"
import List from "../../Assets/images/lists.svg"
import Profili from "../../Assets/images/profile.svg"
import More from "../../Assets/images/more.svg"


function Sidebar1() {
  const [data, setData] = useState();
  const [show , setShow] = useState(true)
 

  const FechData = async () => {
    const respons = await axios.get(
      "https://6409e510d16b1f3ed6e05c98.mockapi.io/hackers"
    );
    console.log(respons.data);
    setData(respons.data);
  };
  useEffect(() => {
    FechData();
  }, []);

  
  const hambtn = () => {
    setShow(as=> !as)
  }
  // const handclick = () => {
  //   setBtn(num=> !num)
  //   console.log("salom");
  // }

  return (
    <>
      <div className="relative  w-full md:w-[750px]  border border-[#E5E5E5]">
        <div className="fixed w-full md:w-[750px]  top-0  backdrop-blur-[10px] ">
          <div className=" hero-div flex  items-center justify-center ">
            <h1 className="text-[44px] text-[#000000] text-center">Home</h1>
            <GiHamburgerMenu onClick={hambtn} className="hero-img w-[30px] h-[30px] mt-3"/> 
            {/* <img className="" src={HomLogo} alt="" /> */}
          </div>
        </div>
       
         <div className={`${show ? 'active' : 'hige'} pl-[100px] mr-[20px] mt-[31px] mb-[51px]`}>
         <div className="pt-[15px] flex items-center justify-between">
         <img src={Logo} alt="Logo" />
         <button onClick={hambtn} className="mr-[15px] flex items-center justify-center w-[25px] border rounded-full text-center text-white h-[25px] bg-blue-600">x</button>
         </div>
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
       
     </div>
        <div className="container pl-5 pr-5 pt-3 mt-[64px]">
          <div className="site-logo flex items-center justify-start">
            <img  src={Bobur} alt="Bobur" />
            <p className="text-[#828282] ml-[20px]">What’s happening</p>
          </div>
          <div className="icons flex items-center mt-[34px] ml-[55px] gap-[23px]">
            <img src={Image} alt="Image" />
            <img src={Gif} alt="gif" />
            <img src={Vector} alt="vektor" />
            <img src={Man} alt="smile" />
            <img src={Chas} alt="schulde" />
          </div>
          <div className="logo-btn flex items-center justify-end">
            <button className="logo-btn w-[90px] bg-[#1DA1F2] pt-2 pb-2 text-white rounded-[20px] text-center mt-5">
              Tweet
            </button>
          </div>
        </div>
        {/* <div className="border border-[#E5E5E5] w-[100%] mt-[13px]"></div> */}
        {data?.map((info, index) => {
          return (
            <div key={index}>
              <div className=" container pl-5 pr-5 pt-3">
                <div className="wrapper flex  justify-start ">
                  <img
                    className="mt-[20px] rounded-[50%] w-[60px] h-[60px]"
                    src={info?.avatar}
                    alt="Desigin"
                  />
                  <div className="title ml-[15px] mt-[30px]">
                    <span className="text-[20px] text-black">
                      {info?.name}{" "}
                    </span>
                    <a
                      href={`mailto:${info?.email}`}
                      target="_blank"
                      className="font-bold"
                    >
                      {info?.email} · 25m
                    </a>
                    <p className="text-[14px] mt-1">{info?.desc}</p>
                  </div>
                  <h1 className="nuqta text-[45px] ml-[55px] text-black">...</h1>
                </div>
                <div className="logo-icon flex items-center justify-between mt-[24px] ml-[78px] mr-[20px]">
                  <div className=" flex gap-2">
                    <img src={Coment} alt="Coment" />
                    <span>10</span>
                  </div>
                  <div className="logo-icon flex  gap-2">
                    <img src={Retvek} alt="retvek" />
                    <span>1</span>
                  </div>
                  <div className="logo-icon flex gap-2">                  
                    <img src={Like} alt="Like" />
                    <span>8</span>
                  </div>
                  <div className="flex gap-2">
                  <img src={Share} alt="share" />
                  <img src={Statist} alt="statist" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Sidebar1;
