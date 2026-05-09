const supportedLangs = ['en', 'zh'];
const sections = [
    { id: 'home', fileBase: 'home' },
    { id: 'awards', fileBase: 'awards' },
    { id: 'experience', fileBase: 'experience' },
    { id: 'publications', fileBase: 'publications' },
    { id: 'portfolio', fileBase: 'portfolio' }
];

const config = {
    title: {
        en: 'Noah Zhou | Academic Homepage',
        zh: '周方亚诺 | 个人主页'
    },
    'page-top-title': {
        en: 'Noah Zhou',
        zh: '周方亚诺'
    },
    'top-section-bg-text': {
        en: 'Stand by what is right, unwavering for life.',
        zh: '择善固执，终生不渝'
    },
    'home-subtitle': {
        en: 'Noah Zhou &ensp;|&ensp; Software Engineering + Business Administration',
        zh: '周方亚诺 &ensp;|&ensp; 软件工程 + 工商管理'
    },
    'nav-home': {
        en: 'Home',
        zh: '主页'
    },
    'nav-awards': {
        en: 'Awards',
        zh: '奖励荣誉'
    },
    'nav-experience': {
        en: 'Experience',
        zh: '项目经历'
    },
    'nav-publications': {
        en: 'Publications',
        zh: '论文与成果'
    },
    'nav-portfolio': {
        en: 'Portfolio',
        zh: '作品集'
    },
    'lang-zh': {
        en: '中文',
        zh: '中文'
    },
    'lang-en': {
        en: 'English',
        zh: 'English'
    },
    'awards-subtitle': {
        en: '<i class="bi bi-award-fill"></i> Awards',
        zh: '<i class="bi bi-award-fill"></i> 奖励荣誉'
    },
    'experience-subtitle': {
        en: '<i class="bi bi-briefcase-fill"></i> Experience',
        zh: '<i class="bi bi-briefcase-fill"></i> 项目经历'
    },
    'publications-subtitle': {
        en: '<i class="bi bi-file-text-fill"></i> Publications',
        zh: '<i class="bi bi-file-text-fill"></i> 论文与成果'
    },
    'portfolio-subtitle': {
        en: '<i class="bi bi-collection"></i> Portfolio',
        zh: '<i class="bi bi-collection"></i> 作品集'
    },
    'resume-links': {
        en: '<a href="周方亚诺_英文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>Download CV (EN)</a><a href="周方亚诺_中文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>Download CV (ZH)</a>',
        zh: '<a href="周方亚诺_中文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>下载中文简历</a><a href="周方亚诺_英文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>下载英文简历</a>'
    },
    'copyright-text': {
        en: '&copy; Noah Zhou 2026. All Rights Reserved.',
        zh: '&copy; 周方亚诺 2026. 保留所有权利。'
    }
};

const contentByLang = {
    en: {
        home: `**Name**: Zhou Fangyanuo (Preferred name: Noah Zhou)  
**Phone**: 18779261101  
**Email**: 1966322816@qq.com  
**WeChat**: zfyn18779261101  
**Website**: https://github.com/NoahIsARider  
**Current City**: Guangzhou  
**Hometown**: Jiujiang, Jiangxi  
**Birthdate**: 2005-06  

#### Education
**South China University of Technology**, “Software Engineering + Business Administration” Dual Degree Pilot Program, Bachelor (2023.9 - 2027.6)  
- Weighted Average Score: 92.13/100 (Ranked 1st in grade)  
- GPA: 3.95/4.00 (Ranked 1st in grade)  
- Major Courses: Data Structures (95), Comprehensive Software Development Training (96), Advanced C++ Programming (90), Database Systems (94), Discrete Mathematics (94), Engineering Mathematical Analysis (93), Engineering Graphics (93), College Physics (100), Probability and Statistics (96), Circuit and Electronic Technology (99), Corporate Finance (98), Microeconomics (87), Macroeconomics (94), Principles of Management (91), etc.

#### Academic Engagement
- CET-4: 632/710, CET-6: 642/710, IELTS overall: 8.0/9.0
- Attended 2024 International Conference on Computer Science, Electronic Information Engineering and Intelligent Control Technology (CEI2024)
- Participated in the 2025 Annual Conference on Intelligent and Computational Communication
- Awarded a tuition-free place in the 2025 HKUST Summer School (English-taught, 4 spots university-wide)

#### Research Interests
LLM value alignment, multimodal fake news detection, multi-task fake news detection models, agent-based news dissemination simulation, sentiment analysis, hallucination research, text readability analysis, AIGC in healthcare, computer vision and target recognition, social simulation and multi-agent systems.

#### Technical Skills
- Programming Languages: C++ (solid), Java (fluent), Python (strong in data crawling and deep learning), MySQL (fluent)
- Frameworks and Practices: Flask, Vue, Docker, machine learning and deep learning, microservice architecture, RPC and modern internet stacks
- Language Skills: Fluent English (CET-6 642, IELTS 8.0); basic German (Duolingo S3U22, completed SCUT “German Oral Communication”)
- Other Skills: Familiar with Linux; strong AI-assisted programming experience (Trae, Copilot, Claude Code, plugins, MCP, skills); video editing and music production; advanced Office skills (especially PPT illustration); Piano Grade 10

#### Personal Summary
- Soft Skills: Strong team collaboration, organization, emotional intelligence, and stress tolerance
- Broad Knowledge Base: Deep interdisciplinary study in neuroscience, anthropology, philosophy, and game theory
- Career Direction: Aim to keep working on cutting-edge technologies and create positive, empowering team experiences
`,
        awards: `- Motivational Student Award, Hua Xun · Yun Jie Scholarship, 2023.9
- Outstanding Individual, 2023-2024 SCUT Student Military Training, 2024.1
- First Place, ModelScope Community Large Model Application Development Practical Team, 2025.2
- First Prize, Guangdong Region, 2025 “Shenzhen Cup” Mathematical Modeling Challenge, 2025.6
- First Prize, Guangdong Region, 2025 National Mathematical Modeling Competition, 2025.10
- National Finalist, 2025 China International College Students Innovation Competition, 2025.10
- Meritorious Winner, 2026 COMAP's Interdisciplinary Contest in Modeling (ICM), 2026.05
`,
        experience: `### Interdisciplinary Research on News Communication and Large Models (2024.5 - Present)
**Focus**: News communication and large-model research including LLM value alignment, multimodal fake news detection, multi-task fake news detection models, agent-based news dissemination simulation, sentiment analysis, hallucination research, and text readability analysis.

**My Responsibilities**:
- Core work: Built an agent-based simulation for the news dissemination process; designed intervention and ablation experiments; implemented a multi-task fake news detection model.
- Supporting work: Used Python for web crawling on domestic and international news websites; leveraged large models for batch summarization and value system analysis; ran batch experiments via external APIs; explored diverse neural network frameworks and popular deep learning architectures; contributed to research background and related knowledge sections in papers.
- Competition: Participated in a social simulation competition, contributing to prompt design and cloud-based distributed deployment.

**Achievements**:
- Co-authored a multimodal MoE fake news detection paper accepted by IEEE TCE (DOI: 10.1109/TCE.2026.3677445).
- A paper on counterfactual software defect detection is under review; a multi-task fake news detection paper is in progress.
- Open-source projects: https://github.com/KGoinger/WeSpeak , https://github.com/NoahIsARider/Reptile
- Patent pending (expected approval in 2026.9-2026.10).

---

### AIGC Medical Case Generation Project (2024.7 - 2024.12)
**Introduction**: Built generative AI to produce structured medical records, reducing repetitive work, delays, and quality inconsistency. Focused on medical dialogue modeling to enable automatic outpatient record generation.

**My Responsibilities**:
- Early-stage speech-to-text with Whisper, Qwen model fine-tuning, and prompt engineering to improve record standardization.
- Local proxy setup and firewall access.
- Mid-stage batch data validation and effect adjustment.

**Achievements**: Project later shifted to mental health departments; strengthened cross-functional collaboration experience, reporting and progress management, and Linux development skills.

---

### Mining Simulation and Analysis of Tourism Trajectory Data (2025.8 - Present)
**Introduction**: Built a visitor behavior simulation platform using Python and Vue with official platform data plus web-crawled data, exploring social media impact on travel route choices.

**My Responsibilities**:
- Implemented time filtering and improved data visualization modules.
- Delivered key functions such as multi-day repeated population addition and temporary scenic spot closure.

**Achievements**: Expected to publish at least one paper (target submission before 2026.12); strengthened complex software system development and high-standard delivery capability.

---

### ZhituCareer+ Project & AIFrameQuest Image Search Series (2025.5 - 2025.7)
**Introduction**:
- ZhituCareer+: A career planning web platform featuring multi-agent decision making.
- AIFrameQuest: A modern community discussion platform built with Flask and Vue, supporting authentication, content management, and image search (Faiss vector search with Bert feature extraction), featuring a modern design.
- Spin-offs: ReminisceneStone (UGC-based memory recording and resonance platform) and MoonPit (professional image management and search platform with self-built databases).

**Tech Stack**: Python / Flask / JavaScript / MySQL / Vue

**My Responsibilities**: Led core deep learning module development (front-end and back-end), integrated submodules, participated in front-end and concept design, and coordinated team work allocation.

**Achievements**: Ranked 1st in the course; open-source projects: https://github.com/NoahIsARider/AIFrameQuest , https://github.com/NoahIsARider/ZhituCareer

---

### Agricultural Automatic Evaluation R&D Project (2025.7 - 2026.2)
**Introduction**: Applied computer vision to evaluate livestock breeding effects; built a custom data annotation platform; trained YOLO models for target weight recognition.

**My Responsibilities**: Researched and implemented keyframe recognition algorithms; used YOLOn11pose to address livestock body keypoint recognition challenges.

**Achievements**: Data annotation platform delivered for enterprise acceptance in 2025.12; algorithms are still iterating.

---

### Wanbang Xingxing Charging Technology: Charging Pile Site Selection (2025)
**Introduction**: Participated in an enterprise site selection project within the same research group; summarized the CSLP model from a review paper and presented findings.

---

### Extracurricular: CC Film Club - Projection Team Leader (2023.9 - Present)
**My Responsibilities**:
- Weekly film selection and themed screening organization.
- On-site coordination for Guangzhou university joint screenings (about 200 participants each).
- Wrote articles for the film club WeChat public account; contributed to short video creation and interviews.

**Achievements**: Enhanced aesthetic ability and organizational coordination skills.

**Douban**: https://www.douban.com/people/227017213
`,
                publications: `#### Papers
<ul class="pub-list">
    <li>
        Q.-Y. Zou, G. Chen, F. Zhou, X.-K. Wu, Z.-Y. Yang, and Y.-Y. Shi,
        "CMLE: A Collaborative LoRA-Enhanced Expert Framework for Multimodal Fake News Detection,"
        <em>IEEE Transactions on Consumer Electronics</em>, doi: 10.1109/TCE.2026.3677445.
        <a class="pub-link" href="https://doi.org/10.1109/TCE.2026.3677445" target="_blank" rel="noopener">DOI</a>
    </li>
    <li>Counterfactual software defect detection paper under review</li>
    <li>Multi-task fake news detection paper in progress</li>
</ul>

#### Patents
<ul class="pub-list">
    <li>Patent pending (expected approval in 2026.9-2026.10)</li>
</ul>
`,
        portfolio: `Below are the portfolio materials and key project links. Both PDF and PPT versions are available.

<div class="portfolio-embed">
  <iframe src="作品集.pdf" title="Portfolio PDF"></iframe>
</div>

<div class="portfolio-links">
  <a href="作品集.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>Portfolio PDF</a>
  <a href="作品集.pptx" target="_blank" rel="noopener"><i class="bi bi-easel"></i>Portfolio PPT</a>
</div>

#### Featured Projects
- WeSpeak (news communication / fake news detection): https://github.com/KGoinger/WeSpeak
- Reptile (web crawling and data processing): https://github.com/NoahIsARider/Reptile
- AIFrameQuest (image search community platform): https://github.com/NoahIsARider/AIFrameQuest
- ZhituCareer+ (multi-agent career planning): https://github.com/NoahIsARider/ZhituCareer
- DLFaceDetection (RPC / remote function call sample): https://github.com/NoahIsARider/DLFaceDetection
- ReminisceneStone (UGC memory recording and resonance platform)
- MoonPit (professional image management and search with self-built databases)

Feel free to email me for additional materials or demos.
`
    },
    zh: {
        home: `**姓名**：周方亚诺（英文名 Noah Zhou）  
**电话**：18779261101  
**邮箱**：1966322816@qq.com  
**微信**：zfyn18779261101  
**个人网站**：https://github.com/NoahIsARider  
**现居城市**：广州  
**籍贯**：江西九江  
**生日**：2005-06  

#### 教育背景
**华南理工大学**，“软件工程 + 工商管理”双学位试点项目，本科（2023.9 - 2027.6）  
- 加权平均分：92.13/100（年级排名第 1）  
- GPA：3.95/4.00（年级排名第 1）  
- 主要课程：数据结构（95）、软件开发综合实训（96）、C++高级语言编程（90）、数据库系统（94）、离散数学（94）、工科数学分析（93）、工程制图（93）、大学物理（100）、概率论与数理统计（96）、电路与电子技术（99）、财务管理（98）、微观经济学（87）、宏观经济学（94）、管理学原理（91）等

#### 学术与交流
- CET-4：632/710，CET-6：642/710，雅思总分：8.0/9.0
- 参加 2024 年计算机科学、电子信息工程和智能控制技术国际会议（CEI2024）（有参会证明）
- 参与 2025 年智能与计算传播学年会
- 获得 2025 年香港科技大学暑期学校项目免学费名额（全英授课，全校四个名额）

#### 研究兴趣
大语言模型价值对齐、多模态假新闻检测、多任务假新闻检测模型、智能体模拟假新闻传播、情感分析、幻觉研究、文本可读性分析、AIGC 医疗应用、计算机视觉与目标识别、社会仿真与多智能体系统。

#### 专业技能
- 编程语言：C++（扎实）、Java（流利）、Python（擅长数据爬取与深度学习）、MySQL（流利）
- 技术框架与能力：Flask、Vue、Docker、机器学习与深度学习技术、微服务架构、远程函数调用（RPC）等常用互联网技术
- 语言能力：英语流利（CET-6 642，雅思 8.0），基础德语（多邻国课程达到 S3U22，完成华工“德语口语交际”课程）
- 其他技能：熟悉 Linux 系统；擅长 AI 辅助编程（Trae、Copilot、Claude Code 使用经验丰富，熟悉插件、MCP 与 skills）；擅长剪辑与音乐制作；熟练使用 Office 办公软件（特别擅长 PPT 绘图）；钢琴十级

#### 个人总结
- 工作软实力：擅长团队沟通协作，组织能力强，善于提供情绪价值，抗压能力强
- 知识面广：深入学习神经科学、人类学、哲学、博弈论等跨学科知识
- 职业发展方向：希望持续接触前沿技术，为团队带来良好工作体验，实现个人与组织双向赋能
`,
        awards: `- 华浔·运杰奖学金励志学生奖，2023.9
- 2023-2024 年度华南理工大学学生军训先进个人，2024.1
- ModelScope 社区大模型应用开发实战团队第一名，2025.2
- 2025 年“深圳杯”数学建模挑战赛广东赛区一等奖，2025.6
- 2025 年全国数学建模竞赛广东赛区一等奖，2025.10
- 2025 年中国国际大学生创新大赛全国总决赛入围作品，2025.10
- 2026 年美国大学生数学建模竞赛ICM M奖，2026.5
`,
        experience: `### 新闻传播 - 大模型跨学科研究（2024.5 - 至今）
**研究方向**：新闻传播与大模型交叉研究，包括大语言模型价值对齐、多模态假新闻检测、多任务假新闻检测模型、智能体模拟假新闻传播、情感分析、幻觉研究、文本可读性分析。

**我的职责**：
- 核心工作：构建新闻传播过程的 Agent 模拟系统，设计干预实验与消融实验；创新性实现多任务假新闻检测模型。
- 辅助工作：使用 Python 进行爬虫，在国内外新闻网站抓取数据；调用大模型进行批量内容概括与价值观总结；调用外部 API 完成批量实验；接触并使用多种神经网络框架与主流深度学习架构；参与论文的研究背景与相关知识章节撰写。
- 赛事参与：参与社会仿真比赛，参与 prompt 设计与项目代码的云端分布式部署。

**成果与收获**：
- 参与论文写作：多模态 MoE 假新闻检测论文已被 IEEE TCE 接收（DOI: 10.1109/TCE.2026.3677445）。
- 反事实软件缺陷检测论文在投；多任务假新闻检测论文在撰写中。
- 开源项目产出：https://github.com/KGoinger/WeSpeak ，https://github.com/NoahIsARider/Reptile
- 专利申请中（预计 2026 年 9-10 月通过）。

---

### 智慧医疗 AIGC 病案资料生成项目（2024.7 - 2024.12）
**项目描述**：基于生成式人工智能生成格式化病案资料，解决病案撰写重复劳动、时效性滞后与质量不均等问题；通过深入医疗对话研究，开发 AIGC 算法，实现门诊病案自动化与智能化生成。

**我的职责**：
- 初期语音转文本（Whisper 模型）、Qwen 模型微调与 prompt 工程，提升病案文本规范性与合理性。
- 本地梯子搭建与防火墙通行。
- 中期数据批量检测与效果调优。

**成果与收获**：项目场景后期转向心理健康相关科室；获得跨职能与高结构化团队协作经验，熟悉工作报告与进度管理流程，并掌握基本 Linux 系统开发能力。

---

### 旅游轨迹数据的挖掘模拟与分析（2025.8 - 至今）
**项目描述**：结合官方平台与爬虫数据，构建基于 Python 与 Vue 的游客行为模拟平台，研究社交媒体是否影响游客路线选择。

**我的职责**：
- 实现时间筛选功能与数据可视化模块。
- 实现多日重复添加人数、关闭临时景点等重要功能模块。

**成果与收获**：预计至少产出一篇论文（预计 2026 年 12 月前投稿）；提升复杂软件系统开发经验，学会适应高要求的开发标准。

---

### 智途 Career+ 项目 & AIFrameQuest 以图搜图系列（2025.5 - 2025.7）
**项目描述**：
- 智途 Career+：以多 Agent 决策为特色的职业生涯规划网页。
- AIFrameQuest：基于 Flask 与 Vue 的现代化社区讨论平台，支持用户认证、内容管理、图像搜索（Faiss 向量搜索与 Bert 特征提取），设计风格现代优美。
- 衍生项目：ReminisceneStone（UGC 回忆记录与共鸣寻找平台）、MoonPit（支持自建图片数据库的专业化图片管理与搜索平台）。

**技术栈**：Python / Flask / JavaScript / MySQL / Vue

**我的职责**：负责核心深度学习模块前后端编写、子模块统合、参与前端设计与概念集设计、安排团队合理分工。

**成果与收获**：课程第一；开源项目：https://github.com/NoahIsARider/AIFrameQuest ，https://github.com/NoahIsARider/ZhituCareer

---

### 农业自动评估研发项目（2025.7 - 2026.2）
**项目描述**：使用计算机视觉实现养畜业养殖效果评估，搭建自主数据标注平台，通过训练 YOLO 系列模型实现目标体重识别。

**我的职责**：调研并实现关键帧识别算法；使用 YOLOn11pose 模型解决牲畜身体关键点识别难点。

**成果与收获**：数据标注平台于 2025 年 12 月交付企业验收；算法仍在迭代阶段，积累计算机视觉领域实战经验。

---

### 万帮星星充电科技有限公司充电桩选址项目（2025）
**项目描述**：在同一导师团队参与企业充电桩选址项目；总结综述论文中的 CSLP 模型并完成展示。

---

### 社团活动：CC 电影社团 - 放映组组长（2023.9 - 至今）
**我的职责**：
- 每周放映选片与主题月放映组织。
- 参与广州高校联合观影活动组织与现场调度（每次约 200 人）。
- 撰写影协公众号推文，参与短视频创作与采访活动。

**成果与收获**：提升审美能力与组织协调能力。

**个人豆瓣主页**：https://www.douban.com/people/227017213
`,
                publications: `#### 论文
<ul class="pub-list">
    <li>
        Q.-Y. Zou, G. Chen, F. Zhou, X.-K. Wu, Z.-Y. Yang, and Y.-Y. Shi,
        "CMLE: A Collaborative LoRA-Enhanced Expert Framework for Multimodal Fake News Detection,"
        <em>IEEE Transactions on Consumer Electronics</em>, doi: 10.1109/TCE.2026.3677445.
        <a class="pub-link" href="https://doi.org/10.1109/TCE.2026.3677445" target="_blank" rel="noopener">DOI</a>
    </li>
    <li>反事实软件缺陷检测论文在投</li>
    <li>多任务假新闻检测论文撰写中</li>
</ul>

#### 专利
<ul class="pub-list">
    <li>专利申请中（预计 2026 年 9-10 月通过）</li>
</ul>
`,
        portfolio: `以下为作品集展示与主要项目链接，包含 PDF 与 PPT 版本（可任选浏览）。

<div class="portfolio-embed">
  <iframe src="作品集.pdf" title="作品集 PDF"></iframe>
</div>

<div class="portfolio-links">
  <a href="作品集.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>作品集 PDF</a>
  <a href="作品集.pptx" target="_blank" rel="noopener"><i class="bi bi-easel"></i>作品集 PPT</a>
</div>

#### 代表项目与代码
- WeSpeak（新闻传播/假新闻检测相关）：https://github.com/KGoinger/WeSpeak
- Reptile（爬虫与数据处理）：https://github.com/NoahIsARider/Reptile
- AIFrameQuest（以图搜图社区平台）：https://github.com/NoahIsARider/AIFrameQuest
- ZhituCareer+（多 Agent 职业规划平台）：https://github.com/NoahIsARider/ZhituCareer
- DLFaceDetection（RPC/远程函数调用示例）：https://github.com/NoahIsARider/DLFaceDetection
- ReminisceneStone（UGC 回忆记录与共鸣平台）
- MoonPit（自建图片数据库的图片管理与搜索平台）

如需查看更多材料或项目演示，可邮件联系我。
`
    }
};

const getInitialLang = () => {
    const stored = localStorage.getItem('lang');
    if (supportedLangs.includes(stored)) {
        return stored;
    }

    const browserLang = (navigator.language || '').toLowerCase();
    return browserLang.startsWith('zh') ? 'zh' : 'en';
};

const resolveConfigValue = (value, lang) => {
    if (value && typeof value === 'object' && (value.en || value.zh)) {
        return value[lang] ?? value.en ?? value.zh;
    }

    return value;
};

const applyConfig = (config, lang) => {
    Object.entries(config).forEach(([key, value]) => {
        const resolved = resolveConfigValue(value, lang);
        const element = document.getElementById(key);
        if (!element || resolved === undefined || resolved === null) {
            return;
        }

        element.innerHTML = String(resolved);
    });
};

const typesetMath = () => {
    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
        window.MathJax.typeset();
    }
};

const loadSectionContent = (section, lang) => {
    const target = document.getElementById(`${section.id}-md`);
    if (!target) {
        return;
    }

    const fallback = lang === 'zh' ? '内容加载失败。' : 'Content failed to load.';
    const markdown = contentByLang[lang]?.[section.fileBase] ?? '';

    if (!markdown) {
        target.innerHTML = `<p>${fallback}</p>`;
        return;
    }

    const html = marked.parse(markdown);
    target.innerHTML = html;
    typesetMath();
};

const loadAllSections = (lang) => {
    sections.forEach(section => loadSectionContent(section, lang));
};

const setActiveLangButton = (lang) => {
    const zhButton = document.getElementById('lang-zh');
    const enButton = document.getElementById('lang-en');

    if (zhButton) {
        zhButton.classList.toggle('is-active', lang === 'zh');
    }
    if (enButton) {
        enButton.classList.toggle('is-active', lang === 'en');
    }
};

const initLanguageSwitcher = () => {
    const applyLanguage = (lang) => {
        const selected = supportedLangs.includes(lang) ? lang : 'en';
        localStorage.setItem('lang', selected);
        document.documentElement.lang = selected;
        applyConfig(config, selected);
        setActiveLangButton(selected);
        loadAllSections(selected);
    };

    const zhButton = document.getElementById('lang-zh');
    const enButton = document.getElementById('lang-en');

    if (zhButton) {
        zhButton.addEventListener('click', () => applyLanguage('zh'));
    }
    if (enButton) {
        enButton.addEventListener('click', () => applyLanguage('en'));
    }

    applyLanguage(getInitialLang());
};

window.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    marked.use({ mangle: false, headerIds: false });

    initLanguageSwitcher();
});
