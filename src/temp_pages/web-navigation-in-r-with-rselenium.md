---
title: Web Navigation in R with RSelenium
date: '2016-04-27'
output: 
  md_document:
    preserve_yaml: true
categories:
  - R
  - Selenium
  - webscraping
tags: []
description: ''
featured: 'sel.jpg'
featuredalt: ''
featuredpath: '/images'
linktitle: ''
---

It goes almost without saying that the internet itself is the richest
database available to us. From a 2014 [blog
post](http://aci.info/2014/07/12/the-data-explosion-in-2014-minute-by-minute-infographic/),
it was claimed that *every minute* :

-   Facebook users share nearly 2.5 million pieces of content.  
-   Twitter users tweet nearly 300,000 times.  
-   Instagram users post nearly 220,000 new photos.  
-   YouTube users upload 72 hours of new video content.  
-   Apple users download nearly 50,000 apps.  
-   Email users send over 200 million messages.  
-   Amazon generates over $80,000 in online sales.

Regardless of the accuracy of these claims, it is obvious to everyone
that there is tons of information on the web. For researchers, then, the
question is: how can you access all this information? You can of course
go to specific, dedicated databases and download what you’re looking
for, for example from the World Bank
[databank](http://databank.worldbank.org/data/home.aspx). However, there
are drawbacks to this approach. It can become tiresome when you need to
collect lots of data on different items (the World Bank databank is well
organised, but not all databases are like that…to put it politely). Some
only let you download small, specific sections of a bigger database,
meaning you have to return time and time again to the starting page to
enter new information in order to retrieve the data you want. (Another
thing is that we’re not quite utilising the web *itself* as the database
either.)

 

To deal with the first problem, you can automate the search process by
driving a web browser with R.<sup id="a1">[1](#fn1)</sup> This is
different from ‘web-scraping’. Web-scraping takes the webpage as a html
document and allows you to read information from it. It’s quite a
straightforward process, with plenty of R packages around to help you do
it. [rvest](https://github.com/hadley/rvest) in particular is quite
easy, although I’ve found the
[XML](https://cran.r-project.org/web/packages/XML/XML.pdf) package to be
more powerful. (Web-scraping deals with the second issue above, in that
it does treat the web itself as a database.)

To drive a web browser in R, there are two packages (that I’m aware of)
that can be used. One is
[RSelenium](https://github.com/ropensci/RSelenium) by John Harrison, and
[Rwebdriver](https://github.com/crubba/Rwebdriver) by Christian Rubba. I
prefer `RSelenium` and so I’ll use this package in the examples below.

 

If you don’t have it already installed, you’ll need to download this
package and load it into R.

    install.packages("RSelenium")
    library("RSelenium")

You will also need to download the Selenium standalone server. You can
get it from [here](http://www.seleniumhq.org/download/). Opening this
file automatically from `RSelenium` can be
problematic<sup id="a2">[2](#fn2)</sup>, and so I’ve found the most
straightforward way is to manually click on it and open it that way
before you start.

 

To get started with `RSelenium`, you’ll need to give your browser
somewhere to go. For this example, I’m going to go to the funding
management section of Brazilian National Health Service, the *Fundo
Nacional de Saúde*. From here, I’m going to get data for every
municipality in every state over a period of some years. To do this
manually would be a serious headache and would most likely lead to me
making errors by forgetting where I am, which state is next, what
municipality I just downloaded, and so on. Actually, you can be
guaranteed I’d make those mistakes.

 

    URL <- "http://www.fns.saude.gov.br/indexExterno.jsf"
    #checkForServer(dir="[DIRECTORY WHERE THE SELENIUM SERVER IS]", update=FALSE)
    #checkForServer(dir="[DIRECTORY WHERE THE SELENIUM SERVER IS]", update=TRUE) # if you want to update
    #startServer(dir="[DIRECTORY WHERE THE SELENIUM SERVER IS]") #none of these three are necessary if you click on the server first and manually open it.  

    fprof <- makeFirefoxProfile(list(browser.download.dir = "[DOWNLOAD DIRECTORY]",  
    browser.download.folderList = 2L,   
    browser.download.manager.showWhenStarting=FALSE,  
    browser.helperApps.neverAsk.saveToDisk = "application/octet-stream"))   

    remDr <- remoteDriver(extraCapabilities=fprof)
    remDr$open()  

 

So now your browser should be open. Here I’ve used a profile for Firefox
because I will download files and I don’t want to deal with the download
window that pops up in Firefox (you need to enter your download folder
where it says ‘`[DOWNLOAD DIRECTORY]`’, by the way. And you can also run
`RSelenium` on Chrome and [other
browsers](http://rpubs.com/johndharrison/13885), and even use a
[headless browser](https://rpubs.com/johndharrison/RSelenium-headless)
which speeds things up.) If you didn’t need to deal with download boxes
and pop-ups and the like, you only need `remDr <- remoteDriver$new()`,
which will automatically open up a Firefox browser window. These
particular files were recognised by Firefox as being binary files, and
so I have disabled the download box for files of the type
“application/octet-stream”. Other file types need a different setting.

This website has a drop-down box on the left hand side that we’re going
to use. What we will input into this is, in turn, a list of years,
states, and municipalities. After that we will click on “Consultar” (for
those of you who don’t speak Portuguese, I’m quite sure you can figure
out what that means). Clicking this will bring us to a new page, from
which we can download the data we’re looking for in a .csv file.

 

So let’s create our inputs:

    InputYear <- list("2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009")  

    Input <- list("ACRE", "ALAGOAS", "AMAPA", "AMAZONAS", "BAHIA", "CEARA", "DISTRITO FEDERAL", "ESPIRITO SANTO", "GOIAS", "MARANHAO", "MATO GROSSO", "MATO GROSSO DO SUL", "MINAS GERAIS", "PARA", "PARAIBA", "PARANA", "PERNAMBUCO", "PIAUI", "RIO DO JANEIRO", "RIO GRANDE DO NORTE", "RIO GRANDE DO SUL", "RONDONIA", "RORAIMA", "SANTA CATARINA", "SAO PAULO", "SERGIPE", "TOCANTINS")  

    Input_Mun <- "TODOS DA UF" #this will select all municipalities  

 

In order to get all this done, I will use a for loop in R which will
first loop over the years, and then states, thereby selecting all states
in a given year. In the following code, you will see `RSelenium`
commands that are quite different to regular commands in R. First of
all, `RSelenium` operates by way of two environments: one is
remoteDriver environment, the other a webElement environment. These have
specific options available to them (see the help section on each for a
list and explanations). Some of the most useful are `findElement()` (an
option of remoteDriver), `sendKeystoElement()` and `clickElement()`
(both options of webElement, as `remDr$findElement` returns an object of
webElement class). We will use these to navigate around the page and
click on specific elements.

 

Speaking of elements on a page, this is actually the most crucial part
of the process to get right (and can be the most frustrating). Some have
recommended [selectorgadget](http://selectorgadget.com/), but finding
elements can be done in Firefox or Chrome without selectorgadget – you
just right-click the element in question and select “Inspect” or
“Inspect Element”. This will bring up a chaotic-looking panel, full of
html, css and javascript code. Luckily, there are easy options in
Firefox and Chrome for finding what we need. After you right-click the
element that you want (the one you would have clicked if you were
navigating the page manually), click “Inspect” and then this element of
the html code will be highlighted. Right-click on this again and you
will see the option to copy. In Chrome, you will have the option to copy
the xpath or css selector (“selector”); in Firefox you can copy the css
selector (“unique selector”). I have used other options below to give
more examples, such as ‘id’. This can be copied directly from the html
code, and ‘class’ and ‘name’ can be used in a similar fashion. In
general, css selectors are the easiest to work with.

A quick note on some other aspects of the code. `Sys.sleep` is used in
order to be nice– you don’t want to bombard the website with all of your
requests in rapid-fire fashion; after all, they may block you. So this
spaces out our commands. This is also useful for when you may have to
wait for an element to load on the page before you can click on it. I
have used `paste()` in order to include the loop counters in the css
selector– just a little trick to make things easier. Some elements have
`\\` in the code: this is because the original had a single backslash,
which is an escape character in R, and so the string is unreadable.
Hence the added backslash. You will also see the use of `try()` – in
this case, there is a state that does not load like the others (the
Federal District) and so this automated process will not work here.
`try()` allows R to try anyway, and if it fails, the loop just continues
to the next iteration.

 

    for(i in 1:length(InputYear)){
      for(j in 1:length(Input)){
        remDr$navigate(URL)
        #Year:
        webElem <- remDr$findElement(using = "id", value = "formIndex:j_idt48")
        webElem$clickElement() #click on the drop-down year box
        Sys.sleep(2)
        webElem <- remDr$findElement(using = "id", value="formIndex:j_idt48_input")
        Sys.sleep(2)
        webElem$sendKeysToElement(InputYear[i]) #send the year to the box
        webElem <- remDr$findElement(using = "css", value="li.ui-state-active")
        webElem$clickElement() #click on the active element (the year we sent)
        Sys.sleep(2)
        #State:
        webElem <- remDr$findElement(using = "id", value = "formIndex:sgUf")
        webElem$clickElement()
        Sys.sleep(2)
        webElem$sendKeysToElement(Input[j]) #enter the state into the drop-down box
        CSS <- paste("#formIndex\\3a sgUf_panel > div > ul > li:nth-child(", j+2, ")", sep="")
        webElem <- remDr$findElement(using = "css", value = CSS)
        Sys.sleep(1)
        webElem$clickElement()
        Sys.sleep(3)
        #Municipality:
        webElem <- remDr$findElement(using = 'id', value = 'formIndex:cbMunicipio')
        webElem$clickElement()
        Sys.sleep(2)
        webElem <- remDr$findElement(using = 'css', value='#formIndex\\3a cbMunicipio_panel > div > ul > li:nth-child(2)')
        webElem$sendKeysToElement(list(Input_Mun))
        webElem$clickElement()
        Sys.sleep(4)
        #"Consultar":
        webElem <- remDr$findElement(using = 'xpath', value = '//*[@id="formIndex:j_idt60"]')
        Sys.sleep(2)
        webElem$clickElement() 
        Sys.sleep(6)
        #Download the .csv:
        webElem <- try(remDr$findElement(using = 'xpath', value = '//*[@id="formIndex"]/div[4]/input'), silent=T)
        try(webElem$clickElement(), silent=T)
        Sys.sleep(3)
    }}  

 

So after all this, we’ll have a bunch of .csv files in out download
folder, that you can import into R and mess around with. To load them
all in together, you could use the following code:

    library("readr")
    setwd("[THE DOWNLOAD FOLDER YOU USED]")
    fileNames <- list.files(path = getwd(), pattern = "*.csv")
    data <- rbindlist(lapply(fileNames, read_csv2,  
    col_names=c("Ano", "UF_MUNICIPIO", "IBGE", "ENTIDADE", "CPF_CNPJ",  
    "Bloco", "Componente", "Acao_Servico_Estrategia", "Competencia_Parcela",  
    "No_OB", "Data_OB", "Banco_OB", "Agencia_OB", "Conta_OB", "Valor_Total",  
    "Desconto", "Valor_Liquido", "Observacao", "Processo", "Tipo Repasse",  
    "No_Proposta"), skip = 1, locale=locale(decimal_mark=",", grouping_mark=".")))  

 

And there you go, all the data you wanted scraped automatically from the
web. In this example, we were downloading a file, but you could be
navigating around in order to arrive at a certain page and then to
scrape the contents of that page. You can do that in a number of ways,
by combining `RSelenium` and other packages, such as `XML` and `rvest`.
For a solution using only `RSelenium`, we can first create an empty
dataframe and then fill it with the `getElementText()` option of the
webElement class. So, for example, I was getting vote proposal content
from the Brazilian Senate. I used `RSelenium` to navigate to the pages
that I wanted, as is shown above, and then I stored the Content and the
Index of the vote (which were stored on the page as html text elements)
as entries in the Index dataframe, using `webElem$getElementText()`.
Afterwards, I used various combinations of `stringr` package functions
and `gsub` to clean up the text.

    Index <- data.frame(Content=NA, Index=NA)  
    Index[i,1] <- webElem$getElementText()  
       ...    
    Index[i,2] <- webElem$getElementText()  

 

You can also get the html and parse it using `XML`:

    elemtxt <- webElem$getElementAttribute("outerHTML")  
    elemxml <- htmlTreeParse(elemtxt, asText=TRUE, encoding="UTF-8", useInternalNodes=TRUE)  
    Text <- html_text(elemxml, trim=TRUE)  

 

And then you have the text from the webpage stored as data in R. Magic!
:metal:

 

<b id="fn1">1</b> It is often argued that R is not the best for this
application, with Python often offered as a better alternative. In my
experience, I’ve found R to be pretty good for this sort of thing, with
delays being caused more by the browser/net speed than R. The scripts
can be ugly, but using Selenium in Python looks pretty similar anyway.
[This
question](http://stackoverflow.com/questions/17540971/how-to-use-selenium-with-python)
on Stack Overflow gives some instructions. [↩](#a1)

<b id="fn2">2</b> See
[this](https://github.com/ropensci/RSelenium/issues/54) discussion.
[↩](#a2)
<link rel="image_src" href="http://i.imgur.com/v7y6SVt.png?1" />
