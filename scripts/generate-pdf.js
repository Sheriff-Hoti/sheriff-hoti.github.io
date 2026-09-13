import { chromium } from "playwright";

const url = process.env.PDF_URL ?? "http://localhost:4321/";
const outPath = process.argv[2] ?? process.env.PDF_OUT ?? "public/resume.pdf";

const main = async () => {
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  try {
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
    await page.waitForSelector("#article-pdf-main", { timeout: 15_000 });
    // Ensure webfonts (Poppins) are loaded before printing
    await page.evaluate(() => document.fonts.ready);

    await page.evaluate(() => {
      const article = document.querySelector("#article-pdf-main");
      if (!article) throw new Error("article-pdf-main not found");
      document.body.innerHTML = "";
      document.body.appendChild(article);
      document.body.style.margin = "0";
    });

    await page.emulateMedia({ media: "screen" });

    await page.pdf({
      path: outPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
  } finally {
    await browser.close();
  }
};

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
