import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProfileInDb } from "./profileindb";
import { Expose, Type } from "class-transformer";


export class RawProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "profile" })
  @Type(() => ProfileInDb)
  profile: ProfileInDb;
}