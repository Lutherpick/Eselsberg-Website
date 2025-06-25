This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Internationalization

### working with dictionaries

To make internationalization easier we will use dictionaries that define key-value pairs.
The key is an identifier to use in your pages code, the value is the translation of the section.
Example of the syntax:
```json
{
    "home": {
        "title": "Welcome to Eselsbergsteige Dormitory",
        "introduction": "This website is aimed at people interested in the Eselsbergsteige dormitory. Whether you're looking for an apartment or already live here, you'll find everything from housing offers to information about janitors and community events.",
        "notice": "We, the tutors of this dormitory, want to stress that we are the residents’ representatives, not the official carrier. For leasing details, please visit the Studierendenwerk Ulm. We keep these pages up-to-date, but always confirm with the official site for the latest legal info."
    }
}
```
First define on which page it is on, that makes it easier to keep these files updated (its also possible to make multiple files if it gets too crowded, just let me know what you think).
Then define the section as a sub element of the page, these hold their content as the value.
The dictionaries can be found in the @src/app/dictionaries directory.
Everything in the @src/app/\[lang\] directory will be automatically routed, meaning the /de or /en prefix will automatically be resolved to the correct translation and a html page with these translations will be dynamically built.
Only the main part of the page, the page.tsx needs to be in the \[lang\] directory.
This is necessary to ensure they can read from the dictionary.
At the moment there is no way to define a page without routing, so all new pages should be defined in \[lang\] even if no translation is added.

### How to use dictionaries

the main function of your page needs to have these parameters:
```tsx
export default async function Page({
    params
}: {
  params: Promise<{ lang: "en" | "de" }>
}) {
```

For every component that needs to use this dictionary we will just pass it down as an argument.
In your page you should define your component as follows:
```tsx
<Component dict={dict} />
```

Then your component takes that argument and can use it to make translations.
```
export default function Component({dict}: Record<string, string>) {
    return (
        <section>
            {dict.page.key}
        </section>
    )
}
```

To learn more go to [Next.js Guide of Internationalization](https://nextjs.org/docs/app/guides/internationalization)
