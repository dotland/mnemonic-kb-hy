#!/bin/bash

# Utility constants and methods

language=hy
country=am
variant_name="mnemonic"
variant_desc="Armenian (mnemonic)"
exist_variant_desc="Armenian (phonetic)"

path_x11="/usr/share/X11"
path_xkb="${path_x11}/xkb"
path_rules="${path_xkb}/rules"
path_symbols="${path_xkb}/symbols"
path_locale="${path_x11}/locale/${language}_${country^^}.UTF-8"

section_id="${language}-${country}-${variant_name}"
section_start="${section_id} >"
section_end="< ${section_id}"


function get_line_containing() {
    local -r result=$(grep -n -m 1 "$1" "$2")
    echo "${result%%:*}"
}

function get_backup_file() {
    local -r dirs="bak/$1"
    mkdir -p $dirs
    local -r filename="${2##*/}"
    echo "$dirs/$filename"
}
