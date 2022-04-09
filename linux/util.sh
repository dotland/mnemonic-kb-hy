#!/bin/bash

# Utility constants and methods

language=hy
country=am
variant_name="mnemonic"
variant_desc="Armenian (mnemonic)"
exist_variant_desc="Armenian (phonetic)"

xkb_path="/usr/share/X11/xkb"

section_id="${language}-${country}-${variant_name}"
section_start="${section_id} >"
section_end="< ${section_id}"


function get_line_containing() {
    grep -n -m 1 "$1" "$2" | cut -f1 -d:
}

function get_backup_file() {
    local dirs="bak/$1"
    mkdir -p $dirs
    echo "$dirs/$(basename $2)"
}
