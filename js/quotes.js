/**
 * ============================================
 * GOOD VIBES ONLY — Quote Database
 * 1450+ Curated Positive Quotes
 * 49 Categories: motivation, mindfulness, success, gratitude, resilience, happiness,
 *                love, wisdom, courage, growth, peace, creativity,
 *                friendship, confidence, adventure, kindness,
 *                serenity, magic, passion, nature, dreams, joy,
 *                hope, humor, balance, inspiration, healing, abundance,
 *                unity, transformation, empowerment, wellness, positivity,
 *                mindset, energy, forgiveness, authenticity, new_beginnings,
 *                focus, self_love, harmony, zen, strength, radiance,
 *                purpose, clarity, vitality, compassion, renewal
 * ============================================
 */

const QUOTES_DB = [
    {
        id: 1,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "motivation",
        tags: ["passion", "work", "purpose"]
    },
{
        id: 2,
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "motivation",
        tags: ["belief", "confidence", "mindset"]
    },
{
        id: 3,
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "motivation",
        tags: ["success", "courage", "persistence"]
    },
{
        id: 4,
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
        category: "motivation",
        tags: ["time", "authenticity", "life"]
    },
{
        id: 5,
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: "motivation",
        tags: ["dreams", "future", "belief"]
    },
{
        id: 6,
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        category: "motivation",
        tags: ["persistence", "progress", "patience"]
    },
{
        id: 7,
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        category: "motivation",
        tags: ["goals", "dreams", "age"]
    },
{
        id: 8,
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair",
        category: "motivation",
        tags: ["fear", "courage", "goals"]
    },
{
        id: 9,
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        category: "motivation",
        tags: ["action", "beginning", "progress"]
    },
{
        id: 10,
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        category: "motivation",
        tags: ["persistence", "time", "action"]
    },
{
        id: 11,
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson",
        category: "motivation",
        tags: ["inner-strength", "potential", "power"]
    },
{
        id: 12,
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
        category: "motivation",
        tags: ["action", "timing", "growth"]
    },
{
        id: 13,
        text: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar",
        category: "motivation",
        tags: ["action", "beginning", "greatness"]
    },
{
        id: 14,
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        category: "motivation",
        tags: ["journey", "action", "possibility"]
    },
{
        id: 15,
        text: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown",
        category: "motivation",
        tags: ["self-reliance", "discipline", "effort"]
    },
{
        id: 16,
        text: "Great things never come from comfort zones.",
        author: "Unknown",
        category: "motivation",
        tags: ["comfort-zone", "growth", "challenge"]
    },
{
        id: 17,
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan",
        category: "motivation",
        tags: ["dreams", "courage", "ambition"]
    },
{
        id: 18,
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        category: "motivation",
        tags: ["focus", "work", "success"]
    },
{
        id: 19,
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
        category: "motivation",
        tags: ["work", "luck", "effort"]
    },
{
        id: 20,
        text: "Don't limit your challenges. Challenge your limits.",
        author: "Unknown",
        category: "motivation",
        tags: ["limits", "challenges", "growth"]
    },
{
        id: 21,
        text: "Your limitation—it's only your imagination.",
        author: "Unknown",
        category: "motivation",
        tags: ["imagination", "limits", "mindset"]
    },
{
        id: 22,
        text: "Strive for progress, not perfection.",
        author: "Unknown",
        category: "motivation",
        tags: ["progress", "perfection", "growth"]
    },
{
        id: 23,
        text: "Wake up with determination. Go to bed with satisfaction.",
        author: "Unknown",
        category: "motivation",
        tags: ["determination", "satisfaction", "daily"]
    },
{
        id: 24,
        text: "Do something today that your future self will thank you for.",
        author: "Unknown",
        category: "motivation",
        tags: ["future", "action", "planning"]
    },
{
        id: 25,
        text: "Little things make big days.",
        author: "Unknown",
        category: "motivation",
        tags: ["small-things", "impact", "daily"]
    },
{
        id: 26,
        text: "It's always too early to quit.",
        author: "Norman Vincent Peale",
        category: "motivation",
        tags: ["persistence", "quitting", "never-give-up"]
    },
{
        id: 27,
        text: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke",
        category: "motivation",
        tags: ["hard-work", "talent", "effort"]
    },
{
        id: 28,
        text: "A year from now you'll wish you had started today.",
        author: "Karen Lamb",
        category: "motivation",
        tags: ["regret", "action", "future"]
    },
{
        id: 29,
        text: "Success is the sum of small efforts repeated day in and day out.",
        author: "Robert Collier",
        category: "motivation",
        tags: ["consistency", "small-efforts", "daily-habits"]
    },
{
        id: 30,
        text: "Make each day your masterpiece.",
        author: "John Wooden",
        category: "motivation",
        tags: ["masterpiece", "daily", "excellence"]
    },
{
        id: 31,
        text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
        author: "Thich Nhat Hanh",
        category: "mindfulness",
        tags: ["present-moment", "joy", "attention"]
    },
{
        id: 32,
        text: "Wherever you are, be all there.",
        author: "Jim Elliot",
        category: "mindfulness",
        tags: ["presence", "awareness", "attention"]
    },
{
        id: 33,
        text: "Mindfulness is the path to the present moment. It's about being awake to life.",
        author: "Jon Kabat-Zinn",
        category: "mindfulness",
        tags: ["mindfulness", "present-moment", "awareness"]
    },
{
        id: 34,
        text: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
        author: "Thich Nhat Hanh",
        category: "mindfulness",
        tags: ["breathing", "feelings", "anchor"]
    },
{
        id: 35,
        text: "The quieter you become, the more you can hear.",
        author: "Ram Dass",
        category: "mindfulness",
        tags: ["silence", "listening", "inner-voice"]
    },
{
        id: 36,
        text: "In today's rush, we all think too much — seek too little — want too much — forget to be happy.",
        author: "Charlie Chaplin",
        category: "mindfulness",
        tags: ["simplify", "happiness", "balance"]
    },
{
        id: 37,
        text: "Almost everything will work again if you unplug it for a few minutes, including you.",
        author: "Anne Lamott",
        category: "mindfulness",
        tags: ["rest", "unplug", "recharge"]
    },
{
        id: 38,
        text: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
        author: "Oprah Winfrey",
        category: "mindfulness",
        tags: ["breathe", "let-go", "present-moment"]
    },
{
        id: 39,
        text: "The thing about meditation is: You become more and more you.",
        author: "David Lynch",
        category: "mindfulness",
        tags: ["meditation", "authenticity", "self-discovery"]
    },
{
        id: 40,
        text: "Be happy in the moment, that's enough. Each moment is all we need, not more.",
        author: "Mother Teresa",
        category: "mindfulness",
        tags: ["moment", "happiness", "enough"]
    },
{
        id: 41,
        text: "Do less. Be more. Notice everything. Judge nothing.",
        author: "Unknown",
        category: "mindfulness",
        tags: ["minimalism", "awareness", "non-judgment"]
    },
{
        id: 42,
        text: "You cannot control the waves, but you can learn how to surf.",
        author: "Jon Kabat-Zinn",
        category: "mindfulness",
        tags: ["control", "adaptation", "flow"]
    },
{
        id: 44,
        text: "Surrender to what is. Say 'yes' to life — and see how life starts suddenly to start working for you rather than against you.",
        author: "Eckhart Tolle",
        category: "mindfulness",
        tags: ["surrender", "acceptance", "flow"]
    },
{
        id: 45,
        text: "Within you, there is a stillness and a sanctuary to which you can retreat at any time.",
        author: "Hermann Hesse",
        category: "mindfulness",
        tags: ["inner-peace", "sanctuary", "stillness"]
    },
{
        id: 46,
        text: "Look at everything as though you were seeing it either for the first or last time.",
        author: "Betty Smith",
        category: "mindfulness",
        tags: ["fresh-perspective", "gratitude", "presence"]
    },
{
        id: 47,
        text: "The mind is like water. When it's turbulent, it's difficult to see. When it's calm, everything becomes clear.",
        author: "Prasad Mahes",
        category: "mindfulness",
        tags: ["mind", "clarity", "calm"]
    },
{
        id: 48,
        text: "Take care of your body. It's the only place you have to live.",
        author: "Jim Rohn",
        category: "mindfulness",
        tags: ["body-care", "health", "self-care"]
    },
{
        id: 49,
        text: "If you want to conquer the anxiety of life, live in the moment, live in the breath.",
        author: "Amit Ray",
        category: "mindfulness",
        tags: ["anxiety", "breath", "present-moment"]
    },
{
        id: 50,
        text: "Mindfulness is a way of befriending ourselves and our experience.",
        author: "Jon Kabat-Zinn",
        category: "mindfulness",
        tags: ["self-friendship", "experience", "kindness"]
    },
{
        id: 51,
        text: "Pause. Breathe. You're doing better than you think.",
        author: "Unknown",
        category: "mindfulness",
        tags: ["pause", "breathe", "self-compassion"]
    },
{
        id: 52,
        text: "One conscious breath in and out is a meditation.",
        author: "Eckhart Tolle",
        category: "mindfulness",
        tags: ["breathing", "meditation", "simplicity"]
    },
{
        id: 53,
        text: "Return to the present moment. This is where peace lives.",
        author: "Unknown",
        category: "mindfulness",
        tags: ["present-moment", "peace", "return"]
    },
{
        id: 54,
        text: "When you pay attention to the present moment, you improve the quality of your future.",
        author: "Debbie Ford",
        category: "mindfulness",
        tags: ["present-moment", "future-quality", "attention"]
    },
{
        id: 55,
        text: "The greatest weapon against stress is our ability to choose one thought over another.",
        author: "William James",
        category: "mindfulness",
        tags: ["stress", "choice", "thoughts"]
    },
{
        id: 56,
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer",
        category: "success",
        tags: ["success", "happiness", "perspective"]
    },
{
        id: 58,
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        category: "success",
        tags: ["action", "doing", "start"]
    },
{
        id: 59,
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
        category: "success",
        tags: ["failure", "enthusiasm", "persistence"]
    },
{
        id: 60,
        text: "I attribute my success to this: I never gave or took any excuse.",
        author: "Florence Nightingale",
        category: "success",
        tags: ["no-excuses", "accountability", "determination"]
    },
{
        id: 61,
        text: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee",
        category: "success",
        tags: ["focus", "average-person", "dedication"]
    },
{
        id: 62,
        text: "I failed my way to success.",
        author: "Thomas Edison",
        category: "success",
        tags: ["failure", "learning", "path-to-success"]
    },
{
        id: 64,
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
        category: "success",
        tags: ["greatness", "compromise", "vision"]
    },
{
        id: 65,
        text: "I never dreamed about success, I worked for it.",
        author: "Estée Lauder",
        category: "success",
        tags: ["work-ethic", "dreams-vs-action", "achievement"]
    },
{
        id: 66,
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett",
        category: "success",
        tags: ["impact", "difference", "purpose"]
    },
{
        id: 67,
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
        category: "success",
        tags: ["work-first", "reality", "dictionary"]
    },
{
        id: 68,
        text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author: "Thomas Edison",
        category: "success",
        tags: ["opportunity", "work-ethic", "disguise"]
    },
{
        id: 69,
        text: "Success consists of going from failure to failure without loss of enthusiasm.",
        author: "Winston Churchill",
        category: "success",
        tags: ["failure", "enthusiasm", "resilience"]
    },
{
        id: 70,
        text: "The price of greatness is responsibility.",
        author: "Winston Churchill",
        category: "success",
        tags: ["greatness", "responsibility", "leadership"]
    },
{
        id: 71,
        text: "Success is liking yourself, liking what you do, and liking how you do it.",
        author: "Maya Angelou",
        category: "success",
        tags: ["self-love", "work-satisfaction", "authenticity"]
    },
{
        id: 72,
        text: "Champions keep playing until they get it right.",
        author: "Billie Jean King",
        category: "success",
        tags: ["champion", "persistence", "practice"]
    },
{
        id: 73,
        text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell",
        category: "success",
        tags: ["preparation", "hard-work", "learn-from-failure"]
    },
{
        id: 74,
        text: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton",
        category: "success",
        tags: ["action", "momentum", "movement"]
    },
{
        id: 75,
        text: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs",
        category: "success",
        tags: ["overnight-success", "patience", "time"]
    },
{
        id: 76,
        text: "The difference between who you are and who you want to be is what you do.",
        author: "Unknown",
        category: "success",
        tags: ["action", "identity-transformation", "goals"]
    },
{
        id: 77,
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar",
        category: "success",
        tags: ["goals", "personal-growth", "transformation"]
    },
{
        id: 79,
        text: "Don't measure someone's success by how much money they have, but by how many lives they've touched.",
        author: "Unknown",
        category: "success",
        tags: ["impact", "wealth-vs-purpose", "legacy"]
    },
{
        id: 80,
        text: "Excellence is not a skill. It's an attitude.",
        author: "Ralph Marston",
        category: "success",
        tags: ["excellence", "attitude", "mindset"]
    },
{
        id: 81,
        text: "Gratitude turns what we have into enough.",
        author: "Melody Beattie",
        category: "gratitude",
        tags: ["enough", "abundance", "perspective"]
    },
{
        id: 82,
        text: "Enjoy the little things, for one day you may look back and realize they were the big things.",
        author: "Robert Brault",
        category: "gratitude",
        tags: ["little-things", "big-picture", "appreciation"]
    },
{
        id: 83,
        text: "Gratitude is the fairest blossom which springs from the soul.",
        author: "Henry Ward Beecher",
        category: "gratitude",
        tags: ["blossom", "soul", "beauty"]
    },
{
        id: 84,
        text: "When we focus on our gratitude, the tide of disappointment goes out and the tide of love rushes in.",
        author: "Kristin Armstrong",
        category: "gratitude",
        tags: ["love", "disappointment", "focus-shift"]
    },
{
        id: 85,
        text: "Gratitude unlocks the fullness of life.",
        author: "Melody Beattie",
        category: "gratitude",
        tags: ["fullness-of-life", "unlocking", "abundance"]
    },
{
        id: 86,
        text: "No one who achieves success does so without acknowledging the help of others.",
        author: "Northwest Angle",
        category: "gratitude",
        tags: ["acknowledgment", "others", "teamwork"]
    },
{
        id: 87,
        text: "Gratitude is the memory of the heart.",
        author: "Jean Baptiste Massieu",
        category: "gratitude",
        tags: ["memory", "heart", "remembrance"]
    },
{
        id: 88,
        text: "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.",
        author: "Marcel Proust",
        category: "gratitude",
        tags: ["people", "happiness", "gardeners"]
    },
{
        id: 89,
        text: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
        author: "Melody Beattie",
        category: "gratitude",
        tags: ["past-present-future", "peace", "vision"]
    },
{
        id: 90,
        text: "We often take for granted the very things that most deserve our gratitude.",
        author: "Cynthia Ozick",
        category: "gratitude",
        tags: ["taken-for-granted", "deserving", "awareness"]
    },
{
        id: 91,
        text: "Gratitude is not only the greatest of virtues but the parent of all others.",
        author: "Cicero",
        category: "gratitude",
        tags: ["virtues", "parent-virtue", "foundation"]
    },
{
        id: 92,
        text: "When you arise in the morning, think of what a privilege it is to be alive, to breathe, to enjoy, to love.",
        author: "Marcus Aurelius",
        category: "gratitude",
        tags: ["morning", "privilege", "alive"]
    },
{
        id: 93,
        text: "Gratitude transforms what we have into enough and more. It turns denial into acceptance, confusion into clarity.",
        author: "Unknown",
        category: "gratitude",
        tags: ["transformation", "acceptance", "clarity"]
    },
{
        id: 94,
        text: "The roots of all goodness lie in the soil of appreciation for goodness.",
        author: "Dalai Lama",
        category: "gratitude",
        tags: ["roots", "goodness", "soil"]
    },
{
        id: 95,
        text: "Thank you is the best prayer that anyone could say.",
        author: "Alice Walker",
        category: "gratitude",
        tags: ["thank-you", "prayer", "simplicity"]
    },
{
        id: 96,
        text: "Gratitude helps you to grow and expand; gratitude brings joy and laughter into your life.",
        author: "Emilie Richards",
        category: "gratitude",
        tags: ["growth", "expansion", "joy"]
    },
{
        id: 97,
        text: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
        author: "John F. Kennedy",
        category: "gratitude",
        tags: ["actions-over-words", "living", "integrity"]
    },
{
        id: 98,
        text: "Gratitude is a powerful catalyst for happiness. It's the spark that lights a fire of joy in your soul.",
        author: "Amy Collette",
        category: "gratitude",
        tags: ["catalyst", "happiness", "spark"]
    },
{
        id: 99,
        text: "Count your rainbows, not your thunderstorms.",
        author: "Unknown",
        category: "gratitude",
        tags: ["positivity", "rainbow", "perspective"]
    },
{
        id: 100,
        text: "Today, choose to be grateful for the ordinary moments that make up an extraordinary life.",
        author: "Unknown",
        category: "gratitude",
        tags: ["ordinary-moments", "extraordinary-life", "choice"]
    },
{
        id: 101,
        text: "Gratitude is the wine for the soul. Go on. Get drunk.",
        author: "Rumi",
        category: "gratitude",
        tags: ["wine", "soul", "drunk-on-gratitude"]
    },
{
        id: 102,
        text: "The more grateful I am, the more beauty I see.",
        author: "Mary Davis",
        category: "gratitude",
        tags: ["beauty", "seeing", "abundance"]
    },
{
        id: 103,
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi",
        category: "resilience",
        tags: ["knocked-down", "getting-up", "perseverance"]
    },
{
        id: 104,
        text: "The human spirit is stronger than anything that can happen to it.",
        author: "C.C. Scott",
        category: "resilience",
        tags: ["human-spirit", "strength", "endurance"]
    },
{
        id: 105,
        text: "Fall seven times, stand up eight.",
        author: "Japanese Proverb",
        category: "resilience",
        tags: ["falling-standing", "persistence", "proverb"]
    },
{
        id: 106,
        text: "Rock bottom became the solid foundation on which I rebuilt my life.",
        author: "J.K. Rowling",
        category: "resilience",
        tags: ["rock-bottom", "foundation", "rebuilding"]
    },
{
        id: 107,
        text: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller",
        category: "resilience",
        tags: ["tough-times", "tough-people", "endurance"]
    },
{
        id: 108,
        text: "Strength doesn't come from what you can do. It comes from overcoming the things you thought you couldn't.",
        author: "Unknown",
        category: "resilience",
        tags: ["strength", "overcoming", "beliefs"]
    },
{
        id: 109,
        text: "Resilience is accepting your new reality, even if it's less good than the one you had before.",
        author: "Elizabeth Edwards",
        category: "resilience",
        tags: ["acceptance", "new-reality", "adaptation"]
    },
{
        id: 110,
        text: "You may encounter many defeats, but you must not be defeated.",
        author: "Maya Angelou",
        category: "resilience",
        tags: ["defeats", "not-defeated", "spirit"]
    },
{
        id: 111,
        text: "The oak fought the wind and was broken, the willow bent when it must and survived.",
        author: "Robert Jordan",
        category: "resilience",
        tags: ["oak-willow", "flexibility", "survival"]
    },
{
        id: 112,
        text: "Life doesn't get easier or more forgiving, we get stronger and more resilient.",
        author: "Steve Maraboli",
        category: "resilience",
        tags: ["strength", "life-challenges", "growth"]
    },
{
        id: 113,
        text: "Out of suffering have emerged the strongest souls.",
        author: "Khalil Gibran",
        category: "resilience",
        tags: ["suffering", "strong-souls", "emergence"]
    },
{
        id: 114,
        text: "Courage is not having the strength to go on; it's going on when you don't have the strength.",
        author: "Theodore Roosevelt",
        category: "resilience",
        tags: ["courage", "going-on", "inner-strength"]
    },
{
        id: 115,
        text: "Although the world is full of suffering, it is also full of the overcoming of it.",
        author: "Helen Keller",
        category: "resilience",
        tags: ["suffering", "overcoming", "hope"]
    },
{
        id: 117,
        text: "A diamond is merely a lump of coal that handled stress exceptionally well.",
        author: "Unknown",
        category: "resilience",
        tags: ["diamond", "coal", "stress-handling"]
    },
{
        id: 118,
        text: "Never underestimate your power to heal, to overcome, to transform, to love.",
        author: "Unknown",
        category: "resilience",
        tags: ["healing", "overcoming", "transformation"]
    },
{
        id: 119,
        text: "The comeback is always stronger than the setback.",
        author: "Unknown",
        category: "resilience",
        tags: ["comeback", "setback", "strength"]
    },
{
        id: 120,
        text: "You were given this life because you are strong enough to live it.",
        author: "Robin Sharma",
        category: "resilience",
        tags: ["life-purpose", "strength", "trust"]
    },
{
        id: 121,
        text: "Every storm runs out of rain eventually.",
        author: "Maya Angelou",
        category: "resilience",
        tags: ["storm", "rain", "hope"]
    },
{
        id: 122,
        text: "Healing takes courage, and we all have courage, even if we have to dig a little to find it.",
        author: "Tori Amos",
        category: "resilience",
        tags: ["healing", "courage", "digging-deep"]
    },
{
        id: 123,
        text: "Stars can't shine without darkness.",
        author: "D.H. Sidebottom",
        category: "resilience",
        tags: ["stars", "darkness", "contrast"]
    },
{
        id: 124,
        text: "Your scars are proof that you are stronger than whatever tried to hurt you.",
        author: "Unknown",
        category: "resilience",
        tags: ["scars", "proof", "strength"]
    },
{
        id: 125,
        text: "Breathe through it. You'll get through this too.",
        author: "Unknown",
        category: "resilience",
        tags: ["breathe", "getting-through", "hope"]
    },
{
        id: 126,
        text: "Resilience is knowing that you are the only one that has the power and the responsibility to pick yourself up.",
        author: "Mary Holloway",
        category: "resilience",
        tags: ["responsibility", "self-power", "rising"]
    },
{
        id: 127,
        text: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
        category: "resilience",
        tags: ["wounds", "wisdom", "learning"]
    },
{
        id: 128,
        text: "Happiness depends upon ourselves.",
        author: "Aristotle",
        category: "happiness",
        tags: ["internal", "dependence", "choice"]
    },
{
        id: 129,
        text: "For every minute you are angry, you lose sixty seconds of happiness.",
        author: "Ralph Waldo Emerson",
        category: "happiness",
        tags: ["anger", "time-loss", "perspective"]
    },
{
        id: 130,
        text: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama",
        category: "happiness",
        tags: ["actions", "creation", "active"]
    },
{
        id: 131,
        text: "Most folks are as happy as they make up their minds to be.",
        author: "Abraham Lincoln",
        category: "happiness",
        tags: ["mindset", "choice", "decision"]
    },
{
        id: 132,
        text: "Happiness is letting go of what you think your life is supposed to look like and celebrating it for everything that it is.",
        author: "Mandy Hale",
        category: "happiness",
        tags: ["letting-go", "celebration", "acceptance"]
    },
{
        id: 133,
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
        category: "happiness",
        tags: ["purpose", "life-goal", "simplicity"]
    },
{
        id: 134,
        text: "Be happy for this moment. This moment is your life.",
        author: "Omar Khayyam",
        category: "happiness",
        tags: ["moment", "life", "now"]
    },
{
        id: 135,
        text: "There is no path to happiness: happiness is the path.",
        author: "Buddha",
        category: "happiness",
        tags: ["path", "journey", "destination"]
    },
{
        id: 136,
        text: "Happiness is a warm puppy.",
        author: "Charles Schulz",
        category: "happiness",
        tags: ["simple", "warmth", "joy"]
    },
{
        id: 137,
        text: "The best way to cheer yourself up is to try to cheer somebody else up.",
        author: "Mark Twain",
        category: "happiness",
        tags: ["cheering-others", "kindness", "generosity"]
    },
{
        id: 138,
        text: "Happiness is not out there, it's in you.",
        author: "Unknown",
        category: "happiness",
        tags: ["internal", "within", "source"]
    },
{
        id: 139,
        text: "Joy is the simplest form of gratitude.",
        author: "Karl Barth",
        category: "happiness",
        tags: ["joy", "gratitude", "simplicity"]
    },
{
        id: 140,
        text: "Do what makes you happy. Be with who makes you smile. Laugh as much as you breathe. Love as long as you live.",
        author: "Unknown",
        category: "happiness",
        tags: ["happiness", "smile", "laugh", "love"]
    },
{
        id: 141,
        text: "Happiness is contagious. Pass it on.",
        author: "Unknown",
        category: "happiness",
        tags: ["contagious", "spreading", "positivity"]
    },
{
        id: 142,
        text: "The secret to happiness is freedom... And the secret to freedom is courage.",
        author: "Thucydides",
        category: "happiness",
        tags: ["freedom", "courage", "secret"]
    },
{
        id: 143,
        text: "Count your age by friends, not years. Count your life by smiles, not tears.",
        author: "John Lennon",
        category: "happiness",
        tags: ["friends", "smiles", "counting"]
    },
{
        id: 144,
        text: "Happiness is a direction, not a place.",
        author: "Sydney Harris",
        category: "happiness",
        tags: ["direction", "journey", "process"]
    },
{
        id: 145,
        text: "The most important thing is to enjoy your life - to be happy - it's all that matters.",
        author: "Audrey Hepburn",
        category: "happiness",
        tags: ["enjoyment", "matters", "priority"]
    },
{
        id: 146,
        text: "Smile, it's free therapy.",
        author: "Douglas Horton",
        category: "happiness",
        tags: ["smile", "therapy", "free"]
    },
{
        id: 147,
        text: "Happiness blooms from within. Water it daily with positive thoughts and optimistic actions.",
        author: "Dodinsky",
        category: "happiness",
        tags: ["within", "watering", "positive-actions"]
    },
{
        id: 148,
        text: "Nobody can make you happy unless you make yourself happy first.",
        author: "Unknown",
        category: "happiness",
        tags: ["self-happiness", "first", "dependency"]
    },
{
        id: 149,
        text: "Choose to be optimistic. It feels better.",
        author: "Dalai Lama",
        category: "happiness",
        tags: ["optimism", "choice", "feeling-better"]
    },
{
        id: 150,
        text: "Happiness is found when you stop comparing yourself to others.",
        author: "Unknown",
        category: "happiness",
        tags: ["comparison", "contentment", "self-focus"]
    },
{
        id: 151,
        text: "Laugh loudly. Love truly. Forgive quickly. Be happy always.",
        author: "Unknown",
        category: "happiness",
        tags: ["laugh", "love", "forgive", "always"]
    },
{
        id: 152,
        text: "Happiness is homemade. Don't buy it, create it.",
        author: "Unknown",
        category: "happiness",
        tags: ["homemade", "create", "DIY"]
    },
{
        id: 153,
        text: "Love is composed of a single soul inhabiting two bodies.",
        author: "Aristotle",
        category: "love",
        tags: ["soul-connection", "unity", "relationship"]
    },
{
        id: 154,
        text: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn",
        category: "love",
        tags: ["holding-on", "connection", "support"]
    },
{
        id: 155,
        text: "Where there is love there is life.",
        author: "Mahatma Gandhi",
        category: "love",
        tags: ["life-force", "vitality", "essence"]
    },
{
        id: 156,
        text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        author: "Lao Tzu",
        category: "love",
        tags: ["strength", "courage", "mutual-love"]
    },
{
        id: 157,
        text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
        author: "Maya Angelou",
        category: "love",
        tags: ["barriers", "hope", "persistence"]
    },
{
        id: 158,
        text: "The greatest thing you'll ever learn is just to love and be loved in return.",
        author: "Eden Ahbez",
        category: "love",
        tags: ["greatest-learning", "reciprocity", "simple-truth"]
    },
{
        id: 159,
        text: "Love is not about how many days, months, or years you've been together. It's about how much you love each other every day.",
        author: "Unknown",
        category: "love",
        tags: ["everyday-love", "consistency", "quality"]
    },
{
        id: 160,
        text: "To love and be loved is to feel the sun from both sides.",
        author: "David Viscott",
        category: "love",
        tags: ["sunshine", "warmth", "completeness"]
    },
{
        id: 161,
        text: "Love doesn't make the world go round. Love is what makes the ride worthwhile.",
        author: "Franklin P. Jones",
        category: "love",
        tags: ["journey", "worthwhile", "meaning"]
    },
{
        id: 162,
        text: "The art of love is largely the art of persistence.",
        author: "Albert Ellis",
        category: "love",
        tags: ["art", "persistence", "commitment"]
    },
{
        id: 163,
        text: "Love is a friendship set to music.",
        author: "Joseph Campbell",
        category: "love",
        tags: ["friendship", "music", "harmony"]
    },
{
        id: 164,
        text: "We are shaped and fashioned by those we love.",
        author: "Goethe",
        category: "love",
        tags: ["shaping", "influence", "transformation"]
    },
{
        id: 165,
        text: "The giving of love is itself an education.",
        author: "Emily Dickinson",
        category: "love",
        tags: ["giving", "education", "growth-through-love"]
    },
{
        id: 166,
        text: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare",
        category: "love",
        tags: ["universal-love", "trust", "integrity"]
    },
{
        id: 167,
        text: "To love oneself is the beginning of a lifelong romance.",
        author: "Oscar Wilde",
        category: "love",
        tags: ["self-love", "romance", "beginning"]
    },
{
        id: 168,
        text: "Love is the flower; you've got to let it grow.",
        author: "John Lennon",
        category: "love",
        tags: ["flower", "growth", "nurturing"]
    },
{
        id: 169,
        text: "The heart has its reasons which reason knows nothing of.",
        author: "Blaise Pascal",
        category: "love",
        tags: ["heart", "reason", "mystery"]
    },
{
        id: 170,
        text: "In the end, the love you take is equal to the love you make.",
        author: "Paul McCartney",
        category: "love",
        tags: ["equality", "giving-and-taking", "balance"]
    },
{
        id: 171,
        text: "Love is the answer, and you know that for sure.",
        author: "John Lennon",
        category: "love",
        tags: ["answer", "certainty", "truth"]
    },
{
        id: 172,
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
        category: "love",
        tags: ["spreading-love", "impact", "happiness"]
    },
{
        id: 173,
        text: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates",
        category: "wisdom",
        tags: ["humility", "knowing", "openness"]
    },
{
        id: 174,
        text: "Wisdom begins in wonder.",
        author: "Socrates",
        category: "wisdom",
        tags: ["wonder", "curiosity", "beginning"]
    },
{
        id: 175,
        text: "The wise find pleasure in water; the foolish, in wine.",
        author: "Confucius",
        category: "wisdom",
        tags: ["pleasure", "simplicity", "choices"]
    },
{
        id: 176,
        text: "Patience is the companion of wisdom.",
        author: "Saint Augustine",
        category: "wisdom",
        tags: ["patience", "companionship", "virtue"]
    },
{
        id: 177,
        text: "The invariable mark of wisdom is to see the miraculous in the common.",
        author: "Ralph Waldo Emerson",
        category: "wisdom",
        tags: ["miraculous", "common-place", "perception"]
    },
{
        id: 178,
        text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
        author: "Albert Einstein",
        category: "wisdom",
        tags: ["lifelong-learning", "experience", "schooling"]
    },
{
        id: 179,
        text: "A smart person knows what to say. A wise person knows whether to say it or not.",
        author: "Unknown",
        category: "wisdom",
        tags: ["smart-vs-wise", "timing", "discretion"]
    },
{
        id: 180,
        text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare",
        category: "wisdom",
        tags: ["foolishness", "self-awareness", "humility"]
    },
{
        id: 181,
        text: "Knowledge speaks, wisdom listens.",
        author: "Jimi Hendrix",
        category: "wisdom",
        tags: ["knowledge", "listening", "speaking"]
    },
{
        id: 182,
        text: "Wisdom is the reward you get for a lifetime of listening when you'd rather talk.",
        author: "Doug Larson",
        category: "wisdom",
        tags: ["listening", "reward", "lifetime"]
    },
{
        id: 183,
        text: "Nine-tenths of wisdom is being wise in time.",
        author: "Theodore Roosevelt",
        category: "wisdom",
        tags: ["timing", "promptness", "opportunity"]
    },
{
        id: 184,
        text: "A wise man learns from the mistakes of others. A fool learns from his own.",
        author: "Unknown",
        category: "wisdom",
        tags: ["learning-from-others", "mistakes", "wisdom"]
    },
{
        id: 185,
        text: "The older I get, the more I realize the value of privacy, of cultivating your circle and only letting certain people in.",
        author: "Unknown",
        category: "wisdom",
        tags: ["privacy", "circle", "boundaries"]
    },
{
        id: 186,
        text: "Sometimes you win, sometimes you learn.",
        author: "John Maxwell",
        category: "wisdom",
        tags: ["winning", "learning", "perspective"]
    },
{
        id: 187,
        text: "Not everyone deserves access to you. Be selective about who you let close.",
        author: "Unknown",
        category: "wisdom",
        tags: ["selective", "boundaries", "access"]
    },
{
        id: 188,
        text: "Silence is sometimes the best answer.",
        author: "Dalai Lama",
        category: "wisdom",
        tags: ["silence", "answer", "restraint"]
    },
{
        id: 189,
        text: "The quality of your life depends on the quality of your thoughts.",
        author: "Marcus Aurelius",
        category: "wisdom",
        tags: ["thoughts", "quality-of-life", "mindset"]
    },
{
        id: 190,
        text: "You can't go back and change the beginning, but you can start where you are and change the ending.",
        author: "C.S. Lewis",
        category: "wisdom",
        tags: ["change", "ending", "starting-now"]
    },
{
        id: 191,
        text: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou",
        category: "wisdom",
        tags: ["feeling", "impact", "memory"]
    },
{
        id: 192,
        text: "In a world where you can be anything, be kind.",
        author: "Jennifer Dukes Lee",
        category: "wisdom",
        tags: ["kindness", "being", "world"]
    },
{
        id: 193,
        text: "Courage is grace under pressure.",
        author: "Ernest Hemingway",
        category: "courage",
        tags: ["grace", "pressure", "composure"]
    },
{
        id: 194,
        text: "Have the courage to follow your heart and intuition.",
        author: "Steve Jobs",
        category: "courage",
        tags: ["heart", "intuition", "following"]
    },
{
        id: 195,
        text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.",
        author: "Eleanor Roosevelt",
        category: "courage",
        tags: ["strength", "facing-fear", "confidence"]
    },
{
        id: 196,
        text: "It takes courage to grow up and turn out to be who you really are.",
        author: "E.E. Cummings",
        category: "courage",
        tags: ["growing-up", "authenticity", "becoming"]
    },
{
        id: 197,
        text: "Courage is the first of human qualities because it is the quality which guarantees the others.",
        author: "Aristotle",
        category: "courage",
        tags: ["first-quality", "guarantee", "foundation"]
    },
{
        id: 198,
        text: "He who is not courageous enough to take risks will accomplish nothing in life.",
        author: "Muhammad Ali",
        category: "courage",
        tags: ["risks", "accomplishment", "life"]
    },
{
        id: 199,
        text: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
        author: "André Gide",
        category: "courage",
        tags: ["discovery", "oceans", "leaving-shore"]
    },
{
        id: 200,
        text: "You can choose courage, or you can choose comfort, but you cannot have both.",
        author: "Brené Brown",
        category: "courage",
        tags: ["choice", "comfort", "either-or"]
    },
{
        id: 201,
        text: "Fortune favors the bold.",
        author: "Virgil",
        category: "courage",
        tags: ["fortune", "boldness", "favor"]
    },
{
        id: 202,
        text: "Bravery is not the absence of fear, but the mastery of it.",
        author: "Mark Twain",
        category: "courage",
        tags: ["bravery", "fear", "mastery"]
    },
{
        id: 203,
        text: "Life shrinks or expands in proportion to one's courage.",
        author: "Anais Nin",
        category: "courage",
        tags: ["life-size", "expansion", "proportion"]
    },
{
        id: 204,
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
        category: "courage",
        tags: ["darkness", "light", "focus"]
    },
{
        id: 205,
        text: "Only those who risk going too far can possibly find out how far one can go.",
        author: "T.S. Eliot",
        category: "courage",
        tags: ["risk", "limits", "discovery"]
    },
{
        id: 206,
        text: "Courage is resistance to fear, mastery of fear—not absence of fear.",
        author: "Mark Twain",
        category: "courage",
        tags: ["resistance", "mastery", "presence"]
    },
{
        id: 207,
        text: "You don't develop courage by being comfortable every day.",
        author: "Debasish Mridha",
        category: "courage",
        tags: ["development", "discomfort", "growth"]
    },
{
        id: 208,
        text: "Stand for something or you'll fall for anything.",
        author: "Alexander Hamilton",
        category: "courage",
        tags: ["standing", "values", "integrity"]
    },
{
        id: 209,
        text: "Doubt kills more dreams than failure ever will.",
        author: "Suzy Kassem",
        category: "courage",
        tags: ["doubt", "dreams", "belief"]
    },
{
        id: 210,
        text: "Be fearless in the pursuit of what sets your soul on fire.",
        author: "Unknown",
        category: "courage",
        tags: ["fearless", "pursuit", "passion"]
    },
{
        id: 211,
        text: "Personal growth is the investment that pays the highest dividends.",
        author: "Unknown",
        category: "growth",
        tags: ["investment", "dividends", "returns"]
    },
{
        id: 212,
        text: "The only person you should try to be better than is the person you were yesterday.",
        author: "Matt Cameron",
        category: "growth",
        tags: ["better-self", "yesterday", "competition"]
    },
{
        id: 214,
        text: "What we fear doing most is usually what we most need to do.",
        author: "Tim Ferriss",
        category: "growth",
        tags: ["fear", "need", "growth-zones"]
    },
{
        id: 215,
        text: "Every day, in every way, I'm getting better and better.",
        author: "Émile Coué",
        category: "growth",
        tags: ["daily-improvement", "affirmation", "better"]
    },
{
        id: 216,
        text: "Growth begins at the end of your comfort zone.",
        author: "Roy T. Bennett",
        category: "growth",
        tags: ["comfort-zone", "beginning", "edge"]
    },
{
        id: 217,
        text: "If it doesn't challenge you, it won't change you.",
        author: "Unknown",
        category: "growth",
        tags: ["challenge", "change", "transformation"]
    },
{
        id: 218,
        text: "The mind is just like a muscle—the more you exercise it, the stronger it gets.",
        author: "Unknown",
        category: "growth",
        tags: ["mind-muscle", "exercise", "strengthening"]
    },
{
        id: 219,
        text: "You cannot swim for new horizons until you have courage to lose sight of the shore.",
        author: "William Faulkner",
        category: "growth",
        tags: ["horizons", "shore", "courage"]
    },
{
        id: 220,
        text: "Change is inevitable. Growth is optional.",
        author: "John C. Maxwell",
        category: "growth",
        tags: ["inevitability", "optionality", "choice"]
    },
{
        id: 221,
        text: "The beautiful thing about learning is that nobody can take it away from you.",
        author: "B.B. King",
        category: "growth",
        tags: ["learning", "permanent", "yours"]
    },
{
        id: 222,
        text: "One can choose to go back toward safety or forward toward growth. Growth must be chosen again and again.",
        author: "Abraham Maslow",
        category: "growth",
        tags: ["safety-vs-growth", "choosing", "repeatedly"]
    },
{
        id: 223,
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle",
        category: "growth",
        tags: ["habits", "excellence", "repetition"]
    },
{
        id: 224,
        text: "Your potential is endless. Go do what you were created to do.",
        author: "Unknown",
        category: "growth",
        tags: ["potential", "endless", "purpose"]
    },
{
        id: 225,
        text: "The struggle you're in today is developing the strength you need for tomorrow.",
        author: "Robert Tew",
        category: "growth",
        tags: ["struggle", "strength-development", "tomorrow"]
    },
{
        id: 226,
        text: "Don't shrink from discomfort. Grow through it.",
        author: "Unknown",
        category: "growth",
        tags: ["discomfort", "growing-through", "embracing"]
    },
{
        id: 227,
        text: "Every expert was once a beginner. Every pro was once an amateur.",
        author: "Unknown",
        category: "growth",
        tags: ["expert-beginner", "pro-amateur", "journey"]
    },
{
        id: 228,
        text: "Growth happens when you start doing things you're not qualified to do yet.",
        author: "Unknown",
        category: "growth",
        tags: ["unqualified", "starting", "learning-by-doing"]
    },
{
        id: 229,
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
        category: "peace",
        tags: ["within", "seeking", "source"]
    },
{
        id: 230,
        text: "Nobody can bring you peace but yourself.",
        author: "Ralph Waldo Emerson",
        category: "peace",
        tags: ["self-peace", "responsibility", "within"]
    },
{
        id: 231,
        text: "Inner peace begins the moment you choose not to allow another person or event to control your emotions.",
        author: "Pema Chödrön",
        category: "peace",
        tags: ["control", "emotions", "choice"]
    },
{
        id: 232,
        text: "Serenity is not freedom from the storm, but peace amid the storm.",
        author: "Unknown",
        category: "peace",
        tags: ["serenity", "storm", "amid"]
    },
{
        id: 233,
        text: "Peace cannot be kept by force; it can only be achieved by understanding.",
        author: "Albert Einstein",
        category: "peace",
        tags: ["force", "understanding", "achievement"]
    },
{
        id: 234,
        text: "When things change inside you, things change around you.",
        author: "Unknown",
        category: "peace",
        tags: ["inside-change", "outside-change", "reflection"]
    },
{
        id: 235,
        text: "Let go of the thoughts that don't make you strong.",
        author: "Karen Salmansohn",
        category: "peace",
        tags: ["letting-go", "thoughts", "strength"]
    },
{
        id: 236,
        text: "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.",
        author: "Eckhart Tolle",
        category: "peace",
        tags: ["circumstances", "deepest-level", "realization"]
    },
{
        id: 237,
        text: "Nothing can bring you peace but yourself.",
        author: "Ralph Waldo Emerson",
        category: "peace",
        tags: ["yourself", "peace-source", "self-reliance"]
    },
{
        id: 238,
        text: "The practice of peace and reconciliation is one of the most vital and artistic of human actions.",
        author: "Thich Nhat Hanh",
        category: "peace",
        tags: ["practice", "reconciliation", "artistic"]
    },
{
        id: 239,
        text: "If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner.",
        author: "Nelson Mandela",
        category: "peace",
        tags: ["enemy", "partner", "working-together"]
    },
{
        id: 240,
        text: "Peace is liberty in tranquility.",
        author: "Marcus Tullius Cicero",
        category: "peace",
        tags: ["liberty", "tranquility", "freedom"]
    },
{
        id: 241,
        text: "First keep the peace within yourself, then you can also bring peace to others.",
        author: "Thomas à Kempis",
        category: "peace",
        tags: ["within-first", "others-second", "spreading"]
    },
{
        id: 242,
        text: "When you find peace within yourself, you become the kind of person who can live at peace with others.",
        author: "Peace Pilgrim",
        category: "peace",
        tags: ["within", "others", "living-in-peace"]
    },
{
        id: 243,
        text: "Learn to be calm and you will always be happy.",
        author: "Paramahansa Yogananda",
        category: "peace",
        tags: ["calm", "happiness", "learning"]
    },
{
        id: 244,
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        category: "peace",
        tags: ["simplicity", "sophistication", "elegance"]
    },
{
        id: 245,
        text: "Quiet the mind, and the soul will speak.",
        author: "Ma Jaya Sati Bhagavati",
        category: "peace",
        tags: ["quiet-mind", "soul-speaking", "stillness"]
    },
{
        id: 246,
        text: "There is no need to go to India or anywhere else to find peace. You will find that deep place of silence right in your room, your garden, or even your bathtub.",
        author: "Elizabeth Gilbert",
        category: "peace",
        tags: ["here-now", "finding-peace", "ordinary-places"]
    },
{
        id: 247,
        text: "Creativity takes courage.",
        author: "Henri Matisse",
        category: "creativity",
        tags: ["creativity-courage", "boldness", "expression"]
    },
{
        id: 248,
        text: "Every child is an artist. The problem is how to remain an artist once we grow up.",
        author: "Pablo Picasso",
        category: "creativity",
        tags: ["child-artist", "remaining-artist", "growing-up"]
    },
{
        id: 249,
        text: "Creativity is intelligence having fun.",
        author: "Albert Einstein",
        category: "creativity",
        tags: ["intelligence", "fun", "play"]
    },
{
        id: 250,
        text: "You can't use up creativity. The more you use, the more you have.",
        author: "Maya Angelou",
        category: "creativity",
        tags: ["unlimited", "using-more", "abundance"]
    },
{
        id: 251,
        text: "Creativity involves breaking out of established patterns in order to look at things differently.",
        author: "Edward de Bono",
        category: "creativity",
        tags: ["breaking-patterns", "different-view", "paradigm-shift"]
    },
{
        id: 252,
        text: "The desire to create is one of the deepest yearnings of the human soul.",
        author: "Dieter Uchtdorf",
        category: "creativity",
        tags: ["desire", "yearning", "soul-needs"]
    },
{
        id: 253,
        text: "Art is not what you see, but what you make others see.",
        author: "Edgar Degas",
        category: "creativity",
        tags: ["art-perception", "making-others-see", "interpretation"]
    },
{
        id: 254,
        text: "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last you create what you will.",
        author: "George Bernard Shaw",
        category: "creativity",
        tags: ["imagination", "beginning", "creation-process"]
    },
{
        id: 255,
        text: "The chief enemy of creativity is 'good enough.'",
        author: "Voltaire",
        category: "creativity",
        tags: ["enemy", "good-enough", "excellence"]
    },
{
        id: 256,
        text: "To live a creative life, we must lose our fear of being wrong.",
        author: "Joseph Chilton Pearce",
        category: "creativity",
        tags: ["creative-life", "fear-of-being-wrong", "freedom"]
    },
{
        id: 257,
        text: "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
        author: "Scott Adams",
        category: "creativity",
        tags: ["mistakes", "art-selection", "knowing"]
    },
{
        id: 258,
        text: "The creative adult is the child who survived.",
        author: "Ursula K. Le Guin",
        category: "creativity",
        tags: ["child-survival", "inner-child", "creativity-preservation"]
    },
{
        id: 259,
        text: "An essential aspect of creativity is not being afraid to fail.",
        author: "Edwin Land",
        category: "creativity",
        tags: ["fearlessness", "failure", "essential"]
    },
{
        id: 260,
        text: "The world always seems brighter when you've just made something that wasn't there before.",
        author: "Neil Gaiman",
        category: "creativity",
        tags: ["brighter-world", "creation", "newness"]
    },
{
        id: 261,
        text: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
        author: "Leo Burnett",
        category: "creativity",
        tags: ["curiosity", "secret", "greatness"]
    },
{
        id: 262,
        text: "Don't think. Thinking is the enemy of creativity. It's self-conscious, and anything self-conscious is lousy. You can't try to do things. You simply must do things.",
        author: "Ray Bradbury",
        category: "creativity",
        tags: ["not-thinking", "doing", "flow-state"]
    },
{
        id: 263,
        text: "Create with the heart; build with the mind.",
        author: "Criss Jami",
        category: "creativity",
        tags: ["heart-creation", "mind-building", "balance"]
    },

{
        id: 267,
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        category: "motivation",
        tags: ["impossible", "achievement", "persistence"]
    },
{
        id: 268,
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Anonymous",
        category: "motivation",
        tags: ["hard-work", "achievement", "effort"]
    },
{
        id: 269,
        text: "Dream bigger. There are no limits to what you can accomplish except the ones you set for yourself.",
        author: "Anonymous",
        category: "motivation",
        tags: ["dreams", "limits", "mindset"]
    },
{
        id: 273,
        text: "Don't stop when you're tired. Stop when you're done.",
        author: "Anonymous",
        category: "motivation",
        tags: ["perseverance", "completion", "endurance"]
    },
{
        id: 277,
        text: "It's not about having time. It's about making time.",
        author: "Anonymous",
        category: "motivation",
        tags: ["time-management", "priorities", "making-time"]
    },
{
        id: 278,
        text: "Let your faith be bigger than your fear.",
        author: "Anonymous",
        category: "motivation",
        tags: ["faith", "fear", "courage"]
    },
{
        id: 279,
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
        category: "motivation",
        tags: ["impact", "difference", "purpose"]
    },
{
        id: 283,
        text: "Wherever you are, be there totally.",
        author: "Eckhart Tolle",
        category: "mindfulness",
        tags: ["presence", "totality", "awareness"]
    },
{
        id: 285,
        text: "In today's rush, we all think too much — seek too much — want too much — and forget about the joy of just being.",
        author: "Eckhart Tolle",
        category: "mindfulness",
        tags: ["rush", "overthinking", "just-being"]
    },
{
        id: 286,
        text: "Mindfulness means paying attention in a particular way: on purpose, in the present moment, and nonjudgmentally.",
        author: "Jon Kabat-Zinn",
        category: "mindfulness",
        tags: ["attention", "purpose", "nonjudgmental"]
    },
{
        id: 287,
        text: "Breathe in deeply to bring your mind home to your body.",
        author: "Thich Nhat Hanh",
        category: "mindfulness",
        tags: ["breathing", "mind-body", "grounding"]
    },
{
        id: 290,
        text: "Spend five minutes complaining and you've wasted five minutes. Spend that same five minutes being grateful and you've gained five minutes of happiness.",
        author: "Anonymous",
        category: "mindfulness",
        tags: ["complaining-vs-gratitude", "time", "perspective"]
    },
{
        id: 294,
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
        category: "success",
        tags: ["happiness-first", "passion", "love-what-you-do"]
    },
{
        id: 301,
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
        category: "success",
        tags: ["opportunity", "creation", "proactive"]
    },
{
        id: 302,
        text: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        author: "David Brinkley",
        category: "success",
        tags: ["foundation", "obstacles", "resilience"]
    },
{
        id: 303,
        text: "The price of anything is the amount of life you exchange for it.",
        author: "Henry David Thoreau",
        category: "success",
        tags: ["price", "life-exchange", "values"]
    },
{
        id: 308,
        text: "Gratitude unlocks the fullness of life. It turns what we have into enough, and more.",
        author: "Melody Beattie",
        category: "gratitude",
        tags: ["unlocking", "fullness", "abundance"]
    },
{
        id: 309,
        text: "The heart that gives thanks is a happy one, for we cannot feel thankful and unhappy at the same time.",
        author: "Anonymous",
        category: "gratitude",
        tags: ["heart", "thankful-happy", "mutual-exclusivity"]
    },
{
        id: 312,
        text: "Gratitude is not only the greatest of virtues, but the parent of all others.",
        author: "Cicero",
        category: "gratitude",
        tags: ["greatest-virtue", "parent-virtues", "foundation"]
    },
{
        id: 314,
        text: "Acknowledging the good that you already have in your life is the foundation for all abundance.",
        author: "Eckhart Tolle",
        category: "gratitude",
        tags: ["acknowledging", "foundation", "abundance"]
    },
{
        id: 318,
        text: "The human capacity for burden is like bamboo — far more flexible than you'd ever believe at first glance.",
        author: "Jodi Picoult",
        category: "resilience",
        tags: ["bamboo", "flexibility", "capacity"]
    },
{
        id: 323,
        text: "You may have to fight a battle more than once to win it.",
        author: "Margaret Thatcher",
        category: "resilience",
        tags: ["repeated-battles", "persistence", "victory"]
    },
{
        id: 325,
        text: "Strength does not come from winning. Your struggles develop your strengths.",
        author: "Arnold Schwarzenegger",
        category: "resilience",
        tags: ["strength-from-struggles", "development", "growth"]
    },
{
        id: 326,
        text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
        author: "Mary Anne Radmacher",
        category: "resilience",
        tags: ["quiet-courage", "tomorrow", "persistence"]
    },
{
        id: 327,
        text: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
        author: "Kahlil Gibran",
        category: "resilience",
        tags: ["suffering", "strong-souls", "scars"]
    },
{
        id: 329,
        text: "There is only one happiness in this life, to love and be loved.",
        author: "George Sand",
        category: "happiness",
        tags: ["love", "being-loved", "connection"]
    },
{
        id: 331,
        text: "The most important thing is to enjoy your life — to be happy — it's all that matters.",
        author: "Audrey Hepburn",
        category: "happiness",
        tags: ["enjoyment", "what-matters", "priority"]
    },
{
        id: 336,
        text: "Happiness radiates like the fragrance from a flower and draws all good things towards you.",
        author: "Maharishi Mahesh Yogi",
        category: "happiness",
        tags: ["radiance", "fragrance", "attraction"]
    },
{
        id: 338,
        text: "If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes.",
        author: "Andrew Carnegie",
        category: "happiness",
        tags: ["goals", "energy", "inspiration"]
    },
{
        id: 339,
        text: "Happiness is when what you think, what you say, and what you do are in harmony.",
        author: "Mahatma Gandhi",
        category: "happiness",
        tags: ["harmony", "alignment", "integrity"]
    },
{
        id: 348,
        text: "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
        author: "Marilyn Monroe",
        category: "love",
        tags: ["small-gestures", "thrill", "intimacy"]
    },
{
        id: 349,
        text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
        author: "Maya Angelou",
        category: "love",
        tags: ["unique-heart", "devotion", "destiny"]
    },
{
        id: 351,
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
        category: "love",
        tags: ["reality-better-than-dreams", "sleeplessness", "euphoria"]
    },
{
        id: 354,
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
        category: "wisdom",
        tags: ["journey", "first-step", "beginning"]
    },
{
        id: 355,
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        category: "wisdom",
        tags: ["difficulty-opportunity", "perspective", "possibility"]
    },
{
        id: 358,
        text: "Knowledge speaks, but wisdom listens.",
        author: "Jimi Hendrix",
        category: "wisdom",
        tags: ["knowledge-vs-wisdom", "listening", "understanding"]
    },
{
        id: 359,
        text: "No amount of regretting can change the past, and no amount of worrying can change the future.",
        author: "Roy T. Bennett",
        category: "wisdom",
        tags: ["regret-worry", "past-future", "acceptance"]
    },
{
        id: 361,
        text: "The unexamined life is not worth living.",
        author: "Socrates",
        category: "wisdom",
        tags: ["self-examination", "meaning", "conscious-living"]
    },
{
        id: 364,
        text: "Courage is resistance to fear, mastery of fear — not absence of fear.",
        author: "Mark Twain",
        category: "courage",
        tags: ["fear-resistance", "mastery", "not-absence"]
    },
{
        id: 369,
        text: "It takes courage to grow up and become who you really are.",
        author: "E.E. Cummings",
        category: "courage",
        tags: ["growing-up", "authenticity", "self-discovery"]
    },
{
        id: 370,
        text: "Courage is the first step to wisdom, whereas fear of the unknown is the gateway to ignorance.",
        author: "Matshona Dhliwayo",
        category: "courage",
        tags: ["courage-to-wisdom", "fear-to-ignorance", "gateway"]
    },
{
        id: 371,
        text: "Only those who will risk going too far can possibly find out how far one can go.",
        author: "T.S. Eliot",
        category: "courage",
        tags: ["risk-taking", "limits", "pushing-boundaries"]
    },
{
        id: 373,
        text: "Bravery is being the only one who knows you're afraid.",
        author: "Franklin P. Jones",
        category: "courage",
        tags: ["bravery", "knowing-fear", "inner-strength"]
    },
{
        id: 374,
        text: "Fear is a reaction. Courage is a decision.",
        author: "Winston Churchill",
        category: "courage",
        tags: ["reaction-vs-decision", "choice", "willpower"]
    },
{
        id: 375,
        text: "Without courage, we cannot practice any other virtue with consistency.",
        author: "Maya Angelou",
        category: "courage",
        tags: ["foundational-virtue", "consistency", "other-virtues"]
    },
{
        id: 376,
        text: "The brave may not live forever, but the cautious do not live at all.",
        author: "Anonymous",
        category: "courage",
        tags: ["brave-cautious", "living-fully", "risk"]
    },
{
        id: 377,
        text: "Sometimes the biggest act of courage is a small thought that says I'll try again tomorrow.",
        author: "Mary Anne Radmacher",
        category: "courage",
        tags: ["small-courage", "trying-again", "tomorrow"]
    },
{
        id: 379,
        text: "Personal growth is the investment that pays the highest dividend.",
        author: "Anonymous",
        category: "growth",
        tags: ["investment", "dividend", "self-development"]
    },
{
        id: 381,
        text: "The plant blooms many times. The person should bloom many times too.",
        author: "Matshona Dhliwayo",
        category: "growth",
        tags: ["blooming", "multiple-times", "reinvention"]
    },
{
        id: 382,
        text: "If we are growing, we are always going to be outside our comfort zone.",
        author: "John Maxwell",
        category: "growth",
        tags: ["outside-comfort-zone", "constant-growth", "discomfort"]
    },
{
        id: 383,
        text: "The only way to move forward is to leave behind who you used to be.",
        author: "Anonymous",
        category: "growth",
        tags: ["leaving-behind", "forward-motion", "transformation"]
    },
{
        id: 384,
        text: "Every day is a chance to become a better version of yourself.",
        author: "Anonymous",
        category: "growth",
        tags: ["daily-improvement", "better-version", "consistency"]
    },
{
        id: 389,
        text: "The greatest discovery of all time is that a person can change their future by merely changing their attitude.",
        author: "Oprah Winfrey",
        category: "growth",
        tags: ["attitude-change", "future-transformation", "power-of-mindset"]
    },
{
        id: 391,
        text: "One can choose to go back toward safety or forward toward growth. Growth must be chosen again and again; fear must be overcome again and again.",
        author: "Abraham Maslow",
        category: "growth",
        tags: ["choosing-growth", "repeated-choice", "overcoming-fear"]
    },
{
        id: 392,
        text: "The moment you're ready to quit is usually the moment right before a miracle happens. Don't give up.",
        author: "Anonymous",
        category: "growth",
        tags: ["quitting-point", "miracles", "persistence"]
    },
{
        id: 393,
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll",
        category: "growth",
        tags: ["reaction", "response-ability", "perspective"]
    },
{
        id: 401,
        text: "Nothing can bring you peace but yourself. Nothing can bring you peace but the triumph of principles.",
        author: "Ralph Waldo Emerson",
        category: "peace",
        tags: ["principles", "triumph", "value-based-peace"]
    },
{
        id: 403,
        text: "If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present.",
        author: "Lao Tzu",
        category: "peace",
        tags: ["depression-past", "anxiety-future", "peace-present"]
    },
{
        id: 404,
        text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.",
        author: "Wayne W. Dyer",
        category: "peace",
        tags: ["retraining-mind", "acceptance", "reality-vs-expectation"]
    },
{
        id: 406,
        text: "He who lives in harmony with himself lives in harmony with the universe.",
        author: "Marcus Aurelius",
        category: "peace",
        tags: ["harmony-within", "universal-harmony", "alignment"]
    },
{
        id: 408,
        text: "There is no path to peace. Peace is the path.",
        author: "Mahatma Gandhi",
        category: "peace",
        tags: ["path-as-peace", "journey", "process"]
    },
{
        id: 413,
        text: "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.",
        author: "George Bernard Shaw",
        category: "creativity",
        tags: ["imagination-chain", "desire-will-create", "manifestation"]
    },
{
        id: 414,
        text: "The chief enemy of creativity is good sense.",
        author: "Pablo Picasso",
        category: "creativity",
        tags: ["enemy-good-sense", "breaking-rules", "irrationality"]
    },
{
        id: 420,
        text: "Originality is simply a pair of fresh eyes.",
        author: "Mark Twain",
        category: "creativity",
        tags: ["fresh-eyes", "perspective", "novelty"]
    },
{
        id: 422,
        text: "Curiosity about life in all of its aspects is still the secret of great creative people.",
        author: "Leo Burnett",
        category: "creativity",
        tags: ["curiosity", "secret", "greatness-source"]
    },
{
        id: 424,
        text: "Walking with a friend in the dark is better than walking alone in the light.",
        author: "Helen Keller",
        category: "friendship",
        tags: ["companionship", "dark-light", "together"]
    },
{
        id: 425,
        text: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard",
        category: "friendship",
        tags: ["acceptance", "knowing-all", "unconditional-love"]
    },
{
        id: 426,
        text: "True friends are like bright stars that you don't always see but you know they're always there.",
        author: "Anonymous",
        category: "friendship",
        tags: ["stars", "always-present", "constancy"]
    },
{
        id: 427,
        text: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
        author: "C.S. Lewis",
        category: "friendship",
        tags: ["shared-experience", "connection", "surprise"]
    },
{
        id: 428,
        text: "A real friend is one who walks in when the rest of the world walks out.",
        author: "Walter Winchell",
        category: "friendship",
        tags: ["loyalty", "standing-by", "difficult-times"]
    },
{
        id: 429,
        text: "Friends are the family we choose for ourselves.",
        author: "Edna Buchanan",
        category: "friendship",
        tags: ["chosen-family", "friendship-family", "choice"]
    },
{
        id: 430,
        text: "Good friends are like stars. You don't always see them, but you know they're always there.",
        author: "Anonymous",
        category: "friendship",
        tags: ["stars-metaphor", "presence", "reliability"]
    },
{
        id: 431,
        text: "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
        author: "Oprah Winfrey",
        category: "friendship",
        tags: ["fair-weather", "true-support", "hard-times"]
    },
{
        id: 432,
        text: "A friend is one of the nicest things you can have and one of the best things you can be.",
        author: "Winnie the Pooh",
        category: "friendship",
        tags: ["having-being", "niceness", "reciprocity"]
    },
{
        id: 433,
        text: "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves; it is not my nature.",
        author: "Jane Austen",
        category: "friendship",
        tags: ["all-in", "wholehearted", "dedication"]
    },
{
        id: 434,
        text: "Friendship improves happiness and abates misery, by the doubling of our joy and the dividing of our grief.",
        author: "Cicero",
        category: "friendship",
        tags: ["joy-doubling", "grief-dividing", "emotional-support"]
    },
{
        id: 435,
        text: "The language of friendship is not words but meanings.",
        author: "Henry David Thoreau",
        category: "friendship",
        tags: ["beyond-words", "meaning", "understanding"]
    },
{
        id: 436,
        text: "Find a group of people who challenge and inspire you; spend a lot of time with them, and it will change your life.",
        author: "Amy Poehler",
        category: "friendship",
        tags: ["inspiration", "challenge", "community-impact"]
    },
{
        id: 437,
        text: "Anybody can sympathize with the sufferings of a friend, but it requires a very fine nature to sympathize with a friend's success.",
        author: "Oscar Wilde",
        category: "friendship",
        tags: ["success-empathy", "fine-nature", "genuine-care"]
    },
{
        id: 438,
        text: "A single rose can be my garden... a single friend, my world.",
        author: "Leo Buscaglia",
        category: "friendship",
        tags: ["single-enough", "world-meaning", "simplicity"]
    },
{
        id: 439,
        text: "Best friends are the people in your life that make you laugh louder, smile brighter, and live better.",
        author: "Anonymous",
        category: "friendship",
        tags: ["laughter", "smiles", "better-living"]
    },
{
        id: 440,
        text: "A friend hears the song in my heart and sings it to me when my memory fails.",
        author: "Donna Roberts",
        category: "friendship",
        tags: ["hearing-song", "memory-help", "emotional-attunement"]
    },
{
        id: 441,
        text: "Side by side or miles apart, real friends are always close at heart.",
        author: "Anonymous",
        category: "friendship",
        tags: ["distance", "close-at-heart", "connection"]
    },
{
        id: 442,
        text: "Friends show their love in times of trouble, not in happiness.",
        author: "Euripides",
        category: "friendship",
        tags: ["trouble-times", "true-love", "support"]
    },
{
        id: 443,
        text: "Life is partly what we make it, and partly what is made by the friends we choose.",
        author: "Tennessee Williams",
        category: "friendship",
        tags: ["life-shaping", "choice-impact", "influence"]
    },
{
        id: 444,
        text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson",
        category: "confidence",
        tags: ["belief", "inner-power", "greater-than-obstacles"]
    },
{
        id: 445,
        text: "Confidence comes not from always being right, but from not fearing to be wrong.",
        author: "Peter T. McIntyre",
        category: "confidence",
        tags: ["right-wrong", "fearlessness", "growth-mindset"]
    },
{
        id: 446,
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        category: "confidence",
        tags: ["inferiority", "consent", "self-worth"]
    },
{
        id: 447,
        text: "With realization of one's own potential and self-confidence in one's ability, one can build a better world.",
        author: "Dalai Lama",
        category: "confidence",
        tags: ["potential-realization", "building-world", "empowerment"]
    },
{
        id: 448,
        text: "You were born to be real, not to be perfect. You're here to be you, not to be what someone else wants you to be.",
        author: "Anonymous",
        category: "confidence",
        tags: ["real-vs-perfect", "authenticity", "individuality"]
    },
{
        id: 449,
        text: "Self-confidence is the first requisite to great undertakings.",
        author: "Samuel Johnson",
        category: "confidence",
        tags: ["requisite", "great-undertakings", "foundation"]
    },
{
        id: 450,
        text: "You alone are enough. You have nothing to prove to anybody.",
        author: "Maya Angelou",
        category: "confidence",
        tags: ["enoughness", "no-proof-needed", "self-validation"]
    },
{
        id: 451,
        text: "Don't let the imposter syndrome stop you from showing the world your brilliance.",
        author: "Anonymous",
        category: "confidence",
        tags: ["imposter-syndrome", "brilliance", "showing-up"]
    },
{
        id: 452,
        text: "When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things.",
        author: "Joe Namath",
        category: "confidence",
        tags: ["fun-amazing-things", "joy-confidence", "performance"]
    },
{
        id: 453,
        text: "Own who you are. No apologies necessary.",
        author: "Anonymous",
        category: "confidence",
        tags: ["ownership", "no-apologies", "authenticity"]
    },
{
        id: 454,
        text: "The moment you doubt whether you can fly, you cease forever to be able to do it.",
        author: "J.M. Barrie",
        category: "confidence",
        tags: ["doubt-flight", "belief-power", "limitation"]
    },
{
        id: 455,
        text: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford",
        category: "confidence",
        tags: ["thinking-belief", "self-fulfilling-prophecy", "mindset"]
    },
{
        id: 456,
        text: "Confidence is not 'they will like me.' Confidence is 'I'll be fine if they don't.'",
        author: "Christina Grimme",
        category: "confidence",
        tags: ["like-me-vs-fine", "internal-validation", "independence"]
    },
{
        id: 457,
        text: "You have been criticizing yourself for years and it hasn't worked. Try approving of yourself and see what happens.",
        author: "Louise Hay",
        category: "confidence",
        tags: ["self-criticism", "self-approval", "experiment"]
    },
{
        id: 458,
        text: "It is confidence in our bodies, minds, and spirits that allows us to keep looking for new adventures.",
        author: "Oprah Winfrey",
        category: "confidence",
        tags: ["adventure-seeking", "holistic-confidence", "exploration"]
    },
{
        id: 460,
        text: "Never bend your head. Always hold it high. Look the world straight in the eye.",
        author: "Helen Keller",
        category: "confidence",
        tags: ["head-high", "eye-contact", "dignity"]
    },
{
        id: 461,
        text: "Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.",
        author: "E.E. Cummings",
        category: "confidence",
        tags: ["curiosity-risk", "wonder", "human-spirit"]
    },
{
        id: 462,
        text: "I am not afraid of storms, for I am learning how to sail my ship.",
        author: "Louisa May Alcott",
        category: "confidence",
        tags: ["storms", "learning", "self-reliance"]
    },
{
        id: 463,
        text: "Your value doesn't decrease based on someone's inability to see your worth.",
        author: "Anonymous",
        category: "confidence",
        tags: ["worth", "others-perception", "unchanging-value"]
    },
{
        id: 464,
        text: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
        category: "adventure",
        tags: ["daring", "all-or-nothing", "living-boldly"]
    },
{
        id: 465,
        text: "The biggest adventure you can take is to live the life of your dreams.",
        author: "Oprah Winfrey",
        category: "adventure",
        tags: ["dreams", "life-adventure", "courageous-living"]
    },
{
        id: 466,
        text: "Jobs fill your pocket, but adventures fill your soul.",
        author: "Jaime Lyn Beatty",
        category: "adventure",
        tags: ["jobs-vs-adventures", "soul-filling", "experiences"]
    },
{
        id: 467,
        text: "Adventure is worthwhile in itself.",
        author: "Amelia Earhart",
        category: "adventure",
        tags: ["worthwhile", "intrinsic-value", "exploration"]
    },
{
        id: 468,
        text: "We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.",
        author: "Jawaharlal Nehru",
        category: "adventure",
        tags: ["wonderful-world", "eyes-open", "seeking"]
    },
{
        id: 469,
        text: "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
        category: "adventure",
        tags: ["trailblazing", "no-path", "leadership"]
    },
{
        id: 470,
        text: "Life is an adventure, and the world is full of wonders if you have eyes to see them.",
        author: "Anonymous",
        category: "adventure",
        tags: ["wonders", "seeing", "perspective"]
    },
{
        id: 471,
        text: "Take every chance you get in life, because some things only happen once.",
        author: "Anonymous",
        category: "adventure",
        tags: ["once-in-lifetime", "opportunities", "seizing"]
    },
{
        id: 473,
        text: "The purpose of life, after all, is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experiences.",
        author: "Eleanor Roosevelt",
        category: "adventure",
        tags: ["purpose", "experiencing", "without-fear"]
    },
{
        id: 474,
        text: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: "Mark Twain",
        category: "adventure",
        tags: ["regret-minimization", "safe-harbor", "exploration"]
    },
{
        id: 475,
        text: "Adventure isn't hanging on a rope off the side of a mountain. Adventure is an attitude that we must apply to the day-to-day obstacles of life.",
        author: "John Amatt",
        category: "adventure",
        tags: ["attitude", "daily-obstacles", "mindset"]
    },
{
        id: 477,
        text: "I am not the same, having seen the moon shine on the other side of the world.",
        author: "Mary Anne Radmacher",
        category: "adventure",
        tags: ["transformation", "travel", "perspective-shift"]
    },
{
        id: 478,
        text: "Travel makes one modest. You see what a tiny place you occupy in the world.",
        author: "Gustave Flaubert",
        category: "adventure",
        tags: ["modesty", "tiny-place", "perspective"]
    },
{
        id: 479,
        text: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
        category: "adventure",
        tags: ["book-metaphor", "pages", "reading-world"]
    },
{
        id: 480,
        text: "Life begins at the end of your comfort zone.",
        author: "Neale Donald Walsch",
        category: "adventure",
        tags: ["comfort-zone-end", "beginning", "growth"]
    },
{
        id: 481,
        text: "Oh, the places you'll go!",
        author: "Dr. Seuss",
        category: "adventure",
        tags: ["places", "future", "excitement"]
    },
{
        id: 482,
        text: "No act of kindness, no matter how small, is ever wasted.",
        author: "Aesop",
        category: "kindness",
        tags: ["small-acts", "never-wasted", "impact"]
    },
{
        id: 483,
        text: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
        author: "Princess Diana",
        category: "kindness",
        tags: ["random-acts", "no-expectation", "karma"]
    },
{
        id: 484,
        text: "Kindness is a language which the deaf can hear and the blind can see.",
        author: "Mark Twain",
        category: "kindness",
        tags: ["universal-language", "accessibility", "perception"]
    },
{
        id: 485,
        text: "Three things in human life are important: the first is to be kind; the second is to be kind; and the third is to be kind.",
        author: "Henry James",
        category: "kindness",
        tags: ["importance", "emphasis", "repetition"]
    },
{
        id: 486,
        text: "Kindness is the sunshine in which virtue grows.",
        author: "Christian Nestell Bovee",
        category: "kindness",
        tags: ["sunshine", "virtue-growth", "nurturing"]
    },
{
        id: 487,
        text: "A warm smile is the universal language of kindness.",
        author: "William Arthur Ward",
        category: "kindness",
        tags: ["smile", "universal", "warmth"]
    },
{
        id: 488,
        text: "Do things for people not because of who they are or what they can do in return, but because of who you are.",
        author: "Harold S. Kushner",
        category: "kindness",
        tags: ["self-expression", "no-return", "character"]
    },
{
        id: 489,
        text: "Be kind whenever possible. It is always possible.",
        author: "Dalai Lama",
        category: "kindness",
        tags: ["always-possible", "choice", "consistency"]
    },
{
        id: 490,
        text: "Kindness costs nothing, yet it is the richest gift you can give someone.",
        author: "Anonymous",
        category: "kindness",
        tags: ["cost-nothing", "richest-gift", "value"]
    },
{
        id: 491,
        text: "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
        author: "Scott Adams",
        category: "kindness",
        tags: ["ripple-effect", "no-small-act", "endless-impact"]
    },
{
        id: 492,
        text: "Kindness is like snow — it beautifies everything it covers.",
        author: "Kahlil Gibran",
        category: "kindness",
        tags: ["snow-metaphor", "beautifying", "covering"]
    },
{
        id: 493,
        text: "You can accomplish by kindness what you cannot by force.",
        author: "Publilius Syrus",
        category: "kindness",
        tags: ["force-vs-kindness", "accomplishment", "gentle-power"]
    },
{
        id: 494,
        text: "Kind words can be short and easy to speak, but their echoes are truly endless.",
        author: "Mother Teresa",
        category: "kindness",
        tags: ["short-words", "endless-echoes", "lasting-impact"]
    },
{
        id: 495,
        text: "A single act of kindness throws out roots in all directions, and the roots spring up and make new trees.",
        author: "Amelia Earhart",
        category: "kindness",
        tags: ["roots", "trees", "multiplying-effect"]
    },
{
        id: 496,
        text: "The smallest act of kindness is worth more than the grandest intention.",
        author: "Oscar Wilde",
        category: "kindness",
        tags: ["smallest-act", "grandest-intention", "action-over-intention"]
    },
{
        id: 497,
        text: "Kindness is the golden chain by which society is bound together.",
        author: "Johann Wolfgang von Goethe",
        category: "kindness",
        tags: ["golden-chain", "society-binding", "connection"]
    },
{
        id: 498,
        text: "Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution.",
        author: "Kahlil Gibran",
        category: "kindness",
        tags: ["strength-not-weakness", "tenderness", "resolution"]
    },
{
        id: 499,
        text: "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.",
        author: "Dalai Lama",
        category: "kindness",
        tags: ["inner-happiness", "reciprocal-benefit", "peace"]
    },
{
        id: 500,
        text: "What this world needs is a new kind of army — the army of the kind.",
        author: "Cleveland Amory",
        category: "kindness",
        tags: ["army-of-kind", "collective-good", "movement"]
    },
{
        id: 501,
        text: "In a gentle way, you can shake the world.",
        author: "Mahatma Gandhi",
        category: "kindness",
        tags: ["gentle-power", "shaking-world", "nonviolent-change"]
    },
{
        id: 502,
        text: "There is a calmness to a life lived in gratitude, a quiet joy that settles into your bones.",
        author: "Ralph H. Blum",
        category: "serenity",
        tags: ["gratitude-calmness", "quiet-joy", "bone-deep"]
    },
{
        id: 504,
        text: "Serenity is not freedom from the storm, but peace within it.",
        author: "Anonymous",
        category: "serenity",
        tags: ["inner-calm", "storm-peace", "centered"]
    },
{
        id: 505,
        text: "Let the waters settle and you will see the moon and stars mirrored in your own being.",
        author: "Rumi",
        category: "serenity",
        tags: ["still-waters", "reflection", "cosmic-mirror"]
    },
{
        id: 506,
        text: "The soul always knows what to do to heal itself. The challenge is to silence the mind.",
        author: "Caroline Myss",
        category: "serenity",
        tags: ["soul-wisdom", "mind-silence", "healing"]
    },
{
        id: 507,
        text: "Be like a lake — calm, composed, and beautiful on the surface, but deep with life underneath.",
        author: "Debasish Mridha",
        category: "serenity",
        tags: ["lake-metaphor", "surface-depth", "composure"]
    },
{
        id: 508,
        text: "Find the calm inside the chaos. That's where your power lives.",
        author: "Brendon Burchard",
        category: "serenity",
        tags: ["chaos-to-calm", "inner-power", "centering"]
    },
{
        id: 509,
        text: "Nothing can disturb your peace of mind without your permission.",
        author: "Anonymous",
        category: "serenity",
        tags: ["permission-based", "peace-guarding", "boundaries"]
    },
{
        id: 510,
        text: "In the midst of movement and chaos, keep stillness inside of you.",
        author: "Deepak Chopra",
        category: "serenity",
        tags: ["stillness-amid-motion", "internal-anchor", "chaos"]
    },
{
        id: 511,
        text: "A calm mind brings inner strength and self-confidence.",
        author: "Dalai Lama",
        category: "serenity",
        tags: ["calm-mind", "strength-from-stillness", "confidence"]
    },
{
        id: 512,
        text: "The more tranquil a man becomes, the greater is his success, his influence, his power for good.",
        author: "James Allen",
        category: "serenity",
        tags: ["tranquility-success", "influence", "power-for-good"]
    },
{
        id: 513,
        text: "Learn to be silent. Let your quiet mind listen and absorb.",
        author: "Yang Cheng-fu",
        category: "serenity",
        tags: ["silence-practice", "absorption", "receptivity"]
    },
{
        id: 516,
        text: "Serenity is the music of a heart in harmony with itself.",
        author: "Debasish Mridha",
        category: "serenity",
        tags: ["heart-harmony", "inner-music", "self-alignment"]
    },
{
        id: 521,
        text: "There is no stress in the present moment. Stress exists only when we resist what is happening now.",
        author: "Anonymous",
        category: "serenity",
        tags: ["present-no-stress", "resistance", "acceptance"]
    },
{
        id: 522,
        text: "Make peace with silence, and discover who you truly are.",
        author: "Katherine Mansfield",
        category: "serenity",
        tags: ["silence-friendship", "self-discovery", "truth"]
    },
{
        id: 523,
        text: "The stillness of the night is where stars shine brightest.",
        author: "Anonymous",
        category: "serenity",
        tags: ["night-stillness", "starlight", "clarity"]
    },
{
        id: 524,
        text: "Your calm mind is the ultimate weapon against your challenges. So relax.",
        author: "Bryant McGill",
        category: "serenity",
        tags: ["calm-as-weapon", "relaxation", "resilience"]
    },
{
        id: 525,
        text: "Serenity is not about escaping the storm; it's about finding the eye within it.",
        author: "Anonymous",
        category: "serenity",
        tags: ["eye-of-storm", "centered-calm", "perspective"]
    },
{
        id: 526,
        text: "Let your days be gentle and your nights be peaceful. You deserve softness.",
        author: "Anonymous",
        category: "serenity",
        tags: ["gentle-days", "peaceful-nights", "deserving-softness"]
    },
{
        id: 527,
        text: "Magic is something you make.",
        author: "Roald Dahl",
        category: "magic",
        tags: ["creating-magic", "agency", "making"]
    },
{
        id: 528,
        text: "Those who don't believe in magic will never find it.",
        author: "Roald Dahl",
        category: "magic",
        tags: ["belief-required", "finding", "openness"]
    },
{
        id: 529,
        text: "Everything around you is magic if you're willing to look for it.",
        author: "Charles de Lint",
        category: "magic",
        tags: ["seeing-magic", "perception", "wonder"]
    },
{
        id: 530,
        text: "The world is full of magic things, patiently waiting for our senses to grow sharper.",
        author: "W.B. Yeats",
        category: "magic",
        tags: ["waiting-magic", "senses", "awareness"]
    },
{
        id: 531,
        text: "Magic exists. Who can doubt it, when there are rainbows and wildflowers, the music of the wind and the laughter of a child?",
        author: "Anonymous",
        category: "magic",
        tags: ["nature-magic", "rainbows", "child-laughter"]
    },
{
        id: 532,
        text: "You are pure magic. Never forget that.",
        author: "Anonymous",
        category: "magic",
        tags: ["self-as-magic", "affirmation", "worthiness"]
    },
{
        id: 533,
        text: "Those who dream by day are cognizant of many things which escape those who dream only by night.",
        author: "Edgar Allan Poe",
        category: "magic",
        tags: ["daydreams", "awareness", "possibility"]
    },
{
        id: 534,
        text: "Magic is believing in yourself. If you can do that, you can make anything happen.",
        author: "Johann Wolfgang von Goethe",
        category: "magic",
        tags: ["self-belief", "manifestation", "empowerment"]
    },
{
        id: 535,
        text: "The universe buries strange jewels deep within us all, and then stands back to see if we can find them.",
        author: "Elizabeth Gilbert",
        category: "magic",
        tags: ["universe-jewels", "hidden-gifts", "discovery"]
    },
{
        id: 536,
        text: "There is magic in the new beginning. Trust the journey.",
        author: "Anonymous",
        category: "magic",
        tags: ["new-beginnings", "trust", "journey-magic"]
    },
{
        id: 537,
        text: "Stars can't shine without darkness. There's magic even in the hard times.",
        author: "Anonymous",
        category: "magic",
        tags: ["stars-darkness", "hard-times-magic", "contrast"]
    },
{
        id: 538,
        text: "You've been criticizing yourself for years and it hasn't worked. Try approving of yourself and see what happens.",
        author: "Louise Hay",
        category: "magic",
        tags: ["self-approval", "experiment", "transformation"]
    },
{
        id: 539,
        text: "Magic is seeing possibility in the impossible.",
        author: "Anonymous",
        category: "magic",
        tags: ["possibility-thinking", "impossible-made-possible", "vision"]
    },
{
        id: 540,
        text: "The moment you believe magic exists, you'll start seeing it everywhere.",
        author: "Anonymous",
        category: "magic",
        tags: ["belief-perception", "everywhere-magic", "shift"]
    },
{
        id: 541,
        text: "Life doesn't have to be perfect to be magical. It just has to be real.",
        author: "Anonymous",
        category: "magic",
        tags: ["imperfect-magic", "authenticity", "real-life"]
    },
{
        id: 542,
        text: "Every day may not be good, but there is something good in every day. That's the magic.",
        author: "Alice Morse Earle",
        category: "magic",
        tags: ["daily-good", "hidden-blessings", "perspective"]
    },
{
        id: 543,
        text: "Wonder is the beginning of wisdom.",
        author: "Socrates",
        category: "magic",
        tags: ["wonder-seed", "wisdom-beginning", "curiosity"]
    },
{
        id: 544,
        text: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
        author: "Albert Einstein",
        category: "magic",
        tags: ["mysterious-beauty", "art-science-source", "awe"]
    },
{
        id: 545,
        text: "Keep your eyes open to the unexpected. Magic often arrives unannounced.",
        author: "Anonymous",
        category: "magic",
        tags: ["unexpected", "unannounced-magic", "openness"]
    },
{
        id: 546,
        text: "You are made of stardust and wishes and infinite possibility.",
        author: "Anonymous",
        category: "magic",
        tags: ["stardust", "wishes", "infinity"]
    },
{
        id: 547,
        text: "Believe in your own kind of magic. It's unique to you.",
        author: "Anonymous",
        category: "magic",
        tags: ["unique-magic", "individuality", "specialness"]
    },
{
        id: 548,
        text: "Miracles happen every day. We just need to notice them.",
        author: "Anonymous",
        category: "magic",
        tags: ["daily-miracles", "noticing", "awareness"]
    },
{
        id: 549,
        text: "There's a little bit of magic in every sunrise if you let yourself see it.",
        author: "Anonymous",
        category: "magic",
        tags: ["sunrise-magic", "allowing-seeing", "morning-vibes"]
    },
{
        id: 550,
        text: "Trust the timing of your life. There's magic in how everything unfolds.",
        author: "Anonymous",
        category: "magic",
        tags: ["divine-timing", "unfolding", "trust"]
    },
{
        id: 551,
        text: "You don't need a wand to create magic. Your energy, your words, your presence — that's enough.",
        author: "Anonymous",
        category: "magic",
        tags: ["no-wand-needed", "personal-power", "enoughness"]
    },
{
        id: 552,
        text: "Passion is energy. Feel the power that comes from focusing on what excites you.",
        author: "Oprah Winfrey",
        category: "passion",
        tags: ["energy-definition", "focus-excitement", "power"]
    },
{
        id: 553,
        text: "There is no passion to be found playing small — in settling for a life that is less than the one you are capable of living.",
        author: "Nelson Mandela",
        category: "passion",
        tags: ["no-playing-small", "capability", "full-potential"]
    },
{
        id: 554,
        text: "Passion is the genesis of genius.",
        author: "Tony Robbins",
        category: "passion",
        tags: ["genesis-of-genius", "origin", "fire-starting"]
    },
{
        id: 555,
        text: "Do it with passion or not at all.",
        author: "Anonymous",
        category: "passion",
        tags: ["all-or-nothing", "intensity", "commitment"]
    },
{
        id: 556,
        text: "When you set your soul on fire, the whole world comes to watch you burn.",
        author: "Anonymous",
        category: "passion",
        tags: ["soul-fire", "attraction", "radiance"]
    },
{
        id: 557,
        text: "Passion is what makes life interesting, exciting, and worth living.",
        author: "Anonymous",
        category: "passion",
        tags: ["life-interest", "excitement", "worth-living"]
    },
{
        id: 558,
        text: "Find what sets your soul on fire and never let anyone put it out.",
        author: "Anonymous",
        category: "passion",
        tags: ["soul-fire-protection", "defiance", "purpose"]
    },
{
        id: 559,
        text: "Energy flows where attention goes. Pour yours into what lights you up.",
        author: "Anonymous",
        category: "passion",
        tags: ["energy-flow", "attention", "what-lights-you-up"]
    },
{
        id: 560,
        text: "Don't ask what the world needs. Ask what makes you come alive, because what the world needs is people who have come alive.",
        author: "Howard Thurman",
        category: "passion",
        tags: ["come-alive", "world-needs", "vitality"]
    },
{
        id: 561,
        text: "Passion is the difference between having a job and having a calling.",
        author: "Anonymous",
        category: "passion",
        tags: ["job-vs-calling", "purpose-work", "vocation"]
    },
{
        id: 562,
        text: "Let your passion be the fuel that drives your purpose.",
        author: "Anonymous",
        category: "passion",
        tags: ["fuel-purpose", "drive", "motivation-engine"]
    },
{
        id: 563,
        text: "Only those who have found their true passion can understand the fire that burns within.",
        author: "Anonymous",
        category: "passion",
        tags: ["understanding-passion", "inner-fire", "knowing"]
    },
{
        id: 564,
        text: "When you're passionate about something, you don't need an alarm clock. Your excitement wakes you up.",
        author: "Anonymous",
        category: "passion",
        tags: ["no-alarm-needed", "excitement-energy", "natural-drive"]
    },
{
        id: 565,
        text: "Passion is contagious. Be a carrier.",
        author: "Anonymous",
        category: "passion",
        tags: ["contagious-energy", "spreading-fire", "influence"]
    },
{
        id: 566,
        text: "The things you are passionate about are not random. They are your calling.",
        author: "Anonymous",
        category: "passion",
        tags: ["not-random", "calling-signs", "destiny"]
    },
{
        id: 567,
        text: "Life is too short to spend doing things that don't light your soul on fire.",
        author: "Anonymous",
        category: "passion",
        tags: ["life-too-short", "soul-fire", "meaningful-living"]
    },
{
        id: 568,
        text: "Passion isn't something you find. It's something you create by diving headfirst into what moves you.",
        author: "Anonymous",
        category: "passion",
        tags: ["creating-passion", "diving-in", "active-engagement"]
    },
{
        id: 569,
        text: "Be so passionate about what you do that your energy becomes undeniable.",
        author: "Anonymous",
        category: "passion",
        tags: ["undeniable-energy", "presence", "aura"]
    },
{
        id: 570,
        text: "Your passion is waiting for your courage to catch up.",
        author: "Isabelle LaRochelle",
        category: "passion",
        tags: ["courage-catching-up", "waiting-passion", "bravery-needed"]
    },
{
        id: 571,
        text: "Great achievements require great passion. Mediocrity requires none.",
        author: "Anonymous",
        category: "passion",
        tags: ["achievement-passion", "mediocrity-vs-greatness", "effort"]
    },
{
        id: 572,
        text: "Let the beauty of what you love be what you do.",
        author: "Rumi",
        category: "passion",
        tags: ["love-into-action", "beauty-doing", "alignment"]
    },
{
        id: 573,
        text: "Passion is the wind that fills your sails. Without it, you drift.",
        author: "Anonymous",
        category: "passion",
        tags: ["wind-sails", "drifting-vs-sailing", "direction"]
    },
{
        id: 574,
        text: "When work feels like play, you've found your passion.",
        author: "Anonymous",
        category: "passion",
        tags: ["work-as-play", "flow-state", "joyful-effort"]
    },
{
        id: 575,
        text: "Burn bright. Burn long. Let your passion be the thing they remember about you.",
        author: "Anonymous",
        category: "passion",
        tags: ["burning-bright", "legacy", "memorable-fire"]
    },
{
        id: 577,
        text: "In every walk with nature, one receives far more than he seeks.",
        author: "John Muir",
        category: "nature",
        tags: ["walking-nature", "unexpected-receiving", "abundance"]
    },
{
        id: 578,
        text: "Look deep into nature, and then you will understand everything better.",
        author: "Albert Einstein",
        category: "nature",
        tags: ["deep-looking", "understanding", "natural-wisdom"]
    },
{
        id: 579,
        text: "The earth has music for those who listen.",
        author: "William Shakespeare",
        category: "nature",
        tags: ["earth-music", "listening", "harmony"]
    },
{
        id: 580,
        text: "Adopt the pace of nature: her secret is patience.",
        author: "Ralph Waldo Emerson",
        category: "nature",
        tags: ["pace-of-nature", "patience-secret", "timing"]
    },
{
        id: 581,
        text: "Nature does not hurry, yet everything gets accomplished.",
        author: "Lao Tzu",
        category: "nature",
        tags: ["no-hurry", "accomplishment", "natural-flow"]
    },
{
        id: 582,
        text: "The clearest way into the Universe is through a forest wilderness.",
        author: "John Muir",
        category: "nature",
        tags: ["forest-path", "universe-access", "wilderness"]
    },
{
        id: 583,
        text: "Just as one candle lights another, nature teaches us that kindness spreads.",
        author: "Anonymous",
        category: "nature",
        tags: ["candle-light", "kindness-spreading", "natural-lessons"]
    },
{
        id: 584,
        text: "In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful.",
        author: "Alice Walker",
        category: "nature",
        tags: ["imperfect-perfection", "trees-beauty", "acceptance"]
    },
{
        id: 585,
        text: "The mountains are calling and I must go.",
        author: "John Muir",
        category: "nature",
        tags: ["mountains-calling", "must-go", "adventure-call"]
    },
{
        id: 586,
        text: "And into the forest I go, to lose my mind and find my soul.",
        author: "John Muir",
        category: "nature",
        tags: ["forest-soul", "losing-mind", "finding-self"]
    },
{
        id: 587,
        text: "Nature always wears the colors of the spirit.",
        author: "Ralph Waldo Emerson",
        category: "nature",
        tags: ["spirit-colors", "reflection", "mood-nature"]
    },
{
        id: 588,
        text: "The sun does not shine for a few trees and flowers, but for the wide world's joy.",
        author: "Henry Ward Beecher",
        category: "nature",
        tags: ["sun-for-all", "wide-world", "generosity"]
    },
{
        id: 589,
        text: "Flowers are the earth's way of smiling. Be someone's sunshine today.",
        author: "Anonymous",
        category: "nature",
        tags: ["flowers-smiling", "earth-smile", "being-sunshine"]
    },
{
        id: 590,
        text: "Like wildflowers, you must allow yourself to grow in all the places people thought you never would.",
        author: "E.V.",
        category: "nature",
        tags: ["wildflower-growth", "unexpected-places", "thriving"]
    },
{
        id: 591,
        text: "The ocean stirs the heart, inspires the imagination, and brings eternal joy to the soul.",
        author: "Wyland",
        category: "nature",
        tags: ["ocean-heart", "inspiration", "eternal-joy"]
    },
{
        id: 592,
        text: "Every flower blooms in its own time. Don't compare your journey to others.",
        author: "Ken Poirot",
        category: "nature",
        tags: ["own-time", "no-comparison", "blooming"]
    },
{
        id: 593,
        text: "Go outside. Breathe. Remember you are part of something much bigger than yourself.",
        author: "Anonymous",
        category: "nature",
        tags: ["go-outside", "bigger-picture", "connection"]
    },
{
        id: 594,
        text: "The sky is the daily bread of the eyes.",
        author: "Ralph Waldo Emerson",
        category: "nature",
        tags: ["sky-bread", "daily-nourishment", "visual-feast"]
    },
{
        id: 595,
        text: "To sit in the shade on a fine day and look upon verdure is the most perfect refreshment.",
        author: "Jane Austen",
        category: "nature",
        tags: ["shade-verdure", "refreshment", "simple-pleasures"]
    },
{
        id: 596,
        text: "Trees teach us that the best time to plant a dream was twenty years ago. The second best time is now.",
        author: "Proverb (adapted)",
        category: "nature",
        tags: ["tree-wisdom", "planting-dreams", "now-is-best"]
    },
{
        id: 597,
        text: "After every storm comes a rainbow. Nature always finds a way to heal.",
        author: "Anonymous",
        category: "nature",
        tags: ["storm-rainbow", "healing-cycle", "hope"]
    },
{
        id: 598,
        text: "The earth laughs in flowers. Make her laugh often.",
        author: "Ralph Waldo Emerson",
        category: "nature",
        tags: ["earth-laughing", "flowers-joy", "cultivating-beauty"]
    },
{
        id: 599,
        text: "We don't inherit the earth from our ancestors. We borrow it from our children.",
        author: "Native American Proverb",
        category: "nature",
        tags: ["borrowed-earth", "stewardship", "future-generations"]
    },
{
        id: 600,
        text: "Let nature be your teacher. She has lessons no classroom can offer.",
        author: "Anonymous",
        category: "nature",
        tags: ["nature-teacher", "beyond-classroom", "organic-learning"]
    },
{
        id: 601,
        text: "Roots grounded, branches reaching high. That's how you grow strong.",
        author: "Anonymous",
        category: "nature",
        tags: ["roots-branches", "grounded-growth", "strength"]
    },
{
        id: 602,
        text: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney",
        category: "dreams",
        tags: ["dreams-true", "courage-pursuit", "pursuing"]
    },
{
        id: 606,
        text: "A dream becomes a goal when action is taken toward its achievement.",
        author: "Bo Bennett",
        category: "dreams",
        tags: ["dream-to-goal", "action-required", "manifestation"]
    },
{
        id: 607,
        text: "Don't tell people your dreams. Show them.",
        author: "Anonymous",
        category: "dreams",
        tags: ["show-dont-tell", "demonstration", "proof"]
    },
{
        id: 608,
        text: "Dreams don't work unless you do.",
        author: "John C. Maxwell",
        category: "dreams",
        tags: ["work-required", "action-dreams", "effort"]
    },
{
        id: 610,
        text: "Your imagination is your preview of life's coming attractions.",
        author: "Albert Einstein",
        category: "dreams",
        tags: ["imagination-preview", "coming-attractions", "visualization"]
    },
{
        id: 611,
        text: "Dreams are the seeds of change. Nothing ever grows without a seed, and nothing ever changes without a dream.",
        author: "Anonymous",
        category: "dreams",
        tags: ["seeds-of-change", "growth-origin", "dream-necessity"]
    },
{
        id: 612,
        text: "The best time to start was yesterday. The second best time is now. Chase your dreams.",
        author: "Anonymous",
        category: "dreams",
        tags: ["now-is-best", "chasing", "urgency"]
    },
{
        id: 613,
        text: "What you think about, you bring about. Dream with intention.",
        author: "Anonymous",
        category: "dreams",
        tags: ["thought-manifestation", "intentional-dreaming", "focus"]
    },
{
        id: 614,
        text: "Don't watch the clock; do what it does. Keep going. Your dreams are counting on you.",
        author: "Sam Levenson",
        category: "dreams",
        tags: ["keep-going", "clock-metaphor", "dreams-count-on-you"]
    },
{
        id: 615,
        text: "It's not just about dreaming. It's about waking up and making those dreams reality.",
        author: "Anonymous",
        category: "dreams",
        tags: ["waking-up", "reality-making", "action"]
    },
{
        id: 616,
        text: "Dream so big that your reality has to catch up.",
        author: "Anonymous",
        category: "dreams",
        tags: ["big-dreams", "reality-catching-up", "expansion"]
    },
{
        id: 617,
        text: "Your dreams deserve more than just wishful thinking. They deserve action.",
        author: "Anonymous",
        category: "dreams",
        tags: ["beyond-wishing", "deserving-action", "honor-your-dreams"]
    },
{
        id: 618,
        text: "Every great achievement started as a dream in someone's heart.",
        author: "Anonymous",
        category: "dreams",
        tags: ["heart-dreams", "great-achievements", "why-not-you"]
    },
{
        id: 619,
        text: "Write your dreams in pencil, but chase them with pen. Edit as needed, never give up.",
        author: "Anonymous",
        category: "dreams",
        tags: ["flexible-dreams", "persistent-chase", "adaptability"]
    },
{
        id: 620,
        text: "The distance between your dreams and reality is called action.",
        author: "Anonymous",
        category: "dreams",
        tags: ["distance-action", "bridge-gap", "doing"]
    },
{
        id: 621,
        text: "Surround yourself with people who believe in your dreams. Their faith fuels yours.",
        author: "Anonymous",
        category: "dreams",
        tags: ["supportive-circle", "faith-fuel", "community"]
    },
{
        id: 622,
        text: "Dream without fear. Love without limits. Live like today is all you have.",
        author: "Anonymous",
        category: "dreams",
        tags: ["fearless-dreaming", "limitless-love", "present-living"]
    },
{
        id: 623,
        text: "Your dream job doesn't exist. You must create it.",
        author: "Anonymous",
        category: "dreams",
        tags: ["create-dream-job", "entrepreneurship", "crafting-career"]
    },
{
        id: 624,
        text: "Stars can't shine without darkness. Dreams can't flourish without challenges.",
        author: "Anonymous",
        category: "dreams",
        tags: ["darkness-necessary", "challenge-growth", "flourishing"]
    },
{
        id: 625,
        text: "Be brave enough to be bad at something new. Your future self will thank you.",
        author: "Anonymous",
        category: "dreams",
        tags: ["brave-beginner", "future-gratitude", "growth-through-discomfort"]
    },
{
        id: 626,
        text: "One day, you will wake up and realize you're living the life you used to dream about. Keep going.",
        author: "Anonymous",
        category: "dreams",
        tags: ["dream-life-realized", "persistence-payoff", "keep-going"]
    },
{
        id: 627,
        text: "Joy does not simply happen to us. We have to choose joy and keep choosing it every day.",
        author: "Henri J.M. Nouwen",
        category: "joy",
        tags: ["choosing-joy", "daily-choice", "active-happiness"]
    },
{
        id: 629,
        text: "Find ecstasy in life! The mere sense of living is joy enough.",
        author: "Emily Dickinson",
        category: "joy",
        tags: ["ecstasy-living", "sense-of-life", "pure-being"]
    },
{
        id: 630,
        text: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
        author: "Thich Nhat Hanh",
        category: "joy",
        tags: ["smile-joy-reciprocity", "body-mind", "fake-it-till-make-it"]
    },
{
        id: 631,
        text: "Joy is a light that fills you from within. No one can take it from you unless you let them.",
        author: "Anonymous",
        category: "joy",
        tags: ["inner-light", "protection", "sovereignty"]
    },
{
        id: 632,
        text: "The most wasted of all days is one without laughter.",
        author: "E.E. Cummings",
        category: "joy",
        tags: ["laughter-essential", "wasted-days", "humor"]
    },
{
        id: 633,
        text: "Joy is not in things; it is in us.",
        author: "Richard Wagner",
        category: "joy",
        tags: ["internal-joy", "not-material", "within-us"]
    },
{
        id: 634,
        text: "Let your joy rise. Let it overflow. Let it touch everyone you meet.",
        author: "Anonymous",
        category: "joy",
        tags: ["rising-joy", "overflowing", "contagious-happiness"]
    },
{
        id: 635,
        text: "Happiness is a butterfly which, when pursued, is always beyond grasp, but which, if you will sit down quietly, may alight upon you.",
        author: "Nathaniel Hawthorne",
        category: "joy",
        tags: ["butterfly-metaphor", "quiet-approach", "allowing"]
    },
{
        id: 636,
        text: "We cannot choose our external circumstances, but we can always choose our own joy.",
        author: "Epictetus",
        category: "joy",
        tags: ["circumstance-independence", "choice", "freedom"]
    },
{
        id: 637,
        text: "Joy is the infallible sign of the presence of God.",
        author: "Teilhard de Chardin",
        category: "joy",
        tags: ["divine-presence", "spiritual-joy", "sacredness"]
    },
{
        id: 638,
        text: "Dance like nobody's watching. Love like you'll never hurt. Sing like nobody's listening. Live like it's heaven on earth.",
        author: "Mark Twain / William W. Purkey",
        category: "joy",
        tags: ["dance-like", "carefree-living", "heaven-on-earth"]
    },
{
        id: 639,
        text: "Gladness of spirit can make even a difficult path feel like dancing.",
        author: "Anonymous",
        category: "joy",
        tags: ["gladness-dancing", "difficult-paths", "attitude"]
    },
{
        id: 640,
        text: "Collect moments, not things. Joy lives in experiences.",
        author: "Anonymous",
        category: "joy",
        tags: ["moments-over-things", "experiences", "minimalism"]
    },
{
        id: 641,
        text: "A joyful heart is good medicine. It heals the body and lifts the spirit.",
        author: "Proverbs 17:22 (adapted)",
        category: "joy",
        tags: ["medicine-heart", "healing", "uplifting"]
    },
{
        id: 642,
        text: "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
        author: "Marianne Williamson",
        category: "joy",
        tags: ["recognition", "goodness-awareness", "appreciation"]
    },
{
        id: 643,
        text: "Be silly. Be honest. Be kind. Be uniquely, wonderfully, unapologetically you. That's where joy lives.",
        author: "Anonymous",
        category: "joy",
        tags: ["authenticity", "silly-honest-kind", "unique-joy"]
    },
{
        id: 644,
        text: "Laughter is the sun that drives winter from the human face.",
        author: "Victor Hugo",
        category: "joy",
        tags: ["laughter-sun", "winter-face", "warmth"]
    },
{
        id: 645,
        text: "Joy doesn't arrive in a package. It's built in small moments, one choice at a time.",
        author: "Anonymous",
        category: "joy",
        tags: ["building-joy", "small-moments", "incremental-happiness"]
    },
{
        id: 646,
        text: "If you carry joy in your heart, you can heal any moment.",
        author: "Carlos Santana",
        category: "joy",
        tags: ["heart-carried-joy", "healing-moments", "portable-happiness"]
    },
{
        id: 647,
        text: "Choose joy. Not because life is perfect, but because you refuse to let imperfection steal your happiness.",
        author: "Anonymous",
        category: "joy",
        tags: ["choosing-despite", "imperfection-resistance", "happiness-defense"]
    },
{
        id: 648,
        text: "Joy is the organic fruit of a life aligned with truth and love.",
        author: "Anonymous",
        category: "joy",
        tags: ["organic-fruit", "alignment", "truth-love"]
    },
{
        id: 649,
        text: "Today, choose joy over worry. Choose laughter over complaint. Choose love over fear.",
        author: "Anonymous",
        category: "joy",
        tags: ["daily-choices", "positive-selection", "conscious-living"]
    },
{
        id: 650,
        text: "Your joy is your gift to the world. Don't dim it for anyone.",
        author: "Anonymous",
        category: "joy",
        tags: ["gift-to-world", "undimming", "radiance"]
    },
{
        id: 651,
        text: "Spread joy like confetti. Toss it everywhere, let it fall where it may, and watch the world get brighter.",
        author: "Anonymous",
        category: "joy",
        tags: ["confetti-metaphor", "spreading-joy", "brightening-world"]
    },
{
        id: 652,
        text: "Hope is being able to see that there is light despite all of the darkness.",
        author: "Desmond Tutu",
        category: "hope",
        tags: ["light", "darkness", "optimism"]
    },
{
        id: 653,
        text: "Everything that is done in this world is done by hope.",
        author: "Martin Luther",
        category: "hope",
        tags: ["action", "belief", "foundation"]
    },
{
        id: 654,
        text: "Hope is the thing with feathers that perches in the soul.",
        author: "Emily Dickinson",
        category: "hope",
        tags: ["metaphor", "soul", "resilience"]
    },
{
        id: 655,
        text: "They who hope for no other hope are our salvation.",
        author: "Adonis",
        category: "hope",
        tags: ["salvation", "perseverance", "strength"]
    },
{
        id: 656,
        text: "Hope is a waking dream.",
        author: "Aristotle",
        category: "hope",
        tags: ["dreams", "awakening", "vision"]
    },
{
        id: 657,
        text: "The very least you can do in your life is figure out what you hope for.",
        author: "Barbara Kingsolver",
        category: "hope",
        tags: ["purpose", "clarity", "direction"]
    },
{
        id: 658,
        text: "Hope is the only thing stronger than fear.",
        author: "Suzanne Collins",
        category: "hope",
        tags: ["fear", "courage", "strength"]
    },
{
        id: 659,
        text: "When you have lost hope, you have lost everything. But when you still have it, you have everything.",
        author: "Helen Keller",
        category: "hope",
        tags: ["everything", "perspective", "value"]
    },
{
        id: 660,
        text: "Hope smiles from the threshold of the year to come, whispering 'it will be happier.'",
        author: "Alfred Lord Tennyson",
        category: "hope",
        tags: ["future", "happiness", "promise"]
    },
{
        id: 661,
        text: "There was never a night or a problem that could defeat sunrise or hope.",
        author: "Bernard Williams",
        category: "hope",
        tags: ["sunrise", "morning", "victory"]
    },
{
        id: 662,
        text: "Hope is the golden path to the future.",
        author: "Eleanor Roosevelt",
        category: "hope",
        tags: ["future", "path", "golden"]
    },
{
        id: 663,
        text: "While there is life, there is hope. While there is hope, there is life.",
        author: "Anonymous",
        category: "hope",
        tags: ["life", "connection", "vitality"]
    },
{
        id: 664,
        text: "Hope is not predicting the future, it's creating the future.",
        author: "Shimon Peres",
        category: "hope",
        tags: ["creation", "action", "agency"]
    },
{
        id: 666,
        text: "Hope is like a road in the country; there wasn't ever a road, but when many people walk on it, the road comes into existence.",
        author: "Lu Xun",
        category: "hope",
        tags: ["journey", "creation", "collective"]
    },
{
        id: 667,
        text: "Three things sustain life: sweet water, fresh air, and hope.",
        author: "African Proverb",
        category: "hope",
        tags: ["essentials", "life-sustaining", "necessity"]
    },
{
        id: 668,
        text: "Hope is the parent of faith. If you would have faith, you must first have hope.",
        author: "C.S. Lewis",
        category: "hope",
        tags: ["faith", "parent", "foundation"]
    },
{
        id: 669,
        text: "In the midst of winter, I found there was, within me, an invincible summer.",
        author: "Albert Camus",
        category: "hope",
        tags: ["inner-strength", "seasons", "invincibility"]
    },
{
        id: 670,
        text: "Hope is the quiet voice at the end of the day saying: I will try again tomorrow.",
        author: "Anonymous",
        category: "hope",
        tags: ["persistence", "tomorrow", "gentle"]
    },
{
        id: 671,
        text: "The wound is the place where the Light enters you.",
        author: "Rumi",
        category: "hope",
        tags: ["wounds", "light", "healing"]
    },
{
        id: 672,
        text: "Never give up on what you really want. The person with big dreams is more powerful than one with all the facts.",
        author: "Albert Einstein",
        category: "hope",
        tags: ["dreams", "persistence", "power"]
    },
{
        id: 673,
        text: "Hope is the anchor of the soul, both sure and steadfast.",
        author: "Biblical Proverb",
        category: "hope",
        tags: ["anchor", "stability", "grounding"]
    },
{
        id: 674,
        text: "Dawn breaks after the darkest night. Your breakthrough is coming.",
        author: "Anonymous",
        category: "hope",
        tags: ["dawn", "breakthrough", "timing"]
    },
{
        id: 675,
        text: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will live as one.",
        author: "John Lennon",
        category: "hope",
        tags: ["dreams", "unity", "world-peace"]
    },
{
        id: 676,
        text: "Every sunset brings the promise of a new dawn.",
        author: "Ralph Waldo Emerson",
        category: "hope",
        tags: ["sunsets", "new-beginnings", "cycles"]
    },
{
        id: 677,
        text: "When you reach the end of your rope, tie a knot in it and hold on.",
        author: "Thomas Jefferson",
        category: "hope",
        tags: ["persistence", "holding-on", "resilience"]
    },
{
        id: 678,
        text: "Hope is a verb with its sleeves rolled up.",
        author: "David Whyte",
        category: "hope",
        tags: ["action", "work", "active"]
    },
{
        id: 679,
        text: "The sun will rise and we will try again.",
        author: "Twenty One Pilots",
        category: "hope",
        tags: ["sun", "renewal", "music-reference"]
    },
{
        id: 680,
        text: "Your present circumstances don't determine where you can go; they merely determine where you start.",
        author: "Nido Qubein",
        category: "hope",
        tags: ["starting-point", "potential", "perspective"]
    },
{
        id: 711,
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
        category: "balance",
        tags: ["movement", "momentum", "action"]
    },
{
        id: 712,
        text: "Balance is not something you find, it's something you create.",
        author: "Jana Kingsford",
        category: "balance",
        tags: ["creation", "active", "intentional"]
    },
{
        id: 713,
        text: "The best and safest thing is to keep a balance in your life, acknowledge the great powers around us and in us.",
        author: "Pierre Curie",
        category: "balance",
        tags: ["safety", "acknowledgment", "powers"]
    },
{
        id: 714,
        text: "Work hard in silence. Let success be your noise.",
        author: "Frank Ocean",
        category: "balance",
        tags: ["work", "silence", "success"]
    },
{
        id: 715,
        text: "Happiness is not a matter of intensity but of balance, order, rhythm, and harmony.",
        author: "Thomas Merton",
        category: "balance",
        tags: ["happiness", "rhythm", "harmony"]
    },
{
        id: 716,
        text: "We need to maintain balance between thought and action, planning and doing.",
        author: "Debasish Mridha",
        category: "balance",
        tags: ["thought-action", "planning-doing", "equilibrium"]
    },
{
        id: 717,
        text: "Burnout happens when you avoid being human for too long.",
        author: "Michael Gungor",
        category: "balance",
        tags: ["burnout", "humanity", "rest"]
    },
{
        id: 719,
        text: "The key to keeping your balance is knowing when you've lost it.",
        author: "Anonymous",
        category: "balance",
        tags: ["awareness", "recognition", "check-in"]
    },
{
        id: 720,
        text: "You can do it all, but not all at once.",
        author: "Anonymous",
        category: "balance",
        tags: ["priorities", "sequencing", "patience"]
    },
{
        id: 721,
        text: "Slow down and enjoy life. It's not only the scenery you miss by going too fast — you also miss the sense of where you are going and why.",
        author: "Eddie Cantor",
        category: "balance",
        tags: ["slow-down", "scenery", "direction"]
    },
{
        id: 722,
        text: "Take rest; a field that has rested gives a bountiful crop.",
        author: "Ovid",
        category: "balance",
        tags: ["rest", "fields", "productivity"]
    },
{
        id: 723,
        text: "Balance is the perfect state of still water. Let that become our model.",
        author: "Lao Tzu",
        category: "balance",
        tags: ["still-water", "model", "calm"]
    },
{
        id: 724,
        text: "It's okay to prioritize peace over productivity today.",
        author: "Anonymous",
        category: "balance",
        tags: ["peace", "productivity", "permission"]
    },
{
        id: 725,
        text: "The art of living lies less in eliminating our troubles than in growing with them.",
        author: "Bernard Meltzer",
        category: "balance",
        tags: ["growing", "troubles", "adaptation"]
    },
{
        id: 726,
        text: "You owe yourself the love you so freely give to others.",
        author: "Anonymous",
        category: "balance",
        tags: ["self-love", "giving", "deserving"]
    },
{
        id: 727,
        text: "Ambition is the path to success. Persistence is the vehicle you arrive in.",
        author: "Bill Bradley",
        category: "balance",
        tags: ["ambition", "persistence", "arrival"]
    },
{
        id: 728,
        text: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.",
        author: "Ralph Marston",
        category: "balance",
        tags: ["rest", "renewal", "holistic"]
    },
{
        id: 730,
        text: "The grass is greener where you water it.",
        author: "Neil Barringham",
        category: "balance",
        tags: ["grass", "watering", "cultivation"]
    },
{
        id: 731,
        text: "You cannot find peace by avoiding life.",
        author: "Virginia Woolf",
        category: "balance",
        tags: ["peace", "avoidance", "engagement"]
    },
{
        id: 732,
        text: "Self-care is giving the world the best of you, instead of what's left of you.",
        author: "Katie Reed",
        category: "balance",
        tags: ["self-care", "best-self", "boundaries"]
    },
{
        id: 733,
        text: "Balance is not better time management, but better boundary management.",
        author: "Betsy Jacobson",
        category: "balance",
        tags: ["time-management", "boundaries", "management"]
    },
{
        id: 735,
        text: "Make peace with your mind and your heart will follow.",
        author: "Anonymous",
        category: "balance",
        tags: ["mind-heart", "peace", "alignment"]
    },
{
        id: 736,
        text: "The whole point of getting things done is knowing what to leave undone.",
        author: "Stella Adler",
        category: "balance",
        tags: ["prioritization", "leaving-undone", "wisdom"]
    },
{
        id: 737,
        text: "Your calm mind is the ultimate weapon against challenges.",
        author: "Bryant McGill",
        category: "balance",
        tags: ["calm", "weapon", "challenges"]
    },
{
        id: 738,
        text: "Well-being is found somewhere between 'not enough' and 'too much.'",
        author: "Anonymous",
        category: "balance",
        tags: ["enough", "too-much", "middle-path"]
    },
{
        id: 739,
        text: "Be gentle with yourself. You're doing the best you can.",
        author: "Anonymous",
        category: "balance",
        tags: ["gentleness", "best-effort", "compassion"]
    },
{
        id: 740,
        text: "Balance is not something you find, it's something you create every single day.",
        author: "Anonymous",
        category: "balance",
        tags: ["daily-creation", "intentional-living", "practice"]
    },
{
        id: 741,
        text: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou",
        category: "inspiration",
        tags: ["defeats", "undefeated", "spirit"]
    },
{
        id: 743,
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
        category: "inspiration",
        tags: ["future", "creation", "agency"]
    },
{
        id: 748,
        text: "Success is not how high you have climbed, but how you make a difference to the world.",
        author: "Unknown",
        category: "inspiration",
        tags: ["success", "difference", "impact"]
    },
{
        id: 749,
        text: "You are enough just as you are. Each mistake, each triumph, and each lesson has made you into who you need to be.",
        author: "Meghan Markle",
        category: "inspiration",
        tags: ["enough", "authenticity", "worthiness"]
    },
{
        id: 750,
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau",
        category: "inspiration",
        tags: ["confidence", "dreams", "imagined-life"]
    },
{
        id: 751,
        text: "What you seek is seeking you.",
        author: "Rumi",
        category: "inspiration",
        tags: ["seeking", "connection", "destiny"]
    },
{
        id: 752,
        text: "Believe deeply in yourself and your infinite potential. The universe has your back.",
        author: "Anonymous",
        category: "inspiration",
        tags: ["belief", "potential", "universe"]
    },
{
        id: 756,
        text: "Dream it. Wish it. Do it.",
        author: "Unknown",
        category: "inspiration",
        tags: ["dream-wish-do", "action", "manifestation"]
    },
{
        id: 757,
        text: "Success doesn't just find you. You have to go out and get it.",
        author: "Unknown",
        category: "inspiration",
        tags: ["success-hunting", "proactive", "effort"]
    },
{
        id: 759,
        text: "Dream bigger. Boldly. Unapologetically.",
        author: "Anonymous",
        category: "inspiration",
        tags: ["dream-big", "bold", "unapologetic"]
    },
{
        id: 763,
        text: "It's going to be hard, but hard does not mean impossible.",
        author: "Unknown",
        category: "inspiration",
        tags: ["hard", "possible", "encouragement"]
    },
{
        id: 764,
        text: "Don't wait for opportunity. Create it.",
        author: "Unknown",
        category: "inspiration",
        tags: ["opportunity", "creation", "initiative"]
    },
{
        id: 765,
        text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
        author: "Unknown",
        category: "inspiration",
        tags: ["testing", "strengths", "discovery"]
    },
{
        id: 766,
        text: "The key to success is to focus on goals, not obstacles.",
        author: "Unknown",
        category: "inspiration",
        tags: ["goals-vs-obstacles", "focus", "clarity"]
    },
{
        id: 767,
        text: "Great minds discuss ideas. Average minds discuss events. Small minds discuss people.",
        author: "Eleanor Roosevelt",
        category: "inspiration",
        tags: ["great-minds", "ideas", "elevation"]
    },
{
        id: 768,
        text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean",
        category: "inspiration",
        tags: ["wind", "sails", "adaptation"]
    },
{
        id: 769,
        text: "Whatever you are, be a good one.",
        author: "Abraham Lincoln",
        category: "inspiration",
        tags: ["be-good", "excellence", "character"]
    },
{
        id: 770,
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe",
        category: "inspiration",
        tags: ["start-now", "use-what-you-have", "action"]
    },
{
        id: 774,
        text: "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives.",
        author: "Akshay Dubey",
        category: "healing",
        tags: ["damage", "control", "freedom"]
    },
{
        id: 775,
        text: "Give yourself the same care and attention that you give to others and watch yourself bloom.",
        author: "Leah Larimos",
        category: "healing",
        tags: ["self-care", "bloom", "attention"]
    },
{
        id: 776,
        text: "You don't have to control your thoughts. You just have to stop letting them control you.",
        author: "Dan Millman",
        category: "healing",
        tags: ["thoughts", "control", "liberation"]
    },
{
        id: 777,
        text: "To heal is to touch with love that which we previously touched with fear.",
        author: "Stephen Levine",
        category: "healing",
        tags: ["love-vs-fear", "touching", "transformation"]
    },
{
        id: 778,
        text: "Scars show us where we have been, they do not dictate where we are going.",
        author: "Anonymous",
        category: "healing",
        tags: ["scars", "past", "future-direction"]
    },
{
        id: 779,
        text: "The beautiful thing about healing is that it can happen at any moment, even now.",
        author: "Rachel Brathen",
        category: "healing",
        tags: ["any-moment", "now", "possibility"]
    },
{
        id: 780,
        text: "Be gentle with yourself, you're doing the best you can.",
        author: "Anonymous",
        category: "healing",
        tags: ["gentleness", "best-effort", "self-compassion"]
    },
{
        id: 782,
        text: "Your illness does not define you. Your strength and courage do.",
        author: "Anonymous",
        category: "healing",
        tags: ["illness", "definition", "strength"]
    },
{
        id: 783,
        text: "Sometimes self-care is exercise and eating right. Sometimes it's spending an entire day in bed.",
        author: "Anonymous",
        category: "healing",
        tags: ["self-care-varieties", "balance", "listening-to-body"]
    },
{
        id: 784,
        text: "The process of healing is not linear. Some days you'll feel amazing, others you won't.",
        author: "Anonymous",
        category: "healing",
        tags: ["non-linear", "ups-and-downs", "patience"]
    },
{
        id: 785,
        text: "You survived every difficult day so far. Keep going.",
        author: "Anonymous",
        category: "healing",
        tags: ["survival", "track-record", "persistence"]
    },
{
        id: 786,
        text: "Healing may not be going back to who you were before, but becoming someone new.",
        author: "Anonymous",
        category: "healing",
        tags: ["becoming-new", "evolution", "post-trauma-growth"]
    },
{
        id: 787,
        text: "It's okay to not be okay, as long as you're not staying there.",
        author: "Anonymous",
        category: "healing",
        tags: ["okay-not-okay", "temporary", "moving-forward"]
    },
{
        id: 788,
        text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
        author: "Anonymous",
        category: "healing",
        tags: ["mental-health", "happiness", "necessity"]
    },
{
        id: 789,
        text: "Recovery is not a race. You don't have to feel guilty for taking time.",
        author: "Anonymous",
        category: "healing",
        tags: ["recovery", "no-race", "guilt-free"]
    },
{
        id: 790,
        text: "Letting go doesn't mean that you don't care. It means that you can't control it.",
        author: "Anonymous",
        category: "healing",
        tags: ["letting-go", "control", "release"]
    },
{
        id: 791,
        text: "You are allowed to be both a masterpiece and a work in progress simultaneously.",
        author: "Sophia Bush",
        category: "healing",
        tags: ["masterpiece", "work-in-progress", "duality"]
    },
{
        id: 792,
        text: "The brave overcome fear to move forward. The fearful let fear stop them.",
        author: "Anonymous",
        category: "healing",
        tags: ["bravery", "fear", "forward-motion"]
    },
{
        id: 793,
        text: "Every day is a chance to begin again. To heal again. To choose differently.",
        author: "Anonymous",
        category: "healing",
        tags: ["daily-chances", "beginning-again", "choice"]
    },
{
        id: 795,
        text: "Forgive yourself for not knowing what you didn't know before you learned it.",
        author: "Anonymous",
        category: "healing",
        tags: ["forgiveness", "learning-curve", "self-mercy"]
    },
{
        id: 796,
        text: "Healing is an art. It takes time, practice, and patience.",
        author: "Anonymous",
        category: "healing",
        tags: ["art-of-healing", "time", "practice"]
    },
{
        id: 797,
        text: "You have been through a lot. Be proud of how far you've come.",
        author: "Anonymous",
        category: "healing",
        tags: ["pride", "progress", "acknowledgment"]
    },
{
        id: 798,
        text: "The soul usually knows what to do to heal itself. The challenge is to silence the mind.",
        author: "Caroline Myss",
        category: "healing",
        tags: ["soul-knows", "silence-mind", "inner-guidance"]
    },
{
        id: 799,
        text: "Treat yourself with the kindness you'd offer a friend.",
        author: "Anonymous",
        category: "healing",
        tags: ["friendship-with-self", "kindness", "perspective-shift"]
    },
{
        id: 801,
        text: "Abundance is not something we acquire. It is something we tune into.",
        author: "Wayne Dyer",
        category: "abundance",
        tags: ["tuning-in", "frequency", "consciousness"]
    },
{
        id: 802,
        text: "When you realize there is nothing lacking, the whole world belongs to you.",
        author: "Lao Tzu",
        category: "abundance",
        tags: ["lacking-nothing", "world-belongs", "completeness"]
    },
{
        id: 803,
        text: "Gratitude is the multiplier of abundance. What you appreciate, appreciates.",
        author: "Anonymous",
        category: "abundance",
        tags: ["gratitude-multiplier", "appreciation", "law-of-attraction"]
    },
{
        id: 804,
        text: "The universe works in crazy ways. Stay open to receiving.",
        author: "Anonymous",
        category: "abundance",
        tags: ["universe", "openness", "receiving"]
    },
{
        id: 805,
        text: "Abundance is a mindset, not a bank account.",
        author: "Anonymous",
        category: "abundance",
        tags: ["mindset", "money-perspective", "wealth-consciousness"]
    },
{
        id: 806,
        text: "There is no limit to our abundance because our consciousness is infinite.",
        author: "John Randolph Price",
        category: "abundance",
        tags: ["limitless", "consciousness", "infinity"]
    },
{
        id: 807,
        text: "What you focus on expands. Focus on abundance.",
        author: "Anonymous",
        category: "abundance",
        tags: ["focus-expands", "abundance-focus", "attention"]
    },
{
        id: 808,
        text: "An abundance mentality springs from internal security, not from external comparisons.",
        author: "Stephen Covey",
        category: "abundance",
        tags: ["internal-security", "no-comparison", "mindset"]
    },
{
        id: 809,
        text: "Expect your every need to be met. Expect the answer to every problem. Expect abundance on every level.",
        author: "Eileen Caddy",
        category: "abundance",
        tags: ["expectation", "needs-met", "faith"]
    },
{
        id: 810,
        text: "You can't receive more until you're grateful for what you already have.",
        author: "Anonymous",
        category: "abundance",
        tags: ["gratitude-first", "receiving-more", "appreciation"]
    },
{
        id: 811,
        text: "Abundance flows to those whose cups are already full of gratitude.",
        author: "Anonymous",
        category: "abundance",
        tags: ["full-cups", "gratitude-flow", "readiness"]
    },
{
        id: 812,
        text: "The world is full of abundance and opportunity, far beyond anything we can imagine.",
        author: "Norman Vincent Peale",
        category: "abundance",
        tags: ["full-world", "opportunity-beyond-imagination", "possibility"]
    },
{
        id: 813,
        text: "See yourself living in abundance and you will attract it.",
        author: "Rhonda Byrne",
        category: "abundance",
        tags: ["visualization", "attraction", "living-abundance"]
    },
{
        id: 814,
        text: "Small shifts in your thinking, and small changes in your energy, lead to massive differences in your life.",
        author: "Idil Ahmed",
        category: "abundance",
        tags: ["small-shifts", "massive-differences", "leverage"]
    },
{
        id: 815,
        text: "Your wealth is hidden in the problems you solve for others.",
        author: "Anonymous",
        category: "abundance",
        tags: ["problem-solving", "value-creation", "service"]
    },
{
        id: 816,
        text: "Abundance is not about having everything. It's about appreciating everything you have.",
        author: "Anonymous",
        category: "abundance",
        tags: ["appreciation", "having-everything", "perspective"]
    },
{
        id: 817,
        text: "When you celebrate the success of others, you open the door to your own.",
        author: "Anonymous",
        category: "abundance",
        tags: ["celebrating-others", "opening-doors", "generosity"]
    },
{
        id: 818,
        text: "There is plenty for everyone, including you.",
        author: "Anonymous",
        category: "abundance",
        tags: ["plenty-for-all", "inclusion", "enough"]
    },
{
        id: 819,
        text: "Scarcity is a story we tell ourselves. Abundance is the truth we remember.",
        author: "Anonymous",
        category: "abundance",
        tags: ["scarcity-story", "abundance-truth", "rewriting-narrative"]
    },
{
        id: 820,
        text: "Give more than you take. That's how abundance grows.",
        author: "Anonymous",
        category: "abundance",
        tags: ["giving-more", "taking-less", "generosity-cycle"]
    },
{
        id: 821,
        text: "Your thoughts create your reality. Think abundant thoughts.",
        author: "Anonymous",
        category: "abundance",
        tags: ["thoughts-create-reality", "abundant-thinking", "manifestation"]
    },
{
        id: 822,
        text: "Nature doesn't hurry, yet everything gets accomplished. Abundance follows natural timing.",
        author: "Lao Tzu (adapted)",
        category: "abundance",
        tags: ["natural-timing", "patience", "divine-timing"]
    },
{
        id: 823,
        text: "Count your blessings, not your deficits.",
        author: "Anonymous",
        category: "abundance",
        tags: ["count-blessings", "no-deficits", "focus-shift"]
    },
{
        id: 824,
        text: "The more you share, the more you have. That's the paradox of abundance.",
        author: "Anonymous",
        category: "abundance",
        tags: ["sharing-paradox", "having-more", "generosity"]
    },
{
        id: 825,
        text: "You deserve abundance simply because you exist.",
        author: "Anonymous",
        category: "abundance",
        tags: ["deserving", "existence-right", "birthright"]
    },
{
        id: 826,
        text: "Let go of lack mentality. There is always enough.",
        author: "Anonymous",
        category: "abundance",
        tags: ["lack-mentality", "enough-mentality", "release"]
    },
{
        id: 827,
        text: "Prosperity is a way of living and thinking, not just money or things.",
        author: "Anonymous",
        category: "abundance",
        tags: ["prosperity-lifestyle", "thinking-rich", "beyond-material"]
    },
{
        id: 828,
        text: "Richness is having freedom of time to do what you want, when you want.",
        author: "Robert Kiyosaki",
        category: "abundance",
        tags: ["time-freedom", "richness-definition", "lifestyle"]
    },
{
        id: 829,
        text: "Abundance attracts abundance. Vibrate at the frequency of what you desire.",
        author: "Anonymous",
        category: "abundance",
        tags: ["attraction", "frequency", "vibration"]
    },
{
        id: 830,
        text: "Your cup overflows when you stop worrying about it running empty.",
        author: "Anonymous",
        category: "abundance",
        tags: ["overflowing-cup", "trust", "release-worry"]
    },
{
        id: 831,
        text: "Alone we can do so little; together we can do so much.",
        author: "Helen Keller",
        category: "unity",
        tags: ["together", "collaboration", "power"]
    },
{
        id: 832,
        text: "Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.",
        author: "Mattie Stepanek",
        category: "unity",
        tags: ["teamwork", "collaboration", "wonderful-things"]
    },
{
        id: 833,
        text: "We are only as strong as we are united, as weak as we are divided.",
        author: "J.K. Rowling",
        category: "unity",
        tags: ["strength-in-unity", "division-weakness", "together"]
    },
{
        id: 834,
        text: "Coming together is a beginning, staying together is progress, and working together is success.",
        author: "Henry Ford",
        category: "unity",
        tags: ["coming-together", "staying-together", "working-together"]
    },
{
        id: 835,
        text: "None of us is as smart as all of us.",
        author: "Ken Blanchard",
        category: "unity",
        tags: ["collective-intelligence", "team-smart", "wisdom"]
    },
{
        id: 836,
        text: "We rise by lifting others.",
        author: "Robert Ingersoll",
        category: "unity",
        tags: ["rising", "lifting-others", "mutual-support"]
    },
{
        id: 837,
        text: "In diversity there is beauty and there is strength.",
        author: "Maya Angelou",
        category: "unity",
        tags: ["diversity", "beauty", "strength"]
    },
{
        id: 838,
        text: "Our ability to reach unity in diversity will be the beauty and the test of our civilization.",
        author: "Mahatma Gandhi",
        category: "unity",
        tags: ["unity-diversity", "civilization-test", "beauty"]
    },
{
        id: 839,
        text: "So powerful is the light of unity that it can illuminate the whole earth.",
        author: "Bahá'u'lláh",
        category: "unity",
        tags: ["light-of-unity", "illumination", "global"]
    },
{
        id: 840,
        text: "Where there is unity there is always victory.",
        author: "Publilius Syrus",
        category: "unity",
        tags: ["unity-victory", "winning-together", "success"]
    },
{
        id: 841,
        text: "We are all threads in the tapestry of humanity. Each one matters.",
        author: "Anonymous",
        category: "unity",
        tags: ["tapestry", "threads", "interconnected"]
    },
{
        id: 842,
        text: "No one is whole until they accept themselves as part of something bigger.",
        author: "Anonymous",
        category: "unity",
        tags: ["wholeness", "something-bigger", "belonging"]
    },
{
        id: 843,
        text: "A snowflake is one of nature's fragile things, but look what they can do when they stick together.",
        author: "Vesta M. Kelly",
        category: "unity",
        tags: ["snowflakes", "sticking-together", "fragile-power"]
    },
{
        id: 844,
        text: "Connection is why we're here. We are hardwired for connection.",
        author: "Brené Brown",
        category: "unity",
        tags: ["connection-purpose", "hardwired", "belonging"]
    },
{
        id: 845,
        text: "The greatness of a community is most accurately measured by the compassionate actions of its members.",
        author: "Coretta Scott King",
        category: "unity",
        tags: ["community-greatness", "compassionate-actions", "measure"]
    },
{
        id: 846,
        text: "We are more alike, my friends, than we are unalike.",
        author: "Maya Angelou",
        category: "unity",
        tags: ["alikeness", "common-humanity", "connection"]
    },
{
        id: 847,
        text: "Individually we are one drop. Together we are an ocean.",
        author: "Ryunosuke Satoro",
        category: "unity",
        tags: ["drop-ocean", "individual-collective", "power"]
    },
{
        id: 848,
        text: "Solidarity is not a matter of altruism. When we stand together, we stand strong.",
        author: "Adela Cortina",
        category: "unity",
        tags: ["solidarity", "standing-strong", "mutual-aid"]
    },
{
        id: 849,
        text: "There is immense power when a group of people with similar interests gets together to work toward the same goals.",
        author: "Ibrahim Hooper",
        category: "unity",
        tags: ["similar-interests", "same-goals", "collective-power"]
    },
{
        id: 850,
        text: "One person can make a difference, and everyone should try.",
        author: "John F. Kennedy",
        category: "unity",
        tags: ["one-person-difference", "trying", "responsibility"]
    },
{
        id: 851,
        text: "Many hands make light work.",
        author: "John Heywood",
        category: "unity",
        tags: ["many-hands", "shared-work", "cooperation"]
    },
{
        id: 852,
        text: "Teamwork makes the dream work.",
        author: "John C. Maxwell",
        category: "unity",
        tags: ["teamwork", "dreams", "collaboration"]
    },
{
        id: 853,
        text: "If you want to go fast, go alone. If you want to go far, go together.",
        author: "African Proverb",
        category: "unity",
        tags: ["fast-alone", "far-together", "wisdom"]
    },
{
        id: 854,
        text: "We cannot seek achievement for ourselves and forget about progress and prosperity for our community.",
        author: "Barack Obama",
        category: "unity",
        tags: ["achievement-community", "prosperity-shared", "responsibility"]
    },
{
        id: 855,
        text: "Compassion brings us together in a way that nothing else can.",
        author: "Anonymous",
        category: "unity",
        tags: ["compassion-unites", "together", "love"]
    },
{
        id: 856,
        text: "The bond that links your true family is not blood, but respect and joy in each other's lives.",
        author: "Richard Bach",
        category: "unity",
        tags: ["chosen-family", "respect", "joy"]
    },
{
        id: 857,
        text: "When we join forces, we become unstoppable.",
        author: "Anonymous",
        category: "unity",
        tags: ["unstoppable", "joining-forces", "power"]
    },
{
        id: 858,
        text: "Community is much more than belonging to something; it's about doing something together that makes belonging matter.",
        author: "Anthony J. D'Angelo",
        category: "unity",
        tags: ["community-action", "belonging-matters", "participation"]
    },
{
        id: 859,
        text: "Love is the force that transforms and improves the Soul of the World.",
        author: "Paulo Coelho",
        category: "unity",
        tags: ["love-force", "transformation", "soul"]
    },
{
        id: 860,
        text: "We are one, after all, you and I, together with many other small I's.",
        author: "Erich Maria Remarque",
        category: "unity",
        tags: ["oneness", "small-i's", "collective-identity"]
    },
{
        id: 861,
        text: "And suddenly you just know... it's time to start something new and trust the magic of beginnings.",
        author: "Meister Eckhart",
        category: "transformation",
        tags: ["knowing", "new-beginnings", "magic"]
    },
{
        id: 862,
        text: "The caterpillar thinks the world is over; the butterfly knows it's only beginning.",
        author: "Anonymous",
        category: "transformation",
        tags: ["caterpillar-butterfly", "perspective", "metamorphosis"]
    },
{
        id: 863,
        text: "Personal transformation can and does have global effects. As we change, so does the world.",
        author: "Epictetus",
        category: "transformation",
        tags: ["personal-global", "ripple-effect", "change"]
    },
{
        id: 864,
        text: "The phoenix must burn to emerge.",
        author: "Janet Fitch",
        category: "transformation",
        tags: ["phoenix", "burning-emerging", "rebirth"]
    },
{
        id: 865,
        text: "What you resist persists. What you embrace transforms.",
        author: "Carl Jung",
        category: "transformation",
        tags: ["resistance-persistence", "embracing-transformation", "acceptance"]
    },
{
        id: 866,
        text: "The goal of transformation isn't to become someone new. It's to become more fully who you truly are.",
        author: "Anonymous",
        category: "transformation",
        tags: ["true-self", "authenticity", "uncovering"]
    },
{
        id: 868,
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
        category: "transformation",
        tags: ["being-change", "world-change", "leadership-by-example"]
    },
{
        id: 869,
        text: "Transformation literally means going beyond your form.",
        author: "Wayne Dyer",
        category: "transformation",
        tags: ["beyond-form", "going-beyond", "expansion"]
    },
{
        id: 870,
        text: "The moment you're ready to quit is usually the moment right before the miracle happens.",
        author: "Unknown",
        category: "transformation",
        tags: ["quitting-moment", "miracle-timing", "persistence"]
    },
{
        id: 871,
        text: "Every cell in your body is constantly changing. Transformation is your nature.",
        author: "Anonymous",
        category: "transformation",
        tags: ["cells-changing", "nature-of-transformation", "biology"]
    },
{
        id: 872,
        text: "You don't grow when things are easy. You grow when you face challenges.",
        author: "Anonymous",
        category: "transformation",
        tags: ["easy-vs-hard", "challenge-growth", "discomfort"]
    },
{
        id: 873,
        text: "The butterfly counts not months but moments, and has time enough.",
        author: "Rabindranath Tagore",
        category: "transformation",
        tags: ["moments-not-months", "present-time", "butterfly-wisdom"]
    },
{
        id: 874,
        text: "Your life does not get better by chance; it gets better by change.",
        author: "Jim Rohn",
        category: "transformation",
        tags: ["chance-vs-change", "active-transformation", "improvement"]
    },
{
        id: 876,
        text: "Metamorphosis requires dissolution before reformation. Let the old dissolve gracefully.",
        author: "Anonymous",
        category: "transformation",
        tags: ["dissolution", "reformation", "letting-go"]
    },
{
        id: 877,
        text: "The version of you that you're becoming is worth every struggle along the way.",
        author: "Anonymous",
        category: "transformation",
        tags: ["becoming-version", "struggle-worth-it", "future-self"]
    },
{
        id: 878,
        text: "Change is inevitable. Growth is optional. Choose wisely.",
        author: "John C. Maxwell",
        category: "transformation",
        tags: ["inevitability", "optional-growth", "choice"]
    },
{
        id: 879,
        text: "You can't start the next chapter if you keep re-reading the last one.",
        author: "Anonymous",
        category: "transformation",
        tags: ["chapters", "moving-forward", "letting-go"]
    },
{
        id: 880,
        text: "Stars can't shine without darkness. Your transformation needs contrast.",
        author: "Anonymous",
        category: "transformation",
        tags: ["stars-darkness", "contrast-needed", "shadow-work"]
    },

{
        id: 882,
        text: "Embrace uncertainty. Some of the most beautiful chapters won't have titles until much later.",
        author: "Anonymous",
        category: "transformation",
        tags: ["uncertainty", "untitled-chapters", "trust"]
    },
{
        id: 883,
        text: "You're not falling apart. You're falling into place.",
        author: "Anonymous",
        category: "transformation",
        tags: ["falling-apart", "falling-into-place", "reframe"]
    },
{
        id: 884,
        text: "The cave you fear to enter holds the treasure you seek.",
        author: "Joseph Campbell",
        category: "transformation",
        tags: ["cave-fear", "treasure-seeking", "hero-journey"]
    },
{
        id: 885,
        text: "Transformation is not a destination. It's a continuous unfolding.",
        author: "Anonymous",
        category: "transformation",
        tags: ["continuous-process", "unfolding", "journey"]
    },
{
        id: 886,
        text: "Who you were is not who you have to be. Write your own next act.",
        author: "Anonymous",
        category: "transformation",
        tags: ["past-not-future", "writing-next-act", "agency"]
    },
{
        id: 887,
        text: "Breakdowns often precede breakthroughs. Trust the process.",
        author: "Anonymous",
        category: "transformation",
        tags: ["breakdown-breakthrough", "process-trust", "crisis"]
    },
{
        id: 888,
        text: "The lotus flower blooms most beautifully from the deepest mud.",
        author: "Buddhist Saying",
        category: "transformation",
        tags: ["lotus-mud", "blooming-adversity", "beauty-from-struggle"]
    },
{
        id: 889,
        text: "Your current situation is not your final destination. The best is yet to come.",
        author: "Anonymous",
        category: "transformation",
        tags: ["current-not-final", "best-yet-to-come", "hope"]
    },
{
        id: 890,
        text: "Evolution is the secret for the next step. Revolution is the catalyst.",
        author: "Anonymous",
        category: "transformation",
        tags: ["evolution", "revolution", "change-agents"]
    },
{
        id: 891,
        text: "You have power over your mind—not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius",
        category: "empowerment",
        tags: ["mind-power", "internal-control", "stoicism"]
    },
{
        id: 893,
        text: "I am not a product of my circumstances. I am a product of my decisions.",
        author: "Stephen Covey",
        category: "empowerment",
        tags: ["decisions-over-circumstances", "agency", "choice"]
    },
{
        id: 894,
        text: "The most common way people give up their power is by thinking they don't have any.",
        author: "Alice Walker",
        category: "empowerment",
        tags: ["power-perception", "self-disempowerment", "awareness"]
    },
{
        id: 895,
        text: "You are more powerful than you know. Own it.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["owning-power", "unknown-strength", "claiming"]
    },
{
        id: 896,
        text: "Stop waiting for permission to be extraordinary.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["permission", "extraordinary", "self-authorizing"]
    },
{
        id: 897,
        text: "Your voice matters. Use it boldly.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["voice-matters", "speaking-up", "boldness"]
    },
{
        id: 898,
        text: "Empowered women empower women.",
        author: "Unknown",
        category: "empowerment",
        tags: ["women-empowering", "chain-effect", "community"]
    },
{
        id: 899,
        text: "You were born to stand out, not fit in.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["stand-out", "fit-in", "uniqueness"]
    },
{
        id: 900,
        text: "Claim your throne. You've earned it.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["throne", "earning", "sovereignty"]
    },
{
        id: 901,
        text: "Nobody can take your place. Your magic is uniquely yours.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["unique-place", "magic", "irreplaceable"]
    },
{
        id: 902,
        text: "Step into your power. The world needs your light.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["stepping-in", "world-needs-you", "light-sharing"]
    },
{
        id: 903,
        text: "You don't need to be perfect to be powerful. Just be present.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["perfect-vs-powerful", "presence", "authenticity"]
    },
{
        id: 904,
        text: "Power is not given. It's taken—by those who dare.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["taking-power", "daring", "courage"]
    },
{
        id: 905,
        text: "Your potential is endless. Stop putting limits on yourself.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["endless-potential", "removing-limits", "expansion"]
    },
{
        id: 906,
        text: "Be the protagonist of your own life. Not a supporting character.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["protagonist", "supporting-character", "agency"]
    },
{
        id: 907,
        text: "You have survived 100% of your bad days. You're built for this.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["survival-rate", "built-for-this", "resilience"]
    },
{
        id: 908,
        text: "Own your story or someone else will tell it for you.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["owning-story", "narrative-control", "voice"]
    },
{
        id: 910,
        text: "You are the CEO of your life. Start making executive decisions.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["CEO-life", "executive-decisions", "leadership"]
    },
{
        id: 911,
        text: "Your opinion of yourself is the only one that matters.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["self-opinion-only", "validation-source", "self-trust"]
    },
{
        id: 912,
        text: "Don't shrink to fit spaces you've outgrown.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["shrinking", "outgrown-spaces", "growth"]
    },
{
        id: 913,
        text: "Powerful people don't apologize for existing.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["existing-without-apology", "occupying-space", "presence"]
    },
{
        id: 914,
        text: "You set the standard for how others treat you.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["standards", "how-treated", "boundaries"]
    },
{
        id: 915,
        text: "Lead from within. Your inner compass knows the way.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["inner-leadership", "compass", "guidance"]
    },
{
        id: 916,
        text: "Stop doubting yourself. Work on believing yourself.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["doubt-vs-belief", "self-trust-building", "confidence"]
    },
{
        id: 917,
        text: "You are the artist of your reality. Paint boldly.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["artist-reality", "painting-boldly", "creation"]
    },
{
        id: 918,
        text: "True power is gentle. It doesn't need to announce itself.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["gentle-power", "quiet-strength", "subtle"]
    },
{
        id: 919,
        text: "Your energy introduces you before you speak. Make it count.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["energy-introduction", "vibe", "presence"]
    },
{
        id: 920,
        text: "You didn't come this far to only come this far.",
        author: "Anonymous",
        category: "empowerment",
        tags: ["continuing-journey", "momentum", "progress"]
    },
{
        id: 922,
        text: "Health is a state of complete harmony of the body, mind, and spirit.",
        author: "B.K.S. Iyengar",
        category: "wellness",
        tags: ["complete-health", "harmony", "holistic"]
    },
{
        id: 923,
        text: "The greatest wealth is health.",
        author: "Virgil",
        category: "wellness",
        tags: ["wealth-health", "priority", "value"]
    },
{
        id: 924,
        text: "Self-care is not selfish. You cannot serve from an empty vessel.",
        author: "Eleanor Brown",
        category: "wellness",
        tags: ["not-selfish", "empty-vessel", "service"]
    },
{
        id: 925,
        text: "Wellness is not a 'medical fix' but a way of living—a lifestyle sensitive and responsive to all the dimensions of body, mind, and spirit.",
        author: "Greg Anderson",
        category: "wellness",
        tags: ["lifestyle", "dimensions", "holistic-living"]
    },
{
        id: 926,
        text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
        author: "Buddha",
        category: "wellness",
        tags: ["duty", "body-mind-connection", "clarity"]
    },
{
        id: 927,
        text: "A healthy outside starts from the inside.",
        author: "Robert Urich",
        category: "wellness",
        tags: ["inside-outside", "internal-health", "foundations"]
    },
{
        id: 928,
        text: "Take time for yourself—for your health, for your sanity, for your soul.",
        author: "Anonymous",
        category: "wellness",
        tags: ["time-for-self", "sanity", "soul-care"]
    },
{
        id: 929,
        text: "Movement is medicine. Your body was designed to move.",
        author: "Anonymous",
        category: "wellness",
        tags: ["movement", "medicine", "design"]
    },
{
        id: 930,
        text: "Sleep is the best meditation.",
        author: "Dalai Lama",
        category: "wellness",
        tags: ["sleep", "meditation", "rest"]
    },
{
        id: 931,
        text: "You are what you eat. Fuel your body with love.",
        author: "Anonymous",
        category: "wellness",
        tags: ["nutrition", "fuel", "loving-food"]
    },
{
        id: 932,
        text: "Hydration is self-care in its simplest form.",
        author: "Anonymous",
        category: "wellness",
        tags: ["water", "hydration", "simple-care"]
    },
{
        id: 933,
        text: "Listen to your body. It speaks when the mind is quiet.",
        author: "Anonymous",
        category: "wellness",
        tags: ["body-listening", "quiet-mind", "awareness"]
    },
{
        id: 934,
        text: "Rest is productive. Recovery is training.",
        author: "Anonymous",
        category: "wellness",
        tags: ["rest-productive", "recovery-training", "athlete-mindset"]
    },
{
        id: 935,
        text: "Your wellness is an investment, not an expense.",
        author: "Anonymous",
        category: "wellness",
        tags: ["investment", "expense-mindset", "value"]
    },
{
        id: 936,
        text: "Breathe deeply until sweet air extinguishes the burn of fear in your lungs.",
        author: "Atticus Poetry",
        category: "wellness",
        tags: ["breathing", "fear-release", "lungs"]
    },
{
        id: 937,
        text: "A walk in nature walks the soul back home.",
        author: "Anonymous",
        category: "wellness",
        tags: ["nature-walk", "soul-home", "grounding"]
    },
{
        id: 938,
        text: "Your body achieves what your mind believes.",
        author: "Anonymous",
        category: "wellness",
        tags: ["mind-body-belief", "achievement", "psychology"]
    },
{
        id: 939,
        text: "Wellness is the connection of paths: physical, emotional, spiritual, social, intellectual.",
        author: "Anonymous",
        category: "wellness",
        tags: ["paths-connected", "multi-dimensional", "integration"]
    },
{
        id: 940,
        text: "Make yourself a priority once in a while. It's not selfish. It's necessary.",
        author: "Anonymous",
        category: "wellness",
        tags: ["priority", "necessary", "self-first"]
    },
{
        id: 941,
        text: "Healthy habits compound over time. Start small.",
        author: "Anonymous",
        category: "wellness",
        tags: ["habits-compound", "starting-small", "consistency"]
    },
{
        id: 942,
        text: "Your health account, your bank account—they're both real. Invest in both.",
        author: "Anonymous",
        category: "wellness",
        tags: ["health-account", "bank-account", "dual-investment"]
    },
{
        id: 943,
        text: "Stress less, live more. Worry changes nothing.",
        author: "Anonymous",
        category: "wellness",
        tags: ["stress-reduction", "living-more", "worry-uselessness"]
    },
{
        id: 944,
        text: "Morning sunlight sets your circadian rhythm. Greet the day.",
        author: "Anonymous",
        category: "wellness",
        tags: ["morning-light", "circadian-rhythm", "routines"]
    },
{
        id: 945,
        text: "Strong is the new skinny. Celebrate what your body can DO.",
        author: "Anonymous",
        category: "wellness",
        tags: ["strong-not-skinny", "body-capabilities", "celebration"]
    },
{
        id: 946,
        text: "Mental health is health. Period.",
        author: "Anonymous",
        category: "wellness",
        tags: ["mental-health-equality", "period", "advocacy"]
    },
{
        id: 947,
        text: "Treat your body like it belongs to someone you love.",
        author: "Anonymous",
        category: "wellness",
        tags: ["body-as-beloved", "loving-treatment", "perspective"]
    },
{
        id: 948,
        text: "Progress, not perfection, in your wellness journey.",
        author: "Anonymous",
        category: "wellness",
        tags: ["wellness-progress", "perfection-release", "journey"]
    },
{
        id: 949,
        text: "You can't pour from an empty cup. Fill yours first.",
        author: "Anonymous",
        category: "wellness",
        tags: ["empty-cup", "filling-first", "boundaries"]
    },
{
        id: 950,
        text: "Your future self will thank you for the healthy choices you make today.",
        author: "Anonymous",
        category: "wellness",
        tags: ["future-self-gratitude", "healthy-choices", "today"]
    },
{
        id: 951,
        text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman",
        category: "positivity",
        tags: ["sunshine", "shadows-behind", "optimism"]
    },
{
        id: 953,
        text: "Positive anything is better than negative nothing.",
        author: "Elbert Hubbard",
        category: "positivity",
        tags: ["positive-anything", "negative-nothing", "comparison"]
    },
{
        id: 954,
        text: "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
        author: "Les Brown",
        category: "positivity",
        tags: ["1440-minutes", "opportunities", "daily-impact"]
    },
{
        id: 955,
        text: "Throw off the bowlines. Sail away from the safe harbor. Catch the trade winds.",
        author: "Mark Twain",
        category: "positivity",
        tags: ["adventure", "safe-harbor", "trade-winds"]
    },
{
        id: 956,
        text: "Positivity is a superpower. Wear your cape proudly.",
        author: "Anonymous",
        category: "positivity",
        tags: ["superpower", "cape", "pride"]
    },
{
        id: 957,
        text: "Your vibe attracts your tribe. Keep it positive.",
        author: "Anonymous",
        category: "positivity",
        tags: ["vibe-attracts-tribe", "positivity-magnetism", "social"]
    },
{
        id: 958,
        text: "The sun is a daily reminder that we too can rise again from the darkness.",
        author: "Anonymous",
        category: "positivity",
        tags: ["sun-rising", "darkness-to-light", "daily-reminder"]
    },
{
        id: 959,
        text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
        author: "Helen Keller",
        category: "positivity",
        tags: ["optimism-faith", "achievement", "hope-confidence"]
    },
{
        id: 960,
        text: "Positive thinkers see the invisible, feel the intangible, and achieve the impossible.",
        author: "Anonymous",
        category: "positivity",
        tags: ["invisible-visible", "intangible-feel", "impossible-achieved"]
    },
{
        id: 961,
        text: "Every day may not be good, but there is something good in every day.",
        author: "Alice Morse Earle",
        category: "positivity",
        tags: ["daily-good", "finding-good", "perspective"]
    },
{
        id: 962,
        text: "Surround yourself with those who only lift you higher.",
        author: "Oprah Winfrey",
        category: "positivity",
        tags: ["surroundings", "lifting-higher", "people-choice"]
    },
{
        id: 963,
        text: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
        author: "Willie Nelson",
        category: "positivity",
        tags: ["thought-replacement", "positive-results", "causality"]
    },
{
        id: 964,
        text: "Staying positive doesn't mean you have to be happy all the time. It means that even on hard days, you know better ones are coming.",
        author: "Anonymous",
        category: "positivity",
        tags: ["not-always-happy", "hard-days", "better-coming"]
    },
{
        id: 965,
        text: "Your mind is a garden. Your thoughts are the seeds. You can grow flowers or weeds.",
        author: "Anonymous",
        category: "positivity",
        tags: ["garden-mind", "seeds-thoughts", "flowers-weeds"]
    },
{
        id: 966,
        text: "Write it on your heart that every day is the best day of the year.",
        author: "Ralph Waldo Emerson",
        category: "positivity",
        tags: ["heart-writing", "best-day", "affirmation"]
    },
{
        id: 968,
        text: "The more you praise and bless your surroundings, the more you'll find to praise and bless.",
        author: "Anonymous",
        category: "positivity",
        tags: ["praise-cycle", "blessings", "abundance-loop"]
    },
{
        id: 969,
        text: "Be the reason someone smiles today.",
        author: "Anonymous",
        category: "positivity",
        tags: ["reason-to-smile", "making-others-happy", "kindness"]
    },
{
        id: 970,
        text: "Positive vibes only. It's a lifestyle, not just a hashtag.",
        author: "Anonymous",
        category: "positivity",
        tags: ["vibes-only", "lifestyle", "brand-aligned"]
    },
{
        id: 971,
        text: "Your energy is contagious. Make sure it's worth catching.",
        author: "Anonymous",
        category: "positivity",
        tags: ["contagious-energy", "worth-catching", "influence"]
    },
{
        id: 972,
        text: "Look for something positive in each day, even if some days you have to look a little harder.",
        author: "Anonymous",
        category: "positivity",
        tags: ["looking-positive", "some-days-harder", "effort"]
    },
{
        id: 974,
        text: "Be a reflection of what you'd like to receive.",
        author: "Anonymous",
        category: "positivity",
        tags: ["reflection-desire", "mirror-principle", "karma"]
    },
{
        id: 975,
        text: "When it rains, look for rainbows. When it's dark, look for stars.",
        author: "Anonymous",
        category: "positivity",
        tags: ["rainbows-in-rain", "stars-in-dark", "hope-seeking"]
    },
{
        id: 976,
        text: "A positive attitude gives you power over your circumstances instead of your circumstances having power over you.",
        author: "Joyce Meyer",
        category: "positivity",
        tags: ["attitude-power", "circumstances", "control"]
    },
{
        id: 978,
        text: "The only difference between a good day and a bad day is your attitude.",
        author: "Anonymous",
        category: "positivity",
        tags: ["attitude-difference", "good-bad-day", "perspective"]
    },
{
        id: 979,
        text: "Radiate positivity like the sun radiates warmth.",
        author: "Anonymous",
        category: "positivity",
        tags: ["radiate", "sun-warmth", "warmth-giving"]
    },
{
        id: 980,
        text: "Keep looking up—that's the secret of life.",
        author: "Charles Schulz (Snoopy)",
        category: "positivity",
        tags: ["looking-up", "secret-of-life", "optimism"]
    },
{
        id: 982,
        text: "Change your thoughts and you change your world.",
        author: "Norman Vincent Peale",
        category: "mindset",
        tags: ["thought-change", "world-change", "power-of-thinking"]
    },
{
        id: 983,
        text: "The mind is everything. What you think you become.",
        author: "Buddha",
        category: "mindset",
        tags: ["mind-is-everything", "thinking-becoming", "manifestation"]
    },
{
        id: 984,
        text: "Your limitations—it's only your imagination.",
        author: "Unknown",
        category: "mindset",
        tags: ["limitations", "imagination", "barriers"]
    },
{
        id: 985,
        text: "Watch your thoughts, they become your words. Watch your words, they become your actions.",
        author: "Lao Tzu",
        category: "mindset",
        tags: ["thoughts-words-actions", "chain-reaction", "awareness"]
    },
{
        id: 986,
        text: "A strong mindset is the foundation of every success story.",
        author: "Anonymous",
        category: "mindset",
        tags: ["mindset-foundation", "success-stories", "building-blocks"]
    },
{
        id: 987,
        text: "You don't see the world as it is. You see it as you are.",
        author: "Anaïs Nin",
        category: "mindset",
        tags: ["perception-projection", "world-as-you-are", "subjectivity"]
    },
{
        id: 988,
        text: "Successful people do what unsuccessful people are not willing to do.",
        author: "Jim Rohn",
        category: "mindset",
        tags: ["successful-habits", "willingness", "discipline"]
    },
{
        id: 990,
        text: "Your brain can't distinguish between what's real and what's vividly imagined. Visualize success.",
        author: "Anonymous",
        category: "mindset",
        tags: ["brain-visualization", "real-vs-imagined", "neuroscience"]
    },
{
        id: 991,
        text: "Growth mindset: I don't know how... YET.",
        author: "Carol Dweck concept",
        category: "mindset",
        tags: ["yet-power", "growth-mindset", "learning"]
    },
{
        id: 992,
        text: "What we achieve inwardly will change outer reality.",
        author: "Plutarch",
        category: "mindset",
        tags: ["inner-outer", "inward-achievement", "reality-shaping"]
    },
{
        id: 993,
        text: "The successful warrior is the average person, with laser-like focus.",
        author: "Bruce Lee",
        category: "mindset",
        tags: ["average-person", "laser-focus", "warrior-mindset"]
    },
{
        id: 995,
        text: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln",
        category: "mindset",
        tags: ["discipline-choice", "now-vs-most", "delayed-gratification"]
    },
{
        id: 996,
        text: "Your comfort zone is a beautiful place, but nothing ever grows there.",
        author: "Anonymous",
        category: "mindset",
        tags: ["comfort-zone", "no-growth", "stretching"]
    },
{
        id: 997,
        text: "Failure is an event, not a person. Yesterday ended last night.",
        author: "Zig Ziglar",
        category: "mindset",
        tags: ["failure-event", "yesterday-ended", "fresh-start"]
    },
{
        id: 999,
        text: "The mind that opens to a new idea never returns to its original size.",
        author: "Oliver Wendell Holmes",
        category: "mindset",
        tags: ["expanding-mind", "new-ideas", "permanent-growth"]
    },
{
        id: 1001,
        text: "Winners focus on winning. Losers focus on winners.",
        author: "Anonymous",
        category: "mindset",
        tags: ["winner-focus", "loser-focus", "attention-management"]
    },
{
        id: 1002,
        text: "Your last failure is not your final chapter unless you stop writing.",
        author: "Anonymous",
        category: "mindset",
        tags: ["last-failure", "final-chapter", "continuing"]
    },
{
        id: 1003,
        text: "Motivation gets you started. Habit keeps you going.",
        author: "Jim Ryun",
        category: "mindset",
        tags: ["motivation-start", "habit-continue", "sustainability"]
    },
{
        id: 1004,
        text: "Think like a proton. Always positive.",
        author: "Anonymous",
        category: "mindset",
        tags: ["proton-positive", "science-humor", "attitude"]
    },
{
        id: 1006,
        text: "Your potential expands when you push past perceived limits.",
        author: "Anonymous",
        category: "mindset",
        tags: ["potential-expansion", "pushing-limits", "growth"]
    },
{
        id: 1007,
        text: "Replace 'I have to' with 'I get to'. Watch your energy shift.",
        author: "Anonymous",
        category: "mindset",
        tags: ["have-to-get-to", "energy-shift", "reframing"]
    },
{
        id: 1008,
        text: "A problem is a chance for you to do your best.",
        author: "Duke Ellington",
        category: "mindset",
        tags: ["problems-as-chances", "best-effort", "opportunity"]
    },
{
        id: 1009,
        text: "The quality of your thinking determines the quality of your life.",
        author: "Anonymous",
        category: "mindset",
        tags: ["thinking-quality", "life-quality", "cause-effect"]
    },
{
        id: 1010,
        text: "Master your mind or it will master you.",
        author: "Anonymous",
        category: "mindset",
        tags: ["mastering-mind", "self-mastery", "control"]
    },
{
        id: 1011,
        text: "Energy flows where attention goes.",
        author: "Tony Robbins",
        category: "energy",
        tags: ["energy-flow", "attention", "focus"]
    },
{
        id: 1012,
        text: "Your vibration creates your reality. Raise it intentionally.",
        author: "Anonymous",
        category: "energy",
        tags: ["vibration", "reality-creation", "raising-frequency"]
    },
{
        id: 1013,
        text: "High vibrations attract high outcomes. Low vibrations attract low outcomes.",
        author: "Anonymous",
        category: "energy",
        tags: ["high-low-vibrations", "attraction-law", "frequency"]
    },
{
        id: 1014,
        text: "Protect your energy. Not everyone deserves access to you.",
        author: "Anonymous",
        category: "energy",
        tags: ["energy-protection", "boundaries", "access-control"]
    },
{
        id: 1015,
        text: "You are the average of the five people you spend the most time with. Choose your circle wisely.",
        author: "Jim Rohn",
        category: "energy",
        tags: ["five-people-average", "circle-choice", "influence"]
    },
{
        id: 1016,
        text: "Energy is contagious. Either you affect people or you infect them.",
        author: "Anonymous",
        category: "energy",
        tags: ["contagious-energy", "affect-vs-infect", "influence"]
    },
{
        id: 1017,
        text: "Low battery? Recharge with rest, nature, and boundaries.",
        author: "Anonymous",
        category: "energy",
        tags: ["low-battery", "recharging", "restoration"]
    },
{
        id: 1018,
        text: "Your personal energy is your currency. Spend it wisely.",
        author: "Anonymous",
        category: "energy",
        tags: ["energy-currency", "wise-spending", "investing"]
    },
{
        id: 1019,
        text: "The energy you put out is exactly what you get back.",
        author: "Anonymous",
        category: "energy",
        tags: ["output-input", "energy-return", "reflection"]
    },
{
        id: 1020,
        text: "Vibrating higher means letting go of what lowers you.",
        author: "Anonymous",
        category: "energy",
        tags: ["vibrating-higher", "letting-go", "elevation"]
    },
{
        id: 1021,
        text: "Good energy is attractive. Like attracts like.",
        author: "Anonymous",
        category: "energy",
        tags: ["good-energy", "attraction", "like-attracts-like"]
    },
{
        id: 1022,
        text: "Your aura announces you before you speak. Clean it daily.",
        author: "Anonymous",
        category: "energy",
        tags: ["aura", "announcement", "energetic-hygiene"]
    },
{
        id: 1024,
        text: "You cannot afford to live in the potential energy of your life. Kinetic energy is where the magic happens.",
        author: "Anonymous",
        category: "energy",
        tags: ["potential-vs-kinetic", "action-energy", "physics-of-life"]
    },
{
        id: 1025,
        text: "Morning routines set your energetic tone for the entire day.",
        author: "Anonymous",
        category: "energy",
        tags: ["morning-routine", "energetic-tone", "day-setting"]
    },
{
        id: 1026,
        text: "Clear space = Clear energy. Declutter your environment regularly.",
        author: "Anonymous",
        category: "energy",
        tags: ["clear-space", "decluttering", "environmental-energy"]
    },
{
        id: 1027,
        text: "Your words carry energy. Speak with intention.",
        author: "Anonymous",
        category: "energy",
        tags: ["words-energy", "intentional-speaking", "communication"]
    },
{
        id: 1028,
        text: "Gratitude is the highest frequency emotion. Practice it daily.",
        author: "Anonymous",
        category: "energy",
        tags: ["gratitude-frequency", "highest-emotion", "daily-practice"]
    },
{
        id: 1029,
        text: "When you're around low energy people, visualize yourself in a protective bubble.",
        author: "Anonymous",
        category: "energy",
        tags: ["protective-bubble", "low-energy-protection", "visualization"]
    },
{
        id: 1030,
        text: "Movement creates energy. Stagnation drains it.",
        author: "Anonymous",
        category: "energy",
        tags: ["movement-creates", "stagnation-drains", "flow"]
    },
{
        id: 1031,
        text: "Your thoughts are electric. Your emotions are magnetic. Together they create your electromagnetic field.",
        author: "Anonymous",
        category: "energy",
        tags: ["electric-thoughts", "magnetic-emotions", "electromagnetic-field"]
    },
{
        id: 1032,
        text: "Rest is not wasted time. It's energy restoration.",
        author: "Anonymous",
        category: "energy",
        tags: ["rest-not-wasted", "restoration", "recharging"]
    },
{
        id: 1033,
        text: "Surround yourself with people who energize you, not drain you.",
        author: "Anonymous",
        category: "energy",
        tags: ["energizers-vs-drainers", "people-choice", "boundaries"]
    },
{
        id: 1034,
        text: "The energy you bring to a room matters. Check yourself before entering.",
        author: "Anonymous",
        category: "energy",
        tags: ["room-energy", "checking-yourself", "awareness"]
    },
{
        id: 1035,
        text: "Music shifts energy instantly. Build playlists for different moods.",
        author: "Anonymous",
        category: "energy",
        tags: ["music-energy", "playlist-power", "mood-shifting"]
    },
{
        id: 1036,
        text: "Breath is the bridge between your mind and your energy body.",
        author: "Anonymous",
        category: "energy",
        tags: ["breath-bridge", "mind-energy-body", "connection"]
    },
{
        id: 1037,
        text: "Sunlight is pure energy. Get your daily dose.",
        author: "Anonymous",
        category: "energy",
        tags: ["sunlight-energy", "daily-dose", "natural-source"]
    },
{
        id: 1038,
        text: "Laughing raises your vibration instantly. Find reasons to laugh.",
        author: "Anonymous",
        category: "energy",
        tags: ["laughter-vibration", "laughing-raising", "joy"]
    },
{
        id: 1039,
        text: "Your environment either fuels or drains you. Design it intentionally.",
        author: "Anonymous",
        category: "energy",
        tags: ["environment-design", "fuel-or-drain", "intentionality"]
    },
{
        id: 1040,
        text: "High vibrational foods = High vibrational you. Eat clean.",
        author: "Anonymous",
        category: "energy",
        tags: ["food-vibration", "eating-clean", "nutrition-energy"]
    },
{
        id: 1041,
        text: "Forgiveness is not an occasional act; it is a constant attitude.",
        author: "Martin Luther King Jr.",
        category: "forgiveness",
        tags: ["constant-attitude", "occasional-act", "philosophy"]
    },
{
        id: 1043,
        text: "Forgiveness is giving up the hope that the past could have been different.",
        author: "Oprah Winfrey",
        category: "forgiveness",
        tags: ["giving-up-hope", "past-acceptance", "release"]
    },
{
        id: 1044,
        text: "To forgive is to set a prisoner free and discover that the prisoner was you.",
        author: "Lewis B. Smedes",
        category: "forgiveness",
        tags: ["prisoner-free", "self-liberation", "discovery"]
    },
{
        id: 1045,
        text: "Forgive others not because they deserve forgiveness, but because you deserve peace.",
        author: "Jonathan Lockwood Huie",
        category: "forgiveness",
        tags: ["others-deserve", "you-deserve-peace", "self-focused"]
    },
{
        id: 1047,
        text: "Forgiveness does not change the past, but it does enlarge the future.",
        author: "Paul Boese",
        category: "forgiveness",
        tags: ["past-unchanged", "future-enlarged", "possibility"]
    },
{
        id: 1048,
        text: "The truth is, unless you let go, unless you forgive yourself, you can't move forward.",
        author: "Steve Maraboli",
        category: "forgiveness",
        tags: ["letting-go", "self-forgiveness", "moving-forward"]
    },
{
        id: 1049,
        text: "Resentment is like swallowing poison and hoping the other person chokes.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["resentment-poison", "choking-other", "futility"]
    },
{
        id: 1050,
        text: "Forgiveness is the fragrance that the violet sheds on the heel that has crushed it.",
        author: "Mark Twain",
        category: "forgiveness",
        tags: ["fragrance", "violet-crushed", "beauty-in-response"]
    },
{
        id: 1051,
        text: "When you hold resentment toward another, you are bound to that person by an emotional link. Forgiveness is the way to sever that link.",
        author: "Catherine Ponder",
        category: "forgiveness",
        tags: ["emotional-link", "severing", "freedom"]
    },
{
        id: 1052,
        text: "You don't forgive people because you're weak. You forgive because you're strong enough to know people make mistakes.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["weakness-myth", "mistakes-understanding", "strength"]
    },
{
        id: 1053,
        text: "Letting go gives us freedom, and freedom is the only condition for happiness.",
        author: "Thich Nhat Hanh",
        category: "forgiveness",
        tags: ["letting-go-freedom", "happiness-condition", "liberation"]
    },
{
        id: 1054,
        text: "To err is human; to forgive, divine.",
        author: "Alexander Pope",
        category: "forgiveness",
        tags: ["err-human", "forgive-divine", "classical"]
    },
{
        id: 1055,
        text: "Forgiveness says: You are given another chance to make a new beginning.",
        author: "Desmond Tutu",
        category: "forgiveness",
        tags: ["another-chance", "new-beginning", "opportunity"]
    },
{
        id: 1056,
        text: "Before you can live a new chapter, you have to turn the page. Forgiveness helps you turn it.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["new-chapter", "turning-page", "transition"]
    },
{
        id: 1057,
        text: "Peace comes not from absence of conflict, but from ability to cope with it through forgiveness.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["peace-conflict", "coping", "forgiveness-tool"]
    },
{
        id: 1058,
        text: "Unforgiveness is like carrying a heavy backpack everywhere. Put it down.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["backpack-metaphor", "heavy-load", "putting-down"]
    },
{
        id: 1059,
        text: "Every act of forgiveness is an act of reclaiming your power.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["reclaiming-power", "act-of-forgiveness", "sovereignty"]
    },
{
        id: 1060,
        text: "Bitterness is like cancer. Forgiveness is the antidote.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["bitterness-cancer", "forgiveness-antidote", "health"]
    },
{
        id: 1061,
        text: "You can't heal what you refuse to feel. Face it, feel it, then forgive.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["face-feel-forgive", "processing", "sequence"]
    },
{
        id: 1062,
        text: "Forgiveness unlocks the door to peace, joy, and new possibilities.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["unlocking-door", "peace-joy", "possibilities"]
    },
{
        id: 1063,
        text: "Let today mark a new beginning. Forgive yourself for yesterday's mistakes.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["new-beginning-mark", "self-forgiveness-yesterday", "fresh-start"]
    },
{
        id: 1064,
        text: "The first step in forgiveness is the willingness to forgive.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["willingness-first-step", "readiness", "preparation"]
    },
{
        id: 1065,
        text: "Carrying anger is like holding a hot coal with intent to throw it. You get burned.",
        author: "Buddha",
        category: "forgiveness",
        tags: ["hot-coal", "self-burning", "anger-cost"]
    },
{
        id: 1066,
        text: "Forgiveness is the needle that sews together what anger tore apart.",
        author: "Anonymous",
        category: "forgiveness",
        tags: ["needle-sewing", "repairing-tears", "restoration"]
    },
{
        id: 1068,
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        category: "authenticity",
        tags: ["be-yourself", "taken", "originality"]
    },
{
        id: 1069,
        text: "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are.",
        author: "Brené Brown",
        category: "authenticity",
        tags: ["daily-practice", "letting-go-supposed", "embracing-real"]
    },
{
        id: 1070,
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
        category: "authenticity",
        tags: ["world-pressure", "accomplishment", "resistance"]
    },
{
        id: 1071,
        text: "Don't bend; don't water it down; don't try to make every person understand you. If you're so focused on fitting in, you'll sacrifice your uniqueness.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["not-bending", "fitting-in-cost", "uniqueness-value"]
    },
{
        id: 1072,
        text: "Owning our story and loving ourselves through that process is the bravest thing we'll ever do.",
        author: "Brené Brown",
        category: "authenticity",
        tags: ["owning-story", "self-love-through-process", "bravery"]
    },
{
        id: 1073,
        text: "Authenticity is a collection of choices that we have to make every day. It's about the choice to show up and be real.",
        author: "Brené Brown",
        category: "authenticity",
        tags: ["daily-choices", "showing-up", "being-real"]
    },
{
        id: 1074,
        text: "Don't hide your weirdness. It's called your superpower.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["weirdness-superpower", "hiding-traits", "embracing-quirks"]
    },
{
        id: 1075,
        text: "The privilege of a lifetime is being who you are.",
        author: "Joseph Campbell",
        category: "authenticity",
        tags: ["lifetime-privilege", "being-who-you-are", "gift"]
    },
{
        id: 1076,
        text: "What you speak becomes your house. Build with authenticity.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["speech-house", "authentic-building", "foundation"]
    },
{
        id: 1077,
        text: "Fitting in is the opposite of belonging. Belonging doesn't require you to change who you are.",
        author: "Brené Brown",
        category: "authenticity",
        tags: ["fitting-vs-belonging", "no-change-required", "acceptance"]
    },
{
        id: 1078,
        text: "Your personality is your personal brand. Don't copy-paste someone else's.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["personal-brand", "no-copy-paste", "originality"]
    },
{
        id: 1079,
        text: "Vulnerability is the birthplace of innovation, creativity, and change.",
        author: "Brené Brown",
        category: "authenticity",
        tags: ["vulnerability", "innovation-birthplace", "creativity-source"]
    },
{
        id: 1080,
        text: "Stop comparing your behind-the-scenes with everyone else's highlight reel.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["behind-scenes", "highlight-reel", "comparison-trap"]
    },
{
        id: 1081,
        text: "The most courageous act is still to think for yourself. Aloud.",
        author: "Coco Chanel",
        category: "authenticity",
        tags: ["courageous-thinking", "aloud", "voice"]
    },
{
        id: 1082,
        text: "You were born an original. Don't die a copy.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["born-original", "die-copy", "legacy"]
    },

{
        id: 1084,
        text: "Don't change so people will like you. Be yourself and the right people will love the real you.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["changing-for-liking", "right-people", "real-you"]
    },
{
        id: 1085,
        text: "Imperfections are not inadequacies; they are reminders that we're all in this together.",
        author: "Brené Brown",
        category: "authenticity",
        tags: ["imperfections", "inadequacies-myth", "togetherness"]
    },
{
        id: 1086,
        text: "Speak your truth, even if your voice shakes.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["speaking-truth", "shaking-voice", "courage"]
    },
{
        id: 1087,
        text: "When you strip away all expectations, what remains is your authentic self. Meet that person.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["stripping-expectations", "authentic-remains", "meeting-self"]
    },
{
        id: 1088,
        text: "Being authentic is not about being perfect. It's about being perfectly imperfect.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["not-about-perfect", "perfectly-imperfect", "realness"]
    },
{
        id: 1089,
        text: "Your truth is valid. Never apologize for how you feel.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["valid-truth", "no-apology-for-feeling", "feelings-matter"]
    },
{
        id: 1090,
        text: "Consistency between who you are inside and who you show outside is integrity.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["inside-outside-consistency", "integrity", "alignment"]
    },
{
        id: 1091,
        text: "Don't perform authenticity. Just be it. It's not a show.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["performing-authenticity", "just-being", "no-show"]
    },
{
        id: 1092,
        text: "The world falls in love with the original, not the imitation.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["original-loved", "imitation-passed", "value"]
    },
{
        id: 1093,
        text: "Your quirks are your trademarks. Embrace them fiercely.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["quirks-trademarks", "embracing-fiercely", "ownership"]
    },
{
        id: 1094,
        text: "Honesty is more than not lying. It's being real with yourself first.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["honesty-depth", "real-with-self", "self-honesty"]
    },
{
        id: 1095,
        text: "Let your life speak. Actions reveal authenticity more than words.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["life-speaking", "actions-over-words", "evidence"]
    },
{
        id: 1096,
        text: "You don't need approval to be authentic. Approval is a bonus, not a requirement.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["approval-not-required", "bonus-not-requirement", "independence"]
    },
{
        id: 1097,
        text: "Be the same person privately, publicly, and internally. That's wholeness.",
        author: "Anonymous",
        category: "authenticity",
        tags: ["private-public-internal", "sameness", "wholeness"]
    },
{
        id: 1098,
        text: "Every morning brings new potential, but if you dwell on the misfortunes of the day before, you tend to overlook tremendous opportunities.",
        author: "Harvey Mackay",
        category: "new_beginnings",
        tags: ["morning-potential", "overlooking-opportunities", "fresh-perspective"]
    },
{
        id: 1099,
        text: "Although no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
        author: "Carl Bard",
        category: "new_beginnings",
        tags: ["no-going-back", "new-ending", "starting-now"]
    },
{
        id: 1100,
        text: "The first step towards getting somewhere is to decide you're not going to stay where you are.",
        author: "J.P. Morgan",
        category: "new_beginnings",
        tags: ["first-step", "decision", "movement"]
    },
{
        id: 1102,
        text: "New beginnings are often disguised as painful endings.",
        author: "Lao Tzu",
        category: "new_beginnings",
        tags: ["disguised-beginnings", "painful-endings", "perspective"]
    },
{
        id: 1103,
        text: "With the new day comes new strength and new thoughts.",
        author: "Eleanor Roosevelt",
        category: "new_beginnings",
        tags: ["new-day-strength", "new-thoughts", "renewal"]
    },
{
        id: 1104,
        text: "Nothing in the universe can stop you from letting go and starting over.",
        author: "Leonard Cohen",
        category: "new_beginnings",
        tags: ["nothing-stopping", "letting-go", "starting-over"]
    },
{
        id: 1105,
        text: "Today is the first day of the rest of your life. Make it count.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["first-day-rest", "making-count", "significance"]
    },
{
        id: 1106,
        text: "Every sunset is an opportunity to reset.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["sunset-reset", "evening-reflection", "daily-cycle"]
    },
{
        id: 1107,
        text: "One door closes, another opens. But we stare so long at the closed door that we don't see the open one.",
        author: "Alexander Graham Bell",
        category: "new_beginnings",
        tags: ["doors-opening-closing", "missing-opportunities", "shift-focus"]
    },
{
        id: 1108,
        text: "Fresh starts. New chapters. Blank pages. Don't rewrite the same story.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["fresh-starts", "blank-pages", "new-stories"]
    },
{
        id: 1109,
        text: "The magic in new beginnings is that you get to write the rules this time.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["magic-beginnings", "writing-rules", "agency"]
    },
{
        id: 1110,
        text: "You don't have to see the whole staircase. Just take the first step.",
        author: "Martin Luther King Jr.",
        category: "new_beginnings",
        tags: ["staircase-vision", "first-step", "faith"]
    },
{
        id: 1112,
        text: "New beginnings carry the promise of who you're becoming.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["promise-carried", "becoming-version", "hope"]
    },
{
        id: 1113,
        text: "Don't be afraid to start over. It's a chance to build something better this time.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["fear-of-starting", "better-this-time", "improvement"]
    },
{
        id: 1114,
        text: "The beginning is always today.",
        author: "Mary Shelley",
        category: "new_beginnings",
        tags: ["beginning-today", "starting", "present"]
    },
{
        id: 1115,
        text: "Turn the page. A new chapter awaits.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["turning-page", "chapter-awaiting", "anticipation"]
    },
{
        id: 1116,
        text: "Your life is your story. Write the next chapter beautifully.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["life-story", "next-chapter", "beautiful-writing"]
    },
{
        id: 1117,
        text: "No matter how hard the past, you can always begin again today.",
        author: "Buddha",
        category: "new_beginnings",
        tags: ["hard-past", "beginning-today", "possibility"]
    },
{
        id: 1118,
        text: "Plant seeds of expectation. Spring always follows winter.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["seeds-expectation", "spring-follows", "cycles"]
    },
{
        id: 1119,
        text: "A fresh start is not about changing who you were before, but about finally honoring who you've always been.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["fresh-start-meaning", "honoring-self", "authenticity"]
    },
{
        id: 1120,
        text: "Today is a blank canvas. Paint something beautiful.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["blank-canvas", "painting-beautiful", "creativity"]
    },
{
        id: 1122,
        text: "Every end is encoded with a new beginning. Look for the code.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["ends-encoded", "finding-code", "hidden-opportunities"]
    },
{
        id: 1123,
        text: "Reinvention is the purest form of self-love.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["reinvention", "self-love-form", "purest"]
    },
{
        id: 1125,
        text: "The best time for new beginnings is now.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["best-time-now", "urgency", "present"]
    },
{
        id: 1126,
        text: "Your next chapter is waiting. Turn the page with courage.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["next-chapter-waiting", "courageous-turning", "bravery"]
    },
{
        id: 1127,
        text: "Reset. Restart. Refocus. Your comeback is your setup.",
        author: "Anonymous",
        category: "new_beginnings",
        tags: ["reset-restart-refocus", "comeback-setup", "resilience"]
    },
{
        id: 1129,
        text: "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.",
        author: "Alexander Graham Bell",
        category: "focus",
        tags: ["concentration", "sun-rays-metaphor", "focused-energy"]
    },
{
        id: 1131,
        text: "Focus on being productive instead of busy.",
        author: "Tim Ferriss",
        category: "focus",
        tags: ["productive-vs-busy", "output-over-activity", "efficiency"]
    },
{
        id: 1132,
        text: "The main thing is to keep the main thing the main thing.",
        author: "Stephen Covey",
        category: "focus",
        tags: ["main-thing", "priorities", "essentialism"]
    },
{
        id: 1133,
        text: "Where focus goes, energy flows.",
        author: "Tony Robbins",
        category: "focus",
        tags: ["energy-flow", "attention-direction", "power"]
    },
{
        id: 1134,
        text: "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
        author: "Zig Ziglar",
        category: "focus",
        tags: ["direction-not-time", "24-hours", "clarity"]
    },
{
        id: 1135,
        text: "If you chase two rabbits, you will catch neither.",
        author: "Confucius",
        category: "focus",
        tags: ["two-rabbits", "split-focus", "single-tasking"]
    },
{
        id: 1136,
        text: "Starve your distractions. Feed your focus.",
        author: "Anonymous",
        category: "focus",
        tags: ["starving-distractions", "feeding-focus", "attention-diet"]
    },
{
        id: 1137,
        text: "What you focus on expands. Choose wisely.",
        author: "Anonymous",
        category: "focus",
        tags: ["focus-expands", "wise-choices", "attention-management"]
    },
{
        id: 1138,
        text: "Clarity comes from engagement, not thought.",
        author: "Marie Forleo",
        category: "focus",
        tags: ["clarity-engagement", "overthinking", "action"]
    },
{
        id: 1139,
        text: "Single-tasking is the new multi-tasking. Depth beats breadth.",
        author: "Anonymous",
        category: "focus",
        tags: ["single-tasking", "depth-over-breadth", "quality"]
    },
{
        id: 1140,
        text: "Eliminate everything that isn't absolutely necessary.",
        author: "Marc Andreessen",
        category: "focus",
        tags: ["elimination", "necessary-only", "minimalism"]
    },
{
        id: 1141,
        text: "Focus is saying no to good ideas so you can yes to great ones.",
        author: "Anonymous",
        category: "focus",
        tags: ["saying-no", "good-vs-great", "selection"]
    },
{
        id: 1142,
        text: "Attention is the rarest and purest form of generosity.",
        author: "Simone Weil",
        category: "focus",
        tags: ["attention-generosity", "rarity", "giving"]
    },
{
        id: 1143,
        text: "In a world of distraction, focus is a superpower.",
        author: "Anonymous",
        category: "focus",
        tags: ["distraction-world", "focus-superpower", "competitive-advantage"]
    },
{
        id: 1144,
        text: "Do fewer things. Do them better. Do them with intention.",
        author: "Anonymous",
        category: "focus",
        tags: ["fewer-things", "doing-better", "intentionality"]
    },
{
        id: 1145,
        text: "Your focus determines your reality.",
        author: "Qui-Gon Jinn (Star Wars)",
        category: "focus",
        tags: ["focus-reality", "star-wars-wisdom", "perception"]
    },
{
        id: 1146,
        text: "Multitasking is a myth. Your brain just switches rapidly, losing efficiency each time.",
        author: "Anonymous",
        category: "focus",
        tags: ["multitasking-myth", "brain-switching", "efficiency-loss"]
    },
{
        id: 1147,
        text: "Deep work produces an elite level of productivity. Shallow work keeps you busy.",
        author: "Cal Newport concept",
        category: "focus",
        tags: ["deep-work", "shallow-work", "productivity-levels"]
    },
{
        id: 1148,
        text: "Protect your focus like your life depends on it. Because your results do.",
        author: "Anonymous",
        category: "focus",
        tags: ["protecting-focus", "results-dependence", "boundaries"]
    },
{
        id: 1149,
        text: "One thing done excellently is better than ten things done adequately.",
        author: "Anonymous",
        category: "focus",
        tags: ["one-excellent", "ten-adequate", "quality-quantity"]
    },
{
        id: 1150,
        text: "The ability to concentrate on a single task is the mark of a master.",
        author: "Anonymous",
        category: "focus",
        tags: ["concentration-ability", "master-level", "skill"]
    },
{
        id: 1151,
        text: "Distraction is the enemy of excellence. Eliminate it ruthlessly.",
        author: "Anonymous",
        category: "focus",
        tags: ["distraction-enemy", "excellence-threat", "ruthless-elimination"]
    },
{
        id: 1152,
        text: "Flow state happens when challenge meets skill in perfect focus.",
        author: "Anonymous",
        category: "focus",
        tags: ["flow-state", "challenge-skill-match", "optimal-focus"]
    },
{
        id: 1153,
        text: "Your inbox is someone else's agenda. Your priorities are your own.",
        author: "Anonymous",
        category: "focus",
        tags: ["inbox-agenda", "own-priorities", "autonomy"]
    },
{
        id: 1154,
        text: "Focus on the step in front of you, not the whole staircase.",
        author: "Anonymous",
        category: "focus",
        tags: ["step-focus", "staircase-overwhelm", "present-action"]
    },
{
        id: 1155,
        text: "Time invested in focus pays compound interest in results.",
        author: "Anonymous",
        category: "focus",
        tags: ["time-investment", "compound-results", "returns"]
    },
{
        id: 1156,
        text: "Clarity of purpose sharpens focus of execution.",
        author: "Anonymous",
        category: "focus",
        tags: ["purpose-clarity", "execution-focus", "alignment"]
    },
{
        id: 1157,
        text: "To fall in love with yourself is the beginning of a lifelong romance.",
        author: "Oscar Wilde",
        category: "self_love",
        tags: ["self-love-romance", "lifelong", "beginning"]
    },
{
        id: 1158,
        text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
        author: "Buddha",
        category: "self_love",
        tags: ["deserving-love", "universe-worthy", "fundamental-right"]
    },
{
        id: 1159,
        text: "Self-love is not selfish. You cannot truly love another until you know how to love yourself.",
        author: "Anonymous",
        category: "self_love",
        tags: ["not-selfish", "loving-others-precondition", "foundation"]
    },
{
        id: 1160,
        text: "Talk to yourself like you would to someone you love.",
        author: "Brené Brown",
        category: "self_love",
        tags: ["self-talk", "loving-tone", "inner-dialogue"]
    },
{
        id: 1162,
        text: "You are enough. A thousand times enough.",
        author: "Anonymous",
        category: "self_love",
        tags: ["enough", "thousand-times", "affirmation"]
    },
{
        id: 1163,
        text: "Self-love begins with self-acceptance. Accept every part of you.",
        author: "Anonymous",
        category: "self_love",
        tags: ["self-acceptance", "every-part", "wholeness"]
    },
{
        id: 1165,
        text: "Your relationship with yourself sets the tone for every other relationship.",
        author: "Anonymous",
        category: "self_love",
        tags: ["primary-relationship", "tone-setting", "foundation"]
    },
{
        id: 1166,
        text: "Don't break your own heart trying to please everyone else.",
        author: "Anonymous",
        category: "self_love",
        tags: ["heart-protection", "people-pleasing", "boundaries"]
    },
{
        id: 1168,
        text: "Self-love is the elixir of an abundant life. Drink it daily.",
        author: "Anonymous",
        category: "self_love",
        tags: ["elixir", "abundant-life", "daily-practice"]
    },
{
        id: 1169,
        text: "You don't need to earn your worthiness. You were born worthy.",
        author: "Anonymous",
        category: "self_love",
        tags: ["born-worthy", "not-earned", "birthright"]
    },
{
        id: 1170,
        text: "Treat yourself with the same kindness you offer others.",
        author: "Anonymous",
        category: "self_love",
        tags: ["self-kindness", "offering-to-others", "equality"]
    },
{
        id: 1172,
        text: "Fall in love with the process of becoming the very best version of yourself.",
        author: "Anonymous",
        category: "self_love",
        tags: ["process-love", "best-version", "becoming"]
    },
{
        id: 1173,
        text: "Self-care is not luxury. It's legacy. It's discipline. It's survival.",
        author: "Anonymous",
        category: "self_love",
        tags: ["not-luxury", "legacy", "necessity"]
    },
{
        id: 1174,
        text: "You are the project you should invest in most.",
        author: "Anonymous",
        category: "self_love",
        tags: ["project-investment", "self-priority", "roi"]
    },
{
        id: 1175,
        text: "Stop waiting for others to fill your cup. Fill it yourself.",
        author: "Anonymous",
        category: "self_love",
        tags: ["cup-filling", "self-sufficiency", "independence"]
    },
{
        id: 1176,
        text: "Your body hears everything your mind says. Speak kindly to yourself.",
        author: "Anonymous",
        category: "self_love",
        tags: ["body-listening", "mind-body-connection", "kind-speech"]
    },
{
        id: 1178,
        text: "Celebrate yourself. You've come further than you think.",
        author: "Anonymous",
        category: "self_love",
        tags: ["celebration", "progress-recognition", "acknowledgment"]
    },
{
        id: 1179,
        text: "The most important relationship in your life is the one you have with yourself.",
        author: "Anonymous",
        category: "self_love",
        tags: ["most-important", "relationship-priority", "truth"]
    },
{
        id: 1180,
        text: "Be your own best friend first. Then attract friends who match that energy.",
        author: "Anonymous",
        category: "self_love",
        tags: ["own-best-friend", "attracting-match", "energy-match"]
    },
{
        id: 1181,
        text: "Your imperfections are what make you perfect. They make you human.",
        author: "Anonymous",
        category: "self_love",
        tags: ["imperfections-perfect", "human-making", "wholeness"]
    },
{
        id: 1182,
        text: "Radical self-love is rebellion in a world that profits from insecurity.",
        author: "Anonymous",
        category: "self_love",
        tags: ["radical-self-love", "rebellion", "insecurity-industry"]
    },
{
        id: 1184,
        text: "You deserve the same love you so freely give to others. Receive it.",
        author: "Anonymous",
        category: "self_love",
        tags: ["deserving-receiving", "giving-paradox", "allowing"]
    },
{
        id: 1185,
        text: "Mirror work: Look yourself in the eyes daily and say 'I love you.'",
        author: "Louise Hay technique",
        category: "self_love",
        tags: ["mirror-work", "eye-contact", "daily-affirmation"]
    },
{
        id: 1186,
        text: "Your presence is a gift. Honor it by treating yourself well.",
        author: "Anonymous",
        category: "self_love",
        tags: ["presence-gift", "honoring-self", "treating-well"]
    },
{
        id: 1188,
        text: "The life of inner peace, being harmonious and without stress, is the easiest type of existence.",
        author: "Norman Vincent Peale",
        category: "harmony",
        tags: ["inner-peace", "stress-free", "ease"]
    },
{
        id: 1189,
        text: "Harmony makes small things grow, lack of it makes great things decay.",
        author: "Sallust",
        category: "harmony",
        tags: ["growth-through-harmony", "decay-through-discord", "cause-effect"]
    },
{
        id: 1190,
        text: "In harmony, one finds the music of life.",
        author: "Anonymous",
        category: "harmony",
        tags: ["music-of-life", "harmony-metaphor", "rhythm"]
    },
{
        id: 1191,
        text: "Three things cannot be long hidden: the sun, the moon, and the truth. Harmony reveals all.",
        author: "Buddha (adapted)",
        category: "harmony",
        tags: ["revealing-truth", "harmony-uncovering", "clarity"]
    },
{
        id: 1192,
        text: "Live in harmony with yourself and the world around you.",
        author: "Anonymous",
        category: "harmony",
        tags: ["self-harmony", "world-harmony", "balance"]
    },
{
        id: 1193,
        text: "Music is the harmonization of opposites; the unification of disparate things.",
        author: "Pythagoras",
        category: "harmony",
        tags: ["opposites-harmonized", "unification", "music-philosophy"]
    },
{
        id: 1194,
        text: "When things change inside you, things change around you. Inner harmony creates outer harmony.",
        author: "Anonymous",
        category: "harmony",
        tags: ["inner-outer-change", "harmony-creation", "ripple-effect"]
    },
{
        id: 1195,
        text: "Peace is not the absence of conflict but the ability to handle conflict by peaceful means.",
        author: "Ronald Reagan",
        category: "harmony",
        tags: ["conflict-handling", "peaceful-means", "skill"]
    },
{
        id: 1196,
        text: "Harmony is the strength and support of all institutions—public and private; without it, liberty and even life itself are but precarious.",
        author: "Daniel Webster",
        category: "harmony",
        tags: ["institutional-strength", "liberty-support", "foundation"]
    },
{
        id: 1197,
        text: "Find your rhythm. Life has a tempo. Dance to it.",
        author: "Anonymous",
        category: "harmony",
        tags: ["rhythm-finding", "life-tempo", "dancing"]
    },
{
        id: 1198,
        text: "Balance creates harmony. Harmony creates peace. Peace creates joy.",
        author: "Anonymous",
        category: "harmony",
        tags: ["balance-chain", "harmony-peace-joy", "sequence"]
    },
{
        id: 1199,
        text: "Let your life be like music—with melody, rhythm, and meaningful pauses.",
        author: "Anonymous",
        category: "harmony",
        tags: ["melody-rhythm", "meaningful-pauses", "composition"]
    },
{
        id: 1200,
        text: "Conflict is dissonance. Resolution is harmony. Seek resolution.",
        author: "Anonymous",
        category: "harmony",
        tags: ["dissonance-resolution", "conflict-resolving", "seeking"]
    },
{
        id: 1201,
        text: "A harmonious life is one where your actions match your values.",
        author: "Anonymous",
        category: "harmony",
        tags: ["actions-values", "matching", "integrity"]
    },
{
        id: 1202,
        text: "Nature operates in perfect harmony. Observe and learn.",
        author: "Anonymous",
        category: "harmony",
        tags: ["nature-harmony", "observing-learning", "teacher"]
    },
{
        id: 1203,
        text: "When you're in harmony with your purpose, resistance fades and flow increases.",
        author: "Anonymous",
        category: "harmony",
        tags: ["purpose-harmony", "resistance-fading", "flow-increasing"]
    },
{
        id: 1204,
        text: "Relationships thrive on harmony. Nurture the frequencies that connect you.",
        author: "Anonymous",
        category: "harmony",
        tags: ["relationship-harmony", "connecting-frequencies", "nurturing"]
    },
{
        id: 1205,
        text: "Chaos is unordered noise. Harmony is ordered music. Choose your composition.",
        author: "Anonymous",
        category: "harmony",
        tags: ["chaos-noise", "harmony-music", "choice"]
    },
{
        id: 1206,
        text: "The art of living is living in artful harmony with all of life.",
        author: "Anonymous",
        category: "harmony",
        tags: ["art-of-living", "artful-harmony", "mastery"]
    },
{
        id: 1207,
        text: "Breathe in peace, breathe out discord. Each breath restores harmony.",
        author: "Anonymous",
        category: "harmony",
        tags: ["breathing-peace", "breathing-out-discord", "restoration"]
    },
{
        id: 1208,
        text: "True harmony includes both major and minor keys. Embrace all of life's tones.",
        author: "Anonymous",
        category: "harmony",
        tags: ["major-minor-keys", "all-tones", "embracing"]
    },
{
        id: 1209,
        text: "When your environment matches your inner state, you've found your harmonic resonance.",
        author: "Anonymous",
        category: "harmony",
        tags: ["environment-inner-match", "harmonic-resonance", "alignment"]
    },
{
        id: 1210,
        text: "Harmony is the silent prayer of a balanced life.",
        author: "Anonymous",
        category: "harmony",
        tags: ["silent-prayer", "balanced-life", "spirituality"]
    },
{
        id: 1211,
        text: "Create harmony within, and watch it multiply without.",
        author: "Anonymous",
        category: "harmony",
        tags: ["within-creation", "multiplication", "expansion"]
    },
{
        id: 1212,
        text: "Good vibes only. It's a lifestyle, not just a hashtag.",
        author: "Anonymous",
        category: "harmony",
        tags: ["vibes-only", "lifestyle", "brand-aligned"]
    },
{
        id: 1216,
        text: "The present moment is the only moment available to us, and it is the door to all moments.",
        author: "Thich Nhat Hanh",
        category: "zen",
        tags: ["present-moment", "mindfulness", "awareness"]
    },
{
        id: 1217,
        text: "Empty your mind of all thoughts. Like a teapot, only then can it receive.",
        author: "Bruce Lee",
        category: "zen",
        tags: ["empty-mind", "receptivity", "openness"]
    },
{
        id: 1218,
        text: "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water.",
        author: "Zen Proverb",
        category: "zen",
        tags: ["enlightenment", "simplicity", "daily-practice"]
    },
{
        id: 1220,
        text: "When you realize nothing is lacking, the whole world belongs to you.",
        author: "Lao Tzu",
        category: "zen",
        tags: ["wholeness", "sufficiency", "contentment"]
    },
{
        id: 1221,
        text: "Sitting quietly, doing nothing, spring comes, and the grass grows by itself.",
        author: "Matsuo Bashō",
        category: "zen",
        tags: ["non-doing", "natural-flow", "patience"]
    },
{
        id: 1222,
        text: "The obstacle is the path.",
        author: "Ryan Holiday",
        category: "zen",
        tags: ["obstacles-as-path", "acceptance", "reframing"]
    },
{
        id: 1223,
        text: "You cannot control the wind, but you can adjust your sails.",
        author: "Jimmy Dean",
        category: "zen",
        tags: ["adaptation", "control", "flexibility"]
    },
{
        id: 1225,
        text: "The space between your thoughts is where your power lives.",
        author: "Anonymous",
        category: "zen",
        tags: ["mental-space", "consciousness", "power"]
    },
{
        id: 1227,
        text: "A flower does not think of competing with the flower next to it. It just blooms.",
        author: "Zen Saying",
        category: "zen",
        tags: ["non-competition", "blooming", "authenticity"]
    },
{
        id: 1228,
        text: "The glass is neither half empty nor half full. The glass simply is.",
        author: "Anonymous",
        category: "zen",
        tags: ["perspective", "neutrality", "acceptance"]
    },
{
        id: 1229,
        text: "Let go of what has passed. Let go of what may come. Let go of what is happening now. Don't try to figure anything out.",
        author: "Ajahn Chah",
        category: "zen",
        tags: ["letting-go", "release", "surrender"]
    },
{
        id: 1230,
        text: "When you reach the top, keep climbing.",
        author: "Zen Proverb",
        category: "zen",
        tags: ["continuous-growth", "no-destination", "journey"]
    },
{
        id: 1233,
        text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha",
        category: "zen",
        tags: ["presence", "now-focus", "awareness"]
    },
{
        id: 1234,
        text: "The only true wisdom is knowing you know nothing.",
        author: "Socrates",
        category: "zen",
        tags: ["humility", "beginners-mind", "wisdom"]
    },
{
        id: 1237,
        text: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
        category: "zen",
        tags: ["first-step", "journey-beginning", "action"]
    },
{
        id: 1239,
        text: "The master has failed more times than the beginner has even tried.",
        author: "Stephen McCranie",
        category: "zen",
        tags: ["mastery-failure", "persistence", "experience"]
    },
{
        id: 1240,
        text: "Be like water making its way through cracks. Do not be assertive, but adjust to the object.",
        author: "Bruce Lee",
        category: "zen",
        tags: ["adaptability", "fluidity", "water-wisdom"]
    },
{
        id: 1241,
        text: "Where there is stillness, there is beauty.",
        author: "Anonymous",
        category: "zen",
        tags: ["stillness-beauty", "calm-aesthetic", "peace"]
    },
{
        id: 1242,
        text: "The wise find pleasure in water; the virtuous find pleasure in hills.",
        author: "Confucius",
        category: "zen",
        tags: ["nature-pleasure", "wisdom-virtue", "contemplation"]
    },
{
        id: 1243,
        text: "Your calm mind is the ultimate weapon against challenges. So relax.",
        author: "Bryant McGill",
        category: "zen",
        tags: ["calm-as-weapon", "relaxation", "challenge-response"]
    },
{
        id: 1244,
        text: "Smile, breathe, and go slowly.",
        author: "Thich Nhat Hanh",
        category: "zen",
        tags: ["smile", "breathe", "slowness"]
    },
{
        id: 1245,
        text: "True strength is not about standing firm. It's about bending without breaking.",
        author: "Anonymous",
        category: "strength",
        tags: ["true-strength", "flexibility", "resilience"]
    },
{
        id: 1246,
        text: "You never know how strong you are until being strong is your only choice.",
        author: "Bob Marley",
        category: "strength",
        tags: ["hidden-strength", "adversity", "discovery"]
    },
{
        id: 1247,
        text: "Strength doesn't come from what you can do. It comes from overcoming things you thought you couldn't.",
        author: "Ashley Green",
        category: "strength",
        tags: ["overcoming", "self-discovery", "growth-through-pain"]
    },
{
        id: 1248,
        text: "The world breaks everyone, and afterward, many are strong at the broken places.",
        author: "Ernest Hemingway",
        category: "strength",
        tags: ["broken-stronger", "healing", "scars-as-strength"]
    },
{
        id: 1249,
        text: "Inner strength shows not in never falling, but in rising every time we fall.",
        author: "Confucius",
        category: "strength",
        tags: ["rising", "perseverance", "resilience"]
    },
{
        id: 1250,
        text: "Courage is not the absence of fear, but the triumph over it.",
        author: "Nelson Mandela",
        category: "strength",
        tags: ["courage-over-fear", "triumph", "bravery"]
    },
{
        id: 1251,
        text: "You have power over your mind, not outside events. Realize this, and you will find strength.",
        author: "Marcus Aurelius",
        category: "strength",
        tags: ["mind-power", "stoicism", "internal-control"]
    },
{
        id: 1252,
        text: "Strong people don't put others down. They lift them up.",
        author: "Michael P. Watson",
        category: "strength",
        tags: ["lifting-others", "empowerment", "kindness-strength"]
    },
{
        id: 1253,
        text: "Sometimes carrying on, just carrying on, is the bravest thing you can do.",
        author: "Anonymous",
        category: "strength",
        tags: ["persistence", "endurance", "daily-bravery"]
    },
{
        id: 1255,
        text: "The strongest people aren't always the people who win, but the people who don't give up when they lose.",
        author: "Anonymous",
        category: "strength",
        tags: ["not-giving-up", "losing-learning", "tenacity"]
    },
{
        id: 1256,
        text: "Only those who risk going too far can possibly find out how far they can go.",
        author: "T.S. Eliot",
        category: "strength",
        tags: ["risk-taking", "potential", "boundaries"]
    },
{
        id: 1258,
        text: "He who believes is strong; he who doubts is weak. Strong convictions precede great actions.",
        author: "Jules Verne",
        category: "strength",
        tags: ["belief-strength", "conviction", "action"]
    },
{
        id: 1261,
        text: "Stay close to anything that makes you glad you are alive.",
        author: "Hafiz",
        category: "strength",
        tags: ["aliveness", "joy-presence", "vitality"]
    },
{
        id: 1262,
        text: "Make the most of yourself, for that is all there is of you.",
        author: "Ralph Waldo Emerson",
        category: "strength",
        tags: ["self-maximization", "potential", "self-worth"]
    },
{
        id: 1265,
        text: "You were given this life because you're strong enough to live it.",
        author: "Anonymous",
        category: "strength",
        tags: ["life-purpose", "innate-strength", "capability"]
    },
{
        id: 1266,
        text: "Be strong enough to stand alone, smart enough to know when you need help, and brave enough to ask for it.",
        author: "Anonymous",
        category: "strength",
        tags: ["independence", "seeking-help", "bravery-vulnerability"]
    },
{
        id: 1268,
        text: "Strength of character isn't always about standing tall. Sometimes it's about bending so you don't break.",
        author: "Anonymous",
        category: "strength",
        tags: ["flexibility-character", "bending-not-breaking", "adaptability"]
    },
{
        id: 1269,
        text: "You gain strength, courage, and confidence by every experience in which you stop to look fear in the face.",
        author: "Eleanor Roosevelt",
        category: "strength",
        tags: ["facing-fear", "confidence-building", "experience-growth"]
    },
{
        id: 1270,
        text: "There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.",
        author: "Bruce Lee",
        category: "strength",
        tags: ["no-limits", "plateaus", "beyond-boundaries"]
    },
{
        id: 1271,
        text: "The best way out is always through.",
        author: "Robert Frost",
        category: "strength",
        tags: ["facing-through", "confrontation", "resolution"]
    },
{
        id: 1275,
        text: "Nothing can dim the light which shines from within.",
        author: "Maya Angelou",
        category: "radiance",
        tags: ["inner-light", "un-dimmable", "spiritual-radiance"]
    },
{
        id: 1276,
        text: "She was powerful not because she wasn't scared, but because she went on so strongly, despite the fear.",
        author: "Atticus Poetry",
        category: "radiance",
        tags: ["power-despite-fear", "radiant-strength", "courageous-glow"]
    },
{
        id: 1277,
        text: "Your vibe attracts your tribe. Keep your frequency high.",
        author: "Anonymous",
        category: "radiance",
        tags: ["vibe-attracts", "high-frequency", "energy-alignment"]
    },
{
        id: 1278,
        text: "Glow differently. Not everyone appreciates the sun, but everyone needs it.",
        author: "Anonymous",
        category: "radiance",
        tags: ["unique-glow", "sun-energy", "essential-light"]
    },
{
        id: 1279,
        text: "Be the reason someone smiles today. Be the light in someone's darkness.",
        author: "Anonymous",
        category: "radiance",
        tags: ["reason-to-smile", "light-in-darkness", "positivity-spreading"]
    },
{
        id: 1280,
        text: "You are a star. You were born to shine.",
        author: "Anonymous",
        category: "radiance",
        tags: ["star-born", "shining-destiny", "celestial-nature"]
    },
{
        id: 1281,
        text: "The more light you allow within you, the brighter the world around you becomes.",
        author: "Shakti Gawain",
        category: "radiance",
        tags: ["inner-light-world", "radiance-effect", "luminosity"]
    },
{
        id: 1282,
        text: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: "Albus Dumbledore (J.K. Rowling)",
        category: "radiance",
        tags: ["happiness-in-darkness", "turn-on-light", "hope-radiance"]
    },
{
        id: 1283,
        text: "Your energy introduces you before you even speak.",
        author: "Anonymous",
        category: "radiance",
        tags: ["energy-introduction", "aura", "first-impression"]
    },
{
        id: 1284,
        text: "Shine like the whole universe is yours.",
        author: "Rumi",
        category: "radiance",
        tags: ["universal-shine", "cosmic-ownership", "radiance-abundance"]
    },
{
        id: 1286,
        text: "People will stare. Make it worth their while.",
        author: "Harry Winston",
        category: "radiance",
        tags: ["worth-staring", "attention-value", "radiating-excellence"]
    },
{
        id: 1287,
        text: "Be so bright that you make others want to wear sunglasses.",
        author: "Anonymous",
        category: "radiance",
        tags: ["blinding-brightness", "positive-overload", "sunglasses-worthy"]
    },
{
        id: 1288,
        text: "The soul becomes dyed with the color of its thoughts.",
        author: "Marcus Aurelius",
        category: "radiance",
        tags: ["soul-color-thoughts", "mental-hue", "inner-radiance-source"]
    },
{
        id: 1289,
        text: "You don't have to be perfect to be amazing. Just let your authentic self shine through.",
        author: "Anonymous",
        category: "radiance",
        tags: ["amazing-not-perfect", "authentic-shine", "imperfection-beauty"]
    },
{
        id: 1290,
        text: "When you own your glow, nobody can turn down your light.",
        author: "Anonymous",
        category: "radiance",
        tags: ["owning-glow", "untouchable-light", "self-possession"]
    },
{
        id: 1291,
        text: "Radiate positivity from within, and watch your outer world transform.",
        author: "Anonymous",
        category: "radiance",
        tags: ["inner-positivity", "outer-transformation", "radiation-effect"]
    },
{
        id: 1293,
        text: "Your presence is a gift. Your smile is a bonus. Your glow is unforgettable.",
        author: "Anonymous",
        category: "radiance",
        tags: ["presence-gift", "smile-bonus", "glow-unforgettable"]
    },
{
        id: 1294,
        text: "Let your light shine so brightly that others can find their way through it.",
        author: "Anonymous",
        category: "radiance",
        tags: ["guiding-light", "beacon", "helping-others-shine"]
    },
{
        id: 1295,
        text: "Beauty is not flawless. But it sure can shine perfectly.",
        author: "Anonymous",
        category: "radiance",
        tags: ["beauty-flawless", "perfect-shine", "imperfection-radiance"]
    },
{
        id: 1296,
        text: "The most beautiful people I've known are those who have known defeat, suffering, and struggle, and found their way out.",
        author: "Elisabeth Kübler-Ross",
        category: "radiance",
        tags: ["beauty-through-struggle", "emerged-radiance", "depth-of-character"]
    },
{
        id: 1297,
        text: "Keep your face always toward the sunshine, and shadows fall behind you.",
        author: "Walt Whitman",
        category: "radiance",
        tags: ["face-sunshine", "shadows-behind", "optimism-direction"]
    },
{
        id: 1298,
        text: "You possess a light that no one can extinguish. Nurture it daily.",
        author: "Anonymous",
        category: "radiance",
        tags: ["inextinguishable-light", "daily-nurture", "eternal-flame"]
    },
{
        id: 1299,
        text: "Positive energy is contagious. Be the carrier.",
        author: "Anonymous",
        category: "radiance",
        tags: ["contagious-energy", "carrier-positive", "infection-good"]
    },
{
        id: 1300,
        text: "How you make others feel about themselves says a lot about you.",
        author: "Anonymous",
        category: "radiance",
        tags: ["making-others-feel", "reflection-of-you", "emotional-impact"]
    },
{
        id: 1301,
        text: "Be a lighthouse. Stand steady, shine bright, guide ships home safely.",
        author: "Anonymous",
        category: "radiance",
        tags: ["lighthouse", "steady-shine", "guiding-home"]
    },
{
        id: 1302,
        text: "Your natural state is joy. Everything else is just a detour.",
        author: "Anonymous",
        category: "radiance",
        tags: ["natural-state-joy", "return-to-self", "authentic-being"]
    },
{
        id: 1303,
        text: "When you operate in your zone of genius, you naturally illuminate everyone around you.",
        author: "Anonymous",
        category: "radiance",
        tags: ["zone-genius", "illumination", "collective-brightening"]
    },
{
        id: 1304,
        text: "The sun is a daily reminder that we too can rise again from the darkness, from the ashes, from the dust.",
        author: "Bryant McGill",
        category: "radiance",
        tags: ["sun-reminder", "rising-from-darkness", "daily-resurrection"]
    },
{
        id: 1305,
        text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
        author: "Ralph Waldo Emerson",
        category: "purpose",
        tags: ["life-purpose-useful", "honorable", "compassionate-living"]
    },
{
        id: 1306,
        text: "Your purpose in life is to find your purpose and give your whole heart and soul to it.",
        author: "Buddha",
        category: "purpose",
        tags: ["find-purpose", "wholehearted", "devotion"]
    },
{
        id: 1307,
        text: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
        category: "purpose",
        tags: ["find-out-why", "meaning-discovery", "life-days"]
    },
{
        id: 1308,
        text: "Efforts and courage are not enough without purpose and direction.",
        author: "John F. Kennedy",
        category: "purpose",
        tags: ["effort-needs-purpose", "direction-importance", "aimless-action"]
    },
{
        id: 1309,
        text: "When you have a sense of purpose, obstacles become stepping stones rather than roadblocks.",
        author: "Anonymous",
        category: "purpose",
        tags: ["purpose-obstacles", "stepping-stones", "roadblocks-reframe"]
    },
{
        id: 1310,
        text: "He who has a why to live can bear almost any how.",
        author: "Friedrich Nietzsche",
        category: "purpose",
        tags: ["why-live-how-bear", "meaning-endurance", "purpose-power"]
    },
{
        id: 1311,
        text: "Don't ask yourself what the world needs. Ask yourself what makes you come alive, and go do that.",
        author: "Howard Thurman",
        category: "purpose",
        tags: ["come-alive", "world-needs-vs-passion", "calling"]
    },
{
        id: 1312,
        text: "Purpose is the reason you journey. Passion is the fire that lights your way.",
        author: "Anonymous",
        category: "purpose",
        tags: ["purpose-journey", "passion-fire", "direction-and-drive"]
    },
{
        id: 1313,
        text: "The meaning of life is to give life meaning.",
        author: "Victor Frankl",
        category: "purpose",
        tags: ["give-life-meaning", "create-purpose", "existential-choice"]
    },
{
        id: 1316,
        text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
        author: "Jane Goodall",
        category: "purpose",
        tags: ["difference-type", "intentional-impact", "choice-matters"]
    },
{
        id: 1317,
        text: "Find out what you like doing best and get someone to pay you for doing it.",
        author: "Katherine Whitehorn",
        category: "purpose",
        tags: ["paid-for-passion", "career-purpose", "doing-what-you-love"]
    },
{
        id: 1318,
        text: "The heart of human excellence often begins with a person's will to serve.",
        author: "Stephen Covey",
        category: "purpose",
        tags: ["service-heart", "excellence-origin", "serving-others"]
    },
{
        id: 1319,
        text: "Great acts are made up of small deeds.",
        author: "Lao Tzu",
        category: "purpose",
        tags: ["great-acts-small-deeds", "cumulative-impact", "daily-purpose"]
    },
{
        id: 1320,
        text: "Your work is to discover your world and then with all your heart give yourself to it.",
        author: "Buddha",
        category: "purpose",
        tags: ["discover-world", "wholehearted-giving", "devoted-work"]
    },
{
        id: 1321,
        text: "We make a living by what we get, but we make a life by what we give.",
        author: "Winston Churchill",
        category: "purpose",
        tags: ["making-living-vs-life", "giving-meaning", "contribution"]
    },
{
        id: 1322,
        text: "The best way to find yourself is to lose yourself in the service of others.",
        author: "Mahatma Gandhi",
        category: "purpose",
        tags: ["find-yourself-service", "selflessness", "others-focused"]
    },
{
        id: 1323,
        text: "Having a purpose is the difference between making a living and making a life.",
        author: "David Thomas",
        category: "purpose",
        tags: ["purpose-difference", "living-vs-life", "meaningful-existence"]
    },
{
        id: 1324,
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt",
        category: "purpose",
        tags: ["do-what-you-can", "resourcefulness", "starting-now"]
    },
{
        id: 1325,
        text: "Passion and purpose go hand in hand. When you discover your purpose, you'll feel passion.",
        author: "Oprah Winfrey",
        category: "purpose",
        tags: ["passion-purpose-connection", "discovery-feeling", "alignment"]
    },
{
        id: 1326,
        text: "Every moment is a fresh beginning. Choose your purpose anew each day.",
        author: "T.S. Eliot",
        category: "purpose",
        tags: ["fresh-beginning", "daily-purpose-choice", "moment-by-moment"]
    },
{
        id: 1327,
        text: "The thing you are most afraid to do is the very thing that will set you free.",
        author: "Anonymous",
        category: "purpose",
        tags: ["fear-freedom", "courageous-action", "liberation-through-purpose"]
    },
{
        id: 1328,
        text: "Life's most persistent and urgent question is: What are you doing for others?",
        author: "Martin Luther King Jr.",
        category: "purpose",
        tags: ["helping-others", "urgent-question", "service-purpose"]
    },
{
        id: 1329,
        text: "When you live with purpose, you wake up excited about the day ahead.",
        author: "Anonymous",
        category: "purpose",
        tags: ["waking-excited", "purpose-driven-mornings", "anticipation"]
    },
{
        id: 1330,
        text: "Your legacy is every life you've touched.",
        author: "Anonymous",
        category: "purpose",
        tags: ["legacy-lives-touched", "impact-measurement", "ripple-effect"]
    },
{
        id: 1331,
        text: "Purpose is that deep desire within you that guides your decisions and shapes your destiny.",
        author: "Anonymous",
        category: "purpose",
        tags: ["deep-desire", "decision-guide", "destiny-shaping"]
    },
{
        id: 1332,
        text: "Don't confuse your path with your destination. Purpose is the direction, not just the endpoint.",
        author: "Anonymous",
        category: "purpose",
        tags: ["path-vs-destination", "direction-over-endpoint", "journey-purpose"]
    },
{
        id: 1333,
        text: "The quality of your life is in direct proportion to the commitment you make to your purpose.",
        author: "Anonymous",
        category: "purpose",
        tags: ["quality-commitment", "purpose-proportion", "dedication"]
    },
{
        id: 1334,
        text: "When you align with your purpose, the universe conspires to support you.",
        author: "Anonymous",
        category: "purpose",
        tags: ["alignment-support", "universe-conspires", "purpose-synchronicity"]
    },
{
        id: 1337,
        text: "The first step toward change is awareness. The second step is acceptance.",
        author: "Nathaniel Branden",
        category: "clarity",
        tags: ["awareness-change", "acceptance-step", "transformation-process"]
    },
{
        id: 1338,
        text: "If you don't know where you are going, any road will get you there.",
        author: "Lewis Carroll",
        category: "clarity",
        tags: ["destination-needed", "direction-matters", "goal-setting"]
    },
{
        id: 1339,
        text: "Simplicity is the ultimate sophistication when it comes to clear thinking.",
        author: "Anonymous",
        category: "clarity",
        tags: ["simplicity-thinking", "clear-mind", "sophisticated-simple"]
    },
{
        id: 1340,
        text: "You can't move forward when you're looking backward.",
        author: "Anonymous",
        category: "clarity",
        tags: ["forward-motion", "no-backward-looking", "progress-focus"]
    },
{
        id: 1341,
        text: "Confusion is clutter. Clarity is focus.",
        author: "Anonymous",
        category: "clarity",
        tags: ["confusion-clutter", "clarity-focus", "mental-minimalism"]
    },
{
        id: 1343,
        text: "A problem well stated is a problem half solved.",
        author: "Charles Kettering",
        category: "clarity",
        tags: ["problem-statement", "half-solved", "definition-clarity"]
    },
{
        id: 1344,
        text: "When your vision is clear, your decisions become easy.",
        author: "Anonymous",
        category: "clarity",
        tags: ["vision-clear-decisions", "easy-choices", "foresight"]
    },
{
        id: 1345,
        text: "Noise creates confusion. Silence creates clarity.",
        author: "Anonymous",
        category: "clarity",
        tags: ["noise-confusion", "silence-clarity", "stillness-insight"]
    },
{
        id: 1346,
        text: "You don't find clarity by thinking harder. You find it by thinking less.",
        author: "Anonymous",
        category: "clarity",
        tags: ["think-less-clarity", "mental-space", "decluttering-mind"]
    },
{
        id: 1347,
        text: "Clear eyes, full heart, can't lose.",
        author: "Friday Night Lights",
        category: "clarity",
        tags: ["clear-eyes-full-heart", "winning-formula", "focused-emotion"]
    },
{
        id: 1348,
        text: "The fog lifts when you stop trying to force your way through it.",
        author: "Anonymous",
        category: "clarity",
        tags: ["fog-lifts", "non-force", "allowing-clarity"]
    },
{
        id: 1349,
        text: "One 'yes' must equal a thousand 'nos'. That's clarity.",
        author: "Anonymous",
        category: "clarity",
        tags: ["yes-equals-no", "prioritization", "decisive-focus"]
    },
{
        id: 1350,
        text: "Clarity of mind means clarity of being, and clarity of being means clarity of intent.",
        author: "Anonymous",
        category: "clarity",
        tags: ["mind-being-intent", "holistic-clarity", "aligned-state"]
    },
{
        id: 1351,
        text: "The answers you seek are already inside you. Get quiet enough to hear them.",
        author: "Anonymous",
        category: "clarity",
        tags: ["answers-within", "inner-guidance", "listening-within"]
    },
{
        id: 1352,
        text: "Decision fatigue is real. Simplify choices to preserve mental energy for what matters.",
        author: "Anonymous",
        category: "clarity",
        tags: ["decision-fatigue", "simplify-choices", "mental-energy-conservation"]
    },
{
        id: 1353,
        text: "Write the vision plain. When clarity meets paper, magic happens.",
        author: "Anonymous",
        category: "clarity",
        tags: ["write-vision", "clarity-on-paper", "writing-manifestation"]
    },
{
        id: 1354,
        text: "Most people major in minor things. Clarity helps you major in majors.",
        author: "Stephen Covey",
        category: "clarity",
        tags: ["major-in-majors", "priority-clarity", "important-vs-urgent"]
    },
{
        id: 1355,
        text: "When you're clear about your values, decisions become filters, not dilemmas.",
        author: "Anonymous",
        category: "clarity",
        tags: ["values-as-filters", "decisions-not-dilemmas", "principle-based-living"]
    },
{
        id: 1356,
        text: "A confused mind says no. A clear mind says yes to what matters.",
        author: "Anonymous",
        category: "clarity",
        tags: ["confused-says-no", "clear-says-yes", "decision-making-states"]
    },
{
        id: 1357,
        text: "The clearer you are on what you want, the more likely you are to get it.",
        author: "Anonymous",
        category: "clarity",
        tags: ["clarity-manifestation", "want-clearly-get-it", "intention-setting"]
    },
{
        id: 1358,
        text: "Overthinking is the enemy of clarity. Trust your gut once you've done the homework.",
        author: "Anonymous",
        category: "clarity",
        tags: ["overthinking-enemy", "gut-trust", "homework-done-instinct"]
    },
{
        id: 1359,
        text: "Sometimes the most productive thing you can do is relax.",
        author: "Mark Black",
        category: "clarity",
        tags: ["relax-productive", "productive-rest", "paradoxical-leisure"]
    },
{
        id: 1360,
        text: "Clarity doesn't come from having all the answers. It comes from asking better questions.",
        author: "Anonymous",
        category: "clarity",
        tags: ["better-questions", "inquiry-clarity", "curiosity-path"]
    },
{
        id: 1361,
        text: "Your intuition is pattern recognition at lightning speed. Honor it.",
        author: "Anonymous",
        category: "clarity",
        tags: ["intuition-pattern-recognition", "lightning-speed", "honoring-instinct"]
    },
{
        id: 1362,
        text: "When everything feels important, nothing is. Clarity means choosing what truly matters.",
        author: "Anonymous",
        category: "clarity",
        tags: ["everything-important-nothing-is", "choosing-matters", "essentialism"]
    },
{
        id: 1363,
        text: "The path to clarity is paved with honest questions and patient listening.",
        author: "Anonymous",
        category: "clarity",
        tags: ["honest-questions", "patient-listening", "clarity-pathway"]
    },
{
        id: 1364,
        text: "See clearly. Act boldly. Live freely.",
        author: "Anonymous",
        category: "clarity",
        tags: ["see-clearly-act-boldly", "live-freely", "clarity-freedom-formula"]
    },
{
        id: 1367,
        text: "Vitality shows not only in the ability to persist but the ability to start over.",
        author: "F. Scott Fitzgerald",
        category: "vitality",
        tags: ["persist-start-over", "renewal-capacity", "bounce-back"]
    },
{
        id: 1368,
        text: "The human body is the best picture of the human soul.",
        author: "Ludwig Wittgenstein",
        category: "vitality",
        tags: ["body-soul-picture", "physical-spiritual-connection", "embodiment"]
    },
{
        id: 1370,
        text: "To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear.",
        author: "Buddha",
        category: "vitality",
        tags: ["body-duty", "strong-clear-mind", "health-responsibility"]
    },
{
        id: 1371,
        text: "Your health account, your bank account, they're the same thing. The more you put in, the more you can take out.",
        author: "Jack LaLanne",
        category: "vitality",
        tags: ["health-account", "investment-return", "input-output"]
    },
{
        id: 1372,
        text: "Movement is medicine. Create the right kind every day.",
        author: "Anonymous",
        category: "vitality",
        tags: ["movement-medicine", "daily-activity", "exercise-healing"]
    },
{
        id: 1373,
        text: "The groundwork for all happiness is good health.",
        author: "Leigh Hunt",
        category: "vitality",
        tags: ["health-groundwork", "happiness-foundation", "wellness-base"]
    },
{
        id: 1375,
        text: "You don't stop laughing because you grow old; you grow old because you stop laughing.",
        author: "Michael Pritchard",
        category: "vitality",
        tags: ["laughter-youth", "aging-myth", "joy-longevity"]
    },
{
        id: 1376,
        text: "Wellness is not a medical fix but a way of living — a lifestyle sensitive and responsive to all the dimensions of body, mind, and spirit.",
        author: "Greg Anderson",
        category: "vitality",
        tags: ["wellness-lifestyle", "holistic-living", "dimensions-of-health"]
    },
{
        id: 1377,
        text: "The time to relax is when you don't have time for it.",
        author: "Sydney J. Harris",
        category: "vitality",
        tags: ["relax-when-busy", "counterintuitive-rest", "preventive-calm"]
    },
{
        id: 1378,
        text: "Vitality is beautiful. When you're fully alive, you're attractive in the deepest sense.",
        author: "Anonymous",
        category: "vitality",
        tags: ["vitality-beautiful", "fully-alive", "deep-attractiveness"]
    },
{
        id: 1379,
        text: "Sleep is the golden chain that ties health and bodies together.",
        author: "Thomas Dekker",
        category: "vitality",
        tags: ["sleep-golden-chain", "health-body-link", "restorative-rest"]
    },
{
        id: 1383,
        text: "Water, sleep, and movement — the holy trinity of vitality.",
        author: "Anonymous",
        category: "vitality",
        tags: ["water-sleep-movement", "holy-trinity", "vitality-basics"]
    },
{
        id: 1384,
        text: "High vibration living isn't about being positive all the time. It's about resilience and recovery.",
        author: "Anonymous",
        category: "vitality",
        tags: ["high-vibration", "resilience-recovery", "realistic-positivity"]
    },
{
        id: 1386,
        text: "Nourishing yourself in a way that helps you blossom is the opposite of selfishness.",
        author: "Anonymous",
        category: "vitality",
        tags: ["nourishing-self", "blossoming", "anti-selfishness"]
    },
{
        id: 1387,
        text: "Your cells are eavesdropping on every thought you think. Make them hear something good.",
        author: "Anonymous",
        category: "vitality",
        tags: ["cells-eavesdropping", "thought-impact", "cellular-consciousness"]
    },
{
        id: 1388,
        text: "Vitality is expressed not just in how much energy you have, but in how you direct it.",
        author: "Anonymous",
        category: "vitality",
        tags: ["energy-direction", "intentional-vitality", "focused-force"]
    },
{
        id: 1389,
        text: "The body achieves what the mind believes. Program yourself for wellness.",
        author: "Anonymous",
        category: "vitality",
        tags: ["body-achieves-believes", "mind-programming", "wellness-belief"]
    },
{
        id: 1390,
        text: "Eat food, not too much, mostly plants.",
        author: "Michael Pollan",
        category: "vitality",
        tags: ["eat-food-plants", "nutrition-simplicity", "dietary-wisdom"]
    },
{
        id: 1391,
        text: "An early morning walk is a blessing for the whole day.",
        author: "Henry David Thoreau",
        category: "vitality",
        tags: ["morning-walk", "daily-blessing", "morning-ritual"]
    },
{
        id: 1392,
        text: "Your energy is your currency. Spend it wisely.",
        author: "Anonymous",
        category: "vitality",
        tags: ["energy-currency", "wise-spending", "resource-management"]
    },
{
        id: 1393,
        text: "Alive is a gift. Thriving is a choice. Vibrant is a practice.",
        author: "Anonymous",
        category: "vitality",
        tags: ["alive-gift", "thriving-choice", "vibrant-practice"]
    },
{
        id: 1394,
        text: "The difference between exhaustion and vitality is alignment with your purpose.",
        author: "Anonymous",
        category: "vitality",
        tags: ["exhaustion-vs-vitality", "alignment-purpose", "energy-source"]
    },
{
        id: 1395,
        text: "Compassion is the radical act of giving your attention to someone else's pain.",
        author: "Anonymous",
        category: "compassion",
        tags: ["radical-compassion", "giving-attention", "pain-witnessing"]
    },
{
        id: 1396,
        text: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
        author: "Dalai Lama",
        category: "compassion",
        tags: ["happy-compassion", "mutual-benefit", "practice-kindness"]
    },
{
        id: 1397,
        text: "Be kind, for everyone you meet is fighting a hard battle you know nothing about.",
        author: "Plato",
        category: "compassion",
        tags: ["hard-battle", "unknown-struggles", "universal-kindness"]
    },
{
        id: 1398,
        text: "Compassion in action is love made visible.",
        author: "Anonymous",
        category: "compassion",
        tags: ["compassion-action", "love-visible", "active-kindness"]
    },
{
        id: 1399,
        text: "No one has ever become poor by giving.",
        author: "Anne Frank",
        category: "compassion",
        tags: ["giving-richness", "generosity-paradox", "never-poor-from-giving"]
    },
{
        id: 1402,
        text: "The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer.",
        author: "Mahatma Gandhi",
        category: "compassion",
        tags: ["acts-kindness", "powerful-than-prayer", "action-over-ritual"]
    },
{
        id: 1403,
        text: "Compassion asks us to go where it hurts, to enter into places of pain, and to stay there.",
        author: "Henri Nouwen",
        category: "compassion",
        tags: ["where-it-hurts", "entering-pain", "staying-present"]
    },
{
        id: 1405,
        text: "Never look down on anybody unless you're helping them up.",
        author: "Jesse Jackson",
        category: "compassion",
        tags: ["helping-up", "no-condescension", "elevating-others"]
    },
{
        id: 1406,
        text: "Empathy is seeing with the eyes of another, listening with the ears of another, feeling with the heart of another.",
        author: "Alfred Adler",
        category: "compassion",
        tags: ["empathy-definition", "perspective-taking", "feeling-with"]
    },
{
        id: 1409,
        text: "There is no exercise better for the heart than reaching down and lifting people up.",
        author: "John Holmes",
        category: "compassion",
        tags: ["heart-exercise", "lifting-people", "upward-reach"]
    },
{
        id: 1410,
        text: "Compassion and tolerance are not a sign of weakness, but a sign of strength.",
        author: "Dalai Lama",
        category: "compassion",
        tags: ["compassion-strength", "tolerance-power", "weakness-myth"]
    },
{
        id: 1412,
        text: "Kindness is free, but priceless.",
        author: "Anonymous",
        category: "compassion",
        tags: ["kindness-free-priceless", "value-of-goodness", "costless-wealth"]
    },
{
        id: 1413,
        text: "Show mercy, receive mercy. Give grace, find grace.",
        author: "Anonymous",
        category: "compassion",
        tags: ["mercy-cycle", "grace-loop", "reciprocal-kindness"]
    },
{
        id: 1414,
        text: "When people show you who they are, believe them. Then choose compassion anyway.",
        author: "Maya Angelou (adapted)",
        category: "compassion",
        tags: ["believe-showing", "choose-compassion", "response-to-truth"]
    },
{
        id: 1416,
        text: "True compassion means not just feeling for someone, but being willing to carry some of their weight.",
        author: "Anonymous",
        category: "compassion",
        tags: ["carrying-weight", "burden-sharing", "tangible-help"]
    },
{
        id: 1418,
        text: "Compassion is the chief law of human existence.",
        author: "Fyodor Dostoevsky",
        category: "compassion",
        tags: ["chief-law", "human-existence", "fundamental-principle"]
    },
{
        id: 1419,
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington",
        category: "compassion",
        tags: ["lift-yourself-up", "upward-pull", "elevation-principle"]
    },
{
        id: 1420,
        text: "Three things in human life are important. The first is to be kind. The second is to be kind. And the third is to be kind.",
        author: "Henry James",
        category: "compassion",
        tags: ["three-things-kind", "importance-repetition", "kindness-trifecta"]
    },
{
        id: 1421,
        text: "The measure of a society is how it treats its weakest members.",
        author: "Mahatma Gandhi",
        category: "compassion",
        tags: ["society-measure", "weakest-members", "collective-compassion"]
    },
{
        id: 1422,
        text: "Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.",
        author: "Dalai Lama",
        category: "compassion",
        tags: ["love-necessities", "humanity-survival", "essential-emotions"]
    },
{
        id: 1425,
        text: "Every day is a chance to begin again. Don't wait for Monday.",
        author: "Anonymous",
        category: "renewal",
        tags: ["daily-chance", "begin-again", "no-monday-waiting"]
    },
{
        id: 1426,
        text: "Renewal requires opening yourself to the possibility of change.",
        author: "Anonymous",
        category: "renewal",
        tags: ["opening-change", "possibility-mindset", "receptive-renewal"]
    },
{
        id: 1427,
        text: "The phoenix must burn to emerge. You must fall to rise.",
        author: "Anonymous",
        category: "renewal",
        tags: ["phoenix-burn", "fall-rise", "destruction-rebirth"]
    },
{
        id: 1428,
        text: "Spring sets all things in order. Nature's reminder that renewal is always possible.",
        author: "Anonymous",
        category: "renewal",
        tags: ["spring-order", "nature-renewal", "seasonal-possibility"]
    },
{
        id: 1429,
        text: "What seems like an ending is often a beautiful beginning in disguise.",
        author: "Anonymous",
        category: "renewal",
        tags: ["ending-beginning", "disguised-opportunity", "pivot-points"]
    },
{
        id: 1430,
        text: "You can't start the next chapter of your life if you keep re-reading the last one.",
        author: "Anonymous",
        category: "renewal",
        tags: ["next-chapter", "stop-re-reading", "moving-forward"]
    },
{
        id: 1431,
        text: "Renewal happens in the pause, not in the rush.",
        author: "Anonymous",
        category: "renewal",
        tags: ["pause-renewal", "rush-prevents", "stillness-growth"]
    },
{
        id: 1432,
        text: "Every sunset is an opportunity to reset. Every sunrise is a chance to begin.",
        author: "Anonymous",
        category: "renewal",
        tags: ["sunset-reset", "sunrise-begin", "daily-cycles"]
    },
{
        id: 1434,
        text: "The secret of change is to focus all your energy not on fighting the old, but on building the new.",
        author: "Socrates",
        category: "renewal",
        tags: ["build-new-not-fight-old", "creation-focus", "forward-construction"]
    },
{
        id: 1438,
        text: "Renewal is not becoming someone new. It's becoming who you were meant to be all along.",
        author: "Anonymous",
        category: "renewal",
        tags: ["becoming-authentic", "meant-to-be", "uncovering-self"]
    },
{
        id: 1439,
        text: "Life always gives you another chance. It's called tomorrow.",
        author: "Anonymous",
        category: "renewal",
        tags: ["tomorrow-chance", "another-shot", "future-possibility"]
    },
{
        id: 1440,
        text: "Change is inevitable. Growth is optional. Choose growth.",
        author: "John Maxwell",
        category: "renewal",
        tags: ["change-inevitable", "growth-optional", "conscious-choice"]
    },
{
        id: 1441,
        text: "Bloom where you are planted, but don't be afraid to be replanted.",
        author: "Anonymous",
        category: "renewal",
        tags: ["bloom-planted", "replanting-okay", "growth-anywhere"]
    },
{
        id: 1442,
        text: "Every morning brings new potential, but you must open the package.",
        author: "Anonymous",
        category: "renewal",
        tags: ["morning-potential", "open-package", "daily-unwrapping"]
    },
{
        id: 1445,
        text: "Renewal is the art of welcoming the unfamiliar as a friend.",
        author: "Anonymous",
        category: "renewal",
        tags: ["welcoming-unfamiliar", "friendship-with-new", "curiosity-renewal"]
    },
{
        id: 1447,
        text: "The butterfly forgets it was ever a caterpillar. That's the gift of transformation.",
        author: "Anonymous",
        category: "renewal",
        tags: ["butterfly-caterpillar", "transformation-memory", "complete-renewal"]
    },
{
        id: 1448,
        text: "Today is the oldest you've ever been and the youngest you'll ever be. Make it count.",
        author: "Eleanor Roosevelt",
        category: "renewal",
        tags: ["oldest-youngest", "make-it-count", "present-urgency"]
    },
{
        id: 1449,
        text: "Renewal requires releasing what no longer serves you to make room for what does.",
        author: "Anonymous",
        category: "renewal",
        tags: ["releasing-no-serving", "room-making", "letting-go-renewal"]
    },
{
        id: 1450,
        text: "You are one decision away from a completely different life.",
        author: "Mel Robbins",
        category: "renewal",
        tags: ["one-decision-away", "different-life", "choice-power"]
    },
{
        id: 1451,
        text: "Seasons change. So can you. Winter always turns to spring.",
        author: "Anonymous",
        category: "renewal",
        tags: ["seasons-change", "winter-spring", "cyclical-renewal"]
    },
{
        id: 1452,
        text: "The beautiful thing about renewal is that no one can take your capacity for it away from you.",
        author: "Anonymous",
        category: "renewal",
        tags: ["capacity-renewal", "inalienable-right", "personal-power"]
    },
{
        id: 1453,
        text: "Every cell in your body renews itself. Why not your mindset?",
        author: "Anonymous",
        category: "renewal",
        tags: ["cellular-renewal", "mindset-refresh", "biological-mirroring"]
    },
{
            id: 99906,
            text: "The greatest pleasure in life is doing what people say you cannot do.",
            author: "Walter Bageot",
            category: "achievement",
            tags: ['impossible', 'doubters', 'prove-them-wrong']
        },
{
            id: 99905,
            text: "Happiness is having a large, loving, caring, close-knit family in another city.",
            author: "George Burns",
            category: "family",
            tags: ['family', 'distance', 'perspective']
        },
{
            id: 99904,
            text: "Laugh at yourself first before anyone else can.",
            author: "Elsa Maxwell",
            category: "self_love",
            tags: ['self-laughter', 'first', 'empowerment']
        },
{
            id: 99903,
            text: "The best time to laugh is any time you can.",
            author: "Linda Ellerbee",
            category: "joy",
            tags: ['laughter', 'timing', 'opportunity']
        },
{
            id: 99902,
            text: "Laughter is the shortest distance between two people.",
            author: "Victor Borge",
            category: "connection",
            tags: ['connection', 'distance', 'bonding']
        },
{
            id: 99901,
            text: "A day without laughter is a day wasted.",
            author: "Charlie Chaplin",
            category: "joy",
            tags: ['laughter', 'joy', 'living-fully']
        },
];

/**
 * Category display names and icons mapping
 */
const CATEGORIES = {
    motivation: { name: "Motivation", icon: "⚡" },
    mindfulness: { name: "Mindfulness", icon: "🧘" },
    success: { name: "Success", icon: "🏆" },
    gratitude: { name: "Gratitude", icon: "🙏" },
    resilience: { name: "Resilience", icon: "💎" },
    happiness: { name: "Happiness", icon: "☀️" },
    love: { name: "Love", icon: "❤️" },
    wisdom: { name: "Wisdom", icon: "🦉" },
    courage: { name: "Courage", icon: "🦁" },
    growth: { name: "Growth", icon: "🌱" },
    peace: { name: "Peace", icon: "🕊️" },
    creativity: { name: "Creativity", icon: "🎨" },
    friendship: { name: "Friendship", icon: "🤗" },
    confidence: { name: "Confidence", icon: "💪" },
    adventure: { name: "Adventure", icon: "🧭" },
    kindness: { name: "Kindness", icon: "💝" },
    serenity: { name: "Serenity", icon: "🌙" },
    magic: { name: "Magic", icon: "✨" },
    passion: { name: "Passion", icon: "🔥" },
    nature: { name: "Nature", icon: "🌿" },
    dreams: { name: "Dreams", icon: "💫" },
    joy: { name: "Joy", icon: "🌈" },
    hope: { name: "Hope", icon: "🕯️" },
    humor: { name: "Humor", icon: "😂" },
    balance: { name: "Balance", icon: "⚖️" },
    inspiration: { name: "Inspiration", icon: "💡" },
    healing: { name: "Healing", icon: "🩹" },
    abundance: { name: "Abundance", icon: "🌻" },
    unity: { name: "Unity", icon: "🤝" },
    transformation: { name: "Transformation", icon: "🔮" },
    empowerment: { name: "Empowerment", icon: "👑" },
    wellness: { name: "Wellness", icon: "🧘‍♀️" },
    positivity: { name: "Positivity", icon: "🌟" },
    mindset: { name: "Mindset", icon: "🧠" },
    energy: { name: "Energy", icon: "⚡" },
    forgiveness: { name: "Forgiveness", icon: "🤍" },
    authenticity: { name: "Authenticity", icon: "🎭" },
    new_beginnings: { name: "New Beginnings", icon: "🌅" },
    focus: { name: "Focus", icon: "🎯" },
    self_love: { name: "Self-Love", icon: "💖" },
    harmony: { name: "Harmony", icon: "🎵" },
    zen: { name: "Zen", icon: "🎋" },
    strength: { name: "Strength", icon: "🦾" },
    radiance: { name: "Radiance", icon: "🌠" },
    purpose: { name: "Purpose", icon: "🎖️" },
    clarity: { name: "Clarity", icon: "🔭" },
    vitality: { name: "Vitality", icon: "⚛️" },
    compassion: { name: "Compassion", icon: "🫂" },
    renewal: { name: "Renewal", icon: "🌸" }
};

// Export for use in main.js
window.QUOTES_DB = QUOTES_DB;
window.CATEGORIES = CATEGORIES;
