import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class VitalTokenExchangeTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}