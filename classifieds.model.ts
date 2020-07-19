export class Classifieds {
  public id: string;
  public name: string;
  public description: string;
  public image: string;

  constructor(id: string, name: string, description: string, image: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
  }
}
