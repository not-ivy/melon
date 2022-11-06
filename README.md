# <div align="center"><img src="https://raw.githubusercontent.com/not-ivy/melon/master/static/watermelon.webp" alt="An oversimplified watermelon" width="40px" />&nbsp;&nbsp;&nbsp;&nbsp;Melon</div>

<div align="center">
   <a href="https://fresh.deno.dev">
    <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge-dark.svg" alt="Made with Fresh" />
  </a>
</div>

## Features

- Melon does not rely on a database, instead it uses [gists](https://gist.github.com/) to store data.
- Fast and lightweight
  - < 500 sloc
  - average > 90 lighthouse performance score
- Collects no data

## Running

Create a `.env` file in the root directory with the following contents:

```env
export GITHUB_TOKEN="<github token>"  # Github personal access token, used to read/write gists
export GIST_ID="<gist id>"            # Gist id, used to store data
export DOMAIN="<domain>"              # Domain to use for short links
export VERIFICATION="<token>"         # Used to create and delete links
```

Then, just run `deno task start`.


## Hosting

I am currently hosting melon on [Deno Deploy](https://deno.com) since it is the recommended way to deploy a [fresh](https://fresh.deno.dev/) project.
