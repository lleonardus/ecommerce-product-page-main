function ThumbnailList({ children, className }) {
  return <ul className={`flex flex-row pt-10 ${className}`}>{children}</ul>;
}

export default ThumbnailList;
