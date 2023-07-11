<h1 align="center">
  This is Matteo learning Gatsby
</h1>

The goal of this repository is to led me to something I can call my personal website.

Along the path, I would like to study something new and build something from scracth. What better way to do so rather then building it while documenting what I'm doing?

Skills I want to improve by doing so
- CSS, CSS Modules, maybe some styling library
- Modern react
- Gatbsy and its platform
- Markdown writing
- Graphql
- Tooling and IDE

What I would like to see on my website
- Nice presentation of myself
- Something I can export as my CV
- A list of projects I worked on
- Some articles about technologies and learning

I need to set my expectations correctly. Whenever I'm too ambitious, I always end up spending more time on configuration than the actual project. Actually, the main factor on the success of something I'm working on are not my ambitions but the time I put in.

## 🚀 The beginnings

1.  **Initialization of the project**

    So far everything looks good! I am following the [Tutorial](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-1/) that should help me get up and running with Gatsby.

    The initialization is something like this.

      ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm install -g gatsby
    ```

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby -- -ts
    ```

    And of course, to start the website in development mode


    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

    *First issue encountered!* I cannot use Node 20. I need to use Node 18. It's ok, they say at least 18.


    A lot of things are done by yourself, like the first commit of the repository. I wanted to create a repository on the parent folder, but I guess if I want to keep the deployment simple I better stay with this.

    The only thing I'm not sure so far, is how can I have a .tsx file and typing correctly the props. So I temporarely converted the pages into .js and it seems to stop complaining.


2.  **Plugins**

    Now it's start to deep dive into the plugins. The ecosystems seem huge and even the smaller task can be delegated to a plugin. But I understand the concept. On a web increasingly complex, even the task of render a picture can be dependent on so many factors that is better to hide behind a nice abstraction.

    ```shell
    npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem
    ```

    3 new dependencies just to display a picture? I love it!

3.  **GraphQL**

    This is something I was curious about. How Gatsby is going to use GraphQL?

    First of all, when developing a website, it provides a great interface at 

    ```http://localhost:8000/___graphql```


    Looks like everything can be queried, from the site metadata to the structure itself.

    ```graphql
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    ```

  Accessing data is used by the method ```useStaticQuery```. This is cool, because it shows how all this queries are executed at build time and served statically.

  I bet there is a method to do dynamic queries as well.


4.  **SEO Compoonent**

    The tutorial wants me to create a SEO component that queries the metadata and use it as default when a title is not provided as prop.

    This is interesting. This component is then used into Head component.

    I can also hide the useStaticQuery behind a custom react hooks.

    So instead oif having something like

    ```
     const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    ```

    We can refactor into:

    ```
    const useSiteMetadata = () => {
      const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)

      return data.site.siteMetadata
    }

    ```


5.  **MDX Support**

    Looks very cool!

    ```shell
    npm install gatsby-plugin-mdx @mdx-js/react
    ```

    Interestingly, @mdx-js/react maps the implementation of the plugin into reacts component. I wonder why this cannot be a dependency of the plugin, since we are dealing with react in any case.

    The remark itself, can use plugins to enanche its features, like code coloring, ecc.

    A plugin makes available to GrapQL new data that can be queried! And I must admit that the graph explorer is quite cool to work with.

  
6.  **Page routing**

    Dynamic pages to route dynamic data. Looks similar to what NextJS does.

    Looks like that whener we enter into a page, a pageContext is populated

    ```js
    Object {
      // ...
      pageContext: Object {
        id: "11b3a825-30c5-551d-a713-dd748e7d554a"
        frontmatter__slug: "my-first-post"
      }
      // ...
    }
    ```

  And the exported object query is the ones that can use these info to query the data it needs to use.


7.  **Gatsby picture**
    Looks like that Gatsby allow to an even more dinamic version of the picture element. Not only we want to be dynamic on the loading of the picture, but also dynamic on how the picture is managed.

    Of course a new plugin is needed but they don't scare me anymore.

    ```shell
    npm install gatsby-transformer-sharp
    ```

    This allow to import what we have on the mdx data into our page.
  


## 🚀 Further explorations

1.  **Having multiples, separate blogs?**

    Yes, it's feasable, on a side we can have multible folders configured into the gatsby-plugins folder

    ```ts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    }
    ```

    The issue is that we still need to filter the mdx values into the query, because they are all made available to graphql under the same "collection"

    ```graphql
     query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/second-blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
          id
          excerpt
        }
      }
    }
    ```

    This is not entirely bad, as I learned how I can filter stuff when dealing with mdx. Let's pretend I want to hide a blog post from the list, I can add a field in the markdown and filter based on that.

1.  **Theming, dark mode and light mode?**

    Soon to be discovered! :)

## 🚀 Sparse notes

I don't have any at the moment :) Thank you for stopping by