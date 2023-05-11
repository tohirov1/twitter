

import Setting from "../../Assets/images/settings.svg"
import Mushtary from "../../Assets/images/Boburd.png"
import bobur from "../../Assets/images/Mushtary.png"

function Sidebar2() {
    return(
        <>
        <div className="sidebar2 h-[100vh] w-[450px] sticky top-0 z-10">
            <div className="pl-[28px]">
                <input className="mt-[25px] w-[330px] pt-2 pb-2 rounded-[20px] bg-[#EFF3F4] border pl-5" type="text" placeholder="Search Twitter" />
                <div>
                    <div className="flex mt-[21px]">
                        <h2 className="text-[24px] text-bold">Trends for you</h2>
                        <img className="pl-[140px]" src={Setting} alt="settings"/>
                    </div>
                    <div className="flex  mt-[13px]">
                        <div>
                            <p className="text-[#393B41] text-[16px]">Trending in Germany</p>
                            <h2 className="text-[20px]">Revolution</h2>
                            <p className="text-[#393B41] text-[16px]">50.4K Tweets</p>
                        </div>
                        <div className="pl-[130px]"><p className="text-[40px]">...</p></div>
                    </div>
                    <div className="flex  mt-[11px]">
                        <div>
                            <p className="text-[#393B41] text-[16px]">Trending in Germany</p>
                            <h2 className="text-[20px]">Revolution</h2>
                            <p className="text-[#393B41] text-[16px]">50.4K Tweets</p>
                        </div>
                        <div className="pl-[130px]"><p className="text-[40px]">...</p></div>
                    </div>
                    <div className="flex  mt-[11px]">
                        <div>
                            <p className="text-[#393B41] text-[16px]">Trending in Germany</p>
                            <h2 className="text-[20px]">Revolution</h2>
                            <p className="text-[#393B41] text-[16px]">50.4K Tweets</p>
                        </div>
                        <div className="pl-[130px]"><p className="text-[40px]">...</p></div>
                    </div>
                    <button className="text-[#1DA1F2] text-[18px] mt-[13px]">Show more</button>
                </div>
                <div>
                    <h1 className="mt-[12px] text-[24px] text-bold">You might like</h1>
                    <div className="flex items-center justify-start mt-[20px]">
                        <img src={Mushtary} alt="mushtary" />
                        <div className="ml-[15px]">
                            <h2>Mushtariy</h2>
                            <p>@Mushtar565266</p>
                        </div>
                        <button className="ml-[30px] w-[92px] pt-1 pb-1 bg-black text-white rounded-[20px]">Follow</button>
                    </div>
                    <div className="flex items-center justify-start mt-[20px]">
                        <img src={bobur} alt="Shuhrat" />
                        <div className="ml-[15px]">
                            <h2>Shuhratbek</h2>
                            <p>@mrshukhrat</p>
                        </div>
                        <button className="ml-[60px] w-[92px] pt-1 pb-1 bg-black text-white rounded-[20px]">Follow</button>
                    </div>
                </div>
                <button className="text-[#1DA1F2] text-[18px] mt-[15px]">Show more</button>
                <p className="w-[350px] text-[#536471] text-[16px]">Terms of Service Privacy Policy Cookie Policy Imprint Ads Info More ··· © 2021 Twitter, Inc.</p>
            </div>
        </div>
        </>
    )
}
export default Sidebar2