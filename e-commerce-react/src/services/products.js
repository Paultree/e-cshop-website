import {
  doc,
  updateDoc,
  setDoc,
  collection,
  getDocs,
  getDoc,
  increment,
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

export const getShoppingCart = async () => {
  const collectionRef = collection(db, "shoppingCart");
  const querySnapshot = await getDocs(collectionRef);
  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();
    return { id, ...restOfData };
  });
  return data;
};

const changeProductQuantity = async (a) => {
  const productRef = doc(db, "products", a.id);
  const updateQuantity = await updateDoc(productRef, {
    quantity: increment(-a.quantity),
  });
  return updateQuantity;
};

const changeCartQuantity = async (a) => {
  const cartRef = doc(db, "shoppingCart", `${a.title}${a.size}`);
  return await updateDoc(cartRef, {
    quantity: increment(a.quantity),
  });
};

export const addToCart = async (data) => {
  const productRef = doc(db, "products", data.id);
  const docSnap = await getDoc(productRef);
  const obj = docSnap.data();
  const shopRef = doc(db, "shoppingCart", `${data.title}${data.size}`);
  const shopSnap = await getDoc(shopRef);
  const cartObj = shopSnap.data();
  //grabbing the product document from products collection
  if (!cartObj) {
    changeProductQuantity(data);
    console.log("scenario 1");
    //changing the quantity of product collection counterpart
    const cartItem = {
      title: data.title,
      image: data.image,
      price: data.price,
      size: data.size,
      quantity: data.quantity,
      index: data.id,
    };
    const newDoc = await setDoc(shopRef, cartItem);
    return newDoc;
    //adding the product info to shopping cart collection
  } else if (obj.quantity > 0) {
    console.log("scenario 2");
    changeProductQuantity(data);
    changeCartQuantity(data);
  }
};

export const updateFavourited = async (data) => {
  const productRef = doc(db, "products", data.id);
  console.log(data.favourited);
  const updateField = await updateDoc(productRef, {
    favourited: !data.favourited,
  });
  return updateField;
};

export const updateCartQuantity = async (data, value) => {
  const productRef = doc(db, "products", data.index);
  const prodSnap = await getDoc(productRef);
  const prodObj = prodSnap.data();
  const cartRef = doc(db, "shoppingCart", `${data.title}${data.size}`);
  const cartSnap = await getDoc(cartRef);
  const cartObj = cartSnap.data();
  if (cartObj.quantity === value) return;
  await updateDoc(cartRef, {
    quantity: Number(value),
  });
  await updateDoc(productRef, {
    quantity: prodObj.quantity + Number(cartObj.quantity) - value,
  });
  return prodObj.quantity + Number(cartObj.quantity);
};

export const maxCart = async (data) => {
  const productRef = doc(db, "products", data.index);
  const prodSnap = await getDoc(productRef);
  const prodObj = prodSnap.data();
  const cartRef = doc(db, "shoppingCart", `${data.title}${data.size}`);
  const cartSnap = await getDoc(cartRef);
  const cartObj = cartSnap.data();
  console.log(prodObj.quantity, cartObj.quantity);
  return prodObj.quantity + Number(cartObj.quantity);
};
