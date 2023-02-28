import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BodyV2InDB } from "./bodyv2indb";
import { Expose, Type } from "class-transformer";


export class RawBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BodyV2InDB })
  @Expose({ name: "body" })
  @Type(() => BodyV2InDB)
  body: BodyV2InDB[];
}