import { ArrowButton } from "./ArrowButton";

export function Main() {
  return (
    <main className="relative">
      <ArrowButton position="left" />
      <div>
        <img
          src="images/image-product-1.jpg"
          alt="sneaker"
          className="w-full"
        />
      </div>
      <ArrowButton position="right" />
    </main>
  );
}
