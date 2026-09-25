# Maintenance Guide

Where to make changes when updating this portfolio. Everything here is under `src/`.

---

## 1. Updating the Resume

The resume PDF lives in S3 (`https://mesportfolio.s3.us-east-1.amazonaws.com/documents/Swetha_Latest_Resume.pdf`), not in this repo. Updating it is a two-part job: **upload the new PDF**, then **regenerate the local preview image**.

### Step 1 — Upload the new PDF to S3

Upload the new resume to the `documents/` prefix in the `mesportfolio` S3 bucket.

- **Keep the same filename** (`Swetha_Latest_Resume.pdf`) if possible — no code changes needed, the site will pick it up automatically.
- **If the filename changes**, update the URL string in both of these files:
  | File | What to change |
  |---|---|
  | `src/components/Main.tsx` | `handleDownload()` → the `link.href = '...'` string (the hero "Download Resume" button) |
  | `src/components/Documents.tsx` | the `documents` array entry with `id: 10, title: 'Resume'` → its `fileUrl` field |

### Step 2 — Regenerate the local preview thumbnail

The **Documents** section shows a preview image in a modal before downloading — this is a **static JPG rendered from the resume's first page**, not the live PDF. It will go stale every time the resume content changes, even if the filename/URL stays the same.

File to replace: `src/assets/images/documents/resume.jpg`

Regenerate it from the new PDF with `pdftoppm` (part of `poppler`, install via `brew install poppler` if missing):

```bash
pdftoppm -jpeg -r 150 -f 1 -l 1 /path/to/new/resume.pdf resume_preview
cp resume_preview-1.jpg src/assets/images/documents/resume.jpg
```

Then restart/refresh the dev server (`npm start`) to confirm the new thumbnail renders in the Documents modal.

### Checklist when the resume changes

- [ ] New PDF uploaded to S3 at the URL referenced in `Main.tsx` / `Documents.tsx`
- [ ] `src/assets/images/documents/resume.jpg` regenerated from the new PDF
- [ ] If skills/job titles/dates changed, also update **Career History** (§2) and **Expertise** (`src/components/Expertise.tsx`) to stay in sync with the resume

---

## 2. Adding / Updating Career History

File: `src/components/Timeline.tsx`

The timeline is a `<VerticalTimeline>` (from `react-vertical-timeline-component`) containing one `<VerticalTimelineElement>` per role, **ordered most-recent job first** (top of the list = current/latest).

### Structure of one entry

```tsx
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="Month YYYY - Month YYYY"        // or "Month YYYY - present"
  iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
  icon={<FontAwesomeIcon icon={faBriefcase} />}
>
  <h3 className="vertical-timeline-element-title">Job Title <br/> Company Name</h3>
  <h4 className="vertical-timeline-element-subtitle">Location (or "Remote" / "Hybrid")</h4>
  <p>
    Comma-separated highlights, e.g. Agentic IAM Automation, LangGraph Multi-Agent Workflows, ...
  </p>
</VerticalTimelineElement>
```

**Note:** the *very first* (topmost/most recent) element in the file also carries two extra props that the others don't:

```tsx
contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
contentArrowStyle={{ borderRight: '7px solid  white' }}
```

This is an existing quirk in the codebase (not required by the library) — only the top entry has it. Leave it on whichever entry is currently first; if you add a new role above it, move `contentStyle`/`contentArrowStyle` up to the new topmost entry for visual consistency, or just leave it be, since both render fine either way.

### To add a new role

1. Copy the block above, fill in title/company/location/dates/highlights.
2. Paste it as the **first child** inside `<VerticalTimeline>` (before the current top entry) if it's your newest role.
3. If you're inserting a role in the middle of your history (e.g. backfilling something), place it in chronological order (newest → oldest, top → bottom).

### To edit an existing role

Just edit the `date`, `<h3>`, `<h4>`, or `<p>` text in place — no structural changes needed.

---

## 3. Adding a Project

File: `src/components/Project.tsx`

Projects live in a `<div className="projects-grid">` inside the `Project` component. Each project is one `<div className="project">` block. **Order in the file = display order** (top-left to bottom-right in the grid, no date sorting).

### Structure of a standard (image-thumbnail, linked) project

```tsx
<div className="project">
    <a href="https://github.com/you/repo" target="_blank" rel="noreferrer">
        <img src={yourThumbnail} className="zoom" alt="thumbnail" width="100%"/>
    </a>
    <a href="https://github.com/you/repo" target="_blank" rel="noreferrer">
        <h2>Project Title</h2>
    </a>
    <p>One or two sentence description of what the project does and the tech used.</p>
</div>
```

- Thumbnail images live in `src/assets/images/projects/` — add your image there and `import` it at the top of `Project.tsx` (see the existing imports at the top of the file).
- If the project has no public repo/link (e.g. confidential work project), drop the `<a>` wrappers and use plain `<div>`s instead — see the "Repo-level Bug Detection Pipeline" entry in the file for this pattern. Add `<i>This project is confidential.</i>` at the end of the description if applicable.

### Structure of a video-thumbnail project (with image fallback)

Used for the "LikeMinds Project - Vega" entry — reuse this pattern if a future project also needs a video/GIF thumbnail with a fallback in case the video fails to load (e.g. hosted externally on S3):

1. Import a local fallback image (e.g. `import myFallback from '../assets/images/my-fallback.png';`).
2. Define a small thumbnail component above `Project()`:
   ```tsx
   const MY_VIDEO_URL = 'https://.../my-video.mp4';

   function MyThumbnail() {
       const [videoFailed, setVideoFailed] = useState(false);
       if (videoFailed) {
           return <img src={myFallback} className="zoom" alt="thumbnail" width="100%" />;
       }
       return (
           <video
               className="zoom"
               src={MY_VIDEO_URL}
               width="100%"
               autoPlay
               loop
               muted
               playsInline
               onError={() => setVideoFailed(true)}
           />
       );
   }
   ```
3. Use `<MyThumbnail />` in place of `<img .../>` inside the project's `<div>`.

### To add a new project

1. Decide: standard image-linked project, confidential (no-link) project, or video-thumbnail project — pick the matching pattern above.
2. If using a local image, add it to `src/assets/images/projects/` and import it at the top of `Project.tsx`.
3. Insert the new `<div className="project">` block wherever you want it to appear in the grid (order = position in file).

---

## Verifying changes

After any edit:

```bash
cd MESFolio
npx tsc --noEmit -p tsconfig.json   # type-check
npm run build                       # full production build
npm start                           # visually check in browser at localhost:3000/MESFolio
```
