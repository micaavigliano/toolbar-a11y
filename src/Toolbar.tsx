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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/types";
import {
  toggleBold,
  toggleItalic,
  toggleUnderline,
  toggleLeft,
  toggleMiddle,
  toggleRight,
} from "./store/textSlice";
import { useEffect, useRef, useState, useCallback } from "react";

const Toolbar = () => {
  const [active, setActive] = useState<number>(0);
  const [elem, setElem] = useState<Element[]>([]);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const isSelected = useSelector((state: RootState) => state.textSelected);
  const isUnderline = useSelector(
    (state: RootState) => state.textUnderline.isUnderline
  );

  useEffect(() => {
    const getInteractiveElements = () => {
      if (toolbarRef.current) {
        const focusableElements = toolbarRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const elementsArray = Array.from(focusableElements);
        return elementsArray;
      }
      return [];
    };

    const elementsArray = getInteractiveElements();
    setElem(elementsArray);
    setActive(0);
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const nextIndex = (
        currentIndex: number,
        length: number,
        direction: number
      ) => {
        let next = currentIndex + direction;
        if (next >= length) {
          next = 0;
        } else if (next < 0) {
          next = length - 1;
        }
        return next;
      };

      if (event.key === "ArrowRight") {
        setActive((prevIndex) => nextIndex(prevIndex, elem.length, 1));
      } else if (event.key === "ArrowLeft") {
        setActive((prevIndex) => nextIndex(prevIndex, elem.length, -1));
      }
    },
    [elem.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, handleKeyDown]);

  useEffect(() => {
    if (elem[active]) {
      (elem[active] as HTMLElement).focus();
    }
  }, [active, elem]);

  return (
    <div
      className="flex flex-row gap-6 items-center bg-gray-500 h-fit p-2 w-full"
      ref={toolbarRef}
    >
      <div className="w-fit">
        <button
          className={`p-3 rounded-lg mr-2 border-none ${
            0 === active ? "bg-pink-200" : "bg-transparent"
          }`}
          onClick={() => dispatch(toggleBold())}
        >
          <FormatBold />
        </button>
        <button
          className={`p-3 rounded-lg mr-2 border-none ${
            1 === active ? "bg-pink-200" : "bg-transparent"
          }`}
          onClick={() => dispatch(toggleItalic())}
        >
          <FormatItalic />
        </button>
        <button
          className={`p-3 rounded-lg border-none ${
            2 === active ? "bg-pink-200" : "bg-transparent"
          }`}
          onClick={() => dispatch(toggleUnderline())}
        >
          <FormatUnderlined />
        </button>
      </div>
      <div className="w-fit">
        <button
          className={`p-3 rounded-lg mr-2 border-none ${
            3 === active ? "bg-pink-200" : "bg-transparent"
          }`}
          onClick={() => dispatch(toggleLeft())}
        >
          <FormatAlignLeft />
        </button>
        <button
          className={`p-3 rounded-lg mr-2 border-none ${
            4 === active ? "bg-pink-200" : "bg-transparent"
          }`}
          onClick={() => dispatch(toggleMiddle())}
        >
          <FormatAlignCenter />
        </button>
        <button
          className={`p-3 rounded-lg mr-2 border-none ${
            5 === active ? "bg-pink-200" : "bg-transparent"
          }`}
          onClick={() => dispatch(toggleRight())}
        >
          <FormatAlignRight />
        </button>
      </div>
      <div>
        <button
          className={`p-3 rounded-lg mr-2 border-none ${
            isUnderline ? "bg-white" : "bg-fuchsia-500"
          } ${6 === active && isUnderline ? "bg-pink-200" : "bg-transparent"}`}
          disabled={!isSelected.isSelected}
        >
          Copy
        </button>

        <button
          className={`p-3 rounded-lg mr-2 border-none ${
            7 === active ? "bg-pink-200" : "bg-transparent"
          }`}
        >
          Paste
        </button>
        <button
          className={`p-3 rounded-lg mr-2 border-none ${
            8 === active ? "bg-pink-200" : "bg-transparent"
          }`}
        >
          Cut
        </button>
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
      <div tabIndex={0}>
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
