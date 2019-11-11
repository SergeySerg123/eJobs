export class User {
  id?: string;
  email?: string;
  login?: string;
  firstName?: string;
  lastName?: string;
  about?: string;
  contactDetails?: string;
  birth?: string;
  male?: string;
  role?: string;
  token?: string;

  private constructor(user) {
    this.id = user.userId;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.about = user.about;
    this.contactDetails = user.contacts;
    this.male = user.male;
    this.role = user.role;
    this.birth = user.birth;
  }

  public static create(payload): User {
    return new User({...payload});
  }
}
