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
  static async postUser(data) {
    axios({
      method: 'post',
      url: 'http://localhost:3000/users',
      data,
    });
  }
  static async updateUserDataById(data, userId) {
    axios({
      method: 'put',
      url: 'http://localhost:3000/users/' + userId,
      data,
    });
  }
  static async deleteUserData(userId) {
    axios({
      method: 'delete',
      url: 'http://localhost:3000/users/' + userId,
    });
  }
}
