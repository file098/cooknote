<template>
  <div class="procedure">
    <ol>
      <li v-for="(step, index) in steps" :key="index">
        {{ step }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Procedure",
  data() {
    return {
      steps: [
        "Preheat the oven to 350°F (175°C).",
        "Mix flour, sugar, and eggs in a bowl.",
        "Add milk and butter, and stir until smooth.",
        "Pour the mixture into a baking dish.",
        "Bake for 30 minutes or until golden brown.",
        "Let it cool before serving.",
      ],
    };
  },
};
</script>
