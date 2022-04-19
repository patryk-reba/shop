import React, { useContext, useState } from "react"

import Image from "../components/Image"
import Context from "../Context"
import { getClass } from "../utils"

function Photos() {
    const { allPhotos, display, value } = useContext(Context)


    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))

    return (


        <main className={`${display ? "photos" : undefined} "light-mode"`} style={{ width: `${value}%`, margin: "0 auto" }}>
            {/* { <main className="photos dark-background-popup">} */}
            {imageElements}
        </main >
    )
}

export default Photos