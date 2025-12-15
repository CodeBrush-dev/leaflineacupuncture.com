// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.leaflineacupuncture.com",
    googleSiteVerification: "i3IY5tVNYllWlkauQZGs54nHCCkBNfmvogRMlwOD8gs"
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.leaflineacupuncture.com/","title_tag":"Acupuncture Boca Raton & Delray Beach | Leafline Acupuncture","meta_description":"Best acupuncturist Boca Raton offering acupuncture, microneedling, facial & cosmetic acupuncture in Delray Beach. Book a free consult — acupuncturist near me, holistic health Boca Raton."},{"page_url":"https://www.leaflineacupuncture.com/services-5","title_tag":"Acupuncture Services Boca Raton | Leafline Acupuncture","meta_description":"Comprehensive acupuncture, HTMA, microneedling & CranioSacral Therapy in Boca Raton and Delray Beach. Pain management, women's health — acupuncturist near me."},{"page_url":"https://www.leaflineacupuncture.com/affordable-acupuncture-treatments","title_tag":"Affordable Acupuncture Boca Raton | Leafline Acupuncture","meta_description":"Affordable acupuncture treatments in Boca Raton & Delray Beach for pain, TMJ, infertility and more. Best acupuncturist Boca Raton — acupuncture near me."},{"page_url":"https://www.leaflineacupuncture.com/general-8-1","title_tag":"HTMA Boca Raton | Leafline Acupuncture","meta_description":"Hair Tissue Mineral Analysis (HTMA) in Boca Raton to uncover mineral imbalances driving fatigue, hormones & thyroid. Functional testing with an acupuncturist near me."},{"page_url":"https://www.leaflineacupuncture.com/general-8-2","title_tag":"Functional Medicine Boca Raton | Leafline Acupuncture","meta_description":"Functional medicine testing in Boca Raton: hormone, stool, OAT and HTMA analysis. Root-cause care with acupuncture — functional medicine Boca Raton, acupuncturist near me."},{"page_url":"https://www.leaflineacupuncture.com/about-donna-acupuncture-expert","title_tag":"Best Acupuncturist Boca Raton - Donna | Leafline Acupuncture","meta_description":"Donna Harpaz, board-certified acupuncturist in Boca Raton offering pain management, women's health, CranioSacral Therapy & cosmetic acupuncture. Best acupuncturist Boca Raton."},{"page_url":"https://www.leaflineacupuncture.com/botanicals","title_tag":"Herbal Teas & Botanicals Boca Raton | Leafline Acupuncture","meta_description":"Leafline botanicals: herbal teas and Chinese formulas to support fertility, hormones and wellness in Boca Raton. Holistic health Boca Raton — acupuncturist near me."},{"page_url":"https://www.leaflineacupuncture.com/best-facial-rejuvenation-acpuncture","title_tag":"Facial Acupuncture Boca Raton | Leafline Acupuncture","meta_description":"Facial & cosmetic acupuncture, facial cupping and microneedling in Boca Raton and Delray Beach. Facial acupuncture Boca Raton — microneedling near me, cosmetic acupuncture near me."},{"page_url":"https://www.leaflineacupuncture.com/about-5","title_tag":"Microneedling Boca Raton | Leafline Acupuncture","meta_description":"Medical microneedling in Boca Raton to treat scars, pigmentation and wrinkles. Microneedling Boca Raton & facial acupuncture — microneedling near me, facial acupuncture near me."}],"keywords":["acupuncture near me","acupuncturist near me","microneedling near me","facial acupuncture near me","cosmetic acupuncture near me","best acupuncturist boca raton","acupuncture boca raton","acupuncture delray beach","holistic health boca raton","acupuncture womens health boca raton","pain management boca raton","acupuncture back pain boca raton","microneedling boca raton","facial acupuncture boca raton","cosmetic acupuncture boca raton","acupuncture tmj boca raton","craniocacral therapy boca raton","craniosacral therapy boca raton","functional medicine boca raton","hair tissue mineral analysis boca raton","htma boca raton","back pain boca raton"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.leaflineacupuncture.com/",
  "name": "Leafline Acupuncture",
  "url": "https://www.leaflineacupuncture.com/",
  "telephone": "914.393.0105",
  "email": "donna@leaflineacupuncture.com",
  "description": "Acupuncture, herbal medicine and natural cosmetic treatments in Boca Raton / Delray Beach. Services include acupuncture, Chinese herbalism, microneedling, facial rejuvenation acupuncture, cupping, CranioSacral Therapy, HTMA and functional medicine testing to support pain management, women's health, digestion, insomnia, and skin rejuvenation.",
  "logo": "https://static.wixstatic.com/media/8baef0_18a5127807914c7182b633c0c90e7c87~mv2.png/v1/fill/w_354,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14x10%20LL%20new%20logo.png",
  "image": [
    "https://static.wixstatic.com/media/8baef0_18a5127807914c7182b633c0c90e7c87~mv2.png/v1/fill/w_354,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14x10%20LL%20new%20logo.png",
    "https://static.wixstatic.com/media/8baef0_f8a4b1e804ee426eae16ad48ca1d5e56%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/8baef0_f8a4b1e804ee426eae16ad48ca1d5e56%7Emv2.jpg"
  ],
  "founder": {
    "@type": "Person",
    "name": "Donna Harpaz",
    "jobTitle": "Acupuncture Physician, Diplomate of Oriental Medicine, Board Certified Chinese Herbalist",
    "description": "Donna Harpaz is a licensed acupuncturist and board-certified Chinese herbalist who received her Masters of Acupuncture from the National College of Natural Medicine and is licensed by the Florida Department of Health."
  },
  "areaServed": [
    "Boca Raton",
    "Delray Beach",
    "Boynton Beach",
    "Deerfield Beach",
    "Pompano Beach",
    "Coral Springs",
    "Wellington"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "914.393.0105",
    "email": "donna@leaflineacupuncture.com",
    "url": "https://www.leaflineacupuncture.com/"
  },
  "service": [
    {
      "@type": "Service",
      "name": "Acupuncture & Chinese Medicine",
      "description": "Acupuncture treatments using sterile disposable needles to rebalance Qi and restore healthy function. Modalities may include acupuncture, cupping, gua sha, moxibustion, TDP lamps, and bodywork to address pain, headaches, TMJ, digestion, hormonal imbalances, insomnia and more."
    },
    {
      "@type": "Service",
      "name": "Herbal Medicine",
      "description": "Chinese herbal medicine used alone or in combination with acupuncture to support chronic and acute conditions. Herbs are prescribed in formula to promote whole-body health and mitigate potential side effects."
    },
    {
      "@type": "Service",
      "name": "Microneedling (Medical Microneedling)",
      "description": "Medical microneedling (collagen induction therapy) to stimulate collagen and elastin, improve texture, reduce scarring, pigmentation and fine lines. Treatments use a sterile FDA-approved microneedling device and may be combined with topical serums."
    },
    {
      "@type": "Service",
      "name": "Facial Rejuvenation Acupuncture",
      "description": "Facial acupuncture combined with facial cupping or gua sha to increase blood flow, promote collagen production, reduce puffiness and improve skin tone and firmness."
    },
    {
      "@type": "Service",
      "name": "CranioSacral Therapy",
      "description": "Gentle hands-on CranioSacral Therapy to restore alignment and rhythm of the craniosacral system in order to relieve pain and improve systemic health. Often incorporated into acupuncture sessions."
    },
    {
      "@type": "Service",
      "name": "Cupping Therapy",
      "description": "Cupping therapy using glass or plastic cups to create suction, release tight muscles and fascia, increase circulation and promote healing."
    },
    {
      "@type": "Service",
      "name": "Hair Tissue Mineral Analysis (HTMA)",
      "description": "HTMA testing to evaluate mineral patterns over recent months and identify underlying drivers of fatigue, anxiety, thyroid function, hormone imbalances and metabolic issues."
    },
    {
      "@type": "Service",
      "name": "Functional Medicine Testing",
      "description": "Functional medicine testing and analysis including advanced labs, stool testing, hormone testing and organic acid testing to uncover root causes and create personalized treatment plans."
    },
    {
      "@type": "Service",
      "name": "Lifestyle & Nutritional Counseling",
      "description": "Individualized dietary and lifestyle recommendations grounded in Chinese dietary therapy and functional medicine to support healing, prevention and optimal health."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
