import React from "react";
import { AboutMe } from "../../components/aboutMe/AboutMe";
import { ImageProfile } from "../../components/imageProfile/ImageProfile";
import { PersonalPosts } from "../../components/personalPosts/PersonalPosts";

import "./Profile.css"

function Profile () {
    return(
        <>
        <ImageProfile />
        <AboutMe />
        <PersonalPosts />
        </>
    )
}

export { Profile }