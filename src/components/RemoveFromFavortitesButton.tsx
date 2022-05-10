import React from "react";
import { Button } from "primereact/button";

function RemoveFromFavoritesButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <Button
      label="Remove from favorites"
      icon="pi pi-star"
      className="p-button-danger"
      onClick={onClick}
    />
  );
}

export { RemoveFromFavoritesButton };
