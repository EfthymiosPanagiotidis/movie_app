import React from "react";
import { Button } from "primereact/button";

function AddToFavoritesButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <Button label="Add to favorites" icon="pi pi-star" onClick={onClick} />
  );
}

export { AddToFavoritesButton };
