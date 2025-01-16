function GetLevel(per) {
  return (81000 * per) / 100;
}


ServerEvents.recipes((event) => {
  function dragonEgg(input) {
    event
      .shaped("minecraft:dragon_egg", ["A A", "ABA", "CCC"], {
        A: input,
        B: "kubejs:master_craft_item",
        C: "minecraft:bedrock",
      })
      .damageIngredient("kubejs:master_craft_item", "0");
  }

  dragonEgg("minecraft:golden_apple");
  dragonEgg("minecraft:enchanted_golden_apple");


  event.recipes.create
    .mixing(Item.of("minecraft:blaze_spawn_egg").withChance(1), [
      "minecraft:blaze_powder",
      "create:experience_nugget",
      "minecraft:egg",
      {
        fluid: "create:potion",
        nbt: { Potion: "minecraft:healing" },
        amount: GetLevel(40),
      },
      Fluid.water(GetLevel(80)),
    ])
    .superheated();

});
