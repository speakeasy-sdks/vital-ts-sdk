import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "success" })
  success: boolean;
}