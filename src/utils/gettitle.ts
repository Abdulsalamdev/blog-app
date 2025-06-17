/* eslint-disable @typescript-eslint/no-explicit-any */
import * as cheerio from 'cheerio';

export function getTitle(data:any): string {
    if(!data) return "Title loading ..."
    if(data?.html) {
        const $ = cheerio.load(data?.html)
       const ogTitle = $('meta[property="og:title"]').attr('content') || $('title').text();
        return ogTitle;
    }
    return'the Titele of the Article'
}