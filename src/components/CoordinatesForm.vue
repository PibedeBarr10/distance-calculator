<template>
  <div class="component">
    <p class="title">Podaj współrzędne geograficzne dwóch punktów</p>

    <div class="form">
      <div class="coordinates">
        <div>Pierwszy punkt</div>
        <InputText
          ref="firstLatitude"
          text="Szerokość"
          placeholder="np. 54.32"
        />
        <InputText
          ref="firstLongitude"
          text="Długość"
          placeholder="np. 21.65"
        />
      </div>

      <div class="coordinates">
        <div>Drugi punkt</div>
        <InputText
          ref="secondLatitude"
          text="Szerokość"
          placeholder="np. 54.32"
        />
        <InputText
          ref="secondLongitude"
          text="Długość"
          placeholder="np. 21.65"
        />
      </div>
    </div>

    <input type="submit" value="Oblicz" @click="calculateDistance()" />
    <p v-show="isDistanceCalculated">
      Odległość pomiędzy dwoma punktami: {{ kilometers }} km
      <span v-if="meters !== 0"> {{ meters }} m</span>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import * as validation from "../plugins/validation.js";
import * as distanceCalculatorApi from "../api/distanceCalculatorApi.js";
import InputText from "../components/forms/InputText.vue";

const firstLatitude = ref(null);
const firstLongitude = ref(null);

const secondLatitude = ref(null);
const secondLongitude = ref(null);

let isDistanceCalculated = ref(false);
let kilometers = ref(0);
let meters = ref(0);

const calculateDistance = async () => {
  isDistanceCalculated.value = false;

  if (
    !validation.passedValidation(firstLatitude.value?.inputData) ||
    !validation.passedValidation(firstLongitude.value?.inputData) ||
    !validation.passedValidation(secondLatitude.value?.inputData) ||
    !validation.passedValidation(secondLongitude.value?.inputData)
  ) {
    alert("Puste pola lub błędny format danych");
    return;
  }

  let data = await distanceCalculatorApi.getDistance(
    firstLatitude.value?.inputData,
    firstLongitude.value?.inputData,
    secondLatitude.value?.inputData,
    secondLongitude.value?.inputData
  );
  data = data.toFixed(3);

  kilometers.value = data.split(".")[0];
  meters.value = data.split(".")[1];

  if (validation.isFilled(kilometers.value)) {
    isDistanceCalculated.value = true;
  }
};
</script>

<style scoped>
@import "../assets/coordinateForm.css";
</style>
