import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({ auth: notionSecret })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (!notionDatabaseId || !notionSecret) {
        throw new Error('Missing ids')
    }


    const query = await notion.databases.query({
        database_id: notionDatabaseId
    });
    const rows = query.results.map((res: any) => res.properties);

    console.log(query.results, 'resultsss')

    const data = query.results.map((item: any) => {
        const resourceType = item.properties.resourceType.multi_select.map((select: any) => select.name);
        const title = item.properties.Title.title[0].plain_text;
        const url = item.url;

        return { resourceType, title, url };
    });

    res.status(200).json({ data: data })
}