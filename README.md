# Terminal Portfolio

Just testing this out, you can check it out [here](https://kirousek.eu)

## Development

1. Clone this repo

```shell
git clone https://github.com/kirousek.eu
```

2. Install dependencies

```shell
npm install
```

3. Get [Airtable][https://airtable.com] API Key (for shortlinks)

```env
# .env
AIRTABLE_TOKEN=YOUR_UNIQUE_TOKEN
```


4. Create table in Airtable and get Base Id and Table Id from url (Base Id starts with "app" and Table Id starts with "tbl")

```env
# .env
AIRTABLE_TOKEN=YOUR_UNIQUE_TOKEN
AIRTABLE_BASE_ID=UNIQUE_BASE_ID
AIRTABLE_TABLE_ID=UNIQUE_TABLE_ID
```

5. Name your columns name and url and add values to table

| **name** | **url**                     |
| :-------: | :--------------------------- |
| github   | https://github.com/kirousek |

6. Run development server

```shell
npm run dev
```

## Licence

[MIT Licence](./LICENCE)

## Thanks

[kavinvalli](https://github.com/kavinvalli) - Creator of this website
