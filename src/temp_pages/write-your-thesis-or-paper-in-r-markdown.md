---
title: Write your thesis or paper in R Markdown!
author: Robert McDonnell
date: '2016-04-15'
output: 
  md_document:
    preserve_yaml: true
categories:
  - R
  - R Markdown
tags: []
description: ''
featured: 'rmark.png'
featuredalt: ''
featuredpath: '/images'
linktitle: ''
---

 

There are many reasons why you would want to use some variant of
Markdown for writing, and indeed, posts are common on the net as to why
you should.<sup id="a1">[1](#fn1)</sup> A simple summary of the reasons
are that Markdown is: 1) easy; 2) easy; 3) yup, you guessed it – it’s
easy.

One variant of Markdown is R Markdown, developed by the
[RStudio](https://www.rstudio.com/) team, and in particular the genius
that is [Yihui Xie](http://yihui.name/knitr/), creator of the `knitr` R
package. R Markdown is pretty much like regular Markdown, except you get
a whole load of nice extra features, including the ability to run code
chunks, produce .pdfs and presentations, and even .docx (if you really,
really want to<sup id="a2">[2](#fn2)</sup>). Indeed, the ioslides
presentation format lets you use the power of html and css to make
browser-based presentations.

But surely academic papers require certain formats, and sometimes
mathematical expressions and funny Greek letters? Well, sure. Academic
papers, particularly theses, often have set formats that you must adhere
to. And since Markdown is quite a simple language, it doesn’t have the
advanced power of $\LaTeX$ to position things in specific ways.

### $\LaTeX$ in R Markdown

Enter R Markdown! Although you might (depends on the Markdown) have to
do something like `{% raw %}\\(\LaTeX\\){% endraw %}` to get the word
$\LaTeX$ in your Markdown, with R Markdown it’s just `$ \LaTeX $`. I
used Mathjax characters in my thesis, and all worked fine using this
method
([here’s](http://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm)
a nice link showing all the possible characters you can create with
Mathjax). Nice ‘n’ easy, lemon squeezy. Inline $\LaTeX$ expressions get
one `$`, centred equations get two: `$$`, and both need the equivalent
to finish the expression. For example, in my first
[post](http://robertmyles.github.io//post1.html), I had the equation:

$$
y_{ij} = \beta_j\bf{x_i} - \alpha_j
$$

In R Markdown, this is:

    `$$ y_{ij} = \beta_j\boldsymbol{x_i} - \alpha_j $$` 

Simple!

So that’s math and funny characters done. What else can we do in R
Markdown?

### Images

Well, all the image-placement power of $\LaTeX$ is also available. So
`\begin{figure}` (or subfigure and wrapfigure), `\centering`,
`\includegraphics` and `\caption` all work as they should. I found
minipage to be particularly helpful. You can use `\` with two spaces
after it to organise blank space, or `\newpage` to force a new page.

Of course, that supposing that you want to use $\LaTeX$ for images. R
Markdown’s own syntax for images is quite simple:
`![Caption](file.png)`, where ‘Caption’ is your image caption and
‘file.png’ your image file (you can use other formats, such as .pdf
too). However, positioning may become a problem using this image-placing
syntax. It’s worth taking the extra time to learn the $\LaTeX$ if you
don’t know it.

### Tables

Tables are a *little* annoying sometimes in any Markdown. It depends. If
the simple one works for you, then great – they’re quick and easy. If
you have to use grid tables, things take longer (for some reason, only
grid tables worked for me sometimes). There’s a [simple
guide](http://pandoc.org/README.html#tables) on the pandoc site, since
it is pandoc that is actually converting to and fro in all these
different formats (pandoc is amazing). But a basic one is *really*
simple (from the pandoc site):

 

![Table](http://i.imgur.com/TcbAp2U.png)

The table numbers will automatically increment, and the caption is set
after the `:` part. Indeed, `table` is not even needed, using `:` with
give you a caption with `Table 1:`, for your first table in the
document.

### Code

There may be a need for you to display code segments, particularly in a
quantitative paper or thesis. Again, it’s very simple. In R Markdown,
you do the following (I’m using `eval = FALSE` here because I don’t want
the code chunk to be evaluated), and the block goes inside three back
ticks on either end:

    {r, eval = FALSE}  
    library("readr")
    data <- read_csv("example.csv")
    data <- data[1:6, ]

This useful for plotting simple graphs and things like that. The example
I’ve shown *wouldn’t* be a particularly good idea, since R will load in
`example.csv` every time you produce the pdf using the ‘knit’ button in
RStudio. The `{r}` prt also has optional arguments, such as `eval`,
which can be set to `TRUE` or `FALSE`, and tells R Markdown whether to
evaluate the expression or not (useful for examples where you want to
show the code but not run it).

### Chapters and Headings

Chapters and Headings are laughably simple in any Markdown, and R
Markdown is no exception. `# Header 1` will create the largest-sized
header, `## Header 2` a smaller one, and so on. To have these numbered,
we’ll have to use another excellent feature of Markdown, the YAML block
that goes on the top of the document.

### The YAML block

The YAML block is what makes your R Markdown document possibly really
fancy. It’s here that the $\LaTeX$ packages are loaded, and here that
you can specify various options that will have an impact on your
document. So what the hell *is* a YAML block, anyway? Well, maybe the
easiest way to explain that is to show you
mine<sup id="a3">[3](#fn3)</sup> from my PhD
[thesis](%7B%7B%20site.url%20%7D%7D/assets/Explaining%20the%20Determinants%20of%20Foreign%20Policy%20Voting%20Behaviour%20in%20the%20Brazilian%20Houses%20of%20Legislature.pdf).
It starts and ends with `---`.

    ---
    title: "Explaining the Determinants..."
    author: "Robert Myles McDonnell"
    date: ""
    fontsize: 12pt
    header-includes:
       - \usepackage{booktabs}
       - \usepackage{dcolumn}
       - \usepackage{wrapfig}
       - \usepackage{subcaption}
       - \usepackage{caption}
       - \usepackage[font=small,labelfont=bf]{caption}
       - \hypersetup{colorlinks=false}
    documentclass: "article"
    output:
      pdf_document:
        fig_caption: yes
        fig_height: 6
        fig_width: 7
        latex_engine: pdflatex
        number_sections: yes
        toc: yes
        toc_depth: 4
        citation_package: "natbib"
    linestretch: 2
    mainfont: "Linux Libertine O"
    bibliography: ThesisLibrary.bib
    csl: american-political-science-association.csl
    biblio-style: apalike
    ---

So, that’s quite extended, but maybe you won’t need all these things.
One important thing to remember with the YAML block is that indentation
*matters*. When you have something like `output:`, then the line
`pdf document:` is **two** spaces indented. `fig_caption: yes` is **two
more** spaces indented (four in total) and so are the other options to
pdf_document. If you get your spacing wrong, it won’t work.

Many of the options are self-explanatory: `linestretch` is line-spacing,
for example. One important option is `toc` and its option `toc_depth`.
This is the **t**able **o**f **c**ontents. `toc_depth` is telling R
Markdown how many levels you’d like: Chapter 4.1, Chapter 4.1.1 etc.
More advanced elements can be changed too. For example, this thesis had
a `documentclass` of article, but you can write your own document class
and therefore produce radically different documents. One example is an R
Markdown [version](https://github.com/danielkrizian/resume_template) of
Friggeri’s popular CV template. Other examples are rapidly proliferating
on the web. The RStudio team have a new R package
[rticles](https://github.com/rstudio/rticles) that has document
templates for various academic journal styles. Load ’em up, and you’ve
already got an easy R Markdown template for the journal in question. And
for papers, enable the `abstract:` option in the YAML header, write your
abstract there, and voilà! You’ve got yourself a nice abstract.

 

So if writing your thesis (or a paper) in Microsoft Word or something
similar sounds like an ordeal, and you’re really not such an expert
on$\LaTeX$, maybe you should consider doing it in R Markdown. It has
all the easiness of Markdown, with a couple of nice extras that help you
make a quality document. See my thesis if you don’t believe me! :wink:

 

Update:  
A colleague asked me how I produced the first few pages of my thesis,
and I realised that I forgot to mention that you can include other
documents, for example tex files, that may need to be part of your
thesis. Many theses have strict guidelines for the introductory pages,
which can be included in your R Markdown file as part of the YAML header
section. The option is `includes`, and it has the sub-options
`in_header`, `before_body` and `after body`. Like before, the spacing is
meaningful in the YAML header, so these sub-options will need to be
indented two spaces. For introductory pages of a thesis, your tex file
will go in `before_body`. (I have to admit that this option never worked
well for me, I simply merged the .pdf produced from the tex file and the
.pdf produced from the R Markdown document with Preview in OS X, but for
others, it seems to work fine.) See
[here](http://rmarkdown.rstudio.com/markdown_document_format.html) for
examples. See
[here](https://github.com/danilofreire/kcl-thesis-template-markdown) for
a Markdown template for King’s College London’s PhD guidelines, by
[Danilo Freire](http://danilofreire.com/).

 

<b id="fn1">1</b> For example, [this
cheatsheet](http://markdown-guide.readthedocs.org/en/latest/basics.html)
[↩](#a1)

<b id="fn2">2</b> In my experience, I think you’re just going to end up
editing these in Word anyway so I don’t know that it’s worth the bother
to do in RStudio. You can if you want, I suppose.[↩](#a2)

<b id="fn3">3</b> I’m including extra things here that I used over the
process of making the thesis pdf, but it wasn’t what I used exactly in
the end. I had some problems, that I can’t recall right now, with
rendering bibliographical items so I switched to the default LaTeX
renderer, pdflatex. Using this means you can’t use other fonts, like the
Linux Libertine font above.[↩](#a3)
<link rel="image_src" href="http://i.imgur.com/vywFhKA.png?1" />
