import {AnimationSpace} from "./pages/AnimationSpace/AnimationSpace.tsx";
import {TextCrawl} from "./pages/AnimationSpace/components/TextCrawl/TextCrawl.tsx";
import {SocialNetWorks} from "./pages/AnimationSpace/components/SocialNetWorks/SocialNetWorks.tsx";

export const App = () => {

    return (
        <div className="App">
            <AnimationSpace children={<TextCrawl/>} socialNetwork={<SocialNetWorks/>
            } theme='dark'/>
        </div>
    );
};
