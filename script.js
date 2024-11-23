// Example: Adding carousel functionality (if required)
document.querySelector('.carousel-container').addEventListener('scroll', () => {
  console.log('Scrolling...');
});
// Animate movies in the carousel
gsap.from('.movie', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1
});

// Animate hero section text
gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.cta-btn', { opacity: 0, scale: 0.5, duration: 1, delay: 0.5 });
// Firebase configuration
const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_project_id.firebaseapp.com",
    projectId: "your_project_id",
    storageBucket: "your_project_id.appspot.com",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign-up function
async function signUp(email, password) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        alert(`Welcome, ${userCredential.user.email}`);
    } catch (error) {
        alert(error.message);
    }
}

// Login function
async function login(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        alert(`Logged in as ${userCredential.user.email}`);
    } catch (error) {
        alert(error.message);
    }
}
// Firebase configuration
const firebaseConfig = {
    apiKey: "your_api_key",
    authDomain: "your_project_id.firebaseapp.com",
    projectId: "your_project_id",
    storageBucket: "your_project_id.appspot.com",
    messagingSenderId: "your_messaging_sender_id",
    appId: "your_app_id"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();