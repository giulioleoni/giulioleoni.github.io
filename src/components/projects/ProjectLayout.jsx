import { ExternalLink } from 'lucide-react';
import Link from 'next/link'
import React from "react"
import {motion} from "framer-motion"
import ItemLayout from './ItemLayout';

const item = {
    hidden: {opacity: 0, y:100},
    show: {opacity: 1, y:0}
}

const MotionLink = motion(Link)

const ProjectLayout = ({name, description, date, demoLink}) => {

    return(
        <MotionLink 
        // variants = {item}
        // href = {demoLink}
        // target = {"_blank"}
        // className="text-sm md:text-base flex items-center justify-between w-full relative ù
        //             rounded-lg overflow-hidden p-4 md:p-6 custom-bg">
        //     <div className="flex items-center justify-center space-x-2">
        //         <h2 className="text-foreground">{name}</h2>
        //         <p className="text-muted hidden sm:inline-block">{description}</p>
        //     </div>  
        //     <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" /> 
        //     <p className="text-muted sm:text-foreground">
        //         {new Date(date).toDateString()}
        //     </p>
        variants = {item}
        href = {demoLink}
        target = {"_blank"}
        className="py-1 w-full">
                <ItemLayout className={"col-span-full lg:col-span-full row-span-2 flex-col items-start"}>
                    <h2 className="text-accent text-xl md:text-2xl text-left w-full capitalize">{name}</h2>
                    <p className=" font-light text-xs sm:text-sm md:text-base">{description}</p>
                </ItemLayout>
        </MotionLink>
    )
}

export default ProjectLayout





























































