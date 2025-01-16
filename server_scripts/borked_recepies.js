ServerEvents.recipes((event) => {
    event.remove({ id: "minecraft:diorite" });
    event.remove({ id: "create_dd:crafting/leather_from_block" })
    event.remove({ id: 'minecraft:andesite' })
    event.remove({ id: 'minecraft:granite' })
    event.remove({ id: "create_dd:superheating/diamond_shard"})
})
