import AnimationSpace from './pages/underConstruction/AnimationSpace';

import TextCrawl from './pages/underConstruction/TextCrawl';

export default function App() {

  return (
    <>
      <AnimationSpace children={<div className="stars"></div>} theme='dark' />
      <TextCrawl/>
    </>
  );
}
