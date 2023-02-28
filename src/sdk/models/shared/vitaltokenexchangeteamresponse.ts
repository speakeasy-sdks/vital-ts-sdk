import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class VitalTokenExchangeTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "logo_url" })
  logoUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}