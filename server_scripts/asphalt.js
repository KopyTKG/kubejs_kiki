ServerEvents.recipes(event => {
    event.recipes.create.crushing(
        [
            Item.of("promenade:asphalt").withChance(0.8),
            Item.of("minecraft:gravel").withChance(0.5),
            Item.of("minecraft:flint").withChance(0.3)

        ],
        "minecraft:deepslate"
    )
    event.recipes.create.crushing(
        [
            Item.of("minecraft:gravel").withChance(1),
            Item.of("minecraft:gravel").withChance(0.5),
            Item.of("minecraft:flint").withChance(0.3)

        ],
        "promenade:asphalt"
    )
})