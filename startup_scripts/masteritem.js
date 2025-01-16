StartupEvents.registry("item", (e) => {
  e.create("master_craft_item")
    .displayName("Master Craft Item")
    .fireResistant(true);
});

ItemEvents.modification((e) => { 
  e.modify('master_craft_item', item => { 
    item.craftingRemainder = item.of('master_craft_item').item;
  })
})
