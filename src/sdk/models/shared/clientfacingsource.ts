import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ClientFacingSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}