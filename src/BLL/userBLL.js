import axios from 'axios';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
class UserBLL {
  static async getUsers() {
    try {
      const {data} = await axios.get(usersUrl);
      sessionStorage.setItem('users', JSON.stringify(data));
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async getCurrentUsers() {
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    if (users.length === 0)
    {
        await this.getUsers();
        return JSON.parse(sessionStorage.getItem('users')) || [];
    }
    return users;
  }

  static async getUserById(userId) {
    try {
      const {data} = await axios.get(`${usersUrl}/${userId}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async addUser(user) {
    try {
      const {data} = await axios.post(usersUrl, user);
      const users = await UserBLL.getCurrentUsers();
      users.push(user);
      sessionStorage.setItem('users', JSON.stringify(users));
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async updateUser(userId, updatedUser) {
    try {
      const {data} = await axios.put(`${usersUrl}/${userId}`, updatedUser);
      const users = await UserBLL.getCurrentUsers();
      const userIndex = users.find(user => user.id === userId);
      if (userIndex !== -1) {
        users[userIndex] = {...users[userIndex], ...updatedUser};
        sessionStorage.setItem('users', JSON.stringify(users));
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteUser(userId) {
    try {
      const {data} = await axios.delete(`${usersUrl}/${userId}`);
      const users = await UserBLL.getCurrentUsers();
      const userIndex = users.find(user => user.id === userId);
      if (userIndex !== -1) {
        users.splice(userIndex, 1);
        sessionStorage.setItem('users', JSON.stringify(users));
      }
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  static generateUniqueId() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

export default UserBLL;