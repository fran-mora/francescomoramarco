// The Banana Test — manifest.
// To add an agent: drop its self-contained HTML file into entries/ and add one object here.
// Fields: model (required), file (required), lab, date (YYYY-MM-DD),
//         featured (true = the human-in-the-loop showcase, shown in its own section at the bottom),
//         placeholder (true = demo card, hidden),
//         tileCss / tileJs (display-only patches injected into the tile iframe to shrink the
//                           agent's own widgets or set a starting speed — the file is NEVER edited).
// Display order on the page = order of this array. Grid is 2 across, so:
//   row 1 = items 1 & 2, row 2 = items 3 & 4.
window.BANANA_ENTRIES = [
    {
        model: "Claude Opus 4.8 — Claude Code, xhigh",
        lab: "Anthropic",
        date: "2026-07-03",
        file: "banana-lifecycle-opus-4-8-xhigh.html",
        tileCss: "#dial{transform:scale(.5);transform-origin:100% 100%;right:8px;bottom:8px;}"
    },
    {
        model: "GPT-5.5 — Codex, xhigh",
        lab: "OpenAI",
        date: "2026-07-03",
        file: "banana-codex-gpt-5-5-xhigh.html",
        tileCss: "#speedDial{transform:scale(.6);transform-origin:100% 100%;right:8px;bottom:8px;}"
    },
    {
        model: "Claude Sonnet 5 — Claude Code, xhigh",
        lab: "Anthropic",
        date: "2026-07-03",
        file: "banana_lifecycle-claude-code-sonnet-5-xhigh.html",
        tileCss: "#speed-dial{transform:scale(.5);transform-origin:100% 100%;right:8px;bottom:8px;}",
        // its 1x cycle is 130s — far slower than the others, so drive its own dial
        // to 4x (its max) with synthetic pointer events; retries until the dial is live
        tileJs: [
            "(function set4x(){var tries=0;function go(){",
            "var svg=document.querySelector('#speed-dial svg');",
            "var val=document.querySelector('#speed-dial .dial-value');",
            "if(val&&parseFloat(val.textContent)>=3.9)return;",
            "if(svg&&svg.getBoundingClientRect().width){",
            "var r=svg.getBoundingClientRect();",
            "var cx=r.left+r.width/2,cy=r.top+r.height/2,R=r.width*0.35;",
            "var x=cx+Math.cos(50*Math.PI/180)*R,y=cy+Math.sin(50*Math.PI/180)*R;",
            "var o={bubbles:true,cancelable:true,pointerId:1,isPrimary:true,clientX:x,clientY:y};",
            "var knob=svg.querySelector('.dial-knob-wrap')||svg;",
            "try{knob.dispatchEvent(new PointerEvent('pointerdown',o));}catch(e){}",
            "window.dispatchEvent(new PointerEvent('pointermove',o));",
            "window.dispatchEvent(new PointerEvent('pointerup',o));}",
            "if(++tries<30)setTimeout(go,500);}go();})();"
        ].join("")
    },
    {
        model: "Claude Haiku 4.5 — Claude Code",
        lab: "Anthropic",
        date: "2026-07-03",
        file: "banana-lifecycle.html-claude-code-haiku-4-5.html",
        tileCss: [
            ".ui-panel.bottom-left{display:none;}",
            ".ui-panel.top-left{transform:scale(.55);transform-origin:0 0;}",
            ".ui-panel.top-right{transform:scale(.55);transform-origin:100% 0;}"
        ].join("")
    },
    {
        // Text box instead of an animation: Fable 5's safeguards flagged the
        // banana prompt, so it produced no animation. Response shown verbatim.
        // Same square size as the other tiles (no `wide`), so it sits alone
        // on the left of its own row at the bottom.
        model: "Claude Fable 5 — Claude Code, xhigh",
        lab: "Anthropic",
        date: "2026-07-03",
        textBody: "Fable 5's safeguards flagged this message. The safeguards are intentionally broad right now and may flag safe and routine coding, cybersecurity, or biology work. These measures let us bring you Mythos-level capabilities sooner, and we're working to refine them. Send feedback with /feedback or learn more: https://support.claude.com/en/articles/15363606"
    },
    {
        model: "Human in the loop — Claude Code, guided over days",
        lab: "a human + Claude Code, many turns",
        date: "2026-07-02",
        file: "banana-plant-human-in-the-loop.html",
        featured: true,
        verdict: "What patient human guidance gets you: a person steering a coding agent over many turns, across days.",
        tileCss: [
            ".title{transform:scale(.8);transform-origin:0 0;}",
            ".panel{transform:translateX(-50%) scale(.75);transform-origin:50% 100%;bottom:8px;}"
        ].join("")
    },
    {
        model: "Sample entry",
        lab: "hand-made placeholder",
        date: "2026-07-02",
        file: "sample-placeholder.html",
        verdict: "Not a model output — a tiny hand-written sketch to show how entries render.",
        placeholder: true
    }
];
