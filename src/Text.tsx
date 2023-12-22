import { useSelector } from "react-redux";
import { RootState } from "./store/types";

const Text = () => {
  const isBold = useSelector((state: RootState) => state.textBold.isBold);

  const textStyleBold = isBold ? "font-bold" : "";

  return (
    <textarea name="textarea" className={`w-full ${textStyleBold} text-white`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae
      eveniet pariatur, adipisci sit nulla exercitationem distinctio veritatis
      laboriosam consectetur reiciendis, eum debitis dolores maiores sapiente
      aut odio. Itaque, voluptates? Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Ratione minima, facilis animi nam repellendus velit
      delectus reprehenderit! Eius odio soluta obcaecati beatae, facere
      accusantium, iste quia commodi nisi, provident fuga? Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Quia praesentium esse, veniam mollitia
      maiores laborum nobis magni amet recusandae distinctio cum quibusdam porro
      dolores sed doloremque culpa minus harum corrupti! Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Veniam fuga autem illum incidunt
      officiis repudiandae non distinctio, maxime optio in fugiat quibusdam enim
      dolorem molestias accusantium voluptatum dolor sint esse!
    </textarea>
  );
};

export default Text;
