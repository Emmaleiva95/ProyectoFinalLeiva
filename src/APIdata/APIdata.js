import { initializeApp } from 'firebase/app';
import { addDoc, doc, query, where } from 'firebase/firestore';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBv3rydjVSeT28o5XywEnrGsKjeab5cuqI",
  authDomain: "app-react-d8d3a.firebaseapp.com",
  projectId: "app-react-d8d3a",
  storageBucket: "app-react-d8d3a.appspot.com",
  messagingSenderId: "184145325112",
  appId: "1:184145325112:web:71f5c7f080827cf15c0acd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of items from your database
async function getItems(db) {
  const itemsCol = collection(db, 'items');
  const itemsSnapshot = await getDocs(itemsCol);
  const itemsList = itemsSnapshot.docs.map(doc => doc.data());
  return itemsList;
}


async function getItemsByCategory(db,category) {

  const collection_ref = collection(db, 'items')
    const q = query(collection_ref, where("genero", "==", category))
    const doc_refs = await getDocs(q);

    const res = []
    doc_refs.forEach(item => {
        res.push({
            ...item.data()
        })
    })

    return res


}

async function getItemsByID(db,id) {

  const d = await getDoc(doc(db, 'items', id)) 
  
  return d.data()
}



export async function addNewOrder(order) {
// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "orders"), order);
  return docRef;
}


  export const fetchingData = async () => {
    return await getItems(db)
  }
  



  export const fetchingDataByCategory = async (category) => {
    return await getItemsByCategory(db,category);
  }

  // SOLICITAR UN ITEM POR ID.
  export const fetchingItemDetail = async (id) => {
    return await getItemsByID(db,id);
  }


  