import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NEXT_PUBLIC_NOTION_SECRET
const notionDatabaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID

const notion = new Client({ auth: notionSecret })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (!notionDatabaseId || !notionSecret) {
        throw new Error('Missing ids')
    }


    const query = await notion.databases.query({
        database_id: notionDatabaseId
    });
    const rows = query.results.map((res: any) => res.properties);


    const data = query.results.map((item: any) => {
        const resourceType = item.properties.resourceType.multi_select.map((select: any) => select.name);
        const title = item.properties.Title.title[0].plain_text;
        const url = item.url;
        const resourceLevel = item.properties.Level.multi_select.map((select: any) => select.name);


        return { resourceType, title, url, resourceLevel };
    });
    console.log(data, 'dataaa')
    res.status(200).json({ data: data })
}