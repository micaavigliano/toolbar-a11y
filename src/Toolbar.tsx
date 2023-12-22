import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  ArrowDropUp,
  ArrowDropDown,
} from "@mui/icons-material";

const Toolbar = () => {
  return (
    <div className="flex flex-row gap-6 items-center bg-gray-500 h-fit p-2">
      <div className="w-fit">
        <span className="p-3 rounded-lg bg-white mr-2">
          <FormatBold />
        </span>
        <span className="p-3 rounded-lg bg-white mr-2">
          <FormatItalic />
        </span>
        <span className="p-3 rounded-lg bg-white">
          <FormatUnderlined />
        </span>
      </div>
      <div className="w-fit">
        <span className="p-3 rounded-lg bg-white mr-2">
          <FormatAlignLeft />
        </span>
        <span className="p-3 rounded-lg bg-white mr-2">
          <FormatAlignCenter />
        </span>
        <span className="p-3 rounded-lg bg-white">
          <FormatAlignRight />
        </span>
      </div>
      <div>
        <span className="p-3 rounded-lg bg-white mr-2">Copy</span>
        <span className="p-3 rounded-lg bg-white mr-2">Paste</span>
        <span className="p-3 rounded-lg bg-white">Cut</span>
      </div>
      <div>
        <select name="font family" className="p-3 rounded-lg bg-white">
          <option>Sans-serif</option>
          <option>Serif</option>
          <option>Monospace</option>
          <option>Fantasy</option>
          <option>Cursive</option>
        </select>
      </div>
      <div>
        <div className="flex flex-row p-2.5 rounded-lg bg-white">
          <p>text</p>
          <span className="bg-gray-500 rounded-lg">
            <ArrowDropUp />
          </span>
          <span className="bg-gray-500 rounded-lg">
            <ArrowDropDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
