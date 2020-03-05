// Type definitions for ldflex 2.8
// Project: https://github.com/LDflex/LDflex
// Definitions by: Fuubi <https://github.com/FUUbi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { NamedNode } from 'rdf-js'

// @ts-ignore circular reference
export type Proxy = {
    subject: Promise<Proxy>
    predicate: Promise<Proxy>
    properties: any,
    predicates: Proxy
    pathExpression: Promise<Proxy>
    sparql: any
    subjects: Proxy
    result: any
    sort(): Proxy
    sortDesc(): Proxy
    preload(): Promise<Proxy>

    mutationExpressions: any[]
    add(...args: any[] | Proxy): Promise<Proxy>
    set(...args: any[] | Proxy): Promise<Proxy>
    replace(): any
    delete(): Promise<Proxy>


    termType: Promise<string> | string
    value: Promise<string> | string
    datatype: Promise<{ id: string }> | { id: string }
    language: Promise<string> | string
    equals(other: Proxy): boolean
    toString(): Promise<string> | string
    toPrimitive(): Promise<string> | string

    toArray(): Promise<Proxy[]>
    termTypes: Promise<string[]> | string[]
    values: Promise<string[]> | string[]
    datatypes: Promise<{ id: string }> | { id: string }
    languages: Promise<string[]> | string[]

    resolve(): Proxy

} & { [key: string]: Proxy }


export class PathFactory {
    constructor(settings: any)
    create(node: { subject: NamedNode }): Proxy
}
