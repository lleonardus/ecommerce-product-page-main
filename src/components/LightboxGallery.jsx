import ArrowButton from "./ArrowButton";
import CloseIcon from "./CloseIcon";
import Product from "./Product";
import Thumbnail from "./Thumbnail";
import ThumbnailList from "./ThumbnailList";

function LightboxGallery({
  maxIndex,
  index,
  handleIndex,
  handleClose,
  handleClickLeft,
  handleClickRight,
}) {
  return (
    <div className="fixed inset-0 z-[9999] hidden h-full place-items-center bg-black/75 md:grid">
      <div className="max-w-lg">
        <div className="relative">
          <CloseIcon onClick={handleClose} />
          <ArrowButton
            className={
              "left-0 w-[.85rem] translate-x-[-50%] rotate-180 before:w-14"
            }
            onClick={handleClickLeft}
          />
          <Product imageIndex={index} />
          <ArrowButton
            className={"right-0 w-[.85rem] translate-x-[50%] before:w-14"}
            onClick={handleClickRight}
          />
        </div>
        <ThumbnailList className={"justify-around px-5"}>
          {Array.from({ length: maxIndex }, (_, i) => (
            <Thumbnail
              key={i}
              index={i + 1}
              selectedId={index}
              onClick={handleIndex}
            />
          ))}
        </ThumbnailList>
      </div>
    </div>
  );
}

export default LightboxGallery;
