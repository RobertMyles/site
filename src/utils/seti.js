// import { css } from "styled-components"

// //  https://github.com/jesseweed/seti-syntax
// export const Seti = css`
//   .editor {
//     background-color: #0e1112;
//     color: #babebd;
//   }
//   .editor .wrap-guide {
//     background: rgba(245, 250, 255, 0.04);
//   }
//   .editor .indent-guide {
//     color: rgba(245, 250, 255, 0.04);
//   }
//   .editor .invisible-character {
//     color: rgba(255, 255, 255, 0.1);
//   }
//   .editor .gutter {
//     background-color: #090b0d;
//     color: #4d5a5e;
//   }
//   .editor .gutter .line-number {
//     background: #090b0d;
//     color: #4d5a5e;
//     padding-left: 10px;
//   }
//   .editor .gutter .line-number.cursor-line {
//     background-color: #0e1112;
//     color: #519aba;
//     font-weight: 100;
//   }
//   .editor .gutter .line-number.cursor-line-no-selection {
//     background-color: #0e1112 !important;
//     color: #519aba;
//   }
//   .editor .gutter .line-number:hover {
//     background-color: #090b0d !important;
//     color: #519aba;
//   }
//   .editor .gutter .line-number.folded,
//   .editor .gutter .line-number:after,
//   .editor .fold-marker:after {
//     color: #fff;
//     background: #4d5a5e;
//   }
//   .editor .invisible {
//     color: rgba(255, 255, 255, 0.1);
//   }
//   .editor .cursor {
//     border-color: #babebd !important;
//     border-left: solid 2px;
//   }
//   .editor .selection .region {
//     background-color: #1d5b91;
//   }
//   .editor .scroll-view {
//     padding-left: 10px;
//   }
//   .editor .line.cursor-line {
//     background: rgba(0, 0, 0, 0.2) !important;
//   }
//   .bracket-matcher .region {
//     border-bottom: 1px solid #519aba;
//     margin-top: 2px;
//   }
//   .editor[mini] .scroll-view,
//   .editor.mini .scroll-view {
//     padding-left: 1px;
//   }
//   .syntax--source {
//     color: #519aba;
//   }
//   .syntax--text {
//     color: #babebd;
//   }
//   .syntax--complete_tag {
//     color: #7494a3;
//   }
//   .syntax--comment {
//     color: #4d5a5e;
//     background: none;
//   }
//   .syntax--constant {
//     color: #a074c4;
//   }
//   .syntax--constant.syntax--character.syntax--escape {
//     color: #a074c4;
//   }
//   .syntax--constant.syntax--name.syntax--attribute.syntax--tag {
//     color: #519aba;
//   }
//   .syntax--constant.syntax--numeric {
//     color: #a074c4;
//   }
//   .syntax--constant.syntax--other.syntax--color {
//     color: #a074c4;
//   }
//   .syntax--constant.syntax--other.syntax--symbol {
//     color: #a074c4;
//   }
//   .syntax--entity {
//     color: #cbcb41;
//   }
//   .syntax--entity.syntax--name.syntax--class,
//   .syntax--entity.syntax--name.syntax--type.syntax--class {
//     color: #a074c4;
//   }
//   .syntax--entity.syntax--name.syntax--function {
//     color: #cbcb41;
//   }
//   .syntax--entity.syntax--name.syntax--section {
//     color: #cbcb41;
//   }
//   .syntax--entity.syntax--name.syntax--tag {
//     color: #519aba;
//     text-decoration: none;
//   }
//   .syntax--entity.syntax--name.syntax--tag.syntax--block,
//   .syntax--entity.syntax--name.syntax--tag.syntax--inline,
//   .syntax--entity.syntax--name.syntax--tag.syntax--name {
//     color: #519aba;
//   }
//   .syntax--entity.syntax--name.syntax--tag.syntax--structure {
//     color: #519aba;
//   }
//   .syntax--entity.syntax--name.syntax--tag.syntax--block {
//     color: #519aba;
//   }
//   .syntax--entity.syntax--name.syntax--type {
//     color: #519aba;
//     text-decoration: none;
//   }
//   .syntax--entity.syntax--name.syntax--type.syntax--tag {
//     color: #8dc149;
//   }
//   .syntax--entity.syntax--other.syntax--attribute-name {
//     color: #8dc149;
//   }
//   .syntax--entity.syntax--other.syntax--attribute-name.syntax--id {
//     color: #8dc149;
//   }
//   .syntax--entity.syntax--other.syntax--inherited-class {
//     color: #cbcb41;
//   }
//   .syntax--invalid.syntax--illegal,
//   .syntax--invalid.syntax--deprecated {
//     background: none;
//     color: #cc3e44;
//   }
//   .syntax--invalid.syntax--illegal.syntax--whitespace,
//   .syntax--invalid.syntax--deprecated.syntax--whitespace {
//     background-color: #cc3e44;
//   }
//   .syntax--invalid.syntax--illegal .syntax--punctuation,
//   .syntax--invalid.syntax--deprecated .syntax--punctuation {
//     color: #822226;
//   }
//   .syntax--keyword {
//     color: #cc3e44;
//   }
//   .syntax--keyword.syntax--control {
//     color: #8dc149;
//   }
//   .syntax--keyword.syntax--operator {
//     color: #cc3e44;
//   }
//   .syntax--keyword.syntax--operator.syntax--assignment {
//     color: #4d5a5e;
//   }
//   .syntax--keyword.syntax--operator.syntax--new {
//     color: #7494a3;
//   }
//   .syntax--keyword.syntax--other.syntax--important {
//     color: #cc3e44;
//   }
//   .syntax--keyword.syntax--other.syntax--special-method {
//     color: #cc3e44;
//   }
//   .syntax--keyword.syntax--other.syntax--unit {
//     color: #cc3e44;
//   }
//   .syntax--markup.syntax--bold {
//     color: #babebd;
//     font-weight: bold;
//   }
//   .syntax--markup.syntax--changed {
//     color: #babebd;
//   }
//   .syntax--markup.syntax--deleted {
//     color: #babebd;
//   }
//   .syntax--markup.syntax--heading
//     .syntax--punctuation.syntax--definition.syntax--heading {
//     color: #babebd;
//   }
//   .syntax--markup.syntax--inserted {
//     color: #babebd;
//   }
//   .syntax--markup.syntax--italic {
//     color: #babebd;
//     font-style: italic;
//   }
//   .syntax--markup.syntax--list {
//     color: #babebd;
//   }
//   .syntax--markup.syntax--quote {
//     color: #9ac4d7;
//   }
//   .syntax--markup.syntax--raw.syntax--inline {
//     color: #babebd;
//   }
//   .syntax--meta.syntax--link {
//     color: #babebd;
//   }
//   .syntax--meta.syntax--require {
//     color: #babebd;
//   }
//   .syntax--meta.syntax--brace.syntax--curly {
//     color: #6b7471;
//   }
//   .syntax--meta.syntax--brace.syntax--round {
//     color: #babebd;
//   }
//   .syntax--meta.syntax--control.syntax--flow {
//     color: #8dc149;
//   }
//   .syntax--meta.syntax--comma {
//     color: #4d5a5e;
//   }
//   .syntax--meta.syntax--selector {
//     color: #4d5a5e;
//   }
//   .syntax--meta.syntax--separator {
//     color: #4d5a5e;
//   }
//   .syntax--meta.syntax--tag {
//     color: #519aba;
//   }
//   .syntax--none {
//     color: #babebd;
//   }
//   .syntax--punctuation {
//     color: #4d5a5e;
//   }
//   .syntax--punctuation.syntax--terminator {
//     color: #4d5a5e;
//   }
//   .syntax--punctuation.syntax--separator {
//     color: #4d5a5e;
//   }
//   .syntax--punctuation.syntax--definition {
//     color: #4d5a5e;
//   }
//   .syntax--punctuation.syntax--definition.syntax--array {
//     color: #519aba;
//   }
//   .syntax--punctuation.syntax--definition.syntax--bold {
//     color: #babebd;
//     font-weight: bold;
//   }
//   .syntax--punctuation.syntax--definition.syntax--comment {
//     color: #4d5a5e;
//   }
//   .syntax--punctuation.syntax--definition.syntax--heading,
//   .syntax--punctuation.syntax--definition.syntax--identity,
//   .syntax--punctuation.syntax--definition.syntax--italic {
//     color: #babebd;
//   }
//   .syntax--punctuation.syntax--definition.syntax--italic {
//     font-style: italic;
//   }
//   .syntax--punctuation.syntax--definition.syntax--string {
//     color: #519aba;
//   }
//   .syntax--punctuation.syntax--definition.syntax--string.syntax--begin,
//   .syntax--punctuation.syntax--definition.syntax--string.syntax--end {
//     color: #9ac4d7;
//   }
//   .syntax--punctuation.syntax--definition.syntax--variable {
//     color: #7494a3;
//   }
//   .syntax--punctuation.syntax--definition.syntax--parameters {
//     color: #babebd;
//   }
//   .syntax--punctuation.syntax--definition.syntax--tag {
//     color: #519aba;
//   }
//   .syntax--punctuation.syntax--section.syntax--embedded {
//     color: #babebd;
//   }
//   .syntax--string {
//     color: #519aba;
//   }
//   .syntax--string .syntax--constant {
//     color: #a074c4;
//   }
//   .syntax--string.syntax--interpolated {
//     color: #7494a3;
//   }
//   .syntax--string.syntax--regexp {
//     color: #519aba;
//   }
//   .syntax--string.syntax--regexp
//     .syntax--constant.syntax--character.syntax--escape,
//   .syntax--string.syntax--regexp .syntax--source.syntax--ruby.syntax--embedded,
//   .syntax--string.syntax--regexp
//     .syntax--string.syntax--regexp.syntax--arbitrary-repitition {
//     color: #519aba;
//   }
//   .syntax--string.syntax--regexp.syntax--group {
//     color: #519aba;
//   }
//   .syntax--string.syntax--regexp.syntax--character-class {
//     color: #519aba;
//   }
//   .syntax--string.syntax--regexp .syntax--source.syntax--ruby.syntax--embedded {
//     color: #519aba;
//   }
//   .syntax--string.syntax--quoted.syntax--double {
//     color: #9ac4d7;
//   }
//   .syntax--string.syntax--quoted.syntax--single {
//     color: #9ac4d7;
//   }
//   .syntax--string.syntax--unquoted {
//     color: #9ac4d7;
//   }
//   .syntax--string.syntax--unquoted.syntax--heredoc,
//   .syntax--string.syntax--unquoted.syntax--here-doc,
//   .syntax--string.syntax--unquoted.syntax--nowdoc,
//   .syntax--string.syntax--unquoted.syntax--now-doc,
//   .syntax--string.syntax--unquoted.syntax--block,
//   .syntax--string.syntax--unquoted.syntax--program-block {
//     color: #519aba;
//   }
//   .syntax--string.syntax--other {
//     color: #519aba;
//   }
//   .syntax--string .syntax--variable {
//     color: #7494a3;
//   }
//   .syntax--string.syntax--other.syntax--link {
//     color: #519aba;
//   }
//   .syntax--storage {
//     color: #d4d7d6;
//   }
//   .syntax--storage.syntax--modifier {
//     color: #d4d7d6;
//   }
//   .syntax--storage.syntax--type.syntax--class {
//     color: #d4d7d6;
//   }
//   .syntax--storage.syntax--type.syntax--function {
//     color: #d4d7d6;
//   }
//   .syntax--storage.syntax--type.syntax--var {
//     color: #d4d7d6;
//   }
//   .syntax--support {
//     color: #a074c4;
//   }
//   .syntax--support.syntax--class {
//     color: #a074c4;
//   }
//   .syntax--support.syntax--function {
//     color: #cbcb41;
//   }
//   .syntax--support.syntax--function.syntax--decl {
//     color: #519aba;
//   }
//   .syntax--support.syntax--constant {
//     color: #a074c4;
//   }
//   .syntax--support.syntax--type.syntax--property-name {
//     color: #babebd;
//   }
//   .syntax--variable {
//     color: #7494a3;
//   }
//   .syntax--variable.syntax--control.syntax--import.syntax--include {
//     color: #8dc149;
//   }
//   .syntax--variable.syntax--other {
//     color: #cc3e44;
//   }
//   .syntax--variable.syntax--other.syntax--property {
//     color: #cc3e44;
//   }
//   .syntax--variable.syntax--other.syntax--module {
//     color: #a074c4;
//   }
//   .syntax--variable.syntax--other.syntax--module-alias {
//     color: #519aba;
//   }
//   .syntax--variable.syntax--other.syntax--object {
//     color: #8dc149;
//   }
//   .syntax--variable.syntax--parameter.syntax--function {
//     color: #cbcb41;
//   }
//   .syntax--source.syntax--gfm {
//     color: #babebd;
//   }
//   .syntax--source.syntax--gfm .syntax--heading-1 {
//     color: #e37933;
//   }
//   .syntax--source.syntax--gfm .syntax--heading-2 {
//     color: #e68849;
//   }
//   .syntax--source.syntax--gfm .syntax--heading-3 {
//     color: #e99660;
//   }
//   .syntax--source.syntax--gfm .syntax--heading-4 {
//     color: #eca576;
//   }
//   .syntax--source.syntax--gfm .syntax--heading-5 {
//     color: #efb48d;
//   }
//   .syntax--source.syntax--gfm .syntax--heading-6 {
//     color: #f2c3a3;
//   }
//   .syntax--source.syntax--gfm .syntax--entity {
//     color: #cbcb41;
//   }
//   .syntax--source.syntax--gfm .syntax--link {
//     color: #8dc149;
//   }
//   .syntax--source.syntax--gfm .syntax--link .syntax--entity {
//     color: #a074c4;
//   }
//   .syntax--source.syntax--gfm .syntax--italic {
//     color: #cbcb41;
//   }
//   .syntax--source.syntax--gfm .syntax--bold {
//     color: #cbcb41;
//     font-weight: bold;
//   }
//   .syntax--source.syntax--gfm .syntax--variable.syntax--syntax.syntax--list {
//     color: #a2852f;
//   }
//   .syntax--source.syntax--gfm .syntax--hr {
//     color: #8dc149;
//   }
//   .syntax--source.syntax--gfm .syntax--comment.syntax--quote {
//     color: #9ac4d7;
//   }
//   .syntax--source.syntax--gfm .syntax--support.syntax--quote {
//     color: #0e1112;
//     background-color: #babebd;
//   }
//   .syntax--source.syntax--gfm .syntax--raw {
//     color: #cc3e44;
//     border: 1px solid #1c2326;
//     background-color: #1c2326;
//     border-radius: 3px;
//   }
//   .syntax--source.syntax--ink {
//     color: #babebd;
//   }
//   .syntax--jade,
//   .syntax--pug {
//     color: #babebd;
//   }
//   .syntax--jade .syntax--comment,
//   .syntax--pug .syntax--comment {
//     color: #4d5a5e;
//   }
//   .syntax--jade .syntax--name,
//   .syntax--pug .syntax--name {
//     color: #519aba;
//   }
//   .syntax--jade .syntax--entity,
//   .syntax--pug .syntax--entity {
//     color: #519aba;
//   }
//   .syntax--jade .syntax--string,
//   .syntax--pug .syntax--string {
//     color: #519aba;
//   }
//   .syntax--jade .syntax--quoted,
//   .syntax--pug .syntax--quoted {
//     color: #9ac4d7;
//   }
//   .syntax--jade .syntax--attribute-name,
//   .syntax--pug .syntax--attribute-name,
//   .syntax--jade .syntax--id,
//   .syntax--pug .syntax--id {
//     color: #cc3e44 !important;
//   }
//   .syntax--jade .syntax--class,
//   .syntax--pug .syntax--class {
//     color: #8dc149;
//   }
//   .syntax--source.syntax--json
//     .syntax--meta.syntax--structure.syntax--dictionary.syntax--json
//     > .syntax--string.syntax--quoted.syntax--json {
//     color: #519aba;
//   }
//   .syntax--source.syntax--json
//     .syntax--meta.syntax--structure.syntax--dictionary.syntax--json
//     > .syntax--string.syntax--quoted.syntax--json
//     > .syntax--punctuation.syntax--string {
//     color: #519aba;
//   }
//   .syntax--source.syntax--json
//     .syntax--meta.syntax--structure.syntax--dictionary.syntax--json
//     > .syntax--value.syntax--json
//     > .syntax--string.syntax--quoted.syntax--json,
//   .syntax--source.syntax--json
//     .syntax--meta.syntax--structure.syntax--array.syntax--json
//     > .syntax--value.syntax--json
//     > .syntax--string.syntax--quoted.syntax--json,
//   .syntax--source.syntax--json
//     .syntax--meta.syntax--structure.syntax--dictionary.syntax--json
//     > .syntax--value.syntax--json
//     > .syntax--string.syntax--quoted.syntax--json
//     > .syntax--punctuation,
//   .syntax--source.syntax--json
//     .syntax--meta.syntax--structure.syntax--array.syntax--json
//     > .syntax--value.syntax--json
//     > .syntax--string.syntax--quoted.syntax--json
//     > .syntax--punctuation {
//     color: #babebd;
//   }
//   .syntax--source.syntax--json
//     .syntax--meta.syntax--structure.syntax--dictionary.syntax--json
//     > .syntax--constant.syntax--language.syntax--json,
//   .syntax--source.syntax--json
//     .syntax--meta.syntax--structure.syntax--array.syntax--json
//     > .syntax--constant.syntax--language.syntax--json {
//     color: #a074c4;
//   }
//   .syntax--source.syntax--md {
//     color: #babebd;
//   }
//   .syntax--source.syntax--md .syntax--heading-1 {
//     color: #e37933;
//   }
//   .syntax--source.syntax--md .syntax--heading-2 {
//     color: #e68849;
//   }
//   .syntax--source.syntax--md .syntax--heading-3 {
//     color: #e99660;
//   }
//   .syntax--source.syntax--md .syntax--heading-4 {
//     color: #eca576;
//   }
//   .syntax--source.syntax--md .syntax--heading-5 {
//     color: #efb48d;
//   }
//   .syntax--source.syntax--md .syntax--heading-6 {
//     color: #f2c3a3;
//   }
//   .syntax--source.syntax--md .syntax--entity {
//     color: #cbcb41;
//   }
//   .syntax--source.syntax--md .syntax--link {
//     color: #8dc149;
//   }
//   .syntax--source.syntax--md .syntax--link .syntax--entity {
//     color: #a074c4;
//   }
//   .syntax--source.syntax--md .syntax--italic {
//     color: #cbcb41;
//   }
//   .syntax--source.syntax--md .syntax--bold {
//     color: #cbcb41;
//     font-weight: bold;
//   }
//   .syntax--source.syntax--md .syntax--variable.syntax--syntax.syntax--list {
//     color: #a2852f;
//   }
//   .syntax--source.syntax--md .syntax--hr {
//     color: #8dc149;
//   }
//   .syntax--source.syntax--md .syntax--comment.syntax--quote {
//     color: #9ac4d7;
//   }
//   .syntax--source.syntax--md .syntax--support.syntax--quote {
//     color: #0e1112;
//     background-color: #babebd;
//   }
//   .syntax--source.syntax--md .syntax--raw {
//     color: #cc3e44;
//     border: 1px solid #1c2326;
//     background-color: #1c2326;
//     border-radius: 3px;
//   }
//   .syntax--mustache .syntax--meta.syntax--tag.syntax--template {
//     color: #519aba;
//   }
//   .syntax--mustache
//     .syntax--meta.syntax--tag.syntax--template
//     .syntax--entity.syntax--name.syntax--tag {
//     color: #9ac4d7;
//   }
//   .syntax--source.syntax--perl .syntax--pod.syntax--displayed-text {
//     color: #a074c4;
//   }
//   .syntax--source.syntax--perl
//     .syntax--pod.syntax--constant.syntax--character.syntax--entity,
//   .syntax--source.syntax--perl
//     .syntax--pod.syntax--constant.syntax--character.syntax--entity
//     .syntax--entity.syntax--name {
//     color: #a074c4;
//   }
//   .syntax--source.syntax--perl
//     .syntax--pod.syntax--inline.syntax--tag
//     .syntax--punctuation.syntax--begin,
//   .syntax--source.syntax--perl
//     .syntax--pod.syntax--inline.syntax--tag
//     .syntax--punctuation.syntax--end {
//     color: #4d5a5e;
//   }
//   .syntax--source.syntax--python .syntax--class {
//     color: #a074c4;
//   }
//   .syntax--source.syntax--python
//     .syntax--support.syntax--function.syntax--magic,
//   .syntax--source.syntax--python .syntax--inherited-class {
//     color: #93acb7;
//   }
//   .syntax--source.syntax--python
//     .syntax--support.syntax--function.syntax--magic
//     .syntax--support.syntax--function.syntax--builtin.syntax--python,
//   .syntax--source.syntax--python
//     .syntax--inherited-class
//     .syntax--support.syntax--function.syntax--builtin.syntax--python {
//     color: #93acb7;
//   }
//   .syntax--source.syntax--python .syntax--storage,
//   .syntax--source.syntax--python .syntax--keyword {
//     color: #d4d7d6;
//   }
//   .syntax--source.syntax--python .syntax--string {
//     color: #519aba;
//   }
//   .syntax--source.syntax--python .syntax--string.syntax--block {
//     color: #2f6076;
//   }
//   .syntax--source.syntax--python
//     .syntax--string.syntax--block
//     .syntax--keyword {
//     color: #2f6076;
//   }
//   .editor .line.split-diff-added,
//   .editor.editor .line.split-diff-added {
//     background: #8dc149 !important;
//     color: rgba(0, 0, 0, 0.5) !important;
//   }
//   .editor .line.split-diff-added .syntax--text span,
//   .editor.editor .line.split-diff-added .syntax--text span,
//   .editor .line.split-diff-added .syntax--source span,
//   .editor.editor .line.split-diff-added .syntax--source span {
//     color: rgba(0, 0, 0, 0.5) !important;
//   }
//   .editor .line.split-diff-added .indent-guide,
//   .editor.editor .line.split-diff-added .indent-guide {
//     opacity: 0;
//   }
//   .editor .line.split-diff-removed,
//   .editor.editor .line.split-diff-removed {
//     background: #cc3e44 !important;
//     color: rgba(255, 255, 255, 0.8) !important;
//   }
//   .editor .line.split-diff-removed .syntax--text span,
//   .editor.editor .line.split-diff-removed .syntax--text span,
//   .editor .line.split-diff-removed .syntax--source span,
//   .editor.editor .line.split-diff-removed .syntax--source span {
//     color: rgba(255, 255, 255, 0.8) !important;
//   }
//   .editor .line.split-diff-removed .indent-guide,
//   .editor.editor .line.split-diff-removed .indent-guide {
//     opacity: 0;
//   }
// `
