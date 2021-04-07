// Components
import { Header } from "./components/Header/index";
import {
  SalilFigma,
  SalilReact,
  SalilPhotos,
  SalilDroplets,
  SalilAvicii,
  SalilEclips,
  SalilMicrosoft,
  JaagravGithubLogo,
  RainbowBlocks,
  RitikaAgrawalMoneyHeistMask,
  ShwetalBlossom,
  SubhashreeRotatingCube,
  HarshitFacebook,
  AntraCaptainShield,
  FalguniYouTube,
  HarshitInstagram,
  SheetalJainPepsi,
  TarunGitLogo,
  SharvariBirajdarLoader,
  AyushYadavAbstractArt,
  AvishakeAudiLogo,
  AryanJainGlobe,
  HarshitXiaomi,
  PankajChromeLogo,
  ShreyaLinkedIn,
  ShridharAarogyaSetu,
  VidiptaSharmaAdobe,
} from "./art/index";

// An array of Art Components
let componentArr = [
  <SalilFigma />,
  <SalilReact />,
  <SalilPhotos />,
  <SalilDroplets />,
  <SalilAvicii />,
  <SalilEclips />,
  <SalilMicrosoft />,
  <JaagravGithubLogo />,
  <RainbowBlocks />,
  <RitikaAgrawalMoneyHeistMask />,
  <ShwetalBlossom />,
  <SubhashreeRotatingCube />,
  <AntraCaptainShield />,
  <HarshitFacebook />,
  <FalguniYouTube />,
  <HarshitInstagram />,
  <TarunGitLogo />,
  <AyushYadavAbstractArt />,
  <AryanJainGlobe />,
  <HarshitXiaomi />,
  <PankajChromeLogo />,
  <ShreyaLinkedIn />,
  <ShridharAarogyaSetu />,
  <VidiptaSharmaAdobe />,
  <SheetalJainPepsi />,
  <SharvariBirajdarLoader />,
  <AvishakeAudiLogo />,
];

function App() {
  return (
    <>
      <Header />
      <div className="grid-container full">
        <div className="grid-x">
          {componentArr.map((component, index) => {
            return (
              <div className="cell large-4 medium-6" key={index}>
                {component}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
