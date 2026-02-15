// Функция для получения и вывода описания первой способности Ditto
async function getDittoAbilityDescription() {
  try {
    // Шаг 1: запрос к /pokemon/ditto
    const dittoResponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon/ditto",
    );
    if (!dittoResponse.ok) {
      throw new Error(`Ошибка запроса Ditto: ${dittoResponse.status}`);
    }
    const dittoData = await dittoResponse.json();

    // Шаг 2: берём URL первой способности
    const firstAbilityUrl = dittoData.abilities[0].ability.url;

    // Шаг 3: запрос к URL способности
    const abilityResponse = await fetch(firstAbilityUrl);
    if (!abilityResponse.ok) {
      throw new Error(`Ошибка запроса способности: ${abilityResponse.status}`);
    }
    const abilityData = await abilityResponse.json();

    // Шаг 4: ищем английское описание (effect_entries)
    const englishEntry = abilityData.effect_entries.find(
      (entry) => entry.language.name === "en",
    );

    // Шаг 5: выводим описание в консоль
    if (englishEntry) {
      console.log(englishEntry.effect);
    } else {
      console.log("Английское описание не найдено.");
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

// Запускаем функцию
getDittoAbilityDescription();
