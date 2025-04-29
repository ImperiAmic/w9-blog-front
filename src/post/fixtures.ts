import { Post, PostFormData } from "./types";

const chickenAndRice: Post = {
  id: "post1",
  publishDate: new Date("2025-04-01T08:30:00Z"),
  author: "Chef Emily",
  title: "Chicken and Rice",
  imageUrl: "https://example.com/images/chicken-rice.jpg",
  imageAlt: "Chicken and rice cooked together in a rice cooker",
  tags: ["rice cooker", "easy meals", "chicken"],
  content: `Ingredients:
- 2 cups rice
- 2 chicken thighs
- 2 1/2 cups chicken broth
- 1 onion, chopped
- 1 clove garlic, minced
- Salt and pepper to taste

Instructions:
1. Rinse the rice and place it in the rice cooker.
2. Season the chicken thighs with salt and pepper.
3. Place chicken on top of the rice.
4. Add chopped onions, garlic, and pour in the chicken broth.
5. Set the to 'Cook'.
6. Once the cooker switches to 'Warm', let it rest for 10 minutes.
7. Fluff rice and serve hot.`,
};

const fluffyPancakes: Post = {
  id: "post2",
  publishDate: new Date("2025-04-02T09:00:00Z"),
  author: "Baker Sam",
  title: "Fluffy Pancakes",
  imageUrl: "https://example.com/images/rice-cooker-pancakes.jpg",
  imageAlt: "Thick pancakes made in a rice cooker",
  tags: ["dessert", "breakfast", "rice cooker"],
  content: `Ingredients:
- 1 1/2 cups pancake mix
- 1 egg
- 3/4 cup milk
- 2 tbsp sugar
- 1 tsp vanilla extract

Instructions:
1. In a bowl, mix pancake mix, egg, milk, sugar, and vanilla.
2. Grease the bowl with butter or oil.
3. Pour the batter into the rice cooker.
4. Press 'Cook'. When it switches to 'Warm', check doneness with a toothpick.
5. If needed, press 'Cook' again for a few minutes.
6. Let cool slightly, then slice and serve.`,
};

const macAndCheese: Post = {
  id: "post3",
  publishDate: new Date("2025-04-03T10:15:00Z"),
  author: "Chef Tony",
  title: "Mac and Cheese",
  imageUrl: "https://example.com/images/rice-cooker-mac.jpg",
  imageAlt: "Creamy mac and cheese in a bowl",
  tags: ["comfort food", "easy meals", "rice cooker"],
  content: `Ingredients:
- 2 cups elbow macaroni
- 4 cups water
- 1 cup milk
- 2 cups shredded cheddar cheese
- Salt and pepper to taste

Instructions:
1. Add macaroni and water to the rice cooker.
2. Cook until pasta is tender (about one cycle).
3. Drain excess water if needed.
4. Stir in milk and cheese.
5. Cook for another 5-10 minutes until creamy.
6. Season with salt and pepper, then serve.`,
};

const quinoa: Post = {
  id: "post4",
  publishDate: new Date("2025-04-04T11:00:00Z"),
  author: "Nutritionist Amy",
  title: "Quinoa",
  imageUrl: "https://example.com/images/quinoa.jpg",
  imageAlt: "Cooked quinoa with vegetables",
  tags: ["healthy", "meal prep", "rice cooker"],
  content: `Ingredients:
- 1 cup quinoa
- 2 cups water or broth
- 1/2 tsp salt

Instructions:
1. Rinse quinoa under cold water.
2. Place quinoa, water (or broth), and salt into the rice cooker.
3. Press 'Cook' and let it finish.
4. Once done, let it steam for 5 minutes.
5. Fluff with a fork and serve.`,
};

const vegetableCurry: Post = {
  id: "post5",
  publishDate: new Date("2025-04-05T12:45:00Z"),
  author: "Chef Priya",
  title: "Rice Cooker Vegetable Curry",
  imageUrl: "https://example.com/images/vegetable-curry.jpg",
  imageAlt: "Hearty vegetable curry",
  tags: ["vegan", "rice cooker", "easy meals"],
  content: `Ingredients:
- 2 cups mixed vegetables
- 1 cup coconut milk
- 1 cup vegetable broth
- 2 tbsp curry powder
- 1 onion, diced
- 2 cloves garlic, minced
- Salt to taste

Instructions:
1. Add onion and garlic to the rice cooker.
2. Add vegetables, coconut milk, broth, and curry powder.
3. Stir everything together.
4. Set rice cooker to 'Cook'.
5. Cook until vegetables are tender.
6. Add salt to taste and serve over rice.`,
};

export { chickenAndRice, fluffyPancakes, macAndCheese, quinoa, vegetableCurry };

export const costillitasLekuePostFormData: PostFormData = {
  author: "Newtown Guy",
  content:
    "Well, look, you take some pork ribs from Condis, a green pepper, and spring garlic. Put it in the green thing and microwave on full power for 8 minutes. And that's fucking it. Don't forget to season to taste.",
  imageUrl: "http://www.lekue.cat/costillitas.png",
  imageAlt:
    "Close-up of pork ribs with green pepper and spring garlic in the Lekué pot",
  tags: ["lekue", "microwave"],
  title: "Pork ribs with green pepper and spring garlic",
  publishDate: new Date("2025-04-05T12:45:00Z"),
};
