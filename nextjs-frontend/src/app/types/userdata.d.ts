export default interface UserData {
  id: number;
  username: string;
  full_name: string;
  phone: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
