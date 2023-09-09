import Image from "next/image";
import React from "react";

export default function CustomImage({
    className = "h-[20rem] w-[20rem]",
    alt = "hello",
    style = { borderRadius: "none" },
    url,
    imageClassName = "",
    ObjectFit = "contain",
}: any) {
    return (
        <div className={`${className} relative`}>
            <Image
                src={url}
                alt={alt}
                fill
                style={{
                    ...style,
                    objectFit: ObjectFit,
                }}
                className={imageClassName}
            />
        </div>
    );
}