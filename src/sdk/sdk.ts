import { DataWebhook } from "./datawebhook";
import { LabTests } from "./labtests";
import { Link } from "./link";
import { Order } from "./order";
import { Orders } from "./orders";
import { Physician } from "./physician";
import { Providers } from "./providers";
import { Summary } from "./summary";
import { Team } from "./team";
import { Testkit } from "./testkit";
import { TestkitOrders } from "./testkitorders";
import { Timeseries } from "./timeseries";
import { User } from "./user";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.tryvital.io/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class Vital {
  public dataWebhook: DataWebhook;
  public labTests: LabTests;
  public link: Link;
  public order: Order;
  public orders: Orders;
  public physician: Physician;
  public providers: Providers;
  public summary: Summary;
  public team: Team;
  public testkit: Testkit;
  public testkitOrders: TestkitOrders;
  public timeseries: Timeseries;
  public user: User;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.1.3";
  private _genVersion = "1.3.3";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.dataWebhook = new DataWebhook(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.labTests = new LabTests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.link = new Link(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.order = new Order(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orders = new Orders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.physician = new Physician(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.providers = new Providers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.summary = new Summary(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.team = new Team(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.testkit = new Testkit(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.testkitOrders = new TestkitOrders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.timeseries = new Timeseries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}