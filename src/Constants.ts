/*
 * Model Resources
 * */
export const COLLISION_SCENE_URL = new URL(
  "./assets/models/scene_collision.glb",
  import.meta.url
).href;
export const STATIC_SCENE_URL = new URL(
  "./assets/models/scene_desk_obj.glb",
  import.meta.url
).href;

/*
 * Texture Resources
 * */
export const BOARD_TEXTURES = [
  new URL("./assets/boards/1.jpg", import.meta.url).href,
  new URL("./assets/boards/2.jpg", import.meta.url).href,
  new URL("./assets/boards/3.jpg", import.meta.url).href,
  new URL("./assets/boards/4.jpg", import.meta.url).href,
  new URL("./assets/boards/5.jpg", import.meta.url).href,
  new URL("./assets/boards/6.jpg", import.meta.url).href,
  new URL("./assets/boards/7.jpg", import.meta.url).href,
  new URL("./assets/boards/8.jpg", import.meta.url).href,
  new URL("./assets/boards/9.jpg", import.meta.url).href,
  new URL("./assets/boards/10.jpg", import.meta.url).href,
];

/*
 * Audio Resources
 * */
export const AUDIO_URL = new URL("./assets/audio/music.mp3", import.meta.url)
  .href;

/*
 * Intro
 * */
export const BOARDS_INFO: Record<string, { title: string; describe: string }> =
  {
    1: {
      title: "《Wu Kong》",
      describe: `
	  Wukong, my sister's beloved golden retriever, is the heart and soul of my painting.
    With his gentle demeanor and kind spirit, Wukong has a unique way of spreading warmth and joy to everyone around him. 
    Through this artwork, I hope to share that same sense of tranquility and happiness that Wukong brings to our lives. 
    May it bring a smile to your face and peace to your heart.
		`,
    },
    3: {
      title: "《Whispering Waves》",
      describe: `
		"Whispering Waves" is an oil painting that tries to capture the serene beauty and rhythmic motion of the sea. 
    Through brushstrokes and a harmonious palette, express the gentle yet powerful dance of the waves, evoking a sense of peace and tranquility. 
    I hope it can invite viewers to lose themselves in the soothing whispers of the ocean, offering a moment of calm and reflection amidst the ebb and flow of life.
		`,
    },
    2: {
      title: "《First Impression Of Auckland》",
      describe: `
		When I first arrived in New Zealand, I stood at the harbor pier, captivated by the view. 
    Gazing at the Sky Tower, its impressive structure etched into my memory. 
    This remains my most vivid first impression of Auckland: the Sky Tower majestically rising along the coastline, silhouetted against the vast sea horizon. 
    The scene was a perfect blend of urban elegance and natural beauty, defining my initial experience of this city.
		`,
    },
    4: {
      title: "《Fuji Mountain》",
      describe: `
		Mount Fuji, or Fuji-san, is Japan's tallest and most iconic mountain,located on Honshu Island, it is an active stratovolcano surrounded by lake. 
    Its perfectly symmetrical cone is a well-known symbol of Japan, often depicted in art and photography. 
    I drew this painting to share the beauty and majesty of Mount Fuji,
		`,
    },
    5: {
      title: "《Sheep Flock》",
      describe: `
		New Zealand is a country renowned for having more sheep than people. The oil painting landscapes, adorned with grazing sheep, vividly capture the heart of the country's culture. These picturesque scenes, with green hills and flocks of sheep peacefully grazing, bring to life the serene beauty and timeless charm of New Zealand's rural countryside. 
		`,
    },
    6: {
      title: "《Bear's portrait with bandaged ear》",
      describe: `
		Van Gogh's painting "Self-Portrait with Bandaged Ear" is one of his most famous self-portraits, depicting Van Gogh after he cut off his own ear. 
    In the painting, Van Gogh is wearing a wool hat and has a thick bandage wrapped around his ear. 
    I painted a little bear dressed in a similar manner, with a wool hat and bandaged ear, as a warm tribute to this great artist.
		`,
    },
    7: {
      title: "《Golden Wheat Field》",
      describe: `
		Golden fields beneath the setting sun,
    Shimmering in warm light, day's work done.
    Golden wheat sways in the gentle breeze,
    An undulating sea, calm and at ease.

    Tranquility and harmony fill the air,
    Nature's beauty and abundance rare.
    In this golden glow, we find our peace,
    A timeless moment where worries cease.
		`,
    },
    8: {
      title: "《Pink Sky》",
      describe: `
		"Pink Sky" is an oil painting which is trying to capture the ethereal beauty of a sky bathed in shades of pink during twilight. 
    The soft, pastel hues blend seamlessly, creating a sweetness and innocence atmosphere. 
		`,
    },
    9: {
      title: "《Pink Dolphin》",
      describe: `
		In waters clear, a gentle hue,
    A pink dolphin swims, a dream come true.
    With rosy skin that glistens bright,
    It dances in the morning light.
		`,
    },
    10: {
      title: "《Balance》",
      describe: `
		The theme of this painting is balance, capturing the delicate harmony between various elements of the scene. 
    It shows the bright moon suspended above the sea, mirrored by its reflection in the tranquil water below. 
    Additionally, there is a meticulous equilibrium between the shadows on the left and right, creating a symmetrical and serene composition. 
    This interplay of light and dark, along with the reflection, embodies a sense of tranquility  balance, inviting the viewer to contemplate the natural harmony of the world.
		`,
    },
  };

/*
 * Computer Iframe SRC
 * */
export const IFRAME_SRC = new URL("/universe/index.html", import.meta.url).href;

/*
 * Events
 * */
export const ON_LOAD_PROGRESS = "on-load-progress";
export const ON_LOAD_MODEL_FINISH = "on-load-model-finish";
export const ON_CLICK_RAY_CAST = "on-click-ray-cast";
export const ON_SHOW_TOOLTIP = "on-show-tooltip";
export const ON_HIDE_TOOLTIP = "on-hide-tooltip";
export const ON_KEY_DOWN = "on-key-down";
export const ON_KEY_UP = "on-key-up";
export const ON_ENTER_APP = "on-enter-app";
