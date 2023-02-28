import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ShipbobInventoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "serial_numbers" })
  serialNumbers: string[];
}