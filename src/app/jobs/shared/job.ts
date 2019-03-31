export class Job {
  id: number;
  title: string;
  zip_code: string;
  city: string;
  thumbnail: string;
  attachments: string[];
  counter: {};
  is_awarded: boolean;
  categories: string[];
  state: string;
  description: string;
  end_date: Date;
  created_at: Date;
}
