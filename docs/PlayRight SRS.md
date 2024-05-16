## Software Requirements Specification for 
# PlayRight (Working Title)

## Table of Contents

- [Introduction](#intro)
- [Script Parser](#script)
    - [Accepted Formats](#formats)
    - [Pattern Queries](#pattern)
- [Character Assignment](#char)
- [Positional GUI](#pgui)
- [Acting Annotation](#act)
- [Cue System](#cue)
- [Data Management](#data)
- [Script Syncing](#sync)

## Introduction <a id='intro'></a>

## Script Parser <a id='script'></a>

### Deconstructing Script Strings <a id='formats'></a>

Before they can be added to our database, scripts need to be broken into their smallest components. This diagram describes the proposed way to deconstruct the script.

```mermaid
flowchart TD
    A[script]-->B[name]
    A-->C[description]
    A-->D[characters]
    A-->E[scenes]
    E-->F[name]
    E-->G[lines]
    E-->H[index]
    G-->I[dialogue]
    G-->J[character]
    G-->K[index]
    J-->M[name]-->L[index]
    D-->N[name]-->L
```
Each smaller unit needs to be recorded in relation to the units that contain it.

### Regular Expressions

The easiest way to differentiate different parts of the script will be to use regular expressions. This comes with certain limitations, such as requiring a specific script format, however, such limitations are unavoidable. The regular expressions for each part are:
- Name `/^.*/m`
- Characters `/\b[A-Z][A-Za-z\s]*\b:/g`
- Scene `/SCENE\s+\d+:(.*?)(?=SCENE\s+\d+:|$)/gs`
    - Name `/^SCENE\s+\d+:(.*?)(?=\n)/gm`
- Line `/\b[A-Z][A-Za-z\s]*\b:(.*?)(?=\n[A-Z][A-Za-z\s]*:|$)/g`
    - Character `/\b[A-Z][A-Za-z\s]*\b:/g`
    - Dialogue `/:(.*?)(?=\n|$)/g`

## Character Assignment <a id='char'></a>

## Positional GUI <a id='pgui'></a>

## Acting Annotation <a id='act'></a>

## Cue System <a id='cue'></a>

## Data Management <a id='data'></a>

## Script Syncing <a id='sync'></a>
