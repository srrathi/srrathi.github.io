"use client";
import { Timeline } from "react-twitter-widgets";
import TagWord from "../common/tagWord";

const TwitterComponent = () => {
    return (
        <section id="twitter" className='px-4 relative pt-0 md:pt-10 lg:pt-10 pb-10'>
            <div className="section py-14 md:py-20 lg:py-20 relative">
                <div className="py-0 md:py-10 lg:py-10">
                    <TagWord text='Follow on X' />
                </div>
                <Timeline
                    dataSource={{ sourceType: "profile", screenName: "SitaramRathi5" }}
                    options={{ theme: "dark", height: "600", dnt: true }}
                />
            </div>
        </section>
    )
}

export default TwitterComponent;
