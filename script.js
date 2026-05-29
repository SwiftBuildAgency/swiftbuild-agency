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
const approachSteps = document.querySelectorAll(".approach-step");
const approachNumber = document.querySelector("[data-approach-number]");
const heroCanvas = document.querySelector("[data-hero-canvas]");
const depthEls = document.querySelectorAll("[data-depth]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  en: {
    metaTitle: "SwiftBuild | AI implementation for real workflows",
    metaDescription:
      "SwiftBuild implements practical AI workflows, internal tools and automation for support, documents, CRM follow-up and operations.",
    "nav.services": "Services",
    "nav.works": "Works",
    "nav.approach": "Approach",
    "nav.faq": "FAQ",
    "nav.cta": "Work with us",
    "hero.title": "AI workflows that actually get used.",
    "hero.copy":
      "We build AI into the real operating flow: inbox, CRM, documents, reporting and the human approvals that keep quality under control.",
    "hero.primary": "Get free workflow audit",
    "hero.secondary": "See work",
    "hero.showreel": "/ Implementation reel",
    "hero.showreelTitle": "From manual admin to controlled AI flow",
    "trust.kicker": "Built with real operators",
    "bottleneck.line1": "Teams spend too much time on repetitive admin.",
    "bottleneck.line2": "Leads slip away without consistent follow-up.",
    "bottleneck.line3": "Outdated workflows hurt customer experience.",
    "bottleneck.line4": "Scaling should not require more manual headcount.",
    "bottleneck.title": "Eliminate the bottlenecks that hold your team back.",
    "bottleneck.point1": "Support messages sit too long before anyone knows what matters.",
    "bottleneck.point2": "Documents and CRM updates depend on manual copy-paste.",
    "bottleneck.point3": "Reporting takes hours because the data lives in different places.",
    "services.kicker": "/ Our services",
    "services.title": "Automation solutions",
    "services.copy":
      "AI only matters when it removes work from the daily operating system of the company. These are the flows we implement.",
    "services.item1.title": "Workflow audit and AI roadmap",
    "services.item1.copy":
      "Map the manual work, choose the first workflow and define what success should look like.",
    "services.item2.title": "Internal AI tools",
    "services.item2.copy":
      "Dashboards, review views and action panels that make AI output usable for the team.",
    "services.item3.title": "Document and data workflows",
    "services.item3.copy":
      "Extract, compare and route information from documents without losing human control.",
    "services.item4.title": "CRM and follow-up automation",
    "services.item4.copy": "Summaries, next steps, reminders and updates so opportunities do not disappear.",
    "services.item5.title": "Operations reporting",
    "services.item5.copy":
      "Turn scattered operational data into clear summaries, deviation logs and decisions.",
    "works.kicker": "/ Case studies",
    "works.title": "Latest works",
    "works.cta": "Talk about your workflow",
    "works.case1.title": "Operations flow for orders, deviations and follow-up.",
    "works.case2.title": "Structured documentation and review for care workflows.",
    "works.metric1": "manual work identified",
    "works.metric2": "systems mapped",
    "works.metric3": "pilot workflow",
    "works.metric4": "review points",
    "works.metric5": "black box logic",
    "works.metric6": "human control",
    "approach.kicker": "/ Our approach",
    "approach.step1.title": "Discover",
    "approach.step1.copy":
      "We study the workflow as it really happens: inputs, systems, decisions, edge cases and who owns the result.",
    "approach.step2.title": "Plan",
    "approach.step2.copy":
      "We choose one narrow flow with available data, clear business value and a measurable outcome.",
    "approach.step3.title": "Build",
    "approach.step3.copy":
      "We connect tools, build the AI logic and create the internal interface people will actually use.",
    "approach.step4.title": "Scale",
    "approach.step4.copy":
      "We measure adoption, improve the flow and decide what should be automated next.",
    "proof.quote1":
      "The goal is not to launch AI. The goal is to remove repeated work without removing responsibility.",
    "proof.quote2":
      "Useful automation must show what it read, what it changed and where a human needs to approve.",
    "proof.quote3":
      "The best first project is the boring workflow that quietly steals time every week.",
    "proof.role1": "Data, control and automation",
    "proof.role2": "Registry and verification workflows",
    "proof.role3": "Customer flow and CRM operations",
    "difference.title": "The difference is clear",
    "difference.good1": "Real implementation in your systems",
    "difference.good2": "Human review and fallbacks where quality matters",
    "difference.good3": "Internal tools, not just prompts",
    "difference.good4": "Measured effect before scaling",
    "difference.good5": "Built around daily operations",
    "difference.other": "Other AI projects",
    "difference.bad1": "A demo that lives outside the workflow",
    "difference.bad2": "No owner for quality or exceptions",
    "difference.bad3": "Manual copy-paste remains",
    "difference.bad4": "Hard to measure if anyone uses it",
    "difference.bad5": "More tools instead of less work",
    "faq.title": "Questions before we start.",
    "faq.q1": "What happens in the first audit?",
    "faq.a1":
      "We find the workflow that wastes time, map the systems involved and define the first automation worth building.",
    "faq.q2": "Do we need to replace our existing tools?",
    "faq.a2": "Usually not. The strongest implementation connects AI to the systems your team already uses.",
    "faq.q3": "What do you actually build?",
    "faq.a3":
      "AI logic, automations, integrations, internal interfaces, logs and review routines around one workflow.",
    "faq.q4": "How fast can we see something concrete?",
    "faq.a4":
      "The first milestone is normally a small pilot scope, then a controlled build around that workflow.",
    "contact.kicker": "/ Work with us",
    "contact.title": "Tell us where manual work still slows the team down.",
    "contact.copy":
      "Send the workflow you want to fix first. We will reply with what should be automated, what should stay human and what a pilot could look like.",
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
    "nav.works": "Case",
    "nav.approach": "Metod",
    "nav.faq": "FAQ",
    "nav.cta": "Jobba med oss",
    "hero.title": "AI-flöden som faktiskt börjar användas.",
    "hero.copy":
      "Vi bygger in AI i det riktiga arbetsflödet: inbox, CRM, dokument, rapportering och mänskliga godkännanden som håller kvaliteten under kontroll.",
    "hero.primary": "Boka gratis workflow-audit",
    "hero.secondary": "Se case",
    "hero.showreel": "/ Implementationsvy",
    "hero.showreelTitle": "Från manuell admin till kontrollerat AI-flöde",
    "trust.kicker": "Byggt med riktiga verksamheter",
    "bottleneck.line1": "Team lägger för mycket tid på repetitiv admin.",
    "bottleneck.line2": "Leads tappas när uppföljningen inte sker.",
    "bottleneck.line3": "Gamla arbetsflöden skadar kundupplevelsen.",
    "bottleneck.line4": "Skalning ska inte kräva mer manuell bemanning.",
    "bottleneck.title": "Ta bort flaskhalsarna som bromsar teamet.",
    "bottleneck.point1": "Supportmeddelanden ligger för länge innan någon vet vad som är viktigt.",
    "bottleneck.point2": "Dokument och CRM-uppdateringar bygger på manuell copy-paste.",
    "bottleneck.point3": "Rapportering tar timmar eftersom data ligger på olika ställen.",
    "services.kicker": "/ Våra tjänster",
    "services.title": "Automationslösningar",
    "services.copy":
      "AI spelar bara roll när den tar bort arbete från företagets dagliga operativa system. Det här är flödena vi implementerar.",
    "services.item1.title": "Workflow-audit och AI-roadmap",
    "services.item1.copy":
      "Kartlägg manuellt arbete, välj första flödet och definiera hur framgång ska mätas.",
    "services.item2.title": "Interna AI-verktyg",
    "services.item2.copy":
      "Dashboards, granskningsvyer och action-paneler som gör AI-output användbart för teamet.",
    "services.item3.title": "Dokument- och dataflöden",
    "services.item3.copy":
      "Extrahera, jämför och routa information från dokument utan att tappa mänsklig kontroll.",
    "services.item4.title": "CRM- och uppföljningsautomation",
    "services.item4.copy":
      "Sammanfattningar, nästa steg, påminnelser och uppdateringar så möjligheter inte försvinner.",
    "services.item5.title": "Operationsrapportering",
    "services.item5.copy":
      "Gör utspridd operativ data till tydliga summeringar, avvikelser och beslut.",
    "works.kicker": "/ Case studies",
    "works.title": "Senaste arbeten",
    "works.cta": "Prata om ert flöde",
    "works.case1.title": "Operationsflöde för order, avvikelser och uppföljning.",
    "works.case2.title": "Strukturerad dokumentation och granskning för omsorgsflöden.",
    "works.metric1": "manuellt arbete hittat",
    "works.metric2": "system kartlagda",
    "works.metric3": "pilotflöde",
    "works.metric4": "granskningspunkter",
    "works.metric5": "black box-logik",
    "works.metric6": "mänsklig kontroll",
    "approach.kicker": "/ Vår metod",
    "approach.step1.title": "Discover",
    "approach.step1.copy":
      "Vi studerar flödet som det faktiskt sker: input, system, beslut, undantag och vem som äger resultatet.",
    "approach.step2.title": "Plan",
    "approach.step2.copy":
      "Vi väljer ett smalt flöde med tillgänglig data, tydligt affärsvärde och mätbar effekt.",
    "approach.step3.title": "Build",
    "approach.step3.copy":
      "Vi kopplar verktyg, bygger AI-logiken och skapar det interna gränssnittet människor faktiskt använder.",
    "approach.step4.title": "Scale",
    "approach.step4.copy":
      "Vi mäter användning, förbättrar flödet och väljer vad som ska automatiseras nästa gång.",
    "proof.quote1":
      "Målet är inte att lansera AI. Målet är att ta bort repetitivt arbete utan att ta bort ansvar.",
    "proof.quote2":
      "Användbar automation måste visa vad den läste, vad den ändrade och var en människa ska godkänna.",
    "proof.quote3":
      "Det bästa första projektet är ofta det tråkiga flödet som tyst stjäl tid varje vecka.",
    "proof.role1": "Data, kontroll och automation",
    "proof.role2": "Register- och verifieringsflöden",
    "proof.role3": "Kundflöde och CRM-operations",
    "difference.title": "Skillnaden är tydlig",
    "difference.good1": "Riktig implementation i era system",
    "difference.good2": "Mänsklig granskning och fallback där kvalitet spelar roll",
    "difference.good3": "Interna verktyg, inte bara prompts",
    "difference.good4": "Mätt effekt innan skalning",
    "difference.good5": "Byggt runt daglig operations",
    "difference.other": "Andra AI-projekt",
    "difference.bad1": "En demo som ligger utanför arbetsflödet",
    "difference.bad2": "Ingen äger kvalitet eller undantag",
    "difference.bad3": "Manuell copy-paste finns kvar",
    "difference.bad4": "Svårt att mäta om någon använder det",
    "difference.bad5": "Fler verktyg istället för mindre arbete",
    "faq.title": "Frågor innan vi börjar.",
    "faq.q1": "Vad händer i första auditen?",
    "faq.a1":
      "Vi hittar flödet som slösar tid, kartlägger systemen och definierar första automationen som är värd att bygga.",
    "faq.q2": "Måste vi byta befintliga verktyg?",
    "faq.a2": "Oftast inte. Den starkaste implementationen kopplar AI till systemen teamet redan använder.",
    "faq.q3": "Vad bygger ni konkret?",
    "faq.a3":
      "AI-logik, automationer, integrationer, interna gränssnitt, loggar och granskningsrutiner runt ett flöde.",
    "faq.q4": "Hur snabbt kan vi se något konkret?",
    "faq.a4": "Första milstolpen är oftast en liten pilotscope, sedan en kontrollerad build runt flödet.",
    "contact.kicker": "/ Jobba med oss",
    "contact.title": "Berätta var manuellt arbete fortfarande bromsar teamet.",
    "contact.copy":
      "Skicka flödet ni vill fixa först. Vi återkommer med vad som bör automatiseras, vad som ska fortsätta vara mänskligt och hur en pilot kan se ut.",
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

const translate = (key) => translations[currentLang]?.[key] ?? translations.en[key] ?? "";

const applyLanguage = (lang) => {
  currentLang = lang;
  setStoredLanguage(lang);
  document.documentElement.lang = lang;
  document.title = translate("metaTitle");
  metaDescription?.setAttribute("content", translate("metaDescription"));

  translatableEls.forEach((element) => {
    const value = translate(element.dataset.i18n);
    if (value) {
      element.textContent = value;
    }
  });

  placeholderEls.forEach((element) => {
    const value = translate(element.dataset.i18nPlaceholder);
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

  const tiltX = (x / window.innerWidth - 0.5) * 2;
  const tiltY = (y / window.innerHeight - 0.5) * 2;

  depthEls.forEach((element) => {
    const depth = Number(element.dataset.depth || 0);
    element.style.setProperty("--depth-x", `${(tiltX * depth).toFixed(2)}px`);
    element.style.setProperty("--depth-y", `${(tiltY * depth).toFixed(2)}px`);
  });
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
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 4) * 55}ms`);
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
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

const initApproach = () => {
  if (!approachSteps.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        approachSteps.forEach((step) => step.classList.toggle("is-active", step === entry.target));
        if (approachNumber) {
          approachNumber.textContent = entry.target.dataset.step || "1";
        }
      });
    },
    { rootMargin: "-38% 0px -38% 0px", threshold: 0.22 },
  );

  approachSteps.forEach((step) => observer.observe(step));
};

const startHeroCanvas = () => {
  if (!heroCanvas || prefersReducedMotion) {
    return;
  }

  const ctx = heroCanvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = 1;
  const pointer = {
    x: window.innerWidth * 0.72,
    y: window.innerHeight * 0.28,
    tx: window.innerWidth * 0.72,
    ty: window.innerHeight * 0.28,
  };

  const nodes = Array.from({ length: 52 }, (_, index) => ({
    x: ((index % 13) + Math.random() * 0.8) / 13,
    y: (Math.floor(index / 13) + Math.random() * 0.8) / 4.4,
    vx: (Math.random() - 0.5) * 0.00026,
    vy: (Math.random() - 0.5) * 0.0002,
    r: 1.1 + Math.random() * 2,
  }));

  const resize = () => {
    const rect = heroCanvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(rect.width, 1);
    height = Math.max(rect.height, 1);
    heroCanvas.width = Math.round(width * dpr);
    heroCanvas.height = Math.round(height * dpr);
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

    for (let i = 0; i < 6; i += 1) {
      const y = height * (0.16 + i * 0.14);
      ctx.beginPath();
      for (let x = -60; x <= width + 60; x += 32) {
        const wave =
          Math.sin(x * 0.006 + time * 0.00025 + i) * 18 +
          Math.cos((x - pointer.x) * 0.004 + i) * 5;
        if (x === -60) {
          ctx.moveTo(x, y + wave);
        } else {
          ctx.lineTo(x, y + wave);
        }
      }
      ctx.strokeStyle = `rgba(17, 17, 15, ${0.025 + i * 0.005})`;
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
          const alpha = (1 - distance / 150) * 0.07;
          ctx.strokeStyle = `rgba(17, 17, 15, ${alpha})`;
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
      ctx.fillStyle = `rgba(17, 17, 15, ${0.12 + influence * 0.16})`;
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
      submitLabel.textContent = translate("form.submit");
    }
  }
});

setPointerVars(window.innerWidth * 0.72, window.innerHeight * 0.28);
updateScrollState();
applyLanguage(currentLang);
initReveals();
initApproach();
startHeroCanvas();
