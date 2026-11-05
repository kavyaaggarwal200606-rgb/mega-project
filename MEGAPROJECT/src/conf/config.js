const conf = {
    appwriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteendpoint : String(import.meta.env.VITE_APPWRITE_ENDPOINT_ID),
    appwritedatabase : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollection : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritebucket : String(import.meta.env.VITE_APPWRITE_BUSCKET_ID)
}

export  default conf 