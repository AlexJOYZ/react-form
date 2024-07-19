import axios from 'axios';

export class UsersService {
  static async getAll() {
    const response = await axios.get('http://localhost:3000/users');
    return response;
  }
  static async getUserById(userId) {
    const response = await axios.get('http://localhost:3000/users/' + userId);
    return response;
  }
}
