#!/bin/bash
usage() { echo "Usage: $0 [-f <flag>]" 1>&2; exit 1; }

while getopts ":f:" o; do
  case "${o}" in
    f)
      flag=${OPTARG}
      ;;
    *)
      usage
      ;;
  esac
done
shift $((OPTIND-1))

DIR=$(dirname $0)
echo "Running $flag Mode"
if [ "$flag" == "ngBaseSeed" ]; then
  mv "$DIR/bower.json" "../$DIR/bower.json"
  mv "$DIR/app/index.html" "../$DIR/app/index.html"
  mv "$DIR/app/scripts/app.js" "../$DIR/app/scripts/app.js"
  mv "$DIR/app/scripts/config.js" "../$DIR/app/scripts/config.js"
  mv "$DIR/app/scripts/configs/routesConfig.js" "../$DIR/app/scripts/configs/routesConfig.js"
  mv "$DIR/app/data/url.json" "../$DIR/app/data/url.json"
  mv "$DIR/app/components/about" "../$DIR/app/components/about"
  mv "$DIR/app/components/home" "../$DIR/app/components/home"
  mv "$DIR/app/components/bootstrap/partials/nav.html" "../$DIR/app/components/bootstrap/partials/nav.html"
  mv "$DIR/test/spec/about" "../$DIR/test/spec/about"

else
  mv "../$DIR/bower.json" "$DIR/bower.json"
  mv "../$DIR/app/index.html" "$DIR/app/index.html"
  mv "../$DIR/app/scripts/app.js" "$DIR/app/scripts/app.js"
  mv "../$DIR/app/scripts/config.js" "$DIR/app/scripts/config.js"
  mv "../$DIR/app/scripts/configs/routesConfig.js" "$DIR/app/scripts/configs/routesConfig.js"
  mv "../$DIR/app/data/url.json" "$DIR/app/data/url.json"
  mv "../$DIR/app/components/about" "$DIR/app/components/about"
  mv "../$DIR/app/components/home" "$DIR/app/components/home"
  mv "../$DIR/app/components/bootstrap/partials/nav.html" "$DIR/app/components/bootstrap/partials/nav.html"
  mv "../$DIR/test/spec/about" "$DIR/test/spec/about"
fi
