export class User {
  /**
   * Twitter id of user
   */
  id: number;

  /**
   * Twitter username of user
   */
  username: string;

  /**
   * Twitter display name of user
   */
  name: string;

  /**
   * Twitter profile image url resource
   */
  image: string;

  constructor(id: number, username: string, name: string, image: string) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.image = image;
  }

  /**
   * Returns User object from json source
   * @param jsonUser
   * @return User
   */
  static fromTwitterJson(jsonUser: JSON): User {
    return new User(
      jsonUser['id']
      , jsonUser['screen_name']
      , jsonUser['name']
      , jsonUser['profile_image_url_https']
    );
  }
}
