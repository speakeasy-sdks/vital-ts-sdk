import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ClientFacingSourceWithStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;
}