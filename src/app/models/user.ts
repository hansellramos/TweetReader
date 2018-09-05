export class User {
  id: number;
  username: string;
  name: string;
  image: string;

  constructor(id: number, username: string, name: string, image: string) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.image = image;
  }

  static fromTwitterJson(jsonUser: JSON): User {
    return new User(
      jsonUser['id']
      , jsonUser['name']
      , jsonUser['screen_name']
      , jsonUser['profile_image_url_https']
    );
  }
}
