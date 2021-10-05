# NotionAPI JavaScript Starter

This repo provides the foundation for any Notion API project that uses the [JavaScript SDK](https://github.com/makenotion/notion-sdk-js).

This repo uses an `express` server for its back-end and you can change its specs on `server.js` but you should be ready to work with your data right off the bat!

## Running the app

If you would like to run this project, you'll need to create a `.env` file in the root directory and inside you should had your `NotionAPI key` and your `Database ID` like so

```
NOTION_API_KEY = [Here you should insert your key]
NOTION_API_DATABASE = [Here you should insert your key]
```

If you don't know how to get your key, go to [developers.notion.com](https://developers.notion.com/), press **My Integrations**, choose _New Integration_ and once you fill all the info, you should get a `Internal Integration Token`.

If you don't know how to get your Database id, check the **Where can I find my database's ID?** of this [NotionAPI doc](https://developers.notion.com/docs/working-with-databases)
