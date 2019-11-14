library(rvest)
library(readr)
library(tidyverse)

# get list of nominated films from wiki
# films <- read_html("https://en.wikipedia.org/wiki/List_of_Academy_Award-winning_films") %>%
# html_node("table.wikitable") %>%
# html_table(header = TRUE) %>%
# write_csv("data/films.csv", col_names = TRUE)
films <- read.csv("data/baftas.csv")

# filter out IMDB's list of films
tconst <- read_tsv('data/title.basics 2.tsv') %>%
  filter(titleType %in% c("movie"))

joined <- films %>% 
  left_join(tconst, by = c( 'entity' = 'primaryTitle', 'year' = 'startYear')) %>%
write_csv("data/ratings.csv",col_names=TRUE)


test <- unique(read_tsv("data/title.basics.tsv.gz", col_names = TRUE)) %>%
  filter(c("titleType") %in% c("movie"))

ratings <- unique(read_tsv("data/title.ratings.tsv.gz")) 


# merge together the two IMDB files
merged <- merge(x=tconst,y=ratings,by="tconst",all.x=TRUE)

# merge with original films dataframe
final <- merge(x=films,y=merged,by.x=c("entity","year"),
               by.y=c("primaryTitle","startYear"),all.x=TRUE) %>%
  write_csv("data/ratingsBaftas2.csv",col_names=TRUE)



