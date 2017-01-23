# Contributing
First of all, **thank you** for contributing, **you are awesome**!

1. Fork `ember-cli-materialize`, then create a local clone of your fork:

```
  git clone git@github.com:[your-name]/ember-cli-materialize.git
  cd ember-cli-materialize
```
    
2. Ensure `node` is installed.
  - Ensure `npm` is installed
3. Ensure `ember-cli` is installed: `npm install -g ember-cli`
4. Ensure `phantomjs` v2.x is installed.
5. Install dependencies and run the tests:

```
  npm i && bower i
  ember test
```

If all tests pass, you should be all set.

Here are a few rules to follow in order to ease code reviews, and discussions before
maintainers accept and merge your work.

You MUST run the test suite.

You MUST write (or update) unit tests.

You SHOULD write documentation.

Please, write [commit messages that make
sense](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html),
and [rebase your branch](http://git-scm.com/book/en/Git-Branching-Rebasing)
before submitting your Pull Request.

One may ask you to [squash your
commits](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)
too. This is used to "clean" your Pull Request before merging it (we don't want
commits such as `fix tests`, `fix 2`, `fix 3`, etc.).

Also, while creating your Pull Request on GitHub, you MUST write a description
which gives the context and/or explains why you are creating it.

Thank you!
