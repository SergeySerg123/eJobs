export class Course {
  id?: string;
  title?: string;
  category?: string;
  description?: string;

  constructor(id: string, title: string, category: string, description: string) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
  }
}
