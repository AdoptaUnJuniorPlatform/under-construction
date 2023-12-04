import React, {useEffect, useRef} from "react";
import {TextCrawl} from "./components/TextCrawl/TextCrawl.tsx";
import {TextCrawlMobile} from "./components/TextCrawlMobile/TextCrawlMobile.tsx";

export const AnimationText = () => {
    const windowWidth = useRef(window.innerWidth);
    const [isSmallSizeWindow, setIsSmallSizeWindow] = React.useState(false);
    useEffect(() => {
        if (windowWidth.current <= 1024) {
            setIsSmallSizeWindow(true);
        } else {
            setIsSmallSizeWindow(false);
        }
    }, [windowWidth]);



    return (<article className={'AnimationText'}>{isSmallSizeWindow ? <TextCrawlMobile/>: <TextCrawl/>}</article>)
}