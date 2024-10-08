//#region Ace editor library
! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) o.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/public/build", o(o.s = 1)
}([function(e, t) {
    const o = {
            C: "c",
            CPP: "cpp",
            PYTHON: "python",
            JAVA: "java",
            JAVASCRIPT: "javascript",
            CSHARP: "csharp",
            GOLANG: "golang",
            RUST: "rust",
            R: "r",
            PHP: "php",
            SWIFT: "swift"
        },
        n = o.PYTHON,
        i = {
            [o.C]: "c_cpp",
            [o.CPP]: "c_cpp",
            [o.PYTHON]: "python",
            [o.JAVA]: "java",
            [o.JAVASCRIPT]: "javascript",
            [o.CSHARP]: "csharp",
            [o.GOLANG]: "golang",
            [o.RUST]: "rust",
            [o.R]: "r",
            [o.PHP]: "php",
            [o.SWIFT]: "swift"
        };
    e.exports = {
        DEFAULT_SHELL: "dash",
        SUPPORTED_LANGUAGES: o,
        DEFAULT_LANGUAGE: n,
        ACE_EDITOR_MODES: i
    }
}, function(e, t, o) {
    "use strict";
    o.r(t);
    const n = "mobile--tabbed-compiler",
        i = "mobile--tabbed--terminal",
        a = (e = 36) => {
            let t = (new Date).getTime(),
                o = performance && performance.now && 1e3 * performance.now() || 0;
            return "xxxxxxxxx-xxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                let n = 16 * Math.random();
                return t > 0 ? (n = (t + n) % 16 | 0, t = Math.floor(t / 16)) : (n = (o + n) % 16 | 0, o = Math.floor(o / 16)), ("x" === e ? n : 3 & n | 8).toString(16)
            })).slice(0, e)
        },
        r = (e, t, o) => {
            let n = "";
            if (o) {
                const e = new Date;
                e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3), n = "; expires=" + e.toUTCString()
            }
            document.cookie = e + "=" + (t || "") + n + "; path=/"
        },
        s = e => {
            const t = e + "=",
                o = document.cookie.split(";");
            for (let e = 0; e < o.length; e++) {
                let n = o[e];
                for (;
                    " " === n.charAt(0);) n = n.substring(1, n.length);
                if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
            }
            return null
        },
        l = '<span class="run-text">\n                                &nbsp;Run&nbsp;\n                              </span>\n';
    var c = o(0);
    const d = window.location.href,
        m = e => {
            let t, o;
            return t = `https://${e}.repl-web.programiz.com`, o = (e => {
                for (var t = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = o.length, i = 0; i < e; i++) t += o.charAt(Math.floor(Math.random() * n));
                return t
            })(10), `${t}/?sessionId=${o}&lang=${e}`
        };
    let h;
    const p = (e = "Link copied to the clipboard", t = "success") => {
            const o = document.getElementById("notification"),
                n = $(".check-icon-wrapper img");
            $(".notification-message").text(e), $(".notification").css("display", "flex"), "error" === t ? (o.classList.add("notification-error"), $(".check-icon-wrapper").addClass("check-icon-wrapper--error"), n.attr("src", "assets/icons/error.svg").on("load", (function() {
                o.classList.add("notification-show"), o.classList.remove("notification-close"), h && clearTimeout(h), h = setTimeout(() => {
                    g()
                }, 3e3)
            }))) : (o.classList.remove("notification-error"), $(".check-icon-wrapper").removeClass("check-icon-wrapper--error"), n.attr("src", "assets/icons/check.svg"), o.classList.add("notification-show"), o.classList.remove("notification-close"), h && clearTimeout(h), h = setTimeout(() => {
                g()
            }, 3e3))
        },
        g = () => {
            const e = document.getElementById("notification");
            e.classList.add("notification-close"), e.classList.remove("notification-show"), h && (clearTimeout(h), h = null), h = setTimeout(() => {
                $(".notification").css("display", "none")
            }, 300)
        };
    let u = !1;
    const C = ({
            code: e,
            language: t
        }) => {
            u = !1;
            const o = new Promise(e => {
                    $(".progress").css("width", "0%").animate({
                        width: "100%"
                    }, 900, (function() {
                        e()
                    }))
                }),
                n = (async ({
                    code: e,
                    language: t
                }) => {
                    const o = {
                        code: e,
                        language: t,
                        shared_by: s("browser_id"),
                        user_agent: navigator.userAgent
                    };
                    return (await fetch("https://compiler-api.programiz.com/api/v1/share", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(o)
                    })).json()
                })({
                    code: e,
                    language: t
                });
            Promise.all([o, n]).then(([e, t]) => {
                if (u) return;
                if (!t.share_id) return w(), $(".share-link-generating-modal").hide(), void p("Failed to generate link.", "error");
                const o = (n = t.share_id, d.includes("playground") ? "https://playground.programiz.com/?share_id=" + n : "https://www.programiz.com/online-compiler/" + n);
                var n;
                ((e, t) => {
                    const o = ((e, t) => [{
                            url: "https://twitter.com/intent/tweet?&hashtags=Programiz&related=Programiz&url=" + e,
                            title: "Share on Twitter",
                            activeSvg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.025 0.65625H13.172L8.482 6.03025L14 13.3442H9.68L6.294 8.90925L2.424 13.3442H0.275L5.291 7.59425L0 0.65725H4.43L7.486 4.71025L11.025 0.65625ZM10.27 12.0562H11.46L3.78 1.87725H2.504L10.27 12.0562Z" fill="#0556F3"/>\n</svg>\n',
                            modifier: "twitter"
                        }, {
                            url: `https://new.reddit.com/submit?url=${e}&title=${t}`,
                            title: "Share on Reddit",
                            activeSvg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14 7.13754C14 6.18201 13.3168 5.41468 12.4659 5.41468C12.0534 5.41468 11.6796 5.6029 11.4088 5.89245C10.3646 5.03826 8.92081 4.48811 7.30939 4.4302L8.00552 0.738366L10.2873 1.28852C10.3131 1.94002 10.7901 2.46122 11.3831 2.46122C11.989 2.46122 12.4788 1.91107 12.4788 1.23061C12.4788 0.550155 11.989 0 11.3831 0C10.9576 0 10.5838 0.275077 10.4033 0.680455L7.85083 0.0723888C7.78637 0.0579111 7.70902 0.0723882 7.64457 0.115821C7.58011 0.159255 7.54144 0.231644 7.52854 0.304033L6.75506 4.41572C5.11786 4.47363 3.66114 5.00931 2.59116 5.87797C2.32044 5.58842 1.94659 5.40021 1.53407 5.40021C0.68324 5.40021 0 6.16753 0 7.12306C0 7.81799 0.373849 8.42606 0.902394 8.68666C0.876611 8.86039 0.86372 9.03413 0.86372 9.20786C0.86372 11.8573 3.60958 14 7 14C10.3904 14 13.1363 11.8573 13.1363 9.20786C13.1363 9.03413 13.1234 8.86039 13.0976 8.68666C13.6262 8.44054 14 7.84695 14 7.13754ZM3.49355 8.36815C3.49355 7.68769 3.98342 7.13754 4.58932 7.13754C5.19521 7.13754 5.68508 7.68769 5.68508 8.36815C5.68508 9.0486 5.19521 9.59876 4.58932 9.59876C3.98342 9.59876 3.49355 9.0486 3.49355 8.36815ZM9.59116 11.6112C8.84346 12.4509 7.41252 12.5088 6.98711 12.5088C6.56169 12.5088 5.13076 12.4509 4.38306 11.6112C4.26704 11.4809 4.26704 11.2782 4.38306 11.1624C4.49908 11.0321 4.67956 11.0321 4.78269 11.1624C5.25967 11.698 6.26519 11.8718 6.97422 11.8718C7.68324 11.8718 8.70166 11.6836 9.17864 11.1479C9.29466 11.0176 9.47514 11.0176 9.57827 11.1479C9.70718 11.2927 9.70718 11.4953 9.59116 11.6112ZM9.39779 9.59876C8.7919 9.59876 8.30202 9.0486 8.30202 8.36815C8.30202 7.68769 8.7919 7.13754 9.39779 7.13754C10.0037 7.13754 10.4936 7.68769 10.4936 8.36815C10.4936 9.0486 10.0037 9.59876 9.39779 9.59876Z" fill="#0556F3"/>\n</svg>\n',
                            modifier: "reddit"
                        }, {
                            url: `https://www.linkedin.com/shareArticle?mini=true&url=${e}&title=Interesting%20Challenge&text=${e}`,
                            title: "Share on LinkedIn",
                            activeSvg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M4.3763 5.54167V11.375C4.3763 11.4524 4.34557 11.5265 4.29088 11.5812C4.23618 11.6359 4.16199 11.6667 4.08464 11.6667H2.6263C2.54895 11.6667 2.47476 11.6359 2.42006 11.5812C2.36537 11.5265 2.33464 11.4524 2.33464 11.375V5.54167C2.33464 5.46431 2.36537 5.39012 2.42006 5.33543C2.47476 5.28073 2.54895 5.25 2.6263 5.25H4.08464C4.16199 5.25 4.23618 5.28073 4.29088 5.33543C4.34557 5.39012 4.3763 5.46431 4.3763 5.54167ZM12.2513 7.8225C12.2611 7.20948 12.0611 6.61152 11.6844 6.12774C11.3078 5.64396 10.7772 5.3034 10.1805 5.1625C9.77447 5.07508 9.35343 5.08612 8.95257 5.19471C8.55171 5.3033 8.18267 5.50627 7.8763 5.78667V5.54167C7.8763 5.46431 7.84557 5.39012 7.79088 5.33543C7.73618 5.28073 7.66199 5.25 7.58464 5.25H6.1263C6.04895 5.25 5.97476 5.28073 5.92006 5.33543C5.86537 5.39012 5.83464 5.46431 5.83464 5.54167V11.375C5.83464 11.4524 5.86537 11.5265 5.92006 11.5812C5.97476 11.6359 6.04895 11.6667 6.1263 11.6667H7.58464C7.66199 11.6667 7.73618 11.6359 7.79088 11.5812C7.84557 11.5265 7.8763 11.4524 7.8763 11.375V8.085C7.86932 7.80119 7.96257 7.524 8.13965 7.30211C8.31674 7.08021 8.56635 6.92781 8.84464 6.87167C9.01358 6.8425 9.18687 6.85093 9.35219 6.89635C9.5175 6.94178 9.67078 7.02307 9.8011 7.13446C9.93143 7.24585 10.0356 7.38459 10.1062 7.54082C10.1768 7.69704 10.2121 7.86691 10.2096 8.03833V11.375C10.2096 11.4524 10.2404 11.5265 10.2951 11.5812C10.3498 11.6359 10.4239 11.6667 10.5013 11.6667H11.9596C12.037 11.6667 12.1112 11.6359 12.1659 11.5812C12.2206 11.5265 12.2513 11.4524 12.2513 11.375V7.8225ZM3.20964 1.75C2.97889 1.75 2.75333 1.81842 2.56147 1.94662C2.36961 2.07481 2.22008 2.25702 2.13178 2.4702C2.04347 2.68338 2.02037 2.91796 2.06539 3.14427C2.1104 3.37058 2.22152 3.57846 2.38468 3.74162C2.54784 3.90479 2.75572 4.0159 2.98203 4.06092C3.20834 4.10593 3.44292 4.08283 3.6561 3.99453C3.86928 3.90622 4.05149 3.75669 4.17968 3.56483C4.30788 3.37297 4.3763 3.14741 4.3763 2.91667C4.3763 2.60725 4.25339 2.3105 4.03459 2.09171C3.8158 1.87292 3.51906 1.75 3.20964 1.75Z" fill="#0556F3"/>\n</svg>\n',
                            modifier: "linkedin"
                        }, {
                            url: "https://web.whatsapp.com/send?text=" + e,
                            title: "Share on Whatsapp",
                            activeSvg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.00131 1.16602C10.2231 1.16602 12.8346 3.7776 12.8346 6.99935C12.8346 10.2211 10.2231 12.8327 7.00131 12.8327C5.97042 12.8345 4.95765 12.5616 4.06714 12.0423L1.17031 12.8327L1.95898 9.93468C1.4392 9.04389 1.16617 8.03069 1.16798 6.99935C1.16798 3.7776 3.77956 1.16602 7.00131 1.16602ZM5.01331 4.25768L4.89664 4.26235C4.82121 4.26755 4.74751 4.28736 4.67964 4.32068C4.6164 4.35656 4.55864 4.40136 4.50814 4.45368C4.43814 4.5196 4.39848 4.57677 4.35589 4.63218C4.14013 4.91271 4.02396 5.25711 4.02573 5.61102C4.02689 5.89685 4.10156 6.1751 4.21823 6.43527C4.45681 6.96143 4.84939 7.51852 5.36739 8.03477C5.49223 8.15902 5.61473 8.28385 5.74656 8.39993C6.39023 8.96658 7.15722 9.37525 7.98656 9.59343L8.31789 9.64418C8.42581 9.65002 8.53373 9.64185 8.64223 9.6366C8.81209 9.62764 8.97793 9.58165 9.12814 9.50185C9.20447 9.46238 9.27902 9.41956 9.35156 9.37352C9.35156 9.37352 9.37626 9.35679 9.42448 9.32102C9.50323 9.26268 9.55164 9.22127 9.61698 9.15302C9.66598 9.10246 9.70681 9.04374 9.73948 8.97685C9.78498 8.88177 9.83048 8.70035 9.84914 8.54927C9.86314 8.43377 9.85906 8.37077 9.85731 8.33168C9.85498 8.26927 9.80306 8.20452 9.74648 8.1771L9.40698 8.02485C9.40698 8.02485 8.89948 7.80377 8.58914 7.6626C8.55666 7.64846 8.52187 7.64035 8.48648 7.63868C8.44656 7.63451 8.40621 7.63896 8.36817 7.65174C8.33013 7.66452 8.29527 7.68534 8.26598 7.71277C8.26306 7.7116 8.22398 7.74485 7.80223 8.25585C7.77802 8.28838 7.74468 8.31296 7.70645 8.32646C7.66821 8.33997 7.62683 8.34179 7.58756 8.33168C7.54954 8.32155 7.51231 8.30868 7.47614 8.29318C7.40381 8.26285 7.37873 8.25118 7.32914 8.23018C6.99424 8.08429 6.68423 7.88688 6.41039 7.6451C6.33689 7.58093 6.26864 7.51093 6.19864 7.44327C5.96917 7.22347 5.76917 6.97484 5.60364 6.7036L5.56923 6.64818C5.54488 6.61073 5.52492 6.57061 5.50973 6.5286C5.48756 6.44285 5.54531 6.37402 5.54531 6.37402C5.54531 6.37402 5.68706 6.21885 5.75298 6.13485C5.81714 6.05318 5.87139 5.97385 5.90639 5.91727C5.97523 5.80643 5.99681 5.69268 5.96064 5.6046C5.79731 5.2056 5.62853 4.80874 5.45431 4.41402C5.41989 4.33585 5.31781 4.27985 5.22506 4.26877C5.19356 4.26488 5.16206 4.26177 5.13056 4.25943C5.05224 4.25494 4.9737 4.25572 4.89548 4.26177L5.01331 4.25768Z" fill="#0556F3"/>\n</svg>\n',
                            modifier: "whatsapp"
                        }, {
                            url: "https://www.facebook.com/sharer/sharer.php?u=" + e,
                            title: "Share on Facebook",
                            activeSvg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.16732 7.87435H9.62565L10.209 5.54102H8.16732V4.37435C8.16732 3.77352 8.16732 3.20768 9.33398 3.20768H10.209V1.24768C10.0188 1.2226 9.30073 1.16602 8.5424 1.16602C6.95865 1.16602 5.83398 2.1326 5.83398 3.90768V5.54102H4.08398V7.87435H5.83398V12.8327H8.16732V7.87435Z" fill="#0556F3"/>\n</svg>\n',
                            modifier: "facebook"
                        }])(e, t),
                        n = document.getElementById("social-icons");
                    n.innerHTML = "";
                    const i = document.createElement("ul");
                    i.className = "social-icons-container", o.forEach(e => {
                        const t = document.createElement("li"),
                            o = document.createElement("a");
                        o.href = e.url, o.target = "_blank", o.rel = "noopener noreferrer", o.title = e.title, o.className = "social-icon social-icon--" + e.modifier, o.innerHTML = e.activeSvg, t.appendChild(o), i.appendChild(t)
                    }), n.appendChild(i)
                })(o, "I just wrote this program on Programiz Online Compiler."), $(".share-link-generating-modal").hide(), $(".share-code-value").val(o), $(".share-link-modal .modal-content").removeClass("hidden"), $(".share-code-copy-btn").css("display", "inline-block"), $(".code-copied-success").css("display", "none"), $(".share-link-modal").show()
            }).catch(() => {
                u || (w(), $(".share-link-generating-modal").hide(), p("Failed to generate link.", "error"))
            })
        },
        w = () => {
            u = !0, $(".progress").stop(!0, !0).css("width", "0%"), $(".share-link-generating-modal").hide()
        },
        v = s("browser_id"),
        f = a();
    let b;
    v || r("browser_id", a(), 365), ace.define("ace/mode/programiz_terminal_highlight_rules", (function(e, t, o) {
        var n = e("ace/lib/oop"),
            i = e("ace/mode/text_highlight_rules").TextHighlightRules,
            a = function() {
                this.$rules = {
                    start: [{
                        token: ["comment.line.colons.dosbatch"],
                        regex: "(?:^|\\b)gcc($|\\s.*$)",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(/tmp).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: /^g\+\+.*$/,
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: /^cat.*$/,
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: /^>/
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(java -cp).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(csc|mono).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(node).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(swift).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(Rscript).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(go run).*$",
                        caseInsensitive: !0
                    }, {
                        token: ["comment.line.colons.dosbatch"],
                        regex: "^(php).*$",
                        caseInsensitive: !0
                    }]
                }
            };
        n.inherits(a, i), t.ProgramizTerminalHighlightRules = a
    })), ace.define("ace/mode/programiz_terminal", (function(e, t, o) {
        var n = e("ace/lib/oop"),
            i = e("ace/mode/text").Mode,
            a = e("ace/mode/programiz_terminal_highlight_rules").ProgramizTerminalHighlightRules,
            r = function() {
                this.HighlightRules = a
            };
        n.inherits(r, i),
            function() {}.call(r.prototype), t.Mode = r
    }));


    const k = ace.edit("editor"),
        x = ace.edit("terminal");
    let y = $("#root").data("lang") || c.DEFAULT_LANGUAGE,
        S = c.ACE_EDITOR_MODES[y];
    k.setTheme("ace/theme/textmate"), k.getSession().setMode("ace/mode/" + S), x.setTheme("ace/theme/textmate"), x.getSession().setMode("ace/mode/programiz_terminal");
    const L = () => {
        let e = 0;
        (navigator && navigator.platform ? ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) : navigator.userAgent && -1 == navigator.userAgent.toLowerCase().indexOf("iphone")) && (e = 216);
        const t = ($(".wrapper").height() - 48 - 48 - e) / 22 - 3;
        k.setOptions({
            fontFamily: "droid_sans_monoregular",
            fontSize: "14px",
            wrap: true,
            useSoftTabs: true,
            tabSize: 4,
            displayIndentGuides: true,
            showGutter: !0,
            highlightActiveLine: !0,
            wrap: !0,
            useWorker: !1,
            overwrite: !1,
            tooltipFollowsMouse: !1,
            maxLines: t,
            dragEnabled: !1,
            showPrintMargin: !1,
        }), k.container.style.lineHeight = "22px", x.setOptions({
            fontFamily: "Monocraft, droid_sans_monoregular",
            fontSize: "14px",
            showGutter: !1,
            highlightActiveLine: !1,
            behavioursEnabled: !1,
            wrapBehavioursEnabled: !1,
            wrap: !0,
            useWorker: !0,
            overwrite: !1,
            maxLines: t,
            dragEnabled: !1,
            cursorStyle: "slim",
            showPrintMargin: !1,
            displayIndentGuides: !1
        }), x.container.style.lineHeight = "22px"

        
    };
    

    L(), $(window).resize(L);
    let T = !1;
    const P = new URLSearchParams(window.location.search).get("ref");
    let _ = "";
    $("#notification").hasClass("share-error") && (p("The link you entered is not valid.", "error"), $("#notification").removeClass("share-error"));
    try {
        const e = localStorage.getItem("playground"),
            t = JSON.parse(e);
        t && P && t[P] && t[P].code && (_ = t[P].code), _ && k.setValue(_, 1)
    } catch (e) {
        localStorage.removeItem("playground")
    }
    k.commands.addCommand({
        name: "executeCode",
        bindKey: {
            win: "Alt-Enter",
            mac: "Cmd-Enter|Alt-Enter"
        },
        exec: function() {
            return $(".run").is(":disabled") || I(), !1
        }
    }), x.commands.addCommand({
        name: "backspace",
        bindKey: {
            win: "Backspace",
            mac: "Backspace|Delete"
        },
        exec: function() {
            return !(x.getValue().length > A.length)
        }
    }), x.commands.addCommand({
        name: "executeCode",
        bindKey: {
            win: "Ctrl-Enter",
            mac: "Cmd-Enter|Ctrl-Enter"
        },
        exec: function() {
            return $(".run").is(":disabled") || I(), !1
        }
    }), window.innerWidth < 1e3 && (k.renderer.$cursorLayer.isBlinking = !1, x.renderer.$cursorLayer.isBlinking = !1);
    let E = null,
        A = y == c.SUPPORTED_LANGUAGES.PYTHON ? "> " : "$ ",
        O = "";

   function M(e) {
    E = io(e, {
        transports: ["websocket"]
    });
    const t = () => {
        $(".mobile-run-button #loader").replaceWith(l);
        $(".desktop-run-button #loader").replaceWith(l);
        $(".mobile-top-bar-run-button").html('<img src="assets/icons/play.svg" alt="run-icon"/>');
        $(".desktop-run-button").attr("disabled", !1).css({ cursor: "pointer" });
    };

    E.on("output", ({ output: e }) => {
        t();
        e = e.split(">>>").join(">");
        
        // Remove the completion message if it exists
        const completionMessage = "=== Code Execution Successful ===";
        if (e.includes(completionMessage)) {
            e = e.replace(completionMessage, "").trim();
        }

        O.length > 0 && (e.startsWith(O) ? (e = e.slice(O.length), O = "") : O.startsWith(e) ? (O = O.slice(e.length), e = "") : e.startsWith("> ") && e.replace("> ", "").startsWith(O) && (e = e.slice(O.length + 2).trimLeft()));
        const o = x.getValue() + e;
        x.setValue(o, 1);
        A = x.getValue();
        console.log(gameStarted);
        // clearconsole
        if (loadImageStatus){
            k.focus();
            k.setValue("");
        }else {
            x.focus();
        }
    });

    E.on("disconnect", e => {
        if (console.log("Disconnected: " + e), (!/iPad|iPhone|iPod/.test(navigator.userAgent) || window.MSStream) && ("ping timeout" === e || "transport close" === e)) {
            const e = x.getValue() + "\n=== Session Ended. Please Run the code again ===";
            x.setValue(e, 1);
            E.disconnect();
        }
        t();
    });

    E.on("connect", function() {
        x.setValue(A, 1);
        Object.values(c.SUPPORTED_LANGUAGES).includes(y) || alert(`This language is not supported, initializing ${c.DEFAULT_LANGUAGE} instead`);
    });
}
    x.commands.addCommand({
        name: "newLine",
        bindKey: {
            win: "Enter",
            mac: "Enter|Ctrl-Enter"
        },
        exec: () => (O = x.getValue().slice(A.length), E.emit("evaluate", {
            code: O
        }), !0)
    });
    const H = () => {
        "" === k.getValue().trim() ? ($(".share-button-mob").attr("disabled", !0).attr("title", "Write code to enable sharing."), $(".share-button").attr("disabled", !0).attr("title", "Write code to enable sharing.")) : ($(".share-button-mob").attr("disabled", !1).attr("title", "Share code"), $(".share-button").attr("disabled", !1).attr("title", "Share code"))
    };
    k.on("change", H), H(), $(".spinner").hide(), $(".wrapper").css({
        display: "block"
    }), $(".mobile-nav-drawer").addClass("show");
    const I = () => {
        let e = !0;
        E && E.disconnect(), A = "", O = "", V(), $(".desktop-run-button").attr("disabled", !0), $(".desktop-run-button").css({
            cursor: "not-allowed"
        }), x.setValue("");
        const t = k.getValue(),
            o = m(y);
        try {
            (async ({
                browserId: e,
                code: t,
                sessionId: o,
                language: n
            }) => {
                try {
                    const i = "https://compiler-api.programiz.com" + "/api/v1/code",
                        l = navigator.userAgent;
                    let c = s(e);
                    c || (c = a(), r(e, c, 365));
                    const d = {
                        user_id: c,
                        session_id: o,
                        code: t,
                        user_agent: l,
                        language: n
                    };
                    (await fetch(i, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(d)
                    })).json()
                } catch (e) {}
            })({
                browserId: "browser_id",
                code: t,
                sessionId: f,
                language: y
            })
        } catch (e) {}
        o && (M(o), E.on("connect", () => {
            e && (E.emit("run", {
                code: t
            }), e = !1)
        }))
        E.on("output", () => {
            $(".desktop-run-button").html('▶ RUN').attr("disabled", !1).css({ cursor: "pointer" });
        });

    };
    Mousetrap.bind(["command+enter", "ctrl+enter"], (function(e) {
        return $(".run").is(":disabled") || I(), !1
    })), $("#toggle-expanded-mode-desktop").click(e => {
        e.preventDefault(), $(".spinner").show(), $(".wrapper").css({
                display: "none"
            }), $(".mobile-nav-drawer").removeClass("show"),
            function(e = !0) {
                e ? ($(".container").addClass("maximized"), $("#toggle-expanded-mode-desktop").prop("title", "Exit Fullscreen"), T = !0) : ($(".container").removeClass("maximized"), $("#toggle-expanded-mode-desktop").prop("title", "Enter Fullscreen"), T = !1)
            }(!T), setTimeout(() => {
                $(".spinner").hide(), $(".wrapper").css({
                    display: "block"
                }), $(".mobile-nav-drawer").addClass("show")
            }, 0)
    }), $(".mobile-run-button").click(e => {
        I(), N(i)
    }), $(".mobile-top-bar-run-button").click(e => {
        I(), N(i)
    });
    const V = () => {
        $("span.run-text").replaceWith('<svg id="loader" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <circle cx="12" cy="12" r="10" stroke="white" stroke-opacity="0.6" stroke-width="4"/>\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0V4C7.58172 4 4 7.58172 4 12C4 12.3387 4.02104 12.6724 4.06189 13H0.0410728C0.0138702 12.6703 0 12.3368 0 12Z" fill="white"/>\n                      </svg>\n'), $(".mobile-top-bar-run-button").html('<svg id="mobile-top-bar-run-button-loader" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <circle cx="12" cy="12" r="10" stroke="white" stroke-opacity="0.6" stroke-width="4"/>\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0V4C7.58172 4 4 7.58172 4 12C4 12.3387 4.02104 12.6724 4.06189 13H0.0410728C0.0138702 12.6703 0 12.3368 0 12Z" fill="white"/>\n                      </svg>\n')
    };
    $(".desktop-run-button").click(e => {
        I()
    }), $(".desktop-clear-button").click(e => {
        (() => {
            const e = y === c.SUPPORTED_LANGUAGES.PYTHON ? "> " : "";
            x.setValue(e, 1), A = e, O = "", x.focus()
        })()
    }), $(".burger-menu-btn").click(e => {
        e.preventDefault(), G(!0)
    }), $(".close-nav-btn").click(e => {
        e.preventDefault(), G(!1)
    }), $(".notification").click(() => {
        g()
    }), $(".share-button, .share-button-mob").click(async e => {
        e.preventDefault(), $(".share-link-generating-modal .modal-content").remove("hidden"), $(".share-link-modal .modal-content").remove("hidden"), $(".share-link-generating-modal").show(), setTimeout(() => {
            C({
                code: k.getValue(),
                language: y
            })
        }, 300)
    }), $(".share-code-copy-btn").click(() => {
        (() => {
            const e = document.querySelector(".share-code-value");
            navigator.clipboard.writeText(e.value).then(() => {
                $(".share-code-copy-btn").css("display", "none"), $(".code-copied-success").css("display", "flex")
            }).catch(e => {})
        })()
    }), $(".modal-content").click(e => {
        e.stopPropagation()
    }), $(".close-modal").click(e => {
        w(), $(".share-link-modal .modal-content").addClass("hidden"), $(".share-link-modal .modal-backdrop-share").addClass("hidden"), b && clearTimeout(b), b = setTimeout(() => {
            $(".share-link-modal .modal-content").removeClass("hidden"), $(".share-link-modal .modal-backdrop-share").removeClass("hidden"), $(".share-link-generating-modal").hide(), $(".share-link-modal").hide()
        }, 300)
    });
    const N = e => {
        e === n && ($(".shell-pill").removeClass("active"), $(".compiler-pill").addClass("active"), $(".terminal-wrapper").hide(), $(".editor-wrapper").show(), k.focus(), k.navigateLineEnd()), e === i && ($(".shell-pill").addClass("active"), $(".compiler-pill").removeClass("active"), $(".terminal-wrapper").show(), $(".editor-wrapper").hide(), x.focus())
    };

    function R(e = !0) {
        if (e) return k.setTheme("ace/theme/monokai"), x.setTheme("ace/theme/monokai"), $("#logo").attr("src", "assets/logos/logo-inverted.svg"), $("#nav-logo").attr("src", "assets/logos/logo-inverted.svg"), $(".container").addClass("dark-mode"), void $("#toggle-dark-mode-desktop").prop("title", "Toggle light mode");
        k.setTheme("ace/theme/textmate"), x.setTheme("ace/theme/textmate"), $(".container").removeClass("dark-mode"), $("#logo").attr("src", "assets/logos/logo.svg"), $("#nav-logo").attr("src", "assets/logos/logo.svg"), $("#toggle-dark-mode-desktop").prop("title", "Toggle dark mode")
    }

    function D() {
        const e = localStorage.getItem("playground");
        if (!e) return y === c.SUPPORTED_LANGUAGES.PYTHON && (localStorage.setItem("playground", JSON.stringify({
            darkMode: {
                status: !0,
                updatedAt: Date.now()
            }
        })), !0);
        const t = JSON.parse(e);
        return !!(t && t.darkMode && t.darkMode.status)
    }

    function G(e = !0) {
        e ? $(".mobile-nav-drawer").addClass("visible") : $(".mobile-nav-drawer").removeClass("visible")
    }
    $(".shell-pill").click(() => {
        N(i)
    }), $(".compiler-pill").click(() => {
        N(n)
    }), $("#back-button").click(() => {
        window.history.back()
    }), $("#toggle-dark-mode-mobile, #toggle-dark-mode-desktop").click(() => {
        const e = JSON.parse(localStorage.getItem("playground")) || {},
            t = D() ? 0 : 1;
        let o = {
            status: t,
            updatedAt: Date.now()
        };
        const n = Object.assign(e, {
            darkMode: o
        });
        R(t), localStorage.setItem("playground", JSON.stringify(n))
    }), D() && R(!0), $("img.svg").each((function() {
        var e = $(this),
            t = e.attr("id"),
            o = e.attr("class"),
            n = e.attr("src");
        $.get(n, (function(n) {
            var i = $(n).find("svg");
            void 0 !== t && (i = i.attr("id", t)), void 0 !== o && (i = i.attr("class", o + " replaced-svg")), i = i.removeAttr("xmlns:a"), e.replaceWith(i)
        }), "xml")
    })), $(".desktop-save-button").on("click", () => {
        y === c.SUPPORTED_LANGUAGES.PYTHON && window.confirm("Redirecting you to our new Python IDE that supports saving, sharing, working with files & installing packages.") && window.open("https://programiz.pro/ide/python?utm_source=compiler-nav-save&utm_medium=referral&utm_campaign=programiz", "_blank"), y === c.SUPPORTED_LANGUAGES.C && window.confirm("Redirecting you to our new C IDE that supports saving, sharing and working with files.") && window.open("https://programiz.pro/ide/c?utm_source=compiler-nav-save&utm_medium=referral&utm_campaign=programiz", "_blank")
    });
    window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
        e.matches ? ($(".shell-pill").removeClass("active"), $(".compiler-pill").removeClass("active"), $(".terminal-wrapper").show(), $(".editor-wrapper").show(), k.focus(), k.navigateLineEnd()) : ($(".shell-pill").removeClass("active"), $(".compiler-pill").addClass("active"), $(".terminal-wrapper").hide(), $(".editor-wrapper").show(), k.focus(), k.navigateLineEnd())
    })
}]);




// Select the focusable elements
const typeVariableButton = document.querySelector('.type-variable');
const basicButton = document.querySelector('.basic');

// Select the zones to show/hide
const variableTypeZone = document.querySelector('.type-variable-contain');
const basicZone = document.querySelector('.basic-zone-contain');
const toolZone = document.querySelector('.tool-zone');

// Function to show variableTypeZone and hide basicZone
function showVariableTypeZone() {
    variableTypeZone.style.display = 'flex';
    variableTypeZone.style.flexDirection = 'column';
    toolZone.style.display = 'block'; 
    basicZone.style.display = 'none';
}

// Function to show basicZone and hide variableTypeZone
function showBasicZone() {
    basicZone.style.display = 'flex';
    basicZone.style.flexDirection = 'column'; 
    toolZone.style.display = 'block'; 
    variableTypeZone.style.display = 'none';
}

// Function to hide toolZone if no buttons are focused
function hideToolZone() {
    if (document.activeElement !== typeVariableButton && document.activeElement !== basicButton) {
        toolZone.style.display = 'none';
    }
}

// Add event listeners for the focus event
typeVariableButton.addEventListener('focus', showVariableTypeZone);
basicButton.addEventListener('focus', showBasicZone);

// Add event listeners for the blur event
typeVariableButton.addEventListener('blur', hideToolZone);
basicButton.addEventListener('blur', hideToolZone);  


// Function to check the media query and apply styles
function checkMediaQuery() {
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    const toolZone = document.querySelector('.tool-zone');

    // Function to handle media query changes
    function handleMediaQueryChange(e) {
        if (e.matches) {
            // If the media query matches, hide the tool zone
            toolZone.style.display = 'none';
        } else {
            // Otherwise, show the tool zone
            toolZone.style.display = 'none'; // or whatever display style you need
        }
    }

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Listen for media query changes
    mediaQuery.addListener(handleMediaQueryChange);
}

// Call the function on page load
checkMediaQuery();


function submit_input() {
    
    let lavaArea = document.querySelector('.lavaArea');
    var name = document.getElementById('input-name');
    var no = document.getElementById('input-no');
    var workname = document.getElementById('student-name'); 
    var code = document.getElementById('input-pass');

    let stevehunger = document.querySelector('.minecraft-container');
    let supportMedia_W = window.matchMedia("(min-width:1300px)");
    let supportMedia_H = window.matchMedia("(min-height:720px)");

    
    document.getElementById('class-content-popup').style.display = 'none';
    workname.innerHTML = name.value + " เลขที่ " + no.value;

    if (code.value == "m1" || code.value == "M1") {
        workbtn_desktop = document.getElementById('assignment-work-desktop')
        workbtn_mobile = document.getElementById('assignment-work-mobile')
        
        workbtn_desktop.style.display = "block";
        workbtn_mobile.style.display = "block";
        stevehunger.style.display = "none";
        loadImageStatus = false;
        
    } 
    else if (code.value.toString().trim() == "stevehunger"){
        if (supportMedia_W.matches && supportMedia_H.matches) {
            stevehunger.style.display = "flex";
            if (gameStarted) {
                lavaArea.style.display = "block";
            }
            else {
                code.value = '';
                lavaArea.style.display = "none";
            }
        }
        else {
            stevehunger.style.display = "none";
            
        }
        backHome();
        workbtn_desktop.style.display = "none";
    }
    else {
        loadImageStatus = false;
        stevehunger.style.display = "none";
        workbtn_desktop.style.display = "none";
        workbtn_mobile.style.display = "none";
    }
}
//#endregion

// ---------------------------------------------------------------------------------------------------------------- GAME FUNCTION

const gridSize = 12;
let stevePosition = { x: 0, y: 0 };
let direction = 'right';
let commandQueue = [];
let fullness = 10; // Start with full hunger
let fullnessSpeed = 13000; // 13 second per -1 fullness

let gameStarted = false; 

const maxFoodItems = 6; //maximum spawn food in grid

let collectedItems = {}; // Track collected items
let loopCounter = 0; // Counter for loops

const normalMoveSpeed = 300; // Normal move speed in milliseconds
const soulSandSpeed = 600; // Slower move speed in milliseconds
let movespeed = normalMoveSpeed;

let scoreMap = "";

let portal1Position = { x: null, y: null };
let portal2Position = { x: null, y: null };

let score = 0;
let foodItems = [];
const foodTypes = [
    { type: 'Apple', points: 1, fullness: 1, displayTime: 120000, image: 'https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/food/apple.png' },
    { type: 'Cake', points: 2, fullness: 2, displayTime: 120000, image: 'https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/food/cake.png' },
    { type: 'Steak', points: 3, fullness: 3, displayTime: 120000, image: 'https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/food/steak.png' },
    { type: 'Golden Apple', points: 4, fullness: 4, displayTime: 80000, image: 'https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/food/golden-apple.gif' }
];

loadImageStatus = false;

// Textures based on score thresholds
const textures = {
    5: [
        'https://i.pinimg.com/236x/63/e1/81/63e181479262a3638cbaeb4efdb925b8--banquet-minecraft.jpg',
        'https://i.ibb.co/R334St7/Andesite-texture.png'
    ],
    8: [
        'https://i.pinimg.com/236x/63/e1/81/63e181479262a3638cbaeb4efdb925b8--banquet-minecraft.jpg',
        'https://i.ibb.co/R334St7/Andesite-texture.png',
        'https://i.ibb.co/MCTf9xt/coal-ore-texture.png'
    ],
    10: [
        'https://i.pinimg.com/236x/63/e1/81/63e181479262a3638cbaeb4efdb925b8--banquet-minecraft.jpg',
        'https://i.ibb.co/R334St7/Andesite-texture.png',
        'https://i.ibb.co/MCTf9xt/coal-ore-texture.png',
        'https://i.ibb.co/7jzn4Qg/iron-ore-texture.png'
    ],
    30: [
        'https://i.ibb.co/p28Pwz3/deep-stone-texture.png',
        'https://i.ibb.co/TPRDz4F/deep-diamond-texture.jpg',
        'https://i.ibb.co/b3yxFrF/sculk-texture.png'
    ],
    38: [
        'https://i.ibb.co/b3yxFrF/sculk-texture.png',
        'https://i.ibb.co/ZY5cvn5/sculk-deep-stone-texture.png'
    ],
    50: [
        'https://i.ibb.co/VxRHdxD/nether-rack.jpg',
        'https://i.ibb.co/phfm40S/gold-ingot.jpg',
        // 'https://i.ibb.co/WcJ4DkC/soul-sand.png'
    ]
    
};

function preloadImages(imageUrls, callback) {
    let loadedImages = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                callback();
            }
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${url}`);
            loadedImages++;
            if (loadedImages === totalImages) {
                callback();
            }
        };
    });
}

function loadAllTextures(callback) {
    
    const allTextures = ["https://i.ibb.co/WcJ4DkC/soul-sand.png",
        "https://i.ibb.co/qxyzJCB/portal-texture.gif",
        "https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/steve/steve-right.png",
        "https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/steve/steve-left.png",
        "https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/steve/steve-up.png",
        "https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/steve/steve-down.png",
        "https://minecraft.wiki/images/thumb/Knowledge_Book_JE2.png/120px-Knowledge_Book_JE2.png?c1af4&20190925230326"];
    for (const key in textures) {
        if (textures.hasOwnProperty(key)) {
            allTextures.push(...textures[key]);
        }
    }

    console.log(allTextures);
    preloadImages(allTextures, callback);
}

loadAllTextures(startGame);

// Create the grid
function createGrid() {
    const grid = document.getElementById('grid');
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        grid.appendChild(div);
    }
}

function addPortalsToGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    let portal1Placed = false;
    let portal2Placed = false;

    // Clear existing portals
    gridItems.forEach(item => {
        if (item.classList.contains('portal1') || item.classList.contains('portal2')) {
            item.classList.remove('portal1', 'portal2');
            item.style.backgroundImage = ''; // Make sure this does not affect other items
        }
    });

    if (score > 28 && score < 50){
    
    
        // Place portal1
        while (!portal1Placed) {
            const index = Math.floor(Math.random() * gridItems.length);
            const gridItem = gridItems[index];
            if (!gridItem.classList.contains('portal1') && !gridItem.classList.contains('portal2')) {
                gridItem.classList.add('portal1');
                gridItem.style.backgroundImage = 'url("https://i.ibb.co/qxyzJCB/portal-texture.gif")';
                portal1Placed = true;
                portal1Position = { x: index % gridSize, y: Math.floor(index / gridSize) };
            }
        }
    
        // Place portal2
        while (!portal2Placed) {
            const index = Math.floor(Math.random() * gridItems.length);
            const gridItem = gridItems[index];
            if (!gridItem.classList.contains('portal1') && !gridItem.classList.contains('portal2')) {
                gridItem.classList.add('portal2');
                gridItem.style.backgroundImage = 'url("https://i.ibb.co/qxyzJCB/portal-texture.gif")';
                portal2Placed = true;
                portal2Position = { x: index % gridSize, y: Math.floor(index / gridSize) };
            }
        }
    }
}
// Function to check for portals and teleport Steve
function checkForPortals() {
    const gridItems = document.querySelectorAll('.grid-item');
    const currentIndex = stevePosition.y * gridSize + stevePosition.x;
    const currentGridItem = gridItems[currentIndex];

    if (currentGridItem.classList.contains('portal1')) {
        // Teleport from portal1 to portal2
        stevePosition.x = portal2Position.x;
        stevePosition.y = portal2Position.y;
    } else if (currentGridItem.classList.contains('portal2')) {
        // Teleport from portal2 to portal1
        stevePosition.x = portal1Position.x;
        stevePosition.y = portal1Position.y;
    }
}

function addSoulSandBlocks() {
    const gridItems = document.querySelectorAll('.grid-item');
    const numSoulSandBlocks = Math.floor(gridSize * gridSize * 0.1); // Adjust density as needed

    // Remove previous soul sand blocks
    gridItems.forEach(item => {
        item.classList.remove('soul-sand');
        item.style.backgroundImage = '';
    });

    if (score > 50) {
        for (let i = 0; i < numSoulSandBlocks; i++) {
            const index = Math.floor(Math.random() * gridItems.length);
            const gridItem = gridItems[index];
            gridItem.classList.add('soul-sand');
            gridItem.style.backgroundImage = 'url("https://i.ibb.co/WcJ4DkC/soul-sand.png")';
            gridItem.style.backgroundSize = 'cover';
            gridItem.style.backgroundRepeat = 'no-repeat';
        }
    }
}

function checkForSoulSandBlock() {
    const currentIndex = stevePosition.y * gridSize + stevePosition.x;
    const gridItem = document.querySelector(`.grid-item:nth-child(${currentIndex + 1})`);
    
    if (gridItem.classList.contains('soul-sand')) {
        movespeed = soulSandSpeed; // Slow down movement speed
    } else {
        movespeed = normalMoveSpeed; // Normal movement speed
    }
}

let addedLava = false;
let maxLavaBlocks = 10;

// Turn some blocks into lava blocks based on the score
function addLavaBlock() {
    const gridItems = document.querySelectorAll('.grid-item');
    

    // Remove previous lava blocks
    if (!addedLava){
        gridItems.forEach(item => {
            item.classList.remove('lava-block');
            item.style.backgroundImage = ''; 
        });
    }

    if (scoreMap === "lavaBlock" && !addedLava) {
        addedLava = true;
        const lavaBlocks = new Set(); // To ensure no duplicate blocks

        while (lavaBlocks.size < maxLavaBlocks) {
            const randomIndex = Math.floor(Math.random() * gridItems.length);
            lavaBlocks.add(randomIndex);
        }

        lavaBlocks.forEach(index => {
            const gridItem = gridItems[index];
            gridItem.classList.add('lava-block');
            gridItem.style.backgroundImage = 'url("https://i.gifer.com/1er8.gif")';
            gridItem.style.backgroundPosition = 'center';
            gridItem.style.backgroundSize = 'cover';
            gridItem.style.backgroundRepeat = 'no-repeat';
        });
    }
}

// Check if Steve is on a lava block
function checkForLavaBlock() {
    const currentIndex = stevePosition.y * gridSize + stevePosition.x + 1;
    const gridItem = document.querySelector(`.grid-item:nth-child(${currentIndex})`);
    
    if (gridItem.classList.contains('lava-block')) {
        gameOver(); // End game if Steve is on a lava block
    }
}

function setMapScoreTexture() {
    if (score >= 10 && score <= 50){
        scoreMap = "lavaBlock";
    } else if (score >= 51 && score <= 80){
        maxLavaBlocks = 6;
        addedLava = false;
    } else if (score >= 81 && score <= 90){
        scoreMap = "";
        addedLava = false;
    }
    else {
        scoreMap = "";
        addedLava = false;
    }
}

function updateGroundTexture(score) {
    setMapScoreTexture();
    let applicableTextures = [];

    if (score > 50) {
        applicableTextures = textures[50];
    } else if (score > 38) {
        applicableTextures = textures[38];
    } else if (score > 30) {
        applicableTextures = textures[30];
    } else if (score > 10) {
        applicableTextures = textures[10];
    } else if (score > 8) {
        applicableTextures = textures[8];
    } else if (score > 5) {
        applicableTextures = textures[5];
    }
    else {
        return;
    }

    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        if (item.classList.contains('soul-sand') || 
        item.classList.contains('portal1') || 
        item.classList.contains('portal2')) {
        return;
        }
        if (!item.classList.contains('lava-block')) { // Ensure lava blocks are not overwritten
            const randomTexture = applicableTextures[Math.floor(Math.random() * applicableTextures.length)];
            console.log('Setting background image to:', `url(${randomTexture})`);
            item.style.backgroundImage = `url(${randomTexture})`;
        }
    });
}

// Spawn food items
function spawnFood() {
    const foodContainer = document.getElementById('food-container');
    
    // Get all existing food items
    const existingFoodItems = document.querySelectorAll('.food-item');
    
    // Check if the number of food items is less than the maximum allowed
    if (existingFoodItems.length >= maxFoodItems) {
        return; // Exit function if maximum food items are already present
    }

    // Spawn new food items up to the maximum allowed
    let foodCount = maxFoodItems - existingFoodItems.length; // Number of new food items to spawn

    const gridItems = document.querySelectorAll('.grid-item');
    const lavaBlocks = new Set(
        Array.from(gridItems).filter(item => item.classList.contains('lava-block'))
            .map((item, index) => Array.from(gridItems).indexOf(item))
    );

    while (foodCount > 0) {
        const foodType = foodTypes[Math.floor(Math.random() * foodTypes.length)];
        let x, y;
        let gridItemIndex;
        do {
            x = Math.floor(Math.random() * gridSize);
            y = Math.floor(Math.random() * gridSize);
            gridItemIndex = y * gridSize + x;
        } while (lavaBlocks.has(gridItemIndex) || gridItems[gridItemIndex].querySelector('.food-item'));

        const food = document.createElement('div');
        food.className = 'food-item';
        food.style.backgroundImage = `url('${foodType.image}')`;
        food.style.backgroundPosition = 'center';
        food.style.backgroundSize = 'cover';
        food.style.backgroundRepeat = 'no-repeat';
        food.dataset.type = foodType.type;
        food.dataset.points = foodType.points;
        food.dataset.fullness = foodType.fullness;
        food.dataset.displayTime = foodType.displayTime;

        const timer = document.createElement('div');
        timer.className = 'food-timer';
        food.appendChild(timer);
        
        // Position the food item in the selected grid item
        const gridItem = gridItems[gridItemIndex];
        gridItem.appendChild(food);

        // Start the timer for the food item
        let displayTime = foodType.displayTime;
        timer.textContent = Math.ceil(displayTime / 1000);
        const interval = setInterval(() => {
            displayTime -= 1000;
            timer.textContent = Math.ceil(displayTime / 1000);
            if (displayTime <= 0) {
                clearInterval(interval);
                gridItem.removeChild(food);
                spawnFood(); // Respawn new food
            }
        }, 1000);

        foodItems.push(food);
        foodCount--; // Decrease the count of new food items to spawn
    }
}

// Update hunger status
function updateHungerStatus() {
    document.getElementById('current-score').innerText = `Score: ${score}`;
    document.getElementById('hunger-image').src = `https://raw.githubusercontent.com/sunzieck77/pycraft_demo/main/assets/food/food-${fullness}.png`;
    if (fullness <= 0) {
        gameOver();
    }
}

// Initialize Steve's position in the grid
function placeSteve() {
    const items = document.querySelectorAll('.grid-item');
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === stevePosition.y * gridSize + stevePosition.x) {
            item.classList.add('active');
            const steve = document.createElement('div');
            steve.className = 'steve ' + direction;
            item.appendChild(steve);
        }
    });
}

// Collect food
function collectFood(foodItem) {
    const points = parseInt(foodItem.dataset.points);
    const fullnessValue = parseInt(foodItem.dataset.fullness);
    const foodType = foodItem.dataset.type;

    // Update score and fullness
    score += points;
    fullness = Math.min(10, fullness + fullnessValue); // Increase fullness, cap at 10

    updateHungerStatus();
    addLavaBlock();
    addSoulSandBlocks();
    addPortalsToGrid();
    updateGroundTexture(score); 
    
    // Track collected items
    if (!collectedItems[foodType]) {
        collectedItems[foodType] = { count: 0, points: 0 };
    }
    collectedItems[foodType].count += 1;
    collectedItems[foodType].points += points;

    updateCollectedItems();
}

// Handle food click event
function handleFoodClick(event) {
    const foodItem = event.target.closest('.food-item');
    if (foodItem) {
        collectFood(foodItem);
        const gridItem = foodItem.parentElement;
        gridItem.removeChild(foodItem);
        spawnFood(); // Respawn new food
    }
}

let lavaArea = document.querySelector('.lavaArea');
function executeCommand() {
    if (gameStarted) {
        lavaArea.style.display = "block";
        const commandsText = document.getElementById('editor').innerText.toLocaleLowerCase();
        commandQueue = parseCommands(commandsText);
        processCommands();
    } else {
        lavaArea.style.display = "none";
    }
}

function parseCommands(commandsText) {
    const commandQueue = [];
    const lines = commandsText.split('\n');
    let loopCommands = [];
    let inLoop = false;
    let loopCount = 0;
    let loopIndent = 0;

    lines.forEach(line => {
        const trimmedLine = line.trim();
        const currentIndent = line.search(/\S/);

        if (trimmedLine.startsWith("for ") && trimmedLine.includes(" in range(")) {
            inLoop = true;
            loopCount = parseInt(trimmedLine.match(/range\((\d+)\):/)[1], 10);
            loopIndent = currentIndent;
        } else if (inLoop && currentIndent > loopIndent) {
            loopCommands.push(trimmedLine);
        } else if (inLoop && currentIndent <= loopIndent) {
            // End of loop commands
            for (let i = 0; i < loopCount; i++) {
                loopCommands.forEach(loopCommand => {
                    commandQueue.push(loopCommand);
                });
            }
            inLoop = false;
            loopCommands = [];
            if (trimmedLine.startsWith("print(")) {
                commandQueue.push(trimmedLine);
            }
        } else if (!inLoop && trimmedLine.startsWith("print(")) {
            commandQueue.push(trimmedLine);
        }
    });

    // If still in loop after the last line
    if (inLoop) {
        for (let i = 0; i < loopCount; i++) {
            loopCommands.forEach(loopCommand => {
                commandQueue.push(loopCommand);
            });
        }
    }

    return commandQueue;
}

function processCommands() {
    if (commandQueue.length > 0) {
        const command = commandQueue.shift().trim();
        if (command === "print('w')" || command === 'print("w")') {
            moveForward();
        } else if (command === "print('s')" || command === 'print("s")') {
            moveBackward();
        } else if (command === "print('d')" || command === 'print("d")') {
            turnRight();
        } else if (command === "print('a')" || command === 'print("a")') {
            turnLeft();
        }
        setTimeout(processCommands, movespeed);
    }
}

function collectFoodIfPresent() {
    const currentIndex = stevePosition.y * gridSize + stevePosition.x;
    const gridItem = document.querySelector(`.grid-item:nth-child(${currentIndex + 1})`);
    const foodItem = gridItem.querySelector('.food-item');
    
    // Check if current position is a lava block
    if (gridItem.classList.contains('lava-block')) {
        gameOver(); // End the game if on a lava block
        return;
    }

    if (foodItem) {
        collectFood(foodItem);
        gridItem.removeChild(foodItem);
        spawnFood(); // Respawn new food
    }
}

function checkSpecialBlock(){
    checkForSoulSandBlock(); 
    checkForLavaBlock();
    checkForPortals();
}


// Move Steve forward based on direction
function moveForward() {
    const items = document.querySelectorAll('.grid-item');
    items.forEach((item) => {
        const steve = item.querySelector('.steve');
        if (steve) {
            item.removeChild(steve);
        }
    });

    if (direction === 'right') {
        if (stevePosition.x < gridSize - 1) {
            stevePosition.x += 1;
        }else {
            gameOver(); // End game if moving out of bounds
            return;
        }
    } else if (direction === 'left') {
        if (stevePosition.x > 0) {
            stevePosition.x -= 1;
        }else {
            gameOver(); // End game if moving out of bounds
            return;
        }
    } else if (direction === 'up') {
        if (stevePosition.y > 0) {
            stevePosition.y -= 1;
        }else {
            gameOver(); // End game if moving out of bounds
            return;
        }
    } else if (direction === 'down') {
        if (stevePosition.y < gridSize - 1) {
            stevePosition.y += 1;
        }else {
            gameOver(); // End game if moving out of bounds
            return;
        }
    }

    placeSteve();
    collectFoodIfPresent();
    checkSpecialBlock();
}


// Move Steve backward based on direction
function moveBackward() {
    const items = document.querySelectorAll('.grid-item');
    items.forEach((item) => {
        const steve = item.querySelector('.steve');
        if (steve) {
            item.removeChild(steve);
        }
    });

    if (direction === 'right') {
        if (stevePosition.x > 0) {
            stevePosition.x -= 1;
        } else {
            gameOver(); // End game if moving out of bounds
            return;
        }
    } else if (direction === 'left') {
        if (stevePosition.x < gridSize - 1) {
            stevePosition.x += 1;
        } else {
            gameOver(); // End game if moving out of bounds
            return;
        }
    } else if (direction === 'up') {
        if (stevePosition.y < gridSize - 1) {
            stevePosition.y += 1;
        } else {
            gameOver(); // End game if moving out of bounds
            return;
        }
    } else if (direction === 'down') {
        if (stevePosition.y > 0) {
            stevePosition.y -= 1;
        } else {
            gameOver(); // End game if moving out of bounds
            return;
        }
    }

    placeSteve();
    collectFoodIfPresent();
    checkSpecialBlock();
}

// Turn Steve right
function turnRight() {
    if (direction === 'right') {
        direction = 'down';
    } else if (direction === 'down') {
        direction = 'left';
    } else if (direction === 'left') {
        direction = 'up';
    } else if (direction === 'up') {
        direction = 'right';
    }
    updateSteveDirection();
}

// Turn Steve left
function turnLeft() {
    if (direction === 'right') {
        direction = 'up';
    } else if (direction === 'up') {
        direction = 'left';
    } else if (direction === 'left') {
        direction = 'down';
    } else if (direction === 'down') {
        direction = 'right';
    }
    updateSteveDirection();
}

// Update Steve's direction display
function updateSteveDirection() {
    const items = document.querySelectorAll('.grid-item');
    items.forEach((item, index) => {
        const steve = item.querySelector('.steve');
        if (steve) {
            steve.className = 'steve ' + direction;
        }
    });
}

let fullnessInterval; 

function startGame() {
    let lavaArea = document.querySelector(".lavaArea");    
    if (!gameStarted){
        fullness = 10;
        updateHungerStatus();
        lavaArea.style.display = "block";
        createGrid();
        placeSteve();
        spawnFood(); 
        addLavaBlock(); 
        addSoulSandBlocks(); 
        addPortalsToGrid();
    
        fullnessInterval = setInterval(() => {
            if (fullness > 0) {
                fullness -= 0.5;
                updateHungerStatus();
            }
        }, fullnessSpeed); // Every 5 seconds
    
        document.getElementById('start-button').style.display = 'none'; // Hide start button
        document.getElementById('hunger-image').style.display = 'block'; // Show hunger status image
        gameStarted = true;
    }
    
}

function restartGame() {
    maxLavaBlocks = 10;
    addedLava = false;
    fullness = 10;
    score = 0;
    direction = 'right';
    stevePosition = { x: 0, y: 0 };
    scoreMap = "";
    collectedItems = {}; // Reset collected items
    updateCollectedItems(); // Update collected items display
    updateHungerStatus();
    closeModal();
    document.getElementById('grid').innerHTML = ''; // Clear the grid
    document.getElementById('current-score').innerText = 'Score: 0'; // Reset score display
    createGrid();
    addSoulSandBlocks();
    addPortalsToGrid();
    placeSteve();
    spawnFood();
    gameStarted = true;
}

function exitGame(){
    maxLavaBlocks = 10;
    addedLava = false;
    gameStarted = false;
    fullness = 0;
    updateHungerStatus();
    score = 0;
    direction = 'right';
    stevePosition = { x: 0, y: 0 };
    collectedItems = {}; 
    updateCollectedItems(); 
    document.getElementById('grid').innerHTML = ''; 
    document.getElementById('current-score').innerText = 'Score: 0';
    clearInterval(fullnessInterval); 
    document.getElementById('start-button').style.display = 'block'; // Hide start button
    document.getElementById('hunger-image').style.display = 'none'; // Show hunger status image
    document.getElementById('minecraft-content').style.display = 'none';
    loadImageStatus = false;
    closeModal();
    
}

function backHome(){
    loadImageStatus = true;
    gameStarted = false;
    let lavaArea = document.querySelector(".lavaArea");
    lavaArea.style.display = "none";
    scoreMap = "";
    fullness = 0;
    score = 0;
    direction = 'right';
    stevePosition = { x: 0, y: 0 };
    collectedItems = {}; // Reset collected items
    updateCollectedItems(); // Update collected items display
    updateHungerStatus();
    closeModal();
    document.getElementById('grid').innerHTML = ''; // Clear the grid
    document.getElementById('current-score').innerText = 'Score: 0'; // Reset score display
    document.getElementById('start-button').style.display = 'block'; // Hide start button
    document.getElementById('hunger-image').style.display = 'none'; // Show hunger status image

}
// Add event listener for the start button
document.getElementById('start-button').addEventListener('click', startGame);

// Show popup modal with the score
function showModal() {
    document.getElementById('score').innerText = `Your score: ${score}`;
    document.getElementById('scoreModal').style.display = 'flex';
}

// Close the modal
function closeModal() {
    document.getElementById('scoreModal').style.display = 'none';
}

// Update the display of collected items
function updateCollectedItems() {
    const itemsList = document.getElementById('items-list');
    itemsList.innerHTML = ''; // Clear the list first

    for (const [type, { count, points }] of Object.entries(collectedItems)) {
        const listItem = document.createElement('li');
        const divfoodItem = document.createElement('div')
        divfoodItem.style.display = 'flex';
        divfoodItem.style.flexDirection = 'column';

        const listItemCount = document.createElement('span');
        const listItemScore = document.createElement('span');
        listItemScore.className = 'foodScoreLabel';
        
        const foodImg = document.createElement('img');
        foodImg.src = foodTypes.find(food => food.type === type).image;
        foodImg.width = 30;
        foodImg.height = 30;

        // const textNode = document.createTextNode(` ${type} x ${count}\t\n(${points} points)`);
        const textNode = document.createTextNode(` ${type} x ${count}`);
        const textNode2 = document.createTextNode(`(${points} points)`);

        listItemCount.appendChild(textNode);
        listItemScore.appendChild(textNode2);

        divfoodItem.appendChild(listItemCount);
        divfoodItem.appendChild(listItemScore);

        listItem.appendChild(foodImg);
        listItem.appendChild(divfoodItem);

        itemsList.appendChild(listItem);
    }
}

// Handle game over
function gameOver() {
    commandQueue = [];
    showModal();
    gameStarted = false;
}

// --------------------------------------------------------------------------------------------------------------------------------------END GAME FUNCTION
