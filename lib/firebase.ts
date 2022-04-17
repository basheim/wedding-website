import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAvXIFe1MCbpSXwzncpUYLFCHWWeQY_w3o",
  authDomain: "basheim-wedding.firebaseapp.com",
  projectId: "basheim-wedding",
  storageBucket: "basheim-wedding.appspot.com",
  messagingSenderId: "974551991267",
  appId: "1:974551991267:web:aee54f360b4d7e7d4896d6",
  measurementId: "G-BZE5B9BZ85"
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export interface CookieAuth {
  isAuthorized: boolean;
  cookie?: string;
}

export interface User {
  hasPlusOne: boolean;
  name: string;
  plusOne: string;
  id: string;
  testingData: boolean;
}

export interface RsvpRequest {
  doc: Rsvp
}

export interface Rsvp {
  email: string;
  acknowledgeParking: boolean;
  count: number;
  everyoneVaccinated: boolean;
  isJoining: boolean;
  userId: string;
  name: string;
  dietaryRestrictions: string;
}

export const getAuthorizedCookie = async (password: string): Promise<CookieAuth> => {
  const authorized = httpsCallable(functions, 'authorize');
  return (await authorized({ password })).data as any;
}

export const hasCookie = async (cookies: string[]): Promise<boolean> => {
  const checkCookie = httpsCallable(functions, 'hasCookie');
  const data = (await checkCookie({ cookies })).data as any;
  return data.hasCookie;
}

export const getUsers = async (): Promise<User[]> => {
  const getUsersController = httpsCallable(functions, 'getUsers');
  const data = (await getUsersController()).data as any;
  return data.users;
}

export const createRsvp = async (rsvpRequest: RsvpRequest): Promise<void> => {
  const createRsvpController = httpsCallable(functions, 'createRsvp');
  await createRsvpController(rsvpRequest)
}