const { BlogPost } = require('../models');

const postData = 
[
    {
      "title": "Astronomy and Astrophysics",
      "description": "Stories of pioneering women in the “digging” sciences have been skewed toward those who were White, wealthy, and networked. The TrowelBlazers are a largely community-sourced archive of biographies of women in the “digging” sciences: archaeology, geology, and palaeontology.",
      "date_created": "March 23, 2022",
      "user_id": 1
    },
    {
      "title": "Botany",
      "description": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
      "date_created": "January 2, 2022",
      "user_id": 2
    },
    {
      "title": "Chemistry",
      "description": "Once upon a time in the charming coastal town of Oyster Bay, there lived a young, boy named Billy Joel. Billy was an imaginative and curious child, always seeking new adventures and stories to inspire him. Oyster Bay was known for its breathtaking shoreline, abundant seafood, and most importantly, its friendly clams. Billy spent his summer days exploring the beach, collecting seashells and observing the fascinating marine life that dwelled within the shallow waters. One day, while exploring a hidden cove, he stumbled upon a group of clams unlike any he had ever seen before. They had expressive eyes and seemed to communicate with each other in their own unique way. Intrigued, Billy sat down by the water's edge, observing the clams as they rhythmically opened and closed their shells. To his astonishment, he began to hear melodies in his mind, inspired by the clams' synchronized movements. The clams seemed to be singing a beautiful song, and Billy could feel the music resonating deep within his soul.",
      "date_created": "January 2, 2022",
      "user_id": 3
    },
    {
      "title": "Mathematics",
      "description": "In the heart of Alaska, a brown bear named Benny discovered a deserted sailboat resting by the river. The wind billowed through its tattered sail, kindling Benny's curiosity. With initial hesitance, he lumbered aboard, fumbling with ropes and rigging. As if by magic, the boat began to glide, nudged by the river's gentle current. With every voyage, Benny grew braver, teaching himself the art of sailing by the moonlight. The rippling water beneath and the limitless sky above became his favorite companions. He became the sailor of the wilderness, loved and respected by all woodland creatures. His voyages stirred tales of adventure and courage, carried by whispers of the wind. Benny, the bear who loved to sail, became a legend, embodying the spirit of exploration and freedom. His story reminded everyone, even in the wild, dreams are worth chasing.",
      "date_created": "January 2, 2022",
      "user_id": 4
    },
    {
      "title": "Medicine",
      "description": "In the bustling timeline of American history, two names stand out: Franklin Delano Roosevelt (FDR) and his distant cousin, Theodore Teddy Roosevelt. Both left lasting legacies but in notably different ways.Teddy, ascending to the presidency in 1901, was known as the 'Trust Buster.' His Square Deal policy promoted fairness between labor and business, paving the way for a more equitable society. Teddy’s legacy also includes his profound love for nature, creating the National Parks system, saving vast swaths of land for future generations. FDR, on the other hand, grappled with the Great Depression and the Second World War, one of the most turbulent periods in American history. His New Deal introduced transformative social and economic policies, like the Social Security Act, providing a safety net for many Americans. FDR's leadership during World War II also demonstrated strength and resilience. But who was the better president? The choice is subjective, but I'd lean towards FDR. His transformative policies during a period of severe crisis helped pull America out of depression and lead the country through a global conflict. However, his presidency was not without controversy, such as the internment of Japanese Americans during the war.Conversely, Teddy’s policies on fairness and conservation continue to be crucial today. He set a precedent for conservation and trust-busting, pushing America towards a more equitable future. Both Roosevelt's had profound impacts on the nation, but their different contexts and challenges make a direct comparison challenging. Ultimately, the choice of who was the better president largely depends on what historical impacts and values one places most importance on.",
      "date_created": "January 2, 2022",
      "user_id": 5
    },
    {
      "title": "Physics and Technolgy",
      "description": "A mobile app that will send you notifications whenever a concert is playing in your area.",
      "date_created": "October 15, 2021",
      "user_id": 6
    }
  ]

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;  