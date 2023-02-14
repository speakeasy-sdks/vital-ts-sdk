import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}