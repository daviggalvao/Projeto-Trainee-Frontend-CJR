/*import api from '../../utils/api';

export const authUser = async (email: string, senha: string): Promise<{ token: string }> => {
  const response = await api.post('/auth/login', { email, senha });
  return response.data;
}; */

import api from '../../utils/api';
import { UserData } from '../../types/User'

export interface AuthResponse {
  token: string;
  user: UserData;
  };

export const authUser = async (email: string, senha: string): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', { email, senha });
  return response.data;
};