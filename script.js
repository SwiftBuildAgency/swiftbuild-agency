const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const stickyCta = document.querySelector("[data-sticky-cta]");
const revealEls = document.querySelectorAll(".reveal");
const caseButtons = document.querySelectorAll("[data-case]");
const caseLabel = document.querySelector("[data-case-label]");
const caseTitle = document.querySelector("[data-case-title]");
const caseCopy = document.querySelector("[data-case-copy]");
const casePreview = document.querySelector(".case-preview");
const labInput = document.querySelector(".lab-input");
const labAi = document.querySelector(".lab-ai");
const labAction = document.querySelector(".lab-action");
const labScore = document.querySelector(".lab-panel strong");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const translatableEls = document.querySelectorAll("[data-i18n]");
const placeholderEls = document.querySelectorAll("[data-i18n-placeholder]");
const metaDescription = document.querySelector('meta[name="description"]');
const contactForm = document.querySelector("[data-contact-form]");
const journeySection = document.querySelector(".process-section");
const useCaseSection = document.querySelector(".use-case-section");
const journeySteps = document.querySelectorAll("[data-journey-step]");
const flowCanvas = document.querySelector("[data-flow-canvas]");
const depthEls = document.querySelectorAll("[data-depth]");
const root = document.documentElement;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  en: {
    metaTitle: "SwiftBuild | AI workflows that actually get used",
    metaDescription:
      "SwiftBuild implements AI workflows, internal tools and automation connected to your real systems and operating routines.",
    "nav.audit": "Kartläggning",
    "nav.useCases": "Use cases",
    "nav.process": "Process",
    "nav.proof": "Proof",
    "nav.cta": "Book workflow audit",
    "nav.mobileCta": "Book AI audit",
    "hero.kicker": "AI implementation studio",
    "hero.title": "We automate the admin work your team repeats every day.",
    "hero.lede":
      "SwiftBuild connects your inbox, CRM, documents and databases so AI can sort requests, draft replies, update systems and show what needs human review.",
    "hero.primaryCta": "Book an AI workflow audit",
    "hero.secondaryCta": "See the process",
    "workflow.header": "Workflow audit",
    "workflow.inputLabel": "Input",
    "workflow.input1.title": "Incoming emails",
    "workflow.input1.copy": "questions, orders and support requests",
    "workflow.input2.title": "Customer records",
    "workflow.input2.copy": "CRM status, history and open tasks",
    "workflow.input3.title": "Files and notes",
    "workflow.input3.copy": "PDFs, policies, forms and spreadsheets",
    "workflow.output1.title": "Reply drafted",
    "workflow.output1.copy": "AI suggests a response for review",
    "workflow.output2.title": "System updated",
    "workflow.output2.copy": "CRM, ticket or report gets the right data",
    "workflow.output3.title": "Owner notified",
    "workflow.output3.copy": "the next person knows what to do",
    "workflow.outputLabel": "Output",
    "workflow.engine.title": "AI orchestration",
    "workflow.engine.copy": "classify, reason, route",
    "workflow.engine.memory": "Memory",
    "workflow.engine.tools": "Tools",
    "workflow.metric1.value": "Less manual work",
    "workflow.metric1.label": "repeated steps are handled automatically",
    "workflow.metric2.value": "Clear approval",
    "workflow.metric2.label": "people stay in control of important decisions",
    "workflow.metric3.value": "Better follow-up",
    "workflow.metric3.label": "nothing disappears between systems",
    "clients.kicker": "Built with real operators",
    "clients.copy": "Experience from teams where workflows, data quality and follow-up have to work in the real world.",
    "clients.fruktkuriren": "Operations where orders, exceptions and delivery follow-up need to move fast.",
    "clients.omsorgskollen": "Structured documentation and follow-up in a regulated care environment.",
    "clients.trustledger": "Data workflows where control, traceability and automation matter.",
    "clients.familjehemsregistret": "Registry workflows with verification, search and internal admin needs.",
    "clients.stenmarkbil": "Customer journeys where CRM, admin and response time affect sales.",
    "audit.kicker": "Start where the friction lives",
    "audit.title": "We start by finding the manual work that costs you time every week.",
    "audit.copy":
      "Most companies do not need a random AI demo. They need one workflow fixed: support messages that pile up, documents that must be checked, CRM notes that never get updated or reports that take hours to prepare.",
    "audit.priority": "Priority",
    "audit.detected": "4 automation opportunities",
    "audit.detectedCopy": "We choose the one with clear pain, available data and a measurable business result.",
    "audit.row1.title": "Manual admin",
    "audit.row1.copy": "repetitive tasks people should not do by hand",
    "audit.row2.copy": "emails and tickets that need faster sorting",
    "audit.row3.title": "Reporting",
    "audit.row3.copy": "weekly summaries and deviation reports",
    "audit.row4.copy": "follow-up that happens before leads go cold",
    "problem.kicker": "The problem we solve",
    "problem.title": "AI fails when it is not connected to the messy work people already do.",
    "problem.map.quality": "Quality",
    "problem.item1.title": "The tools do not talk to each other",
    "problem.item1.copy":
      "Customer context, decisions and documents are spread across tools. The team spends time moving information instead of acting on it.",
    "problem.item2.title": "The team gets yet another system",
    "problem.item2.copy":
      "If AI lives in a separate chat or dashboard, people forget it. Useful AI has to show up inside the flow where the work already happens.",
    "problem.item3.title": "No one owns quality",
    "problem.item3.copy": "If no one can see what the AI saw, decided or changed, the team will not trust it when the stakes are real.",
    "usecases.kicker": "What we implement",
    "usecases.title": "Practical AI workflows that solve real company problems.",
    "usecases.asset1.title": "Automated operations desk",
    "usecases.asset1.copy": "A shared view for incoming work, open tasks, documents, approvals and reporting.",
    "usecases.asset2.title": "Internal tools people use",
    "usecases.asset2.copy": "Dashboards, forms and mobile views that sit close to the daily workflow.",
    "usecases.asset3.title": "Workflow components",
    "usecases.asset3.copy": "Approval cards, status views and action panels that make AI output usable.",
    "usecases.support.label": "Support automation",
    "usecases.support.title": "Turn incoming messages into prioritized tickets, draft replies and clear escalation paths.",
    "usecases.support.stack": "For teams drowning in inbox work and repeated questions.",
    "usecases.leads.label": "Lead operations",
    "usecases.leads.title": "Score leads, summarize needs and create the next follow-up before momentum disappears.",
    "usecases.leads.stack": "For sales teams that lose time between interest and action.",
    "usecases.documents.label": "Document workflows",
    "usecases.documents.title": "Extract important details, compare them with rules and flag what needs human review.",
    "usecases.documents.stack": "For document-heavy workflows where accuracy matters.",
    "usecases.reporting.label": "Reporting",
    "usecases.reporting.title": "Turn operational data into weekly summaries, deviation logs and decision-ready updates.",
    "usecases.reporting.stack": "For managers who need insight without manual reporting.",
    "usecases.flow.input": "Input",
    "usecases.flow.decision": "AI decision",
    "usecases.flow.action": "Action",
    "usecases.lab.confidence": "Confidence",
    "process.kicker": "Method",
    "process.title": "From mapping to measurable impact, without losing control.",
    "process.copy":
      "The goal is not to launch AI for its own sake. The goal is to make one important workflow faster, safer and easier to own, then use that proof to decide what to automate next.",
    "process.console.title": "Implementation pulse",
    "process.console.item1": "scope locked",
    "process.console.item2": "integration mapped",
    "process.console.item3": "adoption measured",
    "process.step1.title": "Workflow mapping",
    "process.step1.copy": "We leave with a map of the real workflow: systems, data sources, handovers, decision points and where time disappears.",
    "process.step2.title": "Pilot design",
    "process.step2.copy": "We choose one workflow slice with clear input, expected output, business value, owner and success metric.",
    "process.step3.title": "Implementation",
    "process.step3.copy": "We connect the systems, build the AI logic and create the internal view your team needs to use the workflow.",
    "process.step4.title": "Training & handover",
    "process.step4.copy": "Your team gets routines, documentation, review points and a simple way to improve the workflow after launch.",
    "process.step5.title": "Measurement",
    "process.step5.copy":
      "We track saved time, response speed, quality, adoption and whether the pilot is strong enough to expand.",
    "proof.title": "Built close to operations where details matter.",
    "proof.copy":
      "SwiftBuild has worked close to businesses with messy data, operational pressure and real users. That matters, because implementation is rarely about the model alone. It is about making the workflow fit the way people actually work.",
    "proof.verticals": "verticals",
    "proof.dot1": "ops",
    "proof.dot2": "care",
    "trust.kicker": "Controlled implementation",
    "trust.title": "Automation should remove busywork, not remove responsibility.",
    "trust.item1": "Human review where the cost of a wrong decision is too high.",
    "trust.item2": "Logs that show what the AI read, suggested and changed.",
    "trust.item3": "Fallback routines when data is missing, unclear or low confidence.",
    "trust.item4": "Documentation so the team can run and improve the workflow after delivery.",
    "faq.kicker": "FAQ",
    "faq.title": "Simple answers before we start.",
    "faq.q1": "What happens in an AI workflow audit?",
    "faq.a1": "We look at where your team loses time, choose one workflow to improve and define exactly what AI should do.",
    "faq.q2": "Do we need to replace our systems?",
    "faq.a2": "Usually not. The point is to connect AI and automation to your existing tools where possible.",
    "faq.q3": "What do we need before starting?",
    "faq.a3":
      "A workflow worth improving, access to the relevant systems or exports, and someone who understands how the work is done today.",
    "faq.q4": "How quickly can we see something concrete?",
    "faq.a4": "Usually the first step is a small pilot around one workflow, so you can see whether it saves time before expanding.",
    "contact.kicker": "Next step",
    "contact.title": "Book an AI workflow audit.",
    "contact.copy":
      "Tell us what your team still does manually: support sorting, CRM follow-up, document review, reporting or internal admin. We will suggest the first workflow worth automating.",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.company": "Company",
    "form.companyPlaceholder": "Company",
    "form.email": "Email",
    "form.emailPlaceholder": "name@company.com",
    "form.workflow": "Which workflow should we look at first?",
    "form.workflowPlaceholder": "Example: support requests, CRM follow-up, document review, reporting or internal admin...",
    "form.submit": "Send audit request",
    "footer.copy": "AI workflows, internal tools and automation for real operating workflows.",
  },
  sv: {
    metaTitle: "SwiftBuild | AI-flöden som faktiskt börjar användas",
    metaDescription:
      "SwiftBuild implementerar AI-flöden, interna verktyg och automationer som kopplas till era riktiga system och processer.",
    "nav.audit": "Audit",
    "nav.useCases": "Lösningar",
    "nav.process": "Process",
    "nav.proof": "Bevis",
    "nav.cta": "Boka AI-audit",
    "nav.mobileCta": "Boka AI-audit",
    "hero.kicker": "AI-implementationsstudio",
    "hero.title": "Vi automatiserar adminjobbet som teamet gör om och om igen.",
    "hero.lede":
      "SwiftBuild kopplar ihop inbox, CRM, dokument och databaser så AI kan sortera ärenden, skriva svarsförslag, uppdatera system och visa vad en människa behöver granska.",
    "hero.primaryCta": "Boka en AI-audit",
    "hero.secondaryCta": "Se processen",
    "workflow.header": "AI-audit",
    "workflow.inputLabel": "In",
    "workflow.input1.title": "Inkommande mail",
    "workflow.input1.copy": "frågor, beställningar och supportärenden",
    "workflow.input2.title": "Kundposter",
    "workflow.input2.copy": "CRM-status, historik och öppna uppgifter",
    "workflow.input3.title": "Filer och anteckningar",
    "workflow.input3.copy": "PDF:er, rutiner, formulär och kalkylark",
    "workflow.output1.title": "Svarsförslag",
    "workflow.output1.copy": "AI föreslår ett svar för granskning",
    "workflow.output2.title": "System uppdaterat",
    "workflow.output2.copy": "CRM, ärende eller rapport får rätt data",
    "workflow.output3.title": "Ansvarig notifieras",
    "workflow.output3.copy": "nästa person vet vad som ska göras",
    "workflow.outputLabel": "Ut",
    "workflow.engine.title": "AI-orkestrering",
    "workflow.engine.copy": "klassificera, resonera, routa",
    "workflow.engine.memory": "Minne",
    "workflow.engine.tools": "Verktyg",
    "workflow.metric1.value": "Mindre manuellt",
    "workflow.metric1.label": "återkommande steg hanteras automatiskt",
    "workflow.metric2.value": "Tydligt godkännande",
    "workflow.metric2.label": "människor styr viktiga beslut",
    "workflow.metric3.value": "Bättre uppföljning",
    "workflow.metric3.label": "inget tappas mellan systemen",
    "clients.kicker": "Byggt med riktiga verksamheter",
    "clients.copy": "Erfarenhet från team där arbetsflöden, datakvalitet och uppföljning måste fungera i verkligheten.",
    "clients.fruktkuriren": "Operations där order, avvikelser och uppföljning behöver gå snabbt.",
    "clients.omsorgskollen": "Struktur, dokumentation och uppföljning i en reglerad omsorgsmiljö.",
    "clients.trustledger": "Dataflöden där kontroll, spårbarhet och automation spelar roll.",
    "clients.familjehemsregistret": "Registerflöden med verifiering, sök och interna adminbehov.",
    "clients.stenmarkbil": "Kundresor där CRM, admin och svarstid påverkar försäljningen.",
    "audit.kicker": "Börja där friktionen finns",
    "audit.title": "Vi börjar med att hitta det manuella arbete som kostar tid varje vecka.",
    "audit.copy":
      "De flesta företag behöver inte ännu en AI-demo. De behöver få ett konkret flöde fixat: support som växer, dokument som måste kontrolleras, CRM som inte uppdateras eller rapporter som tar timmar.",
    "audit.priority": "Prioritering",
    "audit.detected": "4 arbetsflöden hittade",
    "audit.detectedCopy": "Vi väljer flödet med tydlig smärta, tillgänglig data och en effekt som går att mäta.",
    "audit.row1.title": "Manuell admin",
    "audit.row1.copy": "repetitiva uppgifter människor inte borde göra för hand",
    "audit.row2.copy": "mail och ärenden som behöver sorteras snabbare",
    "audit.row3.title": "Rapportering",
    "audit.row3.copy": "veckosummeringar och avvikelserapporter",
    "audit.row4.copy": "uppföljning innan leads hinner kallna",
    "problem.kicker": "Problemet vi löser",
    "problem.title": "AI misslyckas när den inte kopplas till det röriga arbetet som redan sker.",
    "problem.map.quality": "Kvalitet",
    "problem.item1.title": "Verktygen pratar inte med varandra",
    "problem.item1.copy":
      "Kundkontext, beslut och dokument ligger utspritt. Teamet lägger tid på att flytta information istället för att agera på den.",
    "problem.item2.title": "Teamet får ännu ett system",
    "problem.item2.copy": "När AI blir ännu en chatt eller dashboard glöms den bort. Den måste dyka upp där arbetet redan sker.",
    "problem.item3.title": "Ingen äger kvaliteten",
    "problem.item3.copy": "Om ingen kan se vad AI:n läste, föreslog eller ändrade kommer teamet inte lita på den när det gäller.",
    "usecases.kicker": "Det vi implementerar",
    "usecases.title": "Praktiska AI-flöden som löser riktiga företagsproblem.",
    "usecases.asset1.title": "Automatiserad operationsvy",
    "usecases.asset1.copy": "En gemensam vy för inkommande arbete, öppna uppgifter, dokument, godkännanden och rapportering.",
    "usecases.asset2.title": "Interna verktyg som används",
    "usecases.asset2.copy": "Dashboards, formulär och mobilvyer som ligger nära det dagliga arbetet.",
    "usecases.asset3.title": "Workflow-komponenter",
    "usecases.asset3.copy": "Godkännanden, statusvyer och åtgärdspaneler som gör AI-output användbart.",
    "usecases.support.label": "Supportautomation",
    "usecases.support.title": "Gör inkommande meddelanden till prioriterade ärenden, svarsförslag och tydliga eskaleringar.",
    "usecases.support.stack": "För team som drunknar i inbox och återkommande frågor.",
    "usecases.leads.label": "Leadflöden",
    "usecases.leads.title": "Poängsätt leads, sammanfatta behov och skapa nästa uppföljning innan momentum försvinner.",
    "usecases.leads.stack": "För säljteam som tappar tid mellan intresse och action.",
    "usecases.documents.label": "Dokumentflöden",
    "usecases.documents.title": "Plocka ut viktiga detaljer, jämför mot regler och flagga det som kräver mänsklig granskning.",
    "usecases.documents.stack": "För dokumenttunga flöden där noggrannhet är viktigt.",
    "usecases.reporting.label": "Rapportering",
    "usecases.reporting.title": "Gör operativ data till veckosummeringar, avvikelselogg och beslutsunderlag.",
    "usecases.reporting.stack": "För ledare som behöver insikt utan manuell rapportering.",
    "usecases.flow.input": "In",
    "usecases.flow.decision": "AI-beslut",
    "usecases.flow.action": "Åtgärd",
    "usecases.lab.confidence": "Säkerhet",
    "process.kicker": "Metod",
    "process.title": "Från kartläggning till mätbar effekt, utan att tappa kontrollen.",
    "process.copy":
      "Målet är inte att lansera AI för sakens skull. Målet är att göra ett viktigt arbetsflöde snabbare, tryggare och enklare att äga, och sedan använda beviset för att välja nästa flöde.",
    "process.console.title": "Implementeringspuls",
    "process.console.item1": "piloten avgränsad",
    "process.console.item2": "integration kartlagd",
    "process.console.item3": "användning mätt",
    "process.step1.title": "Kartläggning av arbetsflöde",
    "process.step1.copy": "Vi lämnar med en karta över det riktiga flödet: system, datakällor, överlämningar, beslutspunkter och var tid försvinner.",
    "process.step2.title": "Pilotdesign",
    "process.step2.copy": "Vi väljer en smal del av flödet med tydlig input, output, affärsvärde, ägare och mätpunkt.",
    "process.step3.title": "Implementering",
    "process.step3.copy": "Vi kopplar systemen, bygger AI-logiken och skapar den interna vy som teamet behöver för att använda flödet.",
    "process.step4.title": "Träning och överlämning",
    "process.step4.copy": "Teamet får rutiner, dokumentation, granskningspunkter och ett enkelt sätt att förbättra flödet efter lansering.",
    "process.step5.title": "Mätning",
    "process.step5.copy": "Vi följer sparad tid, svarshastighet, kvalitet, adoption och om piloten är stark nog att skala.",
    "proof.title": "Byggt nära verksamheter där detaljerna spelar roll.",
    "proof.copy":
      "SwiftBuild har arbetat nära verksamheter med rörig data, operativ press och riktiga användare. Det spelar roll, för implementation handlar sällan bara om modellen. Det handlar om att få flödet att passa hur människor faktiskt arbetar.",
    "proof.verticals": "branscher",
    "proof.dot1": "ops",
    "proof.dot2": "omsorg",
    "trust.kicker": "Trygg implementation",
    "trust.title": "Automation ska ta bort busywork, inte ta bort ansvar.",
    "trust.item1": "Mänsklig granskning där kostnaden för fel beslut är för hög.",
    "trust.item2": "Loggar som visar vad AI:n läste, föreslog och ändrade.",
    "trust.item3": "Fallback-rutiner när data saknas, är otydlig eller har låg säkerhet.",
    "trust.item4": "Dokumentation så teamet kan driva och förbättra flödet efter leverans.",
    "faq.kicker": "Vanliga frågor",
    "faq.title": "Enkla svar innan vi börjar.",
    "faq.q1": "Vad händer i en AI-audit?",
    "faq.a1": "Vi tittar på var teamet tappar tid, väljer ett flöde att förbättra och definierar exakt vad AI ska göra.",
    "faq.q2": "Måste vi byta system?",
    "faq.a2": "Oftast inte. Poängen är att koppla AI och automation till era befintliga verktyg där det är möjligt.",
    "faq.q3": "Vad behöver vi ha på plats innan vi börjar?",
    "faq.a3": "Ett arbetsflöde som är värt att förbättra, tillgång till relevanta system eller exporter och någon som förstår hur arbetet görs idag.",
    "faq.q4": "Hur snabbt kan vi se något konkret?",
    "faq.a4": "Oftast börjar vi med en liten pilot runt ett flöde, så ni ser om det sparar tid innan vi bygger vidare.",
    "contact.kicker": "Nästa steg",
    "contact.title": "Boka en AI-audit.",
    "contact.copy":
      "Berätta vad teamet fortfarande gör manuellt: supportsortering, CRM-uppföljning, dokumentgranskning, rapportering eller intern admin. Vi föreslår första flödet som är värt att automatisera.",
    "form.name": "Namn",
    "form.namePlaceholder": "Ditt namn",
    "form.company": "Företag",
    "form.companyPlaceholder": "Företag",
    "form.email": "E-post",
    "form.emailPlaceholder": "namn@foretag.se",
    "form.workflow": "Vilket arbetsflöde ska vi titta på först?",
    "form.workflowPlaceholder": "Exempel: supportärenden, CRM-uppföljning, dokumentgranskning, rapportering eller intern admin...",
    "form.submit": "Skicka audit-förfrågan",
    "footer.copy": "AI-flöden, interna verktyg och automationer för riktiga arbetsflöden.",
  },
};

const caseContent = {
  en: {
    support: {
      label: "Support automation",
      title: "From messy inbox to prioritized tickets.",
      copy:
        "The AI reads incoming messages, matches them against routines, drafts replies and creates a clear ticket for the team.",
      lab: ["Inbox", "AI-prioritet", "CRM-uppdatering", "92%"],
    },
    leads: {
      label: "Lead operations",
      title: "From loose leads to follow-up that actually happens.",
      copy:
        "The flow qualifies leads, summarizes the company need and creates the next step in CRM or calendar.",
      lab: ["Lead", "Matchning", "Uppföljning", "88%"],
    },
    documents: {
      label: "Document workflows",
      title: "From document chaos to controlled handling.",
      copy:
        "The AI extracts key data, compares it with rules and flags what a human needs to review.",
      lab: ["PDF", "Extraktion", "Granskning", "94%"],
    },
    reporting: {
      label: "Reporting",
      title: "From manual summaries to living insight.",
      copy:
        "The system fetches data, summarizes deviations and sends a clear report to the right people.",
      lab: ["Data", "Analys", "Rapport", "91%"],
    },
  },
  sv: {
    support: {
      label: "Supportautomation",
      title: "Från ostrukturerad inbox till prioriterade ärenden.",
      copy:
        "AI:n läser inkommande meddelanden, matchar mot rutiner, föreslår svar och skapar ett tydligt ärende för teamet.",
      lab: ["Inbox", "AI triage", "CRM update", "92%"],
    },
    leads: {
      label: "Lead operations",
      title: "Från lösa leads till uppföljning som faktiskt sker.",
      copy:
        "Flödet kvalificerar leads, sammanfattar bolagets behov och skapar nästa steg i CRM eller kalender.",
      lab: ["Lead", "Fit score", "Follow-up", "88%"],
    },
    documents: {
      label: "Dokumentflöden",
      title: "Från dokumentkaos till kontrollerad handläggning.",
      copy:
        "AI:n extraherar nyckeldata, jämför mot regler och flaggar vad en människa behöver granska.",
      lab: ["PDF", "Extract", "Review", "94%"],
    },
    reporting: {
      label: "Rapportering",
      title: "Från manuella sammanställningar till levande insikt.",
      copy:
        "Systemet hämtar data, summerar avvikelser och skickar en tydlig rapport till rätt personer.",
      lab: ["Data", "Detect", "Report", "91%"],
    },
  },
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("swiftbuild-lang");
  } catch {
    return null;
  }
};

const setStoredLanguage = (lang) => {
  try {
    localStorage.setItem("swiftbuild-lang", lang);
  } catch {
    // file:// previews can block storage. The language switch still works for the current page view.
  }
};

const storedLanguage = getStoredLanguage();
let currentLang = ["en", "sv"].includes(storedLanguage) ? storedLanguage : "en";

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const pointer = {
  x: window.innerWidth * 0.72,
  y: window.innerHeight * 0.28,
  tx: window.innerWidth * 0.72,
  ty: window.innerHeight * 0.28,
};

const setPointerVars = (x, y) => {
  pointer.tx = x;
  pointer.ty = y;
  root.style.setProperty("--mx", `${Math.round(x)}px`);
  root.style.setProperty("--my", `${Math.round(y)}px`);

  const tiltX = ((x / window.innerWidth) - 0.5) * 2;
  const tiltY = ((y / window.innerHeight) - 0.5) * 2;
  root.style.setProperty("--tilt-rx", `${(-tiltY * 0.55).toFixed(3)}deg`);
  root.style.setProperty("--tilt-ry", `${(tiltX * 0.65).toFixed(3)}deg`);

  depthEls.forEach((element) => {
    const depth = Number(element.dataset.depth || 0);
    element.style.setProperty("--depth-x", `${(tiltX * depth).toFixed(2)}px`);
    element.style.setProperty("--depth-y", `${(tiltY * depth).toFixed(2)}px`);
  });
};

const setHeaderState = () => {
  const isScrolled = window.scrollY > 16;
  header.classList.toggle("is-scrolled", isScrolled);
  stickyCta.classList.toggle("is-visible", window.scrollY > 560);
};

const getElementProgress = (element, startOffset = 0.72, endOffset = 0.28) => {
  if (!element) {
    return 0;
  }

  const rect = element.getBoundingClientRect();
  const start = window.innerHeight * startOffset;
  const end = -rect.height + window.innerHeight * endOffset;
  return clamp((start - rect.top) / (start - end));
};

let animationFrame = 0;

const setScrollEffects = () => {
  animationFrame = 0;
  setHeaderState();

  const heroProgress = clamp(window.scrollY / Math.max(window.innerHeight * 0.85, 1));
  const processProgress = getElementProgress(journeySection, 0.72, 0.36);
  const useCaseProgress = getElementProgress(useCaseSection, 0.78, 0.34);
  const processPercent = `${(processProgress * 100).toFixed(2)}%`;

  root.style.setProperty("--hero-scroll", heroProgress.toFixed(4));
  root.style.setProperty("--hero-stage-y", `${(heroProgress * 24).toFixed(2)}px`);
  root.style.setProperty("--hero-stage-scale", (1 - heroProgress * 0.025).toFixed(4));
  root.style.setProperty("--hero-console-y", `${(heroProgress * -18).toFixed(2)}px`);
  root.style.setProperty("--hero-console-rotate", `${(heroProgress * -0.65).toFixed(3)}deg`);
  root.style.setProperty("--hero-shine-x", `${(heroProgress * 220).toFixed(2)}px`);
  root.style.setProperty("--hero-image-x", `${(heroProgress * 18).toFixed(2)}px`);
  root.style.setProperty("--hero-image-y", `${(heroProgress * -22).toFixed(2)}px`);
  root.style.setProperty("--hero-image-rotate", `${(-3 + heroProgress * 2).toFixed(3)}deg`);
  root.style.setProperty("--signal-shift", `${(heroProgress * -10).toFixed(2)}px`);
  root.style.setProperty("--map-x", `${(heroProgress * -22).toFixed(2)}px`);
  root.style.setProperty("--map-y", `${(heroProgress * 16).toFixed(2)}px`);
  root.style.setProperty("--process-progress", processProgress.toFixed(4));
  root.style.setProperty("--process-progress-width", processPercent);
  root.style.setProperty("--use-case-shift", useCaseProgress.toFixed(4));
  root.style.setProperty("--use-case-image-y", `${(useCaseProgress * -18).toFixed(2)}px`);
  root.style.setProperty("--use-case-image-scale", (1.02 + useCaseProgress * 0.015).toFixed(4));
};

const queueScrollEffects = () => {
  if (animationFrame) {
    return;
  }

  animationFrame = window.requestAnimationFrame(setScrollEffects);
};

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  mobilePanel.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
};

const getTranslation = (lang, key) => translations[lang]?.[key] ?? translations.en[key] ?? "";

const updateCasePreview = (button, animate = true) => {
  const content = caseContent[currentLang]?.[button.dataset.case] ?? caseContent.en[button.dataset.case];
  if (!content) {
    return;
  }

  caseButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  caseLabel.textContent = content.label;
  caseTitle.textContent = content.title;
  caseCopy.textContent = content.copy;
  [labInput.textContent, labAi.textContent, labAction.textContent, labScore.textContent] = content.lab;

  if (animate && casePreview?.animate) {
    casePreview.animate(
      [
        { opacity: 0.74, transform: "translateY(8px) scale(0.99)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ],
      { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
  }
};

const applyLanguage = (lang) => {
  currentLang = lang;
  setStoredLanguage(lang);
  document.documentElement.lang = lang;
  document.title = getTranslation(lang, "metaTitle");
  metaDescription?.setAttribute("content", getTranslation(lang, "metaDescription"));

  translatableEls.forEach((element) => {
    const text = getTranslation(lang, element.dataset.i18n);
    if (text) {
      element.textContent = text;
    }
  });

  placeholderEls.forEach((element) => {
    const text = getTranslation(lang, element.dataset.i18nPlaceholder);
    if (text) {
      element.setAttribute("placeholder", text);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const activeCase = document.querySelector(".use-case-row.is-active") ?? caseButtons[0];
  if (activeCase) {
    updateCasePreview(activeCase, false);
  }
};

window.addEventListener("scroll", queueScrollEffects, { passive: true });
window.addEventListener("resize", queueScrollEffects);
window.addEventListener(
  "pointermove",
  (event) => {
    setPointerVars(event.clientX, event.clientY);
  },
  { passive: true },
);
setPointerVars(pointer.x, pointer.y);
setScrollEffects();
applyLanguage(currentLang);

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("menu-open", !isOpen);
  mobilePanel.classList.toggle("is-open", !isOpen);
  menuButton.setAttribute("aria-expanded", String(!isOpen));
});

mobilePanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const company = String(data.get("company") || "").trim();
  const email = String(data.get("email") || "").trim();
  const workflow = String(data.get("workflow") || "").trim();
  const subject = `AI workflow audit${company ? ` - ${company}` : ""}`;
  const body = [
    "Hi SwiftBuild,",
    "",
    "I would like to book an AI workflow audit.",
    "",
    `Name: ${name || "-"}`,
    `Company: ${company || "-"}`,
    `Email: ${email || "-"}`,
    "",
    "Workflow to review:",
    workflow || "-",
  ].join("\n");

  window.location.href = `mailto:info@swiftbuild.agency?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

if ("IntersectionObserver" in window) {
  root.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
  );

  revealEls.forEach((element) => observer.observe(element));
} else {
  revealEls.forEach((element) => element.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const journeyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    { rootMargin: "-34% 0px -34% 0px", threshold: 0.18 },
  );

  journeySteps.forEach((step) => journeyObserver.observe(step));
}

caseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateCasePreview(button);
  });
});

const startFlowCanvas = () => {
  if (!flowCanvas) {
    return;
  }

  const ctx = flowCanvas.getContext("2d");
  const nodes = Array.from({ length: 38 }, (_, index) => ({
    x: (index % 10) / 9 + (Math.random() - 0.5) * 0.08,
    y: Math.floor(index / 10) / 4 + Math.random() * 0.18,
    vx: (Math.random() - 0.5) * 0.00028,
    vy: (Math.random() - 0.5) * 0.00022,
    pulse: Math.random() * Math.PI * 2,
  }));
  const ribbons = Array.from({ length: 6 }, (_, index) => ({
    y: 0.16 + index * 0.13 + Math.random() * 0.04,
    speed: 0.00006 + Math.random() * 0.00008,
    phase: Math.random() * Math.PI * 2,
    amp: 14 + Math.random() * 18,
  }));
  let width = 0;
  let height = 0;
  let dpr = 1;

  const resizeCanvas = () => {
    const rect = flowCanvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(rect.width, 1);
    height = Math.max(rect.height, 1);
    flowCanvas.width = Math.round(width * dpr);
    flowCanvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const draw = (time = 0) => {
    pointer.x += (pointer.tx - pointer.x) * 0.08;
    pointer.y += (pointer.ty - pointer.y) * 0.08;

    const rect = flowCanvas.getBoundingClientRect();
    const mouseX = pointer.x - rect.left;
    const mouseY = pointer.y - rect.top;

    ctx.clearRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 320);
    glow.addColorStop(0, "rgba(255, 210, 109, 0.18)");
    glow.addColorStop(0.45, "rgba(115, 91, 255, 0.06)");
    glow.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    ribbons.forEach((ribbon, index) => {
      const offset = prefersReducedMotion ? 0 : time * ribbon.speed * width;
      const yBase = ribbon.y * height;
      ctx.beginPath();

      for (let x = -80; x <= width + 80; x += 32) {
        const y =
          yBase +
          Math.sin((x + offset) * 0.010 + ribbon.phase) * ribbon.amp +
          Math.cos((x - mouseX) * 0.006 + index) * 4;

        if (x === -80) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = `rgba(${index % 2 ? "115, 91, 255" : "189, 125, 17"}, 0.055)`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    });

    nodes.forEach((node) => {
      if (!prefersReducedMotion) {
        node.x += node.vx;
        node.y += node.vy;
      }

      if (node.x < -0.05 || node.x > 1.05) node.vx *= -1;
      if (node.y < -0.05 || node.y > 1.05) node.vy *= -1;
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

        if (distance < 190) {
          const mouseDistance = Math.min(Math.hypot((ax + bx) / 2 - mouseX, (ay + by) / 2 - mouseY), 340);
          const alpha = (1 - distance / 190) * (0.09 + (1 - mouseDistance / 340) * 0.22);
          ctx.strokeStyle = `rgba(189, 125, 17, ${alpha})`;
          ctx.lineWidth = 1;
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
      const distance = Math.min(Math.hypot(x - mouseX, y - mouseY), 260);
      const lift = 1 - distance / 260;
      const radius = 1.6 + lift * 4 + Math.sin(time * 0.002 + node.pulse) * 0.45;

      ctx.fillStyle = `rgba(13, 13, 11, ${0.12 + lift * 0.2})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      if (lift > 0.28) {
        ctx.strokeStyle = `rgba(255, 210, 109, ${lift * 0.45})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, radius + lift * 11, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    window.requestAnimationFrame(draw);
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  window.requestAnimationFrame(draw);
};

startFlowCanvas();
