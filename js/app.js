(function () {
  'use strict';

  // --- Site Configuration (Future-Ready Architecture) ---
  const SITE_CONFIG = {
    domains: [
      {
        id: 'business-hub',
        icon: 'handshake',
        ar: { name: 'استشارات الأعمال', short: 'استشارات' },
        en: { name: 'Business Consulting', short: 'Consulting' },
        sections: ['home', 'about', 'business-hub', 'services', 'how-i-help', 'process', 'projects', 'skills', 'faq', 'testimonials', 'contact']
      },
      {
        id: 'arabic-academy',
        icon: 'menu_book',
        ar: { name: 'الأكاديمية العربية', short: 'تعليم' },
        en: { name: 'Arabic Academy', short: 'Education' },
        sections: ['home', 'about', 'arabic-academy', 'faq', 'testimonials', 'contact']
      },
      {
        id: 'ai-lab',
        icon: 'smart_toy',
        ar: { name: 'مختبر AI', short: 'تقنية' },
        en: { name: 'AI Lab', short: 'Technology' },
        sections: ['home', 'ai-lab', 'services', 'faq', 'contact']
      },
      {
        id: 'knowledge-center',
        icon: 'school',
        ar: { name: 'مركز المعرفة', short: 'معرفة' },
        en: { name: 'Knowledge Center', short: 'Knowledge' },
        sections: ['knowledge-center', 'faq', 'contact']
      }
    ],
    future: {
      booking: { enabled: false, label: { ar: 'نظام الحجوزات', en: 'Booking System' } },
      crm: { enabled: false, label: { ar: 'إدارة علاقات العملاء', en: 'CRM' } },
      studentPortal: { enabled: false, label: { ar: 'بوابة الطلاب', en: 'Student Portal' } },
      clientPortal: { enabled: false, label: { ar: 'بوابة العملاء', en: 'Client Portal' } },
      adminDashboard: { enabled: false, label: { ar: 'لوحة التحكم', en: 'Admin Dashboard' } },
      cms: { enabled: false, label: { ar: 'إدارة المحتوى', en: 'CMS' } },
      newsletter: { enabled: false, label: { ar: 'النشرة البريدية', en: 'Newsletter' } },
      payments: { enabled: false, label: { ar: 'الدفعات', en: 'Payments' } },
      aiChat: { enabled: false, label: { ar: 'المساعد الذكي', en: 'AI Chat' } }
    }
  };

  // --- Project Data ---
  const PROJECTS = [
    {
      id: 'rfp',
      icon: 'description',
      ar: {
        tags: ['المشتريات', 'قالب', 'توثيق'],
        title: 'قالب طلب عرض سعر (RFP)',
        brief: 'قالب احترافي متكامل لطلبات عروض الأسعار يشمل جميع الأقسام الفنية والتجارية ومعايير التقييم.',
        problem: 'تعاني فرق المشتريات من عدم وجود قالب موحد لطلبات العروض، مما يؤدي إلى تفاوت في جودة الردود وصعوبة المقارنة بين الموردين.',
        role: 'إعداد وتوحيد قالب RFP شامل لكافة فئات المشتريات.',
        solution: 'تصميم قالب RFP من 7 أقسام رئيسية: الشروط العامة، المواصفات الفنية، الشروط التجارية، معايير التقييم، جدول الكميات، شروط التعاقد، وجدول التسليم.',
        outputs: 'ملف Word قابل للتعديل، نسخة PDF جاهزة للطباعة، دليل استخدام للمبتدئين.',
        result: 'تقليل دورة إعداد RFP من 3 أسابيع إلى أسبوع واحد، وتحسين جودة ردود الموردين.',
        tools: ['Microsoft Word', 'Excel', 'PDF'],
        sector: 'عام (متعدد القطاعات)',
        file: null
      },
      en: {
        tags: ['PROCUREMENT', 'TEMPLATE', 'DOCUMENTATION'],
        title: 'RFP Template',
        brief: 'A comprehensive professional RFP template with technical, commercial, and evaluation sections.',
        problem: 'Procurement teams lack a standardized RFP template, leading to inconsistent supplier responses and difficult comparisons.',
        role: 'Develop and standardize a comprehensive RFP template.',
        solution: 'Designed a 7-section RFP template covering general terms, technical specs, commercial terms, evaluation criteria, BOQ, contract terms, and delivery schedule.',
        outputs: 'Editable Word file, print-ready PDF, user guide for beginners.',
        result: 'Reduced RFP preparation cycle from 3 weeks to 1 week, improved supplier response quality.',
        tools: ['Microsoft Word', 'Excel', 'PDF'],
        sector: 'General (Multi-sector)',
        file: null
      }
    },
    {
      id: 'scorecard',
      icon: 'assessment',
      ar: {
        tags: ['التقييم', 'الموردين'],
        title: 'بطاقة تقييم الموردين',
        brief: 'نموذج شامل لتقييم أداء الموردين بناءً على معايير كمية ونوعية متعددة.',
        problem: 'غياب نظام موحد لتقييم الموردين يؤدي إلى اعتماد قرارات الشراء على الخبرة الشخصية دون معايير موضوعية.',
        role: 'تصميم نظام تقييم كمي للموردين.',
        solution: 'بناء بطاقة تقييم بمعايير مرجحة تغطي 5 محاور رئيسية: الجودة (30%)، السعر (25%)، الالتزام بالتسليم (20%)، الاستجابة (15%)، خدمة ما بعد البيع (10%).',
        outputs: 'نموذج Excel تفاعلي مع تصنيف تلقائي، دليل تعبئة، قائمة توصيات.',
        result: 'تحسين موضوعية تقييم الموردين بنسبة 60% وتقليل مخاطر التعاقد مع موردين غير مؤهلين.',
        tools: ['Excel', 'VBA'],
        sector: 'الأدوية والرعاية الصحية',
        file: null
      },
      en: {
        tags: ['EVALUATION', 'SUPPLIERS'],
        title: 'Vendor Scorecard',
        brief: 'A comprehensive supplier evaluation model based on weighted quantitative and qualitative criteria.',
        problem: 'Lack of a standardized supplier evaluation system leads to purchase decisions based on personal experience without objective criteria.',
        role: 'Design a quantitative supplier evaluation system.',
        solution: 'Built a weighted scorecard covering 5 key axes: Quality (30%), Price (25%), Delivery Compliance (20%), Responsiveness (15%), After-sales Service (10%).',
        outputs: 'Interactive Excel model with auto-rating, fill guide, recommendation list.',
        result: 'Improved supplier evaluation objectivity by 60%, reduced risk of contracting unqualified suppliers.',
        tools: ['Excel', 'VBA'],
        sector: 'Pharmaceuticals & Healthcare',
        file: null
      }
    },
    {
      id: 'contract',
      icon: 'contract',
      ar: {
        tags: ['العقود', 'القانونية'],
        title: 'قالب عقد توريد',
        brief: 'مسودة عقد توريد متكاملة مع بنود أساسية قابلة للتعديل حسب طبيعة التعاقد.',
        problem: 'الحاجة إلى عقد توريد موحد يوازن بين حقوق الطرفين ويغطي جميع السيناريوهات التشغيلية.',
        role: 'إعداد مسودة عقد توريد شاملة.',
        solution: 'صياغة عقد من 15 بنداً يغطي: نطاق العمل، الأسعار والدفعات، التسليم والقبول، الضمانات، التعويضات، السرية، فض المنازعات.',
        outputs: 'مسودة عقد Word قابلة للتعديل، قائمة بنود اختيارية، مذكرة توضيحية.',
        result: 'تقليل وقت إعداد العقود بنسبة 50% وتوحيد الممارسة التعاقدية.',
        tools: ['Microsoft Word'],
        sector: 'عام',
        file: null
      },
      en: {
        tags: ['CONTRACTS', 'LEGAL'],
        title: 'Supply Contract Template',
        brief: 'A comprehensive supply contract draft with essential clauses adaptable to different engagement types.',
        problem: 'Need for a standardized supply contract that balances both parties\' rights and covers all operational scenarios.',
        role: 'Prepare a comprehensive supply contract draft.',
        solution: 'Drafted a 15-clause contract covering: scope of work, pricing and payments, delivery and acceptance, warranties, indemnities, confidentiality, dispute resolution.',
        outputs: 'Editable Word contract, optional clauses list, explanatory memo.',
        result: 'Reduced contract preparation time by 50%, standardized contracting practices.',
        tools: ['Microsoft Word'],
        sector: 'General',
        file: null
      }
    },
    {
      id: 'dashboard',
      icon: 'table_chart',
      ar: {
        tags: ['المخزون', 'لوحات البيانات', 'قريباً'],
        title: 'لوحة تحليل المخزون (Excel)',
        brief: 'لوحة بيانات تفاعلية لتحليل المخزون باستخدام تقنيات ABC/XYZ.',
        problem: 'صعوبة تتبع مستويات المخزون وتحديد العناصر بطيئة الحركة والمخزون الراكد.',
        role: 'تصميم لوحة تحكم تفاعلية للمخزون.',
        solution: 'تطوير لوحة Excel تجمع بيانات المخزون وتحللها بتقنيات ABC/XYZ مع رسوم بيانية ديناميكية.',
        outputs: 'ملف Excel مع لوحة تحكم، تقرير تحليلي، توصيات.',
        result: '— (قيد الإعداد)',
        tools: ['Excel', 'Power Query'],
        sector: 'قيد الإعداد',
        file: null,
        comingSoon: true
      },
      en: {
        tags: ['INVENTORY', 'DASHBOARD', 'COMING SOON'],
        title: 'Inventory Dashboard (Excel)',
        brief: 'An interactive inventory analysis dashboard using ABC/XYZ techniques.',
        problem: 'Difficulty tracking inventory levels and identifying slow-moving and dead stock items.',
        role: 'Design an interactive inventory control dashboard.',
        solution: 'Developed an Excel dashboard aggregating inventory data with ABC/XYZ analysis and dynamic charts.',
        outputs: 'Excel file with dashboard, analytical report, recommendations.',
        result: '— (In preparation)',
        tools: ['Excel', 'Power Query'],
        sector: 'In preparation',
        file: null,
        comingSoon: true
      }
    },
    {
      id: 'demand',
      icon: 'query_stats',
      ar: {
        tags: ['التخطيط', 'التنبؤ', 'قريباً'],
        title: 'نموذج تخطيط الطلب',
        brief: 'نموذج تنبؤ بالطلب باستخدام بيانات المبيعات التاريخية والاتجاهات الموسمية.',
        problem: 'الاعتماد على التخمين في تخطيط الطلب يؤدي إلى فائض أو عجز في المخزون.',
        role: 'بناء نموذج تنبؤ كمي للطلب.',
        solution: 'تطوير نموذج تنبؤ بتقنيات المتوسطات المتحركة والتجانس الأسي مع مراعاة الموسمية.',
        outputs: 'نموذج Excel، قالب بيانات، دليل استخدام.',
        result: '— (قيد الإعداد)',
        tools: ['Excel', 'Python'],
        sector: 'قيد الإعداد',
        file: null,
        comingSoon: true
      },
      en: {
        tags: ['PLANNING', 'FORECAST', 'COMING SOON'],
        title: 'Demand Planning Model',
        brief: 'A demand forecasting model using historical sales data and seasonal trends.',
        problem: 'Relying on guesswork for demand planning leads to inventory surplus or shortage.',
        role: 'Build a quantitative demand forecasting model.',
        solution: 'Developed a forecast model using moving averages and exponential smoothing with seasonality adjustments.',
        outputs: 'Excel model, data template, user guide.',
        result: '— (In preparation)',
        tools: ['Excel', 'Python'],
        sector: 'In preparation',
        file: null,
        comingSoon: true
      }
    }
  ];

  // --- Render Project Cards ---
  function renderProjects(lang) {
    const grid = document.getElementById('projectsGrid');
    const isAr = lang === 'ar';
    grid.innerHTML = '';
    PROJECTS.forEach((p, idx) => {
      const d = isAr ? p.ar : p.en;
      const animClass = idx % 3 === 0 ? 'float-animation' : idx % 3 === 1 ? 'float-animation-delayed' : 'float-animation';
      const hasFile = !!p.file && !p.comingSoon;
      const card = document.createElement('div');
      card.className = `project-card group glass-panel rounded-2xl overflow-hidden interactive-element ${animClass}`;
      card.innerHTML = `
        <div class="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
          <span class="material-symbols-outlined text-5xl text-primary/40">${escapeHtml(p.icon)}</span>
        </div>
        <div class="p-6">
          <div class="flex gap-1.5 mb-3 flex-wrap">
            ${d.tags.map(t => {
              const isSample = t.includes('قريباً') || t.includes('COMING SOON');
              return isSample
                ? `<span class="bg-amber-500/10 text-amber-400 text-[9px] label-style px-2 py-1 rounded border border-amber-500/20">${escapeHtml(t)}</span>`
                : `<span class="bg-primary/10 text-[9px] label-style px-2 py-1 rounded text-primary">${escapeHtml(t)}</span>`;
            }).join('')}
          </div>
          <h3 class="font-display text-lg mb-2 text-white group-hover:text-primary transition-colors" data-en="${escapeAttr(p.en.title)}" data-ar="${escapeAttr(p.ar.title)}">${escapeHtml(d.title)}</h3>
          <p class="font-body text-xs text-on-surface-variant mb-3" data-en="${escapeAttr(p.en.brief)}" data-ar="${escapeAttr(p.ar.brief)}">${escapeHtml(d.brief)}</p>
          ${p.comingSoon ? '' : `
          <div class="glass-panel p-3 rounded-xl mb-4 border border-secondary/20">
            <div class="label-style text-[10px] text-secondary" data-en="KEY RESULT" data-ar="النتيجة الرئيسية">${isAr ? 'النتيجة الرئيسية' : 'KEY RESULT'}</div>
            <p class="font-body text-sm text-white font-bold" data-en="${escapeAttr(p.en.result)}" data-ar="${escapeAttr(p.ar.result)}">${escapeHtml(d.result)}</p>
          </div>
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${d.tools.map(t => `<span class="bg-surface-container-high text-[9px] label-style px-2 py-0.5 rounded text-on-surface-variant">${escapeHtml(t)}</span>`).join('')}
          </div>
          `}
          <div class="flex gap-2">
            ${p.comingSoon ? `
            <button class="w-full glass-panel py-2.5 rounded-xl text-sm font-bold border border-white/10 text-on-surface-variant cursor-not-allowed" disabled data-en="Coming Soon" data-ar="قريباً">${isAr ? 'قريباً' : 'Coming Soon'}</button>
            ` : `
            <button class="flex-1 gradient-button py-2.5 rounded-xl text-sm font-bold text-white interactive-element preview-btn" data-project="${escapeAttr(p.id)}" data-en="Preview" data-ar="معاينة">${isAr ? 'معاينة' : 'Preview'}</button>
            <button class="flex-1 glass-panel py-2.5 rounded-xl text-sm font-bold border border-primary/40 text-primary hover:bg-primary/10 transition-all interactive-element download-btn ${hasFile ? '' : 'opacity-50 cursor-not-allowed'}" data-file="${escapeAttr(p.file || '')}" ${hasFile ? '' : 'disabled'} data-en="${hasFile ? 'Download' : 'Unavailable'}" data-ar="${hasFile ? 'تحميل' : 'غير متاح'}">${hasFile ? (isAr ? 'تحميل' : 'Download') : (isAr ? 'غير متاح' : 'Unavailable')}</button>
            `}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // --- XSS Defense: Escape dynamic content ---
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }

  // --- Modal Logic ---
  const modalOverlay = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function openModal(projectId) {
    const p = PROJECTS.find(x => x.id === projectId);
    if (!p) return;
    const isAr = htmlEl.lang === 'ar';
    const d = isAr ? p.ar : p.en;
    const toolsHtml = d.tools.map(t => `<span class="bg-surface-container-high text-[9px] label-style px-2 py-0.5 rounded text-on-surface-variant">${escapeHtml(t)}</span>`).join('');
    const tagsHtml = d.tags.filter(t => !t.includes('قريباً') && !t.includes('COMING SOON')).map(t => `<span class="bg-primary/10 text-[9px] label-style px-2 py-1 rounded text-primary">${escapeHtml(t)}</span>`).join('');
    modalBody.innerHTML = `
      <div class="flex items-center gap-3 mb-2">
        <span class="material-symbols-outlined text-primary text-2xl">${escapeHtml(p.icon)}</span>
        <div class="label-style text-[10px] text-primary">${escapeHtml(d.sector)}</div>
      </div>
      <h3 class="font-display text-2xl text-white mb-4" data-en="${escapeAttr(p.en.title)}" data-ar="${escapeAttr(p.ar.title)}">${escapeHtml(d.title)}</h3>
      <div class="flex gap-1.5 mb-4 flex-wrap">${tagsHtml}</div>
      <div class="space-y-4">
        <div>
          <div class="label-style text-[10px] text-secondary mb-1" data-en="PROBLEM" data-ar="المشكلة">${isAr ? 'المشكلة' : 'PROBLEM'}</div>
          <p class="font-body text-sm text-on-surface-variant" data-en="${escapeAttr(p.en.problem)}" data-ar="${escapeAttr(p.ar.problem)}">${escapeHtml(d.problem)}</p>
        </div>
        <div>
          <div class="label-style text-[10px] text-secondary mb-1" data-en="MY ROLE" data-ar="دوري">${isAr ? 'دوري' : 'MY ROLE'}</div>
          <p class="font-body text-sm text-on-surface-variant" data-en="${escapeAttr(p.en.role)}" data-ar="${escapeAttr(p.ar.role)}">${escapeHtml(d.role)}</p>
        </div>
        <div>
          <div class="label-style text-[10px] text-secondary mb-1" data-en="SOLUTION" data-ar="الحل">${isAr ? 'الحل' : 'SOLUTION'}</div>
          <p class="font-body text-sm text-on-surface-variant" data-en="${escapeAttr(p.en.solution)}" data-ar="${escapeAttr(p.ar.solution)}">${escapeHtml(d.solution)}</p>
        </div>
        <div>
          <div class="label-style text-[10px] text-secondary mb-1" data-en="OUTPUTS" data-ar="المخرجات">${isAr ? 'المخرجات' : 'OUTPUTS'}</div>
          <p class="font-body text-sm text-on-surface-variant" data-en="${escapeAttr(p.en.outputs)}" data-ar="${escapeAttr(p.ar.outputs)}">${escapeHtml(d.outputs)}</p>
        </div>
        <div class="glass-panel p-4 rounded-xl border border-secondary/20">
          <div class="label-style text-[10px] text-secondary mb-1" data-en="RESULT" data-ar="النتيجة">${isAr ? 'النتيجة' : 'RESULT'}</div>
          <p class="font-body text-sm text-white font-bold" data-en="${escapeAttr(p.en.result)}" data-ar="${escapeAttr(p.ar.result)}">${escapeHtml(d.result)}</p>
        </div>
        <div class="flex flex-wrap gap-2 pt-2">
          <div class="label-style text-[10px] text-on-surface-variant mr-2" data-en="TOOLS:" data-ar="الأدوات:">${isAr ? 'الأدوات:' : 'TOOLS:'}</div>
          ${toolsHtml}
        </div>
        <div class="pt-2 border-t border-white/5">
          <div class="label-style text-[9px] text-amber-400" data-en="⚠ Illustrative sample — not an actual client deliverable." data-ar="⚠ نموذج توضيحي — ليس تسليم فعلي لعميل.">⚠ نموذج توضيحي — ليس تسليم فعلي لعميل.</div>
        </div>
      </div>
    `;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // --- Delegate clicks for Preview/Download ---
  document.addEventListener('click', (e) => {
    const previewBtn = e.target.closest('.preview-btn');
    if (previewBtn) { openModal(previewBtn.dataset.project); return; }
    const dlBtn = e.target.closest('.download-btn');
    if (dlBtn && !dlBtn.disabled) {
      const file = dlBtn.dataset.file;
      if (file) {
        if (!isSafeUrl(file)) return;
        // Check if file exists via fetch, fallback to download
        fetch(file, { method: 'HEAD' }).then(r => {
          if (r.ok) window.location.href = file;
          else alert(isArabic() ? 'ملف التحميل غير متوفر حالياً.' : 'Download file not available yet.');
        }).catch(() => alert(isArabic() ? 'ملف التحميل غير متوفر حالياً.' : 'Download file not available yet.'));
      }
    }
  });

  // --- URL Safety: only allow same-origin relative file paths ---
  function isSafeUrl(value) {
    return typeof value === 'string' && value.length > 0 && !/^(javascript|data|vbscript):/i.test(value);
  }

  function isArabic() { return htmlEl.lang === 'ar'; }

  // --- Centralized Translations ---
  const LANG = {
    typewriterRoles: {
      ar: [
        "خبير مشتريات وسلاسل إمداد — أكثر من 18 سنة من الخبرة",
        "مدرس لغة عربية وقرآن وتجويد — عبر الإنترنت",
        "متخصص في الذكاء الاصطناعي والأتمتة — حلول مبتكرة"
      ],
      en: [
        "Procurement & Supply Chain Expert — 18+ Years of Experience",
        "Arabic, Quran & Tajweed Teacher — Online Lessons",
        "AI & Automation Specialist — Innovative Solutions"
      ]
    },
    heroSub: {
      ar: "أساعد الشركات والمتعلمين على تحقيق أهدافهم من خلال استشارات احترافية، تعليم متميز، وحلول ذكاء اصطناعي مبتكرة.",
      en: "Helping businesses and learners achieve their goals through professional consulting, distinguished education, and innovative AI solutions."
    },
    cta: {
      ar: { primary: "اطلب مكالمة مجانية", secondary: "استكشف المجالات" },
      en: { primary: "Book a Free Call", secondary: "Explore Brands" }
    }
  };

  // --- WebGL Shader ---
  const canvas = document.getElementById('shader-canvas');
  const gl = canvas.getContext('webgl');
  if (gl) {
    const vertexShaderSource = `
      attribute vec2 position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = position * 0.5 + 0.5;
        v_texCoord.y = 1.0 - v_texCoord.y;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;
    const fragmentShaderSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      void main() {
        vec2 uv = v_texCoord;
        vec2 m = u_mouse / u_resolution;
        float noise = sin(uv.x * 8.0 + u_time * 0.5) * cos(uv.y * 8.0 + u_time * 0.7);
        noise += sin(length(uv - m) * 10.0 - u_time * 2.0) * 0.2;
        vec3 color1 = vec3(1.0, 0.17, 0.47);
        vec3 color2 = vec3(0.5, 0.0, 1.0);
        vec3 color3 = vec3(0.0, 0.9, 1.0);
        vec3 finalColor = mix(color1, color2, uv.y + noise * 0.3);
        finalColor = mix(finalColor, color3, clamp(sin(u_time + length(uv-0.5)*5.0), 0.0, 1.0) * 0.1);
        float pulse = 0.5 + 0.5 * sin(u_time * 0.3);
        finalColor *= 0.4 + 0.2 * pulse;
        float vig = 1.0 - length(uv - 0.5) * 1.5;
        finalColor *= vig;
        gl_FragColor = vec4(finalColor, 0.35);
      }
    `;
    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }
    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; gl.viewport(0, 0, canvas.width, canvas.height); }
    window.addEventListener('resize', resize);
    resize();
    function render(time) {
      gl.uniform1f(timeLoc, time * 0.001);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform2f(mouseLoc, mouseX, mouseY);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  // --- Custom Cursor ---
  const cursor = document.getElementById('cursor');
  document.querySelectorAll('.interactive-element, a, button, .project-card, .glitch-hover').forEach(el => {
    el.addEventListener('mouseenter', () => cursor?.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor?.classList.remove('active'));
  });
  document.addEventListener('mousemove', (e) => {
    if (cursor) { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; }
  });

  const htmlEl = document.documentElement;

  // --- Typewriter (Multi-Role) ---
  const typewriterElement = document.getElementById('typewriter');
  let charIndex = 0, roleIndex = 0, isDeleting = false;
  let currentTexts = LANG.typewriterRoles.ar;
  let currentText = currentTexts[0];
  function type() {
    if (!isDeleting) {
      if (charIndex < currentText.length) {
        typewriterElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 60);
      } else {
        setTimeout(() => { isDeleting = true; type(); }, 2500);
      }
    } else {
      if (charIndex > 0) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 30);
      } else {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % currentTexts.length;
        currentText = currentTexts[roleIndex];
        setTimeout(type, 500);
      }
    }
  }
  type();
  renderProjects(htmlEl.lang);

  // --- Language Toggle ---
  const langToggle = document.getElementById('langToggle');

  function swapLanguage(isArabicLang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      if (isArabicLang) {
        const ar = el.getAttribute('data-ar');
        if (ar) el.textContent = ar;
      } else {
        const en = el.getAttribute('data-en');
        if (en) el.textContent = en;
      }
    });
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      if (isArabicLang) {
        const ar = el.getAttribute('data-ar-placeholder');
        if (ar) el.placeholder = ar;
      } else {
        const en = el.getAttribute('data-en-placeholder');
        if (en) el.placeholder = en;
      }
    });
    htmlEl.lang = isArabicLang ? 'ar' : 'en';
    htmlEl.dir = isArabicLang ? 'rtl' : 'ltr';
    langToggle.textContent = isArabicLang ? 'EN' : 'ع';
    // Restart typewriter with new language
    charIndex = 0; roleIndex = 0; isDeleting = false;
    typewriterElement.textContent = '';
    currentTexts = isArabicLang ? LANG.typewriterRoles.ar : LANG.typewriterRoles.en;
    currentText = currentTexts[0];
    type();
    // Update hero description
    const heroDesc = document.querySelector('#home p.font-body');
    if (heroDesc) heroDesc.textContent = isArabicLang ? LANG.heroSub.ar : LANG.heroSub.en;
    // Re-render project cards with new language
    renderProjects(isArabicLang ? 'ar' : 'en');
  }

  langToggle.addEventListener('click', () => {
    swapLanguage(htmlEl.lang !== 'ar');
  });

  document.getElementById('langToggleMobile')?.addEventListener('click', () => {
    swapLanguage(htmlEl.lang !== 'ar');
  });

  // --- Mobile Menu ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  mobileMenuBtn?.addEventListener('click', () => {
    mobileNav?.classList.toggle('hidden');
  });
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.add('hidden'));
  });

  // --- Reveal Animations ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-a');
      const icon = btn.querySelector('.faq-icon');
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
      document.querySelectorAll('.faq-a').forEach(a => { a.style.maxHeight = '0px'; });
      document.querySelectorAll('.faq-icon').forEach(i => { i.style.transform = 'rotate(0deg)'; });
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // --- Navbar Scroll ---
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
      nav.classList.add('bg-background/90', 'py-3', 'border-primary/20');
      nav.classList.remove('bg-background/20', 'py-4', 'border-white/5');
    } else {
      nav.classList.add('bg-background/20', 'py-4', 'border-white/5');
      nav.classList.remove('bg-background/90', 'py-3', 'border-primary/20');
    }
  });

  // --- Contact Form ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const isArLang = (htmlEl.lang || 'ar') === 'ar';
      const btn = this.querySelector('button[type="submit"]');
      const sendText = isArLang ? 'جارٍ الإرسال…' : 'Sending…';
      btn.disabled = true;
      btn.textContent = sendText;
      const originalText = isArLang ? 'إرسال الطلب' : 'Send Request';
      try {
        const formData = new FormData(this);
        const resp = await fetch(this.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (resp.ok) {
          btn.textContent = isArLang ? 'تم الإرسال ✓' : 'Sent ✓';
          btn.style.background = '#22c55e';
          this.reset();
        } else {
          const err = await resp.json().catch(() => null);
          throw new Error((err && err.errors && err.errors[0] && err.errors[0].message) || ('HTTP ' + resp.status));
        }
      } catch (err) {
        console.error('Form submission failed:', err);
        btn.textContent = isArLang ? 'تعذّر الإرسال، حاول مجدداً' : 'Failed, try again';
        btn.style.background = '#dc2626';
      }
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3500);
    });
  }

  // --- Brand scroll-to-top links (replaces inline onclick) ---
  document.querySelectorAll('[data-scroll-to]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-scroll-to');
      if (!target) return;
      const section = document.querySelector(target);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();