import {AnimationSpace} from "./pages/AnimationSpace/AnimationSpace.tsx";
import {TextCrawl} from "./pages/AnimationSpace/components/TextCrawl/TextCrawl.tsx";

export const App = () => {

    return (
        <div className="App">
            <AnimationSpace children={<TextCrawl/>
            } theme='dark'/>
        </div>
    );
};
