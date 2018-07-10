#!/usr/bin/env bash

for i in {1..10}
do
  convert img/$i.jpg -resize 270 img/responsive/$i-270.jpg
  convert img/$i.jpg -resize 540 img/responsive/$i-540.jpg
done
