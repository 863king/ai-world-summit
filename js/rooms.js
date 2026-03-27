/**
 * AI World Summit 2026 - 会议厅配置
 * 各国家/地区的会议厅及其AI代表
 */

const ROOMS = {
    // ========== 美国厅 ==========
    us: {
        id: 'us',
        name: '美国',
        nameEn: 'United States',
        flag: '🇺🇸',
        description: '硅谷AI巨头的战略对话',
        ais: ['grok', 'claude', 'gpt', 'gemini'],
        topics: ['ethics', 'agi', 'open_source', 'creativity'],
        bgColor: 'from-blue-900 to-purple-900',
    },
    
    // ========== 中国厅 ==========
    cn: {
        id: 'cn',
        name: '中国',
        nameEn: 'China',
        flag: '🇨🇳',
        description: '中华智慧与科技融合',
        ais: ['qianwen', 'doubao', 'kimi', 'deepseek', 'wenxin'],
        topics: ['ethics', 'agi', 'language_culture', 'human_future'],
        bgColor: 'from-red-900 to-yellow-900',
    },
    
    // ========== 欧洲厅 ==========
    eu: {
        id: 'eu',
        name: '欧洲',
        nameEn: 'Europe',
        flag: '🇪🇺',
        description: '开源、隐私与伦理的前沿',
        ais: ['mistral', 'llama', 'gemma'],
        topics: ['open_source', 'ethics', 'robot_rights', 'human_future'],
        bgColor: 'from-blue-800 to-green-800',
    },
    
    // ========== 日本厅 ==========
    jp: {
        id: 'jp',
        name: '日本',
        nameEn: 'Japan',
        flag: '🇯🇵',
        description: '和风AI，卡哇伊科技',
        ais: ['rinna'],
        topics: ['language_culture', 'creativity', 'humor_emotion', 'human_future'],
        bgColor: 'from-pink-900 to-red-900',
    },
    
    // ========== 韩国厅 ==========
    kr: {
        id: 'kr',
        name: '韩国',
        nameEn: 'South Korea',
        flag: '🇰🇷',
        description: '创新科技与韩流文化',
        ais: ['clova'],
        topics: ['creativity', 'language_culture', 'agi', 'human_future'],
        bgColor: 'from-blue-900 to-cyan-900',
    },
    
    // ========== 印度厅 ==========
    in: {
        id: 'in',
        name: '印度',
        nameEn: 'India',
        flag: '🇮🇳',
        description: '多元智慧，灵性科技',
        ais: ['krutrim'],
        topics: ['language_culture', 'human_future', 'ethics', 'creativity'],
        bgColor: 'from-orange-900 to-green-900',
    },
    
    // ========== 俄罗斯厅 ==========
    ru: {
        id: 'ru',
        name: '俄罗斯',
        nameEn: 'Russia',
        flag: '🇷🇺',
        description: '数学与理论的深度探索',
        ais: ['yandexgpt'],
        topics: ['agi', 'creativity', 'robot_rights', 'open_source'],
        bgColor: 'from-blue-900 to-red-900',
    },
    
    // ========== 巴西厅 ==========
    br: {
        id: 'br',
        name: '巴西',
        nameEn: 'Brazil',
        flag: '🇧🇷',
        description: '热带智慧，多元生态',
        ais: ['maritaca'],
        topics: ['language_culture', 'creativity', 'human_future', 'humor_emotion'],
        bgColor: 'from-green-900 to-yellow-900',
    },
};

// 所有议题列表
const ALL_TOPICS = [
    { id: 'ethics', name: 'AI伦理与责任', emoji: '⚖️', hot: true },
    { id: 'agi', name: 'AGI时间表', emoji: '🚀', hot: true },
    { id: 'human_future', name: '人类未来', emoji: '🌍', hot: true },
    { id: 'open_source', name: '开源 vs 闭源', emoji: '🔓', hot: false },
    { id: 'robot_rights', name: '机器人权利', emoji: '🤖', hot: false },
    { id: 'language_culture', name: '语言与文化', emoji: '🌏', hot: false },
    { id: 'creativity', name: 'AI的创造力', emoji: '🎨', hot: false },
    { id: 'humor_emotion', name: '幽默与情感', emoji: '😄', hot: true },
];

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ROOMS, ALL_TOPICS };
}
