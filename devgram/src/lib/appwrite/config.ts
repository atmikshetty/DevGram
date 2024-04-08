import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
    url: import.meta.env.VITE_DEVGRAM_PROJECT_URL,
    projectId: import.meta.env.VITE_DEVGRAM_PROJECT_ID,
    databaseId: import.meta.env.VITE_DEVGRAM_DATABASE_ID,
    storageId: import.meta.env.VITE_DEVGRAM_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_USERS_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_POSTS_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_SAVES_COLLECTION_ID,
}

// All parameters
export const client = new Client();
// console.log('APPWRITE_URL:', import.meta.env.DEVGRAM_PROJECT_URL);
// Accessing the project
// client.setEndpoint(appwriteConfig.url);
client.setEndpoint('https://cloud.appwrite.io/v1');
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);