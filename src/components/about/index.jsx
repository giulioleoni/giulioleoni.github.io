import React from "react";
import ItemLayout from "./ItemLayout";



 

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
                <ItemLayout className={"col-span-full lg:col-span-full row-span-2 flex-col items-start"}>
                    <h2 className="text-xl md:text-2xl text-left w-full capitalize">
                    Passionate Programmer
                    </h2>
                    <p className="font-thin text-xs sm:text-sm md:text-base">
                    I began this <strong>journey</strong> by discovering the universe of programming 
                    during my years of study at the Sapienza University in Rome (faculty of physics) 
                    and I was totally <strong>captivated</strong> by it. <br /> <br />
                    After my university years, I decided to dedicate myself completely 
                    to programming and to do it through video games, another great <strong>passion</strong> of mine. <br />
                    So I have spent the last three years studying 
                    game programming at A.I.V. (Accademia Italiana Videogiochi), 
                    which has 20 years of experience <br />
                    in forming <strong>video game industry professionals</strong>. <br /> <br />
                    Programming gives me the opportunity to create applications, 
                    to transpose <strong>thoughts and logic</strong> into something practical and concrete,
                    something that in video games moves and acts. <br /> <br />
                    I also have the opportunity to <strong>learn to do</strong> something new every day, 
                    to discover every day that my own limits are further than I thought. <br /> <br />
                    I enjoy working with <strong>teammates</strong> to build exciting experiences, 
                    which has allowed me to work closely with <strong>artists and designers</strong>, 
                    understanding better how they work. 
                    I always try my best to <strong>collaborate</strong> with teammates 
                    to deliver fast and <strong>satisfying</strong> results 
                    and to make sure the <strong>creative vision</strong> is achieved in the best possible way. <br /> <br />
                    That's why <strong>I love to develop video games</strong>. <br /> <br />
                    Check out github to find out more about my projects and feel free to message me.
                    </p>
                </ItemLayout>

                <ItemLayout className={"col-span-full"}>
                    <img 
                    className="w-full h-auto" 
                    src="https://skillicons.dev/icons?i=c,cs,cpp,cmake,discord,github,gmail,lua,unity,unreal,visualstudio,vscode,windows" 
                    alt="icone"/>
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails
































































