import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ShipbobInventoryItem } from "./shipbobinventoryitem";


export class ShipbobProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=inventory_items", elemType: ShipbobInventoryItem })
  inventoryItems: ShipbobInventoryItem[];

  @SpeakeasyMetadata({ data: "json, name=reference_id" })
  referenceId?: string;
}