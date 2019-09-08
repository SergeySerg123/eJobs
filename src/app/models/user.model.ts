export class User {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  confirmPassword?: string;
  token?: string;

  protected constructor() { }

  // Factory method
  public static createUserInstance(): User {
    return new User();
  }
}
