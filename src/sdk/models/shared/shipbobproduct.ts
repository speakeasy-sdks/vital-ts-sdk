import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ShipbobInventoryItem } from "./shipbobinventoryitem";
import { Expose, Type } from "class-transformer";


export class ShipbobProduct extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata({ elemType: ShipbobInventoryItem })
  @Expose({ name: "inventory_items" })
  @Type(() => ShipbobInventoryItem)
  inventoryItems: ShipbobInventoryItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "reference_id" })
  referenceId?: string;
}