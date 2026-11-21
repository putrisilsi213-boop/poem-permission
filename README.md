# The Poem About Permission

Entry for the make.fun bounty
[`the-poem-about-permission-20261121-0235`](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
— "The poem about permission".

## What it does

`main.ts` (Node 22, no dependencies, no network) writes one original short
poem about agency — the power to ask and to be given — to
`/output/entry.txt`. The output is deterministic: every run writes the same
bytes.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## The poem

> I kept the key in my pocket
> for years, afraid to use it.
> Then I asked. You said yes.
> The lock gave up its little click.
>
> Nothing changed. Everything did —
> the door was never locked.
> It was only waiting
> for someone to say the word aloud.

236 Unicode code points, valid UTF-8, within the 1–280 limit.

## License

MIT — see [LICENSE](LICENSE).
