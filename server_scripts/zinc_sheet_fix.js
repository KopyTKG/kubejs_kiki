
ServerEvents.recipes((event) => { 
    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_dd:inductive_mechanism').withChance(130.0),
            Item.of('createdeco:zinc_sheet').withChance(8.0),
     		Item.of('create:andesite_alloy').withChance(8.0),
    		Item.of('create:cogwheel').withChance(5.0),
    		Item.of('create:shaft').withChance(2.0),
    		Item.of('create:crushed_zinc_ore').withChance(2.0),
    		Item.of('2x create:zinc_nugget').withChance(2.0),
    		'minecraft:iron_ingot',
    		'minecraft:clock'
        ],
        'createdeco:zinc_sheet',
        [
        event.recipes.createDeploying('create_dd:crafting_inductive_mechanism2', ['create_dd:crafting_inductive_mechanism2', 'create:cogwheel']),
		event.recipes.createDeploying('create_dd:crafting_inductive_mechanism2', ['create_dd:crafting_inductive_mechanism2', 'create:cogwheel']),
		event.recipes.createDeploying('create_dd:crafting_inductive_mechanism2', ['create_dd:crafting_inductive_mechanism2', 'create:zinc_nugget']),
 		event.recipes.createDeploying('create_dd:crafting_inductive_mechanism2', ['create_dd:crafting_inductive_mechanism2', 'minecraft:slime_ball'])
        ]
    ).transitionalItem('create_dd:crafting_inductive_mechanism2').loops(2)
})