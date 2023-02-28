import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DeviceV2InDB } from "./devicev2indb";
import { Expose, Type } from "class-transformer";


export class RawDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DeviceV2InDB })
  @Expose({ name: "devices" })
  @Type(() => DeviceV2InDB)
  devices: DeviceV2InDB[];
}