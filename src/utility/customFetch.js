import db from "../utility/firebaseConfig";
import { collection, query, where, getDocs ,doc, getDoc } from "firebase/firestore";
let is_ok = true;
export const customFetch = (timeout,data) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(is_ok){
                resolve(data)
            }else
            {
                reject('No se pudo cargar los productos..');
            }
            },timeout);
    });
}
export const fireStoneFetch = async ()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map( item =>  ({
        id: item.id,
        ...item.data()
     }))
}
export const fireStoneFetchFilter = async (segun,dato) =>{
    const q = query(collection(db, "products"), where(segun, "==",dato));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map( item =>  ({
        id: item.id,
        ...item.data()
    }))
}

export const fireStoneFetchFind = async (dato) =>{
    const docRef = doc(db, "products", dato);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data());
     return { id: docSnap.id,...docSnap.data()} 
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    return 0;
}

