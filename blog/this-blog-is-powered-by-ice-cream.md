---
share: true
slug: this-blog-is-powered-by-ice-cream
title: This Blog Is Powered By Ice Cream
tags:
  - void
Date: 2024-03-22
---

I'm serious. 

I consumed half a tub of vanilla coconut ice cream before coding this.

Let me give you some context:
- I use [Obsidian](https://obsidian.md/), a markdown editor, for all of my notes. I find it to be a great place to quickly write out long-form thoughts and keep them organized.
- This site was built with [Remix](https://remix.run/), a speedy server-side rendering framework for React.
- I really wanted to take some of my notes in Obsidian and publish them to this website.

Now that you're all caught up, you'll realize that setting up a pipeline between the two isn't always straight forward. My notes are stored in iCloud and I wasn't about to pay $100 a year for an Apple Developer Account just to access [CloudKit](https://developer.apple.com/icloud/cloudkit/) to load my markdown files on the server. 

So I decided to use Github instead via [this cool Obsidian plugin](https://github.com/ObsidianPublisher/obsidian-github-publisher) that allows you to push certain files to a repository. So now, all my markdown files that I've marked for publishing automatically get pushed to a specific folder in this website's repo and trigger a new build in [Vercel](https://vercel.com).

Then those markdown files get parsed into HTML via [remark](https://github.com/remarkjs/remark) and shipped to the client + stored in the [Vercel CDN cache](https://vercel.com/docs/edge-network/headers#recommended-settings).

Pretty neat right? Now you can load these blog posts in under 100ms. 

Which leaves you with more time to eat your ice cream before it melts 😔