import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SourceLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=form_components" })
  formComponents?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=oauth_url" })
  oauthUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}