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
          className={"left-8 w-[.6rem] rotate-180 before:w-10 lg:hidden"}
          onClick={handleClickLeft}
        />
        <Product
          className={"lg:cursor-pointer"}
          imageIndex={index}
          onClick={handleOpen}
        />
        <ArrowButton
          className={"right-8 w-[.6rem] before:w-10 lg:hidden"}
          onClick={handleClickRight}
        />
      </div>
      <ThumbnailList className={"hidden lg:flex lg:justify-between lg:gap-3"}>
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
