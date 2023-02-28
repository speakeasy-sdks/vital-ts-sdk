import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class IndividualProviderData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "password" })
  password: string;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username: string;
}