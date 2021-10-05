require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_API_DATABASE;

exports.getDatabase = async function () {
  const response = await notion.databases.query({ database_id: databaseId });

  const responseResults = response.results.map((page) => {
    /**
     * Here's where you should build your object and properties
     * that you wish to retrieve from your database
     * `id: page.id` provides the example
     */
    return {
      id: page.id,
    };
  });

  return responseResults;
};
