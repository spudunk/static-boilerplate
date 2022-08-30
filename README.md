## About
This is a boilerplate NextJS app for building static React powered websites. 
It uses [next-export-optimize-images](https://github.com/dc7290/next-export-optimize-images) and sharp to perform image optimizations


## Getting Started

First, run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
Copy repo
push new origin ```git remote set-url origin <new url>```
Initialize Firebase with ```firebase init```
copy app config and initialize in _app.tsx 


## Deployment Git (testing)
```git remote add static-boilerplate https://github.com/spudunk/static-boilerplate.git```
```git remote update```
```git switch -c v2```
```git merge --allow-unrelated-histories static-boilerplate/main```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
