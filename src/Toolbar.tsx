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
import { useDispatch } from "react-redux";
import { toggleBold, toggleItalic, toggleUnderline } from "./store/textSlice";

const Toolbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row gap-6 items-center bg-gray-500 h-fit p-2 w-full">
      <div className="w-fit">
        <button
          className="p-3 rounded-lg bg-white mr-2 border-none"
          onClick={() => dispatch(toggleBold())}
        >
          <FormatBold />
        </button>
        <button
          className="p-3 rounded-lg bg-white mr-2"
          onClick={() => dispatch(toggleItalic())}
        >
          <FormatItalic />
        </button>
        <button
          className="p-3 rounded-lg bg-white"
          onClick={() => dispatch(toggleUnderline())}
        >
          <FormatUnderlined />
        </button>
      </div>
      <div className="w-fit">
        <button className="p-3 rounded-lg bg-white mr-2">
          <FormatAlignLeft />
        </button>
        <button className="p-3 rounded-lg bg-white mr-2">
          <FormatAlignCenter />
        </button>
        <button className="p-3 rounded-lg bg-white">
          <FormatAlignRight />
        </button>
      </div>
      <div>
        <button className="p-3 rounded-lg bg-white mr-2">Copy</button>
        <button className="p-3 rounded-lg bg-white mr-2">Paste</button>
        <button className="p-3 rounded-lg bg-white">Cut</button>
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
          <button className="bg-gray-500 rounded-lg p-0">
            <ArrowDropUp />
          </button>
          <button className="bg-gray-500 rounded-lg p-0">
            <ArrowDropDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
