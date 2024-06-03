function ThumbnailList({ children }) {
  return (
    <ul className="flex flex-row justify-between gap-3 pt-10">{children}</ul>
  );
}

export default ThumbnailList;
