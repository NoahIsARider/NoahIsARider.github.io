const supportedLangs = ['en', 'zh', 'yue'];
const supportedThemes = ['light', 'dark'];
const themeButtonText = {
    en: {
        light: '<i class="bi bi-moon-stars-fill"></i> Dark',
        dark: '<i class="bi bi-sun-fill"></i> Light'
    },
    zh: {
        light: '<i class="bi bi-moon-stars-fill"></i> 深色',
        dark: '<i class="bi bi-sun-fill"></i> 浅色'
    },
    yue: {
        light: '<i class="bi bi-moon-stars-fill"></i> 深色',
        dark: '<i class="bi bi-sun-fill"></i> 淺色'
    }
};
const sections = [
    { id: 'home', fileBase: 'home' },
    { id: 'awards', fileBase: 'awards' },
    { id: 'experience', fileBase: 'experience' },
    { id: 'publications', fileBase: 'publications' },
    { id: 'portfolio', fileBase: 'portfolio' },
    { id: 'extracurricular', fileBase: 'extracurricular' }
];

const config = {
    title: {
        en: 'Noah Zhou | Academic Homepage',
        zh: '周方亚诺 | 个人主页',
        yue: '周方亞諾 | 個人主頁'
    },
    'page-top-title': {
        en: 'Noah Zhou',
        zh: '周方亚诺',
        yue: '周方亞諾'
    },
    'top-section-bg-text': {
        en: 'Stand by what is right, unwavering for life.',
        zh: '择善固执，终生不渝',
        yue: '擇善固執，終生不渝'
    },
    'home-subtitle': {
        en: 'Noah Zhou &ensp;|&ensp; Software Engineering + Business Administration',
        zh: '周方亚诺 &ensp;|&ensp; 软件工程 + 工商管理',
        yue: '周方亞諾 &ensp;|&ensp; 軟件工程 + 工商管理'
    },
    'nav-home': {
        en: 'Home',
        zh: '主页',
        yue: '主頁'
    },
    'nav-awards': {
        en: 'Awards',
        zh: '奖励荣誉',
        yue: '獎勵榮譽'
    },
    'nav-experience': {
        en: 'Experience',
        zh: '项目经历',
        yue: '項目經歷'
    },
    'nav-extracurricular': {
        en: 'Extracurricular',
        zh: '课外活动',
        yue: '課外活動'
    },
    'nav-publications': {
        en: 'Publications',
        zh: '论文与成果',
        yue: '論文與成果'
    },
    'nav-portfolio': {
        en: 'Portfolio',
        zh: '作品集',
        yue: '作品集'
    },
    'lang-zh': {
        en: '简中',
        zh: '简中',
        yue: '简中'
    },
    'lang-yue': {
        en: '繁中',
        zh: '繁中',
        yue: '繁中'
    },
    'lang-en': {
        en: 'English',
        zh: 'English',
        yue: 'English'
    },
    'awards-subtitle': {
        en: '<i class="bi bi-award-fill"></i> Awards',
        zh: '<i class="bi bi-award-fill"></i> 奖励荣誉',
        yue: '<i class="bi bi-award-fill"></i> 獎勵榮譽'
    },
    'experience-subtitle': {
        en: '<i class="bi bi-briefcase-fill"></i> Experience',
        zh: '<i class="bi bi-briefcase-fill"></i> 项目经历',
        yue: '<i class="bi bi-briefcase-fill"></i> 項目經歷'
    },
    'extracurricular-subtitle': {
        en: '<i class="bi bi-people-fill"></i> Extracurricular',
        zh: '<i class="bi bi-people-fill"></i> 课外活动',
        yue: '<i class="bi bi-people-fill"></i> 課外活動'
    },
    'publications-subtitle': {
        en: '<i class="bi bi-file-text-fill"></i> Publications',
        zh: '<i class="bi bi-file-text-fill"></i> 论文与成果',
        yue: '<i class="bi bi-file-text-fill"></i> 論文與成果'
    },
    'portfolio-subtitle': {
        en: '<i class="bi bi-collection"></i> Portfolio',
        zh: '<i class="bi bi-collection"></i> 作品集',
        yue: '<i class="bi bi-collection"></i> 作品集'
    },
    'resume-links': {
        en: '<a href="周方亚诺_英文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>Download CV (EN)</a><a href="周方亚诺_中文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>Download CV (ZH)</a>',
        zh: '<a href="周方亚诺_中文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>下载中文简历</a><a href="周方亚诺_英文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>下载英文简历</a>',
        yue: '<a href="周方亚诺_中文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>下載中文簡歷</a><a href="周方亚诺_英文简历.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>下載英文簡歷</a>'
    },
    'copyright-text': {
        en: '&copy; Noah Zhou 2026. All Rights Reserved.',
        zh: '&copy; 周方亚诺 2026. 保留所有权利。',
        yue: '&copy; 周方亞諾 2026. 保留所有權利。'
    }
};

const contentByLang = {
    en: {
        home: `**Name**: Zhou Fangyanuo (Preferred name: Noah Zhou)  
**Phone**: 18779261101  
**Email**: 1966322816@qq.com  
**WeChat**: zfyn18779261101  
**Website**: https://github.com/NoahIsARider  
**Current City**: Guangdong, Guangzhou  
**Hometown**: Jiujiang, Jiangxi  
**Birthdate**: 2005-06  

#### Education
**South China University of Technology**, “Software Engineering + Business Administration” Dual Degree Pilot Program, Bachelor (2023.9 - 2027.6)  
- <span class="highlight-blue">Weighted Average Score: 92.13/100 (Ranked 1st in grade)</span>  
- <span class="highlight-blue">GPA: 3.95/4.00 (Ranked 1st in grade)</span>  
- Major Courses: Data Structures (95), Comprehensive Software Development Training (96), Advanced C++ Programming (90), Database Systems (94), Discrete Mathematics (94), Engineering Mathematical Analysis (93), Engineering Graphics (93), College Physics (100), Probability and Statistics (96), Circuit and Electronic Technology (99), Corporate Finance (98), Microeconomics (87), Macroeconomics (94), Principles of Management (91), etc.

#### Academic Engagement
- CET-4: 632/710, CET-6: 642/710, <span class="highlight-blue">IELTS overall: 8.0/9.0</span>
- Attended 2024 International Conference on Computer Science, Electronic Information Engineering and Intelligent Control Technology (CEI2024)
- Participated in the 2025 Annual Conference on Intelligent and Computational Communication
- Awarded a tuition-free place in the 2025 HKUST Summer School (English-taught, 4 spots university-wide)

#### Research Interests
Fake news detection, social computing, AI for Business, health and medical AI, recommender systems, multi-agent systems, LLM value alignment, multimodal learning, sentiment analysis, hallucination research, text readability analysis, computer vision and target recognition.

#### Technical Skills
- Programming Languages: C++ (solid), Java (fluent), Python (strong in data crawling and deep learning), MySQL (fluent)
- Frameworks and Practices: Flask, Vue, Docker, machine learning and deep learning, microservice architecture, RPC and modern internet stacks
- Language Skills: Highly proficient English (CET-6 642, IELTS 8.0); basic German (Duolingo S3U22, completed SCUT “German Oral Communication”)
- Other Skills: Familiar with Linux; strong AI-assisted programming experience (Trae, Copilot, Claude Code, plugins, MCP, skills); video editing and music production; advanced Office skills (especially PPT illustration); Piano Grade 10

#### Personal Summary
- Soft Skills: Strong collaboration and communication, proactive in sharing positive energy, highly organized, and resilient under pressure; self-driven researcher mindset
- Broad Knowledge Base: Deep interdisciplinary study in neuroscience, anthropology, philosophy, and game theory that strengthens technical understanding and application
- Career Direction: Pursue cutting-edge technologies, build empowering team experiences, and create projects with real social impact; share ideas that spark reflection and contribute a thoughtful, warm, and capable voice
`,
        awards: `- <span class="highlight-blue">Meritorious Winner, 2026 COMAP's Interdisciplinary Contest in Modeling (ICM), 2026.05</span>
- First Prize, Guangdong Region, 2025 National Mathematical Modeling Competition, 2025.10
- National Finalist, 2025 China International College Students Innovation Competition, 2025.10
- First Prize, Guangdong Region, 2025 “Shenzhen Cup” Mathematical Modeling Challenge, 2025.6
- First Place, ModelScope Community Large Model Application Development Practical Team, 2025.2
- Outstanding Individual, 2023-2024 SCUT Student Military Training, 2024.1
- Motivational Student Award, Hua Xun · Yun Jie Scholarship, 2023.9
`,
        experience: `### Interdisciplinary Research on News Communication and Large Models (2024.5 - Present)
**Focus**: Interdisciplinary research at the intersection of news communication and large models, including LLM value alignment, multimodal fake news detection, multi-task fake news detection models, agent-based fake news dissemination simulation, sentiment analysis, hallucination research, and text readability analysis. It also includes recommender-system-related fake news studies, such as text-level comparisons between generative recommender systems and traditional recommender systems, and the propagation effects of fake news within recommender systems.

**My Responsibilities**:
- Core work: Built an agent-based simulation for the news dissemination process; designed intervention and ablation experiments; implemented a multi-task fake news detection model.
- Supporting work: Investigated differences in value alignment between generative recommender systems and traditional recommender systems; studied whether fake news generated by large models, after passing through recommender systems, may lead to truth decay; used Python for web crawling on domestic and international news websites; leveraged large models for batch summarization and value system analysis; ran batch experiments via external APIs; explored diverse neural network frameworks and popular deep learning architectures; contributed to research background and related knowledge sections in papers.
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
- Early-stage speech-to-text (Whisper), Qwen fine-tuning, and prompt engineering. As a core developer, I iterated on models to improve the standardization and practicality of generated medical records.
- Batch data testing and effect tuning by building automated test pipelines, significantly improving testing efficiency.
- Assisted environment deployment, local proxy setup, and firewall access.

**Achievements**: The project later shifted to mental health departments with potential hospital adoption in Guangzhou. I gained experience in healthcare product thinking and domain-specific constraints, and developed the ability to build systems that are both technically strong and robust in safety and reliability. I also strengthened cross-functional collaboration, reporting, progress management, and Linux development skills.

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
        extracurricular: `### CC Film Club - Projection Team Leader (2023.9 - Present)
**My Responsibilities**:
- Weekly film selection and themed screening organization.
- On-site coordination for Guangzhou university joint screenings (about 200 participants each).
- Wrote articles for the film club WeChat public account; contributed to short video creation and interviews.

**Achievements**: Enhanced aesthetic ability and organizational coordination skills.

**Douban**: https://www.douban.com/people/227017213

---

### South China University of Technology "Innovation Accelerator" Training Camp (2024.9.21 - 2024.9.22)
**Role/Position**: Trainee

**Main Responsibilities**:
- Learned rapid MVP product incubation methodologies.
- Gained foundational knowledge in smart healthcare and quantitative investment.
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
- AIFrameQuest (image search community platform): https://github.com/NoahIsARider/AIFrameQuest
- ZhituCareer+ (multi-agent career planning): https://github.com/NoahIsARider/ZhituCareer
- DLFaceDetection (RPC / remote function call sample): https://github.com/NoahIsARider/DLFaceDetection
- MatchaFlow (Multi-agent software development team): https://github.com/NoahIsARider/MatchaFlow
- WeSpeak (news communication / fake news detection): https://github.com/KGoinger/WeSpeak
- Reptile (web crawling and data processing): https://github.com/NoahIsARider/Reptile
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
**项目网站**：https://github.com/NoahIsARider  
**现居城市**：广东广州  
**籍贯**：江西九江  
**生日**：2005-06  

#### 教育背景
**华南理工大学**，“软件工程 + 工商管理”双学位试点项目，本科（2023.9 - 2027.6）  
- <span class="highlight-blue">加权平均分：92.13/100（年级排名第 1）</span>  
- <span class="highlight-blue">GPA：3.95/4.00（年级排名第 1）</span>  
- 主要课程：数据结构（95）、软件开发综合实训（96）、C++高级语言编程（90）、数据库系统（94）、离散数学（94）、工科数学分析（93）、工程制图（93）、大学物理（100）、概率论与数理统计（96）、电路与电子技术（99）、财务管理（98）、微观经济学（87）、宏观经济学（94）、管理学原理（91）等

#### 学术与交流
- CET-4：632/710，CET-6：642/710，<span class="highlight-blue">雅思总分：8.0/9.0</span>
- 参加 2024 年计算机科学、电子信息工程和智能控制技术国际会议（CEI2024）（有参会证明）
- 参与 2025 年智能与计算传播学年会
- 获得 2025 年香港科技大学暑期学校项目免学费名额（全英授课，全校四个名额）

#### 研究兴趣
假新闻检测、社会计算、AI For Business、健康医疗、推荐系统、多智能体系统、大语言模型价值对齐、多模态学习、情感分析、幻觉研究、文本可读性分析、计算机视觉与目标识别。

#### 专业技能
- 编程语言：C++（扎实）、Java（流利）、Python（擅长数据爬取与深度学习）、MySQL（流利）
- 技术框架与能力：Flask、Vue、Docker、机器学习与深度学习技术、微服务架构、远程函数调用（RPC）等常用互联网技术
- 语言能力：英语精通（CET-6 642，雅思 8.0），基础德语（多邻国课程达到 S3U22，完成华工“德语口语交际”课程）
- 其他技能：熟悉 Linux 系统；擅长 AI 辅助编程（Trae、Copilot、Claude Code 使用经验丰富，熟悉插件、MCP 与 skills）；擅长剪辑与音乐制作；熟练使用 Office 办公软件（特别擅长 PPT 绘图）；钢琴十级

#### 个人总结
- 工作软实力：擅长团队沟通协作，乐于交流；组织能力强，善于提供情绪价值；抗压能力强，为自我驱动型研究者。
- 知识面广：深入学习神经科学、人类学、哲学、博弈论等跨学科知识，同时这些知识也能够赋能我对于技术的理解与应用。
- 职业期待：希望持续接触前沿的技术，也能为团队带来良好工作体验，实现个人与组织双向赋能；同时希望致力于创造真正能够为社会带来一些积极改变的技术与项目，通过表达我的观点引发他人的思考，通过传递我的声音得到世界的回应，成为一个有思想、有温度、有能力的人。
`,
        awards: `- <span class="highlight-blue">2026 年美国大学生数学建模竞赛 ICM M 奖，2026.5</span>
- 2025 年全国数学建模竞赛广东赛区一等奖，2025.10
- 2025 年中国国际大学生创新大赛全国总决赛入围作品，2025.10
- 2025 年“深圳杯”数学建模挑战赛广东赛区一等奖，2025.6
- ModelScope 社区大模型应用开发实战团队第一名，2025.2
- 2023-2024 年度华南理工大学学生军训先进个人，2024.1
- 华浔·运杰奖学金励志学生奖，2023.9
`,
        experience: `### 新闻传播 - 大模型跨学科研究（2024.5 - 至今）
**研究方向**：新闻传播与大模型交叉研究，包括大语言模型价值对齐、多模态假新闻检测、多任务假新闻检测模型、智能体模拟假新闻传播、情感分析、幻觉研究、文本可读性分析。同时也有推荐系统与假新闻的相关研究，比如生成式推荐系统与传统推荐系统的文本对比和假新闻在推荐系统中的传播效果研究。

**我的职责**：
- 核心工作：构建新闻传播过程的 Agent 模拟系统，设计干预实验与消融实验；创新性实现多任务假新闻检测模型。
- 辅助工作：研究生成式推荐系统与传统推荐系统在价值观对齐上的差异；研究大模型生成的假新闻经过推荐系统后是否会导致真相衰退；使用 Python 进行爬虫，在国内外新闻网站抓取数据；调用大模型进行批量内容概括与价值观总结；调用外部 API 完成批量实验；接触并使用多种神经网络框架与主流深度学习架构；参与论文的研究背景与相关知识章节撰写。
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
- 初期语音转文本（Whisper 模型）、Qwen 模型微调与 prompt 工程。作为核心开发者之一，我在不断的模型迭代中提升了大模型生成病案文本规范性与合理性，使其可以被实际应用。
- 数据批量检测与效果调优。通过搭建自动化的测试管道，大大增加了项目测试的效率。
- 辅助环境部署、本地梯子搭建与防火墙通行。

**成果与收获**：项目场景后期转向心理健康相关科室，未来有机会在广州的大型医院推广应用；我在这个过程中熟悉了智慧健康领域的产品开发思路以及其领域特定的关注点，培养出开发既有强大技术支撑又能保证安全性与鲁棒性系统的的能力。同时也获得跨职能与高结构化团队协作经验，熟悉工作报告与进度管理流程，并掌握基本 Linux 系统开发能力。

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
        extracurricular: `### 社团活动：CC 电影社团 - 放映组组长（2023.9 - 至今）
**我的职责**：
- 每周放映选片与主题月放映组织。
- 参与广州高校联合观影活动组织与现场调度（每次约 200 人）。
- 撰写影协公众号推文，参与短视频创作与采访活动。

**成果与收获**：提升审美能力与组织协调能力。

**个人豆瓣主页**：https://www.douban.com/people/227017213

---

### 华南理工大学“创新加速器”训练营（2024.9.21 - 2024.9.22）
**岗位/职位**：学员

**主要职责**：
- 学习了 MVP 产品的快速孵化方法。
- 了解了智慧医疗、量化投资的相关知识。
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
- AIFrameQuest（以图搜图社区平台）：https://github.com/NoahIsARider/AIFrameQuest
- ZhituCareer+（多智能体职业规划平台）：https://github.com/NoahIsARider/ZhituCareer
- DLFaceDetection（RPC/远程函数调用示例）：https://github.com/NoahIsARider/DLFaceDetection
- MatchaFlow (多智能体软件开发管理团队): https://github.com/NoahIsARider/MatchaFlow
- WeSpeak（新闻传播/假新闻检测相关）：https://github.com/KGoinger/WeSpeak
- Reptile（爬虫与数据处理）：https://github.com/NoahIsARider/Reptile
- ReminisceneStone（UGC 回忆记录与共鸣平台）
- MoonPit（自建图片数据库的图片管理与搜索平台）

如需查看更多材料或项目演示，可邮件联系我。
`
    },
    yue: {
        home: `**姓名**：周方亞諾（英文名 Noah Zhou）  
**電話**：18779261101  
**郵箱**：1966322816@qq.com  
**微信**：zfyn18779261101  
**個人網站**：https://github.com/NoahIsARider  
**現居城市**：廣東廣州  
**籍貫**：江西九江  
**生日**：2005-06  

#### 教育背景
**華南理工大學**，「軟件工程 + 工商管理」雙學位試點項目，本科（2023.9 - 2027.6）  
- <span class="highlight-blue">加權平均分：92.13/100（年級排名第 1）</span>  
- <span class="highlight-blue">GPA：3.95/4.00（年級排名第 1）</span>  
- 主要課程：數據結構（95）、軟件開發綜合實訓（96）、C++高級語言編程（90）、數據庫系統（94）、離散數學（94）、工科數學分析（93）、工程製圖（93）、大學物理（100）、概率論與數理統計（96）、電路與電子技術（99）、財務管理（98）、微觀經濟學（87）、宏觀經濟學（94）、管理學原理（91）等

#### 學術與交流
- CET-4：632/710，CET-6：642/710，<span class="highlight-blue">雅思總分：8.0/9.0</span>
- 參加 2024 年計算機科學、電子信息工程和智能控制技術國際會議（CEI2024）（有參會證明）
- 參與 2025 年智能與計算傳播學年會
- 獲得 2025 年香港科技大學暑期學校項目免學費名額（全英授課，全校四個名額）

#### 研究興趣
假新聞檢測、社會計算、AI For Business、健康醫療、推薦系統、多智能體系統、大語言模型價值對齊、多模態學習、情感分析、幻覺研究、文本可讀性分析、計算機視覺與目標識別。

#### 專業技能
- 編程語言：C++（扎實）、Java（流利）、Python（擅長數據爬取與深度學習）、MySQL（流利）
- 技術框架與能力：Flask、Vue、Docker、機器學習與深度學習技術、微服務架構、遠程函數調用（RPC）等常用互聯網技術
- 語言能力：英語精通（CET-6 642，雅思 8.0），基礎德語（多鄰國課程達到 S3U22，完成華工「德語口語交際」課程）
- 其他技能：熟悉 Linux 系統；擅長 AI 輔助編程（Trae、Copilot、Claude Code 使用經驗豐富，熟悉插件、MCP 與 skills）；擅長剪輯與音樂製作；熟練使用 Office 辦公軟件（特別擅長 PPT 繪圖）；鋼琴十級

#### 個人總結
- 工作軟實力：擅長團隊溝通協作，樂於交流；組織能力強，善於提供情緒價值；抗壓能力強，為自我驅動型研究者。
- 知識面廣：深入學習神經科學、人類學、哲學、博弈論等跨學科知識，同時這些知識也能夠賦能我對於技術的理解與應用。
- 職業期待：希望持續接觸前沿技術，也能為團隊帶來良好工作體驗，實現個人與組織雙向賦能；同時希望致力於創造真正能夠為社會帶來一些積極改變的技術與項目，通過表達我的觀點引發他人的思考，通過傳遞我的聲音得到世界的回應，成為一個有思想、有溫度、有能力的人。
`,
        awards: `- <span class="highlight-blue">2026 年美國大學生數學建模競賽 ICM M 獎，2026.5</span>
- 2025 年全國數學建模競賽廣東賽區一等獎，2025.10
- 2025 年中國國際大學生創新大賽全國總決賽入圍作品，2025.10
- 2025 年「深圳杯」數學建模挑戰賽廣東賽區一等獎，2025.6
- ModelScope 社區大模型應用開發實戰團隊第一名，2025.2
- 2023-2024 年度華南理工大學學生軍訓先進個人，2024.1
- 華潯·運傑獎學金勵志學生獎，2023.9
`,
        experience: `### 新聞傳播 - 大模型跨學科研究（2024.5 - 至今）
**研究方向**：新聞傳播與大模型交叉研究，包括大語言模型價值對齊、多模態假新聞檢測、多任務假新聞檢測模型、智能體模擬假新聞傳播、情感分析、幻覺研究、文本可讀性分析。同時亦有推薦系統與假新聞的相關研究，例如生成式推薦系統與傳統推薦系統的文本對比，以及假新聞在推薦系統中的傳播效果研究。

**我的職責**：
- 核心工作：構建新聞傳播過程的 Agent 模擬系統，設計干預實驗與消融實驗；創新性實現多任務假新聞檢測模型。
- 輔助工作：研究生成式推薦系統與傳統推薦系統在價值觀對齊上的差異；研究大模型生成的假新聞經過推薦系統後是否會導致真相衰退；使用 Python 進行爬蟲，在國內外新聞網站抓取數據；調用大模型進行批量內容概括與價值觀總結；調用外部 API 完成批量實驗；接觸並使用多種神經網絡框架與主流深度學習架構；參與論文的研究背景與相關知識章節撰寫。
- 賽事參與：參與社會仿真比賽，參與 prompt 設計與項目代碼的雲端分布式部署。

**成果與收穫**：
- 參與論文寫作：多模態 MoE 假新聞檢測論文已被 IEEE TCE 接收（DOI: 10.1109/TCE.2026.3677445）。
- 反事實軟件缺陷檢測論文在投；多任務假新聞檢測論文在撰寫中。
- 開源項目產出：https://github.com/KGoinger/WeSpeak ，https://github.com/NoahIsARider/Reptile
- 專利申請中（預計 2026 年 9-10 月通過）。

---

### 智慧醫療 AIGC 病案資料生成項目（2024.7 - 2024.12）
**項目描述**：基於生成式人工智能生成格式化病案資料，解決病案撰寫重複勞動、時效性滯後與質量不均等問題；通過深入醫療對話研究，開發 AIGC 算法，實現門診病案自動化與智能化生成。

**我的職責**：
- 初期語音轉文本（Whisper 模型）、Qwen 模型微調與 prompt 工程。作為核心開發者之一，我在不斷的模型迭代中提升了大模型生成病案文本規範性與合理性，使其可被實際應用。
- 數據批量檢測與效果調優。通過搭建自動化測試管道，大大提升項目測試效率。
- 輔助環境部署、本地梯子搭建與防火牆通行。

**成果與收穫**：項目場景後期轉向心理健康相關科室，未來有機會在廣州大型醫院推廣應用；我在這個過程中熟悉了智慧健康領域的產品開發思路及其領域特定關注點，培養出開發既有強大技術支撐又可保證安全性與魯棒性系統的能力。同時亦獲得跨職能與高結構化團隊協作經驗，熟悉工作報告與進度管理流程，並掌握基本 Linux 系統開發能力。

---

### 旅遊軌跡數據的挖掘模擬與分析（2025.8 - 至今）
**項目描述**：結合官方平台與爬蟲數據，構建基於 Python 與 Vue 的遊客行為模擬平台，研究社交媒體是否影響遊客路線選擇。

**我的職責**：
- 實現時間篩選功能與數據可視化模塊。
- 實現多日重複添加人數、關閉臨時景點等重要功能模塊。

**成果與收穫**：預計至少產出一篇論文（預計 2026 年 12 月前投稿）；提升複雜軟件系統開發經驗，學會適應高要求的開發標準。

---

### 智途 Career+ 項目 & AIFrameQuest 以圖搜圖系列（2025.5 - 2025.7）
**項目描述**：
- 智途 Career+：以多 Agent 決策為特色的職業生涯規劃網頁。
- AIFrameQuest：基於 Flask 與 Vue 的現代化社區討論平台，支持用戶認證、內容管理、圖像搜索（Faiss 向量搜索與 Bert 特徵提取），設計風格現代優美。
- 衍生項目：ReminisceneStone（UGC 回憶記錄與共鳴尋找平台）、MoonPit（支持自建圖片數據庫的專業化圖片管理與搜索平台）。

**技術棧**：Python / Flask / JavaScript / MySQL / Vue

**我的職責**：負責核心深度學習模塊前後端編寫、子模塊統合、參與前端設計與概念集設計、安排團隊合理分工。

**成果與收穫**：課程第一；開源項目：https://github.com/NoahIsARider/AIFrameQuest ，https://github.com/NoahIsARider/ZhituCareer

---

### 農業自動評估研發項目（2025.7 - 2026.2）
**項目描述**：使用計算機視覺實現養畜業養殖效果評估，搭建自主數據標註平台，通過訓練 YOLO 系列模型實現目標體重識別。

**我的職責**：調研並實現關鍵幀識別算法；使用 YOLOn11pose 模型解決牲畜身體關鍵點識別難點。

**成果與收穫**：數據標註平台於 2025 年 12 月交付企業驗收；算法仍在迭代階段，積累計算機視覺領域實戰經驗。

---

`,
        publications: `#### 論文
<ul class="pub-list">
    <li>
        Q.-Y. Zou, G. Chen, F. Zhou, X.-K. Wu, Z.-Y. Yang, and Y.-Y. Shi,
        "CMLE: A Collaborative LoRA-Enhanced Expert Framework for Multimodal Fake News Detection,"
        <em>IEEE Transactions on Consumer Electronics</em>, doi: 10.1109/TCE.2026.3677445.
        <a class="pub-link" href="https://doi.org/10.1109/TCE.2026.3677445" target="_blank" rel="noopener">DOI</a>
    </li>
    <li>反事實軟件缺陷檢測論文在投</li>
    <li>多任務假新聞檢測論文撰寫中</li>
</ul>

#### 專利
<ul class="pub-list">
    <li>專利申請中（預計 2026 年 9-10 月通過）</li>
</ul>
`,
        extracurricular: `### 社團活動：CC 電影社團 - 放映組組長（2023.9 - 至今）
**我的職責**：
- 每週放映選片與主題月放映組織。
- 參與廣州高校聯合觀影活動組織與現場調度（每次約 200 人）。
- 撰寫影協公眾號推文，參與短視頻創作與採訪活動。

**成果與收穫**：提升審美能力與組織協調能力。

**個人豆瓣主頁**：https://www.douban.com/people/227017213

---

### 華南理工大學「創新加速器」訓練營（2024.9.21 - 2024.9.22）
**崗位/職位**：學員

**主要職責**：
- 學習了 MVP 產品的快速孵化方法。
- 了解了智慧醫療、量化投資的相關知識。
`,
        portfolio: `以下為作品集展示與主要項目連結，包含 PDF 與 PPT 版本（可任選瀏覽）。

<div class="portfolio-embed">
  <iframe src="作品集.pdf" title="作品集 PDF"></iframe>
</div>

<div class="portfolio-links">
  <a href="作品集.pdf" target="_blank" rel="noopener"><i class="bi bi-file-earmark-pdf"></i>作品集 PDF</a>
  <a href="作品集.pptx" target="_blank" rel="noopener"><i class="bi bi-easel"></i>作品集 PPT</a>
</div>

#### 代表項目與代碼
- AIFrameQuest（以圖搜圖社區平台）：https://github.com/NoahIsARider/AIFrameQuest
- ZhituCareer+（多智能體職業規劃平台）：https://github.com/NoahIsARider/ZhituCareer
- DLFaceDetection（RPC/遠程函數調用示例）：https://github.com/NoahIsARider/DLFaceDetection
- MatchaFlow（多智能體軟件開發管理團隊）：https://github.com/NoahIsARider/MatchaFlow
- WeSpeak（新聞傳播/假新聞檢測相關）：https://github.com/KGoinger/WeSpeak
- Reptile（爬蟲與數據處理）：https://github.com/NoahIsARider/Reptile
- ReminisceneStone（UGC 回憶記錄與共鳴平台）
- MoonPit（自建圖片數據庫的圖片管理與搜索平台）

如需查看更多材料或項目演示，可電郵聯絡我。
`
    }
};

let currentLang = 'en';
let currentTheme = 'light';

const getInitialLang = () => {
    const stored = localStorage.getItem('lang');
    if (supportedLangs.includes(stored)) {
        return stored;
    }

    const browserLang = (navigator.language || '').toLowerCase();
    if (browserLang.startsWith('zh-hk') || browserLang.startsWith('zh-mo')) {
        return 'yue';
    }
    return browserLang.startsWith('zh') ? 'zh' : 'en';
};

const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (supportedThemes.includes(stored)) {
        return stored;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const resolveConfigValue = (value, lang) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
        return value[lang] ?? value.zh ?? value.en ?? Object.values(value)[0];
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

    const fallback = (lang === 'zh' || lang === 'yue') ? '内容加载失败。' : 'Content failed to load.';
    const markdown = contentByLang[lang]?.[section.fileBase]
        ?? contentByLang.zh?.[section.fileBase]
        ?? contentByLang.en?.[section.fileBase]
        ?? '';

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
    const yueButton = document.getElementById('lang-yue');
    const enButton = document.getElementById('lang-en');

    if (zhButton) {
        zhButton.classList.toggle('is-active', lang === 'zh');
    }
    if (enButton) {
        enButton.classList.toggle('is-active', lang === 'en');
    }
    if (yueButton) {
        yueButton.classList.toggle('is-active', lang === 'yue');
    }
};

const setThemeToggleText = (theme, lang) => {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) {
        return;
    }

    const textByLang = themeButtonText[lang] ?? themeButtonText.en;
    const label = textByLang[theme] ?? textByLang.light;
    toggleButton.innerHTML = label;
};

const applyTheme = (theme) => {
    const selected = supportedThemes.includes(theme) ? theme : 'light';
    currentTheme = selected;
    localStorage.setItem('theme', selected);
    document.body.classList.toggle('theme-dark', selected === 'dark');
    setThemeToggleText(selected, currentLang);
};

const initThemeSwitcher = () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    applyTheme(getInitialTheme());
};

const initLanguageSwitcher = () => {
    const applyLanguage = (lang) => {
        const selected = supportedLangs.includes(lang) ? lang : 'en';
        currentLang = selected;
        localStorage.setItem('lang', selected);
        document.documentElement.lang = selected;
        applyConfig(config, selected);
        setActiveLangButton(selected);
        loadAllSections(selected);
        setThemeToggleText(currentTheme, selected);
    };

    const zhButton = document.getElementById('lang-zh');
    const yueButton = document.getElementById('lang-yue');
    const enButton = document.getElementById('lang-en');

    if (zhButton) {
        zhButton.addEventListener('click', () => applyLanguage('zh'));
    }
    if (yueButton) {
        yueButton.addEventListener('click', () => applyLanguage('yue'));
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
    initThemeSwitcher();
});
