---
sidebarDepth: 0
---

# bal-pagination


<!-- START: human documentation top -->

Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.

<!-- END: human documentation top -->

:::: tabs :options="{ useUrlFragment: false }"

::: tab Examples

## Basic

<ClientOnly><docs-demo-bal-pagination-76></docs-demo-bal-pagination-76></ClientOnly>


:::

::: tab Code

## Properties


| Attribute       | Description                                                      | Type      | Default |
| :-------------- | :--------------------------------------------------------------- | :-------- | :------ |
| **disabled**    | Disables component                                               | `boolean` | `false` |
| **page-range**  | Specify the max visible pages before and after the selected page | `number`  | `2`     |
| **total-pages** | The total amount of pages                                        | `number`  | `1`     |
| **value**       | Current selected page                                            | `number`  | `1`     |

## Events


| Event         | Description                         | Type     |
| :------------ | :---------------------------------- | :------- |
| **balChange** | Triggers when a page change happens | `number` |

## Methods


| Method         | Description            | Signature                     |
| :------------- | :--------------------- | :---------------------------- |
| **`next`**     | Go to the next page    | `next() => Promise<void>`     |
| **`previous`** | Go to the prvious page | `previous() => Promise<void>` |


:::

::: tab Usage

<!-- START: human documentation usage -->

<!-- END: human documentation usage -->

:::


::::

## Edit this page on Github

* [Documentation on Github](https://github.com/baloise/design-system/blob/master/docs/src/components/components/bal-pagination.md)
* [Implementation on Github](https://github.com/baloise/design-system/blob/master/packages/components/src/components/bal-pagination)

## Feedback

Help us improve this component by providing feedback, asking questions, and leaving any other comments on [GitHub](https://github.com/baloise/design-system/issues/new).

