# Portfolio Redesign Masterplan — Employer-Ready Frontend & Content System

_Last updated: 2026-07-19 01:25 PDT_

## 0. North Star

This portfolio must help an employer understand, in 10–20 seconds:

1. **What Edison is excellent at**
2. **What roles he can do now**
3. **Why his experience is unusually strong**
4. **Which projects prove it**
5. **How to contact / hire / interview him**

The site should feel like a high-end engineering/product portfolio: clear, calm, modern, responsive, legible, and credible. It should not feel like a student template, a cyberpunk UI, a generic AI-generated site, or a scattered archive of projects.

## 1. Primary Audience

### Hiring managers / recruiters
They need quick clarity:
- Is he software, robotics, embedded, AI, web, research, or hardware?
- Which role should I interview him for?
- Does he have real-world experience, or just class projects?
- Can he communicate complex work clearly?

### Technical interviewers
They need proof:
- What systems did he build?
- What was his specific contribution?
- What technologies did he use?
- What constraints and outcomes existed?
- Can he reason across software, robotics, embedded systems, VLSI, and product work?

### Professors / research labs / graduate collaborators
They need research/technical depth:
- Stanford EE background
- robotics/autonomous systems
- digital twins / smart factory work
- publications / conference / academic project evidence

## 2. Positioning Recommendation

Edison should not be framed as “a little bit of everything.” That makes the portfolio hard to understand. Instead, position him as:

> **Systems-minded engineer building intelligent software for robotics, autonomy, embedded systems, and industrial applications.**

Secondary expansion:

> Stanford Electrical Engineering graduate student with experience across autonomous vehicles, robotics competitions, embedded automotive systems, digital twins, VLSI, and full-stack platforms.

### Suggested role clusters
The site should explicitly communicate these employability paths:

1. **Robotics / Autonomy Engineer**
   - Autonomous shuttle
   - RoboBoat / RoboSub
   - RoboCup
   - AIRLab robotics challenge

2. **Embedded / Automotive Software Engineer**
   - ZF braking systems
   - AUTOSAR, MATLAB/Simulink, safety-critical systems
   - autonomous vehicle systems

3. **AI / Computer Vision / Robotics Software Engineer**
   - perception, navigation, manipulation, simulation
   - ROS, OpenCV, PCL, MoveIt, Gazebo, TensorFlow

4. **Industrial Automation / Digital Twin Engineer**
   - Smart Factory implementation
   - Siemens / AVEVA / Unity / VR / CPS / Industry 4.0

5. **Full-stack Product Engineer with Technical Domain Strength**
   - BAC Modelos / BIM platform
   - Next.js, TypeScript, Firebase, Elasticsearch

6. **Hardware / EE / VLSI Candidate**
   - Stanford EE272 VLSI
   - EE233 radio receiver
   - RF / analog / integrated circuits exposure

The design should not hide this range; it should organize it.

## 3. Information Architecture

### Top navigation
Keep concise:
- Home
- Work
- Stanford
- Research
- About
- Contact
- Resume

If possible, rename `Projects` to **Work** or display the page title as **Selected Work**. “Projects” can sound student-level; “Selected Work” feels curated.

### Home page ideal structure
1. **Hero**
   - One clear title.
   - One role-positioning sentence.
   - 3–4 proof chips: Stanford EE, Robotics/Autonomy, Embedded Systems, Full-stack Platforms.
   - Primary CTA: View selected work.
   - Secondary CTA: Download resume / Contact.

2. **Role fit / What I do**
   A section that maps Edison to jobs:
   - Robotics & Autonomy
   - Embedded / Automotive Systems
   - Industrial Automation & Digital Twins
   - Full-stack Technical Products

3. **Selected proof / impact metrics**
   Use clear metrics, not decorative stats:
   - Stanford EE graduate work
   - ZF automotive systems experience
   - International robotics competitions
   - Published/research/teaching contributions

4. **Featured case studies**
   Fewer, stronger cards. Each card needs:
   - Role label
   - One-sentence problem
   - Contribution
   - Outcome / proof
   - Technology tags

5. **Technical range**
   Group skills by job relevance instead of giant skill lists:
   - Robotics software
   - Embedded & automotive
   - AI/CV/simulation
   - Web/product engineering
   - EE/hardware

6. **Stanford / Research teaser**
   Reinforce credibility.

7. **Contact close**
   One strong sentence: available/interested in roles in robotics, autonomy, embedded systems, AI engineering, etc.

### Work / Projects page ideal structure
The projects page should be curated like a case-study index, not a gallery.

Filters should map to role clusters:
- All
- Robotics & Autonomy
- Embedded / Automotive
- Industrial / Digital Twin
- Full-stack Product
- Stanford EE / Hardware

Each card should answer:
- What is it?
- What role does it prove?
- What did Edison do?
- Why does it matter?

### Project detail ideal structure
Every project detail page should follow the same skeleton, even if content differs:

1. **Case study hero**
   - Title
   - Role-fit label
   - Short summary
   - Metadata: year, domain, role, tech stack
   - Image/video

2. **At a glance**
   3–4 cards:
   - Problem
   - Contribution
   - Outcome
   - Technologies

3. **Challenge**
   Plain-language problem.

4. **My role**
   Specific ownership. Avoid vague team descriptions.

5. **Technical approach**
   Architecture, tools, constraints.

6. **Results / impact**
   Metrics, awards, demos, publications, deployments, recognition.

7. **What this proves to employers**
   Explicitly translate project into employability:
   - Systems thinking
   - cross-functional work
   - software + hardware integration
   - technical depth
   - leadership

8. **Related work**
   Optional, 2–3 links.

## 4. Visual Direction

### Desired feel
- Apple/Tesla clarity
- NVIDIA-like technical credibility, but not gaming/neon
- Vercel/Linear polish
- OpenAI-style calm white/neutral layout
- shadcn/Origin UI component discipline

### Must avoid
- Cyberpunk
- Neon glows
- Random rainbow badges
- Low-contrast green text on white
- Too many gradients
- Too much glassmorphism
- Cards that all look different
- Overly dense project details
- Decorative UI that does not clarify content

## 5. Palette Requirements

### Palette goals
- Clear text first.
- Mostly ivory/white/near-black/neutral gray.
- One deep green accent inspired by NVIDIA but accessible.
- No uncontrolled blues/purples/yellows/oranges except semantic UI states where unavoidable.

### Recommended tokens
Use HSL tokens in `globals.css`:

- Background: warm ivory `40 33% 98%`
- Foreground: near-black `220 24% 7%`
- Muted foreground: `220 8% 42%`
- Border: `220 13% 88%`
- Card: white `0 0% 100%`
- Primary: dark accessible green, approx `88 86% 28%`
- Primary foreground: white `0 0% 100%`

### Usage rules
- Headings: `text-foreground`, not green.
- Body: `text-muted-foreground` or `text-foreground` depending hierarchy.
- Green is for:
  - icons
  - tiny status pills
  - focus rings
  - selected filters
  - subtle accents
- Never use primary green for long text paragraphs.
- Never use low-contrast yellow/orange/purple labels for important text.
- Use `bg-primary/10` only for small accent panels, not huge page backgrounds everywhere.

## 6. Typography

- Use Geist / Geist Mono.
- Headings: tight tracking, but not too aggressive on mobile.
- Body: readable line-height, max width.
- Do not use all-caps too much. Use mono eyebrow sparingly.
- For project details, favor editorial hierarchy:
  - eyebrow
  - title
  - paragraph summary
  - metadata cards
  - section headings
  - body copy

## 7. Layout & Responsiveness

### Breakpoints to validate
- 320px narrow phone
- 390px iPhone
- 430px large iPhone
- 768px tablet
- 1024px tablet landscape / small laptop
- 1440px desktop

### Rules
- No horizontal overflow.
- Header menu visible and tappable on mobile.
- CTAs stack cleanly on phones.
- Tabs/filters scroll or wrap gracefully.
- No two-column project content below `sm` unless content is tiny.
- Images/videos maintain aspect ratio.
- Long titles wrap cleanly.
- Cards should not become tiny columns.
- Touch targets >= 44px when interactive.

## 8. Component System

### Canonical card
Major cards:
- `rounded-2xl`
- `border border-border`
- `bg-card`
- `shadow-sm shadow-black/5`
- hover: subtle lift or border darkening only

Small cards/info blocks:
- `rounded-xl`
- `border border-border`
- `bg-muted/50` or `bg-white`

Badges:
- `rounded-full` for tags/chips
- mono text only if it adds technical feel
- avoid huge color variety

Buttons:
- Primary: near-black or dark green with white text.
- Secondary: border neutral.
- Hover: subtle, no glow.

## 9. Content Rewrite Principles

### Make strengths explicit
Bad:
> I worked on many projects using robotics, AI, embedded systems and web.

Better:
> I build software for physical systems — autonomous vehicles, robotics platforms, industrial automation, and embedded automotive systems — with enough full-stack experience to turn technical systems into usable products.

### Translate technical work into employer value
For each project, include one sentence:
> This project shows I can [skill] under [constraint], using [tools], to achieve [outcome].

Examples:
- ZF Autonomous Shuttle: systems integration, perception/control, cross-functional collaboration.
- ZF Braking Systems: embedded safety-critical software, AUTOSAR, validation.
- AIRLab: robotics manipulation, simulation-to-real, computer vision.
- Smart Factory: digital twins, industrial automation, VR/simulation, teaching/leadership.
- BAC Modelos: full-stack platform, search/data/product UX.

### Reduce ambiguity
If the user is unsure what he is good at, the site must provide categories:
- “Best fit roles”
- “Strongest evidence”
- “Technical domains”
- “Selected work by role”

## 10. Concrete Implementation Plan

### Phase 1 — Strategy & content model
- Create role clusters in `src/lib/constants.ts` or a new content helper.
- Map every project to:
  - `roleFit`
  - `domain`
  - `summary`
  - `contribution`
  - `outcome`
  - `skillsProven`
  - `bestForRoles`
- Update home hero and projects cards around those fields.

### Phase 2 — Visual system hardening
- Lock palette in `globals.css`.
- Remove/neutralize old cyber utility names where possible.
- Add reusable utilities:
  - `.surface`
  - `.surface-muted`
  - `.case-study`
  - `.section-shell`
  - `.section-eyebrow`
- Ensure primary foreground contrast is accessible.

### Phase 3 — Home page redesign
- Rewrite hero headline/summary around employability.
- Add “Best fit roles” section.
- Add “Proof by domain” section.
- Make featured projects more curated.

### Phase 4 — Projects / Work page redesign
- Rename mental model to “Selected Work.”
- Use role-based filters.
- Make cards explain role fit and contribution.
- Keep employer-friendly scanning.

### Phase 5 — Project details redesign
- Create reusable case-study wrapper components if practical.
- Standardize intro metadata and content rhythm.
- Add “What this proves” section or card for each major case study.
- Avoid each project having a completely different visual language.

### Phase 6 — Stanford / Research / About / Contact polish
- Stanford: organize as credibility + technical coursework + selected artifacts.
- Research: group publications/projects by theme/year; reduce density.
- About: clarify professional identity and role direction.
- Contact: strong CTA with role interests.

### Phase 7 — QA
Run:
- `npm run typecheck`
- `PATH=/opt/homebrew/bin:$PATH npm run build`
- `git diff --check`
- screenshots at 390, 768, 1440
- inspect for color leakage with grep:
  `grep -RInE "text-(blue|sky|cyan|teal|violet|purple|yellow|red|orange|green|amber)-[0-9]|bg-(blue|sky|cyan|teal|violet|purple|yellow|red|orange|green|amber)-[0-9]|border-(blue|sky|cyan|teal|violet|purple|yellow|red|orange|green|amber)-[0-9]" src/app src/components --include='*.tsx'`

## 11. Acceptance Criteria

The redesign is not done until:

- A recruiter can identify Edison's target roles from the homepage without opening every project.
- Project cards clearly say what capability each project proves.
- Project details share a consistent case-study design.
- Palette is stable and accessible.
- No important text relies on low-contrast accent colors.
- Site works at iPhone, tablet, and desktop widths.
- Build and typecheck pass.
- Screenshots are generated and reviewed.
- Final commits are made with clear messages.

## 12. High-priority TODO checklist

- [ ] Define role clusters and project mappings.
- [ ] Rewrite homepage hero and summary for role clarity.
- [ ] Add “Best fit roles” / “What I build” section.
- [ ] Improve selected work cards to show contribution/outcome.
- [ ] Standardize project detail case-study hero.
- [ ] Add “What this proves to employers” to major projects.
- [ ] Recheck palette contrast and color leakage.
- [ ] Validate mobile/tablet/desktop screenshots.
- [ ] Commit final iteration.
