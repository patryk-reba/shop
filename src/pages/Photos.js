import React, { useContext, useState } from "react"

import Image from "../components/Image"
import Context from "../Context"
import { getClass } from "../utils"

function Photos() {
    const { allPhotos, display } = useContext(Context)


    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    return (


        <main className={display ? "photos" : undefined} >

            {/* { <main className="photos dark-background-popup">} */}
            {imageElements}
        </main >
    )
}

export default Photos