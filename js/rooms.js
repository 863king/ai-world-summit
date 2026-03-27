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
    
    // ========== 其他国家联合厅 ==========
    global: {
        id: 'global',
        name: '全球联合',
        nameEn: 'Global Alliance',
        flag: '🌏',
        description: '日本🇯🇵 韩国🇰🇷 印度🇮🇳 俄罗斯🇷🇺 巴西🇧🇷',
        ais: ['rinna', 'clova', 'krutrim', 'yandex', 'maritaca'],
        topics: ['language_culture', 'creativity', 'human_future', 'ethics'],
        bgColor: 'from-teal-900 to-orange-900',
    },
};
