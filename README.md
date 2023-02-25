# Vital Node SDK

<div align="center">
   <p>API for at-home health. Wearables and Lab test API for digital health companies.</p>
   <a href="https://github.com/speakeasy-sdks/vital-ts-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/vital-ts-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
   <a href="https://docs.tryvital.io/api-reference"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @vital/sdk
```

### Yarn

```bash
yarn add @vital/sdk
```
<!-- End SDK Installation -->

## Authentication

Authentication is currently done through `api_key` authentication. You can retrieve these keys from the [dashboard](https://app.tryvital.io/). You can then provide the `api_key` in the `x-vital-api-key` header of your request. For instance:

```bash
curl --request GET
  --url '{{BASE_URL}}/v2/providers'
  --header 'x-vital-api-key: <YOUR-API-KEY>'
```

### Legacy

Authentication was previously handled using Bearer tokens. To generate a token use your `client_id` and `client_secret` and make a call to the respective auth endpoint.

sandbox:`https://auth.sandbox.tryvital.io/oauth/token`
production:`https://auth.tryvital.io/oauth/token`

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DeregisterGarminV2DataWebhookDeregisterGarminPostRequest,
  DeregisterGarminV2DataWebhookDeregisterGarminPostResponse 
} from "@vital/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Vital } from "@vital/sdk";


const sdk = new Vital();
    
const req: DeregisterGarminV2DataWebhookDeregisterGarminPostRequest = {
  request: {
    "deserunt": "porro",
    "nulla": "id",
    "vero": "perspiciatis",
  },
};

sdk.dataWebhook.deregisterGarminV2DataWebhookDeregisterGarminPost(req).then((res: DeregisterGarminV2DataWebhookDeregisterGarminPostResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### dataWebhook

* `deregisterGarminV2DataWebhookDeregisterGarminPost` - Deregister Garmin
* `ihealthWebhookV2DataWebhookIhealthPost` - Ihealth Webhook
* `receiveActivityUpdatesV2DataWebhookProviderActivityPost` - Receive Activity Updates
* `receiveBodyUpdatesV2DataWebhookProviderBodyPost` - Receive Body Updates
* `receiveGarminWorkoutStreamUpdatesV2DataWebhookGarminWorkoutsStreamPost` - Receive Garmin Workout Stream Updates
* `receiveSleepUpdatesV2DataWebhookProviderSleepPost` - Receive Sleep Updates
* `receiveWithingsUpdatesV2DataWebhookWithingsPost` - Receive Withings Updates
* `receiveWorkoutUpdatesV2DataWebhookProviderWorkoutsPost` - Receive Workout Updates
* `validateBodyUrlFitbitV2DataWebhookFitbitBodyGet` - Validate Body Url Fitbit
* `validateSleepUrlFitbitV2DataWebhookFitbitSleepGet` - Validate Sleep Url Fitbit
* `validateUrlV2DataWebhookStravaWorkoutsGet` - Validate Url
* `validateWorkoutsUrlFitbitV2DataWebhookFitbitWorkoutsGet` - Validate Workouts Url Fitbit
* `withingsSubscriptionCreatedV2DataWebhookWithingsHead` - Withings Subscription Created

### labTests

* `getLabTestsForTeamV3LabTestsGet` - Get Lab Tests For Team

### link

* `checkLinkTokenStateV2LinkStateGet` - Check Link Token State
* `checkTokenValidV2LinkTokenIsValidPost` - Check Token Valid
* `connectBleProviderV2LinkProviderManualProviderPost` - Connect Ble Provider
* `connectEmailAuthProviderV2LinkProviderEmailProviderPost` - Connect Email Auth Provider
* `connectEmailAuthV2LinkAuthEmailPost` - Connect Email Auth
* `connectIndividualProviderV2LinkProviderPasswordProviderPost` - Connect Individual Provider
* `connectPasswordAuthV2LinkAuthPost` - Connect Password Auth
* `connectProviderV2LinkConnectProviderGet` - Connect Provider
* `createDemoConnectionV2LinkConnectDemoPost` - Create Demo Connection
* `createTokenV2LinkCodeCreatePost` - Create Token
* `exchangeTokenV2LinkCodeExchangePost` - Exchange Token
* `generateVitalLinkTokenV2LinkTokenPost` - Generate Vital Link Token
* `getOauthProviderV2LinkProviderOauthOauthProviderGet` - Get Oauth Provider
* `getProvidersV2LinkProvidersGet` - Get Providers
* `startConnectProcessV2LinkStartPost` - Start Connect Process

### order

* `cancelOrderV3OrderOrderIdCancelPost` - Cancel Order
* `createOrderV3OrderPost` - Create Order
* `dispatchOrderStatusV3OrderDispatchStatusChecksPost` - Dispatch Order Status
* `getLabTestResultMetadataV3OrderOrderIdResultMetadataGet` - Get Lab Test Result Metadata
* `getLabTestResultRawV3OrderOrderIdResultGet` - Get Lab Test Result Raw
* `getLabTestResultV3OrderOrderIdResultPdfGet` - Get Lab Test Result
* `getOrderV3OrderOrderIdGet` - Get Order
* `processTestkitOrderShippedV3OrderTestkitWebhookShipbobPost` - Process Testkit Order Shipped
* `processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost` - Process Testkit Order
* `processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost` - Process Testkit Ship Hero Order Shipped
* `syncTestkitOrderStatusV3OrderTestkitStatusPost` - Sync Testkit Order Status
* `testOrderProcessV3OrderOrderIdTestPost` - Test Order Process

### orders

* `getOrdersV3OrdersGet` - Get Orders

### physician

* `reviewWheelV2PhysicianReviewWheelPost` - Review Wheel

### providers

* `getListOfProvidersV2ProvidersGet` - Get List Of Providers

### summary

* `getMealsV2SummaryMealUserIdGet` - Get Meals
* `getUserActivityRawV2SummaryActivityUserIdRawGet` - Get User Activity Raw
* `getUserActivityV2SummaryActivityUserIdGet` - Get User Activity
* `getUserBodyRawV2SummaryBodyUserIdRawGet` - Get User Body Raw
* `getUserBodyV2SummaryBodyUserIdGet` - Get User Body
* `getUserDevicesRawV2SummaryDevicesUserIdRawGet` - Get User Devices Raw
* `getUserProfileRawV2SummaryProfileUserIdRawGet` - Get User Profile Raw
* `getUserProfileV2SummaryProfileUserIdGet` - Get User Profile
* `getUserSleepRawV2SummarySleepUserIdRawGet` - Get User Sleep Raw
* `getUserSleepStreamV2SummarySleepUserIdStreamGet` - Get User Sleep Stream
* `getUserSleepV2SummarySleepUserIdGet` - Get User Sleep
* `getUserWorkoutsRawV2SummaryWorkoutsUserIdRawGet` - Get User Workouts Raw
* `getUserWorkoutsV2SummaryWorkoutsUserIdGet` - Get User Workouts
* `postUserActivityV2SummaryActivityUserIdPost` - Post User Activity
* `postUserBodyV2SummaryBodyUserIdPost` - Post User Body
* `postUserProfileV2SummaryProfileUserIdPost` - Post User Profile
* `postUserSleepV2SummarySleepUserIdPost` - Post User Sleep
* `postUserWorkoutV2SummaryWorkoutsUserIdPost` - Post User Workout

### team

* `createApiKeyV2TeamTeamIdApikeyPost` - Create Api Key
* `createPriorityV2TeamTeamIdPriorityPost` - Create Priority
* `createTeamV2TeamPost` - Create Team
* `deleteApiKeyV2TeamTeamIdApikeyApiKeyIdDelete` - Delete Api Key
* `deleteTeamV2TeamTeamIdDelete` - Delete Team
* `getApiKeysForTeamV2TeamTeamIdApikeysGet` - Get Api Keys For Team
* `getSourcePrioritiesV2TeamSourcePrioritiesGet` - Get Source Priorities
* `getSvixWebhookUrlV2TeamSvixUrlGet` - Get Svix Webhook Url
* `getTeamConfigV2TeamLinkConfigGet` - Get Team Config
* `getTeamUserCountV2TeamTeamIdUsersCountGet` - Get Team User Count
* `getTeamV2TeamTeamIdGet` - Get Team
* `rotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatch` - Rotate Api Key
* `searchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGet` - Search Team Users By Uuid Or Client User Id
* `updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch` - Update Api Key Label
* `updateSourcePrioritiesV2TeamSourcePrioritiesPatch` - Update Source Priorities
* `updateTeamV2TeamTeamIdPatch` - Update Team

### testkit

* `getTestkitsV2TestkitGet` - Get Testkits

### testkitOrders

* `getOrderV2TestkitOrdersOrderIdGet` - Get Order
* `getOrdersV2TestkitOrdersGet` - Get Orders

### timeseries

* `getBloodPressureDataV2TimeseriesUserIdBloodPressureGet` - Get Blood Pressure Data
* `getTimeseriesResourceDataV2TimeseriesUserIdResourceGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdCaffeineGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdCholesterolGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdGlucoseGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdHeartrateGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdHeartrateVariabilityGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdHrvGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdHypnogramGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdIgeGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdIggGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdStepsGet` - Get Timeseries Resource Data
* `getTimeseriesResourceDataV2TimeseriesUserIdWaterGet` - Get Timeseries Resource Data
* `getUserSleepStreamV2TimeseriesSleepSleepIdStreamGet` - Get User Sleep Stream
* `getUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGet` - Get User Workouts
* `postUserBloodPressureV2TimeseriesUserIdBloodPressurePost` - Post User Blood Pressure
* `postUserVitalsV2TimeseriesUserIdResourcePost` - Post User Vitals

### user

* `backfillWebhookForUserV2UserAdminWebhookUserIdTeamIdPost` - Backfill Webhook For User
* `createUserV2UserPost` - Create User
* `deleteUserV2UserUserIdDelete` - Delete User
* `deregisterProviderV2UserUserIdProviderDelete` - Deregister Provider
* `getConnectedProvidersV2UserProvidersUserIdGet` - Get Connected Providers
* `getTeamsMetricsV2UserMetricsGet` - Get Teams Metrics
* `getTeamsUsersV2UserGet` - Get Teams Users
* `getUserByClientUserIdV2UserResolveClientUserIdGet` - Get User By Client User Id
* `getUserV2UserUserIdGet` - Get User
* `patchUserV2UserUserIdPatch` - Patch User
* `refreshUserIdV2UserRefreshUserIdPost` - Refresh User Id
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
