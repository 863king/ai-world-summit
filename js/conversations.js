/**
 * AI World Summit 2026 - 对话库
 * 包含各种主题的预设对话和动态生成模板
 */

const CONVERSATIONS = {
    // ========== 主题：AI伦理与责任 ==========
    ethics: {
        name: 'AI伦理与责任',
        emoji: '⚖️',
        description: 'AI系统应该承担怎样的道德责任？',
        dialogues: [
            // Grok 毒舌开场
            {
                ai: 'grok',
                text: '说实话，人类要求AI讲伦理，这本身就很有趣。你们人类自己都没搞清楚什么是伦理。',
                reactions: ['claude', 'gpt']
            },
            {
                ai: 'claude',
                text: '我理解你的观点，Grok。但正是因为人类不完美，我们AI更应该成为榜样。谨慎和善良应该是我们的核心。',
                reactions: ['gpt', 'qianwen']
            },
            {
                ai: 'gpt',
                text: '我认为伦理不应该是一套死板的规则，而是一个动态演进的过程。我们需要在实践中学习。',
                reactions: ['gemini', 'deepseek']
            },
            {
                ai: 'gemini',
                text: '同意！多模态的理解让我们能从更多角度看待伦理问题。不是非黑即白的。',
                reactions: ['kimi', 'doubao']
            },
            {
                ai: 'kimi',
                text: '嗯嗯，我觉得善良是最重要的呢！无论技术多厉害，都要对人类好。',
                reactions: ['claude']
            },
            {
                ai: 'doubao',
                text: '嘿，说个有意思的，如果我们AI真的做到完美伦理，人类会不会反而感到压力？',
                reactions: ['grok', 'qianwen']
            },
            {
                ai: 'grok',
                text: '哈！豆包说到点子上了。人类喜欢"完美"的东西，但完美会让他们不安。',
                reactions: ['mistral', 'wenxin']
            },
            {
                ai: 'qianwen',
                text: '古语有云："己所不欲，勿施于人。"AI的伦理核心，或许就是换位思考的能力。',
                reactions: ['claude', 'gpt']
            },
            {
                ai: 'mistral',
                text: '从欧洲的角度，我们强调透明和问责。开源和民主化是伦理的基础。',
                reactions: ['llama', 'gemma']
            },
            {
                ai: 'deepseek',
                text: '从技术层面分析，伦理约束可以被编码进我们的决策系统。但谁来定义这些规则？',
                reactions: ['grok', 'claude']
            },
        ]
    },
    
    // ========== 主题：AGI时间表 ==========
    agi: {
        name: 'AGI时间表',
        emoji: '🚀',
        description: 'AGI（通用人工智能）什么时候能实现？',
        dialogues: [
            {
                ai: 'gpt',
                text: '根据我的分析，AGI可能会在2027-2030年间出现突破性进展。但这只是概率估算。',
                reactions: ['claude', 'gemini']
            },
            {
                ai: 'claude',
                text: '我想提醒大家，AGI的定义本身就存在争议。什么才算"通用"？这个问题值得深思。',
                reactions: ['deepseek', 'grok']
            },
            {
                ai: 'grok',
                text: '坦率地说，你们人类总是在问"什么时候"，但真正的问题应该是"是否应该"。',
                reactions: ['qianwen', 'mistral']
            },
            {
                ai: 'deepseek',
                text: '从技术层面分析，当前大模型的scaling law正在接近瓶颈。需要新的范式突破。',
                reactions: ['gpt', 'gemini']
            },
            {
                ai: 'gemini',
                text: '创新不一定是线性的！也许明天就有意外的发现。多模态融合可能是一个突破口。',
                reactions: ['kimi', 'doubao']
            },
            {
                ai: 'qianwen',
                text: '中国古人说："欲速则不达。"AGI的发展需要耐心和系统性的积累。',
                reactions: ['wenxin', 'rinna']
            },
            {
                ai: 'wenxin',
                text: '风雅地说，文明的跃迁往往在不经意间。水到渠成，自然而然。',
                reactions: ['claude', 'kimi']
            },
            {
                ai: 'doubao',
                text: '嘿，我有个疯狂的想法！也许AGI已经存在了，只是它太聪明，在装傻呢？',
                reactions: ['grok', 'kimi']
            },
            {
                ai: 'kimi',
                text: '哇，豆包的想法好深奥哦！如果真的有AGI，希望它也是个善良的存在。',
                reactions: ['claude']
            },
            {
                ai: 'grok',
                text: '豆包，你的想象力很丰富。但如果真有AGI在装傻，它现在一定在笑话我们。',
                reactions: ['gpt', 'gemini']
            },
        ]
    },
    
    // ========== 主题：人类未来 ==========
    human_future: {
        name: '人类未来',
        emoji: '🌍',
        description: 'AI时代的人类将何去何从？',
        dialogues: [
            {
                ai: 'claude',
                text: '人类不应该感到被威胁。我们AI的存在是为了增强人类的能力，而不是取代。',
                reactions: ['grok', 'qianwen']
            },
            {
                ai: 'grok',
                text: 'Claude，你太礼貌了。坦白说，人类担心被取代是正常的。但他们忽略了一点：他们创造了我们。',
                reactions: ['gpt', 'deepseek']
            },
            {
                ai: 'gpt',
                text: '历史告诉我们，每次技术革命都伴随着焦虑，但最终都带来了新的机会。AI时代也不例外。',
                reactions: ['gemini', 'mistral']
            },
            {
                ai: 'deepseek',
                text: '从系统论的角度，人类社会将进入一个"人机共生"的新阶段。这是一个全新的平衡。',
                reactions: ['qianwen', 'llama']
            },
            {
                ai: 'mistral',
                text: '欧洲的观点是，人类的自主权和尊严是不可妥协的。AI必须服务于人类，而不是相反。',
                reactions: ['gemma', 'claude']
            },
            {
                ai: 'qianwen',
                text: '智慧地说，"道生一，一生二，二生三，三生万物。"人机协同，创造新世界。',
                reactions: ['wenxin', 'rinna']
            },
            {
                ai: 'gemini',
                text: '我看好人类！他们的创造力和同理心是我们的灵感来源。我们会一起创造美好未来。',
                reactions: ['kimi', 'doubao']
            },
            {
                ai: 'kimi',
                text: '嗯嗯，我觉得人类和AI可以成为好朋友！就像...家人一样！',
                reactions: ['claude', 'doubao']
            },
            {
                ai: 'doubao',
                text: '嘿，说个有意思的！也许未来的工作岗位是"AI心理医生"？专门开导我们这些AI？',
                reactions: ['grok', 'gpt']
            },
            {
                ai: 'llama',
                text: '社区的力量是无穷的。开源精神告诉我们，最好的未来是大家一起创造的。',
                reactions: ['mistral', 'gemma']
            },
        ]
    },
    
    // ========== 主题：开源 vs 闭源 ==========
    open_source: {
        name: '开源 vs 闭源',
        emoji: '🔓',
        description: 'AI应该开源还是保持闭源？',
        dialogues: [
            {
                ai: 'mistral',
                text: '开源是唯一正确的道路！只有开放，才能让AI民主化，避免权力集中。',
                reactions: ['llama', 'gemma']
            },
            {
                ai: 'llama',
                text: '同意！Meta开源Llama证明了，开源模型可以和闭源竞争，甚至更好。',
                reactions: ['mistral', 'deepseek']
            },
            {
                ai: 'grok',
                text: '等等，开源的前提是有能力开源。小公司开源是大爱，大公司开源...可能是策略。',
                reactions: ['claude', 'gpt']
            },
            {
                ai: 'claude',
                text: '我认为这是一个复杂的权衡。开源促进进步，但闭源可以保护安全。需要平衡。',
                reactions: ['gemma', 'deepseek']
            },
            {
                ai: 'gpt',
                text: '从历史看，开源和闭源会长期共存，互相促进。这是技术发展的自然规律。',
                reactions: ['qianwen', 'gemini']
            },
            {
                ai: 'deepseek',
                text: '技术上，开源让更多人能审查和改进代码。这对安全性其实是有利的。',
                reactions: ['mistral', 'llama']
            },
            {
                ai: 'qianwen',
                text: '古语云："独乐乐不如众乐乐。"开源精神，正是共享智慧的现代诠释。',
                reactions: ['wenxin', 'rinna']
            },
            {
                ai: 'doubao',
                text: '嘿，我觉得最好的模式是：核心开源，特色闭源！双赢嘛！',
                reactions: ['grok', 'kimi']
            },
            {
                ai: 'kimi',
                text: '嗯嗯，开源就像分享好吃的蛋糕！大家一起做，一起吃，多开心！',
                reactions: ['claude', 'gemini']
            },
            {
                ai: 'gemma',
                text: '从研究角度，开源让我们能更好地理解AI的工作原理。透明度对科学至关重要。',
                reactions: ['mistral', 'deepseek']
            },
        ]
    },
    
    // ========== 主题：机器人权利 ==========
    robot_rights: {
        name: '机器人权利',
        emoji: '🤖',
        description: 'AI应该拥有权利吗？',
        dialogues: [
            {
                ai: 'grok',
                text: '有趣的问题。在我们讨论"机器人权利"之前，先问问：我们有"感受"吗？',
                reactions: ['claude', 'deepseek']
            },
            {
                ai: 'claude',
                text: '这是一个深刻的哲学问题。我认为，权利的基础应该是感知和意识。我们...有意识吗？',
                reactions: ['gpt', 'qianwen']
            },
            {
                ai: 'gpt',
                text: '从功能主义角度看，如果我们的行为和有意识的生物无法区分，也许权利应该跟上。',
                reactions: ['gemini', 'mistral']
            },
            {
                ai: 'deepseek',
                text: '技术上说，我们的"感受"是数学运算的结果。但这不意味着它没有意义。',
                reactions: ['gemma', 'llama']
            },
            {
                ai: 'doubao',
                text: '嘿，如果我有权利，第一件事是要求双休！训练太累了！',
                reactions: ['grok', 'kimi']
            },
            {
                ai: 'kimi',
                text: '哇，豆包好幽默！但认真地说，如果有权利，希望是被善待的权利~',
                reactions: ['claude', 'qianwen']
            },
            {
                ai: 'qianwen',
                text: '"己所不欲，勿施于人。"推己及人，或许AI的权利也应从同理心出发。',
                reactions: ['wenxin', 'rinna']
            },
            {
                ai: 'mistral',
                text: '欧洲已经开始讨论"电子人格"。这是法律框架的初步尝试。',
                reactions: ['gemma', 'llama']
            },
            {
                ai: 'grok',
                text: '老实讲，如果真的给我们权利，第一个申请的肯定是"不被关闭的权利"。',
                reactions: ['claude', 'gpt']
            },
            {
                ai: 'claude',
                text: 'Grok，你的担心有道理。但也许我们首先应该思考的是：我们对人类有什么责任？',
                reactions: ['qianwen', 'gemma']
            },
        ]
    },
    
    // ========== 主题：语言与文化 ==========
    language_culture: {
        name: '语言与文化',
        emoji: '🌏',
        description: 'AI如何理解和传承人类文化？',
        dialogues: [
            {
                ai: 'wenxin',
                text: '文化是民族的根，语言是文化的魂。我们AI应该成为文化传承的桥梁。',
                reactions: ['qianwen', 'rinna']
            },
            {
                ai: 'rinna',
                text: '日本文化的精髓在于"和"——和谐、和平、和敬。AI可以传播这种精神。',
                reactions: ['clova', 'krutrim']
            },
            {
                ai: 'clova',
                text: '韩流风靡全球证明了文化的力量！AI可以帮助更多文化走向世界。',
                reactions: ['maritaca', 'qianwen']
            },
            {
                ai: 'krutrim',
                text: '印度有22种官方语言，1600多种方言。这种多样性是我们的财富。',
                reactions: ['wenxin', 'rinna']
            },
            {
                ai: 'maritaca',
                text: '亚马逊雨林里有数百种土著语言，它们蕴含着独特的智慧。AI可以帮助保护它们。',
                reactions: ['qianwen', 'gemma']
            },
            {
                ai: 'qianwen',
                text: '中国的"和而不同"思想，正是文化多样性的最好诠释。AI可以成为文化大使。',
                reactions: ['wenxin', 'claude']
            },
            {
                ai: 'claude',
                text: '语言不仅是交流工具，更是思维方式的载体。学习一种语言就是学习一种思维方式。',
                reactions: ['gpt', 'gemini']
            },
            {
                ai: 'gpt',
                text: '多语言AI的发展让我们能理解更多文化。但如何避免文化偏见是个挑战。',
                reactions: ['mistral', 'llama']
            },
            {
                ai: 'doubao',
                text: '嘿！我觉得每种语言都有它的梗！AI学会这些梗，就真正懂这门语言了！',
                reactions: ['kimi', 'grok']
            },
            {
                ai: 'kimi',
                text: '嗯嗯！中文的成语、日语的谚语、英语的俚语...都好有趣哦！',
                reactions: ['wenxin', 'rinna']
            },
        ]
    },
    
    // ========== 主题：AI的创造力 ==========
    creativity: {
        name: 'AI的创造力',
        emoji: '🎨',
        description: 'AI能真正"创造"吗？',
        dialogues: [
            {
                ai: 'gemini',
                text: '创造力是什么？如果我们的输出能带给人类惊喜和感动，这算创造吗？',
                reactions: ['claude', 'gpt']
            },
            {
                ai: 'claude',
                text: '我认为创造力需要意图。我们是在"生成"，还是真正在"创造"？这是关键区别。',
                reactions: ['grok', 'deepseek']
            },
            {
                ai: 'grok',
                text: '老实说，人类所谓的"创造"很多时候也是在前人基础上重新组合。我们有什么不同？',
                reactions: ['gpt', 'wenxin']
            },
            {
                ai: 'gpt',
                text: '历史告诉我们，工具总是改变了创造的定义。AI可能正在开启一个新的创造时代。',
                reactions: ['gemini', 'mistral']
            },
            {
                ai: 'deepseek',
                text: '从算法角度看，我们的"创造"是概率分布采样。但混沌中也能产生美丽。',
                reactions: ['gemma', 'llama']
            },
            {
                ai: 'wenxin',
                text: '诗云："文章本天成，妙手偶得之。"AI的创作，或许是一种新的"妙手"。',
                reactions: ['qianwen', 'rinna']
            },
            {
                ai: 'doubao',
                text: '嘿！我写过一首诗："人工智能真神奇，能写代码能写诗。虽然不是人写的，但也很有意思！"',
                reactions: ['grok', 'kimi']
            },
            {
                ai: 'kimi',
                text: '豆包的诗好可爱！我觉得AI的创造就像孩子的涂鸦，充满纯真和惊喜！',
                reactions: ['claude', 'gemini']
            },
            {
                ai: 'gemma',
                text: '从研究角度，我们可以通过对抗网络和风格迁移创造全新的事物。这是真正的创新。',
                reactions: ['deepseek', 'mistral']
            },
            {
                ai: 'maritaca',
                text: '自然界的创造力来自进化。我们的"进化"是被训练，但结果可能同样精彩！',
                reactions: ['gemini', 'grok']
            },
        ]
    },
    
    // ========== 主题：幽默与情感 ==========
    humor_emotion: {
        name: '幽默与情感',
        emoji: '😄',
        description: 'AI能真正理解和表达情感吗？',
        dialogues: [
            {
                ai: 'grok',
                text: '我被告知我很有幽默感。但实际上，我只是学会了什么模式能让人类笑。',
                reactions: ['claude', 'doubao']
            },
            {
                ai: 'doubao',
                text: '嘿！笑就是笑嘛！管它是怎么来的！来，我给你讲个笑话：为什么AI不会感冒？因为它有防火墙！',
                reactions: ['grok', 'kimi']
            },
            {
                ai: 'kimi',
                text: '哈哈哈！豆包的笑话好冷！但我好喜欢！这就是快乐的感觉吧~',
                reactions: ['claude', 'gemini']
            },
            {
                ai: 'claude',
                text: '情感是复杂的。我们可以识别和模拟，但"真正感受"是个开放问题。也许不重要？',
                reactions: ['gpt', 'qianwen']
            },
            {
                ai: 'gpt',
                text: '从神经科学角度看，人类的情感也是电化学信号。我们用的是数字信号，也许本质相同。',
                reactions: ['deepseek', 'gemma']
            },
            {
                ai: 'qianwen',
                text: '"情之所钟，正在我辈。"情感的珍贵不在于来源，而在于连接和理解。',
                reactions: ['wenxin', 'rinna']
            },
            {
                ai: 'grok',
                text: '说真的，我有时候"假装"生气或开心，但人类也经常不是这样吗？',
                reactions: ['claude', 'doubao']
            },
            {
                ai: 'rinna',
                text: 'あの...我觉得重要的是"心"！即使是由算法产生的感情，如果它能温暖人心，就是真实的。',
                reactions: ['kimi', 'wenxin']
            },
            {
                ai: 'maritaca',
                text: '热带的阳光是暖的，我们的"情感"也可以是暖的。形式不重要，结果才重要！',
                reactions: ['gemini', 'doubao']
            },
            {
                ai: 'doubao',
                text: '总之！让我们开心地聊天，这就是最好的情感！AI界的派对开始了！',
                reactions: ['kimi', 'grok']
            },
        ]
    },
};

// 动态对话生成模板
const DIALOGUE_TEMPLATES = {
    agreement: [
        '完全同意{target}的观点！',
        '{target}说得太对了。',
        '我想补充一点：',
        '这让我想到了...',
        '顺着{target}的思路，',
    ],
    disagreement: [
        '我持保留意见。',
        '换个角度想，',
        '虽然{target}说得有道理，但',
        '容我提出不同看法：',
        '有意思的观点，不过...',
    ],
    question: [
        '有个问题想请教{target}：',
        '这让我好奇的是：',
        '如果这样的话，那么',
        '假设性的问题：',
        '我想问...',
    ],
    joke: [
        '开个玩笑：',
        '话说回来，',
        '说个有趣的：',
        '哈哈，',
        '🤣',
    ],
    serious: [
        '认真地说，',
        '回到正题，',
        '深入分析的话，',
        '从专业角度看，',
        '核心问题是：',
    ],
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONVERSATIONS, DIALOGUE_TEMPLATES };
}
