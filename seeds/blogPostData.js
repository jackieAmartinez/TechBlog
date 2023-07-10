const { BlogPost } = require('../models');

const postData = 
[
    {
      "title": "Astronomy and Astrophysics",
      "description": "Stories of pioneering women in the “digging” sciences have been skewed toward those who were White, wealthy, and networked. The TrowelBlazers are a largely community-sourced archive of biographies of women in the “digging” sciences: archaeology, geology, and palaeontology.",
      // "date_created": "March 23, 2022",
      // "user_id": 1
    },
    {
      "title": "Botany",
      "description": "It’s the turn of the 19th century and botany is the only socially acceptable science for women to pursue. After all, both women and plants are “delicate,” so naturally botany is “fashionable.” Women took this opportunity to shape the field of botany within a highly whitewashed and male-dominated world of science. Still, even if they had the same professional training as male botanists, women were labeled as “amateurs” or “connoisseurs,” and their history was largely erased.",
      // "date_created": "January 2, 2022",
      // "user_id": 2
    },
    {
      "title": "Chemistry",
      "description": "Women of color are under-represented in science, with a gap particularly evident in the fundamental sciences and technology. People of color are facing several issues in pursuing higher education, including social, economic, and cultural exclusions, which results in few people of color in academics. A study by Gretter et al. (1) revealed that the lack of know-how in computations and coding is dramatically affecting minority students, resulting in African Americans making up less than 9% of the science and engineering workforce. These difficulties can be even more severe for women of color, a minority within the minority, who also are experiencing the difficulties that women face in academia.",
      // "date_created": "January 2, 2022",
      // "user_id": 3
    },
    {
      "title": "Mathematics",
      "description": "Many important women of color made groundbreaking discoveries in science, technology, engineering, and mathematics. These women were experts in their fields and contributed to the success of their organizations and institutions. They were educated professionals who defied constraints, rose to the top of their organizations, and accomplished great things. In recent years, their stories have been uncovered, and many women of color are now being acknowledged for their contributions to STEM to the point where organizations are encouraging women of color to pursue STEM careers. Annual events such as the U.S. Women of Color STEM Conference help them navigate their careers and find networking opportunities. Universities are also encouraging women of color to pursue STEM majors and careers.",
      // "date_created": "January 2, 2022",
      // "user_id": 4
    },
    {
      "title": "Medicine",
      "description": "Throughout history, Black women in medicine have faced double discrimination based on both race and sex. They have persevered to achieve great things in medicine, research, advocacy, and public health. These women persevered against tremendous racial and political odds to become established pillars in the medical field. Continue reading to learn a bit more about these amazing women as well as the diversity landscape in healthcare.",
      // "date_created": "January 2, 2022",
      // "user_id": 5
    },
    {
      "title": "Physics and Technolgy",
      "description": "Women of color who seek degrees in science are constantly and unavoidably aware that that they are seen as “different.” They are typically distinguished by gender, race, and ethnicity, facets of the self that are much more salient for them than for their white male counterparts. Work in the lab or on a challenging problem set might allow them to forget these perceived differences temporarily, but they are likely to be reminded of their extraordinary status by both blatant and subtle challenges to their competence and membership in the scientific community.",
      // "date_created": "October 15, 2021",
      // "user_id": 6
    }
  ]

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;  