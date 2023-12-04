import {AnimationSpace} from "./pages/AnimationSpace/AnimationSpace.tsx";
import {SocialNetWorks} from "./pages/AnimationSpace/components/SocialNetWorks/SocialNetWorks.tsx";
import {AnimationText} from "./pages/AnimationSpace/components/AnimationText/AnimationText.tsx";

export const App = () => {

    return (
        <div className="App">
            <AnimationSpace children={<AnimationText/>} socialNetwork={<SocialNetWorks/>
            } theme='dark'/>
        </div>
    );
};
