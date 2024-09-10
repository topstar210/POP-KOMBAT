import { Box } from "@/components/system";
import SettingItem from "@/components/Setting/Item";

import EnIcon from "@/assets/flag/en.png";
import FrIcon from "@/assets/flag/fr.png";
import DeIcon from "@/assets/flag/de.png";
import EsIcon from "@/assets/flag/es.png";
import InIcon from "@/assets/flag/in.png";
import PtIcon from "@/assets/flag/pt.png";

const languagies = [
  {
    icon: EnIcon,
    shortname: "en",
    name: "English",
  },
  {
    icon: FrIcon,
    shortname: "fr",
    name: "Français",
  },
  {
    icon: DeIcon,
    shortname: "de",
    name: "Deutsch",
  },
  {
    icon: EsIcon,
    shortname: "es",
    name: "Español",
  },
  {
    icon: InIcon,
    shortname: "in",
    name: "Hindi",
  },
  {
    icon: PtIcon,
    shortname: "pt",
    name: "Português",
  },
];

const SelectLanguage = () => {
  return (
    <div className="main-page">
      <div className="setting-header">
        <h1>Select Language</h1>
      </div>

      <Box className="setting-language-list">
        {languagies.map((val, i) => (
          <SettingItem key={i} icon={val.icon} title={`${val.name}(${val.shortname})`} />
        ))}
      </Box>
    </div>
  );
};

export default SelectLanguage;
