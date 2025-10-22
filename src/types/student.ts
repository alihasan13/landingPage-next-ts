export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  image: string;
}

export interface StudentApiResponse {
  status: string;
  code: number;
  data: Student[];
}