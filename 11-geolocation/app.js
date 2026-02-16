"use strict";

function createPromise(latitude, longitude) {
  return new Promise((resolve, reject) => {
    if (typeof latitude === "number" && typeof longitude === "number") {
      resolve([latitude, longitude]);
    } else {
      reject(new Error("Invalid coordinates"));
    }
  });
}

function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error),
    );
  });
}

(async () => {
  try {
    const position = await getGeolocation();
    console.log(position);
    const promise = createPromise(
      position.coords.latitude,
      position.coords.longitude,
    );

    promise.then((data) => console.log(data)); // [широта, долгота]
  } catch (error) {
    console.error("Ошибка геолокации:", error.message);
  }
})();
