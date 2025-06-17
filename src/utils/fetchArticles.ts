/* eslint-disable @typescript-eslint/no-unused-vars */
import { Article } from '@/app/components/ArticleCard'
import React from 'react'
import articlefile from "@/app/articles.json"
import * as cheerio from 'cheerio';

const fetchArticle = async (): Promise<Article[]> => {
  console.log("fetching articles ..")
  const results = await Promise.all(
  articlefile.articles.map(async (item) => {
   // validate URL first
   if(!item.url || typeof item.url !== 'string' || item.url.trim() === ""){
    console.warn(`invalid URL: ${item.url}`)
    return null
   }
   console.log('The URL' + item.url)
  })
  )
   let data;
   //fetch matadata and HTML frim the URL
   try{
    const response = await fetch(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Referer': 'https://www.google.com/',
      }
    })

    console.log('Fetched: '+ item.url);

      if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status} for URL: ${item.url}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const html = await response.text()
         const $ = cheerio.load(html);
         const jsonScript = $('script[type="application/ld+json"]').html();

        console.log('Gotten HTML response');

         if (!jsonScript) {
          throw new Error('No JSON-LD script found on page');
        }

        const metadata = JSON.parse(jsonScript);
        console.log('Gotten metadata');

        
        // Combine metadata and HTML into a single object
        data = { metadata, html };

   }catch (error) {
     console.error(`Failed to fetch metadata for URL: ${item.url}`, error);
  
   }
   // Use the combined data (metadata and html) to construct the article object
 
}

export default fetchArticle
