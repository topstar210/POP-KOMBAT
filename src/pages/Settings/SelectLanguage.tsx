import { Box } from "@/components/system";
import SettingItem from "@/components/Setting/Item";

const languagies = [
  {
    shortname: "en",
    name: "English",
  },
  {
    shortname: "fr",
    name: "Français",
  },
];

const SelectLanguage = () => {
  return (
    <div className="main-page">
      <div className="setting-header">
        <h1>Select Language</h1>
      </div>

      <Box className="setting-language-list">
        {languagies.map((val) => (
          <SettingItem title={`${val.name}(${val.shortname})`} />
        ))}
      </Box>
    </div>
  );
};

export default SelectLanguage;
