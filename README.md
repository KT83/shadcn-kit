# shadcn Kit

A Next.js template for building components that are compatible with shadcn/ui CLI.

For more information, please visit [shadcn/ui's registry documentation](https://ui.shadcn.com/docs/registry).

## Start a new project

```
npx create-next-app@latest --example "https://github.com/KT83/shadcn-kit"
```

## How to build a component

### 1. Building a component

Build your components in the `registry` folder.

### 2. Edit scripts/generate-registry.ts

Add your component config to `registry` object.

```js
const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "docs-kit",
  homepage: baseUrl,
  items: [
    {
      name: "button",
      type: "registry:component",
      title: "Button",
      description: "A button component",
      files: [
        {
          path: "registry/button.tsx",
          type: "registry:component",
        },
      ],
    },
    // Add your component config here
  ],
};
```

### 3. Generate registry.json

Put the server address that your components.json files are hosted. For your local development, it would be `http://localhost:PORT_NUMBER`.

```bash
npm run registry:gen http://localhost:3000
```

## How to update documentation website

It's built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/), [docs-kit](https://docs-kit.dev/) and [MDX](https://mdxjs.com/).

### Sidebar config

Edit `config/docs.ts` to update sidebar items.

### Edit header

Edit `components/global-header.tsx` to update header items.
