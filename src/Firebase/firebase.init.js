import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

const authInit = () => {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
}

export default authInit;