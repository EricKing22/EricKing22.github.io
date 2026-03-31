'use strict';

const i18n = {
  en: {
    'document.title': 'Songyang Ding | Personal Homepage',
    'profile.role': 'Postgraduate Student',
    'sidebar.showContacts': 'Show Contacts',
  'sidebar.email': 'Email',
  'sidebar.phone': 'Phone',
  'sidebar.birthday': 'Birthday',
  'sidebar.location': 'Location',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'about.title': 'About me',
    'about.p1': 'MSc student in Applied Computational Science and Engineering at Imperial College London, with a strong focus on multimodal learning, vision-language modeling, and AI agent systems. I enjoy turning cutting-edge research ideas into reliable and practical machine learning solutions.',
    'about.p2': 'My recent work spans diffusion-based cross-modal reconstruction for NASA HiRISE imagery, tool-use grounding optimization for Qwen models, and interpretable reasoning architectures for VQA. I\'m especially interested in robust model alignment, scalable training pipelines, and real-world AI deployment.',
    'about.servicesTitle': "What i'm doing",
  'service.software.title': 'Agent Development',
  'service.software.desc': 'Developed multi-step Deep Research Agents using LangGraph and DeerFlow for automated technical intelligence synthesis across GitHub, HuggingFace, and ArXiv. Implemented ReAct and Plan-Execute-Verify workflows with schema-constrained outputs to improve reliability, throughput, and report quality.',
    'service.llm.title': 'Large Language Model',
    'service.llm.desc': 'Extensive experience in parameter-efficient fine-tuning (PEFT) using LoRA/QLoRA, and reinforcement learning optimization with GRPO, DAPO, and GSPO.',
  'service.ml.title': 'Diffusion Modeling',
  'service.ml.desc': 'Built diffusion image-to-image reconstruction workflows for NASA HiRISE cross-modal tasks, recovering visible-band imagery from IR inputs under sensor degradation for downstream scientific analysis.',
    'service.cv.title': 'Computer Vision',
    'service.cv.desc': 'Specialized in object detection, image classification, VQA, and diffusion-based image-to-image reconstruction. Implemented state-of-the-art architectures such as YOLO, CLIP, MAC, and multimodal generative models.',
    'resume.title': 'Resume',
    'resume.education': 'Education',
    'edu.imperial.title': 'Imperial College London',
    'edu.imperial.desc': 'MSc in Applied Computational Science and Engineering',
    'edu.southampton.title': 'University of Southampton',
    'edu.southampton.desc1': 'BSc in Computer Science (First Class Honours Received)',
    'edu.southampton.desc2': 'Awards: Southampton International Merit Scholarship, F1 in Schools National Bronze Award',
    'edu.southampton.desc3': 'Relevant modules: Machine Learning, Deep Learning, Computer Vision, Distributed Systems',
  'edu.clifton.title': 'Clifton College',
  'edu.clifton.desc1': 'Subjects: Mathematics(A*), Further Mathematics(A*), Physics(A*) and Computer Science(A*)',
  'edu.clifton.desc2': 'Received Academic Scholarship from Keasbey Memorial Foundation.',
  'edu.clifton.desc3': 'Invited to the British Mathematical Olympiad Round One and Round Two in 2020.',
    'resume.work': 'Work Experience',
    'work.saia.title': 'Shanghai Artificial Intelligence Industry Association - Summer Internship',
    'work.saia.desc1': 'Tech stack: DeerFlow, ReAct, Pydantic, FAISS, RAG, OpenAI API.',
    'work.saia.desc2': 'Built a multi-step Deep Research Agent with a ReAct-style tool-calling loop to automatically gather and synthesize open-source/project intelligence from GitHub, HuggingFace, and ArXiv.',
    'work.saia.desc3': 'Introduced a Plan-Execute-Verify architecture with schema-constrained outputs using Pydantic, improving report production efficiency by 5× and reducing manual verification error rate by 40%.',
    'work.midu.title': 'Midu Technology - Algorithm Engineering Intern',
    'work.midu.desc1': 'Tech stack: YOLOv8, RAM, CLIP, PyTorch, OpenCV.',
    'work.midu.desc2': 'Designed a YOLO + RAM cascade architecture for flag compliance analysis (e.g., stain/damage recognition), combining detection and open-vocabulary semantic classification under limited labeled data.',
    'work.midu.desc3': 'Improved cross-modal representation consistency through feature alignment and confidence-weighted fusion, achieving a 15% accuracy gain over CLIP baseline.',
  'work.yuanlong.title': 'Yuanlong Yato - Summer Internship',
  'work.yuanlong.desc1': 'Experienced working under a high-pressure and time-critical environment and learned advertising and marketing in the Metaverse industry.',
  'work.yuanlong.desc2': 'Participated in research and proposal development for Cartier Metaverse marketing initiatives.',
  'work.waic.title': 'World Artificial Intelligence Conference',
  'work.waic.desc1': 'Led a team of five members to support international journalists with conference communication and inquiries, developing strong leadership and task coordination skills.',
    'resume.projects': 'Project Experience',
    'project.hirise.title': 'HiRISE NASA Mars Remote Sensing Cross-Modal Reconstruction',
  'project.jump': '[Open ->]',
    'project.hirise.desc1': 'Tech stack: PyTorch, Flow Matching, U-Net, DDPM, HiRISE Dataset.',
    'project.hirise.desc2': 'Trained a diffusion-based image-to-image model for NASA Mars orbital scenarios to reconstruct visible-band images from IR-channel inputs when visible camera signals are degraded, supporting downstream scientific surface analysis.',
    'project.qwen.title': 'Qwen3.5 REFOCUS Agent',
    'project.qwen.desc1': 'Tech stack: LlamaFactory, verl, LoRA, Qwen3.5, GRPO/DAPO/GSPO.',
    'project.qwen.desc2': 'Addressed grounding coordinate precision limitations in multimodal tool-calling for Qwen3.5-9B by applying LoRA fine-tuning in LlamaFactory to enforce REFOCUS invocation patterns and bbox output formatting.',
    'project.qwen.desc3': 'Implemented RL optimization with IoU + answer correctness composite rewards in the verl framework, and systematically compared GRPO, DAPO, and GSPO convergence behavior on coordinate quality and task accuracy.',
    'project.clevr.title': 'CLEVR Visual Question Answering (VQA) Research Project',
    'project.clevr.desc1': 'Tech stack: Deep Thinking, PyTorch, Cross Attention, VLM, MAC.',
    'project.clevr.desc2': 'Proposed the MAC-DTL hybrid architecture by decoupling and integrating Memory-Attention-Composition (MAC) with Deep Thinking Loop, then systematically evaluated extrapolation and convergence stability.',
    'project.clevr.desc3': 'Achieved 97.4% accuracy on CLEVR test set, and designed a MAC_DTL_Specific variant with step-specific parameters in the Control Unit that kept performance degradation under 0.1% as reasoning depth increased.',
    'resume.competition': 'Competition Experience',
    'comp.bmo.title': 'British Mathematical Olympiad (BMO) Round Two',
    'comp.bmo.desc': 'Competed in UK national-level mathematics competition and advanced to Round Two.',
    'skills.title': 'My skills',
    'skills.s1': 'Python / AI Engineering',
    'skills.s2': 'Multimodal & Computer Vision',
    'skills.s3': 'LLM Fine-tuning / RLHF / Agent Systems',
    'skills.s4': 'Java / C++ / SQL / Docker / Git / Linux'
  },
  zh: {
    'document.title': '丁颂洋 | 个人主页',
    'profile.role': '硕士研究生',
    'sidebar.showContacts': '显示联系方式',
  'sidebar.email': '邮箱',
  'sidebar.phone': '电话',
  'sidebar.birthday': '生日',
  'sidebar.location': '所在地',
    'nav.about': '关于我',
    'nav.resume': '简历',
    'about.title': '关于我',
    'about.p1': '帝国理工学院应用计算科学与工程硕士在读，我的研究方向聚焦多模态学习、视觉语言建模与智能体系统。',
    'about.p2': '近期工作涵盖 NASA HiRISE 扩散模型跨模态重建、Qwen 工具调用坐标对齐优化，以及 VQA 可解释推理架构设计。',
    'about.servicesTitle': '我在做什么',
  'service.software.title': '智能体开发',
  'service.software.desc': '基于 LangGraph 与 DeerFlow 开发多步 Deep Research Agent，实现对 GitHub、HuggingFace、ArXiv 技术情报的自动化采集与结构化综述生成。结合 ReAct 与 Plan-Execute-Verify 工作流，并通过结构化输出约束提升稳定性、吞吐与报告质量。',
    'service.llm.title': '大语言模型',
    'service.llm.desc': '具备 LoRA/QLoRA 参数高效微调经验，并可结合 GRPO、DAPO、GSPO 等强化学习策略优化模型表现。',
  'service.ml.title': '扩散模型',
  'service.ml.desc': '围绕 NASA HiRISE 跨模态任务构建 diffusion image-to-image 重建流程，在传感器退化场景下由 IR 输入恢复可见光图像，支持后续地表科学分析。',
    'service.cv.title': '计算机视觉',
    'service.cv.desc': '专注目标检测、图像分类、视觉问答与扩散式图像重建，实践 YOLO、CLIP、MAC 等先进多模态架构。',
    'resume.title': '简历',
    'resume.education': '教育背景',
    'edu.imperial.title': '帝国理工学院（Imperial College London）',
    'edu.imperial.desc': '应用计算科学与工程硕士（MSc in Applied Computational Science and Engineering）',
    'edu.southampton.title': '南安普顿大学（University of Southampton）',
    'edu.southampton.desc1': '计算机科学学士（一等荣誉）',
    'edu.southampton.desc2': '奖项：优秀国际留学生奖学金、F1 in Schools 全国铜奖',
    'edu.southampton.desc3': '核心课程：机器学习、深度学习、计算机视觉、分布式系统',
  'edu.clifton.title': '克利夫顿学院（Clifton College）',
  'edu.clifton.desc1': '主修：数学（A*）、高等数学（A*）、物理（A*）、计算机科学（A*）',
  'edu.clifton.desc2': '获 Keasbey Memorial Foundation 学术奖学金。',
  'edu.clifton.desc3': '于 2020 年受邀参加英国数学奥林匹克 BMO 第一轮与第二轮。',
    'resume.work': '实习经历',
    'work.saia.title': '上海市人工智能行业协会 - 算法工程实习生',
    'work.saia.desc1': '技术栈：DeerFlow、ReAct、Pydantic、FAISS、RAG、OpenAI API。',
    'work.saia.desc2': '基于 ReAct 工具调用循环构建多步 Deep Research Agent，自动抓取并整合 GitHub、HuggingFace、ArXiv 的项目与论文信息。',
    'work.saia.desc3': '设计 Plan-Execute-Verify 三阶段架构，并以 Pydantic 约束输出格式，报告产出效率提升 5×，人工校验误差率降低 40%。',
    'work.midu.title': '蜜度（Midu）- 算法工程实习生',
    'work.midu.desc1': '技术栈：YOLOv8、RAM、CLIP、PyTorch、OpenCV。',
    'work.midu.desc2': '面向国旗图像安全合规场景，设计 YOLO + RAM 级联架构，实现低标注条件下的候选区域检测与开放词汇语义分类。',
    'work.midu.desc3': '通过特征对齐与置信度加权融合增强跨模态一致性，相比 CLIP baseline 准确率提升 15%。',
  'work.yuanlong.title': '元隆雅图（Yuanlong Yato）- 暑期实习',
  'work.yuanlong.desc1': '在高压且时效要求高的环境中工作，学习并参与元宇宙行业的广告与营销实践。',
  'work.yuanlong.desc2': '参与卡地亚（Cartier）元宇宙营销方案调研与提案。',
  'work.waic.title': '世界人工智能大会（WAIC）',
  'work.waic.desc1': '带领 5 人小组协助国际媒体与大会沟通并处理咨询，提升了任务管理与团队领导能力。',
    'resume.projects': '项目经历',
    'project.hirise.title': 'HiRISE NASA 火星遥感图像跨模态重建',
  'project.jump': '【跳转->】',
    'project.hirise.desc1': '技术栈：PyTorch、Flow Matching、U-Net、DDPM、HiRISE Dataset。',
    'project.hirise.desc2': '面向 NASA 火星轨道场景训练 Diffusion image-to-image 模型，在可见光信号受损条件下由 IR 通道重建可见光图像，支持后续地表科学分析。',
    'project.qwen.title': 'Qwen3.5 REFOCUS Agent',
    'project.qwen.desc1': '技术栈：LlamaFactory、verl、LoRA、Qwen3.5、GRPO/DAPO/GSPO。',
    'project.qwen.desc2': '针对 Qwen3.5-9B 多模态工具调用中的坐标精度问题，使用 LlamaFactory 进行 LoRA 微调，学习 REFOCUS 工具调用范式与 bbox 输出格式。',
    'project.qwen.desc3': '在 verl 中引入 IoU + 答案正确率复合奖励，系统比较 GRPO、DAPO、GSPO 在坐标精度与答案质量上的收敛表现。',
    'project.clevr.title': 'CLEVR 视觉问答（VQA）研究项目',
    'project.clevr.desc1': '技术栈：Deep Thinking、PyTorch、Cross Attention、VLM、MAC。',
    'project.clevr.desc2': '提出 MAC-DTL 混合架构，将 MAC 与 Deep Thinking Loop 解耦融合，并系统评估外推能力与收敛稳定性。',
    'project.clevr.desc3': 'CLEVR 测试集准确率达到 97.4%，并通过 MAC_DTL_Specific 变体在推理复杂度提升时将性能退化控制在 0.1% 以内。',
    'resume.competition': '竞赛经历',
    'comp.bmo.title': '英国国家数学奥林匹克（BMO）Round Two',
    'comp.bmo.desc': '参加英国国家级数学竞赛并晋级第二轮。',
    'skills.title': '技能',
    'skills.s1': 'Python / AI 工程',
    'skills.s2': '多模态与计算机视觉',
    'skills.s3': 'LLM 微调 / RLHF / Agent 系统',
    'skills.s4': 'Java / C++ / SQL / Docker / Git / Linux'
  }
};

const setLanguage = (lang) => {
  const selectedLang = i18n[lang] ? lang : 'en';
  const dict = i18n[selectedLang];

  document.documentElement.lang = selectedLang === 'zh' ? 'zh-CN' : 'en';
  document.title = dict['document.title'];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === selectedLang);
  });

  localStorage.setItem('homepage-lang', selectedLang);
};



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
    if (select) {
      elementToggleFunc(select);
    }
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) {
      selectValue.innerText = this.innerText;
    }
    filterFunc(selectedValue);

    if (lastClickedBtn) {
      lastClickedBtn.classList.remove("active");
    }
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form && form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.dataset.navTarget || this.innerHTML.toLowerCase();

    for (let i = 0; i < pages.length; i++) {
      if (targetPage === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

const langButtons = document.querySelectorAll('[data-lang-btn]');
const cachedLang = localStorage.getItem('homepage-lang') || 'en';

setLanguage(cachedLang);

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});