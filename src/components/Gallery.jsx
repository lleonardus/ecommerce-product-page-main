import ArrowButton from "./ArrowButton";
import Product from "./Product";
import Thumbnail from "./Thumbnail";
import ThumbnailList from "./ThumbnailList";

function Gallery({
  maxIndex,
  handleClickLeft,
  handleClickRight,
  handleIndex,
  handleOpen,
  index,
}) {
  return (
    <>
      <div className="relative">
        <ArrowButton
          className={"left-8 w-[.6rem] rotate-180 before:w-10 md:hidden"}
          onClick={handleClickLeft}
        />
        <Product
          className={"md:cursor-pointer"}
          imageIndex={index}
          onClick={handleOpen}
        />
        <ArrowButton
          className={"right-8 w-[.6rem] before:w-10 md:hidden"}
          onClick={handleClickRight}
        />
      </div>
      <ThumbnailList className={"hidden md:flex md:justify-between md:gap-3"}>
        {Array.from({ length: maxIndex }, (_, i) => (
          <Thumbnail
            key={i}
            index={i + 1}
            selectedId={index}
            onClick={handleIndex}
          />
        ))}
      </ThumbnailList>
    </>
  );
}

export default Gallery;
