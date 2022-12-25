import {
  doc,
  updateDoc,
  setDoc,
  collection,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { db } from "../firestore";

export const getProducts = async () => {
  const collectionRef = collection(db, "products");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();
    return { id, ...restOfData };
  });
  return data;
};

export const addToCart = async (data) => {
  const { title, image, price, size, quantity } = data;
  const cartItem = { title, image, price, size, quantity };
  const docRef = doc(db, "shoppingCart", data.id);
  const newDoc = await setDoc(docRef, cartItem);
  return newDoc;
};

export const updateFavourited = async (data) => {
  const productRef = doc(db, "products", data.id);
  console.log(data.favourited);
  const updateField = await updateDoc(productRef, {
    favourited: !data.favourited,
  });
  return updateField;
};

export const getFavourite = async (data) => {
  const docRef = doc(db, "products", data.id);
  const docSnap = await getDoc(docRef);
  return docSnap.data().favourited;
};
