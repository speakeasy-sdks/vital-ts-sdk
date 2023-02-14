import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProfileInDb } from "./profileindb";


export class RawProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile: ProfileInDb;
}