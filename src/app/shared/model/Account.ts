import {Role} from './Role';
export class Account{
  public account_id: number | undefined;
  public firstname: string | undefined;
  public lastname: string | undefined;
  public email: string | undefined;
  public password: string | undefined;
  public role: Role | undefined;
}

export class AccountSimplified{
  public firstname: string | undefined;
  public lastname: string | undefined;
  public email: string | undefined;
}
