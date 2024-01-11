import { SneakerItem } from "./SneakerItem";
import { MAX_SNEAKER_ID } from "./Gallery";

export function SneakerList({ selectedSneaker, setSneakerId }) {
  return (
    <ul className="hidden pt-10 md:flex md:justify-between md:gap-5">
      {Array.from({ length: MAX_SNEAKER_ID }, (_, i) => i + 1).map(
        (sneakerId) => (
          <SneakerItem
            sneakerId={sneakerId}
            selectedSneaker={selectedSneaker}
            setSneakerId={setSneakerId}
            key={sneakerId}
          />
        ),
      )}
    </ul>
  );
}
