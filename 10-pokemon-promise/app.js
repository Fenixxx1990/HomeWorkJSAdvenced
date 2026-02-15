"use strict";

function getData(url, method = "GET") {
  return fetch(url, { method }).then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }
    return response.json();
  });
}

function getDittoAbilityDescription() {
  getData("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((dittoData) => {
      const firstAbilityUrl = dittoData.abilities[0].ability.url;
      return getData(firstAbilityUrl);
    })
    .then((abilityData) => {
      const englishEntry = abilityData.effect_entries.find(
        (entry) => entry.language.name === "en",
      );
      if (englishEntry) {
        console.log(englishEntry.effect);
      } else {
        console.log("Английское описание не найдено.");
      }
    })
    .catch((error) => {
      console.log("Произошла ошибка:", error);
    });
}

// Запускаем функцию
getDittoAbilityDescription();
