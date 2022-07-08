import { Controller, Get, Param } from '@nestjs/common';

const cheerio = require('cheerio');
import axios from 'axios';


@Controller('genius')
export class GeniusController { //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    constructor() { }

    @Get(':lyricsUrlPath')
    async getLyric(@Param() params) {
        let result: string;
        await this.extractLyric(params.lyricsUrlPath)
            .then(lyricsText => result = lyricsText)
            .catch(e => console.log('error occurred while scraping lyrics from Genius.com ', e));

        return {lyrics: result}
    }


    async extractLyric(lyricsUrlPath: string) {
        const currentURL = `https://genius.com/${lyricsUrlPath}`;
        try {
            let { data } = await axios.get(currentURL);
            const $ = cheerio.load(data);

            let lyrics = $('div[class="lyrics"]').text().trim();
            if (!lyrics) {
                lyrics = ''
                $('div[class^="Lyrics__Container"]').each((i, elem) => {
                    if($(elem).text().length !== 0) {
                        let snippet = $(elem).html()
                            .replace(/<br>/g, '\n')
                            .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
                        lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
                    }
                })
            }
            if (!lyrics) return null;
            return lyrics.trim();
        } catch (e) { throw e }
    }


} //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
