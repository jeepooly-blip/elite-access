import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function test() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  page.on('pageerror', err => {
    errors.push(err.message);
  });
  
  const filePath = join(__dirname, 'dist', 'index.html');
  await page.goto(`file://${filePath}`);
  
  // Wait for page to load
  await page.waitForTimeout(2000);
  
  // Check for critical elements
  const title = await page.title();
  console.log('Page title:', title);
  
  const root = await page.$('#root');
  if (root) {
    const content = await root.innerHTML();
    console.log('Root content length:', content.length);
  }
  
  await browser.close();
  
  if (errors.length > 0) {
    console.log('Console errors:', errors);
    process.exit(1);
  }
  
  console.log('Test passed: No console errors');
}

test();
