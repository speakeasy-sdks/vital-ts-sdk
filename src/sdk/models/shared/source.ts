import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: string;

  @SpeakeasyMetadata({ data: "json, name=backfill_num_days" })
  backfillNumDays?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_url" })
  oauthUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}