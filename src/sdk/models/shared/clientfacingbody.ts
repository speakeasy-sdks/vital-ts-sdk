import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingSource } from "./clientfacingsource";


export class ClientFacingBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendar_date" })
  calendarDate: Date;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=fat" })
  fat?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ClientFacingSource;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_key" })
  userKey?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}