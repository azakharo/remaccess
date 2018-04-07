export const DisplayItemInfo = ({
  itemName,
  itemBrend,
  packageName,
  qtyInPack
}) => [itemName,
    itemBrend,
    packageName && `Корпус: ${packageName}`,
    qtyInPack && `Упаковка: ${qtyInPack} шт.`
].filter(Boolean).join(" ")
