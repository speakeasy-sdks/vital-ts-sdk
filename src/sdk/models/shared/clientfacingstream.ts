import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ClientFacingStream extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "altitude" })
  altitude?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "cadence" })
  cadence?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "distance" })
  distance?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "heartrate" })
  heartrate?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "lat" })
  lat?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "lng" })
  lng?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "power" })
  power?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "resistance" })
  resistance?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "time" })
  time?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "velocity_smooth" })
  velocitySmooth?: any;
}