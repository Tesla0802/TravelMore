const firebaseConfig = {
  apiKey: "AIzaSyDcaK4eNPnV-dLGO1gOq76C0A_clg1ie4M",
  authDomain: "travelmore-e65d4.firebaseapp.com",
  databaseURL: "https://travelmore-e65d4-default-rtdb.firebaseio.com",
  projectId: "travelmore-e65d4",
  storageBucket: "travelmore-e65d4.appspot.com",
  messagingSenderId: "713002452960",
  appId: "1:713002452960:web:333c7a77944bc5253d4d85",
  measurementId: "G-F4LKV57Y58",
};

firebase.initializeApp(firebaseConfig);

function randomID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateFirebaseItem(ID, value) {
  return {
    userid: ID,
    data: value,
  };
}

function addElementInFirebase(REF, data) {
  firebase
    .database()
    .ref(REF + randomID())
    .set(data);
}

function getArrayFromFirebase(REF) {
  let tempArray = [];
  firebase
    .database()
    .ref(REF)
    .on("value", (response) => {
      response.forEach((element) => {
        tempArray.push(generateFirebaseItem(element.key, element.val()));
      });
    });
  return tempArray;
}

function removeRefFromFirebase(REF) {
  firebase.database().ref(`${REF}`).remove();
}

function removeElementFromFirebase(REF, id) {
  firebase.database().ref(`${REF}/${id}`).remove();
}

function getElementFromFirebaseByID(REF, id) {
  const tempArray = getArrayFromFirebase(REF);
  let temp = {};
  tempArray.forEach((element) => {
    if (element.userid === id) {
      temp = element;
    }
  });
  console.log(temp);
  return temp;
}

function changeDataOnFirebaseByID(REF, ID, data) {
  firebase
    .database()
    .ref(REF + "/" + ID)
    .set(data);
}
