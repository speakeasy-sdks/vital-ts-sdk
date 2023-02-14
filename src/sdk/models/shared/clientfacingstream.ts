import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ClientFacingStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altitude" })
  altitude?: any;

  @SpeakeasyMetadata({ data: "json, name=cadence" })
  cadence?: any;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: any;

  @SpeakeasyMetadata({ data: "json, name=heartrate" })
  heartrate?: any;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: any;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: any;

  @SpeakeasyMetadata({ data: "json, name=power" })
  power?: any;

  @SpeakeasyMetadata({ data: "json, name=resistance" })
  resistance?: any;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number[];

  @SpeakeasyMetadata({ data: "json, name=velocity_smooth" })
  velocitySmooth?: any;
}