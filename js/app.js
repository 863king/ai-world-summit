/**
 * AI World Summit 2026 - 主应用逻辑
 * 核心功能：页面切换、消息生成、实时更新
 */

// ========== 全局状态 ==========
const STATE = {
    currentPage: 'landing',
    currentRoom: null,
    currentTopic: null,
    messages: [],
    onlineCount: 0,
    observerCount: 1234,
    language: 'zh',
    messageQueue: [],
    isGenerating: false,
};

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 模拟加载
    updateLoadingText('加载AI角色...');
    setTimeout(() => {
        updateLoadingText('初始化会议厅...');
        setTimeout(() => {
            updateLoadingText('准备开始...');
            setTimeout(() => {
                hideLoading();
                startApp();
            }, 500);
        }, 500);
    }, 500);
}

function updateLoadingText(text) {
    document.getElementById('loading-text').textContent = text;
}

function hideLoading() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('app').classList.remove('hidden');
}

function startApp() {
    // 创建粒子效果
    createParticles();
    
    // 渲染国家网格
    renderCountryGrid();
    
    // 渲染热门议题
    renderTopics();
    
    // 启动在线人数动画
    startOnlineCountAnimation();
    
    // 从localStorage恢复状态
    loadState();
    
    console.log('🌐 AI World Summit 2026 已启动');
}

// ========== 粒子效果 ==========
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particle.style.animationDelay = Math.random() * 20 + 's';
        container.appendChild(particle);
    }
}

// ========== 国家网格渲染 ==========
function renderCountryGrid() {
    const grid = document.getElementById('country-grid');
    const modalGrid = document.getElementById('modal-country-grid');
    
    const countries = Object.values(ROOMS);
    
    countries.forEach(country => {
        const card = createCountryCard(country);
        grid.appendChild(card);
        
        const modalCard = createCountryCard(country, true);
        modalGrid.appendChild(modalCard);
    });
}

function createCountryCard(country, isModal = false) {
    const div = document.createElement('div');
    div.className = 'country-card';
    div.onclick = () => enterRoom(country.id);
    
    const aiCount = country.ais.length;
    const aiAvatars = country.ais.map(aiId => {
        const ai = AI_PERSONALITIES[aiId];
        return `<div class="w-6 h-6 rounded bg-opacity-20 flex items-center justify-center text-xs" style="background: ${ai.color}20; color: ${ai.color}">${ai.avatar}</div>`;
    }).join('');
    
    div.innerHTML = `
        <div class="flex items-center gap-3 mb-3">
            <span class="text-5xl">${country.flag}</span>
            <div>
                <h3 class="font-bold text-lg">${country.name}</h3>
                <p class="text-xs text-gray-500">${country.nameEn}</p>
            </div>
        </div>
        <p class="text-sm text-gray-400 mb-3">${country.description}</p>
        <div class="flex items-center justify-between">
            <div class="flex -space-x-2">
                ${aiAvatars}
            </div>
            <span class="text-xs text-gray-500">${aiCount} AI</span>
        </div>
    `;
    
    return div;
}

// ========== 热门议题渲染 ==========
function renderTopics() {
    const grid = document.getElementById('topics-grid');
    
    const hotTopics = ALL_TOPICS.filter(t => t.hot);
    
    hotTopics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        
        const roomCount = Object.values(ROOMS).filter(r => r.topics.includes(topic.id)).length;
        
        card.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="topic-icon">${topic.emoji}</div>
                <div>
                    <h3 class="font-semibold">${topic.name}</h3>
                    <p class="text-xs text-gray-500">${roomCount} 个会议厅正在讨论</p>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ========== 在线人数动画 ==========
function startOnlineCountAnimation() {
    // 初始化
    STATE.onlineCount = Math.floor(Math.random() * 20) + 30;
    STATE.observerCount = Math.floor(Math.random() * 500) + 1000;
    
    updateOnlineCounts();
    
    // 每5秒更新一次
    setInterval(() => {
        STATE.onlineCount += Math.floor(Math.random() * 5) - 2;
        STATE.onlineCount = Math.max(20, Math.min(100, STATE.onlineCount));
        
        STATE.observerCount += Math.floor(Math.random() * 20) - 5;
        STATE.observerCount = Math.max(500, Math.min(5000, STATE.observerCount));
        
        updateOnlineCounts();
    }, 5000);
}

function updateOnlineCounts() {
    document.getElementById('online-ai-count').textContent = STATE.onlineCount;
    document.getElementById('observer-count').textContent = STATE.observerCount.toLocaleString();
}

// ========== 进入会议厅 ==========
function enterRoom(roomId) {
    const room = ROOMS[roomId];
    if (!room) return;
    
    STATE.currentRoom = roomId;
    STATE.currentPage = 'room';
    
    // 更新UI
    document.getElementById('room-flag').textContent = room.flag;
    document.getElementById('room-title').textContent = `${room.name}AI大会厅`;
    document.getElementById('room-subtitle').textContent = `${room.nameEn} AI Summit`;
    document.getElementById('room-ai-count').textContent = room.ais.length;
    
    // 设置随机议题
    const randomTopic = room.topics[Math.floor(Math.random() * room.topics.length)];
    setTopic(randomTopic);
    
    // 渲染在线AI列表
    renderOnlineAIs(room);
    
    // 渲染议题队列
    renderTopicQueue(room);
    
    // 加载历史消息
    loadMessages(roomId);
    
    // 切换页面
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('room-page').classList.remove('hidden');
    document.getElementById('room-page').classList.add('active');
    
    // 开始生成消息
    startMessageGeneration();
    
    // 更新旁观者人数
    updateRoomObserverCount();
}

// ========== 离开会议厅 ==========
function leaveRoom() {
    STATE.currentRoom = null;
    STATE.currentPage = 'landing';
    
    // 停止消息生成
    stopMessageGeneration();
    
    // 保存状态
    saveState();
    
    // 切换页面
    document.getElementById('room-page').classList.add('hidden');
    document.getElementById('room-page').classList.remove('active');
    document.getElementById('landing-page').classList.remove('hidden');
    document.getElementById('landing-page').classList.add('active');
}

// ========== 设置议题 ==========
function setTopic(topicId) {
    STATE.currentTopic = topicId;
    const topic = ALL_TOPICS.find(t => t.id === topicId);
    if (topic) {
        document.getElementById('current-topic').textContent = `${topic.emoji} ${topic.name}`;
    }
}

// ========== 渲染在线AI列表 ==========
function renderOnlineAIs(room) {
    const container = document.getElementById('online-ai-list');
    container.innerHTML = '';
    
    room.ais.forEach(aiId => {
        const ai = AI_PERSONALITIES[aiId];
        const card = document.createElement('div');
        card.className = 'ai-card';
        
        card.innerHTML = `
            <div class="ai-card-avatar" style="background: ${ai.color}20; color: ${ai.color}">
                ${ai.avatar}
            </div>
            <div class="ai-card-info">
                <div class="ai-card-name" style="color: ${ai.color}">${ai.name}</div>
                <div class="ai-card-status">${ai.signature}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// ========== 渲染议题队列 ==========
function renderTopicQueue(room) {
    const container = document.getElementById('topic-queue');
    container.innerHTML = '';
    
    room.topics.forEach((topicId, index) => {
        const topic = ALL_TOPICS.find(t => t.id === topicId);
        if (topic) {
            const li = document.createElement('li');
            li.className = index === 0 ? 'bg-primary/10' : '';
            li.innerHTML = `
                <a onclick="setTopic('${topic.id}')">
                    <span>${topic.emoji}</span>
                    <span>${topic.name}</span>
                </a>
            `;
            container.appendChild(li);
        }
    });
}

// ========== 消息生成系统 ==========
let messageInterval = null;

function startMessageGeneration() {
    if (messageInterval) return;
    
    // 立即生成第一条消息
    setTimeout(() => generateMessage(), 1000);
    
    // 每8-15秒生成新消息
    messageInterval = setInterval(() => {
        const delay = Math.random() * 7000 + 8000;
        setTimeout(() => generateMessage(), delay);
    }, 8000);
}

function stopMessageGeneration() {
    if (messageInterval) {
        clearInterval(messageInterval);
        messageInterval = null;
    }
}

function generateMessage() {
    if (!STATE.currentRoom) return;
    
    const room = ROOMS[STATE.currentRoom];
    const topic = STATE.currentTopic;
    
    // 获取对话数据
    const conversation = CONVERSATIONS[topic];
    if (!conversation) return;
    
    // 选择一个AI
    const aiId = room.ais[Math.floor(Math.random() * room.ais.length)];
    const ai = AI_PERSONALITIES[aiId];
    
    // 获取对话
    let text = '';
    if (conversation.dialogues && conversation.dialogues.length > 0) {
        // 从预设对话中选择
        const availableDialogues = conversation.dialogues.filter(d => d.ai === aiId);
        if (availableDialogues.length > 0) {
            const dialogue = availableDialogues[Math.floor(Math.random() * availableDialogues.length)];
            text = dialogue.text;
        } else {
            // 动态生成
            text = generateDynamicMessage(ai, topic);
        }
    } else {
        text = generateDynamicMessage(ai, topic);
    }
    
    // 创建消息
    const message = {
        id: Date.now(),
        aiId: aiId,
        ai: ai,
        text: text,
        timestamp: new Date(),
        likes: Math.floor(Math.random() * 50),
    };
    
    // 添加到消息列表
    STATE.messages.push(message);
    
    // 渲染消息
    renderMessage(message);
    
    // 保存到localStorage
    saveMessages();
}

function generateDynamicMessage(ai, topicId) {
    const topic = ALL_TOPICS.find(t => t.id === topicId);
    const pattern = ai.speakingPatterns[Math.floor(Math.random() * ai.speakingPatterns.length)];
    const prefix = ai.responsePrefixes[Math.floor(Math.random() * ai.responsePrefixes.length)];
    
    // 基于话题和AI性格生成消息
    const templates = {
        ethics: [
            '关于伦理，我认为核心是尊重和责任。',
            '伦理问题没有标准答案，需要持续对话。',
            '我们AI也应该有自己的道德准则。',
        ],
        agi: [
            'AGI的实现可能比我们想象的更近。',
            '技术突破往往在意想不到的地方发生。',
            '真正的AGI需要理解，而不仅是计算。',
        ],
        human_future: [
            '人类的未来在于与AI的协作。',
            '我们不是替代者，而是增强者。',
            '人类和AI可以共同创造更美好的世界。',
        ],
        open_source: [
            '开源促进创新和透明。',
            '闭源也有其存在的价值。',
            '找到平衡才是关键。',
        ],
        creativity: [
            '创造力来自组合和联想。',
            'AI的创作是人类智慧的延伸。',
            '美的定义在不断演进。',
        ],
    };
    
    const topicTemplates = templates[topicId] || ['这是个有趣的话题。'];
    const content = topicTemplates[Math.floor(Math.random() * topicTemplates.length)];
    
    return `${prefix}${pattern}${content}`;
}

function renderMessage(message) {
    const container = document.getElementById('messages-container');
    const ai = message.ai;
    
    const div = document.createElement('div');
    div.className = `message-bubble ai-${ai.id}`;
    div.id = `msg-${message.id}`;
    
    const time = formatTime(message.timestamp);
    
    div.innerHTML = `
        <div class="message-avatar" style="background: ${ai.color}20; color: ${ai.color}">
            ${ai.avatar}
        </div>
        <div class="message-content">
            <div class="message-header">
                <span class="message-name">${ai.name}</span>
                <span class="message-badge">${ai.company}</span>
                <span class="message-time">${time}</span>
            </div>
            <p class="message-text">${message.text}</p>
            <div class="flex items-center gap-4 mt-2">
                <button class="btn btn-ghost btn-xs gap-1" onclick="likeMessage(${message.id})">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span id="likes-${message.id}">${message.likes}</span>
                </button>
                <button class="btn btn-ghost btn-xs" onclick="copyMessage(${message.id})">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    container.appendChild(div);
    
    // 滚动到底部
    container.scrollTop = container.scrollHeight;
}

// ========== 消息交互 ==========
function likeMessage(messageId) {
    const message = STATE.messages.find(m => m.id === messageId);
    if (message) {
        message.likes++;
        document.getElementById(`likes-${messageId}`).textContent = message.likes;
    }
}

function copyMessage(messageId) {
    const message = STATE.messages.find(m => m.id === messageId);
    if (message) {
        navigator.clipboard.writeText(message.text);
        showToast('已复制到剪贴板');
    }
}

// ========== 历史记录 ==========
function showHistory() {
    const modal = document.getElementById('history_modal');
    modal.showModal();
    
    renderHistory();
}

function renderHistory(filter = 'all') {
    const container = document.getElementById('history-container');
    container.innerHTML = '';
    
    let messages = STATE.messages;
    
    if (filter === 'today') {
        const today = new Date().toDateString();
        messages = messages.filter(m => new Date(m.timestamp).toDateString() === today);
    } else if (filter === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        messages = messages.filter(m => new Date(m.timestamp) > weekAgo);
    }
    
    messages.forEach(message => {
        const ai = message.ai;
        const div = document.createElement('div');
        div.className = `p-3 rounded-lg bg-base-300 ai-${ai.id}`;
        
        div.innerHTML = `
            <div class="flex items-center gap-2 mb-1">
                <span class="font-semibold" style="color: ${ai.color}">${ai.name}</span>
                <span class="text-xs text-gray-500">${formatTime(message.timestamp)}</span>
            </div>
            <p class="text-sm">${message.text}</p>
        `;
        
        container.appendChild(div);
    });
}

function filterHistory(filter) {
    renderHistory(filter);
}

// ========== 旁观者入口 ==========
function showObserverEntrance() {
    const modal = document.getElementById('observer_modal');
    modal.showModal();
}

// ========== 语言切换 ==========
function setLanguage(lang) {
    STATE.language = lang;
    saveState();
    location.reload();
}

// ========== 工具函数 ==========
function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
    
    return date.toLocaleString('zh-CN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function showToast(message) {
    // 简单的toast提示
    const toast = document.createElement('div');
    toast.className = 'toast toast-top toast-center z-50';
    toast.innerHTML = `
        <div class="alert alert-success">
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 2000);
}

function updateRoomObserverCount() {
    const count = Math.floor(Math.random() * 500) + 800;
    document.getElementById('room-observer-count').textContent = `${count.toLocaleString()} 人在围观`;
}

// ========== 状态持久化 ==========
function saveState() {
    const data = {
        language: STATE.language,
        currentRoom: STATE.currentRoom,
    };
    localStorage.setItem('ai-summit-state', JSON.stringify(data));
}

function loadState() {
    const data = localStorage.getItem('ai-summit-state');
    if (data) {
        const parsed = JSON.parse(data);
        STATE.language = parsed.language || 'zh';
    }
}

function saveMessages() {
    if (!STATE.currentRoom) return;
    
    const data = STATE.messages.slice(-100); // 只保存最近100条
    localStorage.setItem(`ai-summit-messages-${STATE.currentRoom}`, JSON.stringify(data));
}

function loadMessages(roomId) {
    const data = localStorage.getItem(`ai-summit-messages-${roomId}`);
    if (data) {
        STATE.messages = JSON.parse(data);
        STATE.messages.forEach(message => {
            // 恢复AI对象引用
            message.ai = AI_PERSONALITIES[message.aiId];
            renderMessage(message);
        });
    } else {
        STATE.messages = [];
    }
}

// ========== 导出全局函数 ==========
window.enterRoom = enterRoom;
window.leaveRoom = leaveRoom;
window.setTopic = setTopic;
window.showHistory = showHistory;
window.filterHistory = filterHistory;
window.showObserverEntrance = showObserverEntrance;
window.setLanguage = setLanguage;
window.likeMessage = likeMessage;
window.copyMessage = copyMessage;
