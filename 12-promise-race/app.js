"use strict";

function race(promises) {
  // Проверяем, что передан массив
  if (!Array.isArray(promises)) {
    return Promise.reject(new TypeError("Argument must be an array"));
  }

  // Если массив пустой — сразу отклоняем
  if (promises.length === 0) {
    return Promise.reject(new Error("Array must contain at least one promise"));
  }

  return new Promise((resolve, reject) => {
    // Проходим по всем промисам
    promises.forEach((promise) => {
      // Гарантируем, что элемент — промис (или преобразуем в промис)
      Promise.resolve(promise)
        .then((value) => {
          // Первый успешно разрешённый промис — сразу resolve
          resolve(value);
        })
        .catch((error) => {
          // Первый отклонённый промис — сразу reject
          reject(error);
        });
    });
  });
}
