import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// ConnectedSourceClientFacingProvider
/** 
 * Source the data has come from.
**/
export class ConnectedSourceClientFacingProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}

export class ConnectedSourceClientFacing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn: Date;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ConnectedSourceClientFacingProvider;
}