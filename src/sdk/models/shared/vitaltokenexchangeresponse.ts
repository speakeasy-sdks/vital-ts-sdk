import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RegionEnum } from "./regionenum";
import { VitalTokenExchangeTeamResponse } from "./vitaltokenexchangeteamresponse";


export class VitalTokenExchangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: RegionEnum;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team: VitalTokenExchangeTeamResponse;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}