
console.log("javascript is working")
document.addEventListener("DOMContentLoaded", () => {
//   if (window.lucide) window.lucide.createIcons();

  const overlay = document.getElementById("overlay");
  const openButtons = document.getElementById("openCreateButton");
  const closeButton = document.getElementById("closeCreateButton");
  const form = document.getElementById("createNoteForm");
  const titleInput = document.getElementById("noteTitle");
  const contentInput = document.getElementById("noteContent");
  const notesList = document.getElementById("notesList");
  const searchInput = document.getElementById("searchInput");
  const formMessage = document.getElementById("formMessage");



console.log("Overlay:", overlay);
console.log("Open button:", openButtons);
console.log("Close button:", closeButton);
console.log("Form:", form);
console.log("Content input:", contentInput);
console.log("Notes list:", notesList);
console.log("Search input:", searchInput);









  function openSheet() {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    // document.body.classList.add("modal-visible");
    setTimeout(() => titleInput.focus(), 180);
  }
  function closeSheet() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    // document.body.classList.remove("modal-visible");
    formMessage.textContent = "";
  }
  openButtons.addEventListener("click", openSheet);
  closeButton.addEventListener("click", closeSheet);
  overlay.addEventListener("click", event => { if (event.target === overlay) closeSheet(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) closeSheet();
  });

  form.addEventListener("submit", event => {
    //event.preventDefault();
    // const title = titleInput.value.trim();
    // const content = contentInput.value.trim();
    if (!title || !content) {
      formMessage.textContent = "Please enter both a title and note content.";
      return;
    }

    if (window.lucide) window.lucide.createIcons();





     /*form.reset();*/ closeSheet(); applySearch();
  });

    // const FETCH_URL = "{% url 'displayNote' %}";

    async function loadText(url){
        const response = await fetch(url, { method : "GET" });
             console.log(response.status);
        const data = await response.json();
        console.log(data);
        data.forEach((text)=>{
            console.log(`h2: ${text.title}, p: ${text.content}, ${text.id}`);
            
            const title = text.title;
            const content = text.content;

    const article = document.createElement("article");
    article.className = "display-card";
    article.dataset.search = `${title} ${content}`.toLowerCase();

    const accent = document.createElement("div"); accent.className = "design-flag";
    const iconWrap = document.createElement("div"); iconWrap.className = "card-icon";
    const fileIcon = document.createElement("i"); fileIcon.setAttribute("data-lucide", "file-text"); iconWrap.append(fileIcon);

    const copy = document.createElement("div"); copy.className = "card-details";
    const heading = document.createElement("h2"); heading.textContent = title;
    const preview = document.createElement("p"); preview.textContent = content.length > 100 ? content.slice(0, 100) + "..." : content;
    const date = document.createElement("div"); date.className = "preview-date";
    const calendar = document.createElement("i"); calendar.setAttribute("data-lucide", "calendar-days");
    const dateText = document.createElement("span");
    // dateText.textContent = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    dateText.textContent = text.created_at;
    date.append(calendar, dateText); copy.append(heading, preview, date);

    const more = document.createElement("button"); more.className = "more-notes"; more.type = "button";
    more.setAttribute("aria-label", "More options");
    const moreIcon = document.createElement("i"); moreIcon.setAttribute("data-lucide", "ellipsis-vertical"); more.append(moreIcon);

    article.append(accent, iconWrap, copy, more);
    notesList.prepend(article);
              if (window.lucide) window.lucide.createIcons();
    
     article.addEventListener("click", ()=>{
        note_id = text.id;
        window.location.href= `/notes/${note_id}/` })
          
        })
    }

    loadText(FETCH_URL)



    // const title = "title";
    // const content = "content";
    // const article = document.createElement("article");
    // article.className = "display-card";
    // article.dataset.search = `${title} ${content}`.toLowerCase();

    // const accent = document.createElement("div"); accent.className = "design-flag";
    // const iconWrap = document.createElement("div"); iconWrap.className = "card-icon";
    // const fileIcon = document.createElement("i"); fileIcon.setAttribute("data-lucide", "file-text"); iconWrap.append(fileIcon);

    // const copy = document.createElement("div"); copy.className = "card-details";
    // const heading = document.createElement("h2"); heading.textContent = title;
    // const preview = document.createElement("p"); preview.textContent = content.length > 100 ? content.slice(0, 100) + "..." : content;
    // const date = document.createElement("div"); date.className = "preview-date";
    // const calendar = document.createElement("i"); calendar.setAttribute("data-lucide", "calendar-days");
    // const dateText = document.createElement("span");
    // dateText.textContent = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    // date.append(calendar, dateText); copy.append(heading, preview, date);

    // const more = document.createElement("button"); more.className = "note-more"; more.type = "button";
    // more.setAttribute("aria-label", "More options");
    // const moreIcon = document.createElement("i"); moreIcon.setAttribute("data-lucide", "ellipsis-vertical"); more.append(moreIcon);

    // article.append(accent, iconWrap, copy, more);
    // notesList.prepend(article);





//   function applySearch() {
//     const query = searchInput.value.trim().toLowerCase();
//     notesList.querySelectorAll(".note-preview").forEach(note => {
//       const text = `${note.dataset.search || ""} ${note.textContent}`.toLowerCase();
//       note.hidden = !text.includes(query);
//     });
//   }
//   searchInput.addEventListener("input", applySearch);

//   The screenshot has the sheet open on load. Remove "is-open" from the
//   modalOverlay class in index.html to show the normal home page first.
  document.body.classList.add("modal-visible");
});
console.log("javascript is working")
























































// document.addEventListener("DOMContentLoaded", () => {
//     const overlay = document.getElementById("overlay");
//     const openButton = document.getElementById("openCreateButton");
//     const closeButton = document.getElementById("closeCreateButton");
//     const form = document.getElementById("createNoteForm");

//     // ChatGPT-style textarea
//     const contentInput = document.querySelector(".chat-input");

//     // Optional title input, if your HTML still contains one
//     const titleInput = document.getElementById("noteTitle");

//     const notesList = document.getElementById("notesList");
//     const searchInput = document.getElementById("searchInput");
//     const formMessage = document.getElementById("formMessage");

//     // Open the note creation sheet, if present
//     function openSheet() {
//         if (!overlay) return;

//         overlay.classList.add("is-open");
//         overlay.setAttribute("aria-hidden", "false");
//         document.body.classList.add("modal-visible");

//         contentInput?.focus();
//     }

//     // Close the note creation sheet, if present
//     function closeSheet() {
//         if (!overlay) return;

//         overlay.classList.remove("is-open");
//         overlay.setAttribute("aria-hidden", "true");
//         document.body.classList.remove("modal-visible");

//         if (formMessage) {
//             formMessage.textContent = "";
//         }
//     }

//     openButton?.addEventListener("click", openSheet);
//     closeButton?.addEventListener("click", closeSheet);

//     overlay?.addEventListener("click", event => {
//         if (event.target === overlay) {
//             closeSheet();
//         }
//     });

//     document.addEventListener("keydown", event => {
//         if (event.key === "Escape" &&
//             overlay?.classList.contains("is-open")) {
//             closeSheet();
//         }
//     });

//     // Create a note card
//     function createNote(content, title = "") {
//         if (!notesList) return;

//         content = content.trim();
//         title = title.trim();

//         if (!content) {
//             if (formMessage) {
//                 formMessage.textContent = "Please write something first.";
//             }
//             contentInput?.focus();
//             return;
//         }

//         // If no title is supplied, use the first line as the title.
//         const lines = content.split(/\r?\n/);
//         const noteTitle = title || lines[0].trim().slice(0, 60) || "Untitled note";

//         const article = document.createElement("article");
//         article.className = "display-card";
//         article.dataset.search = `${noteTitle} ${content}`.toLowerCase();

//         const accent = document.createElement("div");
//         accent.className = "design-flag";

//         const iconWrap = document.createElement("div");
//         iconWrap.className = "card-icon";

//         const fileIcon = document.createElement("i");
//         fileIcon.setAttribute("data-lucide", "file-text");
//         iconWrap.append(fileIcon);

//         const copy = document.createElement("div");
//         copy.className = "card-details";

//         const heading = document.createElement("h2");
//         heading.textContent = noteTitle;

//         const preview = document.createElement("p");

//         // Avoid repeating the title in the preview when it is the first line.
//         const previewContent =
//             !title && lines.length > 1
//                 ? lines.slice(1).join(" ").trim() || content
//                 : content;

//         preview.textContent =
//             previewContent.length > 100
//                 ? previewContent.slice(0, 100) + "..."
//                 : previewContent;

//         const date = document.createElement("div");
//         date.className = "preview-date";

//         const calendar = document.createElement("i");
//         calendar.setAttribute("data-lucide", "calendar-days");

//         const dateText = document.createElement("span");
//         dateText.textContent = new Date().toLocaleDateString("en-GB", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric"
//         });

//         date.append(calendar, dateText);
//         copy.append(heading, preview, date);

//         const more = document.createElement("button");
//         more.className = "note-more";
//         more.type = "button";
//         more.setAttribute("aria-label", "More options");

//         const moreIcon = document.createElement("i");
//         moreIcon.setAttribute("data-lucide", "ellipsis-vertical");
//         more.append(moreIcon);

//         article.append(accent, iconWrap, copy, more);
//         notesList.prepend(article);

//         if (window.lucide) {
//             window.lucide.createIcons();
//         }

//         applySearch();
//     }

//     // Submit the existing title/content form, if present
//     form?.addEventListener("submit", event => {
//         event.preventDefault();

//         createNote(
//             contentInput?.value || document.getElementById("noteContent")?.value || "",
//             titleInput?.value || ""
//         );

//         const content = contentInput?.value ||
//             document.getElementById("noteContent")?.value || "";

//         if (!content.trim()) return;

//         if (contentInput) contentInput.value = "";
//         if (titleInput) titleInput.value = "";

//         form.reset();
//         closeSheet();
//     });

//     // Submit directly from the ChatGPT-style composer
//     // This supports a form-free textarea and send button.
//     const chatContainer = document.querySelector(".chat-input-container");
//     const sendButton = document.querySelector(".send-button");

//     function submitChatNote() {
//         if (!contentInput) return;

//         const content = contentInput.value.trim();

//         if (!content) {
//             contentInput.focus();
//             return;
//         }

//         createNote(content);

//         // Clear only after valid content was submitted.
//         contentInput.value = "";
//         contentInput.style.height = "auto";
//         contentInput.focus();
//     }

//     sendButton?.addEventListener("click", submitChatNote);

//     contentInput?.addEventListener("keydown", event => {
//         // Enter submits; Shift+Enter adds a new line.
//         if (
//             event.key === "Enter" &&
//             !event.shiftKey &&
//             !event.isComposing
//         ) {
//             event.preventDefault();

//             if (chatContainer) {
//                 submitChatNote();
//             }
//         }
//     });

//     // Automatically grow the textarea
//     contentInput?.addEventListener("input", () => {
//         contentInput.style.height = "auto";
//         contentInput.style.height =
//             Math.min(contentInput.scrollHeight, 180) + "px";
//     });

//     // Search notes
//     function applySearch() {
//         if (!notesList || !searchInput) return;

//         const query = searchInput.value.trim().toLowerCase();

//         notesList.querySelectorAll(".display-card, .note-preview").forEach(note => {
//             const text =
//                 `${note.dataset.search || ""} ${note.textContent}`.toLowerCase();

//             note.hidden = !text.includes(query);
//         });
//     }

//     searchInput?.addEventListener("input", applySearch);

//     // Initialize icons, if Lucide is loaded
//     if (window.lucide) {
//         window.lucide.createIcons();
//     }
// });
