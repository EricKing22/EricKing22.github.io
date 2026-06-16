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
    'wechat.title': 'Add me on WeChat',
    'wechat.text': 'Scan the QR code to add my WeChat.',
    'wechat.fallback': 'QR code image not found yet.',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'about.title': 'About me',
    'about.p1': 'MSc student in Applied Computational Science and Engineering at Imperial College London, with a strong focus on multimodal learning, vision-language modeling, and AI agent systems. I enjoy turning cutting-edge research ideas into reliable and practical machine learning solutions.',
    'about.p2': 'My recent work spans diffusion-based cross-modal reconstruction for NASA HiRISE imagery, tool-use grounding optimization for Qwen models, and interpretable reasoning architectures for VQA. I\'m especially interested in robust model alignment, scalable training pipelines, and real-world AI deployment.',
    'about.servicesTitle': "What I'm doing",
  'service.software.title': 'AI Agent Development',
  'service.software.desc': 'Designed and implemented multi-step Deep Research agents using LangGraph and DeerFlow to automate technical intelligence synthesis across GitHub, Hugging Face, and arXiv. Built ReAct and Plan–Execute–Verify workflows with schema-constrained outputs to improve execution reliability, research throughput, and final report consistency.',
    'service.llm.title': 'Large Language Models',
    'service.llm.desc': 'Experienced in parameter-efficient fine-tuning and LLM optimization, including LoRA, QLoRA, GRPO, DAPO, and GSPO. Worked on adapting large language models for domain-specific tasks with a focus on training efficiency, controllable outputs, and performance optimization.',
  'service.ml.title': 'Diffusion Modeling',
  'service.ml.desc': 'Developed diffusion-based image-to-image reconstruction pipelines for NASA HiRISE cross-modal remote sensing tasks. Compared DDPM and FM approaches and analysed different gradient guidance methods. Recovered visible-band imagery from degraded infrared inputs to support downstream scientific analysis and sensor-degradation scenarios.',
    'service.cv.title': 'Computer Vision & Multimodal AI',
    'service.cv.desc': 'Specialized in object detection, image classification, visual question answering, and diffusion-based image reconstruction. Implemented and adapted state-of-the-art architectures including YOLO, CLIP, SigLIP, and multimodal generative models for vision-language and image generation tasks.',
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
    'profile.role': '硕士在读',
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
  'service.software.title': 'AI 智能体开发',
  'service.software.desc': '使用 LangGraph 与 DeerFlow 设计并实现多步 Deep Research 智能体，自动化整合 GitHub、Hugging Face 与 arXiv 上的技术情报。构建 ReAct 与 Plan–Execute–Verify 工作流，并通过 schema 约束输出提升执行可靠性、研究吞吐量与最终报告一致性。',
    'service.llm.title': '大语言模型',
    'service.llm.desc': '具备参数高效微调与 LLM 优化经验，包括 LoRA、QLoRA、GRPO、DAPO 和 GSPO。曾针对特定领域任务适配大语言模型，重点关注训练效率、可控输出与性能优化。',
  'service.ml.title': '扩散模型',
  'service.ml.desc': '面向 NASA HiRISE 跨模态遥感任务开发基于扩散模型的 image-to-image 重建流程。比较 DDPM 与 FM 方法，并分析不同梯度引导策略。从退化红外输入中恢复可见光波段图像，以支持下游科学分析和传感器退化场景。',
    'service.cv.title': '计算机视觉与多模态 AI',
    'service.cv.desc': '专注目标检测、图像分类、视觉问答与基于扩散模型的图像重建。实现并适配 YOLO、CLIP、SigLIP 等先进架构，以及面向视觉语言和图像生成任务的多模态生成模型。',
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
  'work.yuanlong.desc1': '学习并参与元宇宙行业的广告与营销实践。',
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

Object.assign(i18n.zh, {
  'wechat.title': '\u6dfb\u52a0\u6211\u7684\u5fae\u4fe1',
  'wechat.text': '\u626b\u63cf\u4e8c\u7ef4\u7801\u6dfb\u52a0\u5fae\u4fe1\u597d\u53cb\u3002',
  'wechat.fallback': '\u5c1a\u672a\u627e\u5230\u5fae\u4fe1\u4e8c\u7ef4\u7801\u56fe\u7247\u3002'
});

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

const wechatOpenBtn = document.querySelector("[data-wechat-open]");
const wechatModal = document.querySelector("[data-wechat-modal]");
const wechatCloseBtns = document.querySelectorAll("[data-wechat-close]");
const wechatQr = document.querySelector("[data-wechat-qr]");

const toggleWechatModal = function (forceOpen) {
  if (!wechatModal) return;

  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !wechatModal.classList.contains("active");

  if (shouldOpen) {
    wechatModal.hidden = false;
  }

  wechatModal.classList.toggle("active", shouldOpen);
  wechatModal.setAttribute("aria-hidden", String(!shouldOpen));

  if (!shouldOpen) {
    wechatModal.hidden = true;
  }
};

if (wechatOpenBtn) {
  wechatOpenBtn.addEventListener("click", function () { toggleWechatModal(true); });
}

for (let i = 0; i < wechatCloseBtns.length; i++) {
  wechatCloseBtns[i].addEventListener("click", function () { toggleWechatModal(false); });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && wechatModal && wechatModal.classList.contains("active")) {
    toggleWechatModal(false);
  }
});

if (wechatQr) {
  const markWechatQrMissing = function () {
    const qrBox = wechatQr.closest(".wechat-modal__qr");
    if (qrBox) qrBox.classList.add("is-missing");
  };

  wechatQr.addEventListener("error", markWechatQrMissing);

  if (wechatQr.complete && wechatQr.naturalWidth === 0) {
    markWechatQrMissing();
  }
}



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
