import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class IndividualProviderData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}