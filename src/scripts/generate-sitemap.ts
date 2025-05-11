// scripts/generate-sitemap.ts
import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
    const pages = await globby([
        'pages/**/*.tsx',
        'app/**/*.tsx',
        '!app/**/_*.tsx',
        '!pages/_*.tsx',
        '!pages/api',
    ])

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
            const path = page
                .replace('pages', '')
                .replace('app', '')
                .replace(/\.tsx$/, '')
                .replace(/\/index/g, '')
            const route = path === '/index' ? '' : path
            return `
            <url>
              <loc>${`https://atingasolutions.com${route}`}</loc>
              <changefreq>${
                route === '' ? 'daily' : 'monthly'
            }</changefreq>
              <priority>${route === '' ? '1.0' : '0.7'}</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

    const formatted = await prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html',
    })

    writeFileSync('public/sitemap.xml', formatted)
}

generate()