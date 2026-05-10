const supportedLangs = ['en', 'zh'];
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
    'nav-extracurricular': {
        en: 'Extracurricular',
        zh: '课外活动'
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
    'extracurricular-subtitle': {
        en: '<i class="bi bi-people-fill"></i> Extracurricular',
        zh: '<i class="bi bi-people-fill"></i> 课外活动'
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
**个人网站**：https://github.com/NoahIsARider  
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
