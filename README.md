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

    




    


## 🚀 Sparse notes

I don't have any at the moment :) Thank you for stopping by