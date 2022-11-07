<template>
  <div class="row">
    <div class="col-3 h4 p-3 text-end">Type</div>
    <div class="col">
      <TypeSelect @setType="setType($event)" />
    </div>
  </div>
  <div class="row">
    <div class="col-3 h4 p-3 text-end">Rarity</div>
    <div class="col">
      <RaritySelect @setRarity="setRarity($event)" />
    </div>
  </div>
  <div class="row">
    <div class="col-3 h4 p-3 text-end">Tier</div>
    <div class="col">
      <TierSelect
        @setTier="setTier($event)"
        :limit="rarityTierLimit"
        :updateValue="tier"
      />
    </div>
  </div>

  <div class="row mb-3">
    <div class="col">
      <button class="w-100 btn btn-primary btn-lg fw-bold" @click="rollMods()">
        Generate New
      </button>
    </div>
    <div class="col">
      <button class="w-100 btn btn-success btn-lg fw-bold disabled">
        Reroll
      </button>
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col">
      <button class="w-100 btn btn-primary btn-lg fw-bold" @click="rollMods()">
        Generate New
      </button>
    </div>
    <div class="col">
      <button class="w-100 btn btn-success btn-lg fw-bold disabled">
        Reroll
      </button>
    </div>
  </div>

  <div v-if="rolls.length">
    <ModBar
      v-for="(mod, i) in modsByRarity"
      :key="mod.id"
      v-bind="mod"
      :rollTotal="rollsByRarity[i].total"
      :rollBase="rollsByRarity[i].base"
    />
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
import ModBar from "@/components/ModBar";

import modsJson from "@/data/mods";
/*
To show action rare, epic, legendary ONLY chance, subtract out the chance for the 'level up'
*/
export default {
  name: "Main",
  components: {
    TypeSelect,
    RaritySelect,
    TierSelect,
    ModBar
  },
  data() {
    return {
      modsJson: modsJson,
      type: "battling", // Settings
      rarity: "rare", // Settings
      tier: 1, // Settings
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
    rarityTierLimit() {
      switch (this.rarity) {
        case "epic":
          return 8;

        case "legendary":
          return 9;

        case "mythic":
          return 10;
      }

      return 7; // rare
    },
    rarityModLimit() {
      switch (this.rarity) {
        case "epic":
          return 4;

        case "legendary":
          return 5;

        case "mythic":
          return 6;
      }

      return 3; // rare
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

      //
      // Set the tier down if above the rarity cap
      //
      if (this.tier > this.rarityTierLimit) {
        this.tier = this.rarityTierLimit;
      }
    },
    setTier(value) {
      console.log("TIER", value);
      this.tier = value;
    },
    rollMods() {
      this.modsJson = this.shuffle(this.modsJson);
      let _rolls = [...this.modsByType];
      this.rolls = _rolls.map((mod) => {
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
    },
    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }
};
</script>