import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("646c51dc97645e5feda5")

export const account = new Account(client)

// for database addition
export const databases = new Databases(client, "646c55f7295daeb200a7") 