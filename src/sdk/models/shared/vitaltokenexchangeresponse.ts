import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RegionEnum } from "./regionenum";
import { VitalTokenExchangeTeamResponse } from "./vitaltokenexchangeteamresponse";
import { Expose, Type } from "class-transformer";


export class VitalTokenExchangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "api_key" })
  apiKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "environment" })
  environment: string;

  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region: RegionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "team" })
  @Type(() => VitalTokenExchangeTeamResponse)
  team: VitalTokenExchangeTeamResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: string;
}