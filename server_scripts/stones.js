ServerEvents.recipes(event => { 
    event.shaped(
        'minecraft:andesite',
        ["AB", "BA"],
        {
            A: "minecraft:diorite",
            B: "minecraft:cobblestone"
        }
    ).id("kubejs:andesite_manual_only")
})