const root = document.documentElement;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const translatableEls = document.querySelectorAll("[data-i18n]");
const placeholderEls = document.querySelectorAll("[data-i18n-placeholder]");
const metaDescription = document.querySelector('meta[name="description"]');
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const revealEls = document.querySelectorAll(".reveal");
const ambientCanvas = document.querySelector("[data-ambient-canvas]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  en: {
    metaTitle: "SwiftBuild | AI implementation for real workflows",
    metaDescription:
      "SwiftBuild implements practical AI workflows, internal tools and automation for support, documents, CRM follow-up and operations.",
    "nav.services": "Services",
    "nav.method": "Method",
    "nav.proof": "Proof",
    "nav.faq": "FAQ",
    "nav.cta": "Work with us",
    "hero.title": "AI implementation for teams losing hours to manual admin.",
    "hero.preview": "/ Implementation preview",
    "hero.copy":
      "We connect inboxes, documents, CRM and internal systems so AI can sort work, draft replies, update records and show what needs human approval.",
    "hero.primary": "Book AI audit",
    "hero.secondary": "See method",
    "hero.trust": "Built with real operators",
    "clients.kicker": "/ Built with operators",
    "clients.copy": "Experience from logistics, care, registries, fintech and automotive retail.",
    "pain.repeat1": "Support waits in inboxes.",
    "pain.repeat2": "CRM updates happen too late.",
    "pain.repeat3": "Documents block decisions.",
    "pain.repeat4": "Reporting steals hours.",
    "pain.kicker": "/ The bottleneck",
    "pain.title":
      "AI does not fail because the model is weak. It fails because it is not built into the workflow.",
    "media.kicker": "/ Controlled implementation",
    "media.title": "The result is not a chatbot. It is an operating flow your team can trust.",
    "media.copy":
      "Every useful AI implementation needs the same foundation: connected data, a clear owner, visible decisions, fallback routines and a way to measure whether the team actually uses it.",
    "media.note1": "Input: messages, documents and CRM",
    "media.note2": "Output: reviewed actions and measured impact",
    "services.kicker": "/ Services",
    "services.title": "Practical AI systems for work people already do.",
    "services.copy":
      "No vague AI strategy decks. We build the flows that remove repeated work and create visible operational leverage.",
    "services.item1.title": "Support and inbox automation",
    "services.item1.copy":
      "Turn incoming messages into classified tickets, drafted replies and clear next actions.",
    "services.item2.title": "Internal AI tools",
    "services.item2.copy":
      "Build dashboards, forms and review views around the exact workflow your team uses.",
    "services.item3.title": "Document and data workflows",
    "services.item3.copy":
      "Extract details from files, compare them with rules and flag what needs review.",
    "services.item4.title": "CRM follow-up automation",
    "services.item4.copy":
      "Summarize leads, update records and trigger reminders before opportunities go cold.",
    "proof.kicker": "/ Proof",
    "proof.title": "Built close to operations, not as isolated demos.",
    "proof.label1": "/ Operations",
    "proof.case1": "Orders, deviations and delivery follow-up where speed matters.",
    "proof.label2": "/ Care",
    "proof.case2": "Structured documentation and follow-up in a regulated care environment.",
    "proof.label3": "/ Data",
    "proof.case3": "Data flows where traceability, control and automation matter.",
    "method.kicker": "/ Method",
    "method.title": "A simple implementation path: map, build, control, measure.",
    "method.copy":
      "We start with one painful workflow. Then we connect the systems, build the AI logic, add human review and measure whether the flow is actually used.",
    "method.step1.title": "Map the real workflow",
    "method.step1.copy":
      "Systems, inputs, handovers, decisions, exceptions and where time disappears.",
    "method.step2.title": "Build the narrow automation",
    "method.step2.copy": "One flow with clear input, output, owner and business result.",
    "method.step3.title": "Add control points",
    "method.step3.copy":
      "Logs, fallbacks and human approval where a wrong decision would cost too much.",
    "method.step4.title": "Measure adoption",
    "method.step4.copy":
      "Saved time, response speed, quality and whether the team keeps using it.",
    "compare.kicker": "/ Why it works",
    "compare.title": "The difference is implementation, not AI hype.",
    "compare.good1": "Connects to your existing systems",
    "compare.good2": "Builds workflows with logs and review",
    "compare.good3": "Measures real operational effect",
    "compare.other": "Generic AI projects",
    "compare.bad1": "Another chat or dashboard",
    "compare.bad2": "No owner for quality",
    "compare.bad3": "Demo works, daily workflow does not",
    "faq.title": "Questions before we start.",
    "faq.q1": "What happens first?",
    "faq.a1":
      "We identify one workflow where automation can remove repeated work or reduce missed follow-up.",
    "faq.q2": "Do we need to replace our systems?",
    "faq.a2": "Usually not. The goal is to connect AI to the tools your team already uses.",
    "faq.q3": "Can you build real internal tools?",
    "faq.a3":
      "Yes. We build interfaces, automations and AI logic around the workflow, not just prompts.",
    "contact.kicker": "/ Work with us",
    "contact.title": "Tell us what your team still does manually.",
    "contact.copy":
      "Send the workflow that costs time today. We will reply with what would be reasonable to automate first.",
    "form.name": "Name",
    "form.company": "Company",
    "form.email": "Email",
    "form.workflow": "Workflow",
    "form.workflowPlaceholder": "Example: support requests, document review, CRM follow-up...",
    "form.submit": "Send request",
    "footer.copy": "AI implementation for real operating workflows.",
  },
  sv: {
    metaTitle: "SwiftBuild | AI-implementation för riktiga arbetsflöden",
    metaDescription:
      "SwiftBuild implementerar praktiska AI-flöden, interna verktyg och automation för support, dokument, CRM-uppföljning och operations.",
    "nav.services": "Tjänster",
    "nav.method": "Metod",
    "nav.proof": "Bevis",
    "nav.faq": "FAQ",
    "nav.cta": "Jobba med oss",
    "hero.title": "AI-implementation för team som tappar timmar på manuell admin.",
    "hero.preview": "/ Implementationsvy",
    "hero.copy":
      "Vi kopplar inbox, dokument, CRM och interna system så AI kan sortera arbete, skriva svarsförslag, uppdatera poster och visa vad en människa behöver godkänna.",
    "hero.primary": "Boka AI-audit",
    "hero.secondary": "Se metoden",
    "hero.trust": "Byggt med riktiga verksamheter",
    "clients.kicker": "/ Byggt med verksamheter",
    "clients.copy": "Erfarenhet från logistik, omsorg, register, fintech och bilhandel.",
    "pain.repeat1": "Support fastnar i inboxen.",
    "pain.repeat2": "CRM uppdateras för sent.",
    "pain.repeat3": "Dokument stoppar beslut.",
    "pain.repeat4": "Rapportering tar timmar.",
    "pain.kicker": "/ Flaskhalsen",
    "pain.title":
      "AI misslyckas sällan för att modellen är svag. Den misslyckas när den inte byggs in i arbetsflödet.",
    "media.kicker": "/ Kontrollerad implementation",
    "media.title": "Resultatet är inte en chatbot. Det är ett arbetsflöde teamet kan lita på.",
    "media.copy":
      "Varje användbar AI-implementation behöver samma grund: kopplad data, tydligt ansvar, synliga beslut, fallback-rutiner och ett sätt att mäta om teamet faktiskt använder flödet.",
    "media.note1": "Input: meddelanden, dokument och CRM",
    "media.note2": "Output: granskade åtgärder och mätt effekt",
    "services.kicker": "/ Tjänster",
    "services.title": "Praktiska AI-system för arbetet människor redan gör.",
    "services.copy":
      "Inga vaga AI-strategier. Vi bygger flöden som tar bort återkommande arbete och skapar mätbar effekt i verksamheten.",
    "services.item1.title": "Support- och inboxautomation",
    "services.item1.copy":
      "Gör inkommande meddelanden till klassificerade ärenden, svarsförslag och tydliga nästa steg.",
    "services.item2.title": "Interna AI-verktyg",
    "services.item2.copy":
      "Bygg dashboards, formulär och granskningsvyer runt exakt det arbetsflöde teamet använder.",
    "services.item3.title": "Dokument- och dataflöden",
    "services.item3.copy":
      "Plocka ut detaljer ur filer, jämför mot regler och flagga det som kräver granskning.",
    "services.item4.title": "CRM- och uppföljningsautomation",
    "services.item4.copy":
      "Sammanfatta leads, uppdatera poster och trigga påminnelser innan möjligheter kallnar.",
    "proof.kicker": "/ Bevis",
    "proof.title": "Byggt nära verksamheter, inte som isolerade demos.",
    "proof.label1": "/ Operations",
    "proof.case1": "Order, avvikelser och leveransuppföljning där hastighet spelar roll.",
    "proof.label2": "/ Omsorg",
    "proof.case2": "Strukturerad dokumentation och uppföljning i en reglerad omsorgsmiljö.",
    "proof.label3": "/ Data",
    "proof.case3": "Dataflöden där spårbarhet, kontroll och automation spelar roll.",
    "method.kicker": "/ Metod",
    "method.title": "En enkel implementeringsväg: kartlägg, bygg, kontrollera, mät.",
    "method.copy":
      "Vi börjar med ett smärtsamt arbetsflöde. Sedan kopplar vi systemen, bygger AI-logiken, lägger in mänsklig granskning och mäter om flödet faktiskt används.",
    "method.step1.title": "Kartlägg det riktiga flödet",
    "method.step1.copy":
      "System, input, överlämningar, beslut, undantag och var tid försvinner.",
    "method.step2.title": "Bygg en smal automation",
    "method.step2.copy": "Ett flöde med tydlig input, output, ägare och verksamhetsnytta.",
    "method.step3.title": "Lägg in kontrollpunkter",
    "method.step3.copy":
      "Loggar, fallback och mänskligt godkännande där fel beslut skulle bli dyra.",
    "method.step4.title": "Mät användning",
    "method.step4.copy": "Sparad tid, svarshastighet, kvalitet och om teamet fortsätter använda det.",
    "compare.kicker": "/ Varför det fungerar",
    "compare.title": "Skillnaden är implementation, inte AI-hype.",
    "compare.good1": "Kopplar till era befintliga system",
    "compare.good2": "Bygger flöden med loggar och granskning",
    "compare.good3": "Mäter faktisk effekt i verksamheten",
    "compare.other": "Generiska AI-projekt",
    "compare.bad1": "Ännu en chatt eller dashboard",
    "compare.bad2": "Ingen äger kvaliteten",
    "compare.bad3": "Demot fungerar, vardagsflödet gör det inte",
    "faq.title": "Frågor innan vi börjar.",
    "faq.q1": "Vad händer först?",
    "faq.a1":
      "Vi identifierar ett arbetsflöde där automation kan ta bort återkommande arbete eller minska tappad uppföljning.",
    "faq.q2": "Måste vi byta system?",
    "faq.a2": "Oftast inte. Målet är att koppla AI till verktygen teamet redan använder.",
    "faq.q3": "Kan ni bygga riktiga interna verktyg?",
    "faq.a3":
      "Ja. Vi bygger gränssnitt, automationer och AI-logik runt arbetsflödet, inte bara prompts.",
    "contact.kicker": "/ Jobba med oss",
    "contact.title": "Berätta vad teamet fortfarande gör manuellt.",
    "contact.copy":
      "Skicka arbetsflödet som kostar tid idag. Vi återkommer med vad som är rimligt att automatisera först.",
    "form.name": "Namn",
    "form.company": "Företag",
    "form.email": "E-post",
    "form.workflow": "Arbetsflöde",
    "form.workflowPlaceholder": "Exempel: supportärenden, dokumentgranskning, CRM-uppföljning...",
    "form.submit": "Skicka förfrågan",
    "footer.copy": "AI-implementation för riktiga arbetsflöden.",
  },
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("swiftbuild-language");
  } catch {
    return null;
  }
};

const setStoredLanguage = (lang) => {
  try {
    localStorage.setItem("swiftbuild-language", lang);
  } catch {
    // Local file previews can block storage.
  }
};

let currentLang = ["en", "sv"].includes(getStoredLanguage()) ? getStoredLanguage() : "en";

const t = (key) => translations[currentLang]?.[key] ?? translations.en[key] ?? "";

const applyLanguage = (lang) => {
  currentLang = lang;
  setStoredLanguage(lang);
  document.documentElement.lang = lang;
  document.title = t("metaTitle");
  metaDescription?.setAttribute("content", t("metaDescription"));

  translatableEls.forEach((element) => {
    const value = t(element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  placeholderEls.forEach((element) => {
    const value = t(element.dataset.i18nPlaceholder);
    if (value) {
      element.setAttribute("placeholder", value);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  mobilePanel?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
};

const setPointerVars = (x, y) => {
  root.style.setProperty("--mx", `${Math.round(x)}px`);
  root.style.setProperty("--my", `${Math.round(y)}px`);
};

let scrollFrame = 0;

const updateScrollState = () => {
  scrollFrame = 0;
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

const requestScrollUpdate = () => {
  if (scrollFrame) {
    return;
  }
  scrollFrame = window.requestAnimationFrame(updateScrollState);
};

const initReveals = () => {
  if (!revealEls.length || prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  root.classList.add("reveal-ready");

  revealEls.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
      element.classList.add("is-visible");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.dataset.scrollState =
          entry.boundingClientRect.top < window.innerHeight * 0.5 ? "above" : "below";
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    { rootMargin: "-6% 0px -10% 0px", threshold: [0, 0.1, 0.26] },
  );

  revealEls.forEach((element) => observer.observe(element));
};

const startAmbientCanvas = () => {
  if (!ambientCanvas || prefersReducedMotion) {
    return;
  }

  const ctx = ambientCanvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = 1;
  const pointer = {
    x: window.innerWidth * 0.72,
    y: window.innerHeight * 0.28,
    tx: window.innerWidth * 0.72,
    ty: window.innerHeight * 0.28,
  };

  const nodes = Array.from({ length: 46 }, (_, index) => ({
    x: ((index % 12) + Math.random() * 0.8) / 12,
    y: (Math.floor(index / 12) + Math.random() * 0.7) / 4.2,
    vx: (Math.random() - 0.5) * 0.00026,
    vy: (Math.random() - 0.5) * 0.0002,
    r: 1.1 + Math.random() * 1.8,
  }));

  const resize = () => {
    const rect = ambientCanvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(rect.width, 1);
    height = Math.max(rect.height, 1);
    ambientCanvas.width = Math.round(width * dpr);
    ambientCanvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (time = 0) => {
    pointer.x += (pointer.tx - pointer.x) * 0.08;
    pointer.y += (pointer.ty - pointer.y) * 0.08;

    ctx.clearRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 360);
    glow.addColorStop(0, "rgba(255, 210, 109, 0.18)");
    glow.addColorStop(0.44, "rgba(189, 125, 17, 0.06)");
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 5; i += 1) {
      const y = height * (0.18 + i * 0.16);
      ctx.beginPath();
      for (let x = -60; x <= width + 60; x += 32) {
        const wave =
          Math.sin(x * 0.006 + time * 0.00028 + i) * 18 +
          Math.cos((x - pointer.x) * 0.004 + i) * 5;
        if (x === -60) {
          ctx.moveTo(x, y + wave);
        } else {
          ctx.lineTo(x, y + wave);
        }
      }
      ctx.strokeStyle = `rgba(13, 13, 11, ${0.028 + i * 0.006})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < -0.03 || node.x > 1.03) node.vx *= -1;
      if (node.y < -0.03 || node.y > 1.03) node.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];
      const ax = a.x * width;
      const ay = a.y * height;

      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const bx = b.x * width;
        const by = b.y * height;
        const distance = Math.hypot(ax - bx, ay - by);
        if (distance < 150) {
          const alpha = (1 - distance / 150) * 0.08;
          ctx.strokeStyle = `rgba(13, 13, 11, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((node) => {
      const x = node.x * width;
      const y = node.y * height;
      const distance = Math.min(Math.hypot(x - pointer.x, y - pointer.y), 260);
      const influence = 1 - distance / 260;
      ctx.fillStyle = `rgba(13, 13, 11, ${0.12 + influence * 0.16})`;
      ctx.beginPath();
      ctx.arc(x, y, node.r + influence * 3, 0, Math.PI * 2);
      ctx.fill();

      if (influence > 0.34) {
        ctx.strokeStyle = `rgba(255, 210, 109, ${influence * 0.42})`;
        ctx.beginPath();
        ctx.arc(x, y, node.r + 9 + Math.sin(time * 0.003) * 1.4, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    window.requestAnimationFrame(draw);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
    },
    { passive: true },
  );

  resize();
  window.addEventListener("resize", resize);
  window.requestAnimationFrame(draw);
};

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  document.body.classList.toggle("menu-open", willOpen);
  mobilePanel?.classList.toggle("is-open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
});

mobilePanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
  });
});

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate);
window.addEventListener(
  "pointermove",
  (event) => setPointerVars(event.clientX, event.clientY),
  { passive: true },
);

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const submitLabel = submitButton?.querySelector("[data-i18n]");
  const formData = new FormData(contactForm);

  if (formStatus) {
    formStatus.textContent =
      currentLang === "sv" ? "Skickar din förfrågan..." : "Sending your request...";
    formStatus.className = "form-status is-visible";
  }

  if (submitButton) {
    submitButton.disabled = true;
  }

  if (submitLabel) {
    submitLabel.textContent = currentLang === "sv" ? "Skickar..." : "Sending...";
  }

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    contactForm.reset();
    if (formStatus) {
      formStatus.textContent =
        currentLang === "sv"
          ? "Tack. Din förfrågan är skickad och vi återkommer snart."
          : "Thank you. Your request has been sent and we will get back to you soon.";
      formStatus.className = "form-status is-visible is-success";
    }
  } catch {
    if (formStatus) {
      formStatus.innerHTML =
        currentLang === "sv"
          ? 'Något gick fel. Maila oss direkt på <a href="mailto:info@swiftbuild.agency">info@swiftbuild.agency</a>.'
          : 'Something went wrong. Email us directly at <a href="mailto:info@swiftbuild.agency">info@swiftbuild.agency</a>.';
      formStatus.className = "form-status is-visible is-error";
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
    }
    if (submitLabel) {
      submitLabel.textContent = t("form.submit");
    }
  }
});

setPointerVars(window.innerWidth * 0.72, window.innerHeight * 0.28);
updateScrollState();
applyLanguage(currentLang);
initReveals();
startAmbientCanvas();
