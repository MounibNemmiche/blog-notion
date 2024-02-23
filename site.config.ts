import { siteConfig } from "./lib/site-config";

export default siteConfig({
  rootNotionPageId: "61b797ca7b2a4a83951f7264e76b9abd",
  rootNotionSpaceId: null,
  name: `Kai's Dev Blog`,
  domain: "blog.kaichi.dev",
  author: "kaichi",
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  navigationStyle: "custom",
  navigationLinks: [
    {
      pageId: "689537b0ba494fc4a550e4ce2fc56bda",
      title: "About",
      url: "/about",
    },
  ],
  isSearchEnabled: true,
  isRedisEnabled: true,
  isPreviewImageSupportEnabled: true,
});
