<template>
  <div class="row">
    <div class="col-3 h4 p-3 text-end">Type</div>
    <div class="col">
      <TypeSelect @setType="setType" />
    </div>
  </div>
  <div class="row">
    <div class="col-3 h4 p-3 text-end">Rarity</div>
    <div class="col">
      <RaritySelect @setRarity="setRarity" />
    </div>
  </div>
  <div class="row">
    <div class="col-3 h4 p-3 text-end">Tier</div>
    <div class="col">
      <TierSelect @setTier="setTier" />
    </div>
  </div>

  <div class="row mb-3">
    <div class="col">
      <button class="w-100 btn btn-primary btn-lg" @click="rollMods()">
        Generate New
      </button>
    </div>
    <div class="col">
      <button class="w-100 btn btn-success btn-lg disabled">Reroll</button>
    </div>
  </div>

  <div v-for="(mod, i) in modsByRarity" :key="mod.id">
    <div v-if="rolls.length" class="alert alert-dark mb-3">
      <div class="text-light row">
        <div class="col-6 col-sm-3">
          <div class="bg-white rounded">
            <button class="w-100 btn-sm btn btn-outline-secondary fw-bold">
              {{ mod.label }}
            </button>
          </div>
        </div>
        <div class="col-6 col-sm-3 text-center">
          <span class="badge bg-secondary"
            >{{ rollsByRarity[i].total
            }}<span v-show="mod.percent">%</span></span
          ><br />
          <span class="badge bg-white text-light"
            >{{ rollsByRarity[i].base
            }}<span v-show="mod.percent">%</span></span
          >
        </div>
        <div class="col-12 col-sm-6">
          <div class="d-flex">
            <div class="me-3">
              <span class="badge bg-secondary"
                >{{ mod.min }}<span v-show="mod.percent">%</span></span
              >
              <span class="badge bg-white text-light"
                >{{ mod.minBase }}<span v-show="mod.percent">%</span></span
              >
            </div>
            <input
              type="range"
              class="form-range"
              :min="mod.min"
              :max="mod.max"
              step="0.1"
              :value="rollsByRarity[i]"
              disabled
              id="customRange3"
            />
            <div class="ms-3">
              <span class="badge bg-secondary"
                >{{ mod.max }}<span v-show="mod.percent">%</span></span
              >
              <span class="badge bg-white text-light"
                >{{ mod.maxBase }}<span v-show="mod.percent">%</span></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <pre class="text-start d-none">{{ modsJson }}</pre>
  </div>
</template>

<script>
//import FloatInput from "@/components/FloatInput";
import TypeSelect from "@/components/TypeSelect";
import RaritySelect from "@/components/RaritySelect";
import TierSelect from "@/components/TierSelect";

import modsJson from "@/data/mods";
/*
To show action rare, epic, legendary ONLY chance, subtract out the chance for the 'level up'
*/
export default {
  name: "Main",
  components: {
    TypeSelect,
    RaritySelect,
    TierSelect
  },
  data() {
    return {
      modsJson: modsJson,
      type: "battling",
      rarity: "rare",
      tier: 1,
      rolls: []
    };
  },
  computed: {
    modsByType() {
      let mods = [...this.modsJson];
      let filteredMods = mods.filter(
        (mod) => mod.type == this.type || mod.type == "both"
      );

      return filteredMods;
    },
    rarityMod() {
      switch (this.rarity) {
        case "epic":
          return 1.15;

        case "legendary":
          return 1.35;

        case "mythic":
          return 1.6;
      }

      return 1; // rare
    },
    modsByRarity() {
      let mods = [...this.modsByType];
      let newMods = mods.map((_mod) => {
        let mod = { ..._mod };
        mod.minBase = mod.min;
        mod.maxBase = mod.max;
        mod.min = mod.minBase * this.rarityMod * this.tier;
        mod.max = mod.maxBase * this.rarityMod * this.tier;

        mod.minBase = Math.round(mod.minBase * 100) / 100;
        mod.maxBase = Math.round(mod.maxBase * 100) / 100;
        mod.min = Math.round(mod.min * 100) / 100;
        mod.max = Math.round(mod.max * 100) / 100;

        return mod;
      });

      return newMods;
    },
    rollsByRarity() {
      let rolls = [...this.rolls];
      let newRolls = rolls.map((_roll) => {
        let roll = _roll * this.rarityMod * this.tier;
        roll = Math.round(roll * 100) / 100;
        return {
          total: roll,
          base: _roll
        };
      });

      return newRolls;
    }
  },
  methods: {
    setType(value) {
      this.type = value;
      this.rolls = [];
    },
    setRarity(value) {
      this.rarity = value;
    },
    setTier(value) {
      this.tier = value;
    },
    rollMods() {
      this.rolls = this.modsByType.map((mod) => {
        let max = mod.max * 10;
        let min = mod.min * 10;
        let roll = Math.floor(Math.random() * (max - min + 1) + min);

        roll /= 10;
        if (mod.step == 1) {
          roll = Math.round(roll);
        }

        return roll;
      });
    },
    generateTrinket() {},
    setSkillLevel(value) {
      this.skillLevel = value;
    },
    setClanDropTotem(value) {
      this.clanDropTotem = value;
    },
    setPremiumDrop(value) {
      this.premiumDrop = value;
    },
    setTreasureHunterLevel(value) {
      this.treasureHunterLevel = value;
    },
    addTrinket() {
      this.trinkets.push({ resourceBase: 0, resourceBoost: 0, dropBoost: 0 }); // useless trinket
    },
    updateTrinket(index, value) {
      console.log("Trinket Update", index, value);
      this.trinkets[index] = value; //object, { resourceBase, resourceBoost, dropBoost }
    },
    removeTrinket(index) {
      //slice out trinket at index
      console.log("Remove Trinket", index);
      this.trinkets.splice(index, 1);
    },
    setActions(value) {
      this.actions = value;
    }
  }
};
// "ActionsForMythicDrop/(((EpicDrop%/MythicDrop%)*EpicEssense)+((LegendaryDrop%/MythicDrop%)*LegendaryEssense)+((MythicDrop%/MythicDrop%)*MythicEssense))"
</script>
