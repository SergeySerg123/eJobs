export class User {
  userId?: string;
  email?: string;
  name?: string;
  role?: string;
  password?: string;
  confirmPassword?: string;
  token?: string;

  protected constructor() { }

  // Factory method
  public static createUserInstance(): User {
    return new User();
  }
}
