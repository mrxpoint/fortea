import isNil from "../isNil"
import toNumber from "../toNumber"

interface skipTakeOptions {
    defaultPage?: number
    defaultPageSize?: number
    maxPageSize?: number
    maxPage?: number
    minPageSize?: number
    minPage?: number
    allowAll?: boolean
}

interface skipTakePagination {
    page?: number | string
    pageSize?: number | string
}

interface skipTakeResult {
    skip?: number
    take?: number
    page: number
    pageSize: number
}

/**
 * @name skipTake
 * @description skip take pagination function for prisma orm
 * @example
 *    const { skip, take } = skipTake({ page: 2, pageSize: 10 })  // skip: 10, take: 10
 *
 *    const { skip, take } = skipTake({ page: 2, pageSize: -1 })  // skip: undefined, take: undefined
 *
 *    const { skip, take } = skipTake({ page: 1, pageSize: -1 }, { allowAll: false })  // skip: 0, take: 10  (pageSize = minPageSize || defaultPageSize)
 */
function skipTake(pagination?: skipTakePagination, options?: skipTakeOptions): skipTakeResult {
    let { page, pageSize } = pagination || {}
    const {
        defaultPage = 1,
        defaultPageSize = 10,
        maxPageSize,
        maxPage,
        minPageSize,
        minPage,
        allowAll = true,
    } = options || {}
    page = isNil(page) ? defaultPage : toNumber(page, true)
    pageSize = isNil(pageSize) ? defaultPageSize : toNumber(pageSize, true)
    if (maxPageSize && pageSize > maxPageSize) pageSize = maxPageSize
    if (maxPage && page > maxPage) page = maxPage
    if (minPageSize && pageSize < minPageSize) pageSize = minPageSize
    if (minPage && page < minPage) page = minPage
    if (!Number.isFinite(page)) page = defaultPage
    if (!Number.isFinite(pageSize)) pageSize = defaultPageSize
    if (pageSize < 1 && allowAll) {
        return {
            skip: undefined,
            take: undefined,
            page,
            pageSize,
        }
    } else {
        if (pageSize < 1) pageSize = minPageSize || defaultPageSize
        return {
            skip: (page - 1) * pageSize,
            take: pageSize,
            page,
            pageSize,
        }
    }
}

export default skipTake
