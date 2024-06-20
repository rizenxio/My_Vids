import { Client, ID, Account, Avatars, Databases, Query } from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aurora",
  projectId: "665ac944002aaa19a413",
  databaseId: "665b14b2002e96cafcbe",
  userCollectionId: "665b14ee001bef4f64ce",
  videoCollectionId: "665b1529003794be08f6",
  storageId: "665b175200306610c87d",
};

const {
  endpoint,
  platform,
projectId,
databaseId,
userCollectionId,
videoCollectionId,
storageId
} = config

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
// Register User

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
//Signin user
export const getCurrentUser = async () =>{
  try{
    const currentAccount = await account.get()

    if(!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId',currentAccount.$id)]
    )
    if(!currentUser) throw Error;

    return currentUser.documents[0]
  }catch(error){
    console.log(error)
  }
}

export const getAllPost = async ()=>{
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId
    )
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}
export const LatestPost = async ()=>{
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.orderDesc('$createdAt', Query.limit(7))]
    )
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}
export const searchPost = async (query)=>{
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.search('title', query)]
    )
    if (!posts) throw new Error("Something went Wrong")
    return posts.documents
  } catch (error) {
    throw new Error(error)
  }
}