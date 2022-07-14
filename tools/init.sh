#!/usr/bin/env bash
#
# Init the evrionment for new user.

set -eu

ACTIONS_WORKFLOW=pages-deploy.yml

<<<<<<< HEAD
=======
TEMP_SUFFIX="to-delete" #  temporary file suffixes that make `sed -i` compatible with BSD and Linux

>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
help() {
  echo "Usage:"
  echo
  echo "   bash /path/to/init.sh [options]"
  echo
  echo "Options:"
  echo "     --no-gh              Do not deploy to Github."
  echo "     -h, --help           Print this help information."
}

<<<<<<< HEAD
check_init() {
  local _has_inited=false

  if [[ ! -d docs ]]; then
    if [[ ! -d .github ]]; then
      _has_inited=true # --no-gh
    else
      if [[ -f .github/workflows/$ACTIONS_WORKFLOW ]]; then
        # on BSD, the `wc` could contains blank
        local _count="$(find .github/workflows/ -type f -name "*.yml" | wc -l)"
        if [[ ${_count//[[:blank:]]/} == 1 ]]; then
          _has_inited=true
        fi
=======
check_status() {
  if [[ -n $(git status . -s) ]]; then
    echo "Error: Commit unstaged files first, and then run this tool againt."
    exit -1
  fi
}

check_init() {
  local _has_inited=false

  if [[ ! -d .github ]]; then # using option `--no-gh`
    _has_inited=true
  else
    if [[ -f .github/workflows/$ACTIONS_WORKFLOW ]]; then
      # on BSD, the `wc` could contains blank
      local _count="$(find .github/workflows/ -type f -name "*.yml" | wc -l)"
      if [[ ${_count//[[:blank:]]/} == 1 ]]; then
        _has_inited=true
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
      fi
    fi
  fi

  if $_has_inited; then
    echo "Already initialized."
    exit 0
  fi
}

init_files() {
<<<<<<< HEAD

  if $_no_gh; then
    rm -rf .github
  else
=======
  if $_no_gh; then
    rm -rf .github
  else
    ## Change the files of `.github`

>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
    mv .github/workflows/$ACTIONS_WORKFLOW.hook .
    rm -rf .github
    mkdir -p .github/workflows
    mv ./${ACTIONS_WORKFLOW}.hook .github/workflows/${ACTIONS_WORKFLOW}
<<<<<<< HEAD
  fi

  rm -f .travis.yml
  rm -rf _posts/* docs

  git add -A && git add .github -f
=======

    ## Ensure the gh-actions trigger branch

    _workflow=".github/workflows/${ACTIONS_WORKFLOW}"
    _default_branch="$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')"
    _lineno="$(sed -n "/branches:/=" "$_workflow")"

    sed -i.$TEMP_SUFFIX "$((_lineno + 1))s/- .*/- ${_default_branch}/" "$_workflow"
    rm -f "$_workflow.$TEMP_SUFFIX"

    ## Cleanup image settings in site config
    sed -i.$TEMP_SUFFIX "s/^img_cdn:.*/img_cdn:/;s/^avatar:.*/avatar:/" _config.yml
    rm -f _config.yml.$TEMP_SUFFIX

  fi

  # trace the gem lockfile on user-end
  sed -i.$TEMP_SUFFIX "/Gemfile.lock/d" .gitignore
  rm -f ".gitignore.$TEMP_SUFFIX"

  # remove the other fies
  rm -f .travis.yml
  rm -rf _posts/*

  # save changes
  git add -A
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
  git commit -m "[Automation] Initialize the environment." -q

  echo "[INFO] Initialization successful!"
}

<<<<<<< HEAD
=======
check_status

>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
check_init

_no_gh=false

while (($#)); do
  opt="$1"
  case $opt in
<<<<<<< HEAD
    --no-gh)
      _no_gh=true
      shift
      ;;
    -h | --help)
      help
      exit 0
      ;;
    *)
      # unknown option
      help
      exit 1
      ;;
=======
  --no-gh)
    _no_gh=true
    shift
    ;;
  -h | --help)
    help
    exit 0
    ;;
  *)
    # unknown option
    help
    exit 1
    ;;
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
  esac
done

init_files
