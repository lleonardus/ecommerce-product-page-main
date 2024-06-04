function ThumbnailList({ children, gap = 3 }) {
  return (
    <ul className={`flex flex-row justify-between gap-${gap} pt-10`}>
      {children}
    </ul>
  );
}

export default ThumbnailList;
