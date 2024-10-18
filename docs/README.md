# Maxim Kamalov’s portfolio

## [implementation](./implementation.md)

```mermaid
sequenceDiagram
    participant gh as GitHub Pages<br/>using Actions
    participant Lume as Lume<br/>run with Deno
    actor me as developer
    me->>+Lume: HTML templates<br/>written in Vento
    me->>Lume: texts/posts<br/>written in Markdown
    me-->>Lume: CSS<br/>copied as is – not processed
    Lume->>-me: static website
    Lume->>gh: static website
    note over Lume,gh: (workflow run)
```
