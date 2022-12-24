import { doc, setDoc, collection, getDocs } from "firebase/firestore";
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
