// "use client"
// import ProjectLayout from "./ProjectLayout"
// import {motion} from "framer-motion"

// const container = {
//     hidden: {opacity: 0},
//     show: {
//         opacity: 1,
//         transition:{
//             staggerChildren: 0.3,
//             delayChildren: 1.5,
//         }
//     }
// }

// const ProjectList = ({projects}) => {

//     return(
//         <motion.div 
//         variants={container}
//         initial="hidden"
//         animate="show"
        
//         className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
//             {projects.map((project, index) =>{
//                 return <ProjectLayout key = {index} {...project} />
//             })}
//         </motion.div>
//     )
// }

// export default ProjectList

"use client"
import React from "react";
import ItemLayout from "./ItemLayout";
import { motion } from "framer-motion";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.3,
            delayChildren: 1.5,
        }
    }
}


const ProjectsDetails = () => {
    return (
        <section
        className="py-20 w-full">
            <motion.div 
            variants={container}
            className="grid grid-cols-12 gap-6 xs:gap-8 md:gap-10 w-full">
                <ItemLayout 
                className={"col-span-full lg:col-span-full row-span-2 flex-col items-start"}
                link={"https://store.steampowered.com/app/3124380/GUNPYRE/"}
                >
                    <h2 className="text-accent text-xl md:text-2xl text-left w-full capitalize">
                        Gunpyre
                    </h2>
                    <p className="font-thin text-xs text-left sm:text-sm md:text-base">
                        Gunpyre is a project developed by 13 students from different courses of A.I.V., 
                        and it's a <strong>twin stick shooter</strong> with rougue-like elements. <br/> <br/>
                        I joined the team on october 2023 and I started working as a <strong>gameplay programmer</strong>.
                        The game was developed using <strong>Unreal 5.1</strong> <br/> 
                        and it was scripted entirely with <strong>blueprints</strong>. <br/> <br/>
                        I worked under the direction of a lead programmer and 
                        it was a new experience for me, with a much higher level of <strong>complexity</strong> than what I was used to, 
                        which allowed me to grow in different ways. <br/> <br/>
                        I  learnt how to develop <strong>Behaviour Tree</strong> for complex enemies and
                        this experience expanded my overall knowledge of Unreal. <br/> <br/>
                        Moreover, by working closely with <strong>game designers</strong> I learnt to <strong>communicate</strong> better, 
                        to understand more about their job and to work on projects with longer time horizons. <br/> <br/>
                        The project received excellent feedback from professors and the academy even decided to publish it on <strong>Steam</strong>.<br/> <br/>
                        To find out more you can click this text box that will take you to the Steam page.
                    </p>
                </ItemLayout>

                <ItemLayout 
                className={"col-span-full lg:col-span-full row-span-2 flex-col items-start"}
                link={"https://github.com/giulioleoni/Game_Jam_09_2024"}
                >
                    <h2 className="text-accent text-xl md:text-2xl text-left w-full capitalize">
                        Warm-up Game Jam
                    </h2>
                    <p className="font-thin text-xs sm:text-sm md:text-base">
                        This project was made for the Warm up <strong>Game Jam</strong> organised by A.I.V. on 23-27 September 2024. <br/> <br/>
                        It's an entirely <strong>UI game</strong> in which you have to create 3 different potions 
                        by dragging and dropping 9 ingredients into a cauldron, following specific recipes. <br/> <br/>
                        We were a team of five students, we developed this project using <strong>Unreal 5.3</strong> and 
                        it was scripted entirely with <strong>blueprints</strong>. <br/> <br/>
                        It was interesting to work on a game project purely UI, 
                        it made me understand and learn more about the <strong>functionalities</strong> of the UI of Unreal, 
                        it allowed me to experiment with new things I didn't know, and 
                        it was an opportunity to <strong>understand</strong> and communicate better with the <strong>artists</strong> <br/> <br/>
                        All this combined with the context of the jam, which is always funny and <strong>stimulating</strong>. <br/> <br/>
                        You can find out more by clicking this text box. 
                    </p>
                </ItemLayout>

                <ItemLayout 
                className={"col-span-full lg:col-span-full row-span-2 flex-col items-start"}
                link={"https://github.com/giulioleoni/ProShoot_To_Survive"}
                >
                    <h2 className="text-accent text-xl md:text-2xl text-left w-full capitalize">
                        ProShoot to Survive
                    </h2>
                    <p className="font-thin text-xs sm:text-sm md:text-base">
                        I developed this project together with four other students from the programming course, 
                        at the end of the second year of our course in A.I.V. and we worked on it 5 weeks starting in June 2023. <br/> <br/>
                        It's a very arcade <strong>Third Person Shooter</strong> made with <strong>Unity </strong> 
                        in which you must fight off several waves of zombies in order to win. <br/> <br/>
                        The purpose was to combine all the Unity knowledge acquired during the course into a single project, 
                        creating something more <strong>organic and structured</strong>, 
                        following a well-defined development process. <br/> <br/>
                        We worked using a <strong>scrum</strong> process,
                        we did weekly <strong>sprints</strong>, at the end of the week there was a review with our professors 
                        who also checked the division of <strong>tasks</strong> <br/> (we used Trello to help us). <br/> <br/>
                        You can find out more by clicking this text box. 
                    </p>
                </ItemLayout>

                <ItemLayout 
                className={"col-span-full lg:col-span-full row-span-2 flex-col items-start"}
                link={"https://github.com/giulioleoni/Journey_to_the_roots"}
                >
                    <h2 className="text-accent text-xl md:text-2xl text-left w-full capitalize">
                        Journey to The roots
                    </h2>
                    <p className="font-thin text-xs sm:text-sm md:text-base">
                        This was the first group project and the first jam I participated in. <br/> <br/>
                        For the <strong>Global Game Jam 2023</strong> I joined a group of students from A.I.V.
                        and we developed a platform game, 
                        the particularity of which is that the character can only <strong>jump</strong>, 
                        so you have to carefully calibrate the force of the jump. <br/> <br/>
                        We developed this project using <strong>Unreal 4.27 </strong>
                        and it was scripted entirely with <strong>blueprints</strong>. <br/> <br/>
                        It was an extremely exciting experience, I had never participated in anything like that, 
                        it was very <strong>stimulating</strong>. 
                        At the time I knew very little about Unreal and
                        this experience has forced me to solve problems on my own and
                        to understand how to learn what I need and <strong>adapt</strong> it to the project's needs. <br/> <br/>
                        This experience also allowed me to grow in another way, I started learning how to communicate with others, 
                        I started to understand how long it takes me to complete certain tasks and 
                        also how to be more <strong>autonomous</strong> in my work. <br/> <br/>
                        You can find out more by clicking this text box.
                    </p>
                </ItemLayout>

                <ItemLayout 
                className={"col-span-full lg:col-span-full row-span-2 flex-col items-start"}
                link={"https://github.com/giulioleoni/Find_The_Key"}
                >
                    <h2 className="text-accent text-xl md:text-2xl text-left w-full capitalize">
                        Find the Key
                    </h2>
                    <p className="font-thin text-xs sm:text-sm md:text-base">
                        This is the final project of the first year of A.I.V. (June 2022). <br/> <br/>
                        The goal was to create a 2d <strong>point-and-click</strong> where you have to explore a 
                        small <strong>map</strong> with various <strong>submaps</strong> to find a key 
                        and open a door that will lead you to the room with treasures. <br/> <br/>
                        The project was scripted all in <strong>C#</strong>. <br/>
                        During the year we developed a series of classes and interfaces
                        which went so far as to create a small <strong>2D engine</strong>. <br/> <br/>
                        It was stimulating to put together all the knowledge acquired during the course to do a project of this kind. <br/>
                        In particular it allowed me to learn a lot about <strong>pathfinding</strong>, 
                        since the character has to move on a grid and is not controlled by classic input. <br/> <br/>
                        You can find out more by clicking this text box. 
                    </p>
                </ItemLayout>
            </motion.div>
        </section>
    )
}

export default ProjectsDetails













































































