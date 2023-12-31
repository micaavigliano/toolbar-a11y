import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/types";
import { useState } from "react";
import { toggleSelected } from "./store/textSlice";

const Text = () => {
  const [value, setValue] = useState<string>(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae eveniet pariatur, adipisci sit nulla exercitationem distinctio veritatis laboriosam consectetur reiciendis, eum debitis dolores maiores sapiente aut odio. Itaque, voluptates? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione minima, facilis animi nam repellendus velit delectus reprehenderit! Eius odio soluta obcaecati beatae, facere accusantium, iste quia commodi nisi, provident fuga? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia praesentium esse, veniam mollitia maiores laborum nobis magni amet recusandae distinctio cum quibusdam porro dolores sed doloremque culpa minus harum corrupti! Lorem ipsum dolor sit, amet consectetur adipisicing elit Veniam fuga autem illum incidunt officiis repudiandae non distinctio, maxime optio in fugiat quibusdam enim dolorem molestias accusantium voluptatum dolor sint esse!"
  );
  const dispatch = useDispatch();
  const isBold = useSelector((state: RootState) => state.textBold.isBold);
  const isItalic = useSelector((state: RootState) => state.textItalic.isItalic);
  const isUnderline = useSelector(
    (state: RootState) => state.textUnderline.isUnderline
  );
  const isLeft = useSelector((state: RootState) => state.textLeftAlign.isLeft);
  const isMiddle = useSelector(
    (state: RootState) => state.textMiddleAlign.isMiddle
  );
  const isRight = useSelector(
    (state: RootState) => state.textRightAlign.isRight
  );

  const handleTextSelection = () => {
    const selection = window.getSelection();
    dispatch(toggleSelected(!!(selection && selection.toString().length > 0)));
  };

  const textStyleBold = isBold ? "font-bold" : "";
  const textStyleItalic = isItalic ? "italic" : "not-italic";
  const textStyleUnderline = isUnderline ? "underline" : "";
  const textStyleLeft = isLeft ? "text-left	" : "";
  const textStyleMiddle = isMiddle ? "text-center" : "";
  const textStyleRight = isRight ? "text-right" : "";

  return (
    <textarea
      name="textarea"
      className={`w-full h-full ${textStyleBold} ${textStyleItalic} ${textStyleUnderline} ${textStyleLeft} ${textStyleMiddle} ${textStyleRight} text-white`}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
      onSelect={handleTextSelection}
    />
  );
};

export default Text;
